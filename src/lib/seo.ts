import type { Metadata, Route } from 'next';

const baseUrl = 'https://lazycoder.dev';

export const siteMetadata = {
  title: {
    template: '%s | LAZY CODER',
    default: 'LAZY CODER — We do the hard work so you can be LAZY.',
  },
  description:
    'Product studio that builds fast, scalable, automated software. We write less code that does more. Ship in 21 days.',
  keywords: [
    'software agency',
    'mvp development',
    'saas development',
    'ai automation',
    'next.js agency',
    'webgl developer',
    'product studio',
    'fast shipping'
  ],
  authors: [{ name: 'LAZY CODER', url: baseUrl }],
  creator: 'LAZY CODER',
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'LAZY CODER — We do the hard work so you can be LAZY.',
    description:
      'Product studio that builds fast, scalable, automated software. We write less code that does more. Ship in 21 days.',
    siteName: 'LAZY CODER',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LAZY CODER — Product Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LAZY CODER — We do the hard work so you can be LAZY.',
    description:
      'Product studio that builds fast, scalable, automated software. We write less code that does more. Ship in 21 days.',
    images: ['/og-image.png'],
    creator: '@lazycoder',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};
