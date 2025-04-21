export interface IMailService{
        sendMail(to:string, subject:string, body:string): Promise<void>
        formatEmail(data: { name: string, email: string, message: string }): {
                to: string
                subject: string
                text: string
        }
              
}