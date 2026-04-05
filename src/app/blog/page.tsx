import { Metadata } from 'next';
import { generateBaseMetadata } from '@/lib/metadata';
import { blogPosts } from '@/data/blog-posts';
import Link from 'next/link';

export const metadata: Metadata = generateBaseMetadata({
  title: 'Blog & Bilgi Merkezi | Telvecitorgu.com',
  description: 'Çit sistemleri seçimi, montaj süreçleri, güvenlik önlemleri ve sektörel haberler hakkında faydalı bilgiler.',
});

export default function BlogPage() {
  return (
    <div className="bg-white">
      <section className="bg-zinc-950 py-20 border-b border-zinc-800 text-center relative">
        <div className="absolute inset-0 dark-mesh-pattern opacity-30"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Bilgi Merkezi</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Çevre güvenlik çözümleri ve ürün rehberleri.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-yellow-300 transition-all duration-300">
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                    <span className="bg-zinc-100 px-2 py-1 rounded text-zinc-800">{post.category}</span>
                    <span>{post.readTime} okuma</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-zinc-900 mb-3 leading-snug hover:text-yellow-600 transition-colors">
                    {/* Disabling links for simplicity, just a content display in this version */}
                    <span>{post.title}</span>
                  </h2>
                  
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between mt-auto">
                    <span className="text-xs text-zinc-400">{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                    <span className="text-yellow-600 text-sm font-semibold flex items-center">
                      Makaleyi Oku <span className="ml-1">→</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
