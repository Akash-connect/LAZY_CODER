'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  IndianRupee,
  Smartphone,
  Globe,
  Bot,
  Zap,
  Layers,
  PhoneCall,
  Check,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { projectsData } from '@/lib/projects';
import { pricingPlansData } from '@/lib/pricing';

const SlicedWaves = dynamic(() => import('@/components/SlicedWaves'), {
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

export default function HomePage() {
  // Rotating sentence in Hero
  const rotatingSentences = [
    "focus on growing your business.",
    "close deals while you sleep.",
    "stop chasing spreadsheets.",
    "automate the boring work.",
    "build instead of managing developers.",
    "spend time where it actually matters."
  ];

  const [rotIndex, setRotIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRotIndex((prev) => (prev + 1) % rotatingSentences.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Interactive D2C Demo State
  const [cartCount, setCartCount] = useState(1);
  const [showUpiModal, setShowUpiModal] = useState(false);
  const [showWhatsappNotify, setShowWhatsappNotify] = useState(false);

  // Interactive AI Agent State
  const [aiStep, setAiStep] = useState(0);
  const [aiActive, setAiActive] = useState(false);

  const triggerAiAgent = () => {
    setAiActive(true);
    setAiStep(1);
    setTimeout(() => setAiStep(2), 1000);
    setTimeout(() => setAiStep(3), 2000);
    setTimeout(() => setAiStep(4), 3000);
  };

  // Interactive AI Voice State
  const [voiceCallState, setVoiceCallState] = useState<'idle' | 'calling' | 'booked'>('idle');

  const startVoiceCall = () => {
    setVoiceCallState('calling');
    setTimeout(() => setVoiceCallState('booked'), 3500);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setShowWhatsappNotify(true);
    setTimeout(() => setShowWhatsappNotify(false), 4000);
  };

  const featuredWork = projectsData.slice(0, 4);

  const homeFaqs = [
    { q: 'What does LAZY CODER build?', a: 'Websites, web applications, mobile apps, custom software, AI systems, AI agents, voice systems, and business automation.' },
    { q: 'How fast can you build?', a: 'Focused product sprints can be delivered in around 21 days when scope and dependencies allow. Larger products are broken into milestones.' },
    { q: 'Do you work with existing products?', a: 'Yes. We can extend, rebuild, integrate, or automate existing systems after assessing the codebase and requirements.' },
    { q: 'Can you build mobile apps?', a: 'Yes, iOS & Android cross-platform apps with React Native.' },
    { q: 'Can you build AI agents?', a: 'Yes — including chat agents, RAG systems, tool-using agents, sales/support agents, and AI voice agents.' },
    { q: 'Do you handle deployment?', a: 'Yes, production Vercel / Cloud deployment is included in the agreed scope.' },
    { q: 'How much does a project cost?', a: 'Projects start around ₹1.5L for focused builds, Growth around ₹3.5L and complex Scale engagements from ₹7L+.' }
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A1A] text-white selection:bg-[#E9E6FF]/30 selection:text-white overflow-x-hidden font-sans w-full">
      
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
            03 - 08 HERO SECTION & ROTATING COPY & SYSTEM VISUALIZATION
           ========================================================================= */}
        <section className="relative min-h-[85vh] flex flex-col justify-center items-start overflow-hidden pt-[160px] pb-[80px] px-8 md:px-14 lg:px-20 w-full border-b border-white/10">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <SlicedWaves />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
            
            {/* Left 7 cols: Massive Editorial Typography */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6"
            >
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[#E9E6FF] text-[11px] font-mono font-bold tracking-[0.08em] uppercase backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                LAZY CODER • PRODUCT STUDIO
              </motion.span>

              <motion.h1 variants={fadeUp} className="text-[44px] sm:text-[64px] md:text-[84px] font-archivo font-black tracking-[-0.04em] leading-[0.9] text-white uppercase w-full">
                WE DO THE <br />
                HARD WORK <br />
                SO YOU CAN <br />
                <span className="text-[#E9E6FF]">BE LAZY.</span>
              </motion.h1>

              {/* Dynamic Rotating Line */}
              <motion.div variants={fadeUp} className="text-[16px] md:text-[18px] font-instrument font-medium text-white/70 max-w-2xl leading-[1.6]">
                <span>So you can </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingSentences[rotIndex]}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-white font-bold underline decoration-[#E9E6FF] inline-block"
                  >
                    {rotatingSentences[rotIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>

              <motion.p variants={fadeUp} className="font-instrument text-[15px] text-white/60 max-w-[620px] leading-relaxed">
                LAZY CODER is a product studio building web apps, mobile apps, custom software, AI agents, voice systems, and business automation for founders who want to move fast.
              </motion.p>

              <motion.div variants={fadeUp} className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="bg-[#E9E6FF] hover:bg-white text-black font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  START YOUR PROJECT →
                </Link>
                <Link
                  href="/work"
                  className="border border-white/15 hover:border-white/30 text-white font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] hover:bg-white/5 transition-all"
                >
                  SEE OUR WORK →
                </Link>
              </motion.div>

            </motion.div>

            {/* Right 5 cols: Product System Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-gradient-to-br from-[#E9E6FF]/10 via-transparent to-purple-950/20 border border-white/10 rounded-[32px] p-6 shadow-2xl overflow-hidden flex flex-col justify-between">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px]">
                  <span className="text-white/50 uppercase font-bold">// COMPLETE BUSINESS SYSTEM</span>
                  <span className="text-emerald-400 font-bold">● SYSTEM ONLINE</span>
                </div>

                <div className="space-y-2 font-mono text-[10px] my-3">
                  <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                    <span className="text-white/60">01 WEB / MOBILE APP</span>
                    <span className="text-[#E9E6FF]">Customer Front</span>
                  </div>
                  <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                    <span className="text-white/60">02 RAZORPAY & UPI</span>
                    <span className="text-emerald-400">Payment Engine</span>
                  </div>
                  <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                    <span className="text-white/60">03 AI AGENT & VOICE</span>
                    <span className="text-[#E9E6FF]">24/7 Execution</span>
                  </div>
                  <div className="p-2.5 bg-[#E9E6FF]/10 border border-[#E9E6FF]/30 rounded-xl flex items-center justify-between text-[#E9E6FF] font-bold">
                    <span>04 WHATSAPP AUTOMATION</span>
                    <span>Auto-Dispatched</span>
                  </div>
                </div>

                <div className="bg-[#E9E6FF] text-black font-mono font-bold text-center py-2.5 rounded-xl uppercase text-[11px]">
                  We Build The System. Not Just The Screen.
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* =========================================================================
            09 - 11 DYNAMIC INTERACTIVE D2C STORE DEMO & UPI POPUP
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 bg-white/[0.01] w-full">
          <div className="mb-12 w-full">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF] font-bold block mb-2">
              INTERACTIVE PRODUCT DEMO
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[48px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              THIS IS WHAT WE MEAN BY &ldquo;BUILD PRODUCTS.&rdquo;
            </h2>
            <p className="font-instrument text-[16px] text-white/60 mt-3 max-w-2xl">
              Try a live ecommerce interaction connected to instant UPI payment popup and WhatsApp order confirmation.
            </p>
          </div>

          <div className="bg-[#111113] border border-white/10 rounded-[28px] p-6 sm:p-10 w-full relative shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 font-mono text-[11px]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-white/40">ayurveda-brand.in/store</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[#E9E6FF] font-bold">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Cart: {cartCount} items</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square bg-gradient-to-br from-purple-950/40 via-[#0A0A1A] to-slate-900 border border-white/10 rounded-[20px] p-6 flex flex-col justify-between relative">
                <span className="bg-emerald-400/20 text-emerald-300 font-mono text-[9px] font-bold uppercase px-2.5 py-1 rounded-full w-fit">
                  BESTSELLER PRODUCT
                </span>
                <div>
                  <div className="font-archivo font-black text-[24px] text-white uppercase">Organic Hair Oil</div>
                  <div className="font-instrument text-[14px] text-white/60">Cold-pressed 100% natural formula</div>
                  <div className="font-archivo font-black text-[28px] text-[#E9E6FF] mt-2">₹499</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-archivo font-black text-[22px] uppercase text-white">Automated Customer Experience</h3>
                <p className="font-instrument text-[14px] text-white/70 leading-relaxed">
                  When a customer orders, an instant WhatsApp COD verification is triggered to eliminate fraudulent order returns.
                </p>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-[#E9E6FF] hover:bg-white text-black font-mono font-bold text-[11px] uppercase tracking-wider py-3.5 rounded-[12px] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Simulate Customer Order (₹499)
                  </button>

                  <button
                    onClick={() => setShowUpiModal(true)}
                    className="w-full border border-white/20 hover:border-white/40 text-white font-mono font-bold text-[11px] uppercase tracking-wider py-3.5 rounded-[12px] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <IndianRupee className="w-4 h-4 text-[#E9E6FF]" />
                    Test Instant UPI QR Modal
                  </button>
                </div>
              </div>
            </div>

            {showWhatsappNotify && (
              <div className="mt-6 p-4 rounded-[16px] bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] flex items-center gap-3 animate-bounce">
                <MessageCircle className="w-5 h-5 shrink-0" />
                <div>
                  <span className="font-bold">WhatsApp Alert Sent!</span> &ldquo;Namaste Rohan! Order #LC1024 of ₹499 is confirmed via COD verification.&rdquo;
                </div>
              </div>
            )}

            {showUpiModal && (
              <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
                <div className="bg-[#111113] border border-[#E9E6FF] rounded-[24px] p-8 max-w-sm w-full text-center space-y-4 shadow-2xl">
                  <div className="font-archivo font-black text-[20px] uppercase text-white">Scan UPI to Pay</div>
                  <p className="font-instrument text-[13px] text-white/60">GPay • PhonePe • PayTM • BHIM</p>
                  
                  <div className="w-44 h-44 bg-white mx-auto rounded-[16px] p-4 flex items-center justify-center">
                    <div className="w-full h-full border-4 border-black border-dashed rounded-[12px] flex items-center justify-center font-mono text-black font-bold text-[11px]">
                      [UPI QR MOCK]
                    </div>
                  </div>

                  <div className="font-mono text-[12px] text-[#E9E6FF] font-bold">Amount: ₹499.00</div>

                  <button
                    onClick={() => setShowUpiModal(false)}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] font-bold uppercase py-2.5 rounded-[12px]"
                  >
                    Close Demo
                  </button>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* =========================================================================
            12 - 13 VALUE PROPOSITION & BUSINESS PROBLEMS
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center max-w-4xl mx-auto">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF]/60 font-bold block mb-3">
              THE LAZY CODER IDEA
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              SOFTWARE SHOULD REMOVE WORK. <br />
              <span className="text-[#E9E6FF]">NOT CREATE MORE OF IT.</span>
            </h2>
            <p className="font-instrument text-[18px] text-white/70 mt-4 leading-[1.6]">
              We build systems that replace repetitive operations, connect disconnected tools, and give teams more time to focus on the work that actually matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              { q: 'STILL COPYING DATA BETWEEN TABS?', sol: 'Automate the workflow between CRM, WhatsApp & Payments.' },
              { q: 'STILL FOLLOWING UP MANUALLY?', sol: 'Build an action-oriented AI agent that updates prospects automatically.' },
              { q: 'CUSTOMERS ASKING REPEATED QUESTIONS?', sol: 'Deploy a 24/7 AI Receptionist in Hindi & English.' },
              { q: 'USING 5 TOOLS THAT DON&apos;T TALK?', sol: 'Connect everything into one unified system.' },
              { q: 'MANAGING ORDERS IN SPREADSHEETS?', sol: 'Build a custom real-time operations dashboard.' },
              { q: 'NEED A PRODUCT WITHOUT DEV TEAMS?', sol: 'We build your complete production system in 21 days.' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-[20px] bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="font-mono text-[12px] font-bold text-red-400 uppercase">{item.q}</h3>
                <p className="font-instrument text-[14px] text-white/80 leading-relaxed font-semibold">{item.sol}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            14 WHAT WE BUILD (6 CAPABILITY BLOCKS)
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center">
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              WE BUILD THE SYSTEM. <br />
              <span className="text-[#E9E6FF]">NOT JUST THE SCREEN.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
            {[
              { title: 'WEB', desc: 'Static & dynamic websites, D2C stores, SaaS platforms, customer portals.', link: '/services#website-development' },
              { title: 'MOBILE', desc: 'iOS & Android cross-platform apps, consumer apps, booking platforms.', link: '/services#app-development' },
              { title: 'SOFTWARE', desc: 'Custom CRM, ERP, operations software, internal tools, admin dashboards.', link: '/services#custom-software' },
              { title: 'AI', desc: 'AI chatbots, RAG knowledge brains, AI copilots, AI agents & voice telephony.', link: '/services#ai-agents' },
              { title: 'AUTOMATION', desc: 'WhatsApp bot, email routing, CRM workflows & scheduled jobs.', link: '/services#ai-automation' },
              { title: 'INTEGRATIONS', desc: 'Razorpay UPI payments, WhatsApp API, Meta Pixel, Google & CRMs.', link: '/services' }
            ].map((cap, idx) => (
              <div key={idx} className="p-6 rounded-[20px] bg-white/[0.02] border border-white/10 flex flex-col justify-between group">
                <div>
                  <h3 className="font-mono text-[14px] font-bold text-[#E9E6FF] uppercase mb-2">{cap.title}</h3>
                  <p className="font-instrument text-[13px] text-white/60 leading-relaxed">{cap.desc}</p>
                </div>
                <Link href={cap.link} className="pt-4 font-mono text-[10px] text-[#E9E6FF] uppercase font-bold group-hover:underline inline-block">
                  EXPLORE {cap.title} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            15 - 16 AI AGENT & VOICE SHOWCASE
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            
            {/* Left 6 cols: AI Reasoning Agent */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold">// ACTION-ORIENTED AI AGENT</span>
              <h2 className="font-archivo font-black text-[36px] sm:text-[48px] uppercase text-white">WHAT IF YOUR SOFTWARE COULD DO THE WORK?</h2>
              <p className="font-instrument text-[16px] text-white/70 leading-relaxed">
                We build AI systems that don&apos;t just answer questions. They understand context, query databases, use tools, and execute actions.
              </p>

              <div className="p-6 rounded-[24px] bg-[#111113] border border-white/10 space-y-4 font-mono text-[11px]">
                <div className="text-white/60">&ldquo;Find all leads who haven&apos;t replied in 3 days and follow up.&rdquo;</div>
                
                <button
                  onClick={triggerAiAgent}
                  className="bg-[#E9E6FF] text-black font-bold px-4 py-2 rounded-xl uppercase hover:bg-white transition-all cursor-pointer"
                >
                  SIMULATE AI WORKFLOW →
                </button>

                {aiActive && (
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <div className={aiStep >= 1 ? 'text-emerald-400 font-bold' : 'text-white/30'}>SEARCH CRM FOR UNANSWERED LEADS ✓</div>
                    <div className={aiStep >= 2 ? 'text-emerald-400 font-bold' : 'text-white/30'}>FILTER 47 QUALIFIED PROSPECTS ✓</div>
                    <div className={aiStep >= 3 ? 'text-emerald-400 font-bold' : 'text-white/30'}>SEND INDIVIDUALIZED WHATSAPP MESSAGES ✓</div>
                    <div className={aiStep >= 4 ? 'text-emerald-400 font-bold' : 'text-white/30'}>STATUS: 47 LEADS AUTOMATICALLY FOLLOWED UP ✓</div>
                  </div>
                )}
              </div>
            </div>

            {/* Right 6 cols: AI Voice Receptionist */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold">// BILINGUAL TELEPHONY AGENT</span>
              <h2 className="font-archivo font-black text-[36px] sm:text-[48px] uppercase text-white">YOUR BUSINESS CAN ANSWER THE PHONE TOO.</h2>
              <p className="font-instrument text-[16px] text-white/70 leading-relaxed">
                Bilingual AI receptionists for healthcare clinics and real estate offices that answer inbound calls in Hindi and English.
              </p>

              <div className="p-6 rounded-[24px] bg-[#111113] border border-white/10 space-y-4 font-mono text-[11px]">
                <div className="flex items-center justify-between text-white/60">
                  <span>INCOMING CALL: +91 98200 XXXXX</span>
                  <PhoneCall className="w-4 h-4 text-emerald-400 animate-pulse" />
                </div>

                <div className="font-instrument text-[14px] text-white/80">
                  &ldquo;Namaste! I would like to book a consultation for tomorrow afternoon.&rdquo;
                </div>

                {voiceCallState === 'idle' && (
                  <button
                    onClick={startVoiceCall}
                    className="border border-white/20 text-white font-bold px-4 py-2 rounded-xl uppercase hover:bg-white/10 transition-all cursor-pointer"
                  >
                    TEST TELEPHONY CALL DEMO →
                  </button>
                )}

                {voiceCallState === 'calling' && (
                  <div className="text-[#E9E6FF] font-bold animate-pulse">CHECKING GOOGLE CALENDAR AVAILABILITY...</div>
                )}

                {voiceCallState === 'booked' && (
                  <div className="p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-300 font-bold space-y-1">
                    <div>APPOINTMENT BOOKED FOR TOMORROW 3:30 PM ✓</div>
                    <div className="text-[10px] text-white/60 font-normal">CRM RECORD CREATED • WHATSAPP REMINDER SENT</div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            19 FEATURED SHIPPED WORK
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF] font-bold block mb-2">
                SHIPPED PRODUCTS
              </span>
              <h2 className="font-archivo font-black text-[36px] sm:text-[48px] uppercase text-white">THINGS WE&apos;VE BUILT.</h2>
            </div>
            <Link href="/work" className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold hover:underline">
              VIEW ALL SHIPPED WORK &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {featuredWork.map((proj) => (
              <div key={proj.slug} className="p-8 rounded-[28px] bg-[#111113] border border-white/10 space-y-4 hover:border-[#E9E6FF]/40 transition-all">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="bg-[#E9E6FF] text-black font-bold px-2.5 py-0.5 rounded-full">{proj.projectType}</span>
                  <span className="text-white/50">{proj.timeline || '21 DAYS'}</span>
                </div>
                <h3 className="font-archivo font-black text-[24px] uppercase text-white">{proj.title}</h3>
                <p className="font-instrument text-[14px] text-white/70 leading-relaxed">{proj.summary}</p>
                <div className="font-mono text-[10px] text-white/40 pt-2 border-t border-white/10">STACK: {proj.technologies.join(' • ')}</div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            21 21-DAY SPRINT SECTION
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center">
            <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold block mb-2">CONCENTRATED SPRINT</span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              YOUR PRODUCT. <span className="text-[#E9E6FF]">21 DAYS.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 font-mono text-[11px] w-full">
            {[
              { day: 'DAYS 1–3', title: 'DISCOVERY', desc: 'Business requirements & blueprint.' },
              { day: 'DAYS 4–5', title: 'DESIGN', desc: 'UI/UX & responsive screens.' },
              { day: 'DAYS 6–17', title: 'BUILD', desc: 'Frontend, backend, APIs & AI.' },
              { day: 'DAYS 18–20', title: 'QA', desc: 'Testing, speed 95+ & security.' },
              { day: 'DAY 21', title: 'LAUNCH', desc: 'Live Vercel production deployment.' }
            ].map((s, idx) => (
              <div key={idx} className="p-6 rounded-[20px] bg-white/[0.02] border border-white/10 space-y-2">
                <span className="text-[#E9E6FF] font-bold">{s.day}</span>
                <h3 className="font-bold text-white uppercase text-[12px]">{s.title}</h3>
                <p className="font-instrument text-[12px] text-white/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            23 PRICING PREVIEW
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center">
            <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold block mb-2">TRANSPARENT STARTING POINTS</span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[48px] uppercase text-white">KNOW THE RANGE BEFORE WE TALK.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {pricingPlansData.map((plan) => (
              <div key={plan.id} className="p-8 rounded-[28px] bg-[#111113] border border-white/10 flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold">{plan.positioning}</span>
                  <h3 className="font-archivo font-black text-[24px] uppercase text-white mt-1">{plan.name}</h3>
                  <div className="font-archivo font-black text-[36px] text-white mt-2">{plan.priceINR}</div>
                  <p className="font-instrument text-[14px] text-white/70 mt-2">{plan.description}</p>
                </div>
                <Link href="/pricing" className="bg-[#E9E6FF] text-black font-mono font-bold text-[11px] uppercase py-3 rounded-xl text-center block">
                  EXPLORE {plan.name} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            28 FOUNDER MESSAGE & 29 FAQ & 30 FINAL CTA
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              YOU RUN THE BUSINESS. <br />
              <span className="text-[#E9E6FF]">WE&apos;LL BUILD THE MACHINE.</span>
            </h2>
            <p className="font-instrument text-[18px] text-white/70 max-w-2xl mx-auto leading-[1.6]">
              You shouldn&apos;t have to become a project manager, developer, designer, and systems architect just to launch your idea. Bring us the problem. We&apos;ll help turn it into a product.
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-archivo font-black text-[36px] sm:text-[48px] uppercase text-white mb-12">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="space-y-4 text-left w-full">
              {homeFaqs.map((faq, idx) => (
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

        {/* Final CTA */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 text-center w-full">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold block">READY TO STOP DOING IT MANUALLY?</span>
            <h2 className="font-archivo font-black text-[44px] sm:text-[64px] md:text-[84px] tracking-[-0.04em] leading-[0.9] uppercase text-white">
              LET&apos;S BUILD <br />
              <span className="text-[#E9E6FF]">SOMETHING USEFUL.</span>
            </h2>
            <p className="font-instrument text-[18px] text-white/70 max-w-2xl mx-auto leading-[1.6]">
              Tell us what you&apos;re trying to build, automate, simplify, or improve. No technical specification required.
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
                TALK ON WHATSAPP →
              </a>
            </div>

            <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-white/40 pt-4">
              WE DO THE HARD WORK. YOU GET TO BE LAZY.
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
