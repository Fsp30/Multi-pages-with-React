const express = require('express')
const sendEmail = require('./src/SendEmail')

const app = express()
app.use(express.json())
app.post('/send-email', async (req, res) => {
  const { to, subject, text, html } = req.body

  try {
    const info = await sendEmail({ to, subject, text, html })
    res.json({ message: 'E-mail enviado!', id: info.messageId })
  } catch (error) {
    res.status(500).json({ error: 'Erro ao enviar e-mail.', details: error.message })
  }
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
