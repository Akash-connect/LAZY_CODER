'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { RotateCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Handled application boundary error:', error);
  }, [error]);

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#0A0A1A] text-white flex flex-col justify-center items-center px-6 text-center">
      <div className="max-w-md p-8 rounded-[24px] bg-white/[0.04] border border-white/10 shadow-2xl">
        <span className="text-[11px] font-mono text-[#F9A8FF] uppercase tracking-widest block mb-2 font-bold">
          404 // BOUNDARY
        </span>
        <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
          Something broke, but we&apos;re lazy so we auto-fixed.
        </h2>
        <p className="text-sm text-white/60 mb-6 leading-relaxed">
          The application caught an unexpected state. You can retry the previous action or jump back to our homepage.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-[#E9E6FF] hover:bg-white text-black px-5 py-2.5 rounded-[12px] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
          >
            <RotateCw className="w-3.5 h-3.5" /> Retry
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white px-5 py-2.5 rounded-[12px] font-mono text-xs tracking-wider hover:bg-white/5 transition-all"
          >
            <Home className="w-3.5 h-3.5" /> Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
