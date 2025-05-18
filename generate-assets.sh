#!/bin/bash

# Go to scripts directory
cd scripts

# Install dependencies if not already installed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Run the generator
echo "Generating random PWA assets..."
node generate-pwa-assets.js

echo "Done!" 