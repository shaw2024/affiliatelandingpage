# Affiliate Landing Page Blog

A modern, easy-to-use affiliate blog built with Next.js for reposting Facebook stories and promoting Amazon affiliate products.

## Features

- 🚀 **Built with Next.js 14** - The most popular React framework for production
- 💅 **Styled with Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🔗 **Amazon Affiliate Integration** - Easy product cards with affiliate links
- 📘 **Facebook Story Integration** - Link to original Facebook stories
- ⚡ **Fast & SEO-Friendly** - Optimized for search engines and performance
- 📝 **Easy Content Management** - Simple TypeScript file-based content system

## Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- An Amazon Associates account (for affiliate links)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shaw2024/affiliatelandingpage.git
cd affiliatelandingpage
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## How to Add New Blog Posts

Adding new blog posts is super easy! Just edit the `data/blogPosts.ts` file.

### Step 1: Get Your Amazon Affiliate Links

1. Sign up for [Amazon Associates](https://affiliate-program.amazon.com/)
2. Get your affiliate ID (looks like `yourname-20`)
3. Create affiliate links for products you want to promote

### Step 2: Add a New Post

Open `data/blogPosts.ts` and add a new entry to the `blogPosts` array:

```typescript
{
  id: '4', // Unique ID
  title: 'Your Blog Post Title',
  excerpt: 'A brief summary of your post (shown on homepage)',
  content: `
# Your Blog Post Title

Write your full blog post content here using Markdown formatting.

## You can use headings

And regular paragraphs, **bold text**, *italic text*, etc.

## Add multiple sections

Keep your content engaging and informative!
  `,
  date: '2024-01-20', // Publication date
  facebookStoryUrl: 'https://www.facebook.com/stories/your-story-link', // Optional
  amazonProducts: [
    {
      id: 'product-1',
      title: 'Product Name',
      description: 'Brief product description',
      imageUrl: 'https://m.media-amazon.com/images/I/product-image.jpg',
      amazonUrl: 'https://www.amazon.com/dp/PRODUCTID?tag=youraffiliateID-20',
      price: '$29.99', // Optional
      rating: 4.5 // Optional (out of 5)
    },
    // Add more products as needed
  ],
  tags: ['tag1', 'tag2', 'tag3']
}
```

### Step 3: Update Affiliate IDs

**IMPORTANT**: Replace `youraffiliateID-20` in all Amazon URLs with your actual Amazon Associates affiliate ID!

### Finding Amazon Product Information

- **Product Image URL**: Right-click on the product image on Amazon and copy image URL
- **Product ID**: Found in the Amazon URL (e.g., `/dp/B08L5VFJ2G/`)
- **Full Affiliate Link**: Use Amazon Associates SiteStripe tool when browsing Amazon

## Project Structure

```
affiliatelandingpage/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Main layout with header/footer
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles with Tailwind
│   ├── blog/
│   │   └── [id]/
│   │       └── page.tsx   # Individual blog post pages
│   └── about/
│       └── page.tsx       # About page
├── components/            # Reusable React components
│   ├── Header.tsx        # Site header
│   ├── Footer.tsx        # Site footer
│   ├── BlogPostCard.tsx  # Blog post preview card
│   └── ProductCard.tsx   # Amazon product card
├── data/                 # Data files
│   ├── types.ts         # TypeScript type definitions
│   └── blogPosts.ts     # Blog posts data (EDIT THIS!)
├── public/              # Static files
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies

```

## Customization

### Change Site Name and Branding

Edit `components/Header.tsx` and `app/layout.tsx` to update:
- Site title
- Site description
- Meta tags for SEO

### Modify Colors and Styling

Edit `tailwind.config.js` to customize:
- Color scheme
- Fonts
- Spacing
- Breakpoints

### Add Your Social Links

Update `components/Footer.tsx` with your actual social media links.

## Building for Production

To create a production build:

```bash
npm run build
npm run start
```

## Deployment

This Next.js app can be deployed to:

- **Vercel** (recommended, made by Next.js creators) - [vercel.com](https://vercel.com)
- **Netlify** - [netlify.com](https://netlify.com)
- **AWS Amplify** - [aws.amazon.com/amplify](https://aws.amazon.com/amplify)
- Any hosting service that supports Node.js

### Deploy to Vercel (Easiest)

1. Push your code to GitHub
2. Sign up at [vercel.com](https://vercel.com)
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect Next.js and deploy!

## Amazon Associates Compliance

This blog includes proper affiliate disclosures as required by Amazon Associates:

- Disclosure on every page with affiliate links
- Clear labeling of affiliate links
- Proper use of Amazon product images
- Compliance with Amazon's terms of service

**Remember**: Always follow [Amazon Associates Program Policies](https://affiliate-program.amazon.com/help/operating/policies)

## Tips for Success

1. **Be Honest**: Only recommend products you genuinely like
2. **Add Value**: Write detailed, helpful reviews
3. **Update Regularly**: Post new content consistently
4. **Engage on Social**: Share your posts on Facebook and other platforms
5. **Track Performance**: Use Amazon Associates reports to see what works
6. **Optimize for SEO**: Use descriptive titles and meta descriptions
7. **Mobile-First**: Test on mobile devices (most traffic is mobile)

## Support

For issues or questions:
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Amazon Associates help: [affiliate-program.amazon.com/help](https://affiliate-program.amazon.com/help)

## License

ISC License - Feel free to use this for your affiliate marketing projects!

---

Happy blogging! 🚀📚💰
