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
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center mb-[48px]">
          <Quote className="w-[32px] h-[32px] text-white/20 mb-6" />
          <blockquote className="text-2xl sm:text-[32px] leading-[1.2] font-medium text-white tracking-tight">
            &ldquo;LAZY CODER shipped our MVP in 18 days. Our previous agency took 3 months just to make a static mockup.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-tr from-[#F9A8FF] to-[#5227FF] flex items-center justify-center font-mono font-bold text-black text-sm">
              AK
            </div>
            <div className="text-left">
              <div className="font-bold text-white text-sm">Alexandre K.</div>
              <div className="text-xs text-white/50 font-mono">Founder @ Synapse Flow</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-[24px] rounded-[16px] bg-white/[0.05] border border-white/10 flex flex-col justify-between"
            >
              <p className="text-sm text-white/80 leading-relaxed italic">
                &ldquo;{card.quote}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-white/5 text-xs font-mono text-white/50">
                <strong className="text-white font-sans">{card.author}</strong> — {card.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default TestimonialSection;
