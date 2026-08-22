'use client';

import SlicedWaves from '@/components/SlicedWaves';

const services = [
  {
    title: 'Product Strategy',
    text: 'We turn fuzzy ideas into sharp roadmaps, measurable product bets, and launch plans that fit real business goals.',
    accent: '#FF9FFC'
  },
  {
    title: 'Custom Web Platforms',
    text: 'From marketing sites to complex SaaS experiences, we design and build systems that are fast, clear, and scalable.',
    accent: '#B497CF'
  },
  {
    title: 'AI Workflow Automation',
    text: 'We automate repetitive work, untangle operational bottlenecks, and turn tribal knowledge into useful software.',
    accent: '#8B5CF6'
  },
  {
    title: 'Frontend Engineering',
    text: 'We build premium interfaces with modern React patterns, performance-minded architecture, and conversion-focused UX.',
    accent: '#C084FC'
  },
  {
    title: 'API & Integrations',
    text: 'We connect the tools your team already uses so your stack actually works together instead of creating more chaos.',
    accent: '#A78BFA'
  },
  {
    title: 'Maintenance & Growth',
    text: 'We keep the product healthy after launch with optimization, bug prevention, and iterative feature delivery.',
    accent: '#D8B4FE'
  }
];

const processSteps = [
  'Discovery & product framing',
  'Design systems & UX flow',
  'Build + ship in focused sprints',
  'Measure, iterate, and scale'
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-[calc(100vh-81px)] px-6 md:px-12 py-12">
      {/* Background canvas */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <SlicedWaves
          color1="#FF9FFC"
          color2="#5227FF"
          color3="#B497CF"
          columns={16}
          rows={9}
          barThickness={0.12}
          speed={0.18}
          travel={0.85}
          waveSpread={0.8}
          rowOffset={1.1}
          softness={0.06}
          glow={0.12}
          brightness={1.15}
          contrast={1.4}
          opacity={0.3}
          orientation="horizontal"
          alternate={false}
          mouseInteraction={true}
          mouseStrength={0.9}
          mouseRadius={0.32}
          grain={true}
          grainIntensity={0.04}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="inline-block bg-[#FF9FFC]/10 border border-[#FF9FFC]/30 text-[#FFD9FF] px-3.5 py-2 rounded-full text-xs tracking-[0.14em] uppercase font-bold mb-5">
          Services
        </div>

        <h1 className="m-0 text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[0.98] max-w-4xl font-sans">
          We build the software layer behind ambitious companies.
        </h1>

        <p className="mt-4 max-w-2xl text-[#E7E0F5] text-lg sm:text-xl leading-relaxed opacity-90 font-sans">
          LAZY CODER helps startups and established teams ship better digital products faster — without hiring a bloated internal team or losing momentum.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 shadow-[0_22px_60px_rgba(12,10,24,0.35)] backdrop-blur-md"
            >
              <div
                className="w-3 h-3 rounded-full mb-4"
                style={{
                  backgroundColor: service.accent,
                  boxShadow: `0 0 22px ${service.accent}`
                }}
              />
              <h3 className="m-0 text-[#F9F5FF] text-xl font-bold font-sans">
                {service.title}
              </h3>
              <p className="mt-3 text.text-[#DDD6F6] text-sm leading-relaxed opacity-85 font-sans">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-7 rounded-3xl bg-slate-900/75 border border-white/10 shadow-[0_22px_60px_rgba(12,10,24,0.35)]">
          <div className="text-[#FFD9FF] text-xs tracking-[0.14em] uppercase font-bold mb-5">
            Our process
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.06]"
              >
                <div className="text-[#FF9FFC] text-xs font-bold tracking-[0.12em] uppercase mb-2.5">
                  0{index + 1}
                </div>
                <div className="text-[#F5F1FF] text-base font-semibold leading-snug font-sans">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
