import express from 'express'
import router from './routes/mail.routes'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/send', router)

export default app