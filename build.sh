#!/bin/bash

# Build frontend with Vite
echo "Building frontend..."
cd client
npm install
npm run build  # Outputs to client/dist
mv client/dist ../dist  # Move to root dist directory
cd ..

# For Netlify, we'll use our pre-defined function file
echo "Setting up API functions for Netlify..."

# Ensure functions directory exists
mkdir -p dist/.netlify/functions

# Copy our pre-built serverless function
cp -r netlify/functions/* dist/.netlify/functions/

echo "Build completed successfully!"