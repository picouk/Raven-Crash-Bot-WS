/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              24xRaven X - Sound System                       ║
 * ║                  Developed by ✘ 𝙍𝘼𝙑𝙀𝙉                      ║
 * ║  Copyright © 2026 ✘ 𝙍𝘼𝙑𝙀𝙉 - All Rights Reserved            ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

import path from 'path';
import { fileURLToPath } from 'url';
import sound from 'sound-play';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function playIntroSound() {
  try {
    // Try MP3 first
    let soundPath = path.join(__dirname, '../../assets/intro.mp3');
    
    // If MP3 doesn't exist, try WAV
    if (!fs.existsSync(soundPath)) {
      soundPath = path.join(__dirname, '../../assets/intro.wav');
    }
    
    // Check if file exists
    if (fs.existsSync(soundPath)) {
      // Play sound using sound-play (works on Windows, Mac, Linux)
      await sound.play(soundPath);
    }
  } catch (error) {
    // Silently fail if sound doesn't work
  }
}
