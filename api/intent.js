// Vercel serverless function for handling chatbot appointment submissions
import { createDataInFirebase } from './firebase-data.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle OPTIONS method for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only handle POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const body = req.body;
    
    // Validate required fields
    if (!body.name || !body.phone || !body.consent) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, phone, consent'
      });
    }

    // Prepare intent data for Firebase (matching the schema)
    const intentData = {
      name: String(body.name || '').trim(),
      phone: String(body.phone || '').trim(), 
      service: String(body.service || 'Building Diagnosis').trim(),
      message: String(body.message || 'Appointment booked via chatbot for building diagnosis').trim(),
      location: body.location ? String(body.location).trim() : null,
      issueType: body.issueType ? String(body.issueType).trim() : null,
      timePreference: body.timePreference ? String(body.timePreference).trim() : 'Flexible timing',
      consent: Boolean(body.consent)
    };

    // Use the Firebase helper function to create the intent
    const result = await createDataInFirebase('intents', intentData);

    if (result.success) {
      return res.status(200).json({
        success: true,
        message: 'Intent form submitted successfully',
        intent: result.data
      });
    } else {
      throw new Error(result.message || 'Failed to save intent data');
    }

  } catch (error) {
    console.error('Intent form creation error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process intent form',
      error: error.message
    });
  }
}