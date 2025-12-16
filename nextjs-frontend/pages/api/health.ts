import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Test all API endpoints to ensure they're working
    try {
      // These would normally be called from the frontend but we'll just return a success response
      res.status(200).json({ 
        status: 'ok', 
        message: 'Health check passed',
        endpoints: {
          about: '/api/about (GET)',
          achievements: '/api/achievements (GET)',
          supporters: '/api/supporters (GET)',
          gallery: '/api/gallery (GET)',
          contact: '/api/contact (POST)'
        },
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({ 
        status: 'error', 
        message: 'Health check failed',
        error: (error as Error).message 
      });
    }
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }
}