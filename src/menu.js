/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              24xRaven X - Main Menu                          ║
 * ║                  Developed by ✘ 𝙍𝘼𝙑𝙀𝙉                      ║
 * ║  Copyright © 2026 ✘ 𝙍𝘼𝙑𝙀𝙉 - All Rights Reserved            ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

import inquirer from 'inquirer';
import chalk from 'chalk';
import { showGallery } from './screens/gallery.js';
import { showSettings } from './screens/settings.js';
import { showCredits } from './screens/credits.js';
import { showGameStart } from './screens/game.js';
import { renderHeader } from './utils/ui.js';

export async function mainMenu(theme) {
  const colors = theme.colors;
  
  while (true) {
    console.clear();
    
    // Render header
    renderHeader(theme);
    
    // Menu prompt
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: chalk.hex(colors.text)('Select an option:'),
        choices: [
          {
            name: chalk.hex(colors.primary)('▶  START GAME'),
            value: 'start'
          },
          {
            name: chalk.hex(colors.text)('⟳  CONTINUE'),
            value: 'continue'
          },
          {
            name: chalk.hex(colors.secondary)('⚔  MULTIPLAYER'),
            value: 'multiplayer'
          },
          {
            name: chalk.hex(colors.text)('⚙  OPTIONS'),
            value: 'options'
          },
          {
            name: chalk.hex(colors.accent)('🖼  GALLERY'),
            value: 'gallery'
          },
          {
            name: chalk.hex(colors.textSecondary)('ℹ  CREDITS'),
            value: 'credits'
          },
          new inquirer.Separator(),
          {
            name: chalk.hex(colors.textSecondary)('✕  EXIT'),
            value: 'exit'
          }
        ],
        prefix: chalk.hex(colors.primary)('►'),
        loop: false
      }
    ]);
    
    // Handle menu selection
    switch (answer.action) {
      case 'start':
        await showGameStart(theme);
        break;
      case 'continue':
        console.log(chalk.hex(colors.accent)('\n  No saved game found.\n'));
        await sleep(2000);
        break;
      case 'multiplayer':
        console.log(chalk.hex(colors.secondary)('\n  Multiplayer mode coming soon!\n'));
        await sleep(2000);
        break;
      case 'options':
        await showSettings(theme);
        break;
      case 'gallery':
        await showGallery(theme);
        break;
      case 'credits':
        await showCredits(theme);
        break;
      case 'exit':
        console.clear();
        console.log(chalk.hex(colors.primary)('\n  Thanks for using 24xRaven X!\n'));
        process.exit(0);
    }
  }
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
