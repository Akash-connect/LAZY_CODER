'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Check, ChevronDown, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { pricingTiers, pricingAddOns, pricingFaqs } from '@/lib/pricing';

const Waves = dynamic(() => import('@/components/Waves'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0A0A1A]" />
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative min-h-screen bg-[#0A0A1A] text-white font-sans selection:bg-[#F9A8FF]/30 selection:text-white overflow-x-hidden">
      
      {/* Background Grid Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10">

        {/* =========================================================================
            1. PRICING HERO
           ========================================================================= */}
        <section className="relative pt-[160px] pb-[60px] px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto text-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <Waves
              lineColor="#F9A8FF"
              backgroundColor="transparent"
              waveSpeedX={0.01}
              waveSpeedY={0.005}
              waveAmpX={20}
              waveAmpY={14}
            />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-[700px] mx-auto"
          >
            <motion.span
              variants={fadeUp}
              className="text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase block mb-4 font-bold"
            >
              TRANSPARENT FLAT SPRINTS
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-[40px] sm:text-[56px] md:text-[64px] font-black tracking-[-0.04em] leading-[0.95] text-white"
            >
              Simple pricing. No surprises.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-[18px] text-white/70 max-w-[500px] mt-[16px] mx-auto leading-[1.6]"
            >
              Fixed price. Fixed timeline. You own everything.
            </motion.p>
          </motion.div>
        </section>

        {/* =========================================================================
            2. PRICING CARDS (3 COLS)
           ========================================================================= */}
        <section className="py-[40px] px-6 sm:px-8 md:px-12 max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] items-stretch">
            {pricingTiers.map((tier) => {
              const isPopular = tier.popular;
              return (
                <motion.div
                  key={tier.id}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className={`p-[32px] rounded-[24px] flex flex-col justify-between relative transition-all ${
                    isPopular
                      ? 'bg-white/[0.08] border-2 border-[#E9E6FF]/60 lg:scale-105 shadow-2xl shadow-purple-500/10 z-10'
                      : 'bg-white/5 border border-white/10 hover:border-white/20'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E9E6FF] text-black text-[10px] font-extrabold px-[12px] py-[4px] rounded-full uppercase tracking-wider shadow-md">
                      MOST POPULAR
                    </div>
                  )}

                  <div>
                    {/* Tier Name */}
                    <span className="text-[14px] font-mono font-bold uppercase tracking-widest text-white/50 block">
                      {tier.name}
                    </span>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mt-[12px]">
                      <span className="text-[40px] font-black font-mono text-white tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-[14px] font-mono text-white/50">
                        {tier.billing}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[14px] text-white/60 mt-[12px] min-h-[40px] leading-relaxed">
                      {tier.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-[32px] pt-6 border-t border-white/10 space-y-[16px]">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-[14px] text-white/80">
                          <Check className="w-4 h-4 text-[#E9E6FF] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-[32px]">
                    <Link
                      href="/services"
                      className={`w-full py-[14px] rounded-[12px] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        tier.ctaStyle === 'gradient'
                          ? 'bg-[#E9E6FF] hover:bg-white text-black shadow-lg shadow-purple-500/20'
                          : tier.ctaStyle === 'white'
                          ? 'bg-white hover:bg-slate-200 text-black shadow-lg'
                          : 'border border-white/15 hover:border-white/30 text-white hover:bg-white/5'
                      }`}
                    >
                      {tier.ctaText} &rarr;
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="text-center text-[13px] font-mono text-white/40 mt-[32px]">
            All plans include full source code ownership, production deployment & architecture documentation.
          </p>
        </section>

        {/* =========================================================================
            3. ADD-ONS STRIP
           ========================================================================= */}
        <section className="py-[60px] px-6 sm:px-8 md:px-12 max-w-[1100px] mx-auto border-t border-white/10 mt-8">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-[#F9A8FF] uppercase tracking-widest block font-bold">
              MODULAR CAPABILITIES
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">Optional Sprint Add-Ons</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingAddOns.map((addon, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-white">{addon.title}</h4>
                    <span className="font-mono text-sm font-bold text-[#E9E6FF]">{addon.price}</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">{addon.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            4. FAQ ACCORDION
           ========================================================================= */}
        <section className="py-[80px] px-6 sm:px-8 md:px-12 max-w-[700px] mx-auto border-t border-white/10">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-[#F9A8FF] uppercase tracking-widest block font-bold">
              FREQUENTLY ASKED
            </span>
            <h3 className="text-3xl font-bold text-white mt-1">Common Questions</h3>
          </div>

          <div className="space-y-4">
            {pricingFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-white cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${isOpen ? 'rotate-180 text-white' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-3">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            5. FINAL CTA
           ========================================================================= */}
        <section className="py-[80px] border-t border-white/10 text-center px-6">
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Not sure which plan fits your roadmap?
            </h2>
            <p className="text-base text-white/60 mt-3 mb-8">
              We will evaluate your product architecture on a short 15-minute call and give you a straight recommendation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services"
                className="bg-white hover:bg-[#E9E6FF] text-black font-semibold text-sm px-7 py-3.5 rounded-[12px] shadow-lg transition-all"
              >
                Schedule Architecture Call
              </Link>
              <Link
                href="/process"
                className="border border-white/15 hover:border-white/30 text-white font-mono text-xs tracking-wider px-6 py-3.5 rounded-[12px] hover:bg-white/5 transition-all"
              >
                Explore The Process &rarr;
              </Link>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
