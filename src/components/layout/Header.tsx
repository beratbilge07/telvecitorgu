'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../shared/Logo';
import PhoneButton from '../shared/PhoneButton';
import WhatsAppButton from '../shared/WhatsAppButton';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import { products } from '@/data/products';
import { SITE_CONFIG } from '@/lib/constants';

const NAVIGATION: NavItem[] = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  {
    label: 'Hizmetler',
    href: '/hizmetler',
    children: products.map(p => ({
      label: p.shortName,
      href: `/hizmetler/${p.slug}`
    }))
  },
  { label: 'Referanslar', href: '/referanslar' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/iletisim' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b-4 border-zinc-200 shadow-xl py-3"
            : "bg-white border-b-2 border-zinc-100 py-4 lg:py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAVIGATION.map((item) => (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.children && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-[15px] font-bold transition-all hover:text-yellow-600 py-4 border-y-2 border-transparent relative tracking-tight",
                      pathname === item.href ? "text-yellow-600" : "text-zinc-800"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <span className="ml-1.5 text-[10px] text-zinc-400 group-hover:text-yellow-500">▼</span>
                    )}
                    {/* Active Indicator Line */}
                    {pathname === item.href && (
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 rounded-t-xl"></span>
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px]">
                      <div className="bg-white border-2 border-zinc-200 shadow-2xl rounded-xl p-5 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
                        {item.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-sm font-bold text-zinc-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors border border-transparent hover:border-yellow-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={`https://wa.me/${SITE_CONFIG.phoneClean}?text=Merhaba,%20projem%20için%20hızlı%20bir%20teklif%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-extrabold text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-widest border-b-2 border-transparent hover:border-zinc-900 pb-1"
              >
                Hızlı Teklif
              </a>
              <PhoneButton variant="primary" className="px-6 py-3 shadow-[0_4px_15px_rgba(234,179,8,0.3)] hover:shadow-[0_6px_20px_rgba(234,179,8,0.4)] transition-all font-extrabold text-base" />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-3 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 rounded-xl transition-all border border-zinc-200 shadow-sm active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menüyü Aç"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Premium Mobile Menu Drawer */}
      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-zinc-950/60 backdrop-blur-sm lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl lg:hidden transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-100">
          <Link href="/" className="font-black text-2xl text-zinc-900 tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>
            NOVA
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2.5 bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Drawer Body (Nav) */}
        <div className="flex-1 overflow-y-auto py-6 px-5 scrollbar-hide">
          <nav className="flex flex-col gap-1">
            {NAVIGATION.map((item) => (
              <div key={item.href} className="border-b border-zinc-100 last:border-0 pb-1">
                <div className="flex items-center justify-between py-1">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex-1 py-3 text-lg font-bold uppercase tracking-wide transition-colors",
                      pathname === item.href ? "text-yellow-600" : "text-zinc-700"
                    )}
                    onClick={() => { if (!item.children) setIsMobileMenuOpen(false); }}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className="p-3 text-zinc-400 hover:text-zinc-800 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20" height="20"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className={cn("transition-transform duration-300", activeDropdown === item.label ? "rotate-180 text-yellow-600" : "")}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  )}
                </div>

                {item.children && (
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out pl-4",
                      activeDropdown === item.label ? "max-h-[500px] opacity-100 mb-4" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="flex flex-col gap-1 border-l-2 border-yellow-500/30 pl-3">
                      {item.children.map(child => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "py-2.5 px-3 text-[15px] font-semibold rounded-lg transition-colors",
                            pathname === child.href ? "text-yellow-700 bg-yellow-50/50" : "text-zinc-600 hover:text-yellow-600 hover:bg-zinc-50"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Drawer Footer (Actions) */}
        <div className="p-5 border-t border-zinc-100 bg-zinc-50/80 mb-16 lg:mb-0">
          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.phoneClean}?text=Merhaba,%20projem%20için%20hızlı%20bir%20teklif%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 bg-yellow-500 text-zinc-950 hover:bg-yellow-400 font-extrabold text-[15px] rounded-xl shadow-[0_4px_14px_rgba(234,179,8,0.3)] transition-all uppercase tracking-widest"
            >
              Hemen Teklif İste
            </a>
            <div className="grid grid-cols-2 gap-3">
              <PhoneButton variant="primary" showText={false} className="w-full py-3.5 rounded-xl bg-zinc-900 border-none shadow-md" />
              <WhatsAppButton variant="outline" showText={false} className="w-full py-3.5 rounded-xl border-zinc-300 hover:bg-zinc-100 text-zinc-800" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
