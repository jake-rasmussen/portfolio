import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com",
  // port: 465,
  // secure: true,
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_USER_ADDRESS,
    clientId: process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_CLIENT_SECRET,
    refreshToken: process.env.EMAIL_REFRESH_TOKEN,
    accessToken: process.env.EMAIL_ACCESS_TOKEN,
    expires: 1484314697598,
  },
});

export const emailForm = async (
  name: string,
  email: string,
  message: string
) => {
  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER_ADDRESS,
    subject: `Email sent from ${name}`,
    text: message
  });
}