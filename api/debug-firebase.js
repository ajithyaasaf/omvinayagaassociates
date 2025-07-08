// Debug endpoint to check Firebase configuration in Vercel
import { getFirebaseConfig } from './firebase-config.js';

export default function handler(req, res) {
  try {
    const config = getFirebaseConfig();
    
    // Check which environment variables are available
    const envCheck = {
      FIREBASE_API_KEY: !!process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: !!process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_DATABASE_URL: !!process.env.FIREBASE_DATABASE_URL,
      FIREBASE_PROJECT_ID: !!process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: !!process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: !!process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: !!process.env.FIREBASE_APP_ID,
      NODE_ENV: process.env.NODE_ENV || 'unknown'
    };

    // Safe configuration check (without exposing actual values)
    const configCheck = {
      hasApiKey: !!config.apiKey,
      hasProjectId: !!config.projectId,
      projectId: config.projectId || 'missing',
      hasDatabaseURL: !!config.databaseURL,
      hasStorageBucket: !!config.storageBucket,
      configComplete: !!(config.apiKey && config.projectId && config.databaseURL)
    };

    res.status(200).json({
      message: 'Firebase debug information',
      environment: envCheck,
      configuration: configCheck,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      error: 'Debug check failed',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
}