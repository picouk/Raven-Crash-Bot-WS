process.on('uncaughtException', console.error);
require("./settings");
const { Telegraf, Context, Markup } = require('telegraf');
const { message, editedMessage, channelPost, editedChannelPost, callbackQuery } = require("telegraf/filters");
const { toFirstCase, isNumber, formatp, parseMention, resize, getRandom, generateProfilePicture, getCase, runtime, FileSize, h2k, makeid, kyun, randomNomor, jsonformat, isUrl, fetchJson, sleep, getBuffer } = require("./lib/myfunc2");
const { formatSize } = require("./lib/myfunc3");
const chalk = require('chalk');
const fs = require('fs');
const fetch = require('node-fetch');
const os = require('os');
const speed = require('performance-now');
const util = require('util');
const axios = require('axios');
const path = require('path');
const { simple } = require('./lib/myfunc');

// ملف المشتركين
const adminfile = './lib/premium.json';
global.connectLock = global.connectLock || new Set();

module.exports = XeonBotInc = async (XeonBotInc, bot) => {
    try {
        const body = XeonBotInc.message.text || XeonBotInc.message.caption || '';
        const isCmd = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#/$%^&.+-,\\\©^]/.test(body);
        const args = body.trim().split(/ +/).slice(1);
        const text = q = args.join(" ");
        const user = simple.getUserName(XeonBotInc.message.from);
        const pushname = user.full_name;
        const userId = XeonBotInc.message.from.id.toString(); 
        
        // التحقق من المالك (بالـ ID مش اليوزرنيم)
        const isCreator = DEVELOPER.includes(userId);
        const from = XeonBotInc.message.chat.id;
        const prefix = isCmd ? body[0] : '';
        const command = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';

        // --- تحميل قائمة البريميوم ---
        let adminIDs = [];
        if (fs.existsSync(adminfile)) {
            try {
                adminIDs = JSON.parse(fs.readFileSync(adminfile, 'utf8'));
            } catch (e) { adminIDs = []; }
        }
        const isPremium = adminIDs.includes(userId);

        // دالة الرد
        const reply = async (teks) => {
            return XeonBotInc.reply(teks);
        }

        // --- حماية الأوامر (رسالة الاشتراك) ---
        // المالك والبريميوم معفيين من كل الفحوصات
        if (isCmd && !isPremium && !isCreator) {
            const msgPrem = `❌ *عذراً، الاشتراك غير مفعل*\n` +
                          `_Premium Required_\n\n` +
                          `هذا البوت للمشتركين فقط\\. للتفعيل تواصل مع المالك\\.\n` +
                          `This bot is for subscribers only\\. Contact owner to activate\\.\n\n` +
                          `📩 *المالك \\| Owner:* @H4H_M4\n\n` +
                          `💰 *أسعار الاشتراك \\| Subscription Prices:*\n` +
                          `✅ يوم \\| Day: 20 ج \\(\\$5\\)\n` +
                          `✅ أسبوع \\| Week: 50 ج \\(\\$12\\)\n` +
                          `✅ شهر \\| Month: 100 ج \\(\\$25\\)`;

            return XeonBotInc.telegram.sendMessage(from, msgPrem, {
                parse_mode: "MarkdownV2",
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "📢 قناة التليجرام", url: "https://t.me/Raven_xx24" }],
                        [{ text: "💬 التواصل مع المطور", url: "https://t.me/H4H_M4" }],
                        [{ text: "📺 يوتيوب", url: "https://www.youtube.com/@24xRaven" }, { text: "🎵 تيك توك", url: "https://tiktok.com/@24xraven" }]
                    ]
                }
            });
        }

        if (XeonBotInc.message && isCmd) {
            console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(body)));
        }
        
        switch (command) {
            // --- إضافة مشترك (للمالك فقط) ---
            case 'addprem': {
                if (!isCreator) return reply("❌ للمالك فقط");
                let target = text.trim();
                if (XeonBotInc.message.reply_to_message) {
                    target = XeonBotInc.message.reply_to_message.from.id.toString();
                }
                if (!target) return reply("📌 أرسل الآيدي أو رد على رسالته");

                if (!adminIDs.includes(target)) {
                    adminIDs.push(target);
                    fs.writeFileSync(adminfile, JSON.stringify(adminIDs, null, 2));
                    reply(`✅ تم تفعيل البريميوم بنجاح لـ: ${target}`);
                } else {
                    reply("⚠️ المستخدم مشترك بالفعل");
                }
            }
            break;

            // --- حذف مشترك (للمالك فقط) ---
            case 'delprem': {
                if (!isCreator) return reply("❌ للمالك فقط");
                let target = text.trim();
                if (XeonBotInc.message.reply_to_message) {
                    target = XeonBotInc.message.reply_to_message.from.id.toString();
                }
                if (!adminIDs.includes(target)) return reply("⚠️ الآيدي غير موجود بالقائمة");

                adminIDs = adminIDs.filter(id => id !== target);
                fs.writeFileSync(adminfile, JSON.stringify(adminIDs, null, 2));
                reply(`✅ تم حذف ${target} من البريميوم`);
            }
            break;

            // --- الربط (Connect) مع الشرح ---
            case 'connect': {
                if (!text) return reply(`📌 ركز ياصاحبي عشان تفهم:\nالامر ده بيبعتلك كود ربط عشان تشغل البوت علي رقم واتساب.\n\nمثال: ${prefix}connect 2012xxxx`);
                
                if (global.connectLock.has(userId)) return reply(`⏳ طلب اتصال شغال بالفعل...`);
                
                const sanitizedNumber = text.replace(/\D/g, '');
                const Xreturn = sanitizedNumber + "@s.whatsapp.net";
                const pairingPath = `./lib2/pairing/${Xreturn}`;
                const pairingFile = `${pairingPath}/pairing.json`;

                global.connectLock.add(userId);
                try {
                    if (fs.existsSync(pairingPath)) fs.rmSync(pairingPath, { recursive: true, force: true });
                    const startpairing = require('./rentbot.js');
                    await startpairing(Xreturn);

                    let waited = 0;
                    while (!fs.existsSync(pairingFile) && waited < 15000) {
                        await sleep(1000);
                        waited += 1000;
                    }

                    if (fs.existsSync(pairingFile)) {
                        const cuObj = JSON.parse(fs.readFileSync(pairingFile, 'utf-8'));
                        await XeonBotInc.reply(`✅ تم إنشاء كود الربط\n🔑 الكود: ${cuObj.code}\n\n⏳ الكود صالح لمدة ساعة`);
                    } else {
                        reply("❌ فشل إنشاء الكود، جرب مرة أخرى");
                    }
                } catch (e) {
                    reply("❌ حدث خطأ داخلي");
                } finally {
                    global.connectLock.delete(userId);
                }
            }
            break;

            // --- حذف الاتصال (Disconnect) مع الشرح ---
            case 'delconnect': case 'disconnect': {
                if (!text) return reply(`📌 ركز ياصاحبي عشان تفهم:\nالامر ده بيمسح جلسة الربط لو الشخص عايز يربط رقم جديد.\n\nمثال: ${prefix}${command} 2012xxxx`);
                
                const sanitizedNumber = text.replace(/\D/g, '');
                const Xreturn = sanitizedNumber + "@s.whatsapp.net";
                const pairingPath = `./lib2/pairing/${Xreturn}`;

                if (fs.existsSync(pairingPath)) {
                    fs.rmSync(pairingPath, { recursive: true, force: true });
                    reply(`✅ تم حذف جلسة الرقم ${sanitizedNumber} بنجاح.`);
                } else {
                    reply(`⚠️ الرقم ده ملوش جلسة ربط اصلا عشان امسحها.`);
                }
            }
            break;

            // --- المنيو ---
            case 'menu': case 'start': case 'back!': {
                const totalMem = os.totalmem();
                const usedMem = totalMem - os.freemem();
                
                const epicMenu = `
╔═════════════════════════════╗
║    𓆩 𝑹𝒂𝒗𝒆𝒏 𝑪𝒓𝒂𝒔𝒉 𝑩𝒐𝒕 𓆪    ║
║  SYSTEM ONLINE - FULL POWER ║
╚═════════════════════════════╝

👑 ROOT LEGENDS
⚡ @H4H_M4      🔥 KING MASTER
⚡ @M9M_M8      💀 MASTER DEV

📊 SYSTEM PULSE
RAM: ${formatSize(usedMem)} / ${formatSize(totalMem)} 💻

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMMAND ZONE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✈️ /connect     → LINK NEW TARGET
❌ /delconnect  → UNLINK TARGET

👑 ⚔️ السيطرة تبدأ من هنا… فلتكن جاهزاً 👑
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 تابعنا على:
📢 تليجرام: https://t.me/Raven_xx24
📺 يوتيوب: https://www.youtube.com/@24xRaven
🎵 تيك توك: https://tiktok.com/@24xraven
💬 واتساب: https://whatsapp.com/channel/0029Vb7SIVs8F2pH6LfeVk0t`;
                
                if (global.ppp) {
                    await XeonBotInc.replyWithPhoto(global.ppp, { caption: epicMenu });
                } else {
                    await reply(epicMenu);
                }
            }
            break;

            case 'runtime':
                reply(`🚀 البوت يعمل منذ: ${runtime(process.uptime())}`);
            break;
        }
    } catch (e) {
        console.error("CRITICAL ERROR:", e);
    }
}
