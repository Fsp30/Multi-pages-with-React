import express, { Request, Response } from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

interface EmailRequestBody {
  email: string
  nome: string
  mensagem: string
}

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2222,
  auth: {
    user: "Sensivel",
    pass: "Sensivel",
  }
})

app.post('/send-email', async (req: Request<{}, {}, EmailRequestBody>, res: Response) => {
  const { email, nome, mensagem } = req.body

  if (!email || !nome || !mensagem) {
    return res.status(400).json({ error: 'Preencha todos os campos.' })
  }

  try {
    const info = await transporter.sendMail({
      from: `"Contato do site" <no-reply@seusite.com>`,
      to: "fake@inbox.mailtrap.io",
      subject: `Nova mensagem de ${nome}`,
      text: `
        Nome: ${nome}
        Email: ${email}
        Mensagem: ${mensagem}
      `,
      replyTo: email
    })

    console.log("Email enviado:", info.messageId)

    res.status(200).json({ message: 'Email enviado com sucesso!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao enviar email.' })
  }
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})
