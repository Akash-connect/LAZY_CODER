'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
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
  MessageSquare,
  Workflow,
  Sparkles,
  ChevronDown,
  Layers,
  Search,
  Lock,
  Server,
  Cloud,
  CheckCircle2,
  AlertCircle
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

export default function ProcessPage() {
  const [activeTimelineDay, setActiveTimelineDay] = useState<number>(0);

  const timelineDays = [
    { day: 'DAY 01', label: 'DISCOVERY', desc: 'Business requirements, user journeys & technical architecture planning.' },
    { day: 'DAY 03', label: 'PRODUCT PLAN', desc: 'Product blueprint, wireframes & database schema approval.' },
    { day: 'DAY 05', label: 'UI DESIGN', desc: 'High-fidelity production interfaces & design system.' },
    { day: 'DAY 10', label: 'CORE PRODUCT', desc: 'Frontend, backend, authentication & dashboard logic built.' },
    { day: 'DAY 14', label: 'INTEGRATIONS', desc: 'Razorpay UPI payments, WhatsApp API & CRM webhooks connected.' },
    { day: 'DAY 17', label: 'FEATURE COMPLETE', desc: 'AI agents, voice tools & background automation pipelines active.' },
    { day: 'DAY 19', label: 'QA & AUDIT', desc: 'Functional, responsive, 95+ Lighthouse speed & security testing.' },
    { day: 'DAY 21', label: 'LAUNCH', desc: 'Production Vercel deployment, domain setup & repository handover.' },
  ];

  const currentTimelineItem = timelineDays[activeTimelineDay] || timelineDays[0];

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
            
            {/* Left 7 cols: Positioning Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6"
            >
              <motion.span variants={fadeUp} className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E9E6FF]/60 font-bold block">
                HOW WE WORK • PRODUCTION DELIVERY
              </motion.span>

              <motion.h1 variants={fadeUp} className="font-archivo font-black text-[44px] sm:text-[64px] md:text-[84px] tracking-[-0.04em] leading-[0.9] text-white uppercase">
                A BETTER WAY TO <br />
                <span className="text-[#E9E6FF]">BUILD SOFTWARE.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="font-instrument text-[16px] md:text-[18px] text-white/70 max-w-2xl leading-[1.6]">
                From idea to production without the agency chaos. We turn business problems into working digital products through a focused, transparent, milestone-driven process. You don&apos;t need to manage developers — you need a team that can own the build.
              </motion.p>

              <motion.div variants={fadeUp} className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="bg-[#E9E6FF] hover:bg-white text-black font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  START A PROJECT →
                </Link>
                <Link
                  href="/services"
                  className="border border-white/15 hover:border-white/30 text-white font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] hover:bg-white/5 transition-all"
                >
                  SEE WHAT WE BUILD →
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-[0.08em] text-white/50">
                <span>DISCOVER</span> → <span>DEFINE</span> → <span>DESIGN</span> → <span>BUILD</span> → <span>TEST</span> → <span>LAUNCH</span>
              </motion.div>
            </motion.div>

            {/* Right 5 cols: Product Operating System Timeline Path */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-gradient-to-br from-[#E9E6FF]/10 via-transparent to-purple-950/20 border border-white/10 rounded-[32px] p-6 shadow-2xl overflow-hidden flex flex-col justify-between">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px]">
                  <span className="text-white/50 uppercase font-bold">// PRODUCT DELIVERY SYSTEM</span>
                  <span className="text-[#E9E6FF] font-bold">21-DAY SPRINT</span>
                </div>

                <div className="space-y-2 font-mono text-[10px] my-3">
                  {[
                    { step: '01', title: 'BUSINESS PROBLEM', status: 'CONFIRMED ✓' },
                    { step: '02', title: 'PRODUCT PLAN', status: 'APPROVED ✓' },
                    { step: '03', title: 'DESIGN SYSTEM', status: 'COMPLETED ✓' },
                    { step: '04', title: 'ENGINEERING & INTEGRATIONS', status: 'ACTIVE ●' },
                    { step: '05', title: 'QA & LAUNCH', status: 'SCHEDULED ○' }
                  ].map((s) => (
                    <div key={s.step} className="p-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                      <span className="text-white/50">{s.step} {s.title}</span>
                      <span className="text-[#E9E6FF] font-bold">{s.status}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#E9E6FF] text-black font-mono font-bold text-center py-2.5 rounded-xl uppercase text-[11px]">
                  FOCUSED SPRINTS • CLEAR MILESTONES
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* =========================================================================
            2. THE LAZY CODER WAY (COMPARISON)
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center max-w-4xl mx-auto">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF]/60 font-bold block mb-3">
              THE LAZY CODER WAY
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              WE DON&apos;T START WITH CODE. <br />
              <span className="text-[#E9E6FF]">WE START WITH THE PROBLEM.</span>
            </h2>
            <p className="font-instrument text-[16px] md:text-[18px] text-white/70 mt-4 leading-[1.6]">
              The fastest way to build the wrong product is to start developing before deciding what should actually exist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Traditional Agency */}
            <div className="p-8 rounded-[24px] bg-red-500/5 border border-red-500/20 space-y-4 font-mono text-[11px]">
              <span className="text-red-400 font-bold uppercase block text-[13px]">// TRADITIONAL AGENCY CHAOS</span>
              <div className="text-white/70 space-y-2 pt-2">
                <div>REQUEST → QUOTE → MEETINGS → HANDOFF → DEVELOPMENT → CHANGE REQUESTS → DELAYS</div>
              </div>
              <p className="font-instrument text-[14px] text-white/60 pt-2 border-t border-white/5">
                Endless approval chains, hourly billing drag, black-box builds, and delayed demos.
              </p>
            </div>

            {/* LAZY CODER Model */}
            <div className="p-8 rounded-[24px] bg-emerald-500/5 border border-emerald-500/20 space-y-4 font-mono text-[11px]">
              <span className="text-emerald-400 font-bold uppercase block text-[13px]">// LAZY CODER SPRINT SYSTEM</span>
              <div className="text-white font-bold space-y-2 pt-2">
                <div>BUSINESS PROBLEM → PRODUCT PLAN → DESIGN → BUILD → TEST → LAUNCH → ITERATE</div>
              </div>
              <p className="font-instrument text-[14px] text-white/80 pt-2 border-t border-white/5">
                Outcome-focused sprint, visible progress, working builds every 24h, clear priorities.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. DAY 0 — PROJECT KICKOFF
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-[11px] uppercase bg-white/10 text-white font-bold px-3 py-1 rounded-full">BEFORE DAY 1 • KICKOFF</span>
              <h2 className="font-archivo font-black text-[36px] sm:text-[48px] uppercase text-white leading-none">GETTING READY</h2>
              <p className="font-instrument text-[16px] text-white/70 leading-relaxed">
                Before development begins, project scope and commercial terms are confirmed, access collected, and a clear brief issued.
              </p>
              <div className="font-mono text-[11px] text-[#E9E6FF] uppercase font-bold pt-2">
                EVERYONE KNOWS WHAT WE ARE BUILDING.
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#111113] border border-white/10 rounded-[28px] p-8 space-y-4 shadow-2xl">
              <span className="font-mono text-[11px] text-[#E9E6FF] uppercase font-bold">// FOUNDER RECEIVES: PRODUCT BRIEF</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[11px]">
                {['Business Goals & Users', 'Core Required Features', 'Third-Party Integrations', 'Technical Constraints', 'Success Criteria', 'Strict Timeline'].map((item, idx) => (
                  <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2 text-white/80">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. PHASE 01 — DISCOVER (DAYS 1-3) & DELIVERABLES
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF] font-bold block mb-3">
              PHASE 01 • DAYS 1–3
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              UNDERSTAND BEFORE WE BUILD.
            </h2>
            <p className="font-instrument text-[16px] md:text-[18px] text-white/70 max-w-3xl mt-4 leading-[1.6]">
              We turn your business idea into a concrete product plan across 3 focused discovery days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full">
            <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/10 space-y-3">
              <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold">DAY 1 — BUSINESS</span>
              <h3 className="font-archivo font-black text-[22px] uppercase text-white">BUSINESS REQUIREMENTS</h3>
              <p className="font-instrument text-[14px] text-white/60">Identify business model, target customers, operational bottlenecks, tools & success metrics.</p>
            </div>

            <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/10 space-y-3">
              <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold">DAY 2 — PRODUCT</span>
              <h3 className="font-archivo font-black text-[22px] uppercase text-white">PRODUCT BLUEPRINT</h3>
              <p className="font-instrument text-[14px] text-white/60">Map user journeys, screen flows, features, roles, workflows & edge cases.</p>
            </div>

            <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/10 space-y-3">
              <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold">DAY 3 — TECHNICAL</span>
              <h3 className="font-archivo font-black text-[22px] uppercase text-white">TECHNICAL PLAN</h3>
              <p className="font-instrument text-[14px] text-white/60">Determine architecture, database, APIs, authentication, AI & automation requirements.</p>
            </div>
          </div>

          {/* Product Blueprint Artifact */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-[#111113] border border-[#E9E6FF]/30 shadow-2xl w-full">
            <h3 className="font-archivo font-black text-[22px] uppercase text-white mb-4">DELIVERABLE: PRODUCT BLUEPRINT</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-[11px] mb-6">
              {['USERS & ROLES', 'CORE FEATURES', 'WORKFLOW MAP', 'SCREEN LIST', 'INTEGRATIONS', 'DATA SCHEMA', 'AI & AUTOMATION', 'SUCCESS CRITERIA'].map((bp, idx) => (
                <div key={idx} className="p-3 bg-white/5 border border-white/10 rounded-xl text-center text-white/80">
                  {bp}
                </div>
              ))}
            </div>
            <div className="font-mono text-[11px] text-[#E9E6FF] text-center font-bold">
              Before development starts, you know what we&apos;re building and why.
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. PHASE 02 — DESIGN (DAYS 3-5)
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF] font-bold block mb-3">
              PHASE 02 • DAYS 3–5
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              MAKE THE PRODUCT EASY TO USE.
            </h2>
            <p className="font-instrument text-[16px] md:text-[18px] text-white/70 max-w-3xl mt-4 leading-[1.6]">
              We turn the product blueprint into a clear, intuitive interface before engineering starts moving at full speed. We design the states people forget to design.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 font-mono text-[11px] w-full">
            {[
              { title: 'USER FLOWS', desc: 'Movement through product' },
              { title: 'WIREFRAMES', desc: 'Structure before polish' },
              { title: 'DESIGN SYSTEM', desc: 'Spacing & components' },
              { title: 'HIGH-FIDELITY UI', desc: 'Production visual design' },
              { title: 'RESPONSIVE', desc: 'Desktop & mobile behavior' },
              { title: 'INTERACTION STATES', desc: 'Hover, loading & empty' }
            ].map((d, idx) => (
              <div key={idx} className="p-5 rounded-[20px] bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="font-bold text-[#E9E6FF]">{d.title}</h3>
                <p className="font-instrument text-[12px] text-white/60">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            6. PHASE 03 — BUILD PIPELINE & TRANSPARENCY (DAYS 4-17)
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF] font-bold block mb-3">
              PHASE 03 • DAYS 4–17
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              NOW WE BUILD.
            </h2>
            <p className="font-instrument text-[16px] md:text-[18px] text-white/70 max-w-3xl mt-4 leading-[1.6]">
              Design and engineering move together so the product becomes usable early instead of appearing for the first time at the end.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            {/* Build Pipeline Steps (7 cols) */}
            <div className="lg:col-span-7 space-y-4 font-mono text-[11px]">
              {[
                { title: 'FOUNDATION', desc: 'Project setup, architecture, auth & database.' },
                { title: 'CORE PRODUCT', desc: 'Main workflows, dashboards & business logic.' },
                { title: 'INTEGRATIONS', desc: 'Razorpay UPI payments, WhatsApp & CRM APIs.' },
                { title: 'AI & AUTOMATION', desc: 'AI voice agents, RAG knowledge & background jobs.' },
                { title: 'POLISH', desc: 'Responsive behavior, Lighthouse 95+ speed & edge cases.' }
              ].map((pipe, idx) => (
                <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white uppercase">{pipe.title}</span>
                    <p className="font-instrument text-[13px] text-white/60">{pipe.desc}</p>
                  </div>
                  <span className="text-[#E9E6FF] font-bold">0{idx+1}</span>
                </div>
              ))}
            </div>

            {/* Simulated Project Dashboard (5 cols) */}
            <div className="lg:col-span-5 bg-[#111113] border border-white/10 rounded-[28px] p-6 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between font-mono text-[10px] border-b border-white/10 pb-3">
                <span className="text-white/50 uppercase font-bold">// SIMULATED BUILD DASHBOARD</span>
                <span className="text-emerald-400 font-bold">72% COMPLETED</span>
              </div>
              <div className="space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between text-white/80"><span>AUTHENTICATION</span> <span className="text-emerald-400 font-bold">PASS ✓</span></div>
                <div className="flex items-center justify-between text-white/80"><span>DASHBOARD LOGIC</span> <span className="text-emerald-400 font-bold">PASS ✓</span></div>
                <div className="flex items-center justify-between text-white/80"><span>RAZORPAY UPI</span> <span className="text-emerald-400 font-bold">PASS ✓</span></div>
                <div className="flex items-center justify-between text-white/80"><span>WHATSAPP BOT</span> <span className="text-emerald-400 font-bold">PASS ✓</span></div>
                <div className="flex items-center justify-between text-[#E9E6FF] font-bold"><span>AI VOICE ASSISTANT</span> <span className="animate-pulse">BUILDING ●</span></div>
                <div className="flex items-center justify-between text-white/40"><span>FINAL QA AUDIT</span> <span>PENDING ○</span></div>
              </div>
              <div className="font-mono text-[10px] text-white/40 text-center pt-2">
                NO BLACK BOX DEVELOPMENT.
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. COMMUNICATION & FOUNDER INVOLVEMENT & SCOPE CONTROL
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full">
            <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/10 space-y-3">
              <h3 className="font-archivo font-black text-[20px] uppercase text-white">COMMUNICATION</h3>
              <p className="font-instrument text-[14px] text-white/70">Dedicated Slack channel, defined milestone updates, async Loom video demos & blocker alerts.</p>
            </div>

            <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/10 space-y-3">
              <h3 className="font-archivo font-black text-[20px] uppercase text-white">FOUNDER ROLE</h3>
              <p className="font-instrument text-[14px] text-white/70">You provide business context & priorities. We handle architecture, design, code & deployment.</p>
            </div>

            <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/10 space-y-3">
              <h3 className="font-archivo font-black text-[20px] uppercase text-white">SCOPE CONTROL</h3>
              <p className="font-instrument text-[14px] text-white/70">Core scope required for launch vs post-launch requests. Transparent impact reviews.</p>
            </div>
          </div>

          <div className="p-6 rounded-[20px] bg-[#E9E6FF]/10 border border-[#E9E6FF]/30 text-center font-mono text-[11px] text-[#E9E6FF] font-bold">
            YOU SHOULD BE INVOLVED IN IMPORTANT DECISIONS — NOT EVERY SMALL TASK.
          </div>
        </section>

        {/* =========================================================================
            8. PHASE 04 — QUALITY ASSURANCE & QA VISUAL MATRIX
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF] font-bold block mb-3">
              PHASE 04 • QUALITY ASSURANCE
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              BUILDING ISN&apos;T DONE UNTIL IT WORKS.
            </h2>
          </div>

          {/* QA Visual Checklist */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-[#111113] border border-white/10 shadow-2xl font-mono text-[11px] space-y-3 w-full">
            <div className="text-white/40 uppercase font-bold mb-4">// PRODUCTION QA AUDIT CHECKLIST</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { test: 'AUTHENTICATION & PERMISSIONS', status: 'PASS ✓' },
                { test: 'RAZORPAY & UPI PAYMENTS', status: 'PASS ✓' },
                { test: 'MOBILE RESPONSIVE STATES', status: 'PASS ✓' },
                { test: 'WHATSAPP & API WEBHOOKS', status: 'PASS ✓' },
                { test: 'ERROR HANDLING & LOGS', status: 'PASS ✓' },
                { test: 'PERFORMANCE & LIGHTHOUSE 95+', status: 'READY ✓' }
              ].map((t, idx) => (
                <div key={idx} className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                  <span className="text-white/80">{t.test}</span>
                  <span className="text-emerald-400 font-bold">{t.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. PHASE 05 — LAUNCH & HANDOVER (DAYS 18-21)
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF] font-bold block mb-3">
              PHASE 05 • DAYS 18–21
            </span>
            <h2 className="font-archivo font-black text-[44px] sm:text-[64px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              SHIP IT.
            </h2>
            <p className="font-instrument text-[18px] text-white/70 max-w-2xl mx-auto mt-4 leading-[1.6]">
              The final build goes live, production systems are verified, and the founder receives everything required to operate the product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 w-full">
            {[
              { title: 'PRODUCT & CODE', desc: 'Production-ready application, clean organized codebase & repository transfer.' },
              { title: 'ACCESS & DOMAIN', desc: 'Production Vercel deployment, custom domain setup & cloud credentials.' },
              { title: 'DOCS & ANALYTICS', desc: 'System architecture specs, operational walkthrough video & analytics.' },
              { title: 'SUPPORT & HANDOVER', desc: '30 days free post-launch bug fixes & operational walkthrough training.' }
            ].map((h, idx) => (
              <div key={idx} className="p-6 rounded-[20px] bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="font-mono text-[13px] font-bold uppercase text-[#E9E6FF]">{h.title}</h3>
                <p className="font-instrument text-[13px] text-white/70 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            10. INTERACTIVE TIMELINE SPRINT
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center">
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              21 DAYS FROM PLAN TO PRODUCT.
            </h2>
            <p className="font-instrument text-[16px] text-white/60 mt-3">
              Click any milestone day to view exact sprint activities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-8 font-mono text-[11px] w-full">
            {timelineDays.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTimelineDay(idx)}
                className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                  activeTimelineDay === idx
                    ? 'bg-[#E9E6FF] text-black font-bold border-[#E9E6FF] shadow-lg'
                    : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
                }`}
              >
                <div>{t.day}</div>
                <div className="text-[9px] uppercase mt-1 font-bold">{t.label}</div>
              </button>
            ))}
          </div>

          <div className="p-8 rounded-[24px] bg-[#111113] border border-[#E9E6FF]/30 text-center font-mono text-[12px] text-white space-y-2">
            <div className="text-[#E9E6FF] font-bold uppercase">// MILESTONE DETAILS: {currentTimelineItem.label}</div>
            <p className="font-instrument text-[16px] text-white/80 max-w-xl mx-auto">{currentTimelineItem.desc}</p>
          </div>
        </section>

        {/* =========================================================================
            11. TRADITIONAL VS LAZY CODER COMPARISON TABLE
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-12 w-full text-center">
            <h2 className="font-archivo font-black text-[36px] sm:text-[48px] uppercase text-white">THE OLD WAY VS THE LAZY WAY</h2>
          </div>

          <div className="w-full overflow-x-auto border border-white/10 rounded-[16px] bg-[#111113]">
            <table className="w-full border-collapse text-left font-mono text-[12px]">
              <thead>
                <tr className="border-b border-white/10 uppercase text-white/40 bg-white/[0.02]">
                  <th className="py-4 px-6 text-red-400">TRADITIONAL AGENCY</th>
                  <th className="py-4 px-6 text-[#E9E6FF] font-bold">LAZY CODER SPRINT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-instrument text-[14px]">
                {[
                  { old: 'Hourly billing drag', lazy: 'Outcome-focused sprint' },
                  { old: 'Long 3-month discovery', lazy: 'Focused product planning' },
                  { old: 'Multiple handoffs & accounts', lazy: 'One dedicated product team' },
                  { old: 'Black-box development', lazy: 'Visible 24h progress & Loom demos' },
                  { old: 'Scope confusion', lazy: 'Defined priorities & acceptance criteria' },
                  { old: 'Late demos at launch', lazy: 'Working builds throughout' },
                  { old: 'Launch as the finish line', lazy: 'Launch as the beginning of iteration' }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="py-4 px-6 text-white/60">• {row.old}</td>
                    <td className="py-4 px-6 text-white font-semibold">• {row.lazy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================================
            12. PROCESS PRINCIPLES & FOUNDER PROMISE
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              YOU SHOULDN&apos;T HAVE TO BECOME A <br />
              <span className="text-[#E9E6FF]">PROJECT MANAGER TO BUILD SOFTWARE.</span>
            </h2>
            <p className="font-instrument text-[18px] text-white/70 max-w-2xl mx-auto leading-[1.6]">
              Your job is to know where the business needs to go. Our job is to figure out how to build the system that gets you there.
            </p>

            <div className="pt-6 font-mono text-[12px] uppercase tracking-[0.1em] text-[#E9E6FF] font-bold">
              CLEAR PLAN. • VISIBLE PROGRESS. • REAL PRODUCT.
            </div>
          </div>
        </section>

        {/* =========================================================================
            13. FINAL CTA
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 text-center w-full">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold block">READY TO BUILD?</span>
            <h2 className="font-archivo font-black text-[44px] sm:text-[64px] md:text-[84px] tracking-[-0.04em] leading-[0.9] uppercase text-white">
              BRING US THE PROBLEM. <br />
              <span className="text-[#E9E6FF]">WE&apos;LL BUILD THE PRODUCT.</span>
            </h2>
            <p className="font-instrument text-[18px] text-white/70 max-w-2xl mx-auto leading-[1.6]">
              You don&apos;t need a technical specification. Start with the business problem, idea, workflow, or product you want to create.
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
                VIEW OUR WORK →
              </Link>
            </div>

            <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-white/40 pt-4">
              WEB • MOBILE • SOFTWARE • AI • AUTOMATION
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
