// Simple test endpoint for visitor counter debugging
export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    // Return a simple test response
    res.status(200).json({ 
      totalVisits: 4,
      message: 'Test endpoint working',
      timestamp: new Date().toISOString()
    });
  } else if (req.method === 'POST') {
    // Return incremented test count
    res.status(200).json({ 
      totalVisits: 5,
      message: 'Test increment working',
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}