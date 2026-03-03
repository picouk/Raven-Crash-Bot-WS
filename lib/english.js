function escapeMarkdownV2(text) {
    return text.replace(/([_*[\]()~`>#+\-=|{}.!\\])/g, '\\$1'); 
}

exports.noToken = "The bot token cannot be empty, please create a bot via https://t.me/BotFather";

exports.first_chat = (botname, pushname) => {
    return escapeMarkdownV2(`أهلاً يا ملك ${pushname} 👑🔥

𓆩 𝑹𝒂𝒗𝒆𝒏 𝑪𝒓𝒂𝒔𝒉 𝑩𝒐𝒕 𓆪

تحية الملوك… يا من دخلت بسَطوة الأباطرة 👑
لقد اعتليت عرش 𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪 ⚜️
عرشٌ ترتجف أمامه الخطوات ❄️
وتخضع له القوة قبل أن تُختبر 🔥

هنا مملكة الصفوة 🏰
حيث لا يُسمع إلا صدى العظمة ⚔️
ولا يُذكر إلا أصحاب الهيبة والمجد 🦅

احفظ مقامك جيدًا ⭐
فأنت الآن بين سادة هذا العرش 👑

ومن هنا… تبدأ الأساطير ✨
مرحبًا بك في عالم 𓆩 𝑹𝒂𝒗𝒆𝒏 𓆪 🔱
حيث يولد المجد… ولا يعرف النهاية 💎

📜 قائمة الأوامر ⬇️`);
};