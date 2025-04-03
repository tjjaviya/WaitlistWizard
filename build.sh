#!/bin/bash
set -e

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the client code
echo "Building frontend..."
cd client
npm install
npm run build
mkdir -p ../dist
cp -r dist/* ../dist/
cd ..

# Make sure functions are in the right place for Netlify
echo "Setting up serverless functions for Netlify..."
# We're keeping our pre-defined function files

echo "Build completed successfully!"