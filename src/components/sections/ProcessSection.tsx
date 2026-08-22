import React from 'react';

export function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: '1. You talk',
      desc: '15 min discovery call. We map everything, identify blockers, and frame the scope.'
    },
    {
      step: '02',
      title: '2. We build',
      desc: 'Sprint cycles, daily async updates, and staging previews. Zero pointless meetings.'
    },
    {
      step: '03',
      title: '3. You chill',
      desc: 'We launch, scale, and automate your core operations so you can focus on growth.'
    }
  ];

  return (
    <section id="process" className="relative z-10 py-[80px] md:py-[120px] bg-white/[0.02] border-t border-white/10 content-auto">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="text-center max-w-[500px] mx-auto mb-[60px]">
          <span className="text-[12px] font-mono tracking-[0.2em] text-[#F9A8FF] uppercase block mb-3 font-semibold">
            SIMPLE & FAST
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold tracking-[-0.04em] text-white">
            A lazy process that actually works.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent w-full pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((stepItem, index) => (
              <div
                key={index}
                className="relative p-8 rounded-[16px] bg-[#0A0A1A] border border-white/10 hover:border-white/25 transition-all overflow-hidden flex flex-col justify-between"
              >
                <span className="absolute -top-4 -right-2 text-[80px] font-black text-white/[0.06] font-mono select-none pointer-events-none">
                  {stepItem.step}
                </span>

                <div>
                  <span className="text-xs font-mono font-bold text-[#F9A8FF] uppercase tracking-wider block mb-2">
                    Phase {stepItem.step}
                  </span>
                  <h3 className="text-[22px] font-bold text-white tracking-tight">
                    {stepItem.title}
                  </h3>
                  <p className="text-[15px] text-white/60 leading-[1.6] mt-[12px]">
                    {stepItem.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProcessSection;
