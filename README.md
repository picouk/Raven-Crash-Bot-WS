<div align="center">

# 𓆩 𝑹𝒂𝒗𝒆𝒏 𝑪𝒓𝒂𝒔𝒉 𝑩𝒐𝒕 𓆪

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![Telegram Bot](https://img.shields.io/badge/Telegram-Bot-blue?logo=telegram)](https://telegram.org/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Integration-25D366?logo=whatsapp)](https://whatsapp.com/)

**Advanced Telegram Bot with WhatsApp Integration**

*Professional automation and management system built with Node.js*

**⚠️ [READ DISCLAIMER](DISCLAIMER.md) - Educational Use Only ⚠️**

[Features](#-features) • [Installation](#-installation) • [Configuration](#-configuration) • [Commands](#-commands) • [Support](#-support)

</div>

---

## ⚠️ IMPORTANT DISCLAIMER

> **FOR EDUCATIONAL PURPOSES ONLY**
> 
> This project is provided for **educational and learning purposes only**. The developer (𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪) is **NOT responsible** for any misuse, illegal activities, or damages caused by using this software.
>
> **Original Project:** This project is based on the original work by **Xeon**. It has been modified, enhanced, and maintained by **𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪**.
>
> **User Responsibility:** By using this software, you agree to:
> - Use it legally and ethically
> - Comply with Telegram's and WhatsApp's Terms of Service
> - Take full responsibility for your actions
> - Not use it for spam, harassment, or illegal activities
>
> **The developer disclaims all liability for any consequences arising from the use of this software.**

**[📄 Read Full Disclaimer](DISCLAIMER.md)**

---

## 📋 Overview

Raven Crash Bot is a powerful and feature-rich Telegram bot with seamless WhatsApp integration. Built with modern technologies and designed for scalability, it offers premium user management, automated broadcasting, membership verification, and much more.

### ✨ Key Highlights

- 🔐 **Advanced Authentication** - Multi-level user verification system
- 👑 **Premium Management** - Flexible subscription and reseller system
- 📢 **Broadcasting** - Mass messaging to users and premium members
- 🔗 **WhatsApp Integration** - Full Baileys library support
- 🎯 **Membership Control** - Automatic group/channel verification
- 📊 **Resource Monitoring** - Real-time system stats
- 🌐 **Multi-Platform** - Telegram, WhatsApp, YouTube, TikTok integration

---

## 🚀 Features

### Core Functionality

- **User Management**
  - Premium user system with subscription tiers
  - Reseller management for distribution
  - Automatic user registration and tracking
  - Cooldown system to prevent spam

- **Membership Verification**
  - Automatic group/channel membership checking
  - Forced subscription system
  - Smart caching for performance
  - Bypass for premium/reseller users

- **Broadcasting System**
  - Send messages to all users
  - Target premium users specifically
  - Success/failure tracking
  - Markdown support

- **WhatsApp Integration**
  - Connect multiple WhatsApp accounts
  - Session management
  - Pairing code support
  - Full Baileys library features

### Admin Commands

| Command | Description | Access Level |
|---------|-------------|--------------|
| `/addprem <id>` | Add premium user | Owner/Reseller |
| `/delprem <id>` | Remove premium user | Owner/Reseller |
| `/listprem` | List all premium users | Owner/Reseller |
| `/addresell <id>` | Add reseller | Owner Only |
| `/delresell <id>` | Remove reseller | Owner Only |
| `/listresell` | List all resellers | Owner Only |
| `/broadcast <msg>` | Broadcast to all users | Owner Only |

### User Commands

| Command | Description |
|---------|-------------|
| `/start` | Start the bot and see welcome message |
| `/menu` | Display bot menu and system info |
| `/connect` | Connect WhatsApp account |
| `/delconnect` | Disconnect WhatsApp account |

---

## 📦 Installation

### Prerequisites

- Node.js v16.0.0 or higher
- npm or yarn package manager
- Telegram Bot Token (from [@BotFather](https://t.me/BotFather))
- Basic knowledge of Node.js and Telegram bots

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/raven-crash-bot.git
cd raven-crash-bot
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment

1. Copy the example configuration:
```bash
cp .env.example .env
```

2. Edit `settings.js` and configure your bot:
```javascript
global.BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"
global.DEVELOPER = ["YOUR_TELEGRAM_ID"]
```

3. Edit `config.js` for additional settings

### Step 4: Run the Bot

```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

---

## ⚙️ Configuration

### Essential Settings (settings.js)

```javascript
// Bot Configuration
global.BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"
global.BOT_NAME = "𓆩 𝑹𝒂𝒗𝒆𝒏 𝑪𝒓𝒂𝒔𝒉 𝑩𝒐𝒕 𓆪"
global.DEVELOPER = ["YOUR_TELEGRAM_ID"]

// Social Media Links
global.GROUP_LINK = "https://t.me/Raven_26"
global.CHANNEL_INVITE_LINK = "https://t.me/Raven_xx24"
global.WHATSAPP_LINK = "https://chat.whatsapp.com/HphHdks1iIzHCZcOuSok3c?mode=gi_t"
global.YOUTUBE_LINK = "https://www.youtube.com/@24xRaven"
global.TIKTOK_LINK = "https://tiktok.com/@YOUR_TIKTOK"
```

### Bot Customization (config.js)

```javascript
// Owner Information
global.ownername = "𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪"
global.botname = "𓆩 𝑹𝒂𝒗𝒆𝒏 𝑪𝒓𝒂𝒔𝒉 𝑩𝒐𝒕 𓆪"

// Prefix Configuration
global.prefa = ['', '!', '.', ',']

// Menu Type (v1: image, v2: link+image, v3: video, v4: call end)
global.typemenu = 'v1'
```

---

## 📱 Usage

### For Users

1. Start a chat with your bot on Telegram
2. Send `/start` to begin
3. Follow the membership verification steps
4. Use `/menu` to see available commands
5. Contact owner for premium subscription

### For Admins

1. Configure your Telegram ID in `settings.js`
2. Use admin commands to manage users
3. Add premium users or resellers
4. Broadcast messages to your user base
5. Monitor system resources via menu

### For Resellers

1. Get reseller access from bot owner
2. Add/remove premium users
3. View premium user list
4. Manage your customer base

---

## 🏗️ Project Structure

```
raven-crash-bot/
├── 69/                    # Media and resource files
├── database/              # JSON database files
│   ├── baileysDB.json    # WhatsApp session data
│   └── database.json     # Bot database
├── lib/                   # Core library files
│   ├── english.js        # Language strings
│   ├── myfunc.js         # Utility functions
│   ├── premium.json      # Premium users list
│   └── reseller.json     # Reseller users list
├── lib2/                  # Additional libraries
│   ├── lowdb/            # Database adapter
│   └── pairing/          # WhatsApp pairing data
├── config.js             # Bot configuration
├── settings.js           # Environment settings
├── index.js              # Main bot file
├── package.json          # Dependencies
└── README.md             # Documentation
```

---

## 🔧 Advanced Configuration

### Premium System

Edit `lib/premium.json` to manually add premium users:
```json
[
  "123456789",
  "987654321"
]
```

### Reseller System

Edit `lib/reseller.json` for reseller access:
```json
[
  "111222333"
]
```

### Database Configuration

The bot uses JSON-based storage:
- `database/database.json` - Main bot data
- `database/baileysDB.json` - WhatsApp sessions
- `users.json` - All registered users

---

## 🛡️ Security

- Never share your `BOT_TOKEN`
- Keep `settings.js` and `.env` files private
- Don't commit sensitive data to Git
- Use `.gitignore` to exclude sensitive files
- Regularly update dependencies for security patches

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💬 Support

Need help? Reach out through:

- 📧 Telegram: [@H4H_M4](https://t.me/P_X_24)
- 📢 Channel: [Join Channel](https://t.me/Raven_xx24)
- 👥 Group: [Join Group](https://t.me/Raven_26)
- 📺 YouTube: [Subscribe](https://www.youtube.com/@24xRaven)
- 🎵 TikTok: [Follow](https://tiktok.com/@24xraven)

---

## 🙏 Acknowledgments

### Original Developer
- **Xeon** - Original project creator and developer

### Current Developer
- **𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪** - Modifications, enhancements, and maintenance

### Technologies
- [Telegraf](https://telegraf.js.org/) - Modern Telegram Bot Framework
- [Baileys](https://github.com/WhiskeySockets/Baileys) - WhatsApp Web API
- [Node.js](https://nodejs.org/) - JavaScript Runtime
- All contributors and supporters

---

## ⚠️ Legal Disclaimer & Terms of Use

### Educational Purpose Only
This software is provided **strictly for educational purposes** to help developers learn about:
- Telegram Bot API integration
- WhatsApp Web API (Baileys)
- Node.js application development
- Bot automation concepts

### No Warranty
This software is provided "AS IS" without warranty of any kind, express or implied. The developer makes no guarantees about the software's functionality, reliability, or suitability for any purpose.

### User Responsibility
**YOU ARE SOLELY RESPONSIBLE FOR:**
- How you use this software
- Any consequences of using this software
- Compliance with all applicable laws and regulations
- Compliance with Telegram's Terms of Service
- Compliance with WhatsApp's Terms of Service
- Any damages or legal issues arising from your use

### Prohibited Uses
**DO NOT USE THIS SOFTWARE FOR:**
- Spamming or unsolicited messages
- Harassment or bullying
- Illegal activities
- Violating platform Terms of Service
- Any malicious purposes
- Commercial use without proper authorization

### Developer Liability
**The developer (𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪) is NOT responsible for:**
- Any misuse of this software
- Any damages caused by this software
- Any legal consequences from using this software
- Any violations of Terms of Service
- Any data loss or security breaches
- Any financial losses

### Original Attribution
This project is based on the original work by **Xeon**. Significant modifications, enhancements, and maintenance have been performed by **𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪**.

### Terms Acceptance
**By downloading, installing, or using this software, you acknowledge that:**
- You have read and understood this disclaimer
- You agree to use the software responsibly and legally
- You accept full responsibility for your actions
- You will not hold the developer liable for any consequences
- You understand this is for educational purposes only

### Reporting Misuse
If you become aware of any misuse of this software, please report it to the developer immediately.

---

<div align="center">

**Original by Xeon • Modified & Enhanced by 𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪**

⚠️ **FOR EDUCATIONAL PURPOSES ONLY** ⚠️

**USE AT YOUR OWN RISK - DEVELOPER NOT RESPONSIBLE FOR MISUSE**

⭐ Star this repo if you find it useful!

</div>
