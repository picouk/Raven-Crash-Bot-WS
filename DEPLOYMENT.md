# Deployment Guide

Complete guide for deploying Raven Crash Bot to various platforms.

## Table of Contents

- [Local Deployment](#local-deployment)
- [VPS Deployment](#vps-deployment)
- [Cloud Platforms](#cloud-platforms)
- [Docker Deployment](#docker-deployment)
- [PM2 Process Manager](#pm2-process-manager)
- [Monitoring & Maintenance](#monitoring--maintenance)

---

## Local Deployment

### For Development & Testing

**Prerequisites:**
- Node.js v16+ installed
- Git installed
- Bot token from BotFather

**Steps:**

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/raven-crash-bot.git
cd raven-crash-bot

# Install dependencies
npm install

# Configure bot
cp .env.example .env
nano settings.js  # Edit configuration

# Run bot
npm start
```

**Pros:**
- Easy to test and debug
- No hosting costs
- Full control

**Cons:**
- Bot stops when computer sleeps
- Not suitable for production
- Requires computer to be always on

---

## VPS Deployment

### Ubuntu/Debian Server

**Step 1: Connect to VPS**

```bash
ssh root@your-server-ip
```

**Step 2: Install Node.js**

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version
npm --version
```

**Step 3: Install Git**

```bash
sudo apt install git -y
```

**Step 4: Clone Repository**

```bash
cd /opt
git clone https://github.com/YOUR_USERNAME/raven-crash-bot.git
cd raven-crash-bot
```

**Step 5: Install Dependencies**

```bash
npm install --production
```

**Step 6: Configure Bot**

```bash
nano settings.js
# Edit your configuration
# Press Ctrl+X, then Y, then Enter to save
```

**Step 7: Install PM2**

```bash
sudo npm install -g pm2
```

**Step 8: Start Bot with PM2**

```bash
pm2 start index.js --name "raven-bot"
pm2 save
pm2 startup
```

**Step 9: Configure Firewall (Optional)**

```bash
sudo ufw allow 22/tcp
sudo ufw enable
```

---

### CentOS/RHEL Server

**Install Node.js:**

```bash
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
```

**Follow the same steps as Ubuntu** for the rest of the deployment.

---

## Cloud Platforms

### Heroku Deployment

**Prerequisites:**
- Heroku account
- Heroku CLI installed

**Step 1: Prepare Repository**

Create `Procfile`:
```
worker: node index.js
```

Create `.gitignore`:
```
node_modules/
.env
*.log
```

**Step 2: Deploy**

```bash
# Login to Heroku
heroku login

# Create app
heroku create your-bot-name

# Set config vars
heroku config:set BOT_TOKEN=your_bot_token
heroku config:set DEVELOPER_ID=your_telegram_id

# Deploy
git push heroku main

# Scale worker
heroku ps:scale worker=1

# View logs
heroku logs --tail
```

**Pros:**
- Free tier available
- Easy deployment
- Automatic SSL

**Cons:**
- Free tier has limitations
- Dyno sleeps after 30 minutes of inactivity

---

### Railway Deployment

**Step 1: Connect Repository**

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository

**Step 2: Configure Environment**

Add environment variables:
```
BOT_TOKEN=your_bot_token
DEVELOPER_ID=your_telegram_id
NODE_ENV=production
```

**Step 3: Deploy**

Railway automatically deploys on push to main branch.

**Pros:**
- Free tier with $5 credit
- Automatic deployments
- Easy to use

**Cons:**
- Limited free tier
- Requires credit card for verification

---

### DigitalOcean Deployment

**Step 1: Create Droplet**

1. Go to DigitalOcean
2. Create new Droplet
3. Choose Ubuntu 22.04
4. Select plan ($5/month minimum)
5. Add SSH key
6. Create Droplet

**Step 2: Follow VPS Deployment Steps**

Use the Ubuntu/Debian guide above.

**Pros:**
- Reliable infrastructure
- Good performance
- Scalable

**Cons:**
- Paid service
- Requires server management

---

## Docker Deployment

### Create Dockerfile

```dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application files
COPY . .

# Expose port (if needed)
# EXPOSE 3000

# Start bot
CMD ["node", "index.js"]
```

### Create docker-compose.yml

```yaml
version: '3.8'

services:
  bot:
    build: .
    container_name: raven-bot
    restart: unless-stopped
    environment:
      - BOT_TOKEN=${BOT_TOKEN}
      - DEVELOPER_ID=${DEVELOPER_ID}
    volumes:
      - ./database:/app/database
      - ./lib2/pairing:/app/lib2/pairing
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

### Deploy with Docker

```bash
# Build image
docker build -t raven-bot .

# Run container
docker run -d \
  --name raven-bot \
  --restart unless-stopped \
  -e BOT_TOKEN=your_token \
  -e DEVELOPER_ID=your_id \
  -v $(pwd)/database:/app/database \
  raven-bot

# Or use docker-compose
docker-compose up -d

# View logs
docker logs -f raven-bot

# Stop container
docker stop raven-bot

# Restart container
docker restart raven-bot
```

**Pros:**
- Isolated environment
- Easy to replicate
- Portable

**Cons:**
- Requires Docker knowledge
- Additional overhead

---

## PM2 Process Manager

### Installation

```bash
npm install -g pm2
```

### Basic Commands

```bash
# Start bot
pm2 start index.js --name "raven-bot"

# View status
pm2 status

# View logs
pm2 logs raven-bot

# Monitor resources
pm2 monit

# Restart bot
pm2 restart raven-bot

# Stop bot
pm2 stop raven-bot

# Delete from PM2
pm2 delete raven-bot

# Save PM2 configuration
pm2 save

# Setup startup script
pm2 startup
```

### Advanced Configuration

Create `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [{
    name: 'raven-bot',
    script: 'index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true
  }]
};
```

Start with config:
```bash
pm2 start ecosystem.config.js
```

---

## Monitoring & Maintenance

### System Monitoring

**Check Bot Status:**
```bash
pm2 status
```

**View Real-time Logs:**
```bash
pm2 logs raven-bot --lines 100
```

**Monitor Resources:**
```bash
pm2 monit
```

**System Resources:**
```bash
htop  # or top
df -h  # disk usage
free -h  # memory usage
```

### Automated Backups

**Create Backup Script** (`backup.sh`):

```bash
#!/bin/bash

# Configuration
BACKUP_DIR="/root/backups"
BOT_DIR="/opt/raven-crash-bot"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup database files
tar -czf $BACKUP_DIR/bot_backup_$DATE.tar.gz \
  $BOT_DIR/database \
  $BOT_DIR/lib/premium.json \
  $BOT_DIR/lib/reseller.json \
  $BOT_DIR/users.json

# Keep only last 7 backups
cd $BACKUP_DIR
ls -t | tail -n +8 | xargs rm -f

echo "Backup completed: bot_backup_$DATE.tar.gz"
```

**Make Executable:**
```bash
chmod +x backup.sh
```

**Schedule with Cron:**
```bash
crontab -e

# Add this line for daily backup at 2 AM
0 2 * * * /root/backup.sh
```

### Log Rotation

**Install logrotate:**
```bash
sudo apt install logrotate
```

**Create config** (`/etc/logrotate.d/raven-bot`):
```
/opt/raven-crash-bot/logs/*.log {
    daily
    rotate 7
    compress
    delaycompress
    notifempty
    create 0640 root root
    sharedscripts
    postrotate
        pm2 reloadLogs
    endscript
}
```

### Auto-Update Script

**Create Update Script** (`update.sh`):

```bash
#!/bin/bash

cd /opt/raven-crash-bot

# Pull latest changes
git pull origin main

# Install dependencies
npm install --production

# Restart bot
pm2 restart raven-bot

echo "Bot updated and restarted"
```

### Health Check Script

**Create Health Check** (`health-check.sh`):

```bash
#!/bin/bash

# Check if bot is running
if pm2 list | grep -q "raven-bot.*online"; then
    echo "Bot is running"
    exit 0
else
    echo "Bot is not running! Restarting..."
    pm2 restart raven-bot
    exit 1
fi
```

**Schedule Health Check:**
```bash
crontab -e

# Check every 5 minutes
*/5 * * * * /root/health-check.sh
```

---

## Security Best Practices

### 1. Firewall Configuration

```bash
# Allow SSH
sudo ufw allow 22/tcp

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

### 2. SSH Key Authentication

```bash
# Generate SSH key (on local machine)
ssh-keygen -t rsa -b 4096

# Copy to server
ssh-copy-id root@your-server-ip

# Disable password authentication
sudo nano /etc/ssh/sshd_config
# Set: PasswordAuthentication no
sudo systemctl restart sshd
```

### 3. Regular Updates

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Update Node.js packages
npm update

# Check for vulnerabilities
npm audit
npm audit fix
```

### 4. Environment Variables

Never commit sensitive data. Use environment variables:

```bash
# Create .env file
nano .env

# Add variables
BOT_TOKEN=your_token
DEVELOPER_ID=your_id

# Load in application
require('dotenv').config();
```

---

## Troubleshooting

### Bot Not Starting

**Check logs:**
```bash
pm2 logs raven-bot --lines 50
```

**Common issues:**
- Invalid bot token
- Missing dependencies
- Port already in use
- Insufficient permissions

### High Memory Usage

**Check memory:**
```bash
pm2 monit
```

**Solutions:**
- Restart bot: `pm2 restart raven-bot`
- Increase memory limit in ecosystem.config.js
- Optimize code and database queries

### Bot Crashes Frequently

**Enable auto-restart:**
```bash
pm2 start index.js --name raven-bot --exp-backoff-restart-delay=100
```

**Check error logs:**
```bash
pm2 logs raven-bot --err
```

---

## Performance Optimization

### 1. Use Production Mode

```bash
NODE_ENV=production pm2 start index.js
```

### 2. Enable Clustering (if applicable)

```javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'raven-bot',
    script: 'index.js',
    instances: 2,  // or 'max' for all CPU cores
    exec_mode: 'cluster'
  }]
};
```

### 3. Optimize Database

- Use indexes for frequent queries
- Implement caching
- Clean old data regularly

### 4. Monitor Performance

```bash
pm2 install pm2-server-monit
```

---

## Scaling

### Horizontal Scaling

Run multiple instances:

```bash
pm2 start index.js -i max
```

### Vertical Scaling

Upgrade server resources:
- More RAM
- More CPU cores
- Faster storage (SSD)

### Load Balancing

Use nginx as reverse proxy for multiple instances.

---

## Support

Need help with deployment?

- Telegram: [@H4H_M4](https://t.me/H4H_M4)
- Documentation: [README.md](README.md)
- Issues: [GitHub Issues](https://github.com/YOUR_USERNAME/raven-crash-bot/issues)

---

**𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪**
