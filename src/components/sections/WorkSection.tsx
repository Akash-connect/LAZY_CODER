import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function WorkSection() {
  const projects = [
    {
      name: 'AI Invoice Automator',
      category: 'AI WORKFLOW AUTOMATION',
      metric: '+80% time saved',
      image: '/banners/banner_ai_invoice.jpg',
      gradient: 'from-[#5227FF]/40 via-[#F9A8FF]/20 to-[#0A0A1A]'
    },
    {
      name: 'Nexus Fintech Engine',
      category: 'HIGH FREQUENCY ENGINE',
      metric: '18ms P99 latency',
      image: '/banners/banner_nexus_fintech.jpg',
      gradient: 'from-[#F9A8FF]/30 via-[#38bdf8]/20 to-[#0A0A1A]'
    },
    {
      name: 'Aura Creator Market',
      category: 'CREATOR MARKETPLACE',
      metric: '10k+ creators',
      image: '/banners/banner_aura_marketplace.jpg',
      gradient: 'from-[#38bdf8]/30 via-[#5227FF]/20 to-[#0A0A1A]'
    },
    {
      name: 'Pulse SaaS Analytics',
      category: 'PRODUCT ANALYTICS',
      metric: '150M events/mo',
      image: '/banners/banner_pulse_analytics.jpg',
      gradient: 'from-[#10b981]/20 via-[#F9A8FF]/20 to-[#0A0A1A]'
    }
  ];

  return (
    <section id="work" className="relative z-10 py-[80px] md:py-[120px] border-t border-white/10 content-auto">
      <div className="w-full px-8 md:px-14 lg:px-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-[48px]">
          <div>
            <span className="text-[12px] font-mono tracking-[0.08em] text-[#E9E6FF]/60 uppercase block mb-3 font-bold">
              [02] SELECTED WORK
            </span>
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-archivo font-black tracking-[-0.04em] leading-[0.9] text-white uppercase">
              We shipped. They scaled.
            </h2>
          </div>
          <Link
            href="/work"
            className="self-start sm:self-auto inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white text-[12px] font-mono font-bold uppercase tracking-[0.08em] px-5 py-3 rounded-[12px] hover:bg-white/5 transition-all"
          >
            View all work &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {projects.map((project, index) => (
            <Link
              href="/work"
              key={index}
              className="group relative aspect-[16/10] rounded-[20px] overflow-hidden border border-white/10 bg-[#0A0A1A] hover:border-white/25 transition-all hover:scale-[1.01] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1A] via-[#0A0A1A]/50 to-black/30 pointer-events-none" />

              <div className="absolute top-5 right-5 z-10">
                <span className="bg-[#E9E6FF] text-[#0A0A1A] px-[10px] py-[4px] rounded-full text-[11px] md:text-[12px] font-bold font-mono tracking-[0.08em] uppercase shadow-md">
                  {project.metric}
                </span>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 z-10">
                <span className="text-[11px] md:text-[12px] font-mono font-bold uppercase tracking-[0.08em] text-white/50 mb-1">
                  {project.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-[20px] md:text-[24px] font-archivo font-black text-white group-hover:text-[#E9E6FF] transition-colors uppercase tracking-[-0.03em]">
                    {project.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WorkSection;
