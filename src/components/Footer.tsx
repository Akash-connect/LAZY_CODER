'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="w-full bg-[#050814] border-t border-white/10 text-white py-16 px-6 sm:px-10 lg:px-16 mt-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Left 5 cols */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#E9E6FF] text-[#0A0A1A] font-archivo font-black text-[14px] flex items-center justify-center">
              LC
            </div>
            <span className="font-archivo font-black text-[20px] uppercase text-white">
              LAZY CODER
            </span>
          </div>
          <p className="font-instrument text-[14px] text-white/60 leading-relaxed">
            We build software that runs itself so you can focus on customers, not technology. Fixed price. 21 days delivery guarantee.
          </p>
          <div className="font-mono text-[11px] text-[#E9E6FF]">
            ✓ 520+ founders receiving weekly product teardowns
          </div>
        </div>

        {/* Middle 3 cols */}
        <div className="md:col-span-3 space-y-3 font-mono text-[12px]">
          <div className="font-bold text-white/40 uppercase tracking-wider mb-2">QUICK LINKS</div>
          <div><Link href="/services" className="text-white/70 hover:text-white transition-colors">Services & Pricing</Link></div>
          <div><Link href="/work" className="text-white/70 hover:text-white transition-colors">Shipped Products</Link></div>
          <div><Link href="/pricing" className="text-white/70 hover:text-white transition-colors">Pricing & Guarantee</Link></div>
          <div><Link href="/about" className="text-white/70 hover:text-white transition-colors">About Studio</Link></div>
        </div>

        {/* Right 4 cols */}
        <div className="md:col-span-4 space-y-3">
          <div className="font-mono text-[11px] font-bold text-white/40 uppercase tracking-wider">
            PRODUCT INSIGHTS FOR FOUNDERS
          </div>
          <p className="font-instrument text-[13px] text-white/60">
            Join 500+ Indian founders receiving our breakdown on automated operations.
          </p>

          {subscribed ? (
            <div className="p-3 bg-[#E9E6FF]/10 border border-[#E9E6FF] rounded-xl font-mono text-[11px] text-[#E9E6FF]">
              ✓ You are subscribed! We will send you our next teardown.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="founder@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 font-mono text-[12px] text-white placeholder:text-white/30 focus:outline-none focus:border-[#E9E6FF] flex-1"
              />
              <button
                type="submit"
                className="bg-[#E9E6FF] hover:bg-white text-black font-mono font-bold text-[11px] uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all"
              >
                Join
              </button>
            </form>
          )}
        </div>

      </div>

      <div className="w-full mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-white/40">
        <div>
          &copy; {new Date().getFullYear()} LAZY CODER STUDIO. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter / X</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
