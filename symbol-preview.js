import chalk from 'chalk';
import gradient from 'gradient-string';

const purpleCyan = gradient(['#9D4EDD', '#06FFF0']);

const symbols = [
  {
    name: 'Raven Bird (Flying)',
    art: `
        ▄▄▄▄▄▄▄
       ████████████
      ██▀▀▀▀▀▀▀▀██
     ██  ◉    ◉  ██
     ██     ▼     ██
      ██   ═══   ██
       ██▄▄▄▄▄▄██
        ▀██████▀
          ████
         ██████
        ████████
    `
  },
  {
    name: 'Raven Head (Side View)',
    art: `
           ▄▄▄▄▄
         ▄█████████▄
        ███▀▀▀▀▀███
       ███  ◉   ███
       ███   ▼  ███
        ███▄▄▄███
         ▀█████▀
          ▀███▀
    `
  },
  {
    name: 'Gaming Controller',
    art: `
       ▄▄▄▄▄▄▄▄▄▄▄
      ███████████████
     ██▀▀▀▀▀▀▀▀▀▀▀██
    ██  ◯  ▄▄▄  ◯  ██
    ██    █████    ██
     ██   ▀▀▀▀▀   ██
      ███████████████
       ▀▀▀▀▀▀▀▀▀▀▀
    `
  },
  {
    name: 'Crown (Competitive)',
    art: `
         ♔
       ▄███▄
      ███████
     █████████
    ███████████
     ▀███████▀
      ▀█████▀
       ▀███▀
        ▀█▀
    `
  },
  {
    name: 'Lightning Bolt',
    art: `
        ▄▄▄▄
       ████▀
      ████▀
     ████▀
    ████▀▀▀▀
   ████████
  ████▀▀▀
 ████▀
████▀
    `
  },
  {
    name: 'Sword (Competitive)',
    art: `
        ║
        ║
       ╔╩╗
       ╠═╣
       ╠═╣
       ╠═╣
      ╔╩═╩╗
      ╚═══╝
       ▀█▀
    `
  },
  {
    name: 'Shield',
    art: `
      ▄▄▄▄▄▄▄
     ███████████
    █████████████
    █████████████
    █████████████
     ███████████
      █████████
       ███████
        █████
         ███
          █
    `
  },
  {
    name: 'Phoenix Rising',
    art: `
         ▲
        ▲ ▲
       ▲▲ ▲▲
      ▲▲▲ ▲▲▲
     ▲▲▲▲▲▲▲▲▲
      ▲▲▲▲▲▲▲
       ▲▲▲▲▲
        ▲▲▲
         █
    `
  },
  {
    name: 'Dragon Head',
    art: `
       ▄▄▄▄▄▄
      ████████▄▄
     ███▀▀▀████
    ███  ◉  ███
    ███  ▼  ███▄▄
     ███▄▄████▀▀
      ▀██████
       ▀████
    `
  },
  {
    name: 'Hexagon Tech',
    art: `
       ▄▄▄▄▄▄▄
      ███████████
     █████████████
    ███████████████
    ███████████████
     █████████████
      ███████████
       ▀▀▀▀▀▀▀
    `
  },
  {
    name: 'Cyber Skull',
    art: `
       ▄▄▄▄▄▄▄
      ███████████
     ███▀▀▀▀▀███
    ███ ◉   ◉ ███
    ███   ▼   ███
     ███ ═══ ███
      ███████████
       ▀▀███▀▀
    `
  },
  {
    name: 'Star Burst',
    art: `
         ★
        ╱│╲
       ╱ │ ╲
      ★──┼──★
       ╲ │ ╱
        ╲│╱
         ★
    `
  },
  {
    name: 'Diamond Gem',
    art: `
         ▲
        ╱ ╲
       ╱   ╲
      ╱     ╲
     ◆───────◆
      ╲     ╱
       ╲   ╱
        ╲ ╱
         ▼
    `
  },
  {
    name: 'Minimal X',
    art: `
      ╲     ╱
       ╲   ╱
        ╲ ╱
         ╳
        ╱ ╲
       ╱   ╲
      ╱     ╲
    `
  },
  {
    name: 'Wings',
    art: `
    ▄▄▄       ▄▄▄
   █████     █████
  ███████   ███████
 █████████ █████████
  ███████   ███████
   █████     █████
    ▀▀▀       ▀▀▀
    `
  }
];

console.log(chalk.bold('\n🎨 Symbol Preview for 24xRaven X\n'));
console.log('═'.repeat(80) + '\n');

symbols.forEach((symbol, index) => {
  console.log(chalk.hex('#06FFF0').bold(`${index + 1}. ${symbol.name}:`));
  console.log('─'.repeat(80));
  console.log(purpleCyan(symbol.art));
  console.log('\n');
});

console.log('═'.repeat(80));
console.log(chalk.hex('#9D4EDD')('\n✨ Choose your favorite symbol number!\n'));
