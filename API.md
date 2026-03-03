# API Documentation

This document describes the internal API structure and functions available in Raven Crash Bot.

## Table of Contents

- [Core Functions](#core-functions)
- [User Management](#user-management)
- [Premium System](#premium-system)
- [Membership Verification](#membership-verification)
- [Broadcasting](#broadcasting)
- [Utility Functions](#utility-functions)

---

## Core Functions

### Bot Initialization

```javascript
const bot = new Telegraf(BOT_TOKEN)
```

Initializes the Telegraf bot instance with the provided token.

### Start Command Handler

```javascript
bot.command("start", verifyUser, async (XeonBotInc) => {
    // Welcome message and bot introduction
})
```

**Parameters:**
- `XeonBotInc`: Telegraf context object

**Middleware:**
- `verifyUser`: Checks membership and premium status

**Returns:**
- Welcome message with inline keyboard

---

## User Management

### Save User

```javascript
async function saveUser(userId)
```

Saves a new user ID to the users database.

**Parameters:**
- `userId` (string): Telegram user ID

**Returns:**
- `void`

**Example:**
```javascript
await saveUser("123456789");
```

### Get User Name

```javascript
simple.getUserName(userObject)
```

Extracts user information from Telegram user object.

**Parameters:**
- `userObject`: Telegram user object

**Returns:**
- Object with user details (full_name, first_name, etc.)

---

## Premium System

### Add Premium User

```javascript
bot.command('addprem', async (XeonBotInc) => {
    // Add user to premium list
})
```

**Usage:**
```
/addprem 123456789
```

**Access Level:**
- Owner
- Reseller

**Parameters:**
- User Telegram ID

### Remove Premium User

```javascript
bot.command('delprem', async (XeonBotInc) => {
    // Remove user from premium list
})
```

**Usage:**
```
/delprem 123456789
```

**Access Level:**
- Owner
- Reseller

### List Premium Users

```javascript
bot.command("listprem", verifyUser, async (XeonBotInc) => {
    // Display all premium users
})
```

**Usage:**
```
/listprem
```

**Access Level:**
- Owner
- Reseller

**Returns:**
- List of premium user IDs

---

## Reseller System

### Add Reseller

```javascript
bot.command('addresell', async (XeonBotInc) => {
    // Add user to reseller list
})
```

**Usage:**
```
/addresell 123456789
```

**Access Level:**
- Owner only

### Remove Reseller

```javascript
bot.command('delresell', async (XeonBotInc) => {
    // Remove user from reseller list
})
```

**Usage:**
```
/delresell 123456789
```

**Access Level:**
- Owner only

### List Resellers

```javascript
bot.command("listresell", verifyUser, async (XeonBotInc) => {
    // Display all resellers with usernames
})
```

**Usage:**
```
/listresell
```

**Access Level:**
- Owner only

---

## Membership Verification

### Check Membership

```javascript
async function checkMembership(userId)
```

Verifies if a user is a member of required group and channel.

**Parameters:**
- `userId` (number): Telegram user ID

**Returns:**
- `boolean`: true if member, false otherwise

**Example:**
```javascript
const isMember = await checkMembership(123456789);
if (isMember) {
    // User is a member
}
```

### Verify User Middleware

```javascript
async function verifyUser(ctx, next)
```

Middleware function that checks:
1. If user is owner/premium/reseller (bypass)
2. If user is member of required groups
3. If user has premium access

**Parameters:**
- `ctx`: Telegraf context
- `next`: Next middleware function

**Flow:**
```
User Request
    ↓
Is Owner/Premium/Reseller? → Yes → Allow Access
    ↓ No
Is Member? → Yes → Check Premium
    ↓ No
Show Membership Required Message
```

---

## Broadcasting

### Broadcast Command

```javascript
bot.command('broadcast', async (XeonBotInc) => {
    // Send message to all users
})
```

**Usage:**
```
/broadcast Your message here
```

**Access Level:**
- Owner only

**Features:**
- Sends to all users and premium users
- Tracks success/failure count
- Supports Markdown formatting
- Skips unreachable users

**Example:**
```
/broadcast 🎉 New feature released! Check it out.
```

---

## Callback Query Handlers

### Check Membership Callback

```javascript
bot.on('callback_query', async (XeonBotInc) => {
    if (XeonBotInc.callbackQuery.data === "check_membership") {
        // Re-verify membership
    }
})
```

**Trigger:**
- User clicks "Check Again" button

**Action:**
- Clears membership cache
- Re-checks membership status
- Shows welcome or denial message

### Show Menu Callback

```javascript
if (XeonBotInc.callbackQuery.data === "show_menu") {
    // Display bot menu
}
```

**Trigger:**
- User clicks "MENU" button

**Action:**
- Shows bot menu with system info
- Displays available commands
- Shows RAM usage

---

## Utility Functions

### Escape Markdown V2

```javascript
function escapeMarkdownV2(text)
```

Escapes special characters for Telegram MarkdownV2 format.

**Parameters:**
- `text` (string): Text to escape

**Returns:**
- `string`: Escaped text

**Example:**
```javascript
const escaped = escapeMarkdownV2("Hello (world)!");
// Returns: "Hello \\(world\\)\\!"
```

### Format Size

```javascript
const formatSize = (bytes) => {
    // Convert bytes to human-readable format
}
```

**Parameters:**
- `bytes` (number): Size in bytes

**Returns:**
- `string`: Formatted size (e.g., "1.5 GB")

**Example:**
```javascript
const size = formatSize(1073741824);
// Returns: "1 GB"
```

---

## Global Variables

### Configuration

```javascript
global.BOT_TOKEN        // Telegram bot token
global.BOT_NAME         // Bot display name
global.DEVELOPER        // Array of owner IDs
global.GROUP_ID         // Required group ID
global.CHANNEL_ID       // Required channel ID
```

### Links

```javascript
global.GROUP_LINK           // Telegram group link
global.CHANNEL_INVITE_LINK  // Telegram channel link
global.WHATSAPP_LINK        // WhatsApp channel link
global.YOUTUBE_LINK         // YouTube channel link
global.TIKTOK_LINK          // TikTok profile link
```

### Images

```javascript
global.pp   // Bot profile picture URL
global.ppp  // Alternative profile picture URL
```

---

## Data Structures

### User Object

```javascript
{
    id: 123456789,
    first_name: "John",
    last_name: "Doe",
    username: "johndoe",
    full_name: "John Doe"
}
```

### Premium Users Array

```javascript
[
    "123456789",
    "987654321",
    "555666777"
]
```

### Reseller Users Array

```javascript
[
    "111222333",
    "444555666"
]
```

---

## Error Handling

### Common Errors

**Bot Token Invalid:**
```javascript
if (BOT_TOKEN == 'YOUR_TELEGRAM_BOT_TOKEN') {
    return console.log("No token detected")
}
```

**File Read Errors:**
```javascript
try {
    premiumUsers = JSON.parse(fs.readFileSync(premium_file));
} catch (error) {
    console.error('Error reading premiumUsers file:', error);
    premiumUsers = [];
}
```

**Telegram API Errors:**
```javascript
try {
    await ctx.replyWithPhoto(global.pp, { caption: message });
} catch (error) {
    console.error('Error sending photo:', error);
    await ctx.reply(message); // Fallback to text
}
```

---

## Cooldown System

### Implementation

```javascript
const cooldowns = new Map();

// Check cooldown
if (cooldowns.has(userId)) {
    const cooldownTime = cooldowns.get(userId);
    if (Date.now() < cooldownTime) {
        return; // User is in cooldown
    }
}

// Set cooldown (e.g., 5 seconds)
cooldowns.set(userId, Date.now() + 5000);
```

---

## Cache System

### Membership Cache

```javascript
const memberCache = new Map();

// Set cache
memberCache.set(userId, true);

// Get cache
const isMember = memberCache.get(userId);

// Clear cache
memberCache.delete(userId);

// Auto-clear after timeout
setTimeout(() => memberCache.delete(userId), 3000);
```

---

## Best Practices

### 1. Always Use Try-Catch

```javascript
try {
    await bot.telegram.sendMessage(userId, message);
} catch (error) {
    console.error('Error:', error);
}
```

### 2. Validate User Input

```javascript
const text = ctx.message.text.split(' ');
if (text.length < 2) {
    return ctx.reply("Usage: /command <parameter>");
}
```

### 3. Check Permissions

```javascript
const isOwner = global.DEVELOPER.includes(userId.toString());
if (!isOwner) {
    return ctx.reply("Unauthorized");
}
```

### 4. Use Middleware

```javascript
bot.command("protected", verifyUser, async (ctx) => {
    // This only runs if verifyUser passes
});
```

---

## Integration Examples

### Adding a New Command

```javascript
bot.command('mycommand', verifyUser, async (ctx) => {
    const userId = ctx.from.id.toString();
    
    // Check if user is premium
    if (!premiumUsers.includes(userId)) {
        return ctx.reply("Premium only feature");
    }
    
    // Your command logic here
    await ctx.reply("Command executed!");
});
```

### Adding a New Callback

```javascript
bot.on('callback_query', async (ctx) => {
    if (ctx.callbackQuery.data === "my_callback") {
        await ctx.answerCbQuery("Processing...");
        // Your callback logic here
    }
});
```

---

## Testing

### Manual Testing

```bash
# Start the bot
npm start

# Test commands in Telegram
/start
/menu
/addprem 123456789
```

### Automated Testing (Future)

```javascript
// Example test structure
describe('Premium System', () => {
    it('should add premium user', async () => {
        // Test logic
    });
});
```

---

## Performance Tips

1. **Use Caching**: Cache frequently accessed data
2. **Batch Operations**: Group database operations
3. **Async/Await**: Use properly to avoid blocking
4. **Error Handling**: Always handle errors gracefully
5. **Resource Monitoring**: Track memory and CPU usage

---

## Security Considerations

1. **Input Validation**: Always validate user input
2. **Access Control**: Check permissions before actions
3. **Rate Limiting**: Implement cooldowns
4. **Data Encryption**: Encrypt sensitive data
5. **Secure Storage**: Protect configuration files

---

**For more information, see:**
- [README.md](README.md) - General documentation
- [INSTALLATION.md](INSTALLATION.md) - Setup guide
- [FAQ.md](FAQ.md) - Common questions

**𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪**
