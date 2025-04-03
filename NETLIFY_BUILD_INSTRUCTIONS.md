# Netlify Build and Environment Configuration

This document provides detailed instructions for setting up your Netlify environment for this project.

## Required Environment Variables

Set the following environment variables in your Netlify site settings (Site settings > Build & deploy > Environment):

| Variable Name | Description | Example Value |
|---------------|-------------|--------------|
| `NODE_VERSION` | Node.js version to use | `18` |
| `NPM_VERSION` | npm version to use | `9` |

## Build Settings

Configure the following build settings in Netlify:

1. **Build command**: `sh build.sh`
2. **Publish directory**: `dist`
3. **Functions directory**: `netlify/functions`

## Common Deployment Issues & Solutions

### 1. "Page not found" error

If you're seeing a "Page not found" error:

- Ensure your redirects are correctly set up in netlify.toml (already done in this repo)
- Try running a manual deploy with "Clear cache and deploy site" option in Netlify
- Check the deploy logs for any build errors

### 2. Serverless function issues

If API calls are failing:

- Ensure API calls in the browser are correctly formatted to use `/.netlify/functions/api/route` pattern
- Check if the functions were deployed correctly in the Netlify "Functions" tab
- Try accessing a function directly via its URL to see specific error messages

### 3. Build failures

If builds are failing:

- Review the detailed build log in Netlify
- Ensure Node.js version is set to 16, 18, or 20 (via environment variables)
- Try the build locally with `sh build.sh` to identify environment-specific issues

## Important Notes

- The frontend is configured to automatically detect Netlify environments and will rewrite API URLs for production
- If you need to debug API issues, try hitting the health check endpoint: `/.netlify/functions/api/health`