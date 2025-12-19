import type { NextApiRequest, NextApiResponse } from 'next';

// Gallery data - Using actual images from backend with appropriate captions
const GALLERY = [
  { id: 1, file: "image1.jpg", caption: "Students and donation boxes at Dzaleka CDSS" },
  { id: 2, file: "image2.jpg", caption: "Computer lab students learning digital skills" },
  { id: 3, file: "image3.jpg", caption: "Large group photo of Dzaleka CDSS students" },
  { id: 4, file: "image4.jpg", caption: "Students exploring 3D-printing / STEM tools" },
  { id: 5, file: "2021 National Schools Science Fair Winners.webp", caption: "2021 National Schools Science Fair Winners" },
  { id: 6, file: "25221.jpg", caption: "School events and activities" },
  { id: 7, file: "Inua donates papers to students.webp", caption: "Inua donates papers to students" },
  { id: 8, file: "school compound.jpg", caption: "School compound view" },
  { id: 9, file: "students.jpg", caption: "Students at Dzaleka CDSS" }
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