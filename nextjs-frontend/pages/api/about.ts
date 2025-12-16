import type { NextApiRequest, NextApiResponse } from 'next';

// Site info
const SITE_INFO = {
  name: "Dzaleka Community Day Secondary School (Dzaleka CDSS)",
  location: "Dzaleka Refugee Camp, Dowa District, Malawi (M16 road)",
  email: "ndizeyenoriega@gmail.com",
  phone: "+265 995 208 178"
};

// About data
const ABOUT = {
  overview: SITE_INFO.name + " provides secondary education to refugees and host community students in Dzaleka Refugee Camp, Dowa.",
  hours: "Monday–Friday, 07:00–14:00 (reported)",
  population_served: "Children from Burundi, DRC, Ethiopia, Rwanda and Malawian host communities"
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ status: 'ok', data: ABOUT });
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }
}