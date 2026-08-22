'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, ShieldCheck, Cpu, Code2, Sparkles, Terminal, ArrowRight, Github, Twitter } from 'lucide-react';

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

export default function AboutPage() {
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
            1. ABOUT HERO (2 COLS)
           ========================================================================= */}
        <section className="relative pt-[160px] pb-[80px] px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <Waves
              lineColor="#F9A8FF"
              backgroundColor="transparent"
              waveSpeedX={0.01}
              waveSpeedY={0.005}
              waveAmpX={24}
              waveAmpY={16}
            />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-7">
              <motion.span
                variants={fadeUp}
                className="text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase block mb-4 font-bold"
              >
                OUR PHILOSOPHY
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="text-[36px] sm:text-[52px] md:text-[64px] font-black tracking-[-0.04em] leading-[0.92] text-white"
              >
                We are lazy, so you don&apos;t have to be.
              </motion.h1>
            </div>

            <div className="lg:col-span-5">
              <motion.p
                variants={fadeUp}
                className="text-base sm:text-[18px] text-white/70 leading-[1.7]"
              >
                We started LAZY CODER because traditional agencies waste immense amounts of time and money on bureaucracy. We automate 80% of agency busywork and focus entirely on high-impact shipping.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* =========================================================================
            2. MANIFESTO (3 PRINCIPLES)
           ========================================================================= */}
        <section className="py-[80px] border-y border-white/10 bg-white/[0.02] px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
          <div className="text-center max-w-[500px] mx-auto mb-14">
            <span className="text-xs font-mono text-[#F9A8FF] uppercase tracking-widest block font-bold mb-2">
              CORE TENETS
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              The Lazy Code of Honor
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Write less code that does more.',
                desc: 'Every line of code is future liability. We use elegant primitives and high-leverage frameworks to keep codebases nimble.'
              },
              {
                num: '02',
                title: 'Automate everything boring.',
                desc: 'If a computer can do it, a human shouldn’t. We configure AI workflows and continuous delivery pipelines from Day 1.'
              },
              {
                num: '03',
                title: 'Ship in weeks, not months.',
                desc: 'Real customer feedback beats internal slide decks. We build production-ready products and put them in user hands fast.'
              }
            ].map((rule, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#E9E6FF] block mb-4 font-bold">
                    PRINCIPLE // {rule.num}
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-snug mb-3">
                    {rule.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed max-w-[320px]">
                    {rule.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            3. TEAM SECTION
           ========================================================================= */}
        <section className="py-[80px] px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <span className="text-xs font-mono text-[#F9A8FF] uppercase tracking-widest block font-bold mb-2">
              THE TALENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Built by engineers, not managers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Akash',
                role: 'Founder & Lead Architect',
                bio: 'Full-stack systems architect specialized in Next.js 14, WebGL performance shaders, and autonomous AI pipelines.',
                gradient: 'from-[#F9A8FF] via-[#B497CF] to-[#5227FF]'
              },
              {
                name: 'Elena Rostova',
                role: 'AI & Pipeline Engineer',
                bio: 'Designs high-throughput multi-agent LLM orchestrations, vector indexing, and asynchronous Python worker pipelines.',
                gradient: 'from-[#38bdf8] via-[#5227FF] to-[#F9A8FF]'
              },
              {
                name: 'Marcus Vance',
                role: 'Frontend & Design Systems',
                bio: 'Focuses on 60fps micro-interactions, responsive accessibility, and resilient component libraries.',
                gradient: 'from-[#10b981] via-[#38bdf8] to-[#5227FF]'
              }
            ].map((member, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-tr ${member.gradient} p-0.5 mb-5 shadow-lg shadow-purple-500/10`}>
                  <div className="w-full h-full rounded-full bg-[#0A0A1A] flex items-center justify-center font-mono font-bold text-white text-lg">
                    {member.name.slice(0, 2).toUpperCase()}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <span className="text-xs font-mono text-white/50 uppercase tracking-wider mt-1">{member.role}</span>
                <p className="text-sm text-white/60 mt-4 leading-relaxed">{member.bio}</p>
                <div className="flex items-center gap-3 mt-6 text-white/40">
                  <a href="https://github.com/Akash-connect" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            4. VALUES BENTO
           ========================================================================= */}
        <section className="py-[60px] px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'High Velocity',
                desc: '21-day average shipping time with zero compromise on production quality.'
              },
              {
                icon: ShieldCheck,
                title: 'Code Ownership',
                desc: 'You receive 100% of the repository, assets, and infrastructure rights.'
              },
              {
                icon: Cpu,
                title: 'Pragmatic Stack',
                desc: 'We build with proven, scalable tech: Next.js, TypeScript, PostgreSQL.'
              },
              {
                icon: Terminal,
                title: 'Full Transparency',
                desc: 'Daily async Slack updates, staging preview URLs, and direct engineer access.'
              }
            ].map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#E9E6FF] mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{val.title}</h4>
                    <p className="text-xs text-white/60 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            5. FINAL CTA
           ========================================================================= */}
        <section className="py-[100px] border-t border-white/10 text-center px-6">
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Want to build with us?
            </h2>
            <p className="text-base text-white/60 mt-3 mb-8">
              We only take on 2 client builds per month to maintain extreme focus and speed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services"
                className="bg-white hover:bg-[#E9E6FF] text-black font-semibold text-sm px-7 py-3.5 rounded-[12px] shadow-lg transition-all"
              >
                Start a Project &rarr;
              </Link>
              <Link
                href="/pricing"
                className="border border-white/15 hover:border-white/30 text-white font-mono text-xs tracking-wider px-6 py-3.5 rounded-[12px] hover:bg-white/5 transition-all"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
