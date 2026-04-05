import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export default function Logo({ className, isDark = false }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={cn(
        "flex items-center gap-2 group",
        className
      )}
    >
      <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-zinc-800 to-black border border-zinc-700">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 group-hover:opacity-40 transition-opacity"></div>
        {/* Animated Fence/Wire Icon Concept */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-6 h-6 text-yellow-500 group-hover:scale-110 transition-transform duration-300"
        >
          <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4" />
          <path d="M4 8h16" />
          <path d="M4 16h16" />
          <path d="m9 4 6 16" />
          <path d="m15 4-6 16" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={cn(
          "font-black text-2xl leading-none tracking-tighter uppercase",
          isDark ? "text-white" : "text-zinc-900"
        )}>
          NOVA
        </span>
        <span className={cn(
          "text-[0.55rem] font-black tracking-widest uppercase mt-0.5",
          "text-green-500" // Always green like the logo image
        )}>
          Tel Örgü ve Çit Sistemleri
        </span>
      </div>
    </Link>
  );
}
