import { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Must-Read Books That Changed My Life',
    excerpt: 'Discover the transformative power of these incredible books that have shaped my thinking and success.',
    content: `
# 5 Must-Read Books That Changed My Life

Reading has been one of the most transformative habits in my life. Here are five books that have genuinely changed my perspective and helped me grow personally and professionally.

## 1. Atomic Habits by James Clear

This book revolutionized how I think about building habits. The key insight is that small changes compound over time into remarkable results. Instead of focusing on goals, focus on systems.

## 2. The Psychology of Money by Morgan Housel

An eye-opening look at how people think about money. It's less about math and more about behavior, which is crucial for anyone wanting to build wealth.

## 3. Deep Work by Cal Newport

In our distracted world, the ability to focus is becoming increasingly rare and valuable. This book teaches you how to cultivate deep focus and produce your best work.

## 4. Start with Why by Simon Sinek

Understanding your "why" is crucial for inspiration and leadership. This book helps you discover your purpose and communicate it effectively.

## 5. The Lean Startup by Eric Ries

Essential for entrepreneurs and innovators. Learn how to build, measure, and learn quickly to create successful products.

---

*Disclosure: This post contains Amazon affiliate links. If you purchase through these links, I may earn a small commission at no extra cost to you.*
    `,
    date: '2024-01-15',
    facebookStoryUrl: 'https://www.facebook.com/stories/example1',
    amazonProducts: [
      {
        id: 'atomic-habits',
        title: 'Atomic Habits by James Clear',
        description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones',
        imageUrl: 'https://m.media-amazon.com/images/I/51B7kuAOsjL._SY445_SX342_.jpg',
        amazonUrl: 'https://www.amazon.com/dp/0735211299?tag=youraffiliateID-20',
        price: '$13.99',
        rating: 4.8
      },
      {
        id: 'psychology-money',
        title: 'The Psychology of Money by Morgan Housel',
        description: 'Timeless lessons on wealth, greed, and happiness',
        imageUrl: 'https://m.media-amazon.com/images/I/41r6F4rbzxL._SY445_SX342_.jpg',
        amazonUrl: 'https://www.amazon.com/dp/0857197681?tag=youraffiliateID-20',
        price: '$15.49',
        rating: 4.7
      },
      {
        id: 'deep-work',
        title: 'Deep Work by Cal Newport',
        description: 'Rules for Focused Success in a Distracted World',
        imageUrl: 'https://m.media-amazon.com/images/I/51vmivI5qzL._SY445_SX342_.jpg',
        amazonUrl: 'https://www.amazon.com/dp/1455586692?tag=youraffiliateID-20',
        price: '$14.99',
        rating: 4.6
      }
    ],
    tags: ['books', 'self-improvement', 'productivity']
  },
  {
    id: '2',
    title: 'Best Productivity Tools for Remote Workers',
    excerpt: 'The essential gadgets and tools that help me stay productive while working from home.',
    content: `
# Best Productivity Tools for Remote Workers

Working from home requires the right setup. Here are my favorite productivity tools and gadgets that have made remote work actually enjoyable.

## Noise-Canceling Headphones

Essential for blocking out distractions. Whether it's family noise or street sounds, good headphones make all the difference.

## Ergonomic Keyboard and Mouse

Investing in ergonomic equipment has saved my wrists and improved my typing speed. Don't underestimate the importance of comfort.

## Standing Desk Converter

Game-changer for my energy levels and posture. Being able to alternate between sitting and standing throughout the day has been incredible.

## Quality Webcam and Microphone

Virtual meetings are part of life now. Looking and sounding professional makes a huge difference in how you're perceived.

## LED Desk Lamp with Multiple Settings

Good lighting reduces eye strain and creates a better work environment. Look for adjustable brightness and color temperature.

---

*Disclosure: This post contains Amazon affiliate links. If you purchase through these links, I may earn a small commission at no extra cost to you.*
    `,
    date: '2024-01-10',
    facebookStoryUrl: 'https://www.facebook.com/stories/example2',
    amazonProducts: [
      {
        id: 'bose-headphones',
        title: 'Bose QuietComfort Headphones',
        description: 'World-class noise cancellation and premium audio',
        imageUrl: 'https://m.media-amazon.com/images/I/51JlG3KfNxL._AC_SL1500_.jpg',
        amazonUrl: 'https://www.amazon.com/dp/B0CCZ1L489?tag=youraffiliateID-20',
        price: '$349.00',
        rating: 4.7
      },
      {
        id: 'logitech-keyboard',
        title: 'Logitech Ergonomic Keyboard',
        description: 'Wireless ergonomic keyboard with wrist rest',
        imageUrl: 'https://m.media-amazon.com/images/I/61YOle4DREL._AC_SL1500_.jpg',
        amazonUrl: 'https://www.amazon.com/dp/B07ZWK2TQT?tag=youraffiliateID-20',
        price: '$49.99',
        rating: 4.5
      }
    ],
    tags: ['productivity', 'remote-work', 'gadgets']
  },
  {
    id: '3',
    title: 'Kitchen Essentials Every Home Cook Needs',
    excerpt: 'From beginner to expert, these kitchen tools will elevate your cooking game.',
    content: `
# Kitchen Essentials Every Home Cook Needs

After years of cooking at home, I've learned what tools are truly essential. Here's my curated list of kitchen must-haves.

## Chef's Knife

A quality chef's knife is the foundation of any kitchen. It's worth investing in a good one that will last for years.

## Cast Iron Skillet

Versatile, durable, and gets better with age. Perfect for everything from searing steaks to baking cornbread.

## Instant Pot

The ultimate multi-cooker. Pressure cooker, slow cooker, rice cooker, and more in one device.

## Quality Cutting Board

A solid cutting board protects your knives and your countertops. Wood or bamboo are excellent choices.

## Kitchen Scale

For precise cooking and baking, a digital scale is invaluable. It's changed how I approach recipes.

---

*Disclosure: This post contains Amazon affiliate links. If you purchase through these links, I may earn a small commission at no extra cost to you.*
    `,
    date: '2024-01-05',
    facebookStoryUrl: 'https://www.facebook.com/stories/example3',
    amazonProducts: [
      {
        id: 'wusthof-knife',
        title: "Wusthof Classic 8\" Chef's Knife",
        description: 'Precision-forged from a single piece of high-carbon steel',
        imageUrl: 'https://m.media-amazon.com/images/I/31lMslj+ygL._AC_.jpg',
        amazonUrl: 'https://www.amazon.com/dp/B00005MEG6?tag=youraffiliateID-20',
        price: '$149.95',
        rating: 4.9
      },
      {
        id: 'lodge-skillet',
        title: 'Lodge Cast Iron Skillet',
        description: 'Pre-seasoned 12-inch cast iron skillet',
        imageUrl: 'https://m.media-amazon.com/images/I/81L1b8E+vEL._AC_SL1500_.jpg',
        amazonUrl: 'https://www.amazon.com/dp/B00006JSUB?tag=youraffiliateID-20',
        price: '$34.90',
        rating: 4.8
      },
      {
        id: 'instant-pot',
        title: 'Instant Pot Duo 7-in-1',
        description: 'Electric pressure cooker, slow cooker, rice cooker, and more',
        imageUrl: 'https://m.media-amazon.com/images/I/71V8uJSB9tL._AC_SL1500_.jpg',
        amazonUrl: 'https://www.amazon.com/dp/B00FLYWNYQ?tag=youraffiliateID-20',
        price: '$99.95',
        rating: 4.7
      }
    ],
    tags: ['cooking', 'kitchen', 'home']
  }
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}
