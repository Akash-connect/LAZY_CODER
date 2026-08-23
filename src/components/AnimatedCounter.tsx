'use client';

import CountUp from '@/components/CountUp';

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  className = ''
}: CounterProps) {
  return (
    <CountUp
      to={value}
      from={0}
      prefix={prefix}
      suffix={suffix}
      duration={2}
      className={className}
    />
  );
}
