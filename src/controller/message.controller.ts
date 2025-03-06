import { Request, Response } from "express";
import { MessageServices } from "../services/message.service";



export class MessageLineController {


    static async sendWebhook(req: Request, res: Response) {
        const body = req.body.events[0] ?? undefined;
        if (!body) return res.sendStatus(200).end();

        try {
            const result = await new MessageServices().sendWebhook(body);
            return res.sendStatus(200).end();

        } catch (error) {
            console.error("Error in sendWebhook:", error);
            return res.status(500).send("Error in Webhook");
        }
    }




    static async sendFlexMessage(req: Request, res: Response) {
        const userId = req.params.userId;
        const body = req.body;
        try {
            const result = await new MessageServices().sendMessageToLine(userId, body);
            return res.status(200).json({ message: "Message sent successfully", result });

        } catch (error) {
            console.error("Error in sendMessageToLine:", error);
            return res.status(500).json({ error: "Failed to send message try to check if provider userId match with liff userId" });
        }
    }



}