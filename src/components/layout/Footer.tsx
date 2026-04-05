import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import Logo from '../shared/Logo';
import { products } from '@/data/products';
import { getCitiesByRegion, regions } from '@/data/cities';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-32 lg:pb-12 border-t-8 border-yellow-500">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Logo isDark={true} />
            <p className="text-zinc-400 text-sm leading-relaxed font-medium">
              Türkiye'nin her noktasına <strong className="text-white">Panel Çit, Tel Örgü</strong> ve <strong className="text-white">Çim Çit</strong> sistemlerinde TSE garantili, profesyonel üretim ve montaj hizmeti sunuyoruz. Sınırlarınızı güvenle koruyun.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center gap-4 text-zinc-300 hover:text-yellow-500 transition-colors font-bold text-lg bg-zinc-900 border border-zinc-800 p-3 rounded-xl hover:border-yellow-500 shadow-sm">
                <span className="text-2xl">📞</span>
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="inline-flex items-center gap-4 text-zinc-400 hover:text-yellow-500 transition-colors bg-zinc-900 border border-zinc-800 p-3 rounded-xl hover:border-yellow-500 shadow-sm text-sm font-semibold">
                <span className="text-xl">✉️</span>
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-xl font-extrabold mb-6 flex items-center gap-3 text-white uppercase tracking-wider">
              <span className="w-1.5 h-6 bg-yellow-500 rounded-sm"></span>
              Kurumsal
            </h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/hakkimizda" className="text-zinc-400 hover:text-yellow-500 transition-colors font-semibold flex items-center gap-2"><span className="text-yellow-500 opacity-50">›</span> Hakkımızda</Link></li>
              <li><Link href="/referanslar" className="text-zinc-400 hover:text-yellow-500 transition-colors font-semibold flex items-center gap-2"><span className="text-yellow-500 opacity-50">›</span> Referanslarımız</Link></li>
              <li><Link href="/blog" className="text-zinc-400 hover:text-yellow-500 transition-colors font-semibold flex items-center gap-2"><span className="text-yellow-500 opacity-50">›</span> Blog & Bilgi Merkezi</Link></li>
              <li><Link href="/teklif-al" className="text-yellow-500 hover:text-yellow-400 transition-colors font-bold flex items-center gap-2"><span className="text-yellow-500 opacity-50">›</span> Ücretsiz Keşif & Teklif</Link></li>
              <li><Link href="/iletisim" className="text-zinc-400 hover:text-yellow-500 transition-colors font-semibold flex items-center gap-2"><span className="text-yellow-500 opacity-50">›</span> İletişim</Link></li>
            </ul>
          </div>

          {/* Core Services (Focus keywords) */}
          <div>
            <h3 className="text-xl font-extrabold mb-6 flex items-center gap-3 text-white uppercase tracking-wider">
              <span className="w-1.5 h-6 bg-yellow-500 rounded-sm"></span>
              Sistemlerimiz
            </h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/hizmetler/panel-cit" className="text-zinc-300 hover:text-yellow-500 transition-colors font-bold flex items-center gap-2"><span className="text-yellow-500 opacity-50">›</span> Panel Çit Sistemleri</Link></li>
              <li><Link href="/hizmetler/tel-orgu" className="text-zinc-300 hover:text-yellow-500 transition-colors font-bold flex items-center gap-2"><span className="text-yellow-500 opacity-50">›</span> Tel Örgü Sistemleri</Link></li>
              <li><Link href="/hizmetler/cim-cit" className="text-zinc-300 hover:text-yellow-500 transition-colors font-bold flex items-center gap-2"><span className="text-yellow-500 opacity-50">›</span> Dekoraif Çim Çitler</Link></li>
              <li><Link href="/hizmetler/jiletli-tel" className="text-zinc-400 hover:text-yellow-500 transition-colors font-medium flex items-center gap-2"><span className="text-yellow-500 opacity-50">›</span> Jiletli Tel Uygulamaları</Link></li>
              <li><Link href="/hizmetler/dikenli-tel" className="text-zinc-400 hover:text-yellow-500 transition-colors font-medium flex items-center gap-2"><span className="text-yellow-500 opacity-50">›</span> Dikenli Tel Çeşitleri</Link></li>
              <li>
                <Link href="/hizmetler" className="inline-block mt-2 text-zinc-950 bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-md font-bold transition-colors text-sm">
                  Tüm Sistemleri İncele →
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h3 className="text-xl font-extrabold mb-6 flex items-center gap-3 text-white uppercase tracking-wider">
              <span className="w-1.5 h-6 bg-yellow-500 rounded-sm"></span>
              Farkımız
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 hover:border-yellow-500/50 transition-colors">
                <span className="text-3xl">🇹🇷</span>
                <span className="text-xs text-zinc-300 font-bold uppercase tracking-wider">81 İle Hizmet</span>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 hover:border-yellow-500/50 transition-colors">
                <span className="text-3xl">🏭</span>
                <span className="text-xs text-zinc-300 font-bold uppercase tracking-wider">Üreticiden Halka</span>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 hover:border-yellow-500/50 transition-colors">
                <span className="text-3xl">⚡</span>
                <span className="text-xs text-zinc-300 font-bold uppercase tracking-wider">Uzman Montaj</span>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 hover:border-yellow-500/50 transition-colors">
                <span className="text-3xl">🛡️</span>
                <span className="text-xs text-zinc-300 font-bold uppercase tracking-wider">TSE Kalite</span>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Cities Section - Optimized for mobile & SEO */}
        <div className="pt-8 border-t-2 border-zinc-800 mb-8">
          <details className="group bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
            <summary className="text-zinc-300 text-sm font-extrabold uppercase tracking-widest cursor-pointer hover:text-yellow-500 transition-colors list-none flex items-center justify-between">
              Bölgesel Panel Çit ve Tel Örgü Hizmet Noktalarımız
              <span className="text-2xl group-open:rotate-180 transition-transform bg-zinc-800 rounded-full w-8 h-8 flex items-center justify-center text-yellow-500">▼</span>
            </summary>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-sm">
              {regions.map((region) => {
                const regionCities = getCitiesByRegion(region);
                return (
                  <div key={region} className="mb-4">
                    <h4 className="text-white font-extrabold mb-3 uppercase border-b-2 border-zinc-800 pb-2 text-xs tracking-widest flex items-center gap-2">
                      <span className="w-1 h-3 bg-yellow-500 inline-block"></span>
                      {region} Bölgesi
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {regionCities.map(city => (
                        <li key={city.slug}>
                          <Link href={`/${city.slug}`} className="text-zinc-400 hover:text-yellow-500 transition-colors block truncate font-medium" title={`${city.name} Panel Çit ve Tel Örgü`}>
                            {city.name} Çit Sistemleri
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </details>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-zinc-500 text-sm font-medium">
            © {currentYear} {SITE_CONFIG.name}. Tüm hakları saklıdır. En İyi Panel Çit ve Tel Örgü Çözümleri.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-zinc-600">
            <Link href="/gizlilik-politikasi" className="hover:text-zinc-300 transition-colors">Gizlilik Politikası</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/kullanim-sartlari" className="hover:text-zinc-300 transition-colors">Kullanım Şartları</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/sitemap.xml" className="text-yellow-600 hover:text-yellow-500 transition-colors">Site Haritası</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
