import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Gizlilik Politikası | ${SITE_CONFIG.name}`,
  description: 'Nova Tel Çit Sistemleri Gizlilik Politikası, kişisel verilerin korunması ve çerez kullanım şartları.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-24 bg-zinc-50 border-t border-zinc-200 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-zinc-900 mb-8 border-b-4 border-yellow-500 pb-4 inline-block">Gizlilik Politikası</h1>
        
        <div className="prose prose-zinc max-w-none text-zinc-700 space-y-6">
          <p className="lead text-lg font-medium">
            Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}
          </p>
          
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">1. Giriş</h2>
            <p>
              {SITE_CONFIG.name} olarak, web sitemizi (telvecitorgu.com) ziyaret eden kullanıcılarımızın gizliliğine ve kişisel verilerinin korunmasına büyük önem veriyoruz. Bu "Gizlilik Politikası", sitemiz üzerinden topladığımız bilgilerin nasıl kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">2. Toplanan Bilgiler</h2>
            <p>Sitemizi kullanımınız sırasında iki tür bilgi toplanabilir:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kişisel Bilgiler:</strong> İletişim formları, teklif alma formları veya doğrudan iletişim (WhatsApp, Telefon) kanalları üzerinden kendi rızanızla bize ilettiğiniz ad, soyad, telefon numarası ve e-posta adresi gibi bilgilerdir.</li>
              <li><strong>Kişisel Olmayan Bilgiler:</strong> Tarayıcı türünüz, ziyaret saati, IP adresiniz, incelenen sayfalar gibi istatistiksel veriler (çerezler aracılığıyla) toplanabilir. Bu veriler yalnızca site performansını artırmak amacıyla kullanılır.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">3. Bilgilerin Kullanımı</h2>
            <p>Topladığımız bilgiler aşağıdaki amaçlarla kullanılır:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Teklif taleplerinize hızlı yanıt vermek,</li>
              <li>Size en uygun ürün ve hizmeti sunmak (örneğin bölgesel hizmetlerimiz),</li>
              <li>Müşteri hizmetleri ve iletişim faaliyetlerini yürütmek,</li>
              <li>Sitemizin genel analizini yaparak kullanıcı deneyimini iyileştirmek.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">4. Bilgilerin Paylaşımı</h2>
            <p>
              {SITE_CONFIG.name}, toplanan kişisel bilgilerinizi hiçbir şekilde üçüncü taraf firmalara para karşılığı veya ticari çıkar uğruna <strong>satmaz, kiralayamaz veya paylaşmaz</strong>. Bilgileriniz, yalnızca yasal zorunluluklar gerektirdiği durumlarda resmi kurumlarla paylaşılabilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">5. Veri Güvenliği</h2>
            <p>
              Toplanan kişisel bilgilerinizin güvenliği bizim için önemlidir. Bilgilerinizi kaybolmaya, kötüye kullanılmaya, izinsiz erişime veya ifşaya karşı korumak için endüstri standardı siber güvenlik önlemleri almaktayız.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">6. İletişim</h2>
            <p>
              Gizlilik Politikamız ile ilgili her türlü soru, görüş veya kişisel verilerinizin silinmesi talepleri için bizimle iletişime geçebilirsiniz.
            </p>
            <p className="font-bold mt-2">
              Telefon: {SITE_CONFIG.phone} <br />
              E-Posta: {SITE_CONFIG.email}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
