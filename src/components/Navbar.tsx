'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/10 bg-slate-950/60 backdrop-blur-md sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3 bg-transparent border-none p-0 cursor-pointer group">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#FF9FFC] via-[#B497CF] to-[#5227FF] text-white font-mono font-black text-base shadow-[0_0_25px_rgba(162,106,255,0.35)] transition-transform group-hover:scale-105">
          L
        </div>
        <div className="text-lg font-bold tracking-[0.14em] font-mono uppercase text-[#F4E9FF]">
          LAZY CODER
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-7 text-sm font-sans text-[#F2E8FF]">
        <Link
          href="/services"
          className={`transition-opacity hover:opacity-100 ${
            pathname === '/services' ? 'opacity-100 font-semibold text-[#FF9FFC]' : 'opacity-80'
          }`}
        >
          Services
        </Link>
        <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
          Work
        </Link>
        <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
          Process
        </Link>
        <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
          Pricing
        </Link>
        <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
          Contact
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <button className="hidden sm:block bg-white/5 text-[#F8EEFF] border border-white/10 rounded-xl px-4 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors">
          Book a call
        </button>
        <button className="bg-gradient-to-r from-[#FF9FFC] via-[#B497CF] to-[#5227FF] text-white border-none rounded-xl px-4 py-2.5 text-sm font-extrabold shadow-[0_12px_28px_rgba(120,76,255,0.36)] hover:brightness-110 transition-all">
          Start a Project
        </button>
      </div>
    </header>
  );
}
