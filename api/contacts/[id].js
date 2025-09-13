// Enterprise-grade API handler for /api/contacts/[id]
import { deleteFromFirebase } from '../firebase-operations.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Extract ID from query
  const { id } = req.query;
  
  if (!id || isNaN(parseInt(id))) {
    return res.status(400).json({
      success: false,
      error: 'Valid contact ID is required'
    });
  }
  
  try {
    // Handle DELETE requests with enterprise-grade transactional operations
    if (req.method === 'DELETE') {
      console.log('Deleting contact with ID:', id);
      const result = await deleteFromFirebase('contacts', id);
      
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
    console.error('Error in Contact DELETE handler:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}