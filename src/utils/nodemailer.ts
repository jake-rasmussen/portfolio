import nodemailer from "nodemailer";

const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.EMAIL_REFRESH_TOKEN
  });

  const getAccessToken = () => {
    try {
      const token: string = oauth2Client.getAccessToken();
      return token;
    } catch (e) {
      console.log(e);
      throw("INTERNAL_SERVER_ERROR");
    }
    
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER_ADDRESS,
      accessToken: getAccessToken(),
      clientId: process.env.EMAIL_CLIENT_ID,
      clientSecret: process.env.EMAIL_CLIENT_SECRET,
      refreshToken: process.env.EMAIL_REFRESH_TOKEN,
    }
  });

  return transporter;
}



export const emailForm = async (
  name: string,
  email: string,
  message: string
) => {
  const transporter = await createTransporter();
  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER_ADDRESS,
    subject: `Email sent from ${name}`,
    text: `
      ${message}


      Sender's Email: ${email}
    `,
  });
};
