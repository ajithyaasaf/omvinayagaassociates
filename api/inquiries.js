// Vercel API route for inquiries (GET all inquiries, DELETE specific inquiry)
import { getDataFromFirebase, deleteFromFirebaseTransactional } from './firebase-operations.js';

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
      console.log('Fetching inquiries from Firebase...');
      const inquiries = await getDataFromFirebase('inquiries');
      
      console.log(`Found ${inquiries.length} inquiries`);
      return res.status(200).json(inquiries);
    }
    
    // Handle DELETE requests
    if (req.method === 'DELETE') {
      const { id } = req.query;
      
      if (!id || isNaN(parseInt(id))) {
        return res.status(400).json({
          success: false,
          error: 'Valid inquiry ID is required'
        });
      }
      
      console.log('Deleting inquiry with ID:', id);
      const result = await deleteFromFirebaseTransactional('inquiries', id);
      
      if (result.success) {
        return res.status(200).json({
          success: true,
          message: 'Inquiry deleted successfully'
        });
      } else {
        return res.status(404).json({
          success: false,
          message: result.message || 'Inquiry not found'
        });
      }
    }
    
    // If we get here, the method is not supported
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error in Inquiries API handler:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}