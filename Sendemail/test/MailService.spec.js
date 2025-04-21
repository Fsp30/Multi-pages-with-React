"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const MailtrapService_1 = require("../src/services/MailtrapService");
(0, vitest_1.describe)('MailService', () => {
    (0, vitest_1.it)('should format content of e-mail correctly', () => {
        const mailService = new MailtrapService_1.MailtrapService();
        const email = mailService.formatEmail({
            name: 'Abel Ferreira',
            email: 'stoney@email.com ',
            message: 'Hi!',
        });
        (0, vitest_1.expect)(email.subject).toBe('New message from Abel Ferreira');
        (0, vitest_1.expect)(email.to).toBe('stoney@email.com');
        (0, vitest_1.expect)(email.text).toBe('Hi!');
    });
});
