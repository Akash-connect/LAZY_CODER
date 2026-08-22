'use client';

import SlicedWaves from '@/components/SlicedWaves';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-81px)] w-full overflow-hidden flex flex-col justify-center px-6 md:px-12 py-16">
      {/* WebGL Background */}
      <div className="absolute inset-0 z-0 opacity-90">
        <SlicedWaves
          color1="#FF9FFC"
          color2="#5227FF"
          color3="#B497CF"
          columns={18}
          rows={10}
          barThickness={0.11}
          speed={0.22}
          travel={0.9}
          waveSpread={0.8}
          rowOffset={1.2}
          softness={0.08}
          glow={0.18}
          brightness={1.2}
          contrast={1.45}
          opacity={0.48}
          orientation="horizontal"
          alternate={false}
          mouseInteraction={true}
          mouseStrength={1.1}
          mouseRadius={0.38}
          grain={true}
          grainIntensity={0.04}
        />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-90 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl w-full text-left ml-0 md:ml-3">
        <span className="inline-block bg-[#FF9FFC]/10 border border-[#FF9FFC]/30 text-[#FFD9FF] text-xs font-bold tracking-[0.14em] uppercase px-3 py-2 rounded-full mb-5">
          Doing less. Building more.
        </span>

        <h1 className="m-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.92] max-w-4xl font-sans text-white">
          We do the hard work so you can be{' '}
          <span className="relative inline-block text-[#120F1C] px-2 py-0.5 mx-1 bg-gradient-to-r from-[#FF9FFC] via-[#B497CF] to-[#C0CCFF]">
            LAZY
          </span>
          .
        </h1>

        <p className="mt-6 text-gray-200 opacity-85 max-w-2xl text-lg sm:text-xl leading-relaxed font-sans">
          LAZY CODER is a product studio that builds fast, scalable, and automated software. We write less code that does more.
        </p>

        <div className="mt-9 flex items-center gap-4 flex-wrap">
          <Link
            href="/services"
            className="bg-gradient-to-r from-[#F5EBFF] via-[#E8D8FF] to-[#DAD4FF] text-[#120F1C] px-6 py-4 rounded-xl font-extrabold text-base shadow-[0_18px_40px_rgba(170,126,255,0.26)] hover:scale-[1.02] transition-transform"
          >
            Start a Project →
          </Link>

          <button className="bg-white/5 text-[#F5F5F5] border border-white/15 px-6 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-colors">
            View Our Work
          </button>
        </div>
      </div>
    </main>
  );
}
