import { IMailService } from "../interfaces/IMailService"
import dotenv from "dotenv"
import nodemailer from 'nodemailer'

dotenv.config()

export class MailtrapService implements IMailService {
        private transporter = nodemailer.createTransport({
          host: "smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS,
          },
        });
      
        async sendMail(to: string, subject: string, body: string): Promise<void> {
          await this.transporter.sendMail({
            from: '"My project" <no-reply@euu.com>',
            to,
            subject,
            text: body,
          });
        }
      }