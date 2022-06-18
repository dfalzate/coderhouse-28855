import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const client = twilio(process.env.SID, process.env.TOKEN);

async function sms() {
  try {
    const message = {
      body: "Hola Coderhouse desde twilio",
      from: process.env.SMS,
      to: "+541162524514",
    };
    const response = await client.messages.create(message);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// sms();

/* -------------------------------------------------------------------------- */
/*                                  WHATSAPP                                  */
/* -------------------------------------------------------------------------- */

async function sendWP() {
  try {
    const message = {
      body: "Hola Coderhouse desde twilio WP",
      from: "whatsapp:+14155238886",
      to: "whatsapp:+541162524514",
      mediaUrl: ["https://www.mundomotero.com/wp-content/uploads/2017/06/BMW-F-700-GS.jpg"],
    };
    const response = await client.messages.create(message);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

sendWP();
