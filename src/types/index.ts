// ==========================================
// telvecitorgu.com - TypeScript Type Definitions
// ==========================================

export interface City {
  name: string;
  slug: string;
  plate: string;
  region: string;
  population: string;
  description: string;
  templateVariant: number; // 1-5 for content variation
}

export interface Product {
  name: string;
  slug: string;
  shortName: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  image?: string;
  features: string[];
  usageAreas: string[];
  advantages: string[];
  faq: FAQ[];
  keywords: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  relatedProducts: string[];
  relatedCities: string[];
}

export interface Testimonial {
  name: string;
  company: string;
  city: string;
  text: string;
  rating: number;
  project: string;
}

export interface Reference {
  title: string;
  city: string;
  category: string;
  description: string;
  year: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
