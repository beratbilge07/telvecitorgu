import { TRUST_BADGES } from '@/lib/constants';

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-white border-y border-zinc-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-yellow-600 font-semibold tracking-wider text-sm uppercase mb-3 block">Tel ve Çit Örgü</span>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Neden Bizi Tercih Etmelisiniz?</h2>
          <p className="text-zinc-600 text-lg">Yılların verdiği tecrübe, profesyonel ekip ve kaliteli malzemelerle alanlarınıza değer katıyoruz.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_BADGES.map((badge, index) => (
            <div 
              key={index}
              className="bg-zinc-50 border border-zinc-100 p-8 rounded-xl hover:bg-white hover:shadow-xl hover:border-yellow-200 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-zinc-900 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:-translate-y-2 group-hover:bg-yellow-500 transition-all duration-300">
                <span className="filter drop-shadow-sm">{badge.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-3">{badge.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
