import Link from 'next/link';
import PhoneButton from '../shared/PhoneButton';

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden bg-yellow-500">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-transparent to-transparent bg-[length:20px_20px]"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-zinc-950 p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Inner Mesh pattern */}
          <div className="absolute inset-0 dark-mesh-pattern opacity-30 pointer-events-none"></div>
          
          <div className="flex-1 relative z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ücretsiz Keşif İçin Hemen Arayın
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto lg:mx-0">
              Uzman ekibimiz adresinize gelsin, ölçülerinizi alsın ve size en uygun fiyat teklifini sunsun. Ziyaret ve ölçülendirme hizmetimiz tamamen ücretsizdir.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full lg:w-auto shrink-0">
            <PhoneButton 
              className="w-full sm:w-auto px-8 py-4 !bg-yellow-500 !text-zinc-950 hover:!bg-yellow-400 font-black text-lg border-none hover:border-none shadow-lg shadow-yellow-500/20" 
              variant="primary" 
            />
            <a 
              href={`https://wa.me/905523676403?text=Merhaba,%20projem%20için%20ücretsiz%20keşif%20ve%20fiyat%20teklifi%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-600 hover:border-zinc-500 font-bold rounded-md transition-colors text-center inline-flex items-center justify-center text-lg"
            >
              Hemen Teklif İste
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
