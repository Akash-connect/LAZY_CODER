import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function WorkSection() {
  const projects = [
    {
      name: 'Kroma AI Copilot',
      category: 'AI WORKFLOW AUTOMATION',
      metric: '+340% efficiency',
      gradient: 'from-[#5227FF]/40 via-[#F9A8FF]/20 to-[#0A0A1A]'
    },
    {
      name: 'Nexus Cloud DB',
      category: 'SAAS PLATFORM ENGINEERING',
      metric: '18ms P99 latency',
      gradient: 'from-[#F9A8FF]/30 via-[#38bdf8]/20 to-[#0A0A1A]'
    },
    {
      name: 'Aether Mobile OS',
      category: 'CROSS-PLATFORM APP',
      metric: '100k+ downloads',
      gradient: 'from-[#38bdf8]/30 via-[#5227FF]/20 to-[#0A0A1A]'
    },
    {
      name: 'Vanguard Pay Hub',
      category: 'FINTECH INTEGRATION',
      metric: '$40M+ processed',
      gradient: 'from-[#10b981]/20 via-[#F9A8FF]/20 to-[#0A0A1A]'
    }
  ];

  return (
    <section id="work" className="relative z-10 py-[80px] md:py-[120px] border-t border-white/10 content-auto">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex items-center justify-between mb-[48px]">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold tracking-[-0.04em] text-white">
            We shipped. They scaled.
          </h2>
          <Link
            href="/work"
            className="hidden sm:inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white text-xs font-mono uppercase tracking-wider px-5 py-3 rounded-[12px] hover:bg-white/5 transition-all"
          >
            View all work &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[16/10] rounded-[20px] overflow-hidden border border-white/10 bg-white/[0.03] hover:border-white/25 transition-all hover:scale-[1.01] cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />

              <div className="absolute top-5 right-5 z-10">
                <span className="bg-[#E9E6FF] text-[#0A0A1A] px-[10px] py-[4px] rounded-full text-[12px] font-bold font-mono tracking-tight shadow-md">
                  {project.metric}
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1A] via-[#0A0A1A]/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-[13px] font-mono uppercase tracking-wider text-white/50 mb-1">
                  {project.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-[22px] font-bold text-white group-hover:text-[#E9E6FF] transition-colors">
                    {project.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WorkSection;
