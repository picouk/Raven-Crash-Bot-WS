const fs = require("fs");
const chalk = require("chalk")

// Bot Configuration
global.BOT_TOKEN = "8661378144:AAElxlmPOnJGcRxS8TRFh0crOiz3PmLoSR0" // Get your bot token from https://t.me/BotFather
global.BOT_NAME = "𓆩 𝑹𝒂𝒗𝒆𝒏 𝑪𝒓𝒂𝒔𝒉 𝑩𝒐𝒕 𓆪"
global.OWNER_NAME = "@med_tar"
global.OWNER = ["@med_tar"]
global.DEVELOPER = ["7568635402"] // Your Telegram ID for admin commands
global.ppp = 'https://cdn.zass.in/uZn8ero4U6.jpg'
global.pp = 'https://cdn.zass.in/uZn8ero4U6.jpg'

// Social Media & Community Links
global.GROUP_ID = -1004410548051; // Your Telegram Group ID
global.CHANNEL_ID = -1004431517325; // Your Telegram Channel ID
global.GROUP_LINK = "https://t.me/+bFTSoauBathiNjA0"; 
global.CHANNEL_INVITE_LINK = "https://t.me/MY_CRASHBUG";
global.WHATSAPP_LINK = "https://whatsapp.com/channel/0029Vb8pXI9AInPbwdJ1mi3o";
global.WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/YOUR_GROUP";
global.TIKTOK_LINK = "https://tiktok.com/@YOUR_TIKTOK";
global.YOUTUBE_LINK = "https://www.youtube.com/@YOUR_YOUTUBE";

global.owner = ['22242203253'] // Your WhatsApp number without +

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
