import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const emailForm = async (
  name: string,
  email: string,
  message: string
) => {
  await transporter.sendMail({
    from: email,
    subject: `Email sent from ${name}`,
    text: message
  })
}