'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, Project } from '@/lib/projects';
import {
  Check,
  X,
  ArrowRight,
  Filter,
  Layers,
  Smartphone,
  Globe,
  Bot,
  Zap,
  ShoppingBag,
  IndianRupee,
  Clock,
  ShieldCheck,
  Building2,
  ExternalLink,
  MessageCircle
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

export default function WorkClient() {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterCategories = ['ALL', 'WEB', 'MOBILE', 'D2C', 'SAAS', 'SOFTWARE', 'AI', 'AUTOMATION', 'FINTECH'];

  const filteredProjects = activeFilter === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category.includes(activeFilter as any));

  const featuredProject = projectsData[0]; // Ayurvedic Wellness D2C Store

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
            
            {/* Left 7 cols: Editorial Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6"
            >
              <motion.span variants={fadeUp} className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E9E6FF]/60 font-bold block">
                SELECTED WORK • SHIPPED SYSTEMS
              </motion.span>

              <motion.h1 variants={fadeUp} className="font-archivo font-black text-[44px] sm:text-[64px] md:text-[84px] tracking-[-0.04em] leading-[0.9] text-white uppercase">
                WE BUILD THINGS <br />
                PEOPLE <span className="text-[#E9E6FF]">ACTUALLY USE.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="font-instrument text-[16px] md:text-[18px] text-white/70 max-w-2xl leading-[1.6]">
                We don&apos;t show portfolios. We show what we shipped. From mobile products and ecommerce experiences to custom business software, automation systems, and AI products — here&apos;s a look at what we&apos;ve designed and built.
              </motion.p>

              <motion.div variants={fadeUp} className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="bg-[#E9E6FF] hover:bg-white text-black font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  START YOUR PROJECT →
                </Link>
                <button
                  onClick={() => {
                    const el = document.getElementById('featured-project');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border border-white/15 hover:border-white/30 text-white font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer"
                >
                  EXPLORE CASE STUDIES ↓
                </button>
              </motion.div>

              <motion.div variants={fadeUp} className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-[0.08em] text-white/50">
                <span>WEB</span> • <span>MOBILE</span> • <span>SOFTWARE</span> • <span>AI</span> • <span>AUTOMATION</span>
                <span className="text-[#E9E6FF] ml-2">VERIFIED BUSINESS CONTEXT</span>
              </motion.div>
            </motion.div>

            {/* Right 5 cols: Product Interface Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-gradient-to-br from-[#E9E6FF]/10 via-transparent to-purple-950/20 border border-white/10 rounded-[32px] p-6 shadow-2xl overflow-hidden flex flex-col justify-between">
                
                {/* Collage Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px]">
                  <span className="text-white/50 uppercase font-bold">// PRODUCT SYSTEM COLLAGE</span>
                  <span className="text-emerald-400 font-bold">● 40+ SHIPPED</span>
                </div>

                {/* Floating Product Fragments */}
                <div className="space-y-3 my-4">
                  <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity }} className="p-3.5 bg-[#111113] border border-white/15 rounded-xl space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/40">
                      <span>D2C STOREFRONT</span>
                      <span className="text-[#E9E6FF]">14 DAYS BUILD</span>
                    </div>
                    <div className="font-archivo font-black text-[16px] text-white">Ayurvedic Wellness D2C</div>
                    <div className="font-mono text-[10px] text-emerald-400">Razorpay UPI + WhatsApp COD Bot</div>
                  </motion.div>

                  <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }} className="p-3.5 bg-white/5 border border-white/10 rounded-xl space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/40">
                      <span>BILINGUAL VOICE AI</span>
                      <span className="text-[#E9E6FF]">24/7 RECEPTION</span>
                    </div>
                    <div className="font-archivo font-black text-[16px] text-white">Bilingual Telephony Agent</div>
                    <div className="font-mono text-[10px] text-white/60">Hindi + English Call Qualification</div>
                  </motion.div>
                </div>

                <div className="bg-[#E9E6FF] text-black font-mono font-bold text-center py-2.5 rounded-xl uppercase text-[11px]">
                  Real Systems Built For Founders
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* =========================================================================
            2. FEATURED CASE STUDY
           ========================================================================= */}
        <section id="featured-project" className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-12 w-full">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF] font-bold block mb-3">
              FEATURED PROJECT • DEEP DIVE
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              {featuredProject.title}
            </h2>
            <p className="font-instrument text-[18px] text-white/70 max-w-3xl mt-3 leading-[1.6]">
              {featuredProject.tagline}
            </p>
          </div>

          {/* Full-width Case Study Block */}
          <div className="bg-[#111113] border border-white/10 rounded-[32px] p-8 sm:p-12 shadow-2xl space-y-10 w-full">
            
            {/* Visual Product Banner with Image - Full Edge-to-Edge Cover within container */}
            <div className="w-full h-[320px] sm:h-[480px] md:h-[560px] bg-[#050814] border border-white/10 rounded-[24px] overflow-hidden relative shadow-2xl group flex items-center justify-center">
              {featuredProject.bannerImage ? (
                <img
                  src={featuredProject.bannerImage}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-purple-950/40 via-[#0A0A1A] to-slate-900" />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 p-6 sm:p-8 flex flex-col justify-between pointer-events-none">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="bg-[#E9E6FF] text-black px-3.5 py-1.5 rounded-full font-bold uppercase shadow-lg">{featuredProject.projectType}</span>
                  <span className="text-white/90 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full uppercase border border-white/10 shadow-lg">TIMELINE: {featuredProject.timeline}</span>
                </div>
                <div>
                  <div className="font-archivo font-black text-[26px] sm:text-[40px] text-white uppercase drop-shadow-xl">{featuredProject.title}</div>
                  <div className="font-mono text-[11px] text-[#E9E6FF] uppercase mt-1 drop-shadow-md">{featuredProject.technologies.join(' • ')}</div>
                </div>
              </div>
            </div>

            {/* Context Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-white/10">
              <div className="space-y-2">
                <h3 className="font-mono text-[11px] text-red-400 uppercase font-bold">// THE PROBLEM</h3>
                <p className="font-instrument text-[14px] text-white/70 leading-relaxed">{featuredProject.problem}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-[11px] text-[#E9E6FF] uppercase font-bold">// THE BUILD</h3>
                <p className="font-instrument text-[14px] text-white/70 leading-relaxed">{featuredProject.solution}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-[11px] text-emerald-400 uppercase font-bold">// THE OUTCOME</h3>
                <p className="font-instrument text-[14px] text-white/70 leading-relaxed">{featuredProject.outcome}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 font-mono text-[11px] text-white/50">
                <span>SLUG: {featuredProject.slug}</span>
              </div>
              <button
                onClick={() => setSelectedProject(featuredProject)}
                className="bg-[#E9E6FF] hover:bg-white text-black font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-3.5 rounded-[12px] shadow-lg cursor-pointer"
              >
                VIEW FULL CASE STUDY →
              </button>
            </div>

          </div>
        </section>

        {/* =========================================================================
            3. PROJECT FILTER SYSTEM
           ========================================================================= */}
        <div className="sticky top-[72px] z-30 bg-[#0A0A1A]/90 backdrop-blur-xl border-y border-white/10 py-4 px-8 md:px-14 lg:px-20 w-full transition-all">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-mono text-[11px] uppercase tracking-[0.08em] px-5 py-2.5 rounded-full transition-all whitespace-nowrap cursor-pointer relative ${
                  activeFilter === cat
                    ? 'bg-[#E9E6FF] text-black font-bold shadow-lg'
                    : 'border border-white/10 text-white/60 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            4. EDITORIAL VARYING PROJECT GRID
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {filteredProjects.map((project, idx) => {
              return (
                <div
                  key={project.slug}
                  onClick={() => setSelectedProject(project)}
                  className={`bg-[#111113] border border-white/10 rounded-[28px] overflow-hidden hover:border-[#E9E6FF]/40 transition-all cursor-pointer shadow-xl flex flex-col justify-between group ${
                    idx === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  {project.bannerImage && (
                    <div className="w-full h-[260px] sm:h-[340px] md:h-[400px] bg-[#050814] border-b border-white/10 relative overflow-hidden flex items-center justify-center">
                      <img
                        src={project.bannerImage}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] uppercase bg-[#E9E6FF] text-black font-bold px-3 py-1 rounded-full">
                        {project.projectType}
                      </span>
                      <span className="font-mono text-[10px] uppercase text-white/50 font-bold">
                        {project.timeline || '21 DAYS'}
                      </span>
                    </div>

                    <h3 className="font-archivo font-black text-[28px] uppercase text-white group-hover:text-[#E9E6FF] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="font-instrument text-[14px] text-white/70 leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    <div className="font-mono text-[10px] uppercase text-white/40 mb-4 pt-4 border-t border-white/10">
                      STACK: {project.technologies.join(' • ')}
                    </div>

                    <div className="flex items-center justify-between font-mono text-[11px] text-[#E9E6FF] font-bold">
                      <span>{project.category.join(' • ')}</span>
                      <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        VIEW CASE STUDY &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            5. WORK CATEGORIES (PRODUCT STACK)
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF]/60 font-bold block mb-3">
              PRODUCT STACK CAPABILITIES
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              WE BUILD ACROSS THE PRODUCT STACK.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
            {[
              { title: 'WEB', items: ['Marketing sites', 'SaaS platforms', 'Ecommerce', 'Customer portals'] },
              { title: 'MOBILE', items: ['Consumer apps', 'Marketplace apps', 'Booking apps', 'Internal tools'] },
              { title: 'SOFTWARE', items: ['CRM', 'ERP', 'Dashboards', 'Operations portals'] },
              { title: 'AI', items: ['Chatbots', 'Voice agents', 'RAG knowledge', 'AI copilots'] },
              { title: 'AUTOMATION', items: ['CRM workflows', 'WhatsApp', 'Email alerts', 'Operations'] },
              { title: 'COMMERCE', items: ['D2C stores', 'Payments', 'Checkout', 'Subscriptions'] }
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
            6. FROM IDEA TO PRODUCT TRANSFORMATION
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              FROM IDEA TO PRODUCT SYSTEM.
            </h2>

            <div className="p-8 rounded-[28px] bg-[#111113] border border-white/10 font-mono text-[11px] text-white space-y-4 text-left">
              <div>
                <span className="text-white/40 uppercase">// 01 THE IDEA</span>
                <p className="font-instrument text-[16px] text-white/80 mt-1">&ldquo;We need a way for customers to book our service automatically.&rdquo;</p>
              </div>
              <div className="text-[#E9E6FF] font-bold">↓</div>
              <div>
                <span className="text-[#E9E6FF] uppercase font-bold">// 02 THE SYSTEM LAZY CODER BUILDS</span>
                <p className="font-instrument text-[16px] text-white font-semibold mt-1">Booking App + Admin Dashboard + Razorpay UPI Payments + WhatsApp Confirmation + Bilingual AI Receptionist.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. PROOF STRIP
           ========================================================================= */}
        <section className="py-12 border-b border-white/10 px-8 md:px-14 lg:px-20 w-full text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 font-mono text-[11px] text-white/50 font-bold uppercase tracking-[0.2em]">
            <span>PRODUCTION READY</span> • <span>RESPONSIVE</span> • <span>SECURE</span> • <span>SCALABLE</span> • <span>AI ENABLED</span> • <span>AUTOMATED</span>
          </div>
        </section>

        {/* =========================================================================
            8. FINAL CTA
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 text-center w-full">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold block">HAVE SOMETHING IN MIND?</span>
            <h2 className="font-archivo font-black text-[44px] sm:text-[64px] md:text-[84px] tracking-[-0.04em] leading-[0.9] uppercase text-white">
              YOUR NEXT PRODUCT <br />
              <span className="text-[#E9E6FF]">COULD BE HERE.</span>
            </h2>
            <p className="font-instrument text-[18px] text-white/70 max-w-2xl mx-auto leading-[1.6]">
              Tell us what you&apos;re building, what isn&apos;t working, or what you wish your business could automate. No technical specification required.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-[#E9E6FF] hover:bg-white text-black font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] shadow-lg hover:scale-105 transition-all"
              >
                START YOUR PROJECT →
              </Link>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                className="border border-white/15 hover:border-white/30 text-white font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                TALK TO US ON WHATSAPP →
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* =========================================================================
          FULL-SCREEN CASE STUDY MODAL EXPERIENCE
         ========================================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111113] border border-[#E9E6FF]/30 rounded-[32px] w-full max-w-5xl max-h-[92vh] overflow-y-auto p-6 sm:p-12 space-y-10 relative shadow-2xl text-white font-sans"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Banner Image in Modal - Full Cover Top Alignment */}
              {selectedProject.bannerImage && (
                <div className="w-full h-[280px] sm:h-[400px] bg-[#050814] rounded-[20px] overflow-hidden border border-white/10 flex items-center justify-center">
                  <img src={selectedProject.bannerImage} alt={selectedProject.title} className="w-full h-full object-cover object-top" />
                </div>
              )}

              {/* Header */}
              <div className="space-y-4 pr-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] uppercase bg-[#E9E6FF] text-black font-bold px-3 py-1 rounded-full">
                    {selectedProject.projectType}
                  </span>
                  <span className="font-mono text-[11px] text-white/50 uppercase">
                    STATUS: {selectedProject.status}
                  </span>
                  <span className="font-mono text-[11px] text-[#E9E6FF] uppercase">
                    TIMELINE: {selectedProject.timeline || '21 DAYS'}
                  </span>
                </div>

                <h2 className="font-archivo font-black text-[32px] sm:text-[44px] uppercase text-white leading-none">
                  {selectedProject.title}
                </h2>
                <p className="font-instrument text-[18px] text-white/70 leading-relaxed">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Overview 2-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-[24px] bg-white/[0.02] border border-white/10 font-instrument text-[14px]">
                <div>
                  <h3 className="font-mono text-[11px] text-[#E9E6FF] uppercase font-bold mb-2">// THE BUSINESS CONTEXT</h3>
                  <p className="text-white/70 leading-relaxed">{selectedProject.summary}</p>
                </div>
                <div>
                  <h3 className="font-mono text-[11px] text-red-400 uppercase font-bold">// THE CHALLENGE</h3>
                  <p className="text-white/70 leading-relaxed">{selectedProject.problem}</p>
                </div>
              </div>

              {/* Solution & System Architecture */}
              <div className="space-y-4">
                <h3 className="font-archivo font-black text-[22px] uppercase text-white">THE SYSTEM WE BUILT</h3>
                <p className="font-instrument text-[15px] text-white/80 leading-relaxed">{selectedProject.solution}</p>
                
                {/* AI Interactive Workflow (if available) */}
                {selectedProject.aiWorkflow && (
                  <div className="p-6 rounded-[20px] bg-white/5 border border-white/10 font-mono text-[11px] space-y-3">
                    <div className="text-emerald-400 font-bold uppercase">// AI ACTION FLOW</div>
                    <div className="text-white font-instrument text-[14px]">{selectedProject.aiWorkflow.userPrompt}</div>
                    <div className="flex flex-wrap items-center gap-2 text-white/80">
                      {selectedProject.aiWorkflow.steps.map((step, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span className="px-2.5 py-1 bg-white/10 rounded-lg">{step}</span>
                          {sIdx < selectedProject.aiWorkflow!.steps.length - 1 && <span>→</span>}
                        </React.Fragment>
                      ))}
                    </div>
                    <p className="font-instrument text-[13px] text-white/60 pt-2">{selectedProject.aiWorkflow.explanation}</p>
                  </div>
                )}
              </div>

              {/* Metrics (Verified) */}
              {selectedProject.metrics && (
                <div className="grid grid-cols-3 gap-4 p-6 rounded-[20px] bg-[#E9E6FF]/10 border border-[#E9E6FF]/30">
                  {selectedProject.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="font-archivo font-black text-[24px] text-[#E9E6FF]">{m.val}</div>
                      <div className="font-mono text-[10px] uppercase text-white/50">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Under the Hood Stack */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                <div className="font-mono text-[11px] text-white/40 uppercase font-bold">// UNDER THE HOOD</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="font-mono text-[11px] text-white/40">{selectedProject.services.join(' • ')}</span>
                <Link
                  href="/contact"
                  className="bg-[#E9E6FF] hover:bg-white text-black font-mono font-bold text-[11px] uppercase px-6 py-3 rounded-xl transition-all"
                >
                  Build a similar system →
                </Link>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
