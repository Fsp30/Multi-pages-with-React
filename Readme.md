# Projeto de Envio de E-mails 📬

Este projeto permite o envio de e-mails através de um formulário em React integrado com um backend em Node.js utilizando TypeScript. Foi pensado com foco em boas práticas como desacoplamento, reutilização de código e testes automatizados.

## ✨ Funcionalidades

- Formulário de contato estilizado com React
- Integração com serviço de envio de e-mails (via SMTP ou mock)
- Backend com Express e TypeScript
- Testes com Vitest
- Animação com MailCheck após envio bem-sucedido

## 🧪 Testes

Os testes estão localizados na pasta `test` do backend.

```bash
pnpm test
```

## 🚀 Como rodar

### Backend

```bash
cd Sendemail
pnpm install
pnpm dev
```

### Frontend

```bash
cd app
pnpm install
pnpm dev
```

## ⚙️ Tecnologias usadas

- React + Vite
- Node.js + Express
- TypeScript
- Axios
- Nodemailer 
- Vitest (para testes)
- Framer Motion (animações)
- Lucide Icons

---

## 📂 Estrutura do projeto

```
Sendemail/
├── src/
│   ├── controllers/
│   ├── interfaces/
│   ├── services/
│   ├── ...
├── test/
│   └── MailService.spec.ts
```

---

Feito com 💻 e ☕ por [Fsp30](https://github.com/Fsp30)

