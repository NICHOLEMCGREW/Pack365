import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

// Check if email credentials are provided
if (!emailUser || !emailPass) {
  console.error('Email credentials not provided. Please set EMAIL_USER and EMAIL_PASS environment variables.');
  process.exit(1); // Exit the process
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

app.use(express.json()); // Middleware to parse JSON bodies

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Email data
  const mailOptions = {
    from: `"Your Name" <${emailUser}>`, // Sender's name and email address
    to: 'pack365yukon@gmail.com', // Recipient's email address
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send email. Please try again later.');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Message sent successfully!');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
