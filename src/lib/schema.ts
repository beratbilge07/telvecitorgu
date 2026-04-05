// ==========================================
// telvecitorgu.com - JSON-LD Schema Generators
// ==========================================

import { SITE_CONFIG } from './constants';
import { City } from '@/types';
import { Product, FAQ } from '@/types';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    areaServed: {
      '@type': 'Country',
      name: 'Türkiye',
    },
    serviceArea: {
      '@type': 'Country',
      name: 'Türkiye',
    },
    priceRange: '₺₺',
    image: `${SITE_CONFIG.url}/images/og-image.jpg`,
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Çit ve Güvenlik Sistemleri',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Panel Çit Sistemleri' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tel Örgü Sistemleri' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jiletli Tel Sistemleri' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Çim Çit Sistemleri' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bahçe Çiti Çözümleri' } },
      ],
    },
  };
}

export function generateServiceSchema(product: Product, cityName?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: cityName ? `${cityName} ${product.name}` : product.name,
    description: product.description,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      url: SITE_CONFIG.url,
    },
    areaServed: cityName
      ? { '@type': 'City', name: cityName }
      : { '@type': 'Country', name: 'Türkiye' },
    serviceType: product.name,
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateCityServiceSchema(city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${SITE_CONFIG.name} - ${city.name}`,
    description: `${city.name} panel çit, tel örgü, jiletli tel ve çevre güvenlik sistemleri hizmeti.`,
    url: `${SITE_CONFIG.url}/${city.slug}`,
    telephone: SITE_CONFIG.phone,
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    priceRange: '₺₺',
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: city.name,
    },
  };
}
