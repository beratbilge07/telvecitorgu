import { Metadata } from 'next';
import { generateBaseMetadata } from '@/lib/metadata';
import { products } from '@/data/products';
import Link from 'next/link';

export const metadata: Metadata = generateBaseMetadata({
  title: 'Hizmetlerimiz | Telvecitorgu.com',
  description: 'Panel çit, tel örgü, jiletli tel ve bahçe çiti sistemleri alanındaki profesyonel hizmetlerimiz.',
});

export default function ServicesPage() {
  return (
    <div className="bg-zinc-50 pt-16 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Tüm Hizmetlerimiz</h1>
          <p className="text-xl text-zinc-600">
            Güvenli, estetik ve uzun ömürlü çit sistemlerinde profesyonel çözümler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Link 
              key={product.slug}
              href={`/hizmetler/${product.slug}`}
              className="group bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-40 bg-zinc-900 relative flex items-center justify-center">
                <div className="absolute inset-0 dark-mesh-pattern opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-5xl relative z-10 filter drop-shadow-lg group-hover:scale-110 transition-transform">
                  {product.icon}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {product.name}
                </h2>
                <p className="text-zinc-600 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>
                <span className="text-yellow-600 text-sm font-semibold flex items-center">
                  Detayları İncele
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
