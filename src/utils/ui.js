/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              24xRaven X - UI Utilities                       ║
 * ║                  Developed by ✘ 𝙍𝘼𝙑𝙀𝙉                      ║
 * ║  Copyright © 2026 ✘ 𝙍𝘼𝙑𝙀𝙉 - All Rights Reserved            ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

import chalk from 'chalk';
import gradient from 'gradient-string';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function renderHeader(theme) {
  const colors = theme.colors;
  const purpleCyan = gradient([colors.primary, colors.secondary]);
  
  console.log('\n');
  
  // Block Style XRAVEN title
  const title = `
        ██╗  ██╗██████╗  █████╗ ██╗   ██╗███████╗███╗   ██╗
        ╚██╗██╔╝██╔══██╗██╔══██╗██║   ██║██╔════╝████╗  ██║
         ╚███╔╝ ██████╔╝███████║██║   ██║█████╗  ██╔██╗ ██║
         ██╔██╗ ██╔══██╗██╔══██║╚██╗ ██╔╝██╔══╝  ██║╚██╗██║
        ██╔╝ ██╗██║  ██║██║  ██║ ╚████╔╝ ███████╗██║ ╚████║
        ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝
  `;
  
  console.log(purpleCyan(title));
  console.log();
  
  // Read Raven ASCII Art from test file
  try {
    const ravenPath = path.join(__dirname, '../../test');
    const raven = fs.readFileSync(ravenPath, 'utf8');
    console.log(purpleCyan(raven));
  } catch (error) {
    console.log(chalk.red('Error loading raven art:', error.message));
  }
  
  const border = '═'.repeat(80);
  console.log(chalk.hex(colors.border)(border));
  console.log(
    chalk.hex(colors.textSecondary).italic('                      C O M P E T I T I V E   E D I T I O N')
  );
  console.log(chalk.hex(colors.border)(border));
  console.log('\n');
}

export function renderBox(content, theme, options = {}) {
  const colors = theme.colors;
  const width = options.width || 60;
  const padding = options.padding || 2;
  
  const topBorder = '╔' + '═'.repeat(width - 2) + '╗';
  const bottomBorder = '╚' + '═'.repeat(width - 2) + '╝';
  const emptyLine = '║' + ' '.repeat(width - 2) + '║';
  
  console.log(chalk.hex(colors.border)(topBorder));
  
  for (let i = 0; i < padding; i++) {
    console.log(chalk.hex(colors.border)(emptyLine));
  }
  
  const lines = content.split('\n');
  lines.forEach(line => {
    const paddedLine = line.padEnd(width - 4);
    console.log(
      chalk.hex(colors.border)('║ ') +
      paddedLine +
      chalk.hex(colors.border)(' ║')
    );
  });
  
  for (let i = 0; i < padding; i++) {
    console.log(chalk.hex(colors.border)(emptyLine));
  }
  
  console.log(chalk.hex(colors.border)(bottomBorder));
}

export function renderProgressBar(progress, theme, width = 40) {
  const colors = theme.colors;
  const filled = Math.round((progress / 100) * width);
  const empty = width - filled;
  
  const bar = 
    chalk.hex(colors.primary)('█'.repeat(filled)) +
    chalk.hex(colors.surface)('░'.repeat(empty));
  
  return `[${bar}] ${progress}%`;
}
