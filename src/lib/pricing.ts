export interface PricingTier {
  id: string;
  name: string;
  price: string;
  billing: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  ctaStyle: 'outline' | 'gradient' | 'white';
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'STARTER MVP',
    price: '$5k',
    billing: '/one-time',
    description: 'High-conversion landing page + core functional MVP shipped in 2 weeks.',
    popular: false,
    features: [
      'Next.js 14 App Router + Tailwind CSS',
      'Core Functional Web App (1-2 Key Workflows)',
      'Authentication & Database Setup (Supabase)',
      '2 Weeks Fixed Delivery Timeline',
      '1 Post-Launch Revision Round',
      '14 Days Included Bug Support',
      '100% Full Codebase Ownership'
    ],
    ctaText: 'Start Starter MVP',
    ctaStyle: 'outline'
  },
  {
    id: 'growth',
    name: 'GROWTH SAAS & AI',
    price: '$12k',
    billing: '/one-time',
    description: 'Complete full-stack SaaS or automated AI product shipped in 3 weeks.',
    popular: true,
    features: [
      'Everything in Starter MVP included',
      'Full-Stack Architecture (Multi-tenant, RBAC)',
      'Custom AI Pipeline / Agent Integration',
      'Stripe Payments & Subscription Billing',
      '3 Weeks Fixed Delivery Timeline',
      'Unlimited Sprint Revisions',
      '30 Days Dedicated Post-Launch Support',
      'Interactive WebGL / Framer-Motion Polish'
    ],
    ctaText: 'Start Growth Build',
    ctaStyle: 'gradient'
  },
  {
    id: 'scale',
    name: 'SCALE ENTERPRISE',
    price: '$25k+',
    billing: '/one-time',
    description: 'Complex multi-platform ecosystem, mobile apps & enterprise infrastructure.',
    popular: false,
    features: [
      'Everything in Growth SaaS included',
      'Cross-Platform Mobile App (React Native/Expo)',
      'High-Throughput Microservice Architecture',
      'Enterprise SLA & Dedicated Team Lead',
      '4-6 Weeks Milestone Sprints',
      '90 Days SRE & Performance Monitoring',
      'Custom Security Audits & Compliance'
    ],
    ctaText: 'Talk to Architecture Lead',
    ctaStyle: 'white'
  }
];

export const pricingAddOns = [
  {
    title: 'Custom AI Agent Integration',
    price: '$1,500',
    desc: 'Autonomous LLM agent pipeline connected to your internal tools and APIs.'
  },
  {
    title: 'React Native Mobile Companion',
    price: '$3,500',
    desc: 'Native iOS & Android mobile companion app synced with your web backend.'
  },
  {
    title: 'Dedicated SRE & Maintenance',
    price: '$1,000/mo',
    desc: 'Continuous performance tuning, database vacuuming, and weekly feature sprints.'
  }
];

export const pricingFaqs = [
  {
    q: 'What if I need changes after launch?',
    a: 'Every project includes 14 to 90 days of dedicated post-launch support and bug warranties. If you want ongoing feature additions, you can book weekly sprint blocks or our monthly SRE maintenance plan.'
  },
  {
    q: 'Do you do equity deals or revenue share?',
    a: 'We operate strictly on fixed-price cash sprints. This ensures 100% alignment, rapid execution, and means you keep 100% of your company equity and profits.'
  },
  {
    q: 'How fast can you start?',
    a: 'We can typically kick off within 48 to 72 hours of contract approval and technical scope alignment.'
  },
  {
    q: 'What if you do not deliver on time?',
    a: 'We adhere to strict milestone contracts. If we miss our agreed-upon 21-day timeline due to our own blockers, we work at zero cost until the full scope is live in production.'
  },
  {
    q: 'Do you sign an NDA before we start?',
    a: 'Yes, absolutely. We sign mutual non-disclosure agreements before discussing proprietary concepts, codebase access, or business architecture.'
  },
  {
    q: 'What is your refund policy?',
    a: 'If after the Day 1-2 Discovery phase you feel we are not the right fit before engineering begins, you receive an immediate 100% refund on remaining sprint funds.'
  }
];
