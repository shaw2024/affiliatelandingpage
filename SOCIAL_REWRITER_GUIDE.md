# Social Media AI Rewriter - Setup Guide

## Overview

This application allows you to:
- Fetch popular posts from Facebook, Instagram, and TikTok
- Use Claude AI to rewrite content for your own social media
- Post rewritten content directly to your social media accounts

## Features

### 1. **Social Media Integration**
- **Facebook**: Fetch popular posts from your Facebook page
- **Instagram**: Get trending content from Instagram business accounts
- **TikTok**: Access popular TikTok videos and descriptions

### 2. **AI Content Rewriting**
- Powered by Claude 3.5 Sonnet (Anthropic)
- Multiple tone options: Casual, Professional, Enthusiastic, Informative
- Platform-specific optimization
- Customizable hashtags and emojis
- Generate multiple variations at once

### 3. **Direct Posting**
- Post rewritten content directly to Facebook, Instagram
- Copy to clipboard for manual posting
- Maintain original media (images/videos)

## Setup Instructions

### Step 1: Install Dependencies

The required packages are already installed:
- `@anthropic-ai/sdk` - For Claude AI integration
- `axios` - For HTTP requests to social media APIs

### Step 2: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your API credentials to `.env.local`:

#### Anthropic Claude API
Get your API key from: https://console.anthropic.com/
```
ANTHROPIC_API_KEY=your_actual_api_key_here
```

#### Facebook API
1. Go to https://developers.facebook.com/
2. Create an app and get a Page Access Token
3. Get your Facebook Page ID from your page settings

```
FACEBOOK_ACCESS_TOKEN=your_facebook_token
FACEBOOK_PAGE_ID=your_page_id
```

#### Instagram API
Instagram uses the Facebook Graph API. You need an Instagram Business Account:
1. Convert your Instagram account to a Business Account
2. Connect it to a Facebook Page
3. Use the Facebook Graph API Explorer to get tokens

```
INSTAGRAM_ACCESS_TOKEN=your_instagram_token
INSTAGRAM_BUSINESS_ACCOUNT_ID=your_business_account_id
```

#### TikTok API
1. Apply for TikTok Developer access: https://developers.tiktok.com/
2. Create an app and get credentials

```
TIKTOK_ACCESS_TOKEN=your_tiktok_token
TIKTOK_CLIENT_KEY=your_client_key
TIKTOK_CLIENT_SECRET=your_client_secret
```

### Step 3: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Use

### Viewing Popular Posts

1. Navigate to "AI Rewriter" in the header menu
2. Browse popular posts from all platforms or filter by:
   - Facebook
   - Instagram
   - TikTok
3. Posts are sorted by engagement (likes + comments + shares)

### Rewriting Content

1. Click "Rewrite with AI" on any post
2. Configure your preferences:
   - **Target Platform**: Choose where you'll post
   - **Tone**: Select the writing style
   - **Include Hashtags**: Add relevant hashtags
   - **Include Emojis**: Make it more engaging
3. Click "Rewrite with AI" for a single version
4. Or click "Generate 3 Variations" for multiple options
5. Review and select your favorite variation

### Posting to Social Media

**Option 1: Direct Posting** (requires API credentials)
1. After rewriting, click "Post to [platform]"
2. The content will be published directly to your account

**Option 2: Manual Posting** (recommended for getting started)
1. Click "Copy to Clipboard"
2. Paste into your social media platform manually
3. Add any images/videos from the original post

## File Structure

```
app/
├── rewrite/
│   └── page.tsx              # Main rewriter page
├── api/
│   ├── social/
│   │   ├── posts/route.ts    # Fetch social media posts
│   │   └── post/route.ts     # Post to social media
│   └── rewrite/route.ts      # AI rewriting endpoint

components/
├── SocialPostCard.tsx        # Display individual posts
├── RewriteModal.tsx          # Rewriting interface
└── Header.tsx                # Navigation (updated)

lib/
├── socialMedia.ts            # Social media API integrations
├── claude.ts                 # Claude AI service
└── types.ts                  # TypeScript types
```

## API Endpoints

### GET `/api/social/posts`
Fetch popular posts from all platforms or a specific platform.

**Query Parameters:**
- `platform` (optional): Filter by 'facebook', 'instagram', or 'tiktok'

**Response:**
```json
{
  "posts": [
    {
      "id": "post_id",
      "platform": "instagram",
      "content": "Post content...",
      "imageUrl": "https://...",
      "author": "username",
      "likes": 1000,
      "comments": 50,
      "shares": 25,
      "createdAt": "2026-01-28T00:00:00Z",
      "url": "https://..."
    }
  ]
}
```

### POST `/api/rewrite`
Rewrite content using Claude AI.

**Request Body:**
```json
{
  "content": "Original post content",
  "options": {
    "tone": "casual",
    "platform": "instagram",
    "includeHashtags": true,
    "includeEmojis": true
  },
  "generateMultiple": false
}
```

**Response:**
```json
{
  "rewritten": "Rewritten content..."
}
```
or
```json
{
  "variations": ["Variation 1...", "Variation 2...", "Variation 3..."]
}
```

### POST `/api/social/post`
Post content to a social media platform.

**Request Body:**
```json
{
  "platform": "instagram",
  "content": "Post content",
  "imageUrl": "https://...",
  "videoUrl": "https://..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully posted to instagram"
}
```

## Important Notes

### API Limitations

1. **Facebook/Instagram:**
   - Requires a Business Page/Account
   - Access tokens expire and need to be refreshed
   - Rate limits apply

2. **TikTok:**
   - Requires approved developer account
   - Video uploading is complex - manual posting recommended
   - Limited API access for personal accounts

3. **Claude AI:**
   - Requires paid Anthropic API account
   - Rate limits apply based on your tier
   - Each rewrite costs tokens

### Mock Data

If API credentials are not configured, the app will use mock/sample data so you can test the interface without actual API keys.

### Security

- Never commit `.env.local` to version control
- Keep your API keys secure
- Rotate tokens regularly
- Use environment variables for all secrets

## Troubleshooting

### "Failed to rewrite content"
- Check that `ANTHROPIC_API_KEY` is set correctly
- Verify you have API credits in your Anthropic account
- Check browser console for detailed error messages

### "Failed to fetch social posts"
- Verify social media API credentials
- Check that tokens haven't expired
- Review API rate limits
- Check browser console for error details

### "Failed to post to social media"
- Ensure you have posting permissions
- Verify the platform accepts the content type (text/image/video)
- Check that media URLs are accessible
- For Instagram, images are required

## Next Steps

1. **Get API Keys**: Start with Anthropic Claude API for rewriting
2. **Test with Mock Data**: Try the interface before configuring social APIs
3. **Configure Social Media**: Add one platform at a time
4. **Create Content**: Start rewriting and posting!

## Resources

- [Anthropic API Documentation](https://docs.anthropic.com/)
- [Facebook Graph API](https://developers.facebook.com/docs/graph-api/)
- [Instagram API](https://developers.facebook.com/docs/instagram-api/)
- [TikTok for Developers](https://developers.tiktok.com/)

## Support

For issues or questions:
1. Check the browser console for error messages
2. Review the API documentation for the specific platform
3. Verify all environment variables are set correctly
4. Ensure API credentials have the necessary permissions

Happy content creating! 🚀
