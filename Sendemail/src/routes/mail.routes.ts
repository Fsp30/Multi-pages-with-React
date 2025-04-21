import { Router } from "express"
import { MailtrapService } from "../services/MailtrapService"
import { MailController } from "../controllers/MailController"

const router = Router()
const mailService = new MailtrapService()
const controller = new MailController(mailService)

router.post("/send", async (req, res) => {
        await controller.handleSend(req, res);
      });
      

export default router
