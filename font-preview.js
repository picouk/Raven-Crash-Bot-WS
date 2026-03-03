import figlet from 'figlet';
import chalk from 'chalk';
import gradient from 'gradient-string';

const fonts = [
  'Standard',
  'Slant',
  'Big',
  'Doom',
  'Small Slant',
  'Cyberlarge',
  'Cybermedium',
  'Cybersmall',
  'Graffiti',
  'Isometric1',
  'Isometric2',
  'Isometric3',
  'Larry 3D',
  'Modular',
  'Ogre',
  'Rectangles',
  'Rounded',
  'Shadow',
  'Speed',
  'Stampatello',
  'Star Wars',
  'Stellar',
  'Stop',
  'Straight',
  'Varsity'
];

const purpleCyan = gradient(['#9D4EDD', '#06FFF0']);

console.log(chalk.bold('\n🎨 Font Preview for "24xRaven X"\n'));
console.log('═'.repeat(80) + '\n');

fonts.forEach((font, index) => {
  try {
    console.log(chalk.hex('#06FFF0').bold(`${index + 1}. ${font}:`));
    console.log('─'.repeat(80));
    
    const text = figlet.textSync('24xRaven', { font: font, horizontalLayout: 'fitted' });
    console.log(purpleCyan(text));
    
    const xText = figlet.textSync('X', { font: font, horizontalLayout: 'fitted' });
    console.log(chalk.hex('#06FFF0').bold(xText));
    
    console.log('\n');
  } catch (e) {
    console.log(chalk.red(`Font "${font}" not available\n`));
  }
});

console.log('═'.repeat(80));
console.log(chalk.hex('#9D4EDD')('\n✨ Choose your favorite font number!\n'));
