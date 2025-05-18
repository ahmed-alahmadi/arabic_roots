/**
 * Script to generate random PWA splash screens and icons
 * Run with: node scripts/generate-pwa-assets.js
 */

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Define splash screen sizes needed for iOS
const splashScreens = [
  { name: 'apple-splash-2048-2732.png', width: 2048, height: 2732 },
  { name: 'apple-splash-1668-2388.png', width: 1668, height: 2388 },
  { name: 'apple-splash-1536-2048.png', width: 1536, height: 2048 },
  { name: 'apple-splash-1125-2436.png', width: 1125, height: 2436 },
  { name: 'apple-splash-750-1334.png', width: 750, height: 1334 },
  { name: 'apple-splash-640-1136.png', width: 640, height: 1136 }
];

// Define icons
const icons = [
  { name: 'favicon.ico', size: 32 },
  { name: 'logo192.png', size: 192 },
  { name: 'logo512.png', size: 512 },
  { name: 'icons/icon-192.png', size: 192 },
  { name: 'icons/icon-512.png', size: 512 },
  { name: 'icons/icon-192-maskable.png', size: 192 },
  { name: 'icons/icon-512-maskable.png', size: 512 }
];

// Create directories if they don't exist
const publicDir = path.join(__dirname, '..', 'public');
const splashDir = path.join(publicDir, 'splash');
const iconsDir = path.join(publicDir, 'icons');

if (!fs.existsSync(splashDir)) {
  fs.mkdirSync(splashDir, { recursive: true });
  console.log('Created splash directory');
}

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
  console.log('Created icons directory');
}

// Random color generator
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Generate a random pattern for a canvas
function generateRandomPattern(ctx, width, height, isIcon = false) {
  // Background
  const bgColor = getRandomColor();
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  
  // Random shapes
  const numShapes = Math.floor(Math.random() * 20) + 10;
  
  for (let i = 0; i < numShapes; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const size = Math.random() * (width * 0.3) + 20;
    const color = getRandomColor();
    
    ctx.fillStyle = color;
    
    // Randomly choose shape type
    const shapeType = Math.floor(Math.random() * 3);
    
    if (shapeType === 0) {
      // Circle
      ctx.beginPath();
      ctx.arc(x, y, size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else if (shapeType === 1) {
      // Rectangle
      ctx.fillRect(x - size / 2, y - size / 2, size, size);
    } else {
      // Triangle
      ctx.beginPath();
      ctx.moveTo(x, y - size / 2);
      ctx.lineTo(x - size / 2, y + size / 2);
      ctx.lineTo(x + size / 2, y + size / 2);
      ctx.closePath();
      ctx.fill();
    }
  }
  
  // Add text if it's an icon
  if (isIcon) {
    const fontSize = Math.floor(width * 0.2);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('AR', width / 2, height / 2);
  } else {
    // For splash screens, add app name
    const fontSize = Math.floor(width * 0.05);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Arabic Roots', width / 2, height / 2 - fontSize);
    ctx.fillText('Analyzer', width / 2, height / 2 + fontSize);
  }
}

// Generate splash screens
console.log('Generating random splash screens...');
splashScreens.forEach(screen => {
  const filePath = path.join(splashDir, screen.name);
  
  // Create canvas
  const canvas = createCanvas(screen.width, screen.height);
  const ctx = canvas.getContext('2d');
  
  // Generate random pattern
  generateRandomPattern(ctx, screen.width, screen.height);
  
  // Save as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filePath, buffer);
  
  console.log(`Generated random splash screen: ${screen.name}`);
});

// Generate icons
console.log('\nGenerating random icons...');
icons.forEach(icon => {
  const filePath = path.join(publicDir, icon.name);
  
  // Ensure directory exists (for nested icons)
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Create canvas
  const canvas = createCanvas(icon.size, icon.size);
  const ctx = canvas.getContext('2d');
  
  // Generate random pattern
  generateRandomPattern(ctx, icon.size, icon.size, true);
  
  // Save as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filePath, buffer);
  
  console.log(`Generated random icon: ${icon.name}`);
});

console.log('\nRandom PWA assets generation complete!');
console.log('Note: These are randomly generated assets. Replace them with real graphics for production.'); 