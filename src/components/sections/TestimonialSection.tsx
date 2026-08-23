import React from 'react';
import { Quote } from 'lucide-react';

export function TestimonialSection() {
  const cards = [
    {
      quote: 'The AI automation pipelines they configured saved our operations team 25 hours per week immediately.',
      author: 'Elena R.',
      role: 'COO at TensorScale'
    },
    {
      quote: 'Extremely clean Next.js + TypeScript codebase. Handed over with zero tech debt and full documentation.',
      author: 'Marcus V.',
      role: 'Head of Product at Vaultiq'
    }
  ];

  return (
    <section className="relative z-10 py-[80px] md:py-[120px] content-auto">
      <div className="w-full px-8 md:px-14 lg:px-20">
        <div className="max-w-[850px] mx-auto text-center flex flex-col items-center mb-[48px]">
          <span className="text-[12px] font-mono tracking-[0.08em] text-[#E9E6FF]/60 uppercase block mb-4 font-bold">
            [04] CLIENT FEEDBACK
          </span>
          <blockquote className="text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] font-archivo font-black text-white tracking-[-0.04em] uppercase">
            &ldquo;LAZY CODER shipped our MVP in 18 days. Our previous agency took 3 months just to make a static mockup.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-tr from-[#F9A8FF] to-[#5227FF] flex items-center justify-center font-mono font-bold text-black text-sm">
              AK
            </div>
            <div className="text-left">
              <div className="font-archivo font-black text-white text-sm uppercase">Alexandre K.</div>
              <div className="text-[11px] text-white/50 font-mono uppercase tracking-[0.08em]">Founder @ Synapse Flow</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-[28px] rounded-[16px] bg-white/[0.05] border border-white/10 flex flex-col justify-between"
            >
              <p className="text-[15px] md:text-[16px] font-instrument font-medium text-white/80 leading-[1.6] italic">
                &ldquo;{card.quote}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-white/5 text-[11px] md:text-[12px] font-mono font-bold uppercase tracking-[0.08em] text-white/50">
                <strong className="text-white font-archivo">{card.author}</strong> — {card.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default TestimonialSection;
