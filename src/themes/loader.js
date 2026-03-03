/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              24xRaven X - Theme Loader                       ║
 * ║                  Developed by ✘ 𝙍𝘼𝙑𝙀𝙉                      ║
 * ║  Copyright © 2026 ✘ 𝙍𝘼𝙑𝙀𝙉 - All Rights Reserved            ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function loadTheme(themeName) {
  try {
    const themePath = join(__dirname, `${themeName}.json`);
    const themeData = await readFile(themePath, 'utf-8');
    return JSON.parse(themeData);
  } catch (error) {
    throw new Error(`Failed to load theme: ${themeName}`);
  }
}

export function getThemeColor(theme, colorName) {
  return theme.colors[colorName] || '#FFFFFF';
}
