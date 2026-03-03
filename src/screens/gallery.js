/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              24xRaven X - Gallery Screen                     ║
 * ║                  Developed by ✘ 𝙍𝘼𝙑𝙀𝙉                      ║
 * ║  Copyright © 2026 ✘ 𝙍𝘼𝙑𝙀𝙉 - All Rights Reserved            ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

import chalk from 'chalk';
import inquirer from 'inquirer';
import { renderBox } from '../utils/ui.js';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function showGallery(theme) {
  console.clear();
  const colors = theme.colors;
  
  console.log('\n');
  console.log(chalk.hex(colors.primary).bold('  🖼  GALLERY\n'));
  
  const items = [
    { name: 'Theme Preview', description: 'View color palette and design' },
    { name: 'Screenshots', description: 'Browse theme screenshots' },
    { name: 'Animations', description: 'Preview animations and effects' },
    { name: 'Components', description: 'UI component showcase' }
  ];
  
  items.forEach((item, index) => {
    console.log(
      chalk.hex(colors.secondary)(`  ${index + 1}. `) +
      chalk.hex(colors.text)(item.name) +
      chalk.hex(colors.textSecondary)(` - ${item.description}`)
    );
  });
  
  console.log('\n');
  renderBox(
    chalk.hex(colors.text)('Gallery feature coming soon!\n') +
    chalk.hex(colors.textSecondary)('This will showcase theme components and previews.'),
    theme
  );
  
  await inquirer.prompt([
    {
      type: 'input',
      name: 'continue',
      message: chalk.hex(colors.textSecondary)('Press Enter to return to menu...')
    }
  ]);
}
