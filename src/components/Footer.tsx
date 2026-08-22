import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050914] border-t border-white/[0.08] text-white py-12 px-8 md:px-14 lg:px-20 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-sans text-sm font-extrabold tracking-wider uppercase text-white">
            LAZY CODER
          </span>
          <span className="font-mono text-xs text-[#94a3b8]">
            &copy; {new Date().getFullYear()} LAZY CODER. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Right: Legal & Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs font-medium text-[#94a3b8]">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <a
            href="https://github.com/Akash-connect"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Github
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}
