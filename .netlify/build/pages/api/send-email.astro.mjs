import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  if (request.headers.get("Content-Type") !== "application/json") {
    return new Response(JSON.stringify({ message: "Invalid content type" }), { status: 400 });
  }
  const body = await request.json();
  const { name, email, message } = body;
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      // Your Gmail address from .env
      pass: "bhvb vqok uptz fpwo"
      // Your App Password from .env
    }
  });
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "palmettopints@gmail.com",
    // The address you want to receive emails at
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `
  };
  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Form submitted successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email." }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
