// Owner Information
global.ownernomer = "YOUR_PHONE_NUMBER"
global.dev = ["YOUR_PHONE_NUMBER"]
global.ownername = "𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪"
global.ytname = "𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪"
global.socialm = "Telegram: @H4H_M4"
global.location = "Egypt, Cairo"

global.ownernumber = 'YOUR_PHONE_NUMBER'
global.ownername = '𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪'
global.botname = '𓆩 𝑹𝒂𝒗𝒆𝒏 𝑪𝒓𝒂𝒔𝒉 𝑩𝒐𝒕 𓆪'

// Sticker Configuration
global.packname = '\n\n\n\n\n\n\nSticker By'
global.author = '𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪 ⚉\n\nContact: YOUR_CONTACT'

//console view/theme
global.themeemoji = '🪀'
global.wm = "𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪."

// Social Media Links
global.link = 'YOUR_WHATSAPP_CHANNEL_LINK'
global.linkgroup = 'YOUR_WHATSAPP_GROUP_LINK'
global.youtube = 'YOUR_YOUTUBE_LINK'
global.tiktok = 'YOUR_TIKTOK_LINK'

global.baileysDB = 'baileysDB.json'
global.botDb = 'database.json'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nTelegram: @H4H_M4\nWhatsApp: +201208577595`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nTelegram: @H4H_M4\nWhatsApp: +201208577595`,
}

module.exports = {
    banner: [
        "YOUR_WHATSAPP_NUMBER@s.whatsapp.net"
    ]
};

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})