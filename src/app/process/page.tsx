'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Check,
  X,
  ArrowRight,
  Clock,
  Zap,
  ShieldCheck,
  Cpu,
  FileCode2,
  Terminal,
  MessageSquare
} from 'lucide-react';
import { processPhases, processComparison } from '@/lib/process';

// Waves canvas background
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
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export default function ProcessPage() {
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
            1. PROCESS HERO
           ========================================================================= */}
        <section className="relative pt-[160px] pb-[80px] px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <Waves
              lineColor="#C7D2FE"
              backgroundColor="transparent"
              waveSpeedX={0.012}
              waveSpeedY={0.006}
              waveAmpX={24}
              waveAmpY={16}
            />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-[800px]"
          >
            <motion.span
              variants={fadeUp}
              className="text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase block mb-4 font-bold"
            >
              THE LAZY METHOD
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-[40px] sm:text-[56px] md:text-[72px] font-black tracking-[-0.04em] leading-[0.9] text-white"
            >
              A process that respects your time.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-[18px] text-white/70 max-w-[520px] mt-[24px] leading-[1.6]"
            >
              No daily standups. No 50-page docs. Just 3 weeks from idea to launch.
            </motion.p>
          </motion.div>
        </section>

        {/* =========================================================================
            2. VERTICAL TIMELINE
           ========================================================================= */}
        <section className="py-[80px] px-6 sm:px-8 md:px-12 max-w-[900px] mx-auto">
          <div className="relative">
            {/* Left Connecting Gradient Line */}
            <div className="hidden sm:block absolute left-[38px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#F9A8FF] via-[#E9E6FF] to-[#5227FF]/20" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-12"
            >
              {processPhases.map((phase) => (
                <motion.div
                  key={phase.phase}
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 relative"
                >
                  {/* Left Phase Badge / Dot */}
                  <div className="flex sm:flex-col items-center gap-4 sm:gap-2 shrink-0">
                    <div className="w-[76px] h-[76px] rounded-2xl bg-[#12121E] border border-white/15 flex items-center justify-center shadow-xl relative z-10">
                      <span className="font-mono text-2xl font-black text-white">{phase.phase}</span>
                    </div>
                  </div>

                  {/* Right Content Card */}
                  <div className="flex-1 w-full p-[32px] rounded-[20px] bg-white/5 hover:bg-white/[0.08] border border-white/10 transition-all shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <h2 className="text-[24px] sm:text-[28px] font-bold text-white tracking-tight">
                        {phase.title}
                      </h2>
                      <span className="bg-[#E9E6FF] text-black px-[12px] py-[6px] rounded-full text-[12px] font-bold font-mono">
                        {phase.duration}
                      </span>
                    </div>

                    <p className="text-[15px] text-white/70 leading-[1.6]">
                      {phase.desc}
                    </p>

                    {/* What You Get Checklist */}
                    <div className="mt-[20px] pt-4 border-t border-white/10 space-y-2.5">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#F9A8FF] block font-semibold">
                        What you get:
                      </span>
                      {phase.whatYouGet.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-[14px] text-white/80">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* What We Need */}
                    <div className="mt-[16px] pt-3 border-t border-white/5 text-xs text-white/40 leading-relaxed font-mono">
                      <strong className="text-white/60 font-sans">What we need from you:</strong> {phase.whatWeNeed}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            3. COMPARISON SECTION
           ========================================================================= */}
        <section className="py-[80px] border-y border-white/10 px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <span className="text-xs font-mono text-[#F9A8FF] tracking-[0.2em] uppercase font-bold block mb-2">
              WHY IT MATTERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              The anti-agency approach.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {/* Traditional Agency Card */}
            <div className="p-[32px] rounded-[20px] bg-white/[0.02] border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold block mb-4">
                Traditional Agency Model
              </span>
              <ul className="space-y-6">
                {processComparison.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-white/40 uppercase block">{item.row}</span>
                      <span className="text-sm text-white/70">{item.agency}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* LAZY CODER Card */}
            <div className="p-[32px] rounded-[20px] bg-white/5 border border-[#E9E6FF]/30 shadow-2xl shadow-purple-500/5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#F9A8FF] font-bold block mb-4">
                LAZY CODER Sprint Model
              </span>
              <ul className="space-y-6">
                {processComparison.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#E9E6FF]/60 uppercase block font-semibold">{item.row}</span>
                      <span className="text-sm text-white font-medium">{item.lazy}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. TOOLS STRIP
           ========================================================================= */}
        <section className="py-[60px] px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto text-center">
          <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-8">
            Built with modern collaboration tools
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-white/40 font-mono text-base font-bold">
            {['Slack Async', 'Notion Specs', 'GitHub PRs', 'Vercel Previews', 'Linear Tracking'].map((tool) => (
              <span key={tool} className="hover:text-white/80 transition-colors">
                // {tool}
              </span>
            ))}
          </div>
        </section>

        {/* =========================================================================
            5. CTA
           ========================================================================= */}
        <section className="py-[100px] border-t border-white/10 text-center px-6">
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              See if we fit your timeline.
            </h2>
            <p className="text-base text-white/60 mt-3 mb-8">
              Book a 15-minute scoping call. If we cannot ship your product in 3 weeks, we will tell you upfront.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="bg-white hover:bg-[#E9E6FF] text-black font-semibold text-sm px-7 py-3.5 rounded-[12px] shadow-lg transition-all"
              >
                View Pricing Plans &rarr;
              </Link>
              <Link
                href="/services"
                className="border border-white/15 hover:border-white/30 text-white font-mono text-xs tracking-wider px-6 py-3.5 rounded-[12px] hover:bg-white/5 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
