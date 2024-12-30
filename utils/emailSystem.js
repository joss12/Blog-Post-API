const nodemail = require("nodemailer");
const {
  secret_email,
  secret_password,
} = require("../config/keys");

const sendEmail = async ({ emailTo, subject, code, content }) => {
  const transporter = nodemail.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: secret_email,
      pass: secret_password,
    },
  });

  const message = {
    to: emailTo,
    subject,
    html: `
        <div>
        <h3>Use this bellow code to ${content} </h3>
        <pp><strong>Code:</strong>${code}</pp>
        </div>
        `,
  };
  await transporter.sendMail(message);
};
module.exports = sendEmail;
