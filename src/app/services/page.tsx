import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Services — Websites, Apps, Software & AI | LAZY CODER',
  description: 'LAZY CODER builds websites, mobile apps, custom software, AI automation, and AI agents for modern businesses. From focused MVPs to production systems.',
  openGraph: {
    title: 'Services — Websites, Apps, Software & AI | LAZY CODER',
    description: 'LAZY CODER builds websites, mobile apps, custom software, AI automation, and AI agents for modern businesses. From focused MVPs to production systems.',
    url: 'https://lazycoder.dev/services',
    siteName: 'LAZY CODER',
    images: [
      {
        url: 'https://lazycoder.dev/og-services.png',
        width: 1200,
        height: 630,
        alt: 'LAZY CODER Services — Production Software & AI Systems',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services — Websites, Apps, Software & AI | LAZY CODER',
    description: 'LAZY CODER builds websites, mobile apps, custom software, AI automation, and AI agents for modern businesses.',
  }
};

export default function ServicesPage() {
  return <ServicesClient />;
}
