export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  facebookStoryUrl?: string;
  amazonProducts: AmazonProduct[];
  tags: string[];
}

export interface AmazonProduct {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  amazonUrl: string;
  price?: string;
  rating?: number;
}
