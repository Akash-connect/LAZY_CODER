import React from 'react';

export function StatsSection() {
  const stats = [
    { number: '100+', label: 'PROJECTS SHIPPED' },
    { number: '3x', label: 'FASTER DELIVERY' },
    { number: '99%', label: 'LESS CODE BLOAT' },
    { number: '24/7', label: 'AUTOMATED OPS' }
  ];

  return (
    <section className="relative z-10 py-[80px] border-y border-white/10 bg-white/[0.01] content-auto">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-[40px] sm:text-[48px] font-black tracking-[-0.03em] text-white font-mono leading-none">
                {stat.number}
              </span>
              <span className="text-[13px] font-mono uppercase tracking-widest text-white/50 mt-[8px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default StatsSection;
