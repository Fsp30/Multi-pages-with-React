require('dotenv').config()
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
})

async function sendEmail({ to, subject, text, html }) {
  const mailOptions = {
    from: '"Filipe Dev" <depaulacostafilipe@gmail.com>',
    to,
    subject,
    text,
    html,
  }

  const info = await transporter.sendMail(mailOptions)
  return info
}

module.exports = sendEmail;
