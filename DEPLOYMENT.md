# Cloudflare Pages Deployment Guide

This project is configured for deployment on Cloudflare Pages.

## Prerequisites

1. A Cloudflare account (free tier works)
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Log in to Cloudflare Dashboard**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to **Pages** in the sidebar

2. **Create a New Project**
   - Click **Create a project**
   - Select **Connect to Git**
   - Authorize Cloudflare to access your Git repository
   - Select your repository

3. **Configure Build Settings**
   - **Framework preset**: Vite (or leave blank)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist` (no leading slash)
   - **Root directory**: `/` (leave as default)
   - **Deploy command**: `npx wrangler pages deploy dist` (required if field is mandatory)
   - **Non-production branch deploy command**: `npx wrangler pages deploy dist` (optional, can leave empty)
   - **Path**: `dist` (no leading slash)
   - **⚠️ Important**: Use `wrangler pages deploy` (not `wrangler deploy` which is for Workers)

4. **Environment Variables** (if needed)
   - Add any environment variables your app requires
   - Click **Save and Deploy**

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build your project**
   ```bash
   npm run build
   ```

4. **Deploy to Cloudflare Pages**
   ```bash
   wrangler pages deploy dist
   ```

## Important Notes

- The `_redirects` file in the `public` folder ensures that all routes are handled by your React Router SPA
- The build output (`dist` folder) will be automatically deployed
- Cloudflare Pages provides free SSL, CDN, and custom domains
- Your site will be available at `your-project.pages.dev` after deployment

## Custom Domain

After deployment, you can add a custom domain:
1. Go to your project in Cloudflare Pages
2. Click **Custom domains**
3. Add your domain and follow the DNS setup instructions

## Troubleshooting

### Error: "The entry-point file at 'workers-site/index.js' was not found"

This error occurs if the wrong wrangler command is used. To fix:

1. **Use the correct deploy command**
   - ✅ Correct: `npx wrangler pages deploy dist` (for Pages)
   - ❌ Wrong: `wrangler deploy` (for Workers)
   - ❌ Wrong: `wrangler pages deploy` without `dist`

2. **Check your build settings**
   - Build command: `npm run build`
   - Build output directory: `dist` (no leading slash)
   - Deploy command: `npx wrangler pages deploy dist`
   - Path: `dist` (no leading slash)

3. **Verify you're using Cloudflare Pages**
   - Make sure you're in the **Pages** section of the dashboard, not **Workers & Pages** → **Workers**

### Build succeeds but deployment fails

- Ensure the `_redirects` file exists in your `public` folder (it will be copied to `dist` during build)
- Check that your `dist` folder contains `index.html` after building
- Verify Node.js version compatibility (your project requires Node >=18.0.0)
