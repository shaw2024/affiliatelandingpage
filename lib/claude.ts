import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export interface RewriteOptions {
  tone?: 'professional' | 'casual' | 'enthusiastic' | 'informative';
  length?: 'short' | 'medium' | 'long';
  platform?: 'facebook' | 'instagram' | 'tiktok' | 'general';
  includeHashtags?: boolean;
  includeEmojis?: boolean;
}

/**
 * Rewrite content using Claude AI
 */
export async function rewriteWithClaude(
  originalContent: string,
  options: RewriteOptions = {}
): Promise<string> {
  const {
    tone = 'casual',
    length = 'medium',
    platform = 'general',
    includeHashtags = true,
    includeEmojis = true,
  } = options;

  const lengthGuidance = {
    short: 'Keep it under 100 words, concise and punchy.',
    medium: 'Keep it between 100-200 words, engaging and informative.',
    long: 'Make it detailed and comprehensive, 200-300 words.',
  };

  const platformGuidance = {
    facebook: 'Optimize for Facebook with a conversational tone that encourages engagement and shares.',
    instagram: 'Make it Instagram-friendly with visual appeal, consider adding line breaks for readability.',
    tiktok: 'Make it TikTok-style: trendy, energetic, and attention-grabbing from the first word.',
    general: 'Make it suitable for any social media platform.',
  };

  const prompt = `You are an expert social media content writer. Your task is to rewrite the following social media post to make it more engaging and compelling while maintaining the core message.

Original post:
"${originalContent}"

Guidelines:
- Tone: ${tone}
- Length: ${lengthGuidance[length]}
- Platform: ${platformGuidance[platform]}
- ${includeHashtags ? 'Include relevant hashtags (3-5 hashtags)' : 'Do not include hashtags'}
- ${includeEmojis ? 'Use emojis strategically to enhance the message' : 'Avoid using emojis'}
- Make it authentic and relatable
- Focus on value and engagement
- Keep the main message and intent intact
- Make it actionable if appropriate

Provide only the rewritten post without any explanations or meta-commentary.`;

  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const content = message.content[0];
    if (content.type === 'text') {
      return content.text;
    }
    
    throw new Error('Unexpected response format from Claude');
  } catch (error) {
    console.error('Error rewriting with Claude:', error);
    throw new Error('Failed to rewrite content. Please try again.');
  }
}

/**
 * Generate multiple variations of rewritten content
 */
export async function generateVariations(
  originalContent: string,
  count: number = 3,
  options: RewriteOptions = {}
): Promise<string[]> {
  const variations: string[] = [];
  
  for (let i = 0; i < count; i++) {
    try {
      const rewritten = await rewriteWithClaude(originalContent, options);
      variations.push(rewritten);
    } catch (error) {
      console.error(`Error generating variation ${i + 1}:`, error);
    }
  }
  
  return variations;
}

/**
 * Optimize content for specific platform
 */
export async function optimizeForPlatform(
  content: string,
  platform: 'facebook' | 'instagram' | 'tiktok'
): Promise<string> {
  return rewriteWithClaude(content, {
    platform,
    tone: platform === 'tiktok' ? 'enthusiastic' : 'casual',
    includeHashtags: true,
    includeEmojis: true,
  });
}
