'use client';

import React from 'react';
import { Rocket, Bot, ShieldCheck, Smartphone, Zap, TrendingUp } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Rocket,
      title: 'Full Product Sprints',
      desc: 'Ship in 21 days not 3 months. Complete product with auth, payments, database, and admin dashboard ready for paying users on Day 1.',
      benefit: 'Fixed timeline • Guaranteed delivery'
    },
    {
      icon: Bot,
      title: 'AI Team Members',
      desc: 'Automate 80% of operations. Autonomous voice agents and customer support assistants that answer calls and resolve tickets 24/7.',
      benefit: 'Works 24/7 • Zero salary'
    },
    {
      icon: ShieldCheck,
      title: 'Payment & Finance Setup',
      desc: 'Instant UPI, credit card payments, GST-compliant invoicing, and automated bank reconciliation.',
      benefit: 'UPI Autopay • GST Ready'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      desc: 'High performance iOS and Android apps with smooth animations, offline sync, and instant push notifications.',
      benefit: 'iOS & Android • 60fps Native'
    },
    {
      icon: Zap,
      title: 'Work That Runs Itself',
      desc: 'We connect your sales, customer support, and fulfillment into automated pipelines that execute automatically.',
      benefit: 'Zero manual work • 100% automated'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      desc: 'We stay after launch. Speed optimization, continuous feature improvements, and 24/7 system monitoring.',
      benefit: '30 days free fixes • Ongoing support'
    }
  ];

  return (
    <section id="services" className="relative z-10 py-[90px] md:py-[120px] border-t border-white/10 content-auto">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-[48px]">
          <div>
            <span className="text-[11px] font-mono tracking-[0.08em] text-[#E9E6FF] uppercase block mb-3 font-bold">
              [01] WHAT WE DO
            </span>
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-archivo font-black tracking-[-0.04em] leading-[0.9] max-w-[700px] text-white uppercase">
              WE DO THE HARD WORK SO YOU CAN BE LAZY.
            </h2>
          </div>
          <p className="text-[16px] md:text-[18px] font-instrument font-medium text-white/60 max-w-[420px] md:text-right leading-[1.6]">
            We build your product in 21 days so you can focus on customers, sales, and strategy — not managing technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <div
                key={index}
                className="p-[28px] bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-[24px] transition-all duration-200 flex flex-col justify-between group cursor-pointer hover:border-[#E9E6FF]/40 hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="w-[44px] h-[44px] rounded-xl bg-[#E9E6FF]/10 flex items-center justify-center p-[10px] mb-[20px] text-[#E9E6FF] group-hover:bg-[#E9E6FF] group-hover:text-black transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-[22px] font-archivo font-black text-white mb-[10px] tracking-[-0.03em] uppercase">
                    {service.title}
                  </h3>
                  <p className="text-[15px] font-instrument text-white/60 leading-[1.6] mb-6">
                    {service.desc}
                  </p>
                </div>
                <div className="text-[11px] font-mono font-bold uppercase tracking-[0.08em] text-[#E9E6FF] pt-4 border-t border-white/5">
                  ✓ {service.benefit}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default ServicesSection;
