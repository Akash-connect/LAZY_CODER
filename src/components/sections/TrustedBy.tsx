import React from 'react';

export function TrustedBy() {
  return (
    <section className="relative z-10 py-0 pb-[80px] content-auto">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        <p className="text-center text-[13px] font-mono uppercase tracking-widest text-white/50 mb-10">
          Trusted by founders who hate wasting time
        </p>

        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 opacity-60">
          {['Linear', 'Vercel', 'Framer', 'Raycast', 'Retool', 'Perplexity'].map((brand) => (
            <div
              key={brand}
              className="text-lg md:text-xl font-bold font-mono tracking-wider text-white/70 hover:text-white hover:opacity-100 transition-all cursor-default select-none grayscale hover:grayscale-0"
            >
              // {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default TrustedBy;
