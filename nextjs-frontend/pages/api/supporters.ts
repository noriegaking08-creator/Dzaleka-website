import type { NextApiRequest, NextApiResponse } from 'next';

// Supporters data
const SUPPORTERS = [
  { name: "UNHCR Malawi", role: "Camp & education support" },
  { name: "European Union (EU)", role: "Funding for classrooms (reported)" },
  { name: "Jesuit Refugee Service (JRS)", role: "Education partner and coordination" },
  { name: "Malawian Government (Ministry of Education)", role: "Now under government administration" }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ status: 'ok', data: SUPPORTERS });
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }
}