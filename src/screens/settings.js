/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              24xRaven X - Settings Screen                    ║
 * ║                  Developed by ✘ 𝙍𝘼𝙑𝙀𝙉                      ║
 * ║  Copyright © 2026 ✘ 𝙍𝘼𝙑𝙀𝙉 - All Rights Reserved            ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

import chalk from 'chalk';
import inquirer from 'inquirer';

export async function showSettings(theme) {
  console.clear();
  const colors = theme.colors;
  
  console.log('\n');
  console.log(chalk.hex(colors.primary).bold('  ⚙  SETTINGS\n'));
  
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'setting',
      message: chalk.hex(colors.text)('Choose a setting:'),
      choices: [
        {
          name: chalk.hex(colors.text)('🎨 Theme Colors'),
          value: 'colors'
        },
        {
          name: chalk.hex(colors.text)('✨ Visual Effects'),
          value: 'effects'
        },
        {
          name: chalk.hex(colors.text)('⚡ Performance'),
          value: 'performance'
        },
        {
          name: chalk.hex(colors.text)('♿ Accessibility'),
          value: 'accessibility'
        },
        new inquirer.Separator(),
        {
          name: chalk.hex(colors.textSecondary)('← Back to Menu'),
          value: 'back'
        }
      ]
    }
  ]);
  
  if (answer.setting === 'back') return;
  
  // Show selected setting details
  console.log('\n');
  console.log(chalk.hex(colors.secondary)(`  ${answer.setting.toUpperCase()} settings\n`));
  console.log(chalk.hex(colors.textSecondary)('  Configuration options will be available here.\n'));
  
  await inquirer.prompt([
    {
      type: 'input',
      name: 'continue',
      message: chalk.hex(colors.textSecondary)('Press Enter to continue...')
    }
  ]);
}
