#!/bin/bash

# Build the frontend
echo "Building frontend..."
vite build

# Build the server for serverless functions
echo "Building server components..."
esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

# Create Netlify functions directory
echo "Setting up Netlify functions..."
mkdir -p dist/.netlify/functions
cp -r netlify/functions/* dist/.netlify/functions/

# Make functions executable
chmod +x dist/.netlify/functions/*.js

echo "Build completed successfully!"