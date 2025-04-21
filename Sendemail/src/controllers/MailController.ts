import {Request, Response} from 'express'
import { IMailService } from '../interfaces/IMailService'

export class MailController{
        constructor(private mailService: IMailService){}

        async handleSend(req: Request, res:Response){
                const {to, subject, body} = req.body
                if(!to || !subject|| !body){
                        return res.status(400).json({message: "Missing required fields"})
                }
                try{
                        await this.mailService.sendMail(to, subject, body)
                        return res.status(200)
                }catch(err){
                        return res.status(500)
                }
        }
}