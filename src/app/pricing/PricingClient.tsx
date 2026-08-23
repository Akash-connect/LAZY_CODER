'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { pricingPlansData, priceComparisonData, pricingFaqItems } from '@/lib/pricing';
import {
  Check,
  X,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  Calculator,
  MessageCircle,
  Sparkles,
  ChevronDown,
  Info,
  Layers,
  Zap,
  Bot,
  CreditCard,
  Building2,
  Sliders,
  DollarSign,
  TrendingUp,
  CheckCircle2
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

export default function PricingClient() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  
  // Interactive Scope Estimator State
  const [estProduct, setEstProduct] = useState<'website' | 'webapp' | 'mobile' | 'custom' | 'ecommerce'>('webapp');
  const [estAi, setEstAi] = useState<'none' | 'chatbot' | 'rag' | 'agent' | 'voice'>('agent');
  const [estPlatform, setEstPlatform] = useState<'web' | 'mobile' | 'both'>('web');

  // ROI Calculator State
  const [devSalary, setDevSalary] = useState<number>(80000);
  const [devMonths, setDevMonths] = useState<number>(3);
  const [devCount, setDevCount] = useState<number>(2);

  // Decision Tool State
  const [decisionNeed, setDecisionNeed] = useState<'idea' | 'product' | 'scale'>('product');

  // Calculate ROI
  const totalInhouseCost = devSalary * devMonths * devCount * 1.25; // 25% overhead
  const lazyGrowthCost = 350000;
  const estimatedSavings = Math.max(0, totalInhouseCost - lazyGrowthCost);

  // Calculate Scope Estimator Range
  const getEstimatedRange = () => {
    let base = 150000;
    if (estProduct === 'webapp') base = 350000;
    if (estProduct === 'mobile') base = 400000;
    if (estProduct === 'custom') base = 500000;
    if (estProduct === 'ecommerce') base = 300000;

    if (estAi === 'rag') base += 100000;
    if (estAi === 'agent') base += 200000;
    if (estAi === 'voice') base += 250000;

    if (estPlatform === 'both') base += 150000;

    const usdVal = Math.round(base / 75);
    return currency === 'INR'
      ? `₹${(base / 100000).toFixed(1)}L+`
      : `$${Math.round(usdVal / 1000)}k+`;
  };

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
            1. HERO SECTION & CURRENCY SWITCHER
           ========================================================================= */}
        <section className="relative pt-[160px] pb-[80px] px-8 md:px-14 lg:px-20 border-b border-white/10 overflow-hidden w-full min-h-[75vh] flex items-center">
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

          <div className="w-full text-center max-w-4xl mx-auto space-y-6 relative z-10">
            <motion.span initial="hidden" animate="visible" variants={fadeUp} className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E9E6FF]/60 font-bold block">
              SIMPLE, TRANSPARENT PRICING • PRODUCT SPRINTS
            </motion.span>

            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-archivo font-black text-[44px] sm:text-[64px] md:text-[84px] tracking-[-0.04em] leading-[0.9] text-white uppercase">
              CHOOSE HOW BIG <br />
              YOU WANT TO <span className="text-[#E9E6FF]">BUILD.</span>
            </motion.h1>

            <motion.p initial="hidden" animate="visible" variants={fadeUp} className="font-instrument text-[16px] md:text-[18px] text-white/70 max-w-2xl mx-auto leading-[1.6]">
              Building software shouldn&apos;t start with a mystery quote. From validating your idea to launching a production platform — our packages are designed around product complexity, not developer hours.
            </motion.p>

            {/* Currency Toggle */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="pt-4 flex items-center justify-center gap-3">
              <div className="bg-[#111113] border border-white/10 p-1.5 rounded-full inline-flex items-center gap-1 font-mono text-[11px] font-bold shadow-xl">
                <button
                  onClick={() => setCurrency('INR')}
                  className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
                    currency === 'INR' ? 'bg-[#E9E6FF] text-black shadow-md' : 'text-white/60 hover:text-white'
                  }`}
                >
                  🇮🇳 INR (₹)
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
                    currency === 'USD' ? 'bg-[#E9E6FF] text-black shadow-md' : 'text-white/60 hover:text-white'
                  }`}
                >
                  🌎 USD ($)
                </button>
              </div>
            </motion.div>

            {/* GST Tax Info Banner */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="pt-2 text-[11px] font-mono text-white/50 max-w-xl mx-auto">
              <span>+ 18% GST for eligible Indian business invoices.</span>
              <span className="block text-white/30 text-[10px] mt-0.5">Input tax credit available for registered GSTIN businesses subject to tax rules.</span>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            2. MAIN PRICING CARDS
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch w-full">
            {pricingPlansData.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-[32px] p-8 sm:p-10 flex flex-col justify-between transition-all relative shadow-2xl ${
                  plan.popular
                    ? 'bg-[#111113] border-2 border-[#E9E6FF] shadow-purple-500/10'
                    : 'bg-white/[0.02] border border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E9E6FF] text-black font-mono font-bold text-[10px] uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                    MOST POPULAR
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold block mb-1">{plan.positioning}</span>
                    <h3 className="font-archivo font-black text-[28px] uppercase text-white">{plan.name}</h3>
                    <div className="pt-2 flex items-baseline gap-2">
                      <span className="font-archivo font-black text-[44px] text-white">
                        {currency === 'INR' ? plan.priceINR : plan.priceUSD}
                      </span>
                      <span className="font-mono text-[11px] text-white/40 uppercase">/ {plan.timeline}</span>
                    </div>
                    <p className="font-instrument text-[14px] text-white/70 mt-3 leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-white/10 font-instrument text-[13px]">
                    <div className="font-mono text-[10px] uppercase text-[#E9E6FF] font-bold">// INCLUDED DELIVERABLES</div>
                    
                    <div className="space-y-2">
                      {plan.productFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-white/80">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 space-y-4">
                  <Link
                    href="/contact"
                    className={`w-full py-4 rounded-[12px] font-mono font-bold text-[12px] uppercase tracking-[0.08em] text-center block transition-all shadow-lg ${
                      plan.popular
                        ? 'bg-[#E9E6FF] hover:bg-white text-black'
                        : 'border border-white/20 hover:border-white text-white hover:bg-white/5'
                    }`}
                  >
                    {plan.ctaText}
                  </Link>

                  <div className="font-mono text-[10px] text-white/40 text-center uppercase">
                    IDEAL FOR: {plan.idealFor.slice(0, 3).join(', ')}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            3. DETAILED PRICE COMPARISON TABLE
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center max-w-4xl mx-auto">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF]/60 font-bold block mb-3">
              FEATURE MATRIX
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              WHAT CHANGES AS YOU SCALE?
            </h2>
          </div>

          <div className="w-full overflow-x-auto border border-white/10 rounded-[24px] bg-[#111113]">
            <table className="w-full border-collapse text-left font-mono text-[12px]">
              <thead>
                <tr className="border-b border-white/10 uppercase text-white/40 bg-white/[0.02]">
                  <th className="py-4 px-6">CAPABILITY</th>
                  <th className="py-4 px-6 text-white/60">STARTER (₹1.5L)</th>
                  <th className="py-4 px-6 text-[#E9E6FF] font-bold">GROWTH (₹3.5L)</th>
                  <th className="py-4 px-6 text-white">SCALE (₹7L+)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-instrument text-[14px]">
                {priceComparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="py-4 px-6 font-mono text-[12px] text-white/80 font-bold">{row.capability}</td>
                    <td className="py-4 px-6 text-white/60">{row.starter}</td>
                    <td className="py-4 px-6 text-white font-semibold">{row.growth}</td>
                    <td className="py-4 px-6 text-[#E9E6FF] font-bold">{row.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================================
            4. COMPLEXITY SLIDERS & BUILD YOUR OWN SCOPE ESTIMATOR
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold block mb-2">INTERACTIVE ESTIMATOR</span>
              <h2 className="font-archivo font-black text-[36px] sm:text-[48px] uppercase text-white">BUILD YOUR PRODUCT SCOPE</h2>
              <p className="font-instrument text-[16px] text-white/60 mt-2">Select what you&apos;re trying to build to see estimated starting range.</p>
            </div>

            <div className="p-8 sm:p-12 rounded-[32px] bg-[#111113] border border-white/10 space-y-8 shadow-2xl">
              
              {/* Product Select */}
              <div className="space-y-3 font-mono text-[11px]">
                <span className="text-white/50 uppercase font-bold">// 01 SELECT PRODUCT TYPE</span>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'website', label: 'WEBSITE' },
                    { id: 'webapp', label: 'WEB APP / SAAS' },
                    { id: 'mobile', label: 'MOBILE APP' },
                    { id: 'custom', label: 'CUSTOM SOFTWARE / ERP' },
                    { id: 'ecommerce', label: 'D2C ECOMMERCE' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setEstProduct(p.id as any)}
                      className={`px-4 py-2.5 rounded-xl uppercase font-bold transition-all cursor-pointer ${
                        estProduct === p.id ? 'bg-[#E9E6FF] text-black' : 'border border-white/10 text-white/60 hover:text-white'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Select */}
              <div className="space-y-3 font-mono text-[11px]">
                <span className="text-white/50 uppercase font-bold">// 02 SELECT AI CAPABILITY</span>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'none', label: 'NO AI' },
                    { id: 'chatbot', label: 'AI CHATBOT' },
                    { id: 'rag', label: 'RAG KNOWLEDGE BRAIN' },
                    { id: 'agent', label: 'AI AGENT (TOOL CALLING)' },
                    { id: 'voice', label: 'BILINGUAL AI VOICE AGENT' },
                  ].map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setEstAi(a.id as any)}
                      className={`px-4 py-2.5 rounded-xl uppercase font-bold transition-all cursor-pointer ${
                        estAi === a.id ? 'bg-[#E9E6FF] text-black' : 'border border-white/10 text-white/60 hover:text-white'
                      }`}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Platform Select */}
              <div className="space-y-3 font-mono text-[11px]">
                <span className="text-white/50 uppercase font-bold">// 03 SELECT PLATFORM</span>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'web', label: 'WEB ONLY' },
                    { id: 'mobile', label: 'MOBILE ONLY (iOS/Android)' },
                    { id: 'both', label: 'WEB + MOBILE APP' },
                  ].map((pl) => (
                    <button
                      key={pl.id}
                      onClick={() => setEstPlatform(pl.id as any)}
                      className={`px-4 py-2.5 rounded-xl uppercase font-bold transition-all cursor-pointer ${
                        estPlatform === pl.id ? 'bg-[#E9E6FF] text-black' : 'border border-white/10 text-white/60 hover:text-white'
                      }`}
                    >
                      {pl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimated Result Banner */}
              <div className="p-6 rounded-[20px] bg-[#E9E6FF]/10 border border-[#E9E6FF]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="font-mono text-[10px] uppercase text-white/50">ESTIMATED STARTING RANGE</div>
                  <div className="font-archivo font-black text-[32px] text-[#E9E6FF]">{getEstimatedRange()}</div>
                  <div className="font-mono text-[10px] text-white/40 uppercase">ESTIMATE ONLY — FINAL PRICE DEPENDS ON SCOPE.</div>
                </div>
                <Link href="/contact" className="bg-[#E9E6FF] text-black font-mono font-bold text-[11px] uppercase px-6 py-3.5 rounded-[12px] shadow-lg whitespace-nowrap">
                  REQUEST EXACT QUOTE →
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            5. DEDICATED AI & AUTOMATION PRICING SECTIONS
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="mb-16 w-full text-center max-w-4xl mx-auto">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF]/60 font-bold block mb-3">
              AI & AUTOMATION COMPLEXITY
            </span>
            <h2 className="font-archivo font-black text-[36px] sm:text-[56px] uppercase tracking-[-0.04em] leading-[0.9] text-white">
              AI DOESN&apos;T HAVE ONE PRICE. <br />
              <span className="text-[#E9E6FF]">IT HAS A JOB.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {[
              { level: 'LOW', title: 'AI ASSISTANT', desc: 'Website FAQ chat, basic support & content assistance.', price: 'Included in Growth' },
              { level: 'MEDIUM', title: 'AI KNOWLEDGE BRAIN', desc: 'Vector search (RAG) over company PDFs & internal SOPs.', price: 'Included in Growth' },
              { level: 'HIGH', title: 'AI REASONING AGENT', desc: 'Tool calling, CRM updates, slot booking & automated tasks.', price: 'Growth / Scale' },
              { level: 'CUSTOM', title: 'AI VOICE AGENT', desc: 'Bilingual Hindi & English phone call handling & reception.', price: 'Scale / Custom' }
            ].map((aiItem, idx) => (
              <div key={idx} className="p-6 rounded-[20px] bg-white/[0.02] border border-white/10 space-y-3">
                <span className="font-mono text-[10px] uppercase bg-white/10 text-white font-bold px-2.5 py-0.5 rounded-full">{aiItem.level}</span>
                <h3 className="font-archivo font-black text-[18px] uppercase text-white">{aiItem.title}</h3>
                <p className="font-instrument text-[13px] text-white/60 leading-relaxed">{aiItem.desc}</p>
                <div className="font-mono text-[10px] text-[#E9E6FF] uppercase font-bold pt-2">{aiItem.price}</div>
              </div>
            ))}
          </div>

          <div className="font-mono text-[10px] text-white/40 text-center uppercase pt-8">
            Note: OpenAI, Telephony & WhatsApp third-party API usage fees are billed directly by providers.
          </div>
        </section>

        {/* =========================================================================
            6. PAYMENT STRUCTURE & EMI
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#E9E6FF] font-bold">COMMERCIAL TERMS</span>
              <h2 className="font-archivo font-black text-[36px] sm:text-[48px] uppercase text-white">HOW PAYMENT WORKS</h2>
              <p className="font-instrument text-[16px] text-white/70 leading-relaxed">
                We work on structured milestone payments linked to visible progress.
              </p>
              
              <div className="space-y-3 font-mono text-[11px] pt-2">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                  <span>STEP 01 — PROJECT CONFIRMATION</span>
                  <span className="text-[#E9E6FF] font-bold">50% ADVANCE</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                  <span>STEP 02 — BUILD MILESTONE DEMO</span>
                  <span className="text-[#E9E6FF] font-bold">30% MID-SPRINT</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                  <span>STEP 03 — PRODUCTION HANDOVER</span>
                  <span className="text-emerald-400 font-bold">20% LAUNCH</span>
                </div>
              </div>
            </div>

            {/* Credit Card EMI Section */}
            <div className="lg:col-span-6 bg-[#111113] border border-white/10 rounded-[28px] p-8 space-y-4 shadow-2xl font-mono text-[11px]">
              <span className="text-[#E9E6FF] uppercase font-bold">// CREDIT CARD EMI AVAILABLE</span>
              <h3 className="font-archivo font-black text-[22px] text-white uppercase">NEED TO SPREAD THE INVESTMENT?</h3>
              <p className="font-instrument text-[14px] text-white/70 leading-relaxed">
                Pay via Razorpay Credit Card EMI across 3, 6, 9, or 12 months with leading Indian banks (HDFC, ICICI, Axis, SBI).
              </p>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1">
                <div className="text-white/50 text-[10px]">GROWTH PLAN (₹3.5L) ESTIMATED EMI:</div>
                <div className="font-archivo font-black text-[24px] text-[#E9E6FF]">₹31,500 / month</div>
                <div className="text-white/40 text-[9px] uppercase">12-MONTH ILLUSTRATIVE ESTIMATE SUBJECT TO BANK APPLICABLE FEES.</div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. ROI CALCULATOR
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold block mb-2">ROI CALCULATOR</span>
              <h2 className="font-archivo font-black text-[36px] sm:text-[48px] uppercase text-white">WHAT DOES BUILDING IN-HOUSE COST?</h2>
            </div>

            <div className="p-8 sm:p-10 rounded-[28px] bg-[#111113] border border-white/10 space-y-6 font-mono text-[11px] shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="text-white/50 block mb-2">DEV MONTHLY SALARY (₹)</label>
                  <input
                    type="number"
                    value={devSalary}
                    onChange={(e) => setDevSalary(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold"
                  />
                </div>

                <div>
                  <label className="text-white/50 block mb-2">NUMBER OF DEVELOPERS</label>
                  <input
                    type="number"
                    value={devCount}
                    onChange={(e) => setDevCount(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold"
                  />
                </div>

                <div>
                  <label className="text-white/50 block mb-2">IN-HOUSE MONTHS</label>
                  <input
                    type="number"
                    value={devMonths}
                    onChange={(e) => setDevMonths(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl space-y-1">
                  <div className="text-red-400 text-[10px] font-bold">ESTIMATED IN-HOUSE COST:</div>
                  <div className="font-archivo font-black text-[28px] text-white">₹{totalInhouseCost.toLocaleString('en-IN')}</div>
                  <div className="text-white/40 text-[9px]">INCLUDES SALARIES + 25% MANAGEMENT OVERHEAD.</div>
                </div>

                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl space-y-1">
                  <div className="text-emerald-400 text-[10px] font-bold">ESTIMATED SAVINGS WITH LAZY SPRINT:</div>
                  <div className="font-archivo font-black text-[28px] text-emerald-400">₹{estimatedSavings.toLocaleString('en-IN')}</div>
                  <div className="text-white/40 text-[9px]">BASED ON ₹3.5L FIXED GROWTH SPRINT.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. WHAT IS NOT INCLUDED (EXCLUSIONS FOR TRUST)
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center">
              <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold block mb-2">TRANSPARENT BOUNDARIES</span>
              <h2 className="font-archivo font-black text-[36px] sm:text-[48px] uppercase text-white">CLEAR SCOPE. NO SURPRISES.</h2>
              <p className="font-instrument text-[16px] text-white/70">Development packages do not automatically include third-party operational fees.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-[11px]">
              {[
                'Third-Party API Fees',
                'AI Model Tokens',
                'Telephony Charges',
                'WhatsApp Messaging',
                'Cloud Infrastructure',
                'Domain Registration',
                'Paid App Store Licenses',
                'Out-of-Scope Features'
              ].map((ex, idx) => (
                <div key={idx} className="p-4 bg-white/[0.02] border border-white/10 rounded-xl text-white/60">
                  • {ex}
                </div>
              ))}
            </div>

            <div className="font-mono text-[10px] text-white/40 text-center pt-2">
              If a third-party service is required, we identify it during planning and make associated costs visible before implementation.
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. FAQ ACCORDION
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 border-b border-white/10 w-full">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-archivo font-black text-[36px] sm:text-[48px] uppercase text-white mb-12">FREQUENTLY ASKED QUESTIONS</h2>

            <div className="space-y-4 text-left w-full">
              {pricingFaqItems.map((faq, idx) => (
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
            10. FINAL CTA
           ========================================================================= */}
        <section className="py-24 md:py-32 lg:py-40 px-8 md:px-14 lg:px-20 text-center w-full">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="font-mono text-[11px] uppercase text-[#E9E6FF] font-bold block">READY TO BUILD?</span>
            <h2 className="font-archivo font-black text-[44px] sm:text-[64px] md:text-[84px] tracking-[-0.04em] leading-[0.9] uppercase text-white">
              YOU DON&apos;T NEED A BIGGER BUDGET. <br />
              <span className="text-[#E9E6FF]">YOU NEED A CLEARER PRODUCT.</span>
            </h2>
            <p className="font-instrument text-[18px] text-white/70 max-w-2xl mx-auto leading-[1.6]">
              Tell us what you&apos;re trying to build. We&apos;ll help you identify the right scope, the right package, and the fastest path to launch.
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

            <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-white/40 pt-4">
              CLEAR PRICE • CLEAR SCOPE • REAL PRODUCT
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
