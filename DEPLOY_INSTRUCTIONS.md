# Netlify Deployment Instructions

This document provides step-by-step instructions for deploying this application to Netlify.

## Prerequisites

- A GitHub account
- A Netlify account (can sign up with GitHub)

## Steps for Deployment

### 1. Prepare your code

✅ The code has already been configured for Netlify deployment with:
- A `netlify.toml` configuration file
- Serverless functions in the `netlify/functions` directory
- API endpoints that automatically detect and use Netlify's function paths when deployed

### 2. Push your code to GitHub

1. Create a new GitHub repository
2. Push your code to the repository using:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 3. Deploy to Netlify

1. Log in to your Netlify account
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub as your Git provider
4. Select the repository you just created
5. Configure the following build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

### 4. Environment Variables (if needed)

If your application uses environment variables:
1. Go to your site's dashboard in Netlify
2. Navigate to "Site settings" → "Environment variables"
3. Add each environment variable and its value

### 5. Domain Management

1. In the Netlify dashboard, go to "Domain management"
2. You can use the default Netlify subdomain or configure a custom domain

## Troubleshooting

- **API not working**: Verify that API calls are using the correct paths. In production, API paths should be `/.netlify/functions/api/...` instead of `/api/...`
- **Build failures**: Check the build logs for any errors. Common issues include missing dependencies or incorrect build commands.
- **Redirects not working**: Ensure the `netlify.toml` file is properly configured with the correct redirects.

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)
- [Netlify CLI Documentation](https://cli.netlify.com/)