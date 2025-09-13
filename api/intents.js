// Vercel API route for intents (GET all intents, POST new intent, DELETE specific intent)
import { getDataFromFirebase, deleteFromFirebaseTransactional, createDataInFirebaseTransactional } from './firebase-operations.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  try {
    // Handle GET requests
    if (req.method === 'GET') {
      console.log('Fetching intents from Firebase...');
      const intents = await getDataFromFirebase('intents');
      
      console.log(`Found ${intents.length} intents`);
      return res.status(200).json(intents);
    }
    
    // Handle POST requests (form submissions)
    if (req.method === 'POST') {
      console.log('Creating new intent:', req.body);
      const formData = req.body;
      
      if (!formData) {
        return res.status(400).json({ 
          success: false,
          error: 'Request body is required' 
        });
      }
      
      // Basic validation
      if (!formData.name || !formData.phone) {
        return res.status(400).json({
          success: false,
          error: 'Name and phone are required'
        });
      }
      
      const result = await createDataInFirebaseTransactional('intents', formData);
      
      if (result.success) {
        return res.status(200).json({
          success: true,
          message: 'Intent created successfully',
          data: result.data
        });
      } else {
        throw new Error(result.message);
      }
    }
    
    // Handle DELETE requests
    if (req.method === 'DELETE') {
      const { id } = req.query;
      
      if (!id || isNaN(parseInt(id))) {
        return res.status(400).json({
          success: false,
          error: 'Valid intent ID is required'
        });
      }
      
      console.log('Deleting intent with ID:', id);
      const result = await deleteFromFirebaseTransactional('intents', id);
      
      if (result.success) {
        return res.status(200).json({
          success: true,
          message: 'Intent deleted successfully'
        });
      } else {
        return res.status(404).json({
          success: false,
          message: result.message || 'Intent not found'
        });
      }
    }
    
    // If we get here, the method is not supported
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error in Intents API handler:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}