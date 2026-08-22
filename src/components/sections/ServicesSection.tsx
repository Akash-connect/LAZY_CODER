import React from 'react';
import { Rocket, Bot, Code2, Smartphone, Zap, TrendingUp } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Rocket,
      title: 'MVP Development',
      desc: 'Ship in 3 weeks not 3 months. Battle-tested architecture ready for real paying users on Day 1.',
      tags: 'Next.js • Tailwind • Supabase'
    },
    {
      icon: Bot,
      title: 'AI Automation',
      desc: 'Automate 80% ops. Custom LLM agents, background workers, and webhook triggers with zero manual lag.',
      tags: 'OpenAI • Anthropic • Workflows'
    },
    {
      icon: Code2,
      title: 'SaaS Engineering',
      desc: 'Scalable Next.js stacks designed for high throughput, seamless multi-tenancy, and high conversion UX.',
      tags: 'TypeScript • PostgreSQL • Prisma'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      desc: 'React Native that feels truly native. Smooth 60fps animations, offline sync, and app store deployment.',
      tags: 'React Native • Expo • iOS / Android'
    },
    {
      icon: Zap,
      title: 'No-Code + Code',
      desc: 'Faster with smart glue. We connect custom code with modern no-code backends for unmatched velocity.',
      tags: 'Stripe • Webhooks • Cloudflare'
    },
    {
      icon: TrendingUp,
      title: 'Ongoing Scale',
      desc: 'We stay after launch. Performance tuning, database query trimming, and continuous feature sprints.',
      tags: 'SRE • CI/CD • Observability'
    }
  ];

  return (
    <section id="services" className="relative z-10 py-[80px] md:py-[120px] border-t border-white/10 content-auto">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-[48px]">
          <div>
            <span className="text-[12px] font-mono tracking-[0.2em] text-[#F9A8FF] uppercase block mb-3 font-semibold">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold tracking-[-0.04em] leading-[1.05] max-w-[600px] text-white">
              We build things that shouldn&apos;t need rebuilding.
            </h2>
          </div>
          <p className="text-base text-white/60 max-w-[400px] md:text-right leading-relaxed">
            From MVP to scale, we automate everything boring and engineer the rest with absolute leverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <div
                key={index}
                className="p-[28px] bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 rounded-[16px] transition-all flex flex-col justify-between group cursor-pointer hover:border-white/25 hover:shadow-xl hover:shadow-purple-500/5"
              >
                <div>
                  <div className="w-[44px] h-[44px] rounded-[12px] bg-white/10 flex items-center justify-center p-[10px] mb-[20px] text-[#E9E6FF] group-hover:bg-[#E9E6FF] group-hover:text-black transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-white mb-[10px] tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-white/60 leading-[1.5] mb-6">
                    {service.desc}
                  </p>
                </div>
                <div className="text-[12px] font-mono text-white/40 pt-4 border-t border-white/5">
                  {service.tags}
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
