// Enterprise-grade Firebase data endpoints for Vercel
import { 
  getDataFromFirebase,
  getPaginatedDataFromFirebase, 
  deleteFromFirebase,
  createDataInFirebase,
  createBackup,
  scheduleBackups
} from './firebase-operations.js';

// Start automated backup scheduling
scheduleBackups();

// Handler for API routes with enhanced enterprise features
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Extract the path from the URL
  const { url, query } = req;
  const pathMatch = url.match(/\/api\/([a-zA-Z]+)(\/(\d+))?$/);
  
  if (!pathMatch || !pathMatch[1]) {
    return res.status(400).json({ error: 'Invalid API path' });
  }
  
  const dataType = pathMatch[1];
  const id = pathMatch[3]; // This will be undefined for collection-level endpoints
  let firebasePath;
  
  // Map API endpoint to Firebase data path
  switch (dataType) {
    case 'inquiries':
      firebasePath = 'inquiries';
      break;
    case 'contacts':
      firebasePath = 'contacts';
      break;
    case 'intents':
      firebasePath = 'intents';
      break;
    case 'products':
      firebasePath = 'products';
      break;
    case 'services':
      firebasePath = 'services';
      break;
    case 'testimonials':
      firebasePath = 'testimonials';
      break;
    case 'faqs':
      firebasePath = 'faqs';
      break;
    case 'backup':
      // Special endpoint for manual backups
      if (req.method === 'POST') {
        try {
          const backup = await createBackup();
          return res.status(200).json({
            success: true,
            message: 'Backup created successfully',
            backup
          });
        } catch (error) {
          console.error('Manual backup failed:', error);
          return res.status(500).json({
            success: false,
            message: 'Backup creation failed',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
          });
        }
      }
      return res.status(405).json({ error: 'Method not allowed for backup endpoint' });
    default:
      return res.status(404).json({ error: 'Data type not found' });
  }
  
  try {
    // Handle GET requests with pagination support
    if (req.method === 'GET') {
      // Check if pagination is requested
      const page = parseInt(query.page) || 1;
      const limit = parseInt(query.limit) || 50;
      const usePagination = query.page || query.limit;
      
      if (usePagination) {
        // Use paginated API for better performance
        const paginationOptions = {
          page,
          limit,
          sortBy: query.sortBy || 'createdAt',
          sortOrder: query.sortOrder || 'desc',
          startDate: query.startDate || null,
          endDate: query.endDate || null
        };
        
        const result = await getPaginatedDataFromFirebase(firebasePath, paginationOptions);
        
        // Special handling for products to match existing API format
        if (dataType === 'products') {
          return res.status(200).json({
            success: true,
            products: result.data,
            pagination: result.pagination
          });
        }
        
        return res.status(200).json({
          success: true,
          data: result.data,
          pagination: result.pagination
        });
      } else {
        // Use regular API for backwards compatibility
        let data = await getDataFromFirebase(firebasePath);
        
        // Special handling for products to match existing API format
        if (dataType === 'products') {
          return res.status(200).json({
            success: true,
            products: Array.isArray(data) ? data : []
          });
        }
        
        // For all other endpoints, return array directly
        if (data && typeof data === 'object' && !Array.isArray(data)) {
          const arrayData = Object.values(data).filter(item => item !== null && item !== undefined);
          return res.status(200).json(arrayData);
        }
        return res.status(200).json(Array.isArray(data) ? data.filter(item => item !== null) : []);
      }
    }
    
    // Handle POST requests - for form submissions with improved validation
    if (req.method === 'POST') {
      console.log('=== API FIREBASE-DATA POST REQUEST ===');
      console.log('Data type:', dataType);
      console.log('Firebase path:', firebasePath);
      console.log('Raw request body:', req.body);
      
      const formData = req.body;
      
      if (!formData) {
        console.log('ERROR: No form data received');
        return res.status(400).json({ 
          success: false,
          error: 'Request body is required' 
        });
      }
      
      // Enhanced validation based on data type
      console.log('Starting validation for:', dataType);
      const validationResult = validateFormData(dataType, formData);
      console.log('Validation result:', validationResult);
      
      if (!validationResult.isValid) {
        console.log('VALIDATION FAILED:', validationResult.errors);
        return res.status(400).json({
          success: false,
          error: 'Invalid form data',
          details: validationResult.errors
        });
      }
      
      console.log('Validation passed! Creating data...');
      console.log(`Creating ${dataType} with data:`, formData);
      
      // Create data using transactional operation
      const result = await createDataInFirebase(firebasePath, formData);
      console.log('Firebase creation result:', result);
      
      if (result.success) {
        console.log('SUCCESS: Data created successfully');
        return res.status(200).json({
          success: true,
          message: `${dataType.slice(0, -1)} created successfully`,
          data: result.data
        });
      } else {
        console.log('ERROR: Firebase creation failed:', result.message);
        throw new Error(result.message);
      }
    }
    
    // Handle DELETE requests for individual items
    if (req.method === 'DELETE' && id) {
      console.log(`Deleting ${dataType} with ID: ${id}`);
      
      // Use transactional delete operation
      const result = await deleteFromFirebase(firebasePath, id);
      
      if (result.success) {
        return res.status(200).json({
          success: true,
          message: `${dataType.slice(0, -1)} deleted successfully`
        });
      } else {
        return res.status(404).json({
          success: false,
          message: result.message || 'Item not found'
        });
      }
    }
    
    // If we get here, the method is not supported
    return res.status(405).json({ error: 'Method not allowed' });
    
  } catch (error) {
    console.error(`Error in ${dataType} API handler:`, error);
    return res.status(500).json({ 
      success: false,
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

// Enhanced form validation function
function validateFormData(dataType, data) {
  const errors = [];
  
  // Common validations
  if (!data.name || data.name.trim().length < 1) {
    errors.push('Name is required');
  }
  
  if (!data.phone || data.phone.trim().length < 5) {
    errors.push('Valid phone number is required');
  }
  
  // Type-specific validations
  switch (dataType) {
    case 'contacts':
      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.push('Valid email address is required');
      }
      if (!data.service || data.service.trim().length < 1) {
        errors.push('Service selection is required');
      }
      if (!data.message || data.message.trim().length < 5) {
        errors.push('Message must be at least 5 characters');
      }
      if (data.consent !== true) {
        errors.push('Consent agreement is required');
      }
      break;
      
    case 'inquiries':
      if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.push('Invalid email address format');
      }
      break;
      
    case 'intents':
      if (data.consent !== undefined && data.consent !== true) {
        errors.push('Consent agreement is required');
      }
      break;
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}