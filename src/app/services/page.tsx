'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Rocket,
  Bot,
  Code2,
  Cpu,
  Layers,
  TrendingUp,
  Check,
  X,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Clock,
  Zap,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { servicesData, phaseSteps, comparisonData, ServiceItem } from '@/lib/services';

// Dynamic import for AcidSquares background shader
const AcidSquares = dynamic(() => import('@/components/AcidSquares'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0A0A1A]" />
});

// Helper for rendering icons dynamically
const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Bot,
  Code2,
  Cpu,
  Layers,
  TrendingUp
};

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

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeService, setActiveService] = useState<ServiceItem>(servicesData[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState(servicesData[0].title);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const categories = [
    'All',
    'Intelligence & Flow',
    'Core Engineering',
    'Infrastructure',
    'Design & UX'
  ];

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  const openInquiry = (serviceTitle?: string) => {
    if (serviceTitle) setModalService(serviceTitle);
    setFormSuccess(false);
    setModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(true);
      setTimeout(() => {
        setModalOpen(false);
        setFormSuccess(false);
      }, 2000);
    }, 800);
  };

  const ActiveIcon = iconMap[activeService.icon] || Rocket;

  return (
    <div className="relative min-h-screen bg-[#0A0A1A] text-white font-sans selection:bg-[#F9A8FF]/30 selection:text-white overflow-x-hidden">
      
      {/* Background AcidSquares WebGL Shader */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <AcidSquares
          color1="#5227FF"
          color2="#A855F7"
          color3="#FFFFFF"
          detail="low"
          speed={0.4}
          waveDepth={0.8}
          zoom={1.2}
          density={8.0}
          glow={0.8}
          exposure={2400}
          opacity={0.3}
          grain={true}
          grainIntensity={0.03}
        />
      </div>

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
            1. SERVICES HERO
           ========================================================================= */}
        <section className="pt-[160px] pb-[80px] px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
          >
            {/* Left Column */}
            <div className="max-w-[760px]">
              <motion.span
                variants={fadeUp}
                className="text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase block mb-4 font-bold"
              >
                OUR CAPABILITIES
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="text-[40px] sm:text-[56px] md:text-[72px] font-black tracking-[-0.04em] leading-[0.9] text-white"
              >
                Automated Excellence.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-base sm:text-[18px] text-white/70 max-w-[520px] mt-[24px] leading-[1.6] font-normal"
              >
                We don&apos;t sell hours. We ship products that run themselves.
              </motion.p>
            </div>

            {/* Right Column Stats */}
            <motion.div
              variants={fadeUp}
              className="flex flex-row lg:flex-col gap-6 sm:gap-8 lg:gap-4 border-l-0 lg:border-l border-white/10 lg:pl-8 py-2 text-left shrink-0"
            >
              <div>
                <span className="text-xl sm:text-2xl font-black font-mono text-white block">6 Services</span>
                <span className="text-xs font-mono uppercase text-white/50 tracking-wider">Turnkey Solutions</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black font-mono text-[#F9A8FF] block">4 Phases</span>
                <span className="text-xs font-mono uppercase text-white/50 tracking-wider">Predictable Model</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black font-mono text-[#C7D2FE] block">21 Day</span>
                <span className="text-xs font-mono uppercase text-white/50 tracking-wider">Average Ship</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* =========================================================================
            2. CATEGORY FILTER BAR
           ========================================================================= */}
        <section className="sticky top-[72px] z-20 backdrop-blur-xl bg-[#0A0A1A]/80 py-[16px] border-y border-white/10">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-8 md:px-12 flex items-center gap-[12px] overflow-x-auto no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-[18px] py-[8px] rounded-full text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#E9E6FF] text-black shadow-md shadow-purple-500/10'
                      : 'border border-white/10 text-white/60 hover:text-white hover:border-white/25 hover:bg-white/[0.03]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            3. INTERACTIVE SERVICE INSPECTOR
           ========================================================================= */}
        <section className="py-[80px] px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Filtered Service Cards Grid */}
            <motion.div
              layout
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              <AnimatePresence mode="popLayout">
                {filteredServices.map((service) => {
                  const IconComp = iconMap[service.icon] || Rocket;
                  const isSelected = activeService.id === service.id;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      key={service.id}
                      onClick={() => setActiveService(service)}
                      className={`p-[24px] rounded-[16px] border transition-all cursor-pointer flex flex-col justify-between group ${
                        isSelected
                          ? 'bg-white/10 border-[#E9E6FF]/50 shadow-xl shadow-purple-500/10 scale-[1.01]'
                          : 'bg-white/5 hover:bg-white/8 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-[36px] h-[36px] rounded-[10px] bg-white/10 flex items-center justify-center text-[#E9E6FF]">
                            <IconComp className="w-[20px] h-[20px]" />
                          </div>
                          <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#E9E6FF] translate-x-0.5 -translate-y-0.5' : 'text-white/40 group-hover:text-white'}`} />
                        </div>
                        <h3 className="text-[18px] font-semibold text-white tracking-tight mb-2">
                          {service.title}
                        </h3>
                        <p className="text-[14px] text-white/60 leading-relaxed line-clamp-2">
                          {service.shortDesc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
                        <span>{service.timeline}</span>
                        <span className="text-[#E9E6FF]/80 group-hover:text-white">Inspect &rarr;</span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {/* Right 5 Columns: Sticky Inspector Panel */}
            <div className="lg:col-span-5 lg:sticky lg:top-[150px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#14141F] border border-white/10 rounded-[20px] p-[32px] shadow-2xl relative overflow-hidden"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-[52px] h-[52px] rounded-[14px] bg-white/10 flex items-center justify-center text-[#E9E6FF]">
                      <ActiveIcon className="w-[32px] h-[32px]" />
                    </div>
                    <span className="bg-white/10 text-white/90 px-[12px] py-[6px] rounded-full text-[12px] font-mono font-medium">
                      ⏱ {activeService.timeline}
                    </span>
                  </div>

                  <h3 className="text-[28px] font-bold text-white tracking-tight mt-6">
                    {activeService.title}
                  </h3>

                  <p className="text-[15px] text-white/70 leading-[1.6] mt-[16px]">
                    {activeService.fullDesc}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-[24px] space-y-[12px]">
                    <span className="text-xs font-mono uppercase tracking-wider text-white/50 block mb-2 font-semibold">
                      Deliverables Included
                    </span>
                    {activeService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-white/90">
                        <Check className="w-4 h-4 text-[#F9A8FF] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-[24px] pt-[20px] border-t border-white/10">
                    <span className="text-xs font-mono uppercase tracking-wider text-white/50 block mb-3 font-semibold">
                      Architecture & Stack
                    </span>
                    <div className="flex flex-wrap gap-[8px]">
                      {activeService.stack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white/10 text-white/90 px-[10px] py-[4px] rounded-full text-[11px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inspector CTA */}
                  <button
                    onClick={() => openInquiry(activeService.title)}
                    className="w-full mt-[32px] bg-white hover:bg-[#E9E6FF] text-black py-[14px] rounded-[12px] font-semibold text-sm transition-all shadow-lg hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                  >
                    Start this service <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* =========================================================================
            4. 4-PHASE SPRINT MODEL
           ========================================================================= */}
        <section className="py-[120px] border-t border-white/10 px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-[600px] mx-auto mb-[60px]"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold tracking-[-0.04em] text-white">
              How we ship in 21 days.
            </h2>
            <p className="text-base text-white/60 mt-3 font-normal">
              No chaos. Just sprints.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {phaseSteps.map((phase) => (
              <motion.div
                key={phase.phase}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-[16px] bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[64px] font-black text-white/10 font-mono leading-none">
                      {phase.phase}
                    </span>
                    <span className="bg-white/10 text-white/80 font-mono text-[11px] px-2.5 py-1 rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  <h3 className="text-[20px] font-semibold text-white tracking-tight mt-2">
                    {phase.title}
                  </h3>
                  <p className="text-[14px] text-white/60 mt-[12px] leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            5. TECH STACK BENTO
           ========================================================================= */}
        <section className="py-[80px] border-t border-white/10 px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-mono text-[#F9A8FF] tracking-[0.2em] uppercase font-semibold block mb-2">
              PRAGMATIC ENGINEERING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              We use boring tech that scales.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'Frontend',
                items: ['Next.js 14', 'React 18', 'Tailwind CSS', 'TypeScript']
              },
              {
                category: 'Backend & Data',
                items: ['Node.js', 'PostgreSQL', 'Prisma ORM', 'Redis Cache']
              },
              {
                category: 'AI & Flow',
                items: ['OpenAI SDK', 'Anthropic Claude', 'LangChain', 'Python Workers']
              },
              {
                category: 'Infrastructure',
                items: ['Vercel Edge', 'AWS Lambda', 'Supabase', 'Cloudflare']
              }
            ].map((bento, idx) => (
              <div
                key={idx}
                className="p-[24px] rounded-[16px] bg-white/5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-white/50 block mb-3">
                    {bento.category}
                  </span>
                  <ul className="space-y-2">
                    {bento.items.map((item, i) => (
                      <li key={i} className="text-sm font-semibold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E9E6FF]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            6. COMPARISON TABLE
           ========================================================================= */}
        <section className="py-[80px] border-t border-white/10 px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
          <div className="text-center max-w-[540px] mx-auto mb-12">
            <span className="text-xs font-mono text-[#F9A8FF] tracking-[0.2em] uppercase font-semibold block mb-2">
              THE ADVANTAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why founders switch to LAZY.
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono uppercase text-white/50">
                  <th className="py-4 px-6">Criteria</th>
                  <th className="py-4 px-6 bg-white/5 border-x border-t border-[#E9E6FF]/30 text-white font-bold rounded-t-xl">
                    LAZY CODER
                  </th>
                  <th className="py-4 px-6">Traditional Agency</th>
                  <th className="py-4 px-6">Freelancers</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5">
                    <td className="py-4 px-6 font-semibold text-white/90">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 bg-white/5 border-x border-[#E9E6FF]/30 text-white font-semibold flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#F9A8FF]" />
                      {row.lazy}
                    </td>
                    <td className="py-4 px-6 text-white/50">
                      {row.agency}
                    </td>
                    <td className="py-4 px-6 text-white/50">
                      {row.freelancer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================================
            8. FINAL CTA
           ========================================================================= */}
        <section className="py-[100px] border-t border-white/10 text-center px-6">
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Have a service in mind?
            </h2>
            <p className="text-base text-white/60 mt-3 mb-8">
              Let&apos;s map your system requirements and give you a fixed sprint timeline.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openInquiry()}
                className="bg-white hover:bg-[#E9E6FF] text-black font-semibold text-sm px-7 py-3.5 rounded-[12px] shadow-lg transition-all cursor-pointer"
              >
                Start a Project
              </button>
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

      {/* =========================================================================
          7. INQUIRY MODAL (Production Framer-Motion Modal)
         ========================================================================= */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-[480px] bg-[#14141F] border border-white/15 rounded-[20px] p-[32px] shadow-2xl"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 text-white/40 hover:text-white text-lg font-mono p-1 cursor-pointer"
              >
                ✕
              </button>

              {formSuccess ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-14 h-14 text-[#F9A8FF] mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-sm text-white/60 mt-2">
                    We will review your scope and follow up with a technical blueprint within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <span className="text-xs font-mono text-[#F9A8FF] uppercase tracking-widest block mb-1">
                    START A PROJECT
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Inquire for {modalService}
                  </h3>
                  <p className="text-xs text-white/60 mt-1 mb-6">
                    Tell us what you want to build or automate. Flat sprint pricing.
                  </p>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Satoshi Nakamoto"
                        className="w-full bg-white/5 border border-white/10 rounded-[10px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E9E6FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        placeholder="satoshi@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-[10px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E9E6FF]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-white/70 mb-1">Service</label>
                        <select
                          value={modalService}
                          onChange={(e) => setModalService(e.target.value)}
                          className="w-full bg-[#14141F] border border-white/10 rounded-[10px] px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E9E6FF]"
                        >
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-white/70 mb-1">Budget</label>
                        <select
                          defaultValue="<$5k"
                          className="w-full bg-[#14141F] border border-white/10 rounded-[10px] px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E9E6FF]"
                        >
                          <option value="<$5k">&lt; $5k</option>
                          <option value="$5k-$10k">$5k - $10k</option>
                          <option value="$10k-$25k">$10k - $25k</option>
                          <option value="$25k+">$25k+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1">Project Scope</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Describe what you want to build or automate..."
                        className="w-full bg-white/5 border border-white/10 rounded-[10px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E9E6FF]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full mt-2 bg-gradient-to-r from-[#F9A8FF] via-[#E9E6FF] to-[#C7D2FE] text-black font-bold text-sm py-3 rounded-[12px] transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      {formSubmitting ? 'Submitting...' : 'Send Inquiry →'}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
