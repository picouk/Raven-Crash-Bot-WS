# Quick Start Guide

Get your Raven Crash Bot up and running in 5 minutes!

---

## ⚠️ IMPORTANT - READ FIRST

> **FOR EDUCATIONAL PURPOSES ONLY**
>
> This software is provided for **educational purposes only**. By using this software, you acknowledge that:
> - The developer (✘ 𝙍𝘼𝙑𝙀𝙉) is **NOT responsible** for any misuse
> - You will use it **legally and ethically**
> - You accept **full responsibility** for your actions
> - This is based on original work by **Xeon**, modified by **✘ 𝙍𝘼𝙑𝙀𝙉**
>
> **USE AT YOUR OWN RISK**

---

## ⚡ Super Quick Setup

### 1️⃣ Prerequisites Check

```bash
# Check Node.js (need v16+)
node --version

# Check npm
npm --version

# Check Git
git --version
```

Don't have them? Install:
- **Node.js:** [nodejs.org](https://nodejs.org/)
- **Git:** [git-scm.com](https://git-scm.com/)

---

### 2️⃣ Get Bot Token

1. Open Telegram
2. Search: `@BotFather`
3. Send: `/newbot`
4. Follow instructions
5. Copy your token (looks like: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`)

---

### 3️⃣ Get Your Telegram ID

1. Open Telegram
2. Search: `@userinfobot`
3. Send any message
4. Copy your ID (a number like: `123456789`)

---

### 4️⃣ Install Bot

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/raven-crash-bot.git

# Enter directory
cd raven-crash-bot

# Install dependencies
npm install
```

---

### 5️⃣ Configure Bot

Open `settings.js` and edit:

```javascript
// Replace with your bot token
global.BOT_TOKEN = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"

// Replace with your Telegram ID
global.DEVELOPER = ["123456789"]
```

---

### 6️⃣ Run Bot

```bash
npm start
```

You should see:
```
✅ Telegram bot handlers initialized
Bot is running...
```

---

### 7️⃣ Test Bot

1. Open Telegram
2. Search for your bot
3. Send: `/start`
4. You should get a welcome message!

---

## 🎉 Success!

Your bot is now running! 

### What's Next?

#### Customize Your Bot
- Edit `config.js` for bot settings
- Edit `lib/english.js` for messages
- Add your social media links

#### Add Premium Users
```
/addprem USER_TELEGRAM_ID
```

#### Broadcast Messages
```
/broadcast Your message here
```

#### Deploy to Server
See [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment.

---

## 🆘 Quick Troubleshooting

### Bot doesn't start?

**Check:**
1. Is bot token correct?
2. Did you run `npm install`?
3. Is Node.js v16+?

**Fix:**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install

# Check for errors
npm start
```

---

### Bot doesn't respond?

**Check:**
1. Is bot running? (check terminal)
2. Did you start chat with bot?
3. Is bot token valid?

**Fix:**
- Restart bot: `Ctrl+C` then `npm start`
- Check bot token in settings.js
- Make sure you're messaging the correct bot

---

### "Cannot find module" error?

**Fix:**
```bash
npm install
```

---

### Bot crashes immediately?

**Check:**
1. Bot token format
2. Syntax errors in settings.js
3. Node.js version

**Fix:**
```bash
# Check Node.js version
node --version

# Should be v16.0.0 or higher
# If not, update Node.js
```

---

## 📚 Learn More

### Essential Reading
1. [README.md](README.md) - Full documentation
2. [INSTALLATION.md](INSTALLATION.md) - Detailed setup
3. [FAQ.md](FAQ.md) - Common questions

### For Developers
1. [API.md](API.md) - Code reference
2. [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guide

### For Production
1. [DEPLOYMENT.md](DEPLOYMENT.md) - Deploy guide
2. [SECURITY.md](SECURITY.md) - Security tips

---

## 🎯 Common Tasks

### Add Premium User
```bash
# In Telegram, send to your bot:
/addprem 123456789
```

### Remove Premium User
```bash
/delprem 123456789
```

### List Premium Users
```bash
/listprem
```

### Broadcast Message
```bash
/broadcast 🎉 Hello everyone!
```

### Check Bot Menu
```bash
/menu
```

---

## 🔧 Configuration Quick Reference

### settings.js
```javascript
global.BOT_TOKEN = "YOUR_TOKEN"        // Bot token
global.DEVELOPER = ["YOUR_ID"]         // Your Telegram ID
global.GROUP_LINK = "YOUR_GROUP"       // Group link
global.CHANNEL_INVITE_LINK = "YOUR_CH" // Channel link
```

### config.js
```javascript
global.ownername = "Your Name"         // Your name
global.botname = "Bot Name"            // Bot name
global.prefa = ['', '!', '.']          // Command prefixes
```

---

## 💡 Pro Tips

### Tip 1: Use PM2 for Production
```bash
npm install -g pm2
pm2 start index.js --name raven-bot
pm2 save
```

### Tip 2: Enable Auto-Restart
```bash
pm2 startup
```

### Tip 3: Monitor Bot
```bash
pm2 monit
```

### Tip 4: View Logs
```bash
pm2 logs raven-bot
```

### Tip 5: Backup Regularly
```bash
# Backup database files
cp -r database database-backup
cp lib/premium.json lib/premium.json.bak
```

---

## 🚀 Next Level

### Want More Features?

1. **Add Membership Verification**
   - Get your group/channel IDs
   - Add to settings.js
   - Users must join to use bot

2. **Customize Messages**
   - Edit `lib/english.js`
   - Change welcome messages
   - Customize menu text

3. **Add Resellers**
   ```bash
   /addresell USER_ID
   ```

4. **Deploy to VPS**
   - See [DEPLOYMENT.md](DEPLOYMENT.md)
   - Use PM2 for management
   - Set up auto-restart

---

## 📞 Need Help?

### Quick Support

**Telegram:**
- Direct: [@P_X_24](https://t.me/P_X_24)
- Group: [Raven_26](https://t.me/Raven_26)
- Channel: [Raven_xx24](https://t.me/Raven_xx24)

**Documentation:**
- [FAQ.md](FAQ.md) - Common questions
- [INSTALLATION.md](INSTALLATION.md) - Detailed setup
- [API.md](API.md) - Code reference

**GitHub:**
- [Issues](https://github.com/YOUR_USERNAME/raven-crash-bot/issues)
- [Discussions](https://github.com/YOUR_USERNAME/raven-crash-bot/discussions)

---

## ✅ Checklist

Before asking for help, make sure you:

- [ ] Installed Node.js v16+
- [ ] Ran `npm install`
- [ ] Added correct bot token
- [ ] Added your Telegram ID
- [ ] Started the bot with `npm start`
- [ ] Checked terminal for errors
- [ ] Read the error message
- [ ] Searched FAQ.md
- [ ] Checked existing GitHub issues

---

## 🎊 You're All Set!

Congratulations! Your bot is running.

### Share Your Success

- ⭐ Star the repository
- 📢 Share with friends
- 💬 Join our community
- 🐛 Report bugs
- 💡 Suggest features

---

<div align="center">

**Quick Start Complete!**

Made with ❤️ by 𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪

[Full Documentation](README.md) • [Get Help](https://t.me/H4H_M4) • [Report Issue](https://github.com/YOUR_USERNAME/raven-crash-bot/issues)

</div>
