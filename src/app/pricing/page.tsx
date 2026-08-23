import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Pricing — Product Development, AI & Software | LAZY CODER',
  description: 'Transparent starting prices for websites, apps, custom software, AI automation, and AI agents. Choose a focused product sprint or request a custom scope.',
  openGraph: {
    title: 'Pricing — Product Development, AI & Software | LAZY CODER',
    description: 'Transparent starting prices for websites, apps, custom software, AI automation, and AI agents.',
    url: 'https://lazycoder.dev/pricing',
    siteName: 'LAZY CODER',
    images: [
      {
        url: 'https://lazycoder.dev/og-pricing-inr.png',
        width: 1200,
        height: 630,
        alt: 'LAZY CODER Pricing — Transparent Sprints for Founders',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Product Development, AI & Software | LAZY CODER',
    description: 'Transparent starting prices for websites, apps, custom software, AI automation, and AI agents.',
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
