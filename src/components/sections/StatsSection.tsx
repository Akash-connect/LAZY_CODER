'use client';

import React from 'react';
import CountUp from '@/components/CountUp';

export function StatsSection() {
  const stats = [
    { value: 100, suffix: '+', label: 'PROJECTS SHIPPED' },
    { value: 3, suffix: 'x', label: 'FASTER DELIVERY' },
    { value: 99, suffix: '%', label: 'LESS CODE BLOAT' },
    { value: 24, suffix: '/7', label: 'AUTOMATED OPS' }
  ];

  return (
    <section className="relative z-10 py-[80px] border-y border-white/10 bg-white/[0.01] content-auto">
      <div className="w-full px-8 md:px-14 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-[44px] sm:text-[56px] md:text-[64px] font-archivo font-black tracking-[-0.04em] text-white leading-none uppercase">
                <CountUp to={stat.value} suffix={stat.suffix} duration={2} />
              </span>
              <span className="text-[11px] md:text-[12px] font-mono font-bold uppercase tracking-[0.08em] text-white/50 mt-[10px]">
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
