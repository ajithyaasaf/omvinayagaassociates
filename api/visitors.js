// Vercel serverless function for visitor tracking
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, increment, connectFirestoreEmulator } from 'firebase/firestore';
import { getFirebaseConfig } from './firebase-config.js';

// Initialize Firebase app for this serverless function
let app;
let db;

function initFirebase() {
  try {
    if (!app) {
      const config = getFirebaseConfig();
      
      // Check if Firebase is already initialized
      const existingApps = getApps();
      if (existingApps.length === 0) {
        app = initializeApp(config);
      } else {
        app = existingApps[0];
      }
      
      db = getFirestore(app);
    }
    return db;
  } catch (error) {
    console.error('Firebase initialization error:', error);
    throw new Error('Failed to initialize Firebase');
  }
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const firestore = initFirebase();
    
    if (req.method === 'GET') {
      // Get current visitor count
      try {
        const visitorRef = doc(firestore, 'analytics', 'visitors');
        const visitorDoc = await getDoc(visitorRef);
        
        if (visitorDoc.exists()) {
          const data = visitorDoc.data();
          res.status(200).json({ totalVisits: data.totalVisits || 0 });
        } else {
          // Initialize if document doesn't exist
          await setDoc(visitorRef, { totalVisits: 1, lastUpdated: new Date() });
          res.status(200).json({ totalVisits: 1 });
        }
      } catch (firestoreError) {
        console.error('Firestore error:', firestoreError);
        // Fallback to a default count if Firestore fails
        res.status(200).json({ totalVisits: 0, error: 'Database temporarily unavailable' });
      }
    } else if (req.method === 'POST') {
      // Increment visitor count
      try {
        const visitorRef = doc(firestore, 'analytics', 'visitors');
        
        // Use Firestore's atomic increment
        await setDoc(visitorRef, {
          totalVisits: increment(1),
          lastUpdated: new Date()
        }, { merge: true });
        
        // Get updated count
        const updatedDoc = await getDoc(visitorRef);
        const data = updatedDoc.data();
        
        res.status(200).json({ totalVisits: data.totalVisits || 1 });
      } catch (firestoreError) {
        console.error('Firestore increment error:', firestoreError);
        res.status(500).json({ error: 'Failed to increment visitor count' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Firebase initialization error:', error);
    res.status(500).json({ error: 'Firebase initialization failed' });
  }
}