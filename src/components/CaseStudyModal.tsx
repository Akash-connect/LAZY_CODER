'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Check, Clock, Code2, Sparkles, Quote } from 'lucide-react';
import { CaseStudyProject } from '@/lib/work';

interface CaseStudyModalProps {
  project: CaseStudyProject | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative z-10 w-full md:w-[90%] max-w-[1000px] h-full bg-[#12121A] border-l border-white/15 overflow-y-auto p-6 sm:p-10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer z-20"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Visual Mockup 16:9 */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 mb-8 flex flex-col justify-between p-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />

                {/* Top browser dots */}
                <div className="relative z-10 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-white/50 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                    {project.liveUrl || 'https://lazycoder.build'}
                  </span>
                </div>

                {/* Title inside header visual */}
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-black/40 border border-white/15 text-xs font-mono text-[#F9A8FF] uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h1>
                </div>
              </div>

              {/* Meta Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/10 mb-10">
                <div>
                  <span className="text-[11px] font-mono uppercase text-white/50 block">Category</span>
                  <span className="text-sm font-semibold text-white">{project.category}</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-white/50 block">Sprint Timeline</span>
                  <span className="text-sm font-semibold text-[#F9A8FF]">{project.metrics.buildTime}</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-white/50 block">Primary Outcome</span>
                  <span className="text-sm font-semibold text-white">{project.metrics.result}</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-white/50 block">Revenue / Scale</span>
                  <span className="text-sm font-semibold text-[#C7D2FE]">{project.metrics.revenue || 'Verified'}</span>
                </div>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-mono text-red-400 uppercase tracking-wider font-semibold block mb-2">
                    01. The Problem
                  </span>
                  <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-mono text-[#A78BFA] uppercase tracking-wider font-semibold block mb-2">
                    02. Our Solution
                  </span>
                  <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Build Log Breakdown */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#F9A8FF]" /> 3-Week Sprint Build Log
                </h3>
                <div className="space-y-4">
                  {project.buildLog.map((log, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-white/[0.025] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 rounded-lg bg-[#E9E6FF]/10 text-[#E9E6FF] font-mono text-xs font-bold shrink-0">
                          {log.week}
                        </span>
                        <div>
                          <span className="text-sm font-bold text-white block">{log.focus}</span>
                          <span className="text-xs text-white/60">{log.details}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 shrink-0">
                        <Check className="w-3.5 h-3.5" /> Completed
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-12">
                <span className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-3 font-semibold">
                  Technologies Deployed
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-mono border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Founder Testimonial */}
              <div className="p-8 rounded-2xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 relative overflow-hidden mb-8">
                <Quote className="w-8 h-8 text-white/20 mb-4" />
                <blockquote className="text-base sm:text-lg text-white/90 italic leading-relaxed mb-4">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F9A8FF] to-[#5227FF] flex items-center justify-center text-black font-bold font-mono text-xs">
                    {project.testimonial.author.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{project.testimonial.author}</div>
                    <div className="text-xs text-white/50 font-mono">
                      {project.testimonial.role}, {project.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom CTA within Drawer */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <span className="text-xs font-mono text-white/50">Ready to build something similar?</span>
              <button
                onClick={() => {
                  onClose();
                  window.location.href = '/services';
                }}
                className="bg-[#E9E6FF] hover:bg-white text-black text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all cursor-pointer"
              >
                Inquire For This Build &rarr;
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
