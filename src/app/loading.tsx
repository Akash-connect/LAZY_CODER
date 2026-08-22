import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white flex flex-col justify-center items-center px-6">
      <div className="w-full max-w-4xl space-y-6 animate-pulse">
        <div className="w-32 h-6 bg-white/10 rounded-full" />
        <div className="w-3/4 h-16 bg-white/10 rounded-2xl" />
        <div className="w-1/2 h-8 bg-white/5 rounded-xl" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10">
          <div className="h-48 bg-white/5 rounded-2xl border border-white/5" />
          <div className="h-48 bg-white/5 rounded-2xl border border-white/5" />
          <div className="h-48 bg-white/5 rounded-2xl border border-white/5" />
        </div>
      </div>
    </div>
  );
}
