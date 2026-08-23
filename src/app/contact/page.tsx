'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Clock, MapPin, CheckCircle2, AlertCircle, Loader2, MessageCircle } from 'lucide-react';

const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phoneOrEmail: z.string().min(5, 'Please enter a valid phone number or email'),
  budget: z.enum(['₹1.5L', '₹3.5L', '₹7L+', 'Not sure']),
  projectType: z.enum(['SaaS Product', 'D2C Store', 'AI Employee', 'Mobile App', 'Other']),
  message: z.string().min(10, 'Please describe your product idea in brief'),
});

type LeadFormData = z.infer<typeof leadSchema>;

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      budget: '₹3.5L',
      projectType: 'SaaS Product'
    }
  });

  const onSubmit = async (data: LeadFormData) => {
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit form');
      }

      setStatus('success');
      reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A1A] text-white font-sans selection:bg-[#E9E6FF]/30 selection:text-white overflow-x-hidden">
      
      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-[160px] pb-[60px] px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto text-center sm:text-left">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#E9E6FF] uppercase block mb-4 font-bold">
            GET IN TOUCH • HINDI & ENGLISH
          </span>
          <h1 className="text-[40px] sm:text-[56px] md:text-[64px] font-archivo font-black tracking-[-0.04em] leading-[0.95] text-white uppercase">
            LET&apos;S BUILD YOUR PRODUCT IN 21 DAYS.
          </h1>
          <p className="text-base sm:text-[18px] font-instrument text-white/60 max-w-[600px] mt-[20px] leading-[1.6]">
            Tell us about your product idea. We review specs and WhatsApp / email you a fixed execution blueprint within 2 hours.
          </p>
        </section>

        {/* FORM & CALENDLY INFO */}
        <section className="pb-[120px] px-6 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Card (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-[32px] rounded-[24px] bg-[#111113] border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-archivo font-black text-white uppercase mb-2">Send us your product idea</h2>
              <p className="text-xs font-mono text-white/50 mb-6">
                All inquiries are reviewed directly by our founders.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h3 className="text-lg font-archivo font-black text-white uppercase">Message received!</h3>
                  <p className="text-sm font-instrument text-white/70">
                    We will WhatsApp or call you on your number within 2 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition-all"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-[20px]">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-white/50 mb-[8px] font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Rohan Sharma"
                      {...register('name')}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-[12px] px-[16px] py-[14px] text-[14px] text-white placeholder:text-white/30 focus:border-[#E9E6FF] outline-none transition-all"
                    />
                    {errors.name && (
                      <span className="text-xs text-rose-400 mt-1 block font-mono">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Phone or Email */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-white/50 mb-[8px] font-bold">
                      WhatsApp Number / Email Address
                    </label>
                    <input
                      type="text"
                      placeholder="+91 98765 43210 or founder@company.com"
                      {...register('phoneOrEmail')}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-[12px] px-[16px] py-[14px] text-[14px] text-white placeholder:text-white/30 focus:border-[#E9E6FF] outline-none transition-all"
                    />
                    {errors.phoneOrEmail && (
                      <span className="text-xs text-rose-400 mt-1 block font-mono">
                        {errors.phoneOrEmail.message}
                      </span>
                    )}
                  </div>

                  {/* 2-Col Budget & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-white/50 mb-[8px] font-bold">
                        Target Budget (₹ INR)
                      </label>
                      <select
                        {...register('budget')}
                        className="w-full bg-[#12121E] border border-white/10 rounded-[12px] px-[16px] py-[14px] text-[14px] text-white focus:border-[#E9E6FF] outline-none transition-all cursor-pointer font-mono"
                      >
                        <option value="₹1.5L">₹1.5 Lakhs (Starter MVP - 7 days)</option>
                        <option value="₹3.5L">₹3.5 Lakhs (Growth Sprint - 21 days)</option>
                        <option value="₹7L+">₹7 Lakhs+ (Scale Enterprise)</option>
                        <option value="Not sure">Not sure yet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-white/50 mb-[8px] font-bold">
                        Product Category
                      </label>
                      <select
                        {...register('projectType')}
                        className="w-full bg-[#12121E] border border-white/10 rounded-[12px] px-[16px] py-[14px] text-[14px] text-white focus:border-[#E9E6FF] outline-none transition-all cursor-pointer font-mono"
                      >
                        <option value="SaaS Product">SaaS Platform</option>
                        <option value="D2C Store">D2C Store + WhatsApp Bot</option>
                        <option value="AI Employee">AI Voice / Chat Employee</option>
                        <option value="Mobile App">Mobile App (iOS/Android)</option>
                        <option value="Other">Other Custom Build</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-white/50 mb-[8px] font-bold">
                      Product Overview
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what product you want to build and when you want to launch..."
                      {...register('message')}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-[12px] px-[16px] py-[14px] text-[14px] text-white placeholder:text-white/30 focus:border-[#E9E6FF] outline-none transition-all resize-none font-instrument"
                    />
                    {errors.message && (
                      <span className="text-xs text-rose-400 mt-1 block font-mono">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  {errorMessage && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#E9E6FF] hover:bg-white text-black py-[14px] rounded-[12px] font-mono font-bold text-[12px] uppercase tracking-[0.08em] transition-all hover:scale-[1.02] shadow-lg cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Get product in 21 days →'
                    )}
                  </button>

                </form>
              )}
            </div>

            {/* Right Column: Instant Call Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 rounded-[24px] bg-[#111113] border border-white/10 shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#E9E6FF] font-bold">
                    INSTANT SCOPE CALL
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <h3 className="text-xl font-archivo font-black text-white uppercase">Book 15-Min Scope Call</h3>
                <p className="text-xs font-instrument text-white/60 leading-relaxed">
                  Prefer talking directly in Hindi or English? Speak with our founders to get an instant scope estimate.
                </p>

                <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-mono text-[11px] text-white font-bold">WhatsApp Direct Response</div>
                      <div className="font-instrument text-[12px] text-white/50">Reply within 2 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#E9E6FF] shrink-0" />
                    <div>
                      <div className="font-mono text-[11px] text-white font-bold">15-Min Scoping Call</div>
                      <div className="font-instrument text-[12px] text-white/50">Direct with engineering lead</div>
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:hello@lazycoder.dev"
                  className="w-full border border-white/20 hover:border-white/40 text-white font-mono text-[11px] font-bold uppercase py-3 rounded-xl block text-center transition-all"
                >
                  Email us: hello@lazycoder.dev
                </a>
              </div>

            </div>

          </div>
        </section>

      </div>

    </div>
  );
}
