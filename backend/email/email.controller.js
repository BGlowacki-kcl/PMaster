import nodemailer from 'nodemailer';
import dotenv from 'dotenv'; 
dotenv.config();

console.log("env: ",process.env.EMAIL_USER);

const transporter = nodemailer.createTransport({
    service: 'gmail',  // Use a specific service like 'gmail', 'outlook', etc.
    host: 'smtp.gmail.com',  // Specific host instead of localhost
    port: 587,
    secure: false,  // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,  // Your Gmail address
      pass: process.env.EMAIL_PASS   // Your app password for Gmail
    }
  });

export const sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Contact Form: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h4>Message:</h4>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };
  
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};
