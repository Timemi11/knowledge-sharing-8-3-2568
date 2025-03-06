import { FlexContainer } from "@line/bot-sdk/dist/messaging-api/model/flexContainer";

export const flexMessage = async (profile: { displayName: string, pictureUrl: string, statusMessage?: string }) => {
  let flexContents: FlexContainer

  if (profile?.displayName && profile?.pictureUrl) {
    flexContents =
    {
      "type": "bubble",
      "size": "mega",
      "hero": {
        "type": "image",
        "url": profile.pictureUrl || "https://via.placeholder.com/1024",
        "size": "full",
        "aspectRatio": "1:1",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": profile.displayName || "...",
            "weight": "bold",
            "size": "xl",
            "align": "center",
            "color": "#333333"
          },
          {
            "type": "text",
            "text": profile.statusMessage || "...",
            "size": "sm",
            "align": "center",
            "color": "#777777",
            "wrap": true,
            "margin": "md"
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "primary",
            "color": "#06C755",
            "action": {
              "type": "uri",
              "label": "เพิ่มเพื่อน",
              "uri": "https://line.me/R/ti/p/~your-line-id"
            }
          },
          {
            "type": "button",
            "style": "secondary",
            "action": {
              "type": "uri",
              "label": "ดูโปรไฟล์",
              "uri": "https://line.me/ti/p/~your-line-id"
            }
          }
        ]
      }
    };
  } else {
    flexContents = {
      "type": "bubble",
      "size": "mega",
      "hero": {
        "type": "image",
        "url": "https://image.makewebeasy.net/makeweb/m_1920x0/IhPi1ISo1/%E0%B8%9A%E0%B8%97%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1/black-coffee-cup_1339-1824.jpg",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "☕ ร้านกาแฟบราวน์",
            "weight": "bold",
            "size": "xl",
            "align": "center",
            "color": "#4A4A4A"
          },
          {
            "type": "text",
            "text": "กาแฟพรีเมียม หอมกรุ่น รสชาติกลมกล่อม",
            "size": "sm",
            "align": "center",
            "color": "#8E8E8E",
            "wrap": true
          },
          {
            "type": "separator",
            "margin": "md"
          },
          {
            "type": "box",
            "layout": "baseline",
            "margin": "md",
            "contents": [
              {
                "type": "icon",
                "size": "sm",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
              },
              {
                "type": "icon",
                "size": "sm",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
              },
              {
                "type": "icon",
                "size": "sm",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
              },
              {
                "type": "icon",
                "size": "sm",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
              },
              {
                "type": "icon",
                "size": "sm",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
              },
              {
                "type": "text",
                "text": "4.5/5.0",
                "size": "sm",
                "color": "#999999",
                "margin": "md",
                "flex": 0
              }
            ]
          },
          {
            "type": "text",
            "text": "📍 ตึกเฟล็กซ์ ชั้น 1, กรุงเทพฯ",
            "size": "sm",
            "color": "#666666",
            "wrap": true,
            "margin": "md"
          },
          {
            "type": "text",
            "text": "⏰ เปิดทุกวัน 08:00 - 20:00 น.",
            "size": "sm",
            "color": "#666666",
            "wrap": true,
            "margin": "sm"
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "primary",
            "color": "#905C44",
            "action": {
              "type": "uri",
              "label": "📜 ดูเมนู",
              "uri": "https://line.me/"
            }
          },
          {
            "type": "button",
            "style": "secondary",
            "color": "#555555",
            "action": {
              "type": "uri",
              "label": "📞 โทรติดต่อ",
              "uri": "tel:0123456789"
            }
          }
        ]
      }
    }
  }

  return flexContents
}