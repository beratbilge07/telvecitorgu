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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-50 lg:hidden overflow-y-auto pt-32 pb-32 px-5 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-3">
            {NAVIGATION.map((item) => (
              <div key={item.href} className="border-b-2 border-zinc-200/60 last:border-0 pb-3 bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center justify-between px-4">
                  <Link 
                    href={item.href}
                    className={cn(
                      "block py-4 text-xl font-black uppercase tracking-tight",
                      pathname === item.href ? "text-yellow-600" : "text-zinc-900"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className="p-3 text-zinc-600 bg-zinc-100 hover:bg-zinc-200 rounded-lg font-bold transition-colors"
                    >
                      {activeDropdown === item.label ? '▲' : '▼'}
                    </button>
                  )}
                </div>
                
                {item.children && activeDropdown === item.label && (
                   <div className="px-4 pb-4 flex flex-col gap-2 bg-zinc-50 border-t-2 border-yellow-500 p-3">
                     {item.children.map(child => (
                       <Link 
                         key={child.href}
                         href={child.href}
                         className={cn(
                           "block py-3 px-4 text-base font-bold rounded-lg border border-transparent transition-colors",
                           pathname === child.href ? "text-yellow-700 bg-yellow-100 border-yellow-200 shadow-inner" : "text-zinc-700 bg-white shadow-sm"
                         )}
                       >
                         {child.label}
                       </Link>
                     ))}
                   </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="mt-10 flex flex-col gap-4 bg-zinc-950 p-6 rounded-2xl border-b-8 border-yellow-500 shadow-2xl">
            <h4 className="text-white text-center text-sm font-bold uppercase tracking-wider mb-2 opacity-80">Online Destek & İletişim</h4>
            <a 
              href={`https://wa.me/${SITE_CONFIG.phoneClean}?text=Merhaba,%20projem%20için%20hızlı%20bir%20teklif%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 bg-yellow-500 text-zinc-950 hover:bg-yellow-400 font-black text-lg rounded-xl shadow-lg shadow-yellow-500/30 transition-all uppercase tracking-wide"
            >
              Hemen Teklif Al
            </a>
            <PhoneButton variant="outline" className="w-full py-4 text-white border-zinc-700 hover:bg-zinc-800 text-lg font-bold rounded-xl" />
            <WhatsAppButton variant="outline" className="w-full py-4 text-white border-zinc-700 hover:bg-zinc-800 text-lg font-bold rounded-xl" />
          </div>
        </div>
      )}
    </>
  );
}
