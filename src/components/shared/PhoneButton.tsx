'use client';

import { generatePhoneUrl, formatPhoneDisplay } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface PhoneButtonProps {
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  showIcon?: boolean;
  showText?: boolean;
}

export default function PhoneButton({ 
  className, 
  variant = 'primary',
  showIcon = true,
  showText = true 
}: PhoneButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-md";
  
  const variants = {
    primary: "bg-zinc-900 text-white hover:bg-zinc-800 shadow-md hover:shadow-lg border border-transparent hover:border-zinc-700",
    outline: "bg-transparent text-zinc-900 border-2 border-zinc-900 hover:bg-zinc-100",
    ghost: "bg-transparent text-zinc-900 hover:bg-zinc-100",
  };

  return (
    <a 
      href={generatePhoneUrl()}
      className={cn(baseStyles, variants[variant], className)}
      aria-label="Bizi Arayın"
    >
      {showIcon && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )}
      {showText && <span>{formatPhoneDisplay()}</span>}
    </a>
  );
}
