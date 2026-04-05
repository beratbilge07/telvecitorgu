import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Kullanım Şartları | ${SITE_CONFIG.name}`,
  description: 'Nova Tel Çit Sistemleri site kullanım koşulları ve mesafeli hizmet ön bilgilendirmeleri.',
};

export default function TermsOfUsePage() {
  return (
    <div className="py-24 bg-zinc-50 border-t border-zinc-200 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-zinc-900 mb-8 border-b-4 border-yellow-500 pb-4 inline-block">Kullanım Şartları</h1>
        
        <div className="prose prose-zinc max-w-none text-zinc-700 space-y-6">
          <p className="lead text-lg font-medium">
            Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}
          </p>
          
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">1. Taraflar ve Onay</h2>
            <p>
              Bu "Kullanım Şartları", {SITE_CONFIG.name} ("Şirket") ile telvecitorgu.com ("Site") web sitesini ziyaret eden ve hizmetlerimizden (çit sistemleri teklifi, bilgilendirme) faydalanan kişiler ("Kullanıcı") arasında geçerlidir. Siteye giriş yaparak bu şartları okuduğunuzu ve kabul ettiğinizi beyan edersiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">2. Sunulan Hizmetler</h2>
            <p>
              {SITE_CONFIG.name}, panel çit, tel örgü, jiletli tel, çim çit ve benzeri çevre güvenlik sistemleri konusunda üretim, satış ve montaj hizmetleri sunar. Sitede yer alan ürün görselleri, uygulanabilir modelleri gösteren temsilî nitelik taşıyabilir. Gerçek uygulama, projenin büyüklüğüne ve arazi koşullarına göre farklılık gösterebilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">3. Fiyatlandırma ve Teklif Alma</h2>
            <p>
              Sitede yer alan "Hızlı Teklif" ve WhatsApp iletişim sekmeleri, ön bilgilendirme amaçlıdır. Bir projenin nihai fiyatı ancak uzman ekibimizin sahada yapacağı "Ücretsiz Keşif" sonucunda veya tarafınızdan iletilen net ölçüler/videolar üzerinden netleşir. İletişim sırasında verilen ortalama fiyatlar bağlayıcı değildir ve nihai resmi teklife kadar değişebilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">4. Telif Hakkı ve Fikri Mülkiyet</h2>
            <p>
              Bu internet sitesinde yer alan her türlü tasarım, metin, logo, grafik, ses, resim, video, yazılım ve diğer fikir ürünleri {SITE_CONFIG.name}'ne aittir veya lisanslı olarak kullanılmaktadır. Şirketin yazılı izni olmaksızın bu içerikler kopyalanamaz, çoğaltılamaz veya ticari amaçlarla kullanılamaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">5. Sorumluluğun Sınırlandırılması</h2>
            <p>
              Sitenin kullanımı sırasında ortaya çıkabilecek herhangi bir hata, aksaklık, bilgisayar virüsü, sistem veya bağlantı arızası durumunda oluşabilecek doğrudan veya dolaylı zararlardan {SITE_CONFIG.name} sorumlu tutulamaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">6. Şartlarda Değişiklik</h2>
            <p>
              {SITE_CONFIG.name}, bu kullanım şartlarında ve web sitesinde yer alan her türlü hizmet, ürün, kullanma koşulları ile web sitesinde sunulan bilgileri önceden haber vermeksizin değiştirme, iptal etme veya siteyi durdurma hakkını saklı tutar. Değişiklikler sitede yayınlandığı andan itibaren geçerli sayılır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">7. Uyuşmazlık Çözümü</h2>
            <p>
              İşbu Kullanım Şartları'nın uygulanmasından doğabilecek uyuşmazlıklarda Türkiye Cumhuriyeti kanunları geçerli olup, uyuşmazlığın çözümünde Türk Mahkemeleri ve İcra Daireleri yetkilidir.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
