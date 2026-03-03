# Installation Guide

Complete step-by-step guide to install and configure Raven Crash Bot.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Detailed Installation](#detailed-installation)
- [Configuration](#configuration)
- [Running the Bot](#running-the-bot)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

1. **Node.js** (v16.0.0 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** (comes with Node.js) or **yarn**
   - Verify installation: `npm --version`

3. **Git** (for cloning the repository)
   - Download from [git-scm.com](https://git-scm.com/)
   - Verify installation: `git --version`

### Required Accounts

1. **Telegram Account**
   - Create a bot via [@BotFather](https://t.me/BotFather)
   - Get your bot token

2. **Telegram Group & Channel** (optional but recommended)
   - Create a Telegram group
   - Create a Telegram channel
   - Get their IDs using [@userinfobot](https://t.me/userinfobot)

---

## Quick Start

For experienced users who want to get started quickly:

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/raven-crash-bot.git
cd raven-crash-bot

# Install dependencies
npm install

# Configure the bot
cp .env.example .env
nano settings.js  # Edit with your bot token and settings

# Run the bot
npm start
```

---

## Detailed Installation

### Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/YOUR_USERNAME/raven-crash-bot.git
cd raven-crash-bot
```

### Step 2: Install Dependencies

Install all required Node.js packages:

```bash
npm install
```

This will install:
- Telegraf (Telegram Bot Framework)
- Baileys (WhatsApp Web API)
- And all other dependencies listed in `package.json`

### Step 3: Create Your Telegram Bot

1. Open Telegram and search for [@BotFather](https://t.me/BotFather)
2. Send `/newbot` command
3. Follow the instructions:
   - Choose a name for your bot (e.g., "Raven Crash Bot")
   - Choose a username (must end with 'bot', e.g., "raven_crash_bot")
4. Copy the bot token (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Step 4: Get Your Telegram ID

1. Open [@userinfobot](https://t.me/userinfobot) on Telegram
2. Send any message
3. Copy your user ID (a number like: `123456789`)

### Step 5: Get Group and Channel IDs (Optional)

If you want to use membership verification:

1. Add [@userinfobot](https://t.me/userinfobot) to your group/channel
2. The bot will send the group/channel ID
3. Copy these IDs (they start with `-100`)

---

## Configuration

### Method 1: Using settings.js (Recommended)

Edit the `settings.js` file:

```javascript
// Bot Configuration
global.BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"  // Paste your bot token
global.BOT_NAME = "𓆩 𝑹𝒂𝒗𝒆𝒏 𝑪𝒓𝒂𝒔𝒉 𝑩𝒐𝒕 𓆪"
global.DEVELOPER = ["YOUR_TELEGRAM_ID"]  // Your Telegram user ID

// Social Media Links
global.GROUP_ID = -1003449585297;  // Your group ID
global.CHANNEL_ID = -1002482739718;  // Your channel ID
global.GROUP_LINK = "https://t.me/YOUR_GROUP"
global.CHANNEL_INVITE_LINK = "https://t.me/YOUR_CHANNEL"
global.WHATSAPP_LINK = "https://whatsapp.com/channel/YOUR_CHANNEL"
global.YOUTUBE_LINK = "https://www.youtube.com/@YOUR_YOUTUBE"
global.TIKTOK_LINK = "https://tiktok.com/@YOUR_TIKTOK"
```

### Method 2: Using .env file

1. Copy the example file:
```bash
cp .env.example .env
```

2. Edit `.env` file:
```env
BOT_TOKEN=YOUR_BOT_TOKEN_HERE
DEVELOPER_ID=YOUR_TELEGRAM_ID
GROUP_ID=-1000000000000
CHANNEL_ID=-1000000000000
```

### Additional Configuration (config.js)

Edit `config.js` for more customization:

```javascript
// Owner Information
global.ownername = "𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪"
global.botname = "𓆩 𝑹𝒂𝒗𝒆𝒏 𝑪𝒓𝒂𝒔𝒉 𝑩𝒐𝒕 𓆪"

// Prefix Configuration
global.prefa = ['', '!', '.', ',']

// Menu Type
global.typemenu = 'v1'  // v1: image, v2: link+image, v3: video
```

---

## Running the Bot

### Development Mode

For testing and development (with auto-restart on file changes):

```bash
npm run dev
```

### Production Mode

For production deployment:

```bash
npm start
```

### Using PM2 (Recommended for Production)

PM2 keeps your bot running even after server restart:

```bash
# Install PM2 globally
npm install -g pm2

# Start the bot with PM2
pm2 start index.js --name "raven-bot"

# View logs
pm2 logs raven-bot

# Restart the bot
pm2 restart raven-bot

# Stop the bot
pm2 stop raven-bot

# Make PM2 start on system boot
pm2 startup
pm2 save
```

---

## Verification

After starting the bot, verify it's working:

1. Open Telegram and search for your bot
2. Send `/start` command
3. You should receive a welcome message
4. Try `/menu` to see the bot menu

---

## Troubleshooting

### Bot doesn't respond

**Problem**: Bot is not responding to commands

**Solutions**:
- Check if the bot token is correct in `settings.js`
- Verify the bot is running (check terminal for errors)
- Make sure you're using the correct bot username
- Check if the bot is not blocked by Telegram

### "Cannot find module" error

**Problem**: Missing dependencies

**Solution**:
```bash
rm -rf node_modules
npm install
```

### "ENOENT: no such file or directory"

**Problem**: Missing configuration files

**Solution**:
- Make sure `settings.js` exists
- Check if all required files are present
- Verify file paths in configuration

### Bot crashes on start

**Problem**: Configuration error

**Solutions**:
- Check `settings.js` for syntax errors
- Verify all required fields are filled
- Check terminal for specific error messages
- Ensure Node.js version is 16.0.0 or higher

### Membership verification not working

**Problem**: Bot can't verify group/channel membership

**Solutions**:
- Make sure bot is admin in the group/channel
- Verify GROUP_ID and CHANNEL_ID are correct
- Check if IDs start with `-100`
- Ensure bot has permission to see members

### WhatsApp connection issues

**Problem**: Can't connect WhatsApp

**Solutions**:
- Check if Baileys library is installed correctly
- Verify session files in `lib2/pairing/`
- Try deleting old session files
- Ensure you have a stable internet connection

---

## Next Steps

After successful installation:

1. **Add Premium Users**: Use `/addprem <user_id>` command
2. **Configure Resellers**: Use `/addresell <user_id>` command
3. **Test Broadcasting**: Use `/broadcast <message>` command
4. **Customize Messages**: Edit `lib/english.js` file
5. **Set Up Monitoring**: Use PM2 for process management

---

## Getting Help

If you encounter issues:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review the [README.md](README.md) documentation
3. Search existing [GitHub Issues](https://github.com/YOUR_USERNAME/raven-crash-bot/issues)
4. Contact support:
   - Telegram: [@H4H_M4](https://t.me/H4H_M4)
   - Channel: [Join Channel](https://t.me/Raven_xx24)
   - Group: [Join Group](https://t.me/Free_Numberv1)

---

## Security Notes

⚠️ **Important Security Reminders**:

- Never share your bot token publicly
- Don't commit `.env` or `settings.js` with real credentials to Git
- Keep your dependencies updated: `npm audit fix`
- Use strong passwords and secure your server
- Regularly backup your database files

---

**Congratulations! Your Raven Crash Bot is now installed and ready to use! 🎉**

**𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪**
