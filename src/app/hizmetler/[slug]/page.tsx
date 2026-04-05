import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getAllProductSlugs } from '@/data/products';
import { generateProductMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import SchemaMarkup from '@/components/shared/SchemaMarkup';
import QuoteForm from '@/components/shared/QuoteForm';
import FAQSection from '@/components/shared/FAQSection';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) return { title: 'Bulunamadı' };
  
  return generateProductMetadata(product);
}

export function generateStaticParams() {
  return getAllProductSlugs().map(slug => ({ slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const serviceSchema = generateServiceSchema(product);
  const faqSchema = generateFAQSchema(product.faq);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Hizmetler', url: '/hizmetler' },
    { name: product.name, url: `/hizmetler/${product.slug}` }
  ]);

  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

      <section className="bg-zinc-950 py-16 lg:py-24 border-b border-zinc-800 relative">
        <div className="absolute inset-0 dark-mesh-pattern opacity-30"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 text-center lg:text-left">
              <span className="text-yellow-500 text-6xl mb-6 block drop-shadow-lg animate-bounce">{product.icon}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {product.description}
              </p>
            </div>
            
            <div className="w-full max-w-[420px] shrink-0">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-yellow-500 rounded-full"></span>
                Genel Özellikler
              </h2>
              <ul className="space-y-4">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <span className="text-zinc-700 text-lg leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Kullanım Alanları</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.usageAreas.map((area, i) => (
                  <div key={i} className="bg-white border border-zinc-200 py-3 px-4 rounded-lg shadow-sm font-medium text-zinc-700 text-sm text-center">
                    {area}
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-900 mb-6 mt-10">Avantajları</h3>
              <ul className="space-y-3">
                {product.advantages.map((adv, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-700">
                    <span className="text-yellow-600 text-xl">•</span> {adv}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <FAQSection faqs={product.faq} className="bg-zinc-50 border-t border-zinc-200" />
    </>
  );
}
