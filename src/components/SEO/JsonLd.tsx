import React from 'react';

interface JsonLdProps {
  data?: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  const organizationSchema = data || {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LAZY CODER',
    url: 'https://lazycoder.dev',
    logo: 'https://lazycoder.dev/logo.png',
    description: 'Product studio that builds fast, scalable, automated software. Ship in 21 days.',
    founder: {
      '@type': 'Person',
      name: 'Akash Jadhav',
    },
    sameAs: [
      'https://github.com/Akash-connect',
      'https://twitter.com/lazycoder',
      'https://linkedin.com/company/lazycoder'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: 'https://lazycoder.dev/#contact'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
