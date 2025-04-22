import axios from 'axios'

export async function sendEmail({
        to, 
        subject, 
        body
}: { to: string, subject: string, body: string }) {
        return axios.post("http://localhost:3000/send", {
                to,
                subject, 
                body
        })
}