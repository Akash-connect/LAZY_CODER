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
    <header className="w-full bg-[#070b15]/80 backdrop-blur-xl border-b border-white/[0.08] sticky top-0 z-50 transition-all">
      <div className="w-full px-8 md:px-14 lg:px-20 h-[72px] flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group select-none shrink-0">
          {/* Logo Badge Icon: <z/> */}
          <div className="w-[38px] h-[38px] rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center shadow-inner group-hover:border-white/25 group-hover:bg-white/[0.08] transition-all">
            <span className="font-mono text-[13px] font-bold tracking-tight text-white/90">
              &lt;<span className="text-[#a5b4fc]">z</span>/<span className="text-white/60">&gt;</span>
            </span>
          </div>

          {/* Brand Name */}
          <span className="font-sans text-[15px] font-extrabold tracking-[0.08em] text-white uppercase group-hover:text-[#a5b4fc] transition-colors">
            LAZY CODER
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14 text-[12px] font-semibold tracking-[0.14em]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && !link.href.startsWith('/#') && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1.5 transition-colors uppercase ${
                  isActive
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Actions */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center justify-center border border-white/20 rounded-md px-5 py-2.5 text-[12px] font-mono font-medium tracking-wider text-white/90 hover:bg-white/10 hover:border-white/40 transition-all"
          >
            Book a call
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-[#a5b4fc] hover:bg-[#c7d2fe] text-[#070b15] font-sans font-bold text-[11px] tracking-[0.08em] uppercase px-5 py-2.5 rounded-md shadow-lg shadow-indigo-500/10 transition-all hover:scale-105"
          >
            START A PROJECT
          </Link>
        </div>

      </div>
    </header>
  );
}
