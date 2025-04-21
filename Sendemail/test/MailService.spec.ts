import { describe, it, expect } from 'vitest'
import { MailtrapService } from '../src/services/MailtrapService'

describe('MailService', () => {
  it('should format content of e-mail correctly', () => {
    const mailService = new MailtrapService()
    const email = mailService.formatEmail({
      name: 'Abel Ferreira',
      email: 'stoney@email.com ',
      message: 'Hi!',
    })
    expect(email.subject).toBe('New message from Abel Ferreira')
    expect(email.to).toBe('stoney@email.com')
    expect(email.text).toBe('Hi!')
  })
})