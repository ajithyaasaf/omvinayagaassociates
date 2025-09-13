// Enterprise-grade Firebase operations with transactions and error handling
import { initializeApp } from 'firebase/app';
import { 
  getDatabase, ref, set, get, remove, runTransaction, update,
  query, orderByChild, limitToLast, limitToFirst, startAt, endAt
} from 'firebase/database';

// Get Firebase config
const getFirebaseConfig = () => {
  return {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  };
};

// Initialize Firebase app
let firebaseApp;
try {
  const firebaseConfig = getFirebaseConfig();
  firebaseApp = initializeApp(firebaseConfig);
} catch (error) {
  console.error('Error initializing Firebase:', error);
}

// Retry mechanism for Firebase operations
const withRetry = async (operation, maxRetries = 3, delay = 1000) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error.message);
      
      if (attempt === maxRetries) {
        throw new Error(`Operation failed after ${maxRetries} attempts: ${error.message}`);
      }
      
      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, attempt - 1)));
    }
  }
};

// Get paginated data from Firebase (solves scalability issue)
const getPaginatedDataFromFirebase = async (path, options = {}) => {
  const { 
    page = 1, 
    limit = 50, 
    sortBy = 'createdAt', 
    sortOrder = 'desc',
    startDate = null,
    endDate = null 
  } = options;

  return withRetry(async () => {
    const db = getDatabase(firebaseApp);
    const dataRef = ref(db, path);
    
    // Build query with filtering and pagination
    let dataQuery = query(dataRef, orderByChild(sortBy));
    
    // Apply date filtering if provided
    if (startDate) {
      dataQuery = query(dataQuery, startAt(startDate));
    }
    if (endDate) {
      dataQuery = query(dataQuery, endAt(endDate));
    }
    
    // Apply pagination
    if (sortOrder === 'desc') {
      dataQuery = query(dataQuery, limitToLast(limit * page));
    } else {
      dataQuery = query(dataQuery, limitToFirst(limit * page));
    }
    
    const snapshot = await get(dataQuery);
    
    if (snapshot.exists()) {
      const data = snapshot.val();
      let items = [];
      
      if (data && typeof data === 'object') {
        items = Object.values(data).filter(item => item !== null && item !== undefined);
      }
      
      // Apply client-side pagination (server-side limits total, client-side gets the page)
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedItems = items.slice(startIndex, endIndex);
      
      return {
        data: paginatedItems,
        pagination: {
          page,
          limit,
          total: items.length,
          totalPages: Math.ceil(items.length / limit),
          hasNext: endIndex < items.length,
          hasPrev: page > 1
        }
      };
    }
    
    return {
      data: [],
      pagination: {
        page: 1,
        limit,
        total: 0,
        totalPages: 0,
        hasNext: false,
        hasPrev: false
      }
    };
  });
};

// Get data from Firebase (with caching strategy)
const getDataFromFirebase = async (path, useCache = true) => {
  // Simple in-memory cache (in production, use Redis or similar)
  const cache = getDataFromFirebase._cache || (getDataFromFirebase._cache = new Map());
  const cacheKey = path;
  const cacheTimeout = 30000; // 30 seconds
  
  if (useCache && cache.has(cacheKey)) {
    const cached = cache.get(cacheKey);
    if (Date.now() - cached.timestamp < cacheTimeout) {
      console.log(`Cache hit for ${path}`);
      return cached.data;
    }
  }

  return withRetry(async () => {
    const db = getDatabase(firebaseApp);
    const dataRef = ref(db, path);
    const snapshot = await get(dataRef);
    
    let result = [];
    if (snapshot.exists()) {
      const data = snapshot.val();
      
      // Convert object to array if it's not already one
      if (data && typeof data === 'object' && !Array.isArray(data)) {
        result = Object.values(data).filter(item => item !== null && item !== undefined);
      } else {
        result = Array.isArray(data) ? data.filter(item => item !== null) : [];
      }
    }
    
    // Cache the result
    if (useCache) {
      cache.set(cacheKey, { data: result, timestamp: Date.now() });
    }
    
    return result;
  });
};

// Clear cache for a specific path
const clearCache = (path) => {
  const cache = getDataFromFirebase._cache;
  if (cache && cache.has(path)) {
    cache.delete(path);
    console.log(`Cache cleared for ${path}`);
  }
};

// Array-optimized transactional delete from Firebase (handles current data structure)
const deleteFromFirebaseTransactional = async (path, id) => {
  return withRetry(async () => {
    const db = getDatabase(firebaseApp);
    const collectionRef = ref(db, path);
    
    console.log(`Attempting to delete item with ID ${id} from ${path}`);
    
    // Get current array data
    const collectionSnapshot = await get(collectionRef);
    
    if (!collectionSnapshot.exists()) {
      console.log(`Collection ${path} does not exist`);
      return { success: false, message: 'Collection not found' };
    }
    
    const data = collectionSnapshot.val();
    console.log(`Current data in ${path}:`, data);
    
    // Handle array structure (current Firebase structure)
    if (Array.isArray(data)) {
      const targetIndex = data.findIndex(item => item && item.id === parseInt(id));
      console.log(`Looking for item with ID ${id}, found at index:`, targetIndex);
      
      if (targetIndex !== -1) {
        // Use transaction to safely remove from array by setting to null (preserves array structure)
        const result = await runTransaction(collectionRef, (currentData) => {
          if (!Array.isArray(currentData) || !currentData[targetIndex] || currentData[targetIndex].id !== parseInt(id)) {
            console.log('Transaction aborted: data structure changed');
            return undefined; // Abort if structure changed
          }
          
          // Set item to null to preserve array indices (Firebase pattern)
          const newData = [...currentData];
          newData[targetIndex] = null;
          
          console.log(`Setting index ${targetIndex} to null`);
          return newData;
        });
        
        if (result.committed) {
          console.log(`Successfully deleted item with ID ${id} from ${path} (array structure)`);
          clearCache(path);
          return { success: true };
        } else {
          console.log('Transaction failed to commit - likely Firebase rules blocking delete operation');
          console.log('Error details:', result.error || 'No error details available');
          return { success: false, message: 'Transaction failed - Firebase rules may be blocking delete operations' };
        }
      } else {
        console.log(`Item with ID ${id} not found in array`);
        return { success: false, message: `Item with ID ${id} not found` };
      }
    }
    // Handle object structure (fallback)
    else if (data && typeof data === 'object') {
      let targetKey = null;
      for (const key in data) {
        if (data[key] && data[key].id === parseInt(id)) {
          targetKey = key;
          break;
        }
      }
      
      if (targetKey) {
        const targetRef = ref(db, `${path}/${targetKey}`);
        const result = await runTransaction(targetRef, (currentData) => {
          if (currentData === null) {
            return undefined; // Already deleted
          }
          return null; // Delete the item
        });
        
        if (result.committed) {
          console.log(`Successfully deleted item with ID ${id} from ${path} (object structure)`);
          clearCache(path);
          return { success: true };
        } else {
          console.log('Transaction failed to commit for object structure - likely Firebase rules blocking delete operation');
          console.log('Error details:', result.error || 'No error details available');
          return { success: false, message: 'Transaction failed - Firebase rules may be blocking delete operations' };
        }
      }
    }
    
    console.log(`No deletion strategy worked for ID ${id} in ${path}`);
    return { success: false, message: `Item with ID ${id} not found in ${path}` };
  });
};

// Transactional create in Firebase (fixes race conditions for ID generation)
const createDataInFirebaseTransactional = async (path, data) => {
  return withRetry(async () => {
    const db = getDatabase(firebaseApp);
    const pathRef = ref(db, path);
    
    // Use transaction to safely generate ID and create record
    const result = await runTransaction(pathRef, (currentData) => {
      let newId = 1;
      let existingIds = [];
      
      if (currentData !== null && typeof currentData === 'object') {
        existingIds = Object.keys(currentData)
          .filter(key => !isNaN(parseInt(key)) && currentData[key] !== null)
          .map(key => parseInt(key));
        
        if (existingIds.length > 0) {
          newId = Math.max(...existingIds) + 1;
        }
      }
      
      // Clean the data to ensure no undefined values
      const cleanData = {
        name: data.name || "",
        email: data.email || null,
        phone: data.phone || "",
        id: newId,
        createdAt: new Date().toISOString()
      };
      
      // Add type-specific fields
      if (data.issueType !== undefined) cleanData.issueType = data.issueType || "";
      if (data.message !== undefined) cleanData.message = data.message || null;
      if (data.address !== undefined) cleanData.address = data.address || null;
      if (data.service !== undefined) cleanData.service = data.service || "";
      if (data.consent !== undefined) cleanData.consent = data.consent;
      if (data.location !== undefined) cleanData.location = data.location || null;
      if (data.timePreference !== undefined) cleanData.timePreference = data.timePreference || null;
      
      // Remove any undefined values completely
      Object.keys(cleanData).forEach(key => {
        if (cleanData[key] === undefined) {
          delete cleanData[key];
        }
      });
      
      // Return new state with the new item
      const newData = currentData || {};
      newData[newId] = cleanData;
      
      return newData;
    });
    
    if (result.committed && result.snapshot.exists()) {
      const newData = result.snapshot.val();
      const newId = Math.max(...Object.keys(newData).map(k => parseInt(k)));
      const createdItem = newData[newId];
      
      console.log('Created data with transaction:', createdItem);
      clearCache(path); // Clear cache after successful creation
      
      return { success: true, data: createdItem };
    } else {
      throw new Error('Transaction failed to commit');
    }
  });
};

// Bulk operations with transactions
const bulkDeleteFromFirebase = async (path, ids) => {
  return withRetry(async () => {
    const db = getDatabase(firebaseApp);
    const updates = {};
    
    // Prepare bulk delete operation
    ids.forEach(id => {
      updates[`${path}/${id}`] = null;
    });
    
    await update(ref(db), updates);
    clearCache(path);
    
    return { success: true, deletedCount: ids.length };
  });
};

// Firebase backup function
const createBackup = async (paths = ['inquiries', 'contacts', 'intents']) => {
  return withRetry(async () => {
    const db = getDatabase(firebaseApp);
    const backup = {
      timestamp: new Date().toISOString(),
      data: {}
    };
    
    for (const path of paths) {
      const snapshot = await get(ref(db, path));
      backup.data[path] = snapshot.exists() ? snapshot.val() : {};
    }
    
    // Store backup with timestamp
    const backupRef = ref(db, `backups/${Date.now()}`);
    await set(backupRef, backup);
    
    console.log('Backup created successfully:', backup.timestamp);
    return { success: true, backup };
  });
};

// Automated backup scheduler (call this periodically) - with singleton guard
let backupScheduled = false;
const scheduleBackups = () => {
  // Only schedule if not already scheduled and in production environment
  if (!backupScheduled && process.env.NODE_ENV === 'production') {
    backupScheduled = true;
    console.log('Starting backup scheduler...');
    
    // Create backup every 6 hours
    setInterval(async () => {
      try {
        await createBackup();
        console.log('Scheduled backup completed');
      } catch (error) {
        console.error('Scheduled backup failed:', error);
      }
    }, 6 * 60 * 60 * 1000); // 6 hours
  }
};

export {
  getDataFromFirebase,
  getPaginatedDataFromFirebase,
  deleteFromFirebaseTransactional,
  createDataInFirebaseTransactional,
  bulkDeleteFromFirebase,
  createBackup,
  scheduleBackups,
  clearCache,
  withRetry
};

// Aliases for backward compatibility
export const deleteFromFirebase = deleteFromFirebaseTransactional;
export const createDataInFirebase = createDataInFirebaseTransactional;