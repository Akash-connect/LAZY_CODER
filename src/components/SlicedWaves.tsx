'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const SlicedWavesCore = dynamic(() => import('@/components/SlicedWavesCore'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0A0A1A]" />
});

export default function SlicedWaves(props: any) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable heavy WebGL on desktop (>768px) and when reduced motion is disabled
    const isMobile = window.innerWidth <= 768;
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    if (!isMobile && !prefersReducedMotion) {
      setEnabled(true);
    }
  }, []);

  if (!enabled) {
    return (
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(120,100,255,0.15),transparent_60%)] bg-[#0A0A1A]" />
    );
  }

  return <SlicedWavesCore {...props} />;
}
