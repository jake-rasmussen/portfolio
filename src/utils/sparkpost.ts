import SparkPost from "sparkpost";

const client = new SparkPost(process.env.SPARKPOST_API_KEY)

export const emailForm = async (
  name: string,
  email: string,
  message: string
) => {
  await client.transmissions.send({
    content: {
      from: {
        name,
        email
      },
      subject: `Email sent from ${name}`,
      html: `
      <div>
        ${message}

        Sender's Email: ${email}
      </div>
    `
    },
    recipients: [{ address: process.env.EMAIL_USER_ADDRESS || "" }],
  });
};