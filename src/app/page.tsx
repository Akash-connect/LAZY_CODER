'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import StrokeText from '@/components/StrokeText';

// Dynamic import for WebGL shader (only for hero on desktop)
const SlicedWaves = dynamic(() => import('@/components/SlicedWaves'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0A0A1A]" />
});

// Lazy load all below-fold sections with SSR to optimize TBT and First Load JS
const TrustedBy = dynamic(() => import('@/components/sections/TrustedBy'), { ssr: true });
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), { ssr: true });
const WorkSection = dynamic(() => import('@/components/sections/WorkSection'), { ssr: true });
const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'), { ssr: true });
const StatsSection = dynamic(() => import('@/components/sections/StatsSection'), { ssr: true });
const TestimonialSection = dynamic(() => import('@/components/sections/TestimonialSection'), { ssr: true });
const CTASection = dynamic(() => import('@/components/sections/CTASection'), { ssr: true });

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A1A] text-white selection:bg-[#F9A8FF]/30 selection:text-white overflow-x-hidden font-sans">

      {/* =========================================================================
          SECTION 1 - HERO (INSTANT LCP, ZERO JS ANIMATION BLOCKING)
         ========================================================================= */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 md:py-32">
        {/* WebGL Background Shader Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <SlicedWaves />
        </div>

        {/* Grain & Radial Vignette */}
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-[1] bg-[radial-gradient(circle_at_center,transparent_20%,#0A0A1A_95%)]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-12 w-full text-center sm:text-left flex flex-col items-center sm:items-start">
          
          {/* Top Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/90 text-xs font-mono font-bold tracking-[0.18em] uppercase backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F9A8FF] animate-pulse" />
              DOING LESS. BUILDING MORE.
            </span>
          </div>

          {/* Headline H1 (Instant LCP) */}
          <h1 className="text-[44px] sm:text-[60px] md:text-[80px] font-black tracking-[-0.04em] leading-[0.92] max-w-[760px] text-white flex flex-wrap items-baseline gap-x-3">
            <span>We do the hard work so you can be</span>
            <span className="inline-block relative align-baseline px-2 py-0.5 rounded-lg bg-white/[0.04] border border-white/10 shadow-lg shadow-purple-500/10">
              <StrokeText
                text="LAZY"
                strokeColor="#F9A8FF"
                fillColor="#E9E6FF"
              />
            </span>
            <span>.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-8 text-base sm:text-lg text-white/70 max-w-[520px] leading-[1.6] font-normal">
            Product studio for founders who want software that runs itself. We build fast, scalable web apps and AI automations.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center sm:justify-start gap-4 w-full sm:w-auto">
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-[#E9E6FF] text-black font-semibold text-sm px-7 py-3.5 rounded-[12px] shadow-lg shadow-white/5 hover:scale-105 transition-all"
            >
              Start a project &rarr;
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-white/15 hover:border-white/30 text-white font-mono text-xs tracking-wider px-6 py-3.5 rounded-[12px] hover:bg-white/5 transition-all"
            >
              See our work
            </Link>
          </div>

          {/* Bottom Social Proof Micro-Strip */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-white/50">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Available for Q3 Sprints
            </span>
            <span>•</span>
            <span>21-Day Average Ship Time</span>
            <span>•</span>
            <span>100% Code Ownership</span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          BELOW-FOLD SECTIONS (DYNAMICALLY LAZY LOADED WITH CONTENT-VISIBILITY)
         ========================================================================= */}
      <TrustedBy />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialSection />
      <CTASection />

    </div>
  );
}
