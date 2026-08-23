import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#0A0A1A] text-white flex flex-col justify-center items-center px-6">
      {/* Centered High-Performance Spinner */}
      <div className="relative mb-8 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-white/10 border-t-[#E9E6FF] animate-spin" />
        <span className="absolute font-mono text-[10px] text-white/50">&lt;z/&gt;</span>
      </div>

      {/* Pulse Skeleton */}
      <div className="w-full max-w-2xl space-y-4 animate-pulse text-center flex flex-col items-center">
        <div className="w-24 h-4 bg-white/10 rounded-full" />
        <div className="w-3/4 h-10 bg-white/10 rounded-xl" />
        <div className="w-1/2 h-5 bg-white/5 rounded-lg" />
      </div>
    </div>
  );
}
