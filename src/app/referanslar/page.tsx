import { Metadata } from 'next';
import { generateBaseMetadata } from '@/lib/metadata';
import { references, testimonials } from '@/data/blog-posts';

export const metadata: Metadata = generateBaseMetadata({
  title: 'Referanslar ve Müşteri Yorumları | Telvecitorgu.com',
  description: 'Tamamladığımız çit ve çevre güvenlik projeleri ile mutlu müşterilerimizin yorumları.',
});

export default function ReferencesPage() {
  return (
    <div className="bg-white">
      <section className="bg-zinc-950 py-20 border-b border-zinc-800 text-center relative">
        <div className="absolute inset-0 dark-mesh-pattern opacity-30"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Referanslar</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Değerli projelerine imza attığımız referanslarımız ve müşteri görüşleri.
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Örnek Projelerimiz</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {references.map((ref, i) => (
              <div key={i} className="bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md">
                    {ref.category}
                  </span>
                  <span className="text-zinc-400 text-sm">{ref.year}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{ref.title}</h3>
                <p className="text-zinc-600 text-sm mb-4">{ref.description}</p>
                <div className="flex items-center text-sm font-semibold text-zinc-500 mt-auto">
                  <span>📍 {ref.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Müşteri Yorumları</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((test, i) => (
              <div key={i} className="bg-white border border-zinc-200 p-8 rounded-xl shadow-sm relative">
                <div className="absolute top-6 right-6 text-yellow-500 flex">
                  {Array.from({ length: test.rating }).map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <div className="mb-6 h-32">
                  <p className="text-zinc-600 italic">"{test.text}"</p>
                </div>
                <div className="border-t border-zinc-100 pt-4">
                  <h4 className="font-bold text-zinc-900">{test.name}</h4>
                  <div className="text-sm text-zinc-500">{test.company} • {test.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
