// const nodemailer = require("nodemailer");
// require("dotenv").config();

// async function mailsender(email, title, body) {
//   try {
//     let transporter = nodemailer.createTransport({
//       host: "smtp-relay.brevo.com",
//       port: 587,
//       secure: false, // true only for port 465
//       auth: {
//         user: process.env.BREVO_USER,
//         pass: process.env.BREVO_SMTP_KEY,
//       },
//       tls: {
//         rejectUnauthorized: false, // fixes TLS handshake issues on Render
//       },
//     });

//     let info = await transporter.sendMail({
//       from: `"Bro of Techie" <${process.env.MAIL_USER}>`,
//       to: email,
//       subject: title,
//       html: body,
//     });

//     console.log("Mail sent:", info.messageId);
//     return info;
//   } catch (err) {
//     console.error("Mail error:", err);
//     throw err;
//   }
// }

// module.exports = mailsender;




const SibApiV3Sdk = require("sib-api-v3-sdk");
require("dotenv").config();

async function mailsender(email, title, body) {
  try {
    const client = SibApiV3Sdk.ApiClient.instance;
    const apiKey = client.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

    const sender = {
      email: "macklutiwary@gmail.com",  // must be verified in Brevo
      name: "Bro of Techie",
    };

    const receivers = [{ email }];

    const data = await tranEmailApi.sendTransacEmail({
      sender,
      to: receivers,
      subject: title,
      htmlContent: body,
    });

    console.log("Email sent:", data);
    return data;
  } catch (error) {
    console.error("Mail error:", error);
    throw error;
  }
}

module.exports = mailsender;

