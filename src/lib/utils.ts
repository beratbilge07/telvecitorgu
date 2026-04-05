// ==========================================
// telvecitorgu.com - Utility Functions
// ==========================================

import { SITE_CONFIG } from './constants';

export function generateWhatsAppUrl(message?: string): string {
  const msg = encodeURIComponent(message || SITE_CONFIG.whatsappMessage);
  return `${SITE_CONFIG.whatsappUrl}?text=${msg}`;
}

export function generatePhoneUrl(): string {
  return `tel:${SITE_CONFIG.phone}`;
}

export function formatPhoneDisplay(): string {
  return SITE_CONFIG.phoneDisplay;
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function generateCanonicalUrl(path: string): string {
  return `${SITE_CONFIG.url}${path.startsWith('/') ? path : `/${path}`}`;
}
