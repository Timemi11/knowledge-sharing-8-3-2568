import { Router } from "express";
import { MessageLineController } from "../controller/message.controller";

const router = Router();

// @ts-expect-error
router.post("/webhook", MessageLineController.sendWebhook);
// @ts-expect-error
router.post("/sendflexmessage/:userId", MessageLineController.sendFlexMessage);


export default router;
