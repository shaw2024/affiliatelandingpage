# Quick Start Guide - Social Media AI Rewriter

## 🚀 Your App is Ready!

The development server is running at: **http://localhost:3000**

## ✅ What's Been Built

### 1. **Social Media Feed Page** (`/rewrite`)
- View popular posts from Facebook, Instagram, and TikTok
- Filter by platform
- See engagement metrics (likes, comments, shares)
- Click "Rewrite with AI" on any post

### 2. **AI Rewriting Interface**
- Powered by Claude 3.5 Sonnet
- Customize tone, platform, hashtags, and emojis
- Generate single rewrite or 3 variations
- Copy to clipboard or post directly

### 3. **Direct Social Media Posting**
- Post rewritten content to Facebook
- Post to Instagram (with images)
- Copy for manual posting

## 🔧 Next Steps to Get Started

### Option 1: Test with Mock Data (No API Keys Needed)

1. Open http://localhost:3000/rewrite
2. You'll see sample posts from all platforms
3. Click "Rewrite with AI" on any post
4. **Note**: Rewriting won't work yet without Claude API key

### Option 2: Set Up Claude AI (Recommended First Step)

1. Get an API key from: https://console.anthropic.com/
2. Create `.env.local` in your project root:
   ```bash
   cp .env.example .env.local
   ```
3. Add your key to `.env.local`:
   ```
   ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
   ```
4. Restart the dev server (Ctrl+C, then `npm run dev`)
5. Now you can rewrite content with AI! 🎉

### Option 3: Full Social Media Integration

Add these to `.env.local` to fetch real posts and post content:

```env
# Claude AI (required for rewriting)
ANTHROPIC_API_KEY=your_key_here

# Facebook (optional)
FACEBOOK_ACCESS_TOKEN=your_token
FACEBOOK_PAGE_ID=your_page_id

# Instagram (optional)  
INSTAGRAM_ACCESS_TOKEN=your_token
INSTAGRAM_BUSINESS_ACCOUNT_ID=your_account_id

# TikTok (optional)
TIKTOK_ACCESS_TOKEN=your_token
TIKTOK_CLIENT_KEY=your_key
TIKTOK_CLIENT_SECRET=your_secret
```

## 📖 How to Use

### Basic Workflow

1. **Browse Posts**: Go to `/rewrite` to see popular social media posts
2. **Select a Post**: Click "Rewrite with AI" on any post you like
3. **Customize**: Choose your target platform, tone, and options
4. **Rewrite**: Click "Rewrite with AI" or "Generate 3 Variations"
5. **Use Content**: 
   - Copy to clipboard and paste manually, OR
   - Click "Post to [platform]" for direct posting

### Available Pages

- `/` - Home page with your blog posts
- `/rewrite` - Social media AI rewriter (new!)
- `/admin` - Add new blog posts
- `/about` - About page

## 🎯 Key Features

### Rewriting Options

- **Tone**: Casual, Professional, Enthusiastic, Informative
- **Platform**: Optimized for Facebook, Instagram, or TikTok
- **Hashtags**: Toggle on/off
- **Emojis**: Toggle on/off
- **Variations**: Generate 3 different versions at once

### Smart Features

- Posts sorted by engagement (likes + comments + shares)
- Platform-specific optimization
- Original media (images/videos) preserved
- One-click copy to clipboard
- Direct posting to social platforms

## 📁 Important Files

- `SOCIAL_REWRITER_GUIDE.md` - Complete documentation
- `.env.example` - Template for environment variables
- `.env.local` - Your actual credentials (create this)

## 🔒 Security Notes

- Never commit `.env.local` to git (it's already in .gitignore)
- Keep API keys secret
- Rotate tokens regularly
- Mock data is used when credentials aren't configured

## 🐛 Troubleshooting

### "Failed to rewrite content"
→ Add your `ANTHROPIC_API_KEY` to `.env.local`

### "No posts found"
→ This is normal! Add social media API credentials or use the mock data for testing

### Port already in use
→ Stop the dev server (Ctrl+C) or use a different port: `npm run dev -- -p 3001`

## 📚 Documentation

For detailed API setup instructions, see `SOCIAL_REWRITER_GUIDE.md`

## 🎨 What You Can Do Now

1. ✅ Browse mock social media posts
2. ✅ See the rewriting interface
3. ⏳ Get Claude API key to enable AI rewriting
4. ⏳ Add social media credentials to fetch real posts
5. ⏳ Post directly to your social accounts

---

**Ready to get started?** 

1. Open http://localhost:3000/rewrite
2. Click "Rewrite with AI" on any post
3. Get your Claude API key to make it work!

Happy content creating! 🚀
