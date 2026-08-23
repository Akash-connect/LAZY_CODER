import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About LAZY CODER — Product Studio for Software, AI & Automation',
  description: 'LAZY CODER is a product studio building websites, mobile apps, custom software, AI agents, and automated systems for modern businesses. We remove work.',
  openGraph: {
    title: 'About LAZY CODER — Product Studio for Software, AI & Automation',
    description: 'LAZY CODER is a product studio building websites, mobile apps, custom software, AI agents, and automated systems for modern businesses.',
    url: 'https://lazycoder.dev/about',
    siteName: 'LAZY CODER',
    images: [
      {
        url: 'https://lazycoder.dev/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About LAZY CODER — We Remove Unnecessary Work',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About LAZY CODER — Product Studio for Software, AI & Automation',
    description: 'LAZY CODER is a product studio building websites, mobile apps, custom software, AI agents, and automated systems.',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
