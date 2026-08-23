'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'SERVICES', href: '/services' },
    { name: 'WORK', href: '/work' },
    { name: 'PROCESS', href: '/process' },
    { name: 'PRICING', href: '/pricing' },
    { name: 'ABOUT', href: '/about' },
  ];

  return (
    <header className="w-full bg-[#0A0A1A]/90 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 transition-all">
      <div className="w-full px-6 sm:px-10 lg:px-16 h-[72px] flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group select-none shrink-0">
          <div className="w-9 h-9 rounded-xl bg-[#E9E6FF] text-[#0A0A1A] font-archivo font-black text-[16px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            LC
          </div>
          <span className="font-archivo font-black text-[18px] tracking-[-0.02em] text-white uppercase group-hover:text-[#E9E6FF] transition-colors">
            LAZY CODER
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[12px] font-mono font-bold tracking-[0.08em]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1.5 transition-colors uppercase ${
                  isActive
                    ? 'text-[#E9E6FF] border-b-2 border-[#E9E6FF] pb-1'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center font-mono text-[11px] font-bold uppercase tracking-[0.08em] border border-white/20 rounded-xl px-4 py-2.5 text-white hover:bg-white/5 hover:border-white/40 transition-all"
          >
            Book a call
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-mono font-bold text-[11px] tracking-[0.08em] uppercase bg-[#E9E6FF] hover:bg-white text-black px-4 py-2.5 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            Start a Project
          </Link>
        </div>

      </div>
    </header>
  );
}
