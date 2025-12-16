import type { NextApiRequest, NextApiResponse } from 'next';

// In a real application, you would use a database or email service
// For this demo, we'll just log the submission and return success
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({ status: 'error', message: 'Name and message are required.' });
    }

    const submission = {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    };

    // Log the submission - in a real app, you'd send an email or save to a database
    console.log('Contact form submission:', submission);

    // In a real application you could:
    // 1. Send an email using a service like Resend, SendGrid, etc.
    // 2. Save to a database like PostgreSQL, MongoDB, etc.
    // 3. Use a service like Airtable, Google Sheets, etc.

    // Return success response
    res.status(200).json({ status: 'ok', message: 'Thank you — your message has been received.' });
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }
}