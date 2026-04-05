import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { getAllCitySlugs } from '@/data/cities';
import { getAllProductSlugs } from '@/data/products';
import { blogPosts } from '@/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];
  const currentDate = new Date().toISOString();

  // Core Pages
  const corePages = [
    '',
    '/hakkimizda',
    '/hizmetler',
    '/referanslar',
    '/blog',
    '/iletisim',
    '/teklif-al',
  ];

  corePages.forEach((path) => {
    sitemap.push({
      url: `${SITE_CONFIG.url}${path}`,
      lastModified: currentDate,
      changeFrequency: path === '' ? 'daily' : 'weekly',
      priority: path === '' ? 1.0 : 0.8,
    });
  });

  const citySlugs = getAllCitySlugs();
  const productSlugs = getAllProductSlugs();

  // 1. Service Pages (/hizmetler/[slug])
  productSlugs.forEach((slug) => {
    sitemap.push({
      url: `${SITE_CONFIG.url}/hizmetler/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  });

  // 2. City Pages (/[city]) -> 81 Pages
  citySlugs.forEach((slug) => {
    sitemap.push({
      url: `${SITE_CONFIG.url}/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // 3. City + Product Pages (/[city]-[product]) -> 810 Pages
  citySlugs.forEach((citySlug) => {
    productSlugs.forEach((productSlug) => {
      sitemap.push({
        url: `${SITE_CONFIG.url}/${citySlug}-${productSlug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  // 4. Blog Posts
  blogPosts.forEach((post) => {
    sitemap.push({
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      lastModified: new Date(post.date).toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return sitemap;
}
