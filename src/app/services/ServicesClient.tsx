'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  Cpu,
  ShoppingBag,
  Zap,
  Bot,
  Check,
  ArrowRight,
  ShieldCheck,
  Layers,
  Database,
  Globe,
  Terminal,
  FileCode2,
  Workflow,
  MessageSquare,
  Search,
  Code2,
  Lock,
  Server,
  Cloud,
  Box,
  BrainCircuit,
  MessageCircle,
  PhoneCall,
  Calendar,
  Users,
  Building2,
  FileText,
  Clock,
  Sparkles,
  ChevronDown,
  ArrowUpRight,
  TrendingUp,
  CreditCard,
  MapPin,
  Filter
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

export default function ServicesClient() {
  const [activeNav, setActiveNav] = useState<string>('APP DEVELOPMENT');
  const [interactiveNeed, setInteractiveNeed] = useState<'app' | 'custom' | 'website' | 'automation' | 'agent'>('agent');
  const [rotatingIndex, setRotatingIndex] = useState(0);

  const rotatingLines = ['Websites.', 'Apps.', 'Software.', 'AI.', 'Automation.'];

  useEffect(() => {
    const timer = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % rotatingLines.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string, label: string) => {
    setActiveNav(label);
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'app-development', label: 'APP DEVELOPMENT' },
    { id: 'custom-software', label: 'CUSTOM SOFTWARE' },
    { id: 'website-development', label: 'WEBSITE DEVELOPMENT' },
    { id: 'ai-automation', label: 'AI AUTOMATION' },
    { id: 'ai-agents', label: 'AI AGENTS' },
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
            1. PAGE HERO
           ========================================================================= */}
        <section className="relative pt-[160px] pb-[100px] px-8 md:px-14 lg:px-20 border-b border-white/10 overflow-hidden w-full min-h-[90vh] flex items-center">
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
                WHAT WE BUILD
              </motion.span>

              <motion.h1 variants={fadeUp} className="font-archivo font-black text-[44px] sm:text-[64px] md:text-[80px] tracking-[-0.04em] leading-[0.9] text-white uppercase">
                SOFTWARE FOR THE WAY <br />
                YOUR BUSINESS <span className="text-[#E9E6FF]">ACTUALLY WORKS.</span>
              </motion.h1>

              {/* Rotating Badge Line */}
              <motion.div variants={fadeUp} className="flex items-center gap-3 font-mono text-[13px] text-[#E9E6FF] font-bold">
                <span className="text-white/40 uppercase tracking-widest">// WE BUILD:</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingLines[rotatingIndex]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="px-3 py-1 bg-[#E9E6FF]/10 border border-[#E9E6FF]/30 rounded-lg text-white font-archivo text-[14px]"
                  >
                    {rotatingLines[rotatingIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>

              <motion.p variants={fadeUp} className="font-instrument text-[16px] md:text-[18px] text-white/70 max-w-2xl leading-[1.6]">
                We design and build digital products that help businesses sell more, operate faster, serve customers better, and automate repetitive work. You bring the problem. We build the system.
              </motion.p>

              <motion.div variants={fadeUp} className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="bg-[#E9E6FF] hover:bg-white text-black font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  START A PROJECT →
                </Link>
                <button
                  onClick={() => scrollToSection('services-overview', 'SERVICES OVERVIEW')}
                  className="border border-white/15 hover:border-white/30 text-white font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] hover:bg-white/5 transition-all flex items-center gap-2"
                >
                  EXPLORE OUR SERVICES ↓
                </button>
              </motion.div>

              <motion.div variants={fadeUp} className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-[0.08em] text-white/50">
                <span>WEB</span> • <span>MOBILE</span> • <span>SOFTWARE</span> • <span>AI</span> • <span>AUTOMATION</span>
                <span className="text-[#E9E6FF] ml-2">DESIGN → BUILD → INTEGRATE → AUTOMATE → LAUNCH</span>
              </motion.div>
            </motion.div>

            {/* Right 5 cols: Business Operating System Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-gradient-to-br from-[#E9E6FF]/10 via-transparent to-purple-950/20 border border-white/10 rounded-[32px] p-6 shadow-2xl overflow-hidden flex flex-col justify-between">
                
                {/* Connected System Top Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px]">
                  <span className="text-white/50 uppercase font-bold">// BUSINESS OPERATING SYSTEM</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> SYSTEM ONLINE
                  </span>
                </div>

                {/* Animated Workflow Flow */}
                <div className="space-y-2.5 font-mono text-[10px] my-4">
                  <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity }} className="p-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                    <span className="text-white/60">WEBSITE LEAD</span>
                    <span className="text-[#E9E6FF]">Form Submitted</span>
                  </motion.div>

                  <div className="text-center text-[#E9E6FF] font-bold text-[12px]">↓</div>

                  <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="p-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                    <span className="text-white/60">CRM & AI QUALIFICATION</span>
                    <span className="text-emerald-400">Score 94/100</span>
                  </motion.div>

                  <div className="text-center text-[#E9E6FF] font-bold text-[12px]">↓</div>

                  <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="p-2.5 bg-[#E9E6FF]/10 border border-[#E9E6FF]/30 rounded-xl flex items-center justify-between text-[#E9E6FF] font-bold">
                    <span>WHATSAPP & PAYMENTS</span>
                    <span>₹499.00 UPI Auto-Collected</span>
                  </motion.div>
                </div>

                <div className="bg-[#E9E6FF] text-black font-mono font-bold text-center py-2.5 rounded-xl uppercase text-[11px]">
                  Everything Works Together
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* =========================================================================
            2. SERVICES OVERVIEW
           ========================================================================= */}
        <section id="services-overview" className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF]/60 font-bold block mb-3">
              CAPABILITIES OVERVIEW
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              ONE PRODUCT TEAM. <br />
              <span className="text-[#E9E6FF]">EVERYTHING YOU NEED TO SHIP.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
            {[
              { num: '01', title: 'APP DEVELOPMENT', desc: 'Mobile applications for customers, employees, marketplaces, and digital products.', linkId: 'app-development' },
              { num: '02', title: 'CUSTOM SOFTWARE', desc: 'Business software designed around your workflows instead of generic tools.', linkId: 'custom-software' },
              { num: '03', title: 'WEBSITE DEVELOPMENT', desc: 'From high-performance marketing sites to dynamic platforms and D2C stores.', linkId: 'website-development' },
              { num: '04', title: 'AI AUTOMATION', desc: 'Connect AI with your existing business workflows so routine work happens automatically.', linkId: 'ai-automation' },
              { num: '05', title: 'AI AGENTS', desc: 'AI systems that understand information, communicate, use tools, and execute tasks.', linkId: 'ai-agents' },
            ].map((cat) => (
              <div
                key={cat.num}
                onClick={() => scrollToSection(cat.linkId, cat.title)}
                className="p-6 rounded-[20px] bg-white/[0.02] border border-white/10 hover:border-[#E9E6FF]/40 hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <span className="font-archivo font-black text-[32px] text-[#E9E6FF]/40 group-hover:text-[#E9E6FF] transition-colors block mb-3">{cat.num}</span>
                  <h3 className="font-archivo font-black text-[18px] uppercase text-white mb-2 group-hover:text-[#E9E6FF] transition-colors">{cat.title}</h3>
                  <p className="font-instrument text-[13px] text-white/60 leading-relaxed">{cat.desc}</p>
                </div>
                <div className="pt-4 font-mono text-[10px] text-[#E9E6FF] uppercase font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore category &rarr;
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            3. STICKY SERVICE NAVIGATION
           ========================================================================= */}
        <div className="sticky top-[72px] z-30 bg-[#0A0A1A]/90 backdrop-blur-xl border-y border-white/10 py-4 px-8 md:px-14 lg:px-20 w-full transition-all">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar w-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id, item.label)}
                className={`font-mono text-[11px] uppercase tracking-[0.08em] px-5 py-2.5 rounded-full transition-all whitespace-nowrap cursor-pointer relative ${
                  activeNav === item.label
                    ? 'bg-[#E9E6FF] text-black font-bold shadow-lg'
                    : 'border border-white/10 text-white/60 hover:text-white hover:border-white/30'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            4. 01 / APP DEVELOPMENT
           ========================================================================= */}
        <section id="app-development" className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF] font-bold block mb-3">
              01 / APP DEVELOPMENT
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] md:text-[72px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              BUILD THE APP YOUR CUSTOMERS <br />
              <span className="text-[#E9E6FF]">KEEP OPENING.</span>
            </h2>
            <p className="font-instrument text-[16px] md:text-[18px] text-white/70 max-w-3xl mt-4 leading-[1.6]">
              We design and build mobile applications that are fast, intuitive, scalable, and connected to the systems behind your business.
            </p>
          </div>

          {/* App Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12 w-full">
            {[
              { title: 'CUSTOMER APPS', desc: 'Food, fitness, healthcare, education, lifestyle, membership & loyalty apps.' },
              { title: 'MARKETPLACE APPS', desc: 'Connect buyers & sellers with service, rental, local & B2B marketplaces.' },
              { title: 'BOOKING APPS', desc: 'Discover, book, pay, reschedule, and push notification alerts.' },
              { title: 'BUSINESS APPS', desc: 'Internal mobile apps for field teams, sales, operations & delivery.' },
              { title: 'ON-DEMAND APPS', desc: 'Delivery, home services, logistics, transportation & local services.' }
            ].map((appType, idx) => (
              <div key={idx} className="p-6 rounded-[20px] bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="font-mono text-[12px] font-bold uppercase text-[#E9E6FF]">{appType.title}</h3>
                <p className="font-instrument text-[13px] text-white/60 leading-relaxed">{appType.desc}</p>
              </div>
            ))}
          </div>

          {/* App Capabilities Matrix */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-[#111113] border border-white/10 mb-8 shadow-2xl w-full">
            <h3 className="font-archivo font-black text-[22px] uppercase text-white mb-6">APP CAPABILITIES MATRIX</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 font-instrument text-[13px]">
              <div>
                <div className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold mb-2">AUTH</div>
                <div className="text-white/70 space-y-1">Email • OTP • Google • Apple • Role-based access</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold mb-2">PAYMENTS</div>
                <div className="text-white/70 space-y-1">Razorpay • Stripe • UPI • Cards • Subscriptions</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold mb-2">COMMUNICATION</div>
                <div className="text-white/70 space-y-1">Push alerts • SMS • WhatsApp • In-app messaging</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold mb-2">LOCATION</div>
                <div className="text-white/70 space-y-1">Maps • Geolocation • Live tracking • Distances</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold mb-2">PRODUCT</div>
                <div className="text-white/70 space-y-1">Search • Filters • Cart • Reviews • Profiles</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold mb-2">OPERATIONS</div>
                <div className="text-white/70 space-y-1">Admin dashboard • Analytics • Moderation • Reports</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-[20px] bg-[#E9E6FF]/10 border border-[#E9E6FF]/30">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase bg-[#E9E6FF] text-black font-bold px-3 py-1 rounded-full">VALIDATION MVP: 7 DAYS</span>
              <span className="font-mono text-[11px] uppercase text-white/80">TYPICAL BUILD: 2–6 WEEKS</span>
            </div>
            <Link href="/contact" className="bg-[#E9E6FF] text-black font-mono font-bold text-[11px] uppercase tracking-[0.08em] px-6 py-3.5 rounded-[12px] shadow-lg">
              BUILD MY APP →
            </Link>
          </div>
        </section>

        {/* =========================================================================
            5. 02 / CUSTOM SOFTWARE
           ========================================================================= */}
        <section id="custom-software" className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF] font-bold block mb-3">
              02 / CUSTOM SOFTWARE
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] md:text-[72px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              YOUR BUSINESS IS UNIQUE. <br />
              <span className="text-[#E9E6FF]">YOUR SOFTWARE SHOULD BE TOO.</span>
            </h2>
            <p className="font-instrument text-[16px] md:text-[18px] text-white/70 max-w-3xl mt-4 leading-[1.6]">
              Generic SaaS tools work until they don&apos;t. We build custom software around your actual processes, teams, customers, and data.
            </p>
          </div>

          {/* Software Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full">
            {[
              { title: 'CRM SYSTEMS', desc: 'Leads, customer accounts, sales pipelines, follow-ups, communication & reporting.' },
              { title: 'ERP / OPERATIONS SYSTEMS', desc: 'Inventory, orders, procurement, employees, workflows & multi-tier approvals.' },
              { title: 'CUSTOMER PORTALS', desc: 'Give customers direct access to accounts, documents, orders, invoices & subscriptions.' },
              { title: 'INTERNAL BUSINESS TOOLS', desc: 'Tailored tools for operations, finance, HR, sales, logistics & support.' },
              { title: 'B2B SaaS PRODUCTS', desc: 'Complete multi-tenant SaaS products with auth, billing, dashboards & permissions.' },
              { title: 'REAL-TIME DASHBOARDS', desc: 'Real-time visibility into revenue, customer behavior, operations & KPIs.' }
            ].map((soft, idx) => (
              <div key={idx} className="p-6 rounded-[20px] bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="font-archivo font-black text-[18px] uppercase text-white">{soft.title}</h3>
                <p className="font-instrument text-[13px] text-white/60 leading-relaxed">{soft.desc}</p>
              </div>
            ))}
          </div>

          {/* Enterprise Capabilities */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-[#111113] border border-white/10 mb-8 shadow-2xl w-full">
            <h3 className="font-archivo font-black text-[22px] uppercase text-white mb-6">ENTERPRISE SOFTWARE CAPABILITIES</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 font-instrument text-[13px]">
              <div>
                <div className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold mb-2">USERS & ORGS</div>
                <div className="text-white/70">Auth • Roles • Permissions • Teams • Organizations</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold mb-2">WORKFLOWS</div>
                <div className="text-white/70">Approvals • Statuses • Notifications • Scheduled tasks</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold mb-2">DATA</div>
                <div className="text-white/70">PostgreSQL • Redis • Vector search • Analytics</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold mb-2">INTEGRATIONS</div>
                <div className="text-white/70">Payments • CRM • WhatsApp • Webhooks • APIs</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold mb-2">SECURITY</div>
                <div className="text-white/70">Access control • Audit trails • Rate limiting • Secure APIs</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold mb-2">SCALE</div>
                <div className="text-white/70">Background queues • Caching • Performance tuning</div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[24px] bg-[#E9E6FF] text-black flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="font-archivo font-black text-[24px] uppercase leading-tight">
              WE BUILD SOFTWARE AROUND YOUR BUSINESS.
            </div>
            <Link href="/contact" className="bg-black text-white font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] whitespace-nowrap shadow-xl">
              BUILD CUSTOM SOFTWARE →
            </Link>
          </div>
        </section>

        {/* =========================================================================
            6. 03 / WEBSITE DEVELOPMENT
           ========================================================================= */}
        <section id="website-development" className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF] font-bold block mb-3">
              03 / WEBSITE DEVELOPMENT
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] md:text-[72px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              WEBSITES THAT DO MORE <br />
              <span className="text-[#E9E6FF]">THAN LOOK GOOD.</span>
            </h2>
            <p className="font-instrument text-[16px] md:text-[18px] text-white/70 max-w-3xl mt-4 leading-[1.6]">
              We build websites designed around a business goal — whether that&apos;s getting discovered, generating leads, selling products, launching a SaaS product, or running an entire customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full">
            <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/10 space-y-4">
              <span className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold">HIGH SPEED</span>
              <h3 className="font-archivo font-black text-[24px] uppercase text-white">STATIC WEBSITES</h3>
              <p className="font-instrument text-[14px] text-white/60">Fast, focused marketing websites & landing pages. 0.8s load on mobile.</p>
              <div className="font-mono text-[10px] uppercase text-[#E9E6FF]">FAST. CLEAN. SEARCH-FRIENDLY.</div>
            </div>

            <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/10 space-y-4">
              <span className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold">DATABASE BACKED</span>
              <h3 className="font-archivo font-black text-[24px] uppercase text-white">DYNAMIC WEBSITES</h3>
              <p className="font-instrument text-[14px] text-white/60">Backends, authentication, booking portals, learning & membership platforms.</p>
              <div className="font-mono text-[10px] uppercase text-[#E9E6FF]">ACTS LIKE SOFTWARE.</div>
            </div>

            <div className="p-8 rounded-[24px] bg-[#E9E6FF]/10 border border-[#E9E6FF]/30 space-y-4">
              <span className="font-mono text-[10px] uppercase bg-[#E9E6FF] text-black font-bold px-2 py-0.5 rounded-full">HIGH CONVERSION</span>
              <h3 className="font-archivo font-black text-[24px] uppercase text-white">STORES BUILT TO SELL</h3>
              <p className="font-instrument text-[14px] text-white/80">D2C stores with Razorpay, UPI, WhatsApp COD verification & Shiprocket courier sync.</p>
              <div className="font-mono text-[10px] uppercase text-[#E9E6FF]">INTEGRATED COMMERCE.</div>
            </div>
          </div>

          <div className="flex justify-end">
            <Link href="/contact" className="bg-[#E9E6FF] text-black font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] shadow-lg">
              BUILD MY STORE →
            </Link>
          </div>
        </section>

        {/* =========================================================================
            7. 04 / AI AUTOMATION
           ========================================================================= */}
        <section id="ai-automation" className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF] font-bold block mb-3">
              04 / AI AUTOMATION
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] md:text-[72px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              TURN REPETITIVE WORK INTO <br />
              <span className="text-[#E9E6FF]">AUTOMATED WORK.</span>
            </h2>
            <p className="font-instrument text-[16px] md:text-[18px] text-white/70 max-w-3xl mt-4 leading-[1.6]">
              AI becomes valuable when it connects to the systems your business already uses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full">
            <div className="p-6 rounded-[20px] bg-red-500/5 border border-red-500/20 space-y-2 font-mono text-[11px]">
              <span className="text-red-400 font-bold uppercase">// BEFORE AI AUTOMATION</span>
              <div className="text-white/60 space-y-1 pt-2 font-instrument text-[14px]">
                Lead arrives → Employee reads message → Employee checks CRM → Employee writes response → Employee updates CRM → Employee schedules follow-up.
              </div>
            </div>

            <div className="p-6 rounded-[20px] bg-emerald-500/5 border border-emerald-500/20 space-y-2 font-mono text-[11px]">
              <span className="text-emerald-400 font-bold uppercase">// AFTER LAZY CODER AI AUTOMATION</span>
              <div className="text-white/80 space-y-1 pt-2 font-instrument text-[14px]">
                Lead arrives → AI understands intent → AI checks CRM → AI responds instantly → CRM updated automatically → Follow-up scheduled.
              </div>
            </div>
          </div>

          {/* Use cases */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 font-mono text-[11px]">
            {['SALES AUTOMATION', 'CUSTOMER SUPPORT', 'MARKETING WORKFLOWS', 'OPERATIONS & DOCS', 'FINANCE & INVOICES', 'HR & ONBOARDING'].map((item, idx) => (
              <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-xl text-center text-white/80 font-bold">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            8. 05 / AI AGENTS (FLAGSHIP DIRECTORY)
           ========================================================================= */}
        <section id="ai-agents" className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF] font-bold block mb-3">
              05 / AI AGENTS • FLAGSHIP WORKFORCE
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] md:text-[72px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              AI THAT DOES <br />
              <span className="text-[#E9E6FF]">THE WORK.</span>
            </h2>
            <p className="font-instrument text-[16px] md:text-[18px] text-white/70 max-w-3xl mt-4 leading-[1.6]">
              A chatbot waits for a question. An AI agent can understand a goal, decide what needs to happen, use your systems, complete tasks, and escalate to a human when necessary.
            </p>
          </div>

          {/* AI Workforce Directory */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full">
            {[
              { name: 'AI VOICE AGENT', role: 'YOUR AI RECEPTIONIST', desc: 'Answers & qualifies calls in Hindi & English, books calendar slots & updates CRM.', task: '“Hi, I’d like to book a consultation.” → Checks slot → Books → Sends confirmation.' },
              { name: 'AI CHAT AGENT', role: '24/7 CUSTOMER ASSISTANT', desc: 'Deployed on Website, App, WhatsApp & Portals to resolve support & recommend products.', task: 'Searches company knowledge base & executes instant human handoff if needed.' },
              { name: 'AI SALES AGENT', role: 'DIGITAL SDR', desc: 'Finds qualified leads, asks qualification questions, scores prospects & triggers proposals.', task: 'Prospect submits inquiry → QUALIFY → SCORE → ENRICH → CONTACT → BOOK.' },
              { name: 'AI APPOINTMENT AGENT', role: 'DIGITAL RECEPTIONIST', desc: 'Books, checks availability, reschedules & sends WhatsApp reminders for clinics & salons.', task: 'Auto-syncs Google Calendar & sends instant WhatsApp confirmations.' },
              { name: 'AI WHATSAPP AGENT', role: 'WHATSAPP SALES & SUPPORT', desc: 'Handles product discovery, order status, campaign assistance & human escalation.', task: 'Answers incoming WhatsApp queries with 99% accuracy.' },
              { name: 'AI KNOWLEDGE AGENT', role: 'COMPANY BRAIN (RAG)', desc: 'Connects company PDFs, SOPs, FAQs & databases into context-aware vector search.', task: 'Retrieves instant answers from internal company documents.' }
            ].map((agent, idx) => (
              <div key={idx} className="p-8 rounded-[24px] bg-[#111113] border border-white/10 hover:border-[#E9E6FF]/40 transition-all flex flex-col justify-between space-y-4">
                <div>
                  <div className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold mb-1">{agent.role}</div>
                  <h3 className="font-archivo font-black text-[22px] uppercase text-white mb-2">{agent.name}</h3>
                  <p className="font-instrument text-[14px] text-white/70 leading-relaxed mb-4">{agent.desc}</p>
                  <div className="p-3 bg-white/5 rounded-xl font-mono text-[10px] text-white/60 border border-white/5">
                    {agent.task}
                  </div>
                </div>
                <Link href="/contact" className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold hover:underline inline-block pt-2">
                  DEPLOY AGENT &rarr;
                </Link>
              </div>
            ))}
          </div>

          {/* AI Architecture Diagram */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-white/[0.02] border border-white/10 text-center font-mono text-[11px] space-y-4 w-full">
            <div className="text-white/40 uppercase font-bold">// ACTION-ORIENTED AI AGENT ARCHITECTURE</div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-white">
              <span className="p-2.5 bg-white/5 border border-white/10 rounded-xl">USER</span>
              <span>→</span>
              <span className="p-2.5 bg-[#E9E6FF] text-black font-bold rounded-xl">AI REASONING AGENT</span>
              <span>→</span>
              <span className="p-2.5 bg-white/5 border border-white/10 rounded-xl">TOOLS (CRM / DB / UPI / WHATSAPP)</span>
              <span>→</span>
              <span className="p-2.5 bg-emerald-400/20 text-emerald-300 rounded-xl font-bold">ACTION & RESULT</span>
            </div>
            <div className="text-white/40 text-[10px]">ONE AGENT. MULTIPLE CHANNELS (PHONE, WHATSAPP, WEB). ONE SOURCE OF TRUTH.</div>
          </div>
        </section>

        {/* =========================================================================
            9. WHAT WE ACTUALLY DELIVER
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF]/60 font-bold block mb-3">
              COMPLETE PRODUCTION DELIVERABLE
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              YOU GET A WORKING SYSTEM. <br />
              <span className="text-[#E9E6FF]">NOT A FOLDER FULL OF CODE.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { title: 'PRODUCT STRATEGY', desc: 'Requirements • Architecture • Feature planning' },
              { title: 'UI / UX DESIGN', desc: 'Wireframes • Design system • Responsive interfaces' },
              { title: 'ENGINEERING', desc: 'Frontend • Backend • Database • APIs' },
              { title: 'AI SYSTEMS', desc: 'Models • RAG • Agents • Tool calling' },
              { title: 'AUTOMATION', desc: 'Workflows • Schedulers • Webhooks • Notifications' },
              { title: 'INTEGRATIONS', desc: 'Payments • CRM • WhatsApp • Email • Meta' },
              { title: 'QUALITY & SECURITY', desc: 'Testing • Security • Performance • Error handling' },
              { title: 'LAUNCH', desc: 'Deployment • Domain • Analytics • Monitoring' }
            ].map((mod, idx) => (
              <div key={idx} className="p-6 rounded-[20px] bg-white/[0.02] border border-white/10">
                <h3 className="font-mono text-[13px] font-bold uppercase text-[#E9E6FF] mb-2">{mod.title}</h3>
                <p className="font-instrument text-[14px] text-white/70 leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            10. HOW WE BUILD (3-PHASE SPRINT)
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center">
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              FROM IDEA TO PRODUCTION.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 w-full">
            <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold">PHASE 01 — DISCOVER</span>
                <span className="font-mono text-[10px] uppercase bg-white/10 px-2 py-0.5 rounded-full text-white">DAYS 1–3</span>
              </div>
              <p className="font-instrument text-[14px] text-white/70">Understand business, users, workflows & success metrics.</p>
            </div>

            <div className="p-8 rounded-[24px] bg-[#E9E6FF]/10 border border-[#E9E6FF]/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold">PHASE 02 — BUILD</span>
                <span className="font-mono text-[10px] uppercase bg-[#E9E6FF] text-black px-2 py-0.5 rounded-full font-bold">DAYS 4–17</span>
              </div>
              <p className="font-instrument text-[14px] text-white/80">Build UI, backend, database, integrations, AI & automation.</p>
            </div>

            <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold">PHASE 03 — LAUNCH</span>
                <span className="font-mono text-[10px] uppercase bg-white/10 px-2 py-0.5 rounded-full text-white">DAYS 18–21</span>
              </div>
              <p className="font-instrument text-[14px] text-white/70">Finalize QA, performance, deployment, analytics & handover.</p>
            </div>
          </div>

          <div className="font-mono text-[11px] text-white/50 text-center uppercase tracking-[0.08em]">
            21 days applies to focused product sprints. Larger systems are planned in milestones based on scope.
          </div>
        </section>

        {/* =========================================================================
            11. INTERACTIVE SERVICE DECISION SECTION
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold block mb-2">INTERACTIVE DECISION</span>
              <h2 className="font-archivo font-black text-[36px] sm:text-[48px] uppercase text-white">WHAT ARE YOU TRYING TO BUILD?</h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-[11px]">
              {[
                { id: 'app', label: 'I NEED AN APP' },
                { id: 'custom', label: 'I NEED CUSTOM SOFTWARE' },
                { id: 'website', label: 'I NEED A WEBSITE' },
                { id: 'automation', label: 'I WANT TO AUTOMATE MY BUSINESS' },
                { id: 'agent', label: 'I WANT AN AI AGENT' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setInteractiveNeed(opt.id as any)}
                  className={`px-5 py-3 rounded-full uppercase tracking-wider font-bold transition-all cursor-pointer ${
                    interactiveNeed === opt.id
                      ? 'bg-[#E9E6FF] text-black shadow-lg'
                      : 'border border-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="p-8 rounded-[24px] bg-[#111113] border border-[#E9E6FF]/30 text-center space-y-4">
              {interactiveNeed === 'app' && <p className="font-instrument text-[16px] text-white/80">Tell us about your mobile app idea. We design, build iOS & Android versions in 21 days with payments.</p>}
              {interactiveNeed === 'custom' && <p className="font-instrument text-[16px] text-white/80">Tell us what manual workflows slow your team down. We build custom CRM/ERP dashboards around your business.</p>}
              {interactiveNeed === 'website' && <p className="font-instrument text-[16px] text-white/80">Tell us your conversion goals. We build 0.8s fast websites & D2C stores with Razorpay and WhatsApp bot.</p>}
              {interactiveNeed === 'automation' && <p className="font-instrument text-[16px] text-white/80">Tell us what data your team copies between tabs. We connect your CRM, WhatsApp & payments automatically.</p>}
              {interactiveNeed === 'agent' && <p className="font-instrument text-[16px] text-white/80">Tell us what your team does repeatedly. We identify where an AI agent can understand, decide, and execute the work.</p>}

              <Link href="/contact" className="bg-[#E9E6FF] text-black font-mono font-bold text-[12px] uppercase px-8 py-3.5 rounded-[12px] inline-block shadow-lg">
                TALK TO US →
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            12. WHY LAZY CODER
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF]/60 font-bold block mb-2">DIFFERENTIATION</span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              WE DON&apos;T SELL DEVELOPER HOURS. <br />
              <span className="text-[#E9E6FF]">WE SHIP SYSTEMS.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 w-full">
            {[
              { title: 'BUSINESS FIRST', desc: 'We start with the business problem, not the technology.' },
              { title: 'ONE TEAM', desc: 'Design, engineering, AI, and automation work together.' },
              { title: 'PRODUCTION READY', desc: 'We build for real customers, real data, and real operations.' },
              { title: 'BUILT TO EVOLVE', desc: 'Your first release becomes the foundation for the next version.' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-[20px] bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="font-archivo font-black text-[18px] uppercase text-white">{item.title}</h3>
                <p className="font-instrument text-[13px] text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            13. FAQ SECTION
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-archivo font-black text-[36px] sm:text-[48px] uppercase text-white mb-12">FREQUENTLY ASKED QUESTIONS</h2>

            <div className="space-y-4 text-left w-full">
              {[
                { q: 'Do you build from scratch?', a: 'Yes. We can start from an idea, requirements document, existing website, prototype, or partially built product.' },
                { q: 'Can you work with an existing system?', a: 'Yes. We can integrate with or extend existing software where appropriate.' },
                { q: 'Can you build both frontend and backend?', a: 'Yes. We handle complete product development including frontend, backend, databases, APIs, authentication, integrations, and deployment.' },
                { q: 'Do you build AI agents or only chatbots?', a: 'We build both. Simple conversational assistants and action-oriented AI agents that can use tools and execute business workflows.' },
                { q: 'Can an AI agent make phone calls?', a: 'Yes. We build AI voice systems for use cases such as reception, qualification, appointment booking, support, and follow-up.' },
                { q: 'Can AI agents connect to our CRM?', a: 'Yes. Agents can integrate with CRMs, databases, calendars, messaging systems, internal APIs, and other business tools.' },
                { q: 'How long does development take?', a: 'Focused MVPs can be delivered quickly, while larger systems are divided into milestones. Our standard product sprint is designed around a 21-day focused build cycle.' }
              ].map((faq, idx) => (
                <details key={idx} className="group rounded-[16px] bg-white/[0.03] border border-white/10 p-5 transition-all cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between font-mono font-bold text-[12px] text-white uppercase tracking-[0.08em] select-none">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-4 h-4 text-white/50 group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-3 pt-3 border-t border-white/5 font-instrument text-[14px] text-white/60 leading-[1.6]">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            14. FINAL CTA
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 text-center w-full">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold block">READY WHEN YOU ARE</span>
            <h2 className="font-archivo font-black text-[44px] sm:text-[64px] md:text-[84px] tracking-[-0.04em] leading-[0.9] uppercase text-white">
              TELL US WHAT YOU WANT <br />
              <span className="text-[#E9E6FF]">TO BUILD.</span>
            </h2>
            <p className="font-instrument text-[18px] text-white/70 max-w-2xl mx-auto leading-[1.6]">
              You don&apos;t need to know the technology. You don&apos;t need a technical specification. Tell us what your business needs to do. We&apos;ll figure out how to build it.
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
                WHATSAPP US →
              </a>
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
