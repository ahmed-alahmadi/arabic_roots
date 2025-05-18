# Random PWA Assets Generator

This script generates random colorful PWA assets (icons and splash screens) for your application.

## Requirements

- Node.js
- npm

## Installation

```bash
cd scripts
npm install
```

## Usage

```bash
cd scripts
node generate-pwa-assets.js
```

## What it generates

The script will generate:

1. Random colorful icons with "AR" text:
   - favicon.ico (32x32)
   - logo192.png (192x192)
   - logo512.png (512x512)
   - icons/icon-192.png (192x192)
   - icons/icon-512.png (512x512)
   - icons/icon-192-maskable.png (192x192)
   - icons/icon-512-maskable.png (512x512)

2. Random colorful splash screens with "Arabic Roots Analyzer" text:
   - splash/apple-splash-2048-2732.png (iPad Pro 12.9")
   - splash/apple-splash-1668-2388.png (iPad Pro 11")
   - splash/apple-splash-1536-2048.png (iPad Mini/Air)
   - splash/apple-splash-1125-2436.png (iPhone X/XS/11 Pro)
   - splash/apple-splash-750-1334.png (iPhone 8/SE)
   - splash/apple-splash-640-1136.png (iPhone 5/SE)

Each time you run the script, it generates new random images with different colors and patterns. 