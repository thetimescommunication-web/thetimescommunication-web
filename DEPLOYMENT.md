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
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave as default)

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
