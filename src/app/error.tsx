'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#0A0A1A] text-white flex flex-col justify-center items-center px-6 text-center">
      <div className="max-w-md p-8 rounded-2xl bg-white/5 border border-white/10 shadow-2xl">
        <span className="text-xs font-mono text-[#F9A8FF] uppercase tracking-widest block mb-2 font-bold">
          SYSTEM NOTICE
        </span>
        <h2 className="text-2xl font-bold text-white mb-3">Something went wrong</h2>
        <p className="text-sm text-white/60 mb-6 leading-relaxed">
          An unexpected error occurred while loading this page.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="bg-[#E9E6FF] hover:bg-white text-black px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border border-white/15 hover:border-white/30 text-white px-5 py-2.5 rounded-xl font-mono text-xs tracking-wider hover:bg-white/5 transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
