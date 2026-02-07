const nodemailer = require("nodemailer");
require("dotenv").config();

async function mailsender(email, title, body) {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false, // true only for port 465
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // fixes TLS handshake issues on Render
      },
    });

    let info = await transporter.sendMail({
      from: `"Bro of Techie" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    console.log("Mail sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("Mail error:", err);
    throw err;
  }
}

module.exports = mailsender;
