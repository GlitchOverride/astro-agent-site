import type { APIRoute } from 'astro';

export const prerender = false;
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") !== "application/json") {
    return new Response(JSON.stringify({ message: "Invalid content type" }), { status: 400 });
  }

  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
  }

  // Create a transporter object using the default SMTP transport
  // You'll need to set up an App Password for your Gmail account for this to work.
  // See: https://support.google.com/accounts/answer/185833
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: import.meta.env.GMAIL_USER, // Your Gmail address from .env
      pass: import.meta.env.GMAIL_PASS, // Your App Password from .env
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'palmettopints@gmail.com', // The address you want to receive emails at
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Form submitted successfully!" }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: "Error sending email." }), { status: 500 });
  }
};
