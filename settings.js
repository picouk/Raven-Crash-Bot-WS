const fs = require("fs");
const chalk = require("chalk")

// Bot Configuration
global.BOT_TOKEN = "YOUR_BOT_TOKEN_HERE" // Get your bot token from https://t.me/BotFather
global.BOT_NAME = "𓆩 𝑹𝒂𝒗𝒆𝒏 𝑪𝒓𝒂𝒔𝒉 𝑩𝒐𝒕 𓆪"
global.OWNER_NAME = "@H4H_M4"
global.OWNER = ["@H4H_M4"]
global.DEVELOPER = ["YOUR_TELEGRAM_ID"] // Your Telegram ID for admin commands
global.ppp = 'YOUR_BOT_PROFILE_IMAGE_URL'
global.pp = 'YOUR_BOT_PROFILE_IMAGE_URL'

// Social Media & Community Links
global.GROUP_ID = -1000000000000; // Your Telegram Group ID
global.CHANNEL_ID = -1000000000000; // Your Telegram Channel ID
global.GROUP_LINK = "https://t.me/YOUR_GROUP"; 
global.CHANNEL_INVITE_LINK = "https://t.me/YOUR_CHANNEL";
global.WHATSAPP_LINK = "https://whatsapp.com/channel/YOUR_CHANNEL";
global.WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/YOUR_GROUP";
global.TIKTOK_LINK = "https://tiktok.com/@YOUR_TIKTOK";
global.YOUTUBE_LINK = "https://www.youtube.com/@YOUR_YOUTUBE";

global.owner = ['YOUR_WHATSAPP_NUMBER'] // Your WhatsApp number without +

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})
