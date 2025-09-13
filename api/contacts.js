// Vercel API route for contacts (GET all contacts, DELETE specific contact)
import { getDataFromFirebase, deleteFromFirebaseTransactional } from './firebase-data.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  try {
    // Handle GET requests
    if (req.method === 'GET') {
      console.log('Fetching contacts from Firebase...');
      const contacts = await getDataFromFirebase('contacts');
      
      console.log(`Found ${contacts.length} contacts`);
      return res.status(200).json(contacts);
    }
    
    // Handle DELETE requests
    if (req.method === 'DELETE') {
      const { id } = req.query;
      
      if (!id || isNaN(parseInt(id))) {
        return res.status(400).json({
          success: false,
          error: 'Valid contact ID is required'
        });
      }
      
      console.log('Deleting contact with ID:', id);
      const result = await deleteFromFirebaseTransactional('contacts', id);
      
      if (result.success) {
        return res.status(200).json({
          success: true,
          message: 'Contact deleted successfully'
        });
      } else {
        return res.status(404).json({
          success: false,
          message: result.message || 'Contact not found'
        });
      }
    }
    
    // If we get here, the method is not supported
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error in Contacts API handler:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}