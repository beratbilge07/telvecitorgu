import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityBySlug, getAllCitySlugs, getCitiesByRegion } from '@/data/cities';
import { getProductBySlug, getAllProductSlugs, products } from '@/data/products';
import { generateCityMetadata, generateCityProductMetadata } from '@/lib/metadata';
import { generateCityServiceSchema, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import SchemaMarkup from '@/components/shared/SchemaMarkup';
import WhyUsSection from '@/components/home/WhyUsSection';
import ServicesGrid from '@/components/home/ServicesGrid';
import CTASection from '@/components/home/CTASection';
import QuoteForm from '@/components/shared/QuoteForm';
import FAQSection from '@/components/shared/FAQSection';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

// --- SEO Helper Component ---
const NeighborhoodSection = ({ city }: { city: any }) => {
  if (!city) return null;
  const neighbors = getCitiesByRegion(city.region).filter(c => c.slug !== city.slug);
  if (neighbors.length === 0) return null;

  return (
    <section className="py-16 bg-zinc-50 border-t border-zinc-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mb-4">{city.region} Bölgesi Diğer Panel Çit ve Tel Örgü Hizmet Noktalarımız</h3>
          <p className="text-zinc-600 max-w-2xl mx-auto">Sadece <strong>{city.name}</strong> ile sınırlı kalmıyoruz. Tüm {city.region} bölgesine TSE belgeli <strong className="text-zinc-900">panel çit, tel örgü ve çim çit</strong> üretim ve montaj hizmeti sağlıyoruz.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {neighbors.map(n => (
            <Link key={n.slug} href={`/${n.slug}`} className="bg-white border border-zinc-200 p-4 rounded-xl shadow-sm hover:border-yellow-500 hover:shadow-md transition-all text-center group">
              <span className="block text-zinc-800 font-extrabold group-hover:text-yellow-600 transition-colors uppercase tracking-wide">{n.name}</span>
              <span className="block text-[10px] text-zinc-500 mt-1 uppercase tracking-wider font-semibold">Panel & Tel Örgü</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

type Props = {
  params: Promise<{ slug: string }>;
};

// Route matching logic
type RouteType = 
  | { type: 'city', city: ReturnType<typeof getCityBySlug> }
  | { type: 'city-product', city: ReturnType<typeof getCityBySlug>, product: ReturnType<typeof getProductBySlug> }
  | { type: 'not-found' };

function resolveRoute(slug: string): RouteType {
  // Check if it's purely a city
  const city = getCityBySlug(slug);
  if (city) {
    return { type: 'city', city };
  }

  // Check if it's a city-product combination
  const cities = getAllCitySlugs();
  for (const cSlug of cities) {
    if (slug.startsWith(`${cSlug}-`)) {
      const productPart = slug.substring(cSlug.length + 1);
      const possibleProduct = getProductBySlug(productPart);
      
      if (possibleProduct) {
        return { 
          type: 'city-product', 
          city: getCityBySlug(cSlug), 
          product: possibleProduct 
        };
      }
    }
  }

  return { type: 'not-found' };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = resolveRoute(slug);
  
  if (route.type === 'not-found' || !route.city) {
    return { title: 'Sayfa Bulunamadı' };
  }
  
  if (route.type === 'city') {
    return generateCityMetadata(route.city);
  }
  
  if (route.type === 'city-product' && route.product) {
    return generateCityProductMetadata(route.city, route.product);
  }
  
  return { title: 'Sayfa Bulunamadı' };
}

export function generateStaticParams() {
  const cities = getAllCitySlugs();
  const productsList = getAllProductSlugs();
  const paths: { slug: string }[] = [];

  // Generate 81 cities
  cities.forEach(city => {
    paths.push({ slug: city });
    
    // Generate 81 cities * 10 products
    productsList.forEach(product => {
      paths.push({ slug: `${city}-${product}` });
    });
  });

  return paths;
}

export default async function SlugRoutePage({ params }: Props) {
  const { slug } = await params;
  const route = resolveRoute(slug);

  if (route.type === 'not-found' || !route.city) {
    notFound();
  }

  const { city } = route;

  // Render City Page Logic
  if (route.type === 'city') {
    const localBusinessSchema = generateCityServiceSchema(city);
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Ana Sayfa', url: '/' },
      { name: `${city.name} Çit Sistemleri`, url: `/${city.slug}` }
    ]);

    return (
      <>
        <SchemaMarkup schema={localBusinessSchema} />
        <SchemaMarkup schema={breadcrumbSchema} />
        
        <div className="bg-zinc-900 border-b border-zinc-800 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                {city.name} <span className="text-yellow-500">Panel Çit, Tel Örgü</span> ve Çim Çit Sistemleri
              </h1>
              <h2 className="text-xl text-zinc-300 mb-8 leading-relaxed font-light">
                {city.description} Kendi fabrikamızdan <strong className="font-bold text-white">panel çit, çim çit ve helezon tel örgü</strong> çözümleri ile {city.name} genelinde garantili sınır güvenliği sağlıyoruz.
              </h2>
              <p className="text-zinc-400 font-semibold bg-zinc-800/50 inline-block px-6 py-3 rounded-xl border border-zinc-700/50">
                {city.name} ve çevre ilçelerinde ücretsiz keşif ve profesyonel montaj hizmetimizden yararlanmak için hemen bize ulaşın.
              </p>
              
              <div className="mt-12 flex flex-wrap justify-center gap-3">
                {products.map(product => (
                  <Link 
                    key={product.slug}
                    href={`/${city.slug}-${product.slug}`}
                    className="px-4 py-2 bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-yellow-500 hover:text-white rounded-full text-sm transition-colors"
                  >
                    {city.name} {product.shortName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <WhyUsSection />
        <CTASection />

        {city.templateVariant % 2 === 0 ? (
          <ServicesGrid />
        ) : (
          <div className="py-20 bg-zinc-50">
            <div className="container mx-auto px-4"><ServicesGrid /></div>
          </div>
        )}

        <NeighborhoodSection city={city} />
      </>
    );
  }

  // Render City+Product Page Logic
  if (route.type === 'city-product' && route.product) {
    const { product } = route;
    const serviceSchema = generateServiceSchema(product, city.name);
    const faqSchema = generateFAQSchema(product.faq);
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Ana Sayfa', url: '/' },
      { name: `${city.name} Çit Sistemleri`, url: `/${city.slug}` },
      { name: `${city.name} ${product.name}`, url: `/${city.slug}-${product.slug}` }
    ]);

    return (
      <>
        <SchemaMarkup schema={serviceSchema} />
        <SchemaMarkup schema={faqSchema} />
        <SchemaMarkup schema={breadcrumbSchema} />

        <section className="bg-zinc-950 py-16 lg:py-24 border-b border-zinc-800 relative overflow-hidden">
          <div className="absolute inset-0 dark-mesh-pattern opacity-30"></div>
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 text-center lg:text-left">
                <span className="text-yellow-500 font-semibold tracking-wider text-sm uppercase mb-4 block">
                  {city.name} Hizmet Bölgesi
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {city.name} {product.name}
                </h1>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {city.name} ve çevre ilçelerinde profesyonel {product.name.toLowerCase()} çözümleri sunuyoruz. {city.description}
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-md py-2 px-4 flex items-center gap-2">
                    <span className="text-yellow-500">✅</span>
                    <span className="text-zinc-300 text-sm">{city.name} İçi Ücretsiz Keşif</span>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-md py-2 px-4 flex items-center gap-2">
                    <span className="text-yellow-500">⚡</span>
                    <span className="text-zinc-300 text-sm">Hızlı Montaj</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full max-w-[420px] shrink-0">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <div className="prose prose-zinc lg:prose-lg max-w-none">
                  <h2>{city.name} {product.shortName} Kurulumu ve Özellikleri</h2>
                  <p>
                    {product.description} Kaliteli malzemeler ve deneyimli ustalarımızla <strong>{city.name}</strong> bölgesindeki projelerinizi zamanında teslim ediyoruz.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                    <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
                    Öne Çıkan Özellikler
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 bg-zinc-50 p-4 rounded-lg border border-zinc-100">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span className="text-zinc-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                    <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
                    {city.name} Bölgesinde Neden Biz?
                  </h3>
                  <p className="text-zinc-600 mb-6 leading-relaxed">
                    {city.name} bölgesinin iklim ve arazi koşullarını yakından tanıyoruz. Bölgedeki fabrika, arsa, tarla ve konut projeleri için en optimal çit sistemlerini uyguluyoruz.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-sm">
                      <div className="text-2xl mb-2">🚚</div>
                      <div className="font-bold text-zinc-900 text-sm">Hızlı Tedarik</div>
                    </div>
                    <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-sm">
                      <div className="text-2xl mb-2">👷</div>
                      <div className="font-bold text-zinc-900 text-sm">Uzman Ekip</div>
                    </div>
                    <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-sm">
                      <div className="text-2xl mb-2">🛡️</div>
                      <div className="font-bold text-zinc-900 text-sm">Garanti</div>
                    </div>
                    <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-sm">
                      <div className="text-2xl mb-2">💵</div>
                      <div className="font-bold text-zinc-900 text-sm">Uygun Fiyat</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-zinc-900 mb-4 pb-4 border-b border-zinc-200">
                    {city.name} Diğer Hizmetlerimiz
                  </h4>
                  <ul className="space-y-3">
                    {products.filter(p => p.slug !== product.slug).slice(0, 6).map(p => (
                      <li key={p.slug}>
                        <Link 
                          href={`/${city.slug}-${p.slug}`}
                          className="text-zinc-600 hover:text-yellow-600 transition-colors flex items-center gap-2 text-sm"
                        >
                          <span className="text-yellow-500">›</span> {city.name} {p.shortName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6 text-white text-center">
                  <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    📞
                  </div>
                  <h4 className="text-xl font-bold mb-2">Yardıma mı ihtiyacınız var?</h4>
                  <p className="text-zinc-400 text-sm mb-6">Müşteri temsilcimiz sorularınızı yanıtlamaktan memnuniyet duyar.</p>
                  <a 
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="block w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-zinc-900 font-bold rounded-md transition-colors"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NeighborhoodSection city={city} />

        <FAQSection faqs={product.faq} title={`${city.name} ${product.shortName} Hakkında Sıkça Sorulan Sorular`} />
      </>
    );
  }

  // Fallback (should be unreachable)
  return notFound();
}
