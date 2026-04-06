// ==========================================
// telvecitorgu.com - Root Layout
// ==========================================

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";
import { generateBaseMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = generateBaseMetadata();

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={cn(inter.variable, "scroll-smooth")}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17797438640"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17797438640');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 font-sans antialiased selection:bg-yellow-500/30">
        <Header />
        
        {/* Adds padding to account for fixed header */}
        <main className="flex-1 pt-[72px] lg:pt-[84px]">
          {children}
        </main>
        
        <Footer />
        <MobileCTA />
        
        {/* Floating WhatsApp on Desktop only, mobile uses MobileCTA */}
        <div className="hidden lg:block">
          <WhatsAppButton variant="floating" showText={false} />
        </div>
      </body>
    </html>
  );
}
