const ms = require('ms');

//━━━━━━━━━━━━━━━[ PREMIUM ]━━━━━━━━━━━━━━━━━//
function addPrem(usersDatabase, idchat, duration) {
  if (!usersDatabase[idchat]) {
    return 'User not found in database, tell the user to send a message to the bot first';
  }

  const durationInMillis = ms(duration);
  if (!durationInMillis) {
    return 'Invalid duration format.';
  }

  const now = Date.now();
  usersDatabase[idchat].premiumExpiry = now + durationInMillis;
  return `*</> PREMIUM </>*

*Subscribe Info* :
- User : @${idchat.split("@")[0]}
- Duration : ${duration.toUpperCase()}
- Expiry Time :
${new Date(usersDatabase[idchat].premiumExpiry).toLocaleString()}

*Benefit Info* :
- Premium Access : Yes
- User Priority : Yes
`
}

function delPrem(usersDatabase, idchat) {
  if (!usersDatabase[idchat]) {
    return 'User not found.';
  }

  delete usersDatabase[idchat].premiumExpiry;
  return `Premium has been removed.`;
}

function checkPremiumStatus(usersDatabase, XeonBotInc) {
  setInterval(() => {
  const now = Date.now();
  for (const id in usersDatabase) {
    if (usersDatabase[id].premiumExpiry && usersDatabase[id].premiumExpiry < now) {
      let teks = `*</> PREMIUM EXPIRED </>*

*Thanks for buying*

*Benefit Regular* :
- Premium Access : No
- User Priority : No
`;
      const contentText = {
        text: teks,
        contextInfo: {
          mentionedJid: XeonBotInc.ments(teks),
          externalAdReply: {
            title: `𓆩 𝑹𝒂𝒗𝒆𝒏 𝑪𝒓𝒂𝒔𝒉 𝑩𝒐𝒕 𓆪`,
            body: `PREMIUM EXPIRED 💳`,
            previewType: "PHOTO",
            thumbnailUrl: `https://imgbly.com/ib/BmutemqfUlKLlpy_1771714121.jpg`,
            sourceUrl: `https://whatsapp.com/channel/0029Vb7SIVs8F2pH6LfeVk0t`
          }
        }
      };
      XeonBotInc.sendMessage(id, contentText);
      console.log(`Notification: Premium for ${id} has expired.`);
      delete usersDatabase[id].premiumExpiry;
    }
  }
  }, 1000)
}

function isPremium(usersDatabase, idchat) {
  const now = Date.now();
  return usersDatabase[idchat] && usersDatabase[idchat].premiumExpiry && usersDatabase[idchat].premiumExpiry > now;
}

function listPremium(users) {
    const currentTime = Date.now();
    const premiumUsers = [];

    for (const user in users) {
        if (users[user].premiumExpiry > currentTime) {
            premiumUsers.push(user);
        }
    }

    return premiumUsers;
}

module.exports = {
    addPrem,
    delPrem,
    checkPremiumStatus,
    isPremium,
    listPremium
}