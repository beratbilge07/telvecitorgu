import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import QuoteForm from '../shared/QuoteForm';

export default function HeroSection() {
  return (
    <div className="relative min-h-[90vh] lg:min-h-[95vh] bg-zinc-950 flex border-b border-zinc-800 overflow-hidden items-center">
      
      {/* Background Banner Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/nova-banner.jpg"
          alt="Nova Tel Örgü ve Çit Sistemleri Fabrika ve Üretim Tesisi"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
        />
        {/* Dynamic dark gradient overlay for text readability - Lighter version */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
      </div>
      
      {/* Decorative blurred spots */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-center lg:justify-between py-24 lg:py-0 gap-12 mt-16 md:mt-0">
        
        {/* Text Content */}
        <div className="flex-1 max-w-3xl text-center lg:text-left animate-[fade-in-up_0.8s_ease-out]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-700/50 backdrop-blur-md text-zinc-300 text-sm font-semibold mb-8 shadow-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
            Tüm Türkiye'ye Fabrikadan Halka Hizmet
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            NOVA Tel Örgü ve <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Panel Çit Sistemleri
            </span>
          </h1>
          
          <h2 className="text-lg md:text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
            Güvenliğinizi şansa bırakmayın. Kendi üretim tesisimizden, <strong className="text-white font-medium">yüksek kaliteli, TSE garantili ve dayanıklı</strong> çevre güvenlik sistemleri ile sınırlarınızı profesyonelce koruyun.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href={`https://wa.me/${SITE_CONFIG.phoneClean}?text=Merhaba,%20panel%20çit%20ve%20tel%20örgü%20için%20hızlı%20fiyat%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-zinc-950 hover:bg-yellow-400 font-extrabold rounded-md transition-all text-center text-lg shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] transform hover:-translate-y-0.5"
            >
              Hemen Fiyat Alın
            </a>
            <Link 
              href={`https://wa.me/${SITE_CONFIG.phoneClean}?text=Merhaba,%20panel%20çit%20ve%20tel%20örgü%20için%20katalog%20alabilir%20miyim?`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 text-white hover:bg-zinc-800 hover:border-zinc-500 font-bold rounded-md transition-all text-center text-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
              WhatsApp'tan Ulaşın
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-14 pt-8 border-t border-zinc-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-6">
            <div className="flex items-center gap-3 text-zinc-300">
              <div className="bg-yellow-500/10 p-2 rounded-lg">
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </div>
              <span className="text-base font-semibold">Doğrudan Üretici</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <div className="bg-yellow-500/10 p-2 rounded-lg">
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </div>
              <span className="text-base font-semibold">Üstün Kalite</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <div className="bg-yellow-500/10 p-2 rounded-lg">
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </div>
              <span className="text-base font-semibold">Anahtar Teslim Montaj</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-[440px] shrink-0 animate-[fade-in-up_1s_ease-out] relative z-20">
          <QuoteForm />
        </div>
        
      </div>
    </div>
  );
}
