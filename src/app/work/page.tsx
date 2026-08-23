import type { Metadata } from 'next';
import WorkClient from './WorkClient';

export const metadata: Metadata = {
  title: 'Our Work — Products, Software & AI Systems | LAZY CODER',
  description: 'Explore products, websites, custom software, AI systems, and automation platforms built by LAZY CODER. Real systems, real context, zero fake proof.',
  openGraph: {
    title: 'Our Work — Products, Software & AI Systems | LAZY CODER',
    description: 'Explore products, websites, custom software, AI systems, and automation platforms built by LAZY CODER.',
    url: 'https://lazycoder.dev/work',
    siteName: 'LAZY CODER',
    images: [
      {
        url: 'https://lazycoder.dev/og-work.png',
        width: 1200,
        height: 630,
        alt: 'LAZY CODER Work — Shipped Systems & Case Studies',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work — Products, Software & AI Systems | LAZY CODER',
    description: 'Explore products, websites, custom software, AI systems, and automation platforms built by LAZY CODER.',
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
