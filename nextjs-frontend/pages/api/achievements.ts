import type { NextApiRequest, NextApiResponse } from 'next';

// Achievements data
const ACHIEVEMENTS = [
  {
    id: 1,
    title: "2021 National Schools Science Fair Winners",
    summary: "Dzaleka CDSS students won recognition at the Malawi National Schools Science Fair for student-developed projects.",
    details: "Students showcased innovations such as traffic accident prevention software and low-cost experimental prototypes.",
    year: 2021
  },
  {
    id: 2,
    title: "New Classrooms (Reported 2023)",
    summary: "UNHCR and EU-funded classroom handover to Dzaleka Secondary School to reduce overcrowding.",
    details: "Four new fully equipped classrooms were handed over to the school to expand capacity. Please verify with UNHCR/JRS for press materials.",
    year: 2023
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ status: 'ok', data: ACHIEVEMENTS });
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }
}