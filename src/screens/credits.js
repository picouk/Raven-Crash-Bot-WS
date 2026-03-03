/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              24xRaven X - Credits Screen                     ║
 * ║                  Developed by ✘ 𝙍𝘼𝙑𝙀𝙉                      ║
 * ║  Copyright © 2026 ✘ 𝙍𝘼𝙑𝙀𝙉 - All Rights Reserved            ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';

export async function showCredits(theme) {
  console.clear();
  const colors = theme.colors;
  const purpleCyan = gradient([colors.primary, colors.secondary]);
  
  console.log('\n');
  console.log(purpleCyan.multiline('  ═══════════════════════════════════════════════════════'));
  console.log(chalk.hex(colors.primary).bold('\n                    24xRaven X - CREDITS\n'));
  console.log(purpleCyan.multiline('  ═══════════════════════════════════════════════════════\n'));
  
  const credits = [
    { role: 'Developer', name: '✘ 𝙍𝘼𝙑𝙀𝙉' },
    { role: 'Theme Designer', name: '24xRaven Team' },
    { role: 'Visual Identity', name: 'Purple/Cyan/Red Scheme' },
    { role: 'Typography', name: 'Orbitron & Rajdhani' },
    { role: 'Target Platform', name: 'Anastasia (New Version)' },
    { role: 'Competition', name: '1v1 Tournament Edition' },
    { role: 'GitHub', name: 'hsh34811-hash' },
    { role: 'Telegram', name: '@P_X_24' },
    { role: 'Channel', name: 't.me/Raven_xx24' }
  ];
  
  credits.forEach(credit => {
    console.log(
      chalk.hex(colors.secondary)(`  ${credit.role.padEnd(20)}: `) +
      chalk.hex(colors.text)(credit.name)
    );
  });
  
  console.log('\n');
  console.log(chalk.hex(colors.textSecondary)('  Special Thanks:\n'));
  console.log(chalk.hex(colors.text)('  • Anastasia Development Team'));
  console.log(chalk.hex(colors.text)('  • Tournament Organizers'));
  console.log(chalk.hex(colors.text)('  • Community Supporters\n'));
  
  console.log(purpleCyan.multiline('  ═══════════════════════════════════════════════════════'));
  console.log(chalk.hex(colors.accent).italic('\n           "Competitive. Elegant. Modern."\n'));
  console.log(chalk.hex(colors.textSecondary)('           Copyright © 2026 ✘ 𝙍𝘼𝙑𝙀𝙉 - All Rights Reserved\n'));
  console.log(purpleCyan.multiline('  ═══════════════════════════════════════════════════════\n'));
  
  await inquirer.prompt([
    {
      type: 'input',
      name: 'continue',
      message: chalk.hex(colors.textSecondary)('Press Enter to return to menu...')
    }
  ]);
}
