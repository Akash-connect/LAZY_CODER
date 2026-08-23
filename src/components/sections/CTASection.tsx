import React from 'react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section id="contact" className="relative z-10 py-[80px] md:py-[120px] border-t border-white/10 text-center content-auto">
      <div className="w-full px-8 md:px-14 lg:px-20 max-w-5xl mx-auto">
        <span className="text-[12px] font-mono tracking-[0.08em] text-[#E9E6FF]/60 uppercase block mb-3 font-bold">
          [05] START A SPRINT
        </span>
        <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-archivo font-black tracking-[-0.04em] leading-[0.9] text-white uppercase">
          Ready to be lazy?
        </h2>
        <p className="text-[16px] md:text-[18px] font-instrument font-medium text-white/60 max-w-[500px] mx-auto mt-4 mb-8 leading-[1.6] tracking-[-0.01em]">
          Tell us what you want to build. We will send you a fixed timeline and flat quote within 24 hours.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#E9E6FF] hover:bg-white text-black font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-4 rounded-[12px] shadow-lg shadow-purple-500/10 hover:scale-105 transition-all"
          >
            Start a project &rarr;
          </Link>
          <Link
            href="/process"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-white/15 hover:border-white/30 text-white font-mono font-bold text-[12px] uppercase tracking-[0.08em] px-6 py-4 rounded-[12px] hover:bg-white/5 transition-all"
          >
            See our process
          </Link>
        </div>
      </div>
    </section>
  );
}
export default CTASection;
