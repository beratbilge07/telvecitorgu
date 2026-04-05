// ==========================================
// telvecitorgu.com - SEO Metadata Generator
// ==========================================

import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';
import { City } from '@/types';
import { Product } from '@/types';

export function generateBaseMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: `${SITE_CONFIG.name} | Panel Çit, Tel Örgü, Çevre Güvenlik Sistemleri`,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description: SITE_CONFIG.description,
    keywords: ['panel çit', 'tel örgü', 'jiletli tel', 'dikenli tel', 'çim çit', 'bahçe çiti', 'çevre güvenlik sistemleri', 'panel çit fiyatları', 'tel örgü fiyatları'],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      title: `${SITE_CONFIG.name} | Panel Çit, Tel Örgü, Çevre Güvenlik Sistemleri`,
      description: SITE_CONFIG.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${SITE_CONFIG.name} | Panel Çit, Tel Örgü, Çevre Güvenlik Sistemleri`,
      description: SITE_CONFIG.description,
    },
    alternates: {
      canonical: SITE_CONFIG.url,
    },
    ...overrides,
  };
}

export function generateCityMetadata(city: City): Metadata {
  const title = `${city.name} Panel Çit, Tel Örgü ve Çevre Güvenlik Sistemleri`;
  const description = `${city.name} panel çit, tel örgü, jiletli tel, çim çit ve bahçe çiti hizmetleri. ${city.name} ve çevresinde profesyonel montaj, uygun fiyat, ücretsiz keşif. Hemen teklif alın!`;

  return {
    title,
    description,
    keywords: [
      `${city.name} panel çit`,
      `${city.name} tel örgü`,
      `${city.name} çit`,
      `${city.name} jiletli tel`,
      `${city.name} bahçe çiti`,
      `${city.name} çevre güvenlik`,
      `${city.name.toLowerCase()} panel çit fiyatları`,
    ],
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url: `${SITE_CONFIG.url}/${city.slug}`,
      type: 'website',
      locale: 'tr_TR',
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/${city.slug}`,
    },
  };
}

export function generateCityProductMetadata(city: City, product: Product): Metadata {
  const title = `${city.name} ${product.shortName} | Fiyat ve Montaj Hizmeti`;
  const description = `${city.name} ${product.name.toLowerCase()} hizmeti. ${city.name} ve çevresinde profesyonel ${product.shortName.toLowerCase()} montajı, uygun fiyat ve ücretsiz keşif. Hemen arayın!`;
  const slug = `${city.slug}-${product.slug}`;

  return {
    title,
    description,
    keywords: [
      `${city.name} ${product.shortName.toLowerCase()}`,
      `${city.name} ${product.shortName.toLowerCase()} fiyatları`,
      `${city.name} ${product.shortName.toLowerCase()} montajı`,
      `${city.name.toLowerCase()} ${product.shortName.toLowerCase()} firması`,
    ],
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url: `${SITE_CONFIG.url}/${slug}`,
      type: 'website',
      locale: 'tr_TR',
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/${slug}`,
    },
  };
}

export function generateProductMetadata(product: Product): Metadata {
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.keywords,
    openGraph: {
      title: `${product.metaTitle} | ${SITE_CONFIG.name}`,
      description: product.metaDescription,
      url: `${SITE_CONFIG.url}/hizmetler/${product.slug}`,
      type: 'website',
      locale: 'tr_TR',
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.metaTitle} | ${SITE_CONFIG.name}`,
      description: product.metaDescription,
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/hizmetler/${product.slug}`,
    },
  };
}
