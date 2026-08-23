'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileCard from '@/components/ProfileCard';
import CountUp from '@/components/CountUp';
import {
  Check,
  Zap,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  Terminal,
  FileCode2,
  Workflow,
  Cpu,
  Globe,
  Github,
  Twitter,
  Laptop,
  Layers,
  Bot,
  MessageCircle,
  X,
  Code2,
  Lock,
  Server,
  Cloud
} from 'lucide-react';

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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

export default function AboutClient() {
  const [selectedMember, setSelectedMember] = useState<{
    name: string;
    role: string;
    avatar: string;
    bio: string;
    skills: string[];
    focus: string;
  } | null>(null);

  const teamMembers = [
    {
      name: 'AKASH JADHAV',
      role: 'FOUNDER & LEAD ARCHITECT',
      avatar: '/images/akash_jadhav.jpg',
      bio: 'Turns messy business problems into clear product direction and scalable software architecture.',
      skills: ['PRODUCT STRATEGY', 'FULL-STACK ARCHITECTURE', 'UI/UX DIRECTION', 'AI AGENTS'],
      focus: 'Designing systems that eliminate manual operational overhead for business founders.'
    },
    {
      name: 'PRIYA SHARMA',
      role: 'SENIOR FULL-STACK ENGINEER',
      avatar: '/images/team_priya_sharma.jpg',
      bio: 'Engineers high-throughput backends, PostgreSQL schemas, and sub-second React client interfaces.',
      skills: ['NEXT.JS', 'TYPESCRIPT', 'POSTGRESQL', 'RAZORPAY/STRIPE'],
      focus: 'Building resilient database models, payments engines, and customer dashboards.'
    },
    {
      name: 'DEV MEHTA',
      role: 'AI SYSTEMS ENGINEER',
      avatar: '/images/team_dev_mehta.jpg',
      bio: 'Specializes in action-oriented AI agents, RAG vector retrieval, and bilingual voice telephony.',
      skills: ['PYTHON', 'OPENAI REALTIME', 'FASTAPI', 'VECTOR DATABASES'],
      focus: 'Connecting AI models to live business APIs, CRMs, and telephony lines.'
    }
  ];

  const philosophyPrinciples = [
    {
      num: '01',
      title: 'IF A COMPUTER CAN DO IT, WHY ARE YOU?',
      desc: 'Repetitive tasks are signals. Copying data between tabs, manual email follow-ups, and updating spreadsheets aren’t business advantages. They’re automation opportunities.'
    },
    {
      num: '02',
      title: 'SIMPLE BEATS CLEVER.',
      desc: 'We don’t build complicated architecture to show off technical ability. We build systems that are easy to understand, operate, maintain, and scale.'
    },
    {
      num: '03',
      title: 'SHIP BEFORE PERFECT.',
      desc: 'A product sitting in development doesn’t create value. A product in the hands of real users does. Launch core features early and iterate based on real usage.'
    },
    {
      num: '04',
      title: 'SOFTWARE SHOULD WORK WHILE YOU SLEEP.',
      desc: 'Build it once. Let the system work. Sales lead qualification, payment collection, and customer answers should happen automatically 24/7.'
    }
  ];

  const operatingSystemSteps = [
    { num: '01', title: 'UNDERSTAND', desc: 'Find the actual business problem.' },
    { num: '02', title: 'SIMPLIFY', desc: 'Remove unnecessary complexity.' },
    { num: '03', title: 'DESIGN', desc: 'Create the simplest useful experience.' },
    { num: '04', title: 'BUILD', desc: 'Turn it into reliable production software.' },
    { num: '05', title: 'AUTOMATE', desc: 'Remove repetitive human work.' },
    { num: '06', title: 'TEST', desc: 'Audit error handling before users do.' },
    { num: '07', title: 'SHIP', desc: 'Deploy to live Vercel production.' },
    { num: '08', title: 'IMPROVE', desc: 'Evolve based on real feedback.' }
  ];

  const manifestoStatements = [
    'WE BELIEVE SOFTWARE SHOULD REMOVE WORK.',
    'WE BELIEVE SIMPLE PRODUCTS WIN.',
    'WE BELIEVE USERS DON’T CARE ABOUT YOUR TECH STACK.',
    'WE BELIEVE AI SHOULD DO MORE THAN TALK.',
    'WE BELIEVE SHIPPING BEATS PERFECTION.',
    'WE BELIEVE GOOD ENGINEERING IS INVISIBLE.',
    'WE BELIEVE FOUNDERS SHOULD BUILD THE BUSINESS — NOT MANAGE DEVELOPERS.'
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A1A] text-white selection:bg-[#E9E6FF]/30 selection:text-white font-sans overflow-x-hidden w-full">
      
      {/* Background Grid Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 w-full font-sans">

        {/* =========================================================================
            1. HERO SECTION
           ========================================================================= */}
        <section className="relative pt-[160px] pb-[100px] px-8 md:px-14 lg:px-20 border-b border-white/10 overflow-hidden w-full min-h-[85vh] flex items-center">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
            
            {/* Left 7 cols: Brand Core Positioning */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6"
            >
              <motion.span variants={fadeUp} className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E9E6FF]/60 font-bold block">
                ABOUT LAZY CODER • STUDIO PHILOSOPHY
              </motion.span>

              <motion.h1 variants={fadeUp} className="font-archivo font-black text-[44px] sm:text-[64px] md:text-[84px] tracking-[-0.04em] leading-[0.9] text-white uppercase">
                WE ARE LAZY. <br />
                THAT&apos;S OUR <span className="text-[#E9E6FF]">SUPERPOWER.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="font-instrument text-[16px] md:text-[18px] text-white/70 max-w-2xl leading-[1.6]">
                We build software that removes work instead of creating more of it. We&apos;re lazy about unnecessary complexity. Good engineers constantly ask: &ldquo;Can this be simpler? Does this actually need to exist? Can software handle this automatically?&rdquo;
              </motion.p>

              <motion.div variants={fadeUp} className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/work"
                  className="bg-[#E9E6FF] hover:bg-white text-black font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  SEE OUR WORK →
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/15 hover:border-white/30 text-white font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] hover:bg-white/5 transition-all"
                >
                  START A PROJECT →
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-[0.08em] text-white/50">
                <span>PRODUCT STUDIO</span> • <span>SOFTWARE</span> • <span>AI</span> • <span>AUTOMATION</span>
              </motion.div>
            </motion.div>

            {/* Right 5 cols: Messy vs Automated Visual Transformation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-gradient-to-br from-[#E9E6FF]/10 via-transparent to-purple-950/20 border border-white/10 rounded-[32px] p-6 shadow-2xl overflow-hidden flex flex-col justify-between">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px]">
                  <span className="text-white/50 uppercase font-bold">// WORKFLOW COMPRESSION</span>
                  <span className="text-[#E9E6FF] font-bold">LESS WORK • MORE SYSTEM</span>
                </div>

                <div className="space-y-3 font-mono text-[10px] my-3">
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl space-y-1 text-red-300">
                    <span className="font-bold text-red-400 block">// MESSY MANUAL WORKFLOW</span>
                    <div>EMAIL → WHATSAPP → SPREADSHEETS → PHONE CALLS → MANUAL CRM UPDATES</div>
                  </div>

                  <div className="text-center text-[#E9E6FF] font-bold">↓ COMPRESSED BY LAZY CODER ↓</div>

                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl space-y-1 text-emerald-300">
                    <span className="font-bold text-emerald-400 block">// ONE UNIFIED AUTOMATED SYSTEM</span>
                    <div>WEB/APP → AI QUALIFICATION → UPI PAYMENTS → WHATSAPP BOT</div>
                  </div>
                </div>

                <div className="bg-[#E9E6FF] text-black font-mono font-bold text-center py-2.5 rounded-xl uppercase text-[11px]">
                  Build It Once. Let The System Work.
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* =========================================================================
            2. THE MEANING OF LAZY & 4 PRINCIPLES
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center max-w-4xl mx-auto">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF]/60 font-bold block mb-3">
              THE PHILOSOPHY
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              LAZY DOESN&apos;T MEAN DOING LESS. <br />
              <span className="text-[#E9E6FF]">IT MEANS WASTING LESS.</span>
            </h2>
            <p className="font-instrument text-[18px] text-white/70 mt-4 leading-[1.6]">
              The best software doesn&apos;t make people work harder. It removes the repetitive work that never needed a human in the first place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {philosophyPrinciples.map((p) => (
              <div key={p.num} className="p-8 rounded-[28px] bg-white/[0.02] border border-white/10 space-y-3">
                <span className="font-archivo font-black text-[32px] text-[#E9E6FF]/40 block leading-none">{p.num}</span>
                <h3 className="font-archivo font-black text-[22px] uppercase text-white">{p.title}</h3>
                <p className="font-instrument text-[14px] text-white/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            3. WHAT WE ACTUALLY BUILD (CAPABILITIES)
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF]/60 font-bold block mb-3">
              STUDIO CAPABILITIES
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              WE BUILD THE MACHINES <br />
              <span className="text-[#E9E6FF]">BEHIND MODERN BUSINESSES.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
            {[
              { title: 'WEB', items: ['Marketing sites', 'SaaS platforms', 'Customer portals', 'Ecommerce'] },
              { title: 'MOBILE', items: ['iOS apps', 'Android apps', 'Cross-platform', 'Consumer apps'] },
              { title: 'SOFTWARE', items: ['CRM', 'ERP', 'Operations portals', 'Admin systems'] },
              { title: 'AI', items: ['AI chatbots', 'RAG knowledge', 'AI copilots', 'Voice agents'] },
              { title: 'AUTOMATION', items: ['WhatsApp bot', 'CRM workflows', 'Email routing', 'Schedulers'] },
              { title: 'SYSTEMS', items: ['UPI payments', 'Auth', 'APIs', 'Databases & Analytics'] }
            ].map((cat, idx) => (
              <div key={idx} className="p-6 rounded-[20px] bg-white/[0.02] border border-white/10 space-y-3">
                <h3 className="font-mono text-[13px] font-bold uppercase text-[#E9E6FF]">{cat.title}</h3>
                <ul className="space-y-1.5 font-instrument text-[13px] text-white/70">
                  {cat.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            4. THE TEAM SECTION & INTERACTIVE PROFILE MODAL
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF]/60 font-bold block mb-3">
              THE CREW
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              SMALL TEAM. <span className="text-[#E9E6FF]">SERIOUS OUTPUT.</span>
            </h2>
            <p className="font-instrument text-[16px] text-white/70 max-w-xl mx-auto mt-3">
              Fewer layers mean fewer handoffs, faster decisions, and direct ownership from the people building your product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center w-full">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                onClick={() => setSelectedMember(member)}
                className="w-full cursor-pointer group"
              >
                <ProfileCard
                  name={member.name}
                  title={member.role}
                  avatarUrl={member.avatar}
                  showUserInfo={false}
                  enableTilt={true}
                  enableMobileTilt={false}
                  behindGlowEnabled={false}
                />
                <div className="text-center pt-3 font-mono text-[10px] text-[#E9E6FF] uppercase font-bold group-hover:underline">
                  CLICK TO VIEW EXPERTISE &rarr;
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            5. THE LAZY CODER OPERATING SYSTEM (8 STAGES)
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center">
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              THE LAZY CODER OPERATING SYSTEM.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 font-mono text-[11px] w-full">
            {operatingSystemSteps.map((step) => (
              <div key={step.num} className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <span className="text-[#E9E6FF] font-bold">{step.num}</span>
                <h3 className="font-bold text-white uppercase text-[12px]">{step.title}</h3>
                <p className="font-instrument text-[11px] text-white/60 leading-tight">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            6. MANIFESTO SECTION
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full bg-[#050814]">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E9E6FF] font-bold block">// STUDIO MANIFESTO</span>
            
            <div className="space-y-4">
              {manifestoStatements.map((stmt, idx) => (
                <div key={idx} className="font-archivo font-black text-[22px] sm:text-[32px] uppercase text-white leading-tight">
                  {stmt}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. FINAL MANIFESTO & CTA
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 text-center w-full">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="font-archivo font-black text-[44px] sm:text-[64px] md:text-[84px] tracking-[-0.04em] leading-[0.9] uppercase text-white">
              DO LESS OF THE WORK <br />
              <span className="text-[#E9E6FF]">THAT DOESN&apos;T MATTER.</span>
            </div>

            <p className="font-instrument text-[18px] text-white/70 max-w-2xl mx-auto leading-[1.6]">
              Tell us what you&apos;re trying to build, automate, simplify, or improve. You do the business. We build the system.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-[#E9E6FF] hover:bg-white text-black font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] shadow-lg hover:scale-105 transition-all"
              >
                START YOUR PROJECT →
              </Link>
              <Link
                href="/work"
                className="border border-white/15 hover:border-white/30 text-white font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] hover:bg-white/5 transition-all"
              >
                SEE OUR WORK →
              </Link>
            </div>

            <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-white/40 pt-4">
              WE DO THE HARD WORK. YOU GET TO BE LAZY.
            </div>
          </div>
        </section>

      </div>

      {/* =========================================================================
          TEAM MEMBER PROFILE PANEL MODAL
         ========================================================================= */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111113] border border-[#E9E6FF]/30 rounded-[28px] max-w-lg w-full p-8 space-y-6 relative shadow-2xl font-sans"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white p-2 rounded-full bg-white/5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/20 shrink-0">
                  <img src={selectedMember.avatar} alt={selectedMember.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-archivo font-black text-[22px] text-white uppercase">{selectedMember.name}</h3>
                  <div className="font-mono text-[10px] text-[#E9E6FF] font-bold uppercase">{selectedMember.role}</div>
                </div>
              </div>

              <p className="font-instrument text-[14px] text-white/80 leading-relaxed">{selectedMember.bio}</p>

              <div className="space-y-2 font-mono text-[11px]">
                <span className="text-white/40 uppercase font-bold block">// CORE EXPERTISE</span>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.skills.map((s, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1 font-mono text-[11px]">
                <span className="text-[#E9E6FF] font-bold uppercase">// CURRENT FOCUS</span>
                <p className="font-instrument text-[13px] text-white/70">{selectedMember.focus}</p>
              </div>

              <button
                onClick={() => setSelectedMember(null)}
                className="w-full py-3 bg-[#E9E6FF] text-black font-mono font-bold text-[11px] uppercase rounded-xl"
              >
                CLOSE PROFILE
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
