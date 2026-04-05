import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import PhoneButton from '../shared/PhoneButton';

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <span className="text-yellow-600 font-bold tracking-widest text-sm uppercase mb-4 block">Ne Yapıyoruz?</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-6 tracking-tight leading-tight">
              Kapsamlı Çevre Güvenlik<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">Çözümleri</span>
            </h2>
            <p className="text-zinc-600 text-lg md:text-xl leading-relaxed">
              İhtiyacınıza uygun, kaliteli ve uzun ömürlü panel çit, tel örgü ve çim çit sistemleriyle fabrikalarınızı, arazilerinizi ve yaşam alanlarınızı yüksek standartlarda koruma altına alıyoruz.
            </p>
          </div>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-yellow-500/10 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <Image 
              src="/images/fence_security.png" 
              alt="Endüstriyel Çevre Güvenlik Sistemleri ve Panel Çit Uygulamaları" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🛡️</span>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase">TSE Onaylı</p>
                  <p className="text-sm font-black text-zinc-900 uppercase">Yüksek Mukavemet</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product, index) => (
            <Link 
              key={product.slug} 
              href={`/hizmetler/${product.slug}`}
              className="group bg-white rounded-xl shadow-sm border border-zinc-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-300 overflow-hidden flex flex-col h-full animate-[fade-in-up_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
            >
              {/* Product Card Graphic Area */}
              <div className="h-48 bg-zinc-900 relative overflow-hidden flex-shrink-0 flex items-center justify-center group-hover:after:absolute group-hover:after:inset-0 group-hover:after:bg-black/10 after:transition-colors">
                <div className="absolute inset-0 dark-mesh-pattern opacity-30 z-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                {product.image ? (
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 z-0"
                  />
                ) : (
                  <div className="relative z-10 w-20 h-20 bg-zinc-800/80 rounded-full flex items-center justify-center border border-zinc-700 group-hover:scale-110 group-hover:border-yellow-500/50 transition-all duration-500 shadow-xl">
                    <span className="text-4xl filter drop-shadow-md">{product.icon}</span>
                  </div>
                )}
                
                {/* Overlay gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-1">{product.name}</h3>
                <p className="text-zinc-600 text-sm flex-grow line-clamp-3 mb-4">{product.description}</p>
                <div className="flex items-center text-sm font-semibold text-yellow-600 mt-auto pt-4 border-t border-zinc-100">
                  İncele
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/hizmetler" 
            className="px-8 py-4 bg-zinc-900 text-white hover:bg-zinc-800 font-bold rounded-md transition-colors w-full sm:w-auto"
          >
            Tüm Hizmetleri Görüntüle
          </Link>
          <PhoneButton variant="outline" className="px-8 py-4 w-full sm:w-auto" />
        </div>

      </div>
    </section>
  );
}
