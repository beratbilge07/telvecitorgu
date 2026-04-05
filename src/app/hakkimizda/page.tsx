import { Metadata } from 'next';
import { generateBaseMetadata } from '@/lib/metadata';
import { SITE_CONFIG, STATS } from '@/lib/constants';

export const metadata: Metadata = generateBaseMetadata({
  title: 'Hakkımızda | Telvecitorgu.com',
  description: '15 yılı aşkın tecrübemizle çit ve çevre güvenlik sistemleri sektöründe öncü firmayız.',
});

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-zinc-950 py-20 border-b border-zinc-800 text-center relative">
        <div className="absolute inset-0 dark-mesh-pattern opacity-30"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Hakkımızda</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Güvenliğinizi şansa bırakmayın, uzmanlara emanet edin.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">Biz Kimiz?</h2>
            <div className="prose prose-zinc lg:prose-lg text-zinc-600 mb-12">
              <p>
                <strong>{SITE_CONFIG.name}</strong>, {SITE_CONFIG.foundedYear} yılından bu yana çevre güvenlik sistemleri, panel çit ve tel örgü sektöründe faaliyet gösteren öncü bir kuruluştur. Yenilikçi yaklaşımımız ve müşteri memnuniyeti odaklı hizmet anlayışımızla Türkiye'nin 81 iline hizmet veriyoruz.
              </p>
              <p>
                Giderek artan güvenlik ihtiyaçlarına modern, uzun ömürlü ve ekonomik çözümler sunmak amacıyla çıktığımız bu yolda; fabrikalar, sanayi tesisleri, okullar, konut siteleri, spor kompleksleri ve tarım arazileri başta olmak üzere binlerce projeye imza attık.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-100">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <span className="text-yellow-500">🎯</span> Misyonumuz
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  Müşterilerimizin can ve mal güvenliğini en üst düzeyde koruyacak, estetik ve sağlam çevre güvenlik sistemlerini hızlı, güvenilir ve ekonomik şekilde sunmak.
                </p>
              </div>
              <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-100">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <span className="text-yellow-500">👁️</span> Vizyonumuz
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  Sektörde kalite standartlarını belirleyen, teknolojik gelişmeleri yakından takip eden ve Türkiye'nin en çok güvenilen çevre güvenlik sistemleri markası olmak.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">Rakamlarla Biz</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center p-6 border border-zinc-200 rounded-xl bg-white shadow-sm hover:border-yellow-500 transition-colors">
                  <div className="text-4xl font-extrabold text-zinc-900 mb-2">{stat.value}</div>
                  <div className="text-zinc-500 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
