'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StrokeTextProps {
  text?: string;
  strokeColor?: string;
  fillColor?: string;
  className?: string;
}

export default function StrokeText({
  text = 'LAZY',
  strokeColor = '#F9A8FF',
  fillColor = '#E9E6FF',
  className = ''
}: StrokeTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {/* SVG Animated Stroke + Fill using Framer-Motion (No GSAP) */}
      <svg
        viewBox="0 0 240 80"
        className="w-auto h-[0.95em] inline-block align-middle overflow-visible"
        aria-label={text}
        role="img"
      >
        <motion.text
          x="50%"
          y="72%"
          textAnchor="middle"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="font-deathstar text-[68px] select-none tracking-[0.08em]"
          style={{ fontFamily: '"Death Star", monospace' }}
          initial={{ strokeDasharray: 260, strokeDashoffset: 260, fillOpacity: 0 }}
          animate={{ strokeDashoffset: 0, fillOpacity: 1 }}
          transition={{
            strokeDashoffset: { duration: 1.2, ease: 'easeOut' },
            fillOpacity: { duration: 0.6, delay: 0.6, ease: 'easeIn' }
          }}
        >
          {text}
        </motion.text>
      </svg>
    </span>
  );
}
