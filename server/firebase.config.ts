export const getFirebaseConfig = () => {
  // Fallback credentials for local development
  // In production, these should be set via environment variables
  const apiKey = process.env.FIREBASE_API_KEY || 'AIzaSyA_z0qWOAl1UIKd-eVP_9Q-o24tYu97T3k';
  const authDomain = process.env.FIREBASE_AUTH_DOMAIN || 'om-vinayaga-associates.firebaseapp.com';
  const databaseURL = process.env.FIREBASE_DATABASE_URL || 'https://om-vinayaga-associates-default-rtdb.firebaseio.com';
  const projectId = process.env.FIREBASE_PROJECT_ID || 'om-vinayaga-associates';
  const storageBucket = process.env.FIREBASE_STORAGE_BUCKET || 'om-vinayaga-associates.firebasestorage.app';
  const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID || '275733848538';
  const appId = process.env.FIREBASE_APP_ID || '1:275733848538:web:9528676a7fbd29190da0e3';
  const measurementId = process.env.FIREBASE_MEASUREMENT_ID || 'G-06H69CNSS1';

  // Always configured since we have fallback values
  const isConfigured = true;

  return {
    isConfigured,
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
  };
};
