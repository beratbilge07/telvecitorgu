import { Metadata } from 'next';
import { generateBaseMetadata } from '@/lib/metadata';
import QuoteForm from '@/components/shared/QuoteForm';
import { SITE_CONFIG } from '@/lib/constants';
import PhoneButton from '@/components/shared/PhoneButton';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

export const metadata: Metadata = generateBaseMetadata({
  title: 'İletişim | Telvecitorgu.com',
  description: 'Çit sistemleri, fiyat teklifi, teknik destek ve ücretsiz keşif için bize ulaşın.',
});

export default function ContactPage() {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <div className="bg-zinc-950 py-16 text-center relative border-b border-zinc-800">
        <div className="absolute inset-0 dark-mesh-pattern opacity-30"></div>
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">İletişim</h1>
          <p className="text-zinc-400 text-lg">Hizmetlerimiz hakkında detaylı bilgi ve fiyat almak için bize ulaşın.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Contact Details */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Bize Ulaşın</h2>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                7/24 müşteri hizmetlerimiz sorularınızı yanıtlamak ve size en uygun güvenlik çözümlerini sunmak için hazırdır. Aşağıdaki iletişim kanallarından bize ulaşabilirsiniz.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-xl shadow-sm shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-1">Müşteri Hizmetleri</h3>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-yellow-600 font-semibold hover:underline block mb-1">
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                  <p className="text-sm text-zinc-500">Hafta içi 08:30 - 18:30 arası arayabilirsiniz.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-xl shadow-sm shrink-0">
                  💬
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-1">WhatsApp Destek</h3>
                  <a href={SITE_CONFIG.whatsappUrl} className="text-green-600 font-semibold hover:underline block mb-1">
                    WhatsApp ile Mesaj Gönder
                  </a>
                  <p className="text-sm text-zinc-500">Hızlı teklif ve görseller için bize yazın.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-xl shadow-sm shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-1">E-Posta</h3>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-zinc-600 hover:text-yellow-600 transition-colors mb-1 block">
                    {SITE_CONFIG.email}
                  </a>
                  <p className="text-sm text-zinc-500">Özel projeler ve teknik dökümanlar için.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-zinc-200">
              <h3 className="font-bold text-zinc-900 mb-4">Hızlı İletişim</h3>
              <div className="flex flex-wrap gap-4">
                <PhoneButton />
                <WhatsAppButton />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 shrink-0">
            <QuoteForm />
          </div>

        </div>
      </div>
    </div>
  );
}
