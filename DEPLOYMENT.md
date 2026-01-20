# GitHub Pages Deployment Guide

This guide will help you deploy your affiliate blog to GitHub Pages for free hosting.

## 🚀 Quick Start

Your site is already configured for GitHub Pages! Just follow these steps:

### Step 1: Push to GitHub

```bash
# Add all files
git add .

# Commit changes
git commit -m "Configure GitHub Pages deployment"

# Push to GitHub
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/shaw2024/affiliatelandingpage
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Click **Save**

### Step 3: Wait for Deployment

- The GitHub Actions workflow will automatically start
- Check the **Actions** tab to monitor progress
- First deployment takes 2-3 minutes
- Subsequent deployments are faster

### Step 4: Visit Your Site

Once deployed, your site will be available at:
```
https://shaw2024.github.io/affiliatelandingpage/
```

## 🔧 What Was Configured

### 1. Next.js Static Export
File: `next.config.js`
- Added `output: 'export'` for static site generation
- Configured `basePath` for GitHub Pages subdirectory
- Set `images.unoptimized: true` (required for static export)

### 2. GitHub Actions Workflow
File: `.github/workflows/deploy.yml`
- Automatically builds on push to main branch
- Generates static files in `/out` directory
- Deploys to GitHub Pages
- Runs Node.js 20 for compatibility

### 3. Jekyll Bypass
Files: `.nojekyll` and `public/.nojekyll`
- Prevents GitHub from processing with Jekyll
- Required for Next.js apps

## 📝 Making Updates

Every time you push to the `main` branch:
1. GitHub Actions automatically triggers
2. Site is rebuilt with latest changes
3. Deployed to GitHub Pages
4. Changes live in 2-3 minutes

```bash
# Make changes to your code
git add .
git commit -m "Update content"
git push origin main
# Wait 2-3 minutes for automatic deployment
```

## 🛠️ Manual Deployment (Optional)

You can also trigger deployment manually:

1. Go to your repository
2. Click **Actions** tab
3. Click "Deploy to GitHub Pages" workflow
4. Click **Run workflow** button
5. Select branch (main)
6. Click **Run workflow**

## 🔍 Troubleshooting

### Build Failing?

Check the Actions tab for error messages:
1. Go to repository → **Actions**
2. Click on the failed workflow
3. Expand the failed step to see error details

Common issues:
- **Dependencies error**: Run `npm install` locally to test
- **Build error**: Run `npm run build` locally to test
- **Type errors**: Fix TypeScript errors shown in logs

### Site Not Loading?

1. **Check GitHub Pages settings**:
   - Settings → Pages → Source should be "GitHub Actions"

2. **Verify deployment**:
   - Actions tab should show successful deployment
   - Look for green checkmark

3. **Clear browser cache**:
   - Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

4. **Wait a few minutes**:
   - First deployment can take up to 10 minutes
   - DNS propagation may cause delays

### Images Not Loading?

GitHub Pages has some limitations with Next.js Image optimization:
- We use `unoptimized: true` for static export
- Images load directly without optimization
- Use appropriately sized images for best performance

## 🌐 Custom Domain (Optional)

Want to use your own domain instead of github.io?

### Step 1: Buy a Domain
- Namecheap, GoDaddy, Google Domains, etc.

### Step 2: Configure DNS
Add these DNS records at your domain provider:

```
Type  Name  Value
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

For subdomain (www):
```
Type   Name  Value
CNAME  www   shaw2024.github.io
```

### Step 3: Update GitHub Settings
1. Repository → Settings → Pages
2. Under "Custom domain", enter your domain
3. Save and wait for DNS check

### Step 4: Update Next.js Config
In `next.config.js`, remove or comment out `basePath` and `assetPrefix`:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove these lines when using custom domain
  // basePath: '/affiliatelandingpage',
  // assetPrefix: '/affiliatelandingpage',
}
```

Commit and push changes.

## 📊 Analytics Setup

### Google Analytics

1. Get your GA4 measurement ID from Google Analytics

2. Create `.env.local`:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

3. Add to `app/layout.tsx`:
```typescript
// Add to <head>
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
    <script dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
      `
    }} />
  </>
)}
```

4. For GitHub Pages, create `.env.production`:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🎯 Performance Tips

1. **Optimize Images**:
   - Use WebP format
   - Compress before uploading
   - Use appropriate dimensions

2. **Minimize Bundle Size**:
   - Only import what you need
   - Use dynamic imports for large components

3. **CDN for Assets**:
   - Host images on Cloudinary or Imgur
   - Use external CDNs for better performance

## 🔒 Security

GitHub Pages is secure by default:
- ✅ Free SSL certificate
- ✅ HTTPS enforced
- ✅ DDoS protection
- ✅ No server to hack (static files only)

## 💰 Costs

**GitHub Pages is 100% FREE!**
- No hosting fees
- No bandwidth charges
- Unlimited builds
- Free SSL certificate

Limitations:
- 1 GB repository size limit
- 100 GB bandwidth per month
- 10 builds per hour

For most affiliate blogs, these limits are more than enough!

## 📈 Next Steps

After deployment:

1. **Add Content**: Use `/admin` to create posts
2. **Get Affiliate Links**: Join Amazon Associates, ShareASale, etc.
3. **SEO Optimization**: Submit sitemap to Google Search Console
4. **Promote**: Share on social media
5. **Analytics**: Monitor traffic and conversions

## 🆘 Need Help?

- Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Review [Next.js Static Export Guide](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- Open an issue in your repository

---

**Your affiliate blog is ready to make money! 🚀**
