import * as line from "@line/bot-sdk";
import { MessagingApiClient } from "@line/bot-sdk/dist/messaging-api/api/messagingApiClient";
import dotenv from "dotenv";
import { flexMessage } from "../utils/flexContent";
dotenv.config();


export class MessageServices {
  private client: MessagingApiClient

  constructor() {
    this.client = new line.messagingApi.MessagingApiClient({
      channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || "",
    });
  }

  async sendWebhook(body: any) {
    const event = body;

    if (event.type === "message") {
      const message = event.message;

      if (message.type === "text") {
        
        if (message.text === "สวัสดี") {
          this.client.replyMessage({
            replyToken: event.replyToken,
            messages: [
              {
                type: "text",
                text: "สวัสดีจ้าาา",
              },
            ],
          });
        } 
        // else if (message.text === "รหัสไอดีของฉัน") {
        //   this.client.replyMessage({
        //     replyToken: event.replyToken,
        //     messages: [
        //       {
        //         type: "text",
        //         text: event.source.userId,
        //       },
        //     ],
        //   })
        // } 
        // else if (message.text === "รูปโปรไฟล์ของฉัน") {
        //   this.client.getProfile(event.source.userId).then((proflie) => {
        //     this.client.replyMessage({
        //       replyToken: event.replyToken,
        //       messages: [
        //         {
        //           type: "image",
        //           originalContentUrl: proflie.pictureUrl || "not found image",
        //           previewImageUrl: proflie.pictureUrl || "not found image",
        //         },
        //       ],
        //     });
        //   })
        // }
        // else if (message.text === "flex") {
        //     this.client.getProfile(event.source.userId).then((proflie) => {
        //       this.sendMessageToLine(event.source.userId, proflie)
        //     })
        // }
      }
    }
  }

  async sendMessageToLine(userId: string, profile: any) {
    const flexContents = await flexMessage(profile)
    if (!flexContents) {
      throw new Error("Failed to generate flex message");
    }


    // if (profile.userId) {
    //   await this.client.pushMessage({
    //     to: profile.userId,
    //     messages: [
    //       {
    //         type: "flex",
    //         altText: "flexMessage",
    //         contents: flexContents
    //       },
    //     ],
    //   })
    // }



    await this.client.pushMessage({
      to: userId,
      messages: [
        {
          type: "flex",
          altText: "flexMessage",
          contents: flexContents
        },
      ],
    });
  }









}
