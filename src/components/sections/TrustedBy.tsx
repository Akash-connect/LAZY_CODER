'use client';

import React from 'react';
import LogoLoop, { LogoItem } from '@/components/LogoLoop';

const partnerLogos: LogoItem[] = [
  {
    src: '/logos/linear.svg',
    alt: 'Linear',
    title: 'Linear'
  },
  {
    src: '/logos/vercel.svg',
    alt: 'Vercel',
    title: 'Vercel'
  },
  {
    src: '/logos/supabase.svg',
    alt: 'Supabase',
    title: 'Supabase'
  },
  {
    src: '/logos/framer.svg',
    alt: 'Framer',
    title: 'Framer'
  },
  {
    src: '/logos/raycast.svg',
    alt: 'Raycast',
    title: 'Raycast'
  },
  {
    src: '/logos/perplexity.svg',
    alt: 'Perplexity',
    title: 'Perplexity'
  },
  {
    src: '/logos/resend.svg',
    alt: 'Resend',
    title: 'Resend'
  },
  {
    src: '/logos/clerk.svg',
    alt: 'Clerk',
    title: 'Clerk'
  }
];

export function TrustedBy() {
  return (
    <section className="relative z-10 py-12 pb-[80px] content-auto overflow-hidden">
      <div className="w-full px-8 md:px-14 lg:px-20 mb-8">
        <p className="text-center text-[12px] font-mono font-bold uppercase tracking-[0.08em] text-white/50">
          Trusted by founders who hate wasting time
        </p>
      </div>

      <div className="w-full relative">
        <LogoLoop
          logos={partnerLogos}
          speed={60}
          direction="left"
          logoHeight={36}
          gap={24}
          hoverSpeed={15}
          scaleOnHover
          fadeOut
          fadeOutColor="#0A0A1A"
          ariaLabel="Trusted partner logos"
        />
      </div>
    </section>
  );
}
export default TrustedBy;
