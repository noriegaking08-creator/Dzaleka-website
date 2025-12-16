import type { NextApiRequest, NextApiResponse } from 'next';

// Gallery data - Using placeholder images that will work in any environment
const GALLERY = [
  { id: 1, file: "placeholder1.svg", caption: "Students and donation boxes at Dzaleka CDSS" },
  { id: 2, file: "placeholder2.svg", caption: "Computer lab students learning digital skills" },
  { id: 3, file: "placeholder3.svg", caption: "Large group photo of Dzaleka CDSS students" },
  { id: 4, file: "placeholder4.svg", caption: "Students exploring 3D-printing / STEM tools" }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return file URLs relative to server root for frontend to display
    // Vercel handles static assets differently, so we use relative paths
    const images = GALLERY.map(g => ({
      id: g.id,
      url: `/static/images/${g.file}`, // Using relative path for consistent deployment
      caption: g.caption
    }));

    res.status(200).json({ status: 'ok', data: images });
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }
}