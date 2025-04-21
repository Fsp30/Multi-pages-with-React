import { describe, it, expect, vi } from 'vitest'
import {MailService} from '../src/services/MailService'

describe('MailService', ()=>{
        it('format content e-mail'), () =>{
                const mailService = new MailService()
                const email = mailService.formatEmail({
                        name:'Abel Ferreira',
                        email: 'stoney@email.com',
                        message: 'Hi!',
                })
        expect(email.subject('New message from Abel Ferreira'))
        expect(email.to).toBeDefined()

        }
})