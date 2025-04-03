#!/bin/bash

# Build frontend with Vite
echo "Building frontend..."
cd client
npm install
npm run build  # Outputs to client/dist
mv client/dist ../dist  # Move to root dist directory
cd ..

# Build serverless functions
echo "Building API functions..."
cd server
npm install

# Bundle server code for Netlify Functions
esbuild index.ts \
  --bundle \
  --platform=node \
  --target=node18 \
  --format=esm \
  --packages=external \
  --outfile=../netlify/functions/api.js

cd ..

# Ensure functions directory exists
mkdir -p dist/.netlify/functions

# Copy serverless functions to final location
cp -r netlify/functions/* dist/.netlify/functions/

echo "Build completed successfully!"