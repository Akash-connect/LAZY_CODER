'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  LayoutGrid,
  List,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Clock,
  Layers,
  Zap,
  ExternalLink
} from 'lucide-react';
import { workProjects, CaseStudyProject } from '@/lib/work';
import AnimatedCounter from '@/components/AnimatedCounter';
import CaseStudyModal from '@/components/CaseStudyModal';

// Dynamic import for Waves WebGL canvas background
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

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<CaseStudyProject | null>(null);

  const filters = ['All', 'SaaS', 'AI Automation', 'Fintech', 'Marketplace', 'Mobile'];

  const filteredProjects = activeFilter === 'All'
    ? workProjects
    : workProjects.filter((p) => p.category === activeFilter);

  const featuredProject = workProjects.find((p) => p.featured) || workProjects[0];

  return (
    <div className="relative min-h-screen bg-[#0A0A1A] text-white font-sans selection:bg-[#F9A8FF]/30 selection:text-white overflow-x-hidden">
      
      {/* Global Background Grid Overlay */}
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
            1. WORK HERO (with Waves shader background)
           ========================================================================= */}
        <section className="relative pt-[160px] pb-[60px] px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto overflow-hidden">
          {/* Waves background canvas (low opacity) */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <Waves
              lineColor="#F9A8FF"
              backgroundColor="transparent"
              waveSpeedX={0.01}
              waveSpeedY={0.005}
              waveAmpX={24}
              waveAmpY={14}
            />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10"
          >
            {/* Left Column */}
            <div className="max-w-[700px]">
              <motion.span
                variants={fadeUp}
                className="text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase block mb-4 font-bold"
              >
                SELECTED WORK 2023-2025
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="text-[40px] sm:text-[56px] md:text-[72px] font-black tracking-[-0.04em] leading-[0.9] text-white"
              >
                We ship. They scale.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-base sm:text-[18px] text-white/70 max-w-[480px] mt-[24px] leading-[1.6]"
              >
                Real products, real metrics. No fake Dribbble shots.
              </motion.p>
            </div>

            {/* Right Column Stats */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap sm:flex-nowrap items-center gap-6 lg:gap-8 border-l-0 lg:border-l border-white/10 lg:pl-8 py-2 shrink-0 text-white/60 text-xs font-mono"
            >
              <div>
                <span className="text-xl sm:text-2xl font-black text-white block font-mono">12+</span>
                <span>Products Shipped</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#F9A8FF] block font-mono">$2M+</span>
                <span>Client Revenue</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#C7D2FE] block font-mono">21 Days</span>
                <span>Average Ship</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* =========================================================================
            2. FILTER BAR + VIEW MODE TOGGLE
           ========================================================================= */}
        <section className="sticky top-[72px] z-20 backdrop-blur-xl bg-[#0A0A1A]/80 py-[16px] border-y border-white/10">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between gap-4">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-[12px] overflow-x-auto no-scrollbar py-1">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-[18px] py-[8px] rounded-full text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#E9E6FF] text-black shadow-md shadow-purple-500/10'
                        : 'border border-white/10 text-white/60 hover:text-white hover:border-white/25 hover:bg-white/[0.03]'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            {/* View Mode Grid/List Toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1 shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${viewMode === 'grid' ? 'bg-white/15 text-white' : 'text-white/40 hover:text-white'}`}
                aria-label="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${viewMode === 'list' ? 'bg-white/15 text-white' : 'text-white/40 hover:text-white'}`}
                aria-label="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>

        {/* =========================================================================
            3. FEATURED CASE STUDY
           ========================================================================= */}
        {activeFilter === 'All' && (
          <section className="py-[40px] px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              onClick={() => setSelectedProject(featuredProject)}
              className="p-6 sm:p-8 lg:p-10 rounded-[20px] bg-white/[0.04] border border-white/10 hover:border-white/25 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer group shadow-2xl"
            >
              {/* Left Column: Browser Mockup Frame (7 cols) */}
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-[16px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4 flex flex-col justify-between">
                <div className={`absolute inset-0 bg-gradient-to-br ${featuredProject.gradient} opacity-80 group-hover:scale-105 transition-transform duration-700`} />
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />

                {/* Top browser dots */}
                <div className="relative z-10 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>

                <div className="relative z-10 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 max-w-sm">
                  <span className="text-[11px] font-mono uppercase text-[#F9A8FF] block">Live Telemetry</span>
                  <span className="text-sm font-bold text-white font-mono">$50,420 MRR • 1,240 Invoices Processed/Day</span>
                </div>
              </div>

              {/* Right Column: Content Details (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="bg-[#E9E6FF] text-black text-[10px] font-bold px-[10px] py-[4px] rounded-full uppercase tracking-wider inline-block">
                    FEATURED
                  </span>

                  <h2 className="text-2xl sm:text-[36px] font-bold text-white mt-[16px] leading-[1.1] tracking-tight group-hover:text-[#E9E6FF] transition-colors">
                    {featuredProject.headline}
                  </h2>

                  <div className="text-xs font-mono text-[#F9A8FF] mt-3">
                    AI / SaaS / Automation
                  </div>

                  <p className="text-[15px] text-white/60 mt-[16px] leading-[1.6]">
                    {featuredProject.description}
                  </p>

                  {/* 3 Metrics */}
                  <div className="grid grid-cols-3 gap-3 mt-[32px] pt-4 border-t border-white/10">
                    <div>
                      <span className="text-lg sm:text-xl font-bold font-mono text-white block">3 Weeks</span>
                      <span className="text-[11px] font-mono text-white/50">Build Time</span>
                    </div>
                    <div>
                      <span className="text-lg sm:text-xl font-bold font-mono text-[#F9A8FF] block">80%</span>
                      <span className="text-[11px] font-mono text-white/50">Time Saved</span>
                    </div>
                    <div>
                      <span className="text-lg sm:text-xl font-bold font-mono text-[#C7D2FE] block">$50k</span>
                      <span className="text-[11px] font-mono text-white/50">MRR Scale</span>
                    </div>
                  </div>
                </div>

                <div className="mt-[32px]">
                  <button
                    className="inline-flex items-center gap-2 bg-white hover:bg-[#E9E6FF] text-black px-[24px] py-[12px] rounded-[12px] font-semibold text-sm transition-all shadow-lg cursor-pointer"
                  >
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* =========================================================================
            4. PROJECT GRID / LIST
           ========================================================================= */}
        <section className="py-[40px] px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
          <motion.div
            layout
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 gap-[32px]'
                : 'space-y-6'
            }
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className={`group rounded-[20px] border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all cursor-pointer overflow-hidden ${
                    viewMode === 'list'
                      ? 'flex flex-col sm:flex-row items-center justify-between p-6 gap-6'
                      : 'flex flex-col justify-between'
                  }`}
                >
                  {/* Visual Top Preview */}
                  <div
                    className={`relative overflow-hidden ${
                      viewMode === 'grid' ? 'aspect-[16/10] w-full' : 'w-full sm:w-48 aspect-[16/10] rounded-xl shrink-0'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500`} />
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                    {/* Top browser dots in grid mode */}
                    {viewMode === 'grid' && (
                      <div className="relative z-10 flex items-center justify-between p-4">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/70" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                          <div className="w-2 h-2 rounded-full bg-green-500/70" />
                        </div>
                        <span className="bg-[#E9E6FF] text-black text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono">
                          {project.metrics.result}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Bottom */}
                  <div className={`p-[24px] flex-1 flex flex-col justify-between ${viewMode === 'list' ? 'p-0 w-full' : ''}`}>
                    <div>
                      <span className="text-[12px] font-mono uppercase tracking-wider text-white/50 block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-[20px] font-semibold text-white group-hover:text-[#E9E6FF] transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-[14px] text-white/60 mt-[8px] line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom Row */}
                    <div className="mt-[16px] pt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="bg-white/10 text-white/80 px-[10px] py-[4px] rounded-full text-[11px] font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* =========================================================================
            6. METRICS STRIP
           ========================================================================= */}
        <section className="py-[80px] border-y border-white/10 bg-white/[0.02]">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-8 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <AnimatedCounter
                  value={12}
                  suffix="+"
                  className="text-[40px] sm:text-[48px] font-black font-mono text-white leading-none block"
                />
                <span className="text-[12px] font-mono uppercase tracking-widest text-white/50 mt-2 block">
                  PRODUCTS SHIPPED
                </span>
              </div>
              <div>
                <AnimatedCounter
                  value={21}
                  suffix=" Days"
                  className="text-[40px] sm:text-[48px] font-black font-mono text-[#F9A8FF] leading-none block"
                />
                <span className="text-[12px] font-mono uppercase tracking-widest text-white/50 mt-2 block">
                  AVG TIME TO MARKET
                </span>
              </div>
              <div>
                <AnimatedCounter
                  value={100}
                  suffix="%"
                  className="text-[40px] sm:text-[48px] font-black font-mono text-[#C7D2FE] leading-none block"
                />
                <span className="text-[12px] font-mono uppercase tracking-widest text-white/50 mt-2 block">
                  ON-TIME DELIVERY
                </span>
              </div>
              <div>
                <AnimatedCounter
                  value={5}
                  suffix=".0"
                  className="text-[40px] sm:text-[48px] font-black font-mono text-white leading-none block"
                />
                <span className="text-[12px] font-mono uppercase tracking-widest text-white/50 mt-2 block">
                  FOUNDER RATING
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. PROCESS TEASER
           ========================================================================= */}
        <section className="py-[100px] px-6 sm:px-8 md:px-12">
          <div className="max-w-[900px] mx-auto p-[48px] rounded-[20px] bg-white/5 border border-white/10 text-center shadow-xl">
            <h3 className="text-[32px] font-bold text-white tracking-tight">
              Like what you see?
            </h3>
            <p className="text-base text-white/60 mt-3 mb-8 max-w-md mx-auto">
              We can ship your production MVP or automation system in 21 days too.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services"
                className="bg-white hover:bg-[#E9E6FF] text-black font-semibold text-sm px-6 py-3.5 rounded-[12px] transition-all shadow-md cursor-pointer"
              >
                Start a Project &rarr;
              </Link>
              <Link
                href="/services"
                className="border border-white/20 hover:border-white/40 text-white font-mono text-xs tracking-wider px-6 py-3.5 rounded-[12px] transition-all cursor-pointer"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. FINAL CTA
           ========================================================================= */}
        <section className="py-[100px] border-t border-white/10 text-center px-6">
          <div className="max-w-[600px] mx-auto">
            <span className="text-xs font-mono text-[#F9A8FF] tracking-[0.2em] uppercase font-semibold block mb-3">
              ZERO CHAOS SPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Have an idea? Let&apos;s make it lazy.
            </h2>
            <p className="text-base text-white/60 mt-3 mb-8">
              Skip months of agency bureaucracy. We scope on Day 1 and start building on Day 2.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services"
                className="bg-gradient-to-r from-[#F9A8FF] via-[#E9E6FF] to-[#C7D2FE] text-black font-bold text-sm px-7 py-3.5 rounded-[12px] shadow-lg shadow-purple-500/20 hover:scale-105 transition-all"
              >
                Start a Project
              </Link>
              <Link
                href="/#contact"
                className="border border-white/15 hover:border-white/30 text-white font-mono text-xs tracking-wider px-6 py-3.5 rounded-[12px] hover:bg-white/5 transition-all"
              >
                Book a call
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Case Study Modal Drawer */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
