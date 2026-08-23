import type { Metadata, Viewport } from 'next';
import { Archivo, Instrument_Sans, Chivo_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/SEO/JsonLd';
import { WebVitals } from '@/app/web-vitals';
import { AnalyticsProvider } from '@/components/analytics';
import { siteMetadata } from '@/lib/seo';

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: ['700', '800', '900'],
  preload: true,
});

const instrument = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument',
  weight: ['400', '500', '600', '700'],
  preload: true,
});

const chivo = Chivo_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo',
  weight: ['400', '700'],
  preload: true,
});

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: '#0A0A1A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${archivo.variable} ${instrument.variable} ${chivo.variable}`}
    >
      <head>
        <JsonLd />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-[#0A0A1A] text-[#F5F5F5] font-sans antialiased flex flex-col selection:bg-[#F9A8FF]/30 selection:text-white">
        <WebVitals />
        <AnalyticsProvider />
        <Navbar />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
