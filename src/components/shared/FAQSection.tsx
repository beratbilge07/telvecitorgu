'use client';

import { useState } from 'react';
import { FAQ } from '@/types';
import { cn } from '@/lib/utils';

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  className?: string;
}

export default function FAQSection({ 
  faqs, 
  title = "Sıkça Sorulan Sorular", 
  className 
}: FAQSectionProps) {
  return (
    <section className={cn("py-16 bg-white", className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-10">{title}</h2>
        
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-200 rounded-lg overflow-hidden bg-zinc-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between font-semibold text-zinc-800 hover:text-yellow-600 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        <svg 
          className={cn(
            "w-5 h-5 text-zinc-400 transition-transform duration-300 flex-shrink-0",
            isOpen ? "rotate-180 text-yellow-500" : ""
          )} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div 
        className={cn(
          "px-6 text-zinc-600 overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 py-4 border-t border-zinc-200" : "max-h-0 py-0"
        )}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
}
