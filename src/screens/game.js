/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              24xRaven X - Game Screen                        ║
 * ║                  Developed by ✘ 𝙍𝘼𝙑𝙀𝙉                      ║
 * ║  Copyright © 2026 ✘ 𝙍𝘼𝙑𝙀𝙉 - All Rights Reserved            ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

import chalk from 'chalk';
import ora from 'ora';
import { renderProgressBar } from '../utils/ui.js';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function showGameStart(theme) {
  console.clear();
  const colors = theme.colors;
  
  console.log('\n');
  console.log(chalk.hex(colors.primary).bold('  ▶  STARTING GAME...\n'));
  
  // Loading simulation
  const spinner = ora({
    text: chalk.hex(colors.text)('Initializing game engine...'),
    color: 'magenta'
  }).start();
  
  await sleep(1500);
  spinner.succeed(chalk.hex(colors.secondary)('Game engine ready'));
  
  // Progress bar simulation
  console.log('\n');
  for (let i = 0; i <= 100; i += 10) {
    process.stdout.write('\r  ' + renderProgressBar(i, theme));
    await sleep(200);
  }
  
  console.log('\n\n');
  console.log(chalk.hex(colors.accent)('  Game mode is a demo feature.\n'));
  console.log(chalk.hex(colors.textSecondary)('  This theme is designed for Anastasia system.\n'));
  
  await sleep(3000);
}
