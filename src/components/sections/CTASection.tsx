import React from 'react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section id="contact" className="relative z-10 py-[80px] md:py-[120px] border-t border-white/10 text-center content-auto">
      <div className="max-w-[600px] mx-auto px-6 sm:px-8">
        <span className="text-[12px] font-mono tracking-[0.2em] text-[#F9A8FF] uppercase block mb-3 font-semibold">
          STOP WASTING TIME
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-extrabold tracking-[-0.04em] leading-[1] text-white">
          Ready to be lazy?
        </h2>
        <p className="text-base text-white/60 max-w-[420px] mx-auto mt-4 mb-8 leading-relaxed">
          Tell us what you want to build. We will send you a fixed timeline and flat quote within 24 hours.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#E9E6FF] hover:bg-white text-black font-semibold text-sm px-8 py-4 rounded-[12px] shadow-lg shadow-purple-500/10 hover:scale-105 transition-all"
          >
            Start a project &rarr;
          </Link>
          <Link
            href="/process"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-white/15 hover:border-white/30 text-white font-mono text-xs tracking-wider px-6 py-4 rounded-[12px] hover:bg-white/5 transition-all"
          >
            See our process
          </Link>
        </div>
      </div>
    </section>
  );
}
export default CTASection;
