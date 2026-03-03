#!/usr/bin/env node

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              24xRaven X - Theme System                       ║
 * ║           Competitive Theme for Anastasia                    ║
 * ║                  Developed by ✘ 𝙍𝘼𝙑𝙀𝙉                      ║
 * ║                                                              ║
 * ║  GitHub: https://github.com/hsh34811-hash                    ║
 * ║  Telegram: @P_X_24                                           ║
 * ║  Channel: https://t.me/Raven_xx24                            ║
 * ║                                                              ║
 * ║  Copyright © 2026 ✘ 𝙍𝘼𝙑𝙀𝙉 - All Rights Reserved            ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

import { intro } from './src/intro.js';
import { mainMenu } from './src/menu.js';
import { loadTheme } from './src/themes/loader.js';

async function main() {
  try {
    // Load theme configuration
    const theme = await loadTheme('24xraven-x');
    
    // Show intro animation
    await intro(theme);
    
    // Show main menu
    await mainMenu(theme);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
