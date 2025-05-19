import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certs
      },
    });

    const html = `
      <h2>Mesaj nou E-Learning Foundation</h2>
      <p><strong>Nume:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Mesaj:</strong></p>
      <p style="white-space: pre-wrap; background: #f9f9f9; padding: 1em; border-left: 4px solid #ccc;">${message}</p>
    `;

    await transporter.sendMail({
      from: `"E-Learning Foundation" <${process.env.SMTP_USER}>`,
      to: `"E-Learning Foundation" <${process.env.SMTP_USER}>`,
      subject: `New message from ${name}`,
      html,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}