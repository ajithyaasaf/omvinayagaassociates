// Consolidated Vercel API route for admin data (contacts and inquiries)
import { getDataFromFirebase } from './firebase-data.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  try {
    const { type } = req.query;
    
    // Handle GET requests for different data types
    if (req.method === 'GET') {
      if (type === 'contacts') {
        console.log('Fetching contacts from Firebase...');
        const contacts = await getDataFromFirebase('contacts');
        console.log(`Found ${contacts.length} contacts`);
        return res.status(200).json(contacts);
      } else if (type === 'inquiries') {
        console.log('Fetching inquiries from Firebase...');
        const inquiries = await getDataFromFirebase('inquiries');
        console.log(`Found ${inquiries.length} inquiries`);
        return res.status(200).json(inquiries);
      } else {
        return res.status(400).json({ error: 'Invalid data type. Use ?type=contacts or ?type=inquiries' });
      }
    }
    
    // If we get here, the method is not supported
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error in Admin Data API handler:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}