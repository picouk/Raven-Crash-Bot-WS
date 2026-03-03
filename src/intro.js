/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              24xRaven X - Intro Animation                    ║
 * ║                  Developed by ✘ 𝙍𝘼𝙑𝙀𝙉                      ║
 * ║  Copyright © 2026 ✘ 𝙍𝘼𝙑𝙀𝙉 - All Rights Reserved            ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
import { playIntroSound } from './utils/sound.js';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Glitch effect
async function glitchEffect(text, color1, color2, times = 3) {
  for (let i = 0; i < times; i++) {
    const glitchChars = ['█', '▓', '▒', '░', '▀', '▄'];
    const glitchedText = text.split('').map(char => 
      Math.random() > 0.7 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
    ).join('');
    
    const color = i % 2 === 0 ? color1 : color2;
    process.stdout.write('\r' + chalk.hex(color).bold(glitchedText));
    await sleep(80);
  }
  process.stdout.write('\r' + chalk.hex(color1).bold(text));
  console.log();
}

export async function intro(theme) {
  console.clear();
  
  const colors = theme.colors;
  const purpleCyan = gradient([colors.primary, colors.secondary]);
  
  // Play intro sound (non-blocking)
  playIntroSound().catch(() => {});
  
  // Large XRAVEN title centered with fade-in animation
  console.log('\n\n\n');
  
  const title = `
                    ▒██   ██▒ ██▀███   ▄▄▄    ██▒   █▓▓█████  ███▄    █ 
                    ▒▒ █ █ ▒░▓██ ▒ ██▒▒████▄ ▓██░   █▒▓█   ▀  ██ ▀█   █ 
                    ░░  █   ░▓██ ░▄█ ▒▒██  ▀█▄▓██  █▒░▒███   ▓██  ▀█ ██▒
                     ░ █ █ ▒ ▒██▀▀█▄  ░██▄▄▄▄██▒██ █░░▒▓█  ▄ ▓██▒  ▐▌██▒
                    ▒██▒ ▒██▒░██▓ ▒██▒ ▓█   ▓██▒▒▀█░  ░▒████▒▒██░   ▓██░
                    ▒▒ ░ ░▓ ░░ ▒▓ ░▒▓░ ▒▒   ▓▒█░░ ▐░  ░░ ▒░ ░░ ▒░   ▒ ▒ 
                    ░░   ░▒ ░  ░▒ ░ ▒░  ▒   ▒▒ ░░ ░░   ░ ░  ░░ ░░   ░ ▒░
                     ░    ░    ░░   ░   ░   ▒     ░░     ░      ░   ░ ░ 
                     ░    ░     ░           ░  ░   ░     ░  ░         ░ 
                                                  ░                     
  `;
  
  const titleLines = title.split('\n');
  
  // Fade-in animation with color transition
  for (let i = 0; i < 6; i++) {
    console.clear();
    console.log('\n\n\n');
    
    // Animate title with different colors
    const colorSteps = [
      '#4a148c',
      '#6a1b9a',
      colors.primary,
      colors.secondary,
      colors.primary,
      colors.secondary
    ];
    
    for (let line of titleLines) {
      console.log(chalk.hex(colorSteps[i]).bold(line));
    }
    
    await sleep(150);
  }
  
  await sleep(300);
  
  // Subtitle with glitch effect
  console.log();
  const border = '                    ' + '═'.repeat(70);
  await glitchEffect(border, colors.border, colors.primary, 3);
  
  console.log(chalk.hex(colors.textSecondary).bold('                                  C O M P E T I T I V E   E D I T I O N'));
  
  await glitchEffect(border, colors.border, colors.primary, 3);
  console.log('\n');
  
  // Loading with gradient
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let frameIndex = 0;
  
  for (let i = 0; i <= 100; i += 5) {
    const filled = Math.round((i / 100) * 50);
    const empty = 50 - filled;
    
    const barChars = [];
    for (let j = 0; j < filled; j++) {
      const ratio = j / 50;
      const color = ratio < 0.5 ? colors.primary : colors.secondary;
      barChars.push(chalk.hex(color)('█'));
    }
    const bar = barChars.join('') + chalk.hex(colors.surface)('░'.repeat(empty));
    
    process.stdout.write(
      '\r                      ' + 
      chalk.hex(colors.secondary)(frames[frameIndex % frames.length]) + 
      '  INITIALIZING SYSTEM... [' + bar + '] ' + 
      chalk.hex(colors.accent).bold(i + '%')
    );
    
    frameIndex++;
    await sleep(35);
  }
  
  console.log('\n');
  
  // Success with glitch
  for (let i = 0; i < 4; i++) {
    const color = [colors.secondary, colors.primary, colors.accent, colors.secondary][i];
    process.stdout.write('\r                      ' + chalk.hex(color).bold('✓ SYSTEM READY - XRAVEN LOADED'));
    await sleep(150);
  }
  
  console.log('\n\n');
  await sleep(500);
  console.clear();
}
