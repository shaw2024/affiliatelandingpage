export interface AffiliateProduct {
  id: string
  name: string
  description: string
  price: number
  affiliateUrl: string
  image: string
}

export interface Post {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  socialPlatform: 'Facebook' | 'Instagram' | 'Twitter' | 'TikTok' | 'LinkedIn'
  originalUrl?: string
  originalPostText?: string
  affiliateProducts: AffiliateProduct[]
}

// Sample posts - In production, this would come from a database or CMS
const samplePosts: Post[] = [
  {
    id: '1',
    title: 'The Viral Kitchen Gadget Everyone is Talking About',
    excerpt: 'This amazing multi-functional kitchen tool has taken Instagram by storm, and for good reason!',
    content: `I recently came across this incredible kitchen gadget on Instagram, and I just had to share it with you all. The reactions were overwhelming, with thousands of people asking where to get it.

After using it for two weeks, I can confidently say this is a game-changer for anyone who loves cooking but hates the cleanup. It combines multiple tools into one sleek design, saving both space and time.

The build quality is exceptional, with premium stainless steel construction that feels solid and durable. What impressed me most was how intuitive it is to use - no complicated instructions needed.

Whether you're a professional chef or a home cooking enthusiast, this tool will make your kitchen experience so much better. The price point is incredibly reasonable for the value you get.`,
    image: 'https://images.unsplash.com/photo-1556911261-6bd341186b2f?w=800&q=80',
    date: '2026-01-18',
    socialPlatform: 'Instagram',
    originalUrl: 'https://instagram.com/example',
    originalPostText: 'Just found the BEST kitchen gadget ever! 🔥 Makes cooking and cleanup so easy. Link in bio! #kitchenhacks #cooking',
    affiliateProducts: [
      {
        id: 'prod-1',
        name: 'MultiChef Pro Kitchen Tool',
        description: '5-in-1 kitchen gadget: peeler, grater, slicer, julienne, and zester',
        price: 29.99,
        affiliateUrl: 'https://amazon.com/example-product-1',
        image: 'https://images.unsplash.com/photo-1556911261-6bd341186b2f?w=400&q=80',
      },
    ],
  },
  {
    id: '2',
    title: 'This Portable Blender Changed My Morning Routine',
    excerpt: 'Seen all over TikTok, this USB rechargeable blender is perfect for smoothies on the go!',
    content: `When I first saw this portable blender on TikTok, I was skeptical. Could something so small really work? Spoiler alert: it absolutely does!

This has become an essential part of my morning routine. I can make fresh smoothies in under 60 seconds, and the best part is that I can take it anywhere - to work, the gym, or even on road trips.

The battery life is impressive, lasting for about 15-20 blends on a single charge. It's powerful enough to crush ice and frozen fruits, which many portable blenders struggle with.

Cleaning is a breeze too - just add water and a drop of soap, blend for a few seconds, and you're done. No more dealing with bulky traditional blenders taking up counter space.

If you're someone who's always on the go but doesn't want to sacrifice healthy eating, this is an absolute must-have.`,
    image: 'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=800&q=80',
    date: '2026-01-15',
    socialPlatform: 'TikTok',
    originalUrl: 'https://tiktok.com/example',
    originalPostText: 'Making smoothies has never been easier! ✨ This portable blender is a game changer #smoothie #healthy #portableblender',
    affiliateProducts: [
      {
        id: 'prod-2',
        name: 'BlendJet 2 Portable Blender',
        description: 'USB-C rechargeable, waterproof, perfect for smoothies and shakes',
        price: 49.95,
        affiliateUrl: 'https://amazon.com/example-product-2',
        image: 'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&q=80',
      },
    ],
  },
  {
    id: '3',
    title: 'The Smart Water Bottle That Tracks Your Hydration',
    excerpt: 'This tech-enabled water bottle from a viral Facebook post helps you stay hydrated with LED reminders!',
    content: `I'll admit, I'm terrible at drinking enough water throughout the day. That all changed when I discovered this smart water bottle that was going viral on Facebook.

The bottle connects to your phone via Bluetooth and tracks your water intake throughout the day. It even glows to remind you when it's time to drink more water - a feature that's surprisingly effective!

What makes this bottle special is the temperature display on the lid. You always know if your drink is at the perfect temperature. It keeps drinks cold for 24 hours and hot for 12 hours.

The app integration is well-designed and not intrusive. You can set personalized hydration goals based on your weight, activity level, and climate. The battery lasts for weeks on a single charge.

Since using this bottle, I've noticed significant improvements in my energy levels and overall well-being. It's amazing what proper hydration can do!`,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80',
    date: '2026-01-12',
    socialPlatform: 'Facebook',
    originalUrl: 'https://facebook.com/example',
    originalPostText: 'Finally staying hydrated thanks to this smart water bottle! 💧 The LED reminders are a game changer. Highly recommend!',
    affiliateProducts: [
      {
        id: 'prod-3',
        name: 'HidrateSpark PRO Smart Bottle',
        description: 'LED glow reminders, tracks water intake, 24oz stainless steel',
        price: 79.99,
        affiliateUrl: 'https://amazon.com/example-product-3',
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80',
      },
    ],
  },
]

export function getAllPosts(): Post[] {
  return samplePosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostById(id: string): Post | undefined {
  return samplePosts.find(post => post.id === id)
}

// Function to add a new post (for the admin interface)
export function addPost(post: Post): void {
  samplePosts.push(post)
}
