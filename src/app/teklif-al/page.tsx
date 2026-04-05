import { Metadata } from 'next';
import { generateBaseMetadata } from '@/lib/metadata';
import QuoteForm from '@/components/shared/QuoteForm';

export const metadata: Metadata = generateBaseMetadata({
  title: 'Hızlı Fiyat Teklifi Al | Telvecitorgu.com',
  description: 'Projeniz için ihtiyacınız olan panel çit ve tel örgü fiyat teklifini 30 dakika içinde hızlıca alın.',
});

export default function QuotePage() {
  return (
    <div className="bg-zinc-50 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <div className="text-center mb-10">
            <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2 block">Ücretsiz Keşif</span>
            <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">Hızlı Teklif İste</h1>
            <p className="text-zinc-600 text-lg">
              Alanınıza uygun güvenlik çiti sistemleri için formu eksiksiz doldurun, satış temsilcilerimiz en kısa sürede sizi arasın.
            </p>
          </div>

          <div className="w-full">
            <QuoteForm className="shadow-2xl border-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
