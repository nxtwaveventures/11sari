#!/bin/bash

# Exit on error
set -e

echo "Starting deployment to GitHub Pages..."

# Clean previous build
rm -rf .next out

# Install dependencies if needed
if [ "$1" == "--install" ]; then
  echo "Installing dependencies..."
  npm ci
fi

# Build the Next.js app
echo "Building Next.js app..."
npm run build

# Add .nojekyll file to tell GitHub to not use Jekyll
echo "Preparing files for GitHub Pages..."
touch out/.nojekyll

# Add CNAME file
echo "11sari.com" > out/CNAME

# Add build info
echo "Build completed on $(date)" > out/build-info.txt

# Deploy to GitHub Pages using gh-pages package
echo "Deploying to GitHub Pages..."
if command -v npx &> /dev/null; then
  npx gh-pages -d out -t true
else
  echo "Error: npx not found. Please install Node.js or run with npm scripts."
  exit 1
fi

echo "Deployment complete! Your site should be live shortly."
echo "Visit: https://11sari.com or https://nxtwaveventures.github.io/11sari" 