import { createTransport } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = createTransport({
  host: process.env.SMTP,
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const mailOptions = {
  from: process.env.USER,
  to: ["diegoff@gmail.com", process.env.EMAIL],
  subject: "Titulo del correo",
  // text: "Este es el texto del email",
  html: "<h1>Hola Coderhouse</h1>",
  attachments: [
    {
      path: "Resources.docx",
      filename: "Coderhouse",
    },
  ],
};

async function sendMailEthereal() {
  try {
    const response = await transporter.sendMail(mailOptions);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// sendMailEthereal();

/* -------------------------------------------------------------------------- */
/*                              Correos con GMAIL                             */
/* -------------------------------------------------------------------------- */

const transporterGmail = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.USER_GMAIL,
    pass: process.env.PASS_GMAIL,
  },
});

async function sendMailGmail() {
  try {
    const response = await transporterGmail.sendMail(mailOptions);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

sendMailGmail();
