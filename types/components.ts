export interface NewsArticle {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  image?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  image?: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface StatCard {
  value: string;
  label: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface SocialMediaPost {
  platform: string;
  content: string;
  image?: string;
  date: string;
  url: string;
}

// Hero section props used across pages
export interface HeroProps {
  headline: string;
  subtext?: string;
  cta?: {
    primary?: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
  backgroundImage?: string;
}