'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { products } from '@/data/products';

export default function QuoteForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className={cn("bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden", className)}>
      <div className="bg-zinc-950 p-6 text-center border-b-4 border-yellow-500">
        <h3 className="text-xl font-bold text-white mb-2">Hızlı Teklif Alın</h3>
        <p className="text-zinc-400 text-sm">Projeleriniz için 30 dakika içinde fiyatlandırıp dönüş yapalım.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">Ad Soyad / Firma Adı *</label>
          <input 
            type="text" 
            id="name" 
            required 
            className="w-full px-4 py-3 rounded-md bg-zinc-50 border border-zinc-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder:text-zinc-400"
            placeholder="Adınızı giriniz"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">Telefon Numarası *</label>
          <input 
            type="tel" 
            id="phone" 
            required 
            className="w-full px-4 py-3 rounded-md bg-zinc-50 border border-zinc-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder:text-zinc-400"
            placeholder="05XX XXX XX XX"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-zinc-700 mb-1">İlgilendiğiniz Hizmet</label>
          <select 
            id="service" 
            className="w-full px-4 py-3 rounded-md bg-zinc-50 border border-zinc-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all text-zinc-700"
          >
            <option value="">Seçiniz...</option>
            {products.map(p => (
              <option key={p.slug} value={p.slug}>{p.name}</option>
            ))}
            <option value="diger">Diğer / Kararsızım</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">Proje Detayları (Opsiyonel)</label>
          <textarea 
            id="message" 
            rows={3} 
            className="w-full px-4 py-3 rounded-md bg-zinc-50 border border-zinc-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder:text-zinc-400 resize-none"
            placeholder="Örn: 2 dönüm tarla etrafına 2 metre yüksekliğinde panel çit..."
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full mt-2 bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold py-4 rounded-md transition-colors shadow-lg shadow-yellow-500/20 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {status === 'loading' ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-zinc-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Gönderiliyor...
              </>
            ) : status === 'success' ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Talebiniz Alındı!
              </>
            ) : (
              <>Fiyat Teklifi İste <span className="group-hover:translate-x-1 transition-transform">→</span></>
            )}
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
        
        <p className="text-xs text-center text-zinc-500 mt-2">
          Kişisel verileriniz KVKK kapsamında korunmaktadır.
        </p>
      </form>
    </div>
  );
}
