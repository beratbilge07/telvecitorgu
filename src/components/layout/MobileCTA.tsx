'use client';

import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

// Fixed, floating glassmorphic Mobile App Bar
export default function MobileCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
      <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl p-1.5 flex items-center justify-between mx-auto max-w-sm">
        
        {/* Ana Sayfa */}
        <Link href="/" className="flex flex-col items-center justify-center w-1/4 py-2 px-1 text-zinc-500 hover:text-yellow-600 transition-colors rounded-2xl hover:bg-white/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-0.5">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span className="text-[9px] font-bold tracking-wider mt-1">Ana Sayfa</span>
        </Link>
        
        {/* E-Posta */}
        <a href={`mailto:${SITE_CONFIG.email}`} className="flex flex-col items-center justify-center w-1/4 py-2 px-1 text-zinc-500 hover:text-zinc-900 transition-colors rounded-2xl hover:bg-white/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-0.5">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <span className="text-[9px] font-bold tracking-wider mt-1">Mail</span>
        </a>
        
        {/* WhatsApp - Floating FAB style */}
        <div className="w-1/4 flex justify-center relative -mt-8">
          <a 
            href={`https://wa.me/${SITE_CONFIG.phoneClean}?text=Merhaba,%20panel%20çit%20sistemleri%20hakkında%20bilgi%20almak%20istiyorum.`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center outline-none group"
          >
            <div className="bg-green-500 rounded-full p-3.5 shadow-lg shadow-green-500/40 border-4 border-white/90 group-hover:bg-green-400 group-hover:scale-105 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <span className="text-[10px] font-black text-green-600 mt-1">WhatsApp</span>
          </a>
        </div>
        
        {/* Telefon */}
        <a href={`tel:${SITE_CONFIG.phone}`} className="flex flex-col items-center justify-center w-1/4 py-2 px-1 text-zinc-500 hover:text-yellow-600 transition-colors rounded-2xl hover:bg-white/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-0.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span className="text-[9px] font-bold tracking-wider mt-1">Ara</span>
        </a>
        
      </div>
    </div>
  );
}
