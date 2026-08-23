export interface CaseStudyProject {
  id: string;
  title: string;
  category: 'SaaS' | 'AI Automation' | 'Fintech' | 'Marketplace' | 'Mobile';
  headline: string;
  description: string;
  gradient: string;
  bannerImage?: string;
  metrics: {
    buildTime: string;
    result: string;
    revenue?: string;
  };
  tags: string[];
  featured?: boolean;
  liveUrl?: string;
  problem: string;
  solution: string;
  buildLog: {
    week: string;
    focus: string;
    details: string;
  }[];
  stack: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const workProjects: CaseStudyProject[] = [
  {
    id: 'ai-invoice-automator',
    title: 'AI Invoice Automator',
    category: 'AI Automation',
    headline: 'AI Invoice Automator — $50k MRR in 60 days',
    description: 'Autonomous multi-modal document extraction and automated reconciliation platform for high-volume enterprise accounting teams.',
    gradient: 'from-purple-600/30 via-indigo-600/20 to-blue-900/40',
    bannerImage: '/banners/banner_ai_invoice.jpg',
    metrics: {
      buildTime: '3 Weeks Build',
      result: '80% Time Saved',
      revenue: '$50k MRR'
    },
    tags: ['AI / LLM', 'Next.js 14', 'OCR', 'Supabase'],
    featured: true,
    liveUrl: 'https://invoice-automator.demo',
    problem: 'The client spent 35+ hours weekly manually extracting data from unstructured supplier PDFs, invoices, and receipts, leading to accounting backlogs and expensive errors.',
    solution: 'We engineered an async multi-agent OCR pipeline using Claude 3.5 Sonnet and GPT-4o vision with automated reconciliation webhooks directly into Stripe and Xero.',
    buildLog: [
      { week: 'Week 1', focus: 'Architecture & OCR Pipeline', details: 'Configured edge parser queue, vector search for supplier matching, and schema contracts.' },
      { week: 'Week 2', focus: 'Frontend UI & Review Portal', details: 'Built Next.js 14 dashboard with live document split-view and micro-edit validation.' },
      { week: 'Week 3', focus: 'ERP Sync & Zero-Downtime Launch', details: 'Integrated enterprise webhook queues, OAuth integrations, and automated stress testing.' }
    ],
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'OpenAI', 'Anthropic', 'PostgreSQL', 'Redis'],
    testimonial: {
      quote: 'LAZY CODER built in 3 weeks what our in-house engineering candidates estimated would take 6 months. It generated $50k MRR within our first 60 days.',
      author: 'Marcus Vance',
      role: 'Co-Founder & CEO',
      company: 'AutoLedger Systems'
    }
  },
  {
    id: 'fintech-dashboard',
    title: 'Nexus Fintech Engine',
    category: 'Fintech',
    headline: 'Real-time multi-currency settlement & risk telemetry',
    description: 'High-frequency cross-border payment gateway processing multi-currency settlements with sub-50ms latency.',
    gradient: 'from-blue-600/30 via-cyan-500/20 to-slate-900/40',
    bannerImage: '/banners/banner_nexus_fintech.jpg',
    metrics: {
      buildTime: '4 Weeks Build',
      result: '18ms P99 Latency',
      revenue: '$1M+ Processed'
    },
    tags: ['Fintech', 'WebSockets', 'Go Engine', 'Redis'],
    featured: false,
    liveUrl: 'https://nexus-pay.demo',
    problem: 'Legacy API response times caused checkout drop-offs and lacked real-time fraud telemetry for high-volume transactions.',
    solution: 'Built an optimized edge routing layer with WebSocket ticker streams, real-time risk scoring, and zero-downtime ledger reconciliation.',
    buildLog: [
      { week: 'Week 1', focus: 'Ledger Schema & Security', details: 'Implemented double-entry accounting schema with idempotent transaction keys.' },
      { week: 'Week 2', focus: 'Real-time Data Streams', details: 'Engineered WebSocket pub/sub with Redis cluster for instant balance updates.' },
      { week: 'Week 3', focus: 'Compliance & Gateway Hooks', details: 'PCI-DSS audit compliance layers, Stripe & Plaid integrations.' },
      { week: 'Week 4', focus: 'Load Testing & Rollout', details: 'Simulated 10,000 req/sec stress tests and verified zero data drift.' }
    ],
    stack: ['Next.js', 'Go', 'TypeScript', 'Redis', 'PostgreSQL', 'Stripe'],
    testimonial: {
      quote: 'The speed of execution was staggering. Our P99 latency dropped by 70% and conversion spiked immediately.',
      author: 'David Chen',
      role: 'Head of Infrastructure',
      company: 'PayNexus Corp'
    }
  },
  {
    id: 'creator-marketplace',
    title: 'Aura Creator Marketplace',
    category: 'Marketplace',
    headline: 'High-conversion digital goods marketplace for 10k+ creators',
    description: 'Scalable two-sided creator platform with instant payouts, custom store builders, and automated affiliate split engines.',
    gradient: 'from-fuchsia-600/30 via-pink-500/20 to-purple-900/40',
    bannerImage: '/banners/banner_aura_marketplace.jpg',
    metrics: {
      buildTime: '3 Weeks Build',
      result: '10k+ Creators',
      revenue: '$450k GMV'
    },
    tags: ['Marketplace', 'Next.js', 'Stripe Connect', 'Tailwind'],
    featured: false,
    liveUrl: 'https://aura-market.demo',
    problem: 'Existing creator platforms charged 20% fees and took 7 days to settle merchant payouts with no custom storefront capabilities.',
    solution: 'Engineered a decentralized store generator with Stripe Connect custom accounts and instant single-click checkouts.',
    buildLog: [
      { week: 'Week 1', focus: 'Store Builder Engine', details: 'Dynamic visual builder with drag-and-drop component rendering.' },
      { week: 'Week 2', focus: 'Stripe Connect Split Logic', details: 'Automated 1-click merchant onboarding and revenue split escrow.' },
      { week: 'Week 3', focus: 'Analytics & SEO Engine', details: 'Automated dynamic OG image generation and fast static storefronts.' }
    ],
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Stripe Connect', 'Supabase'],
    testimonial: {
      quote: 'Our creators love the instant storefront speeds. We scaled from zero to 10k users without a single infrastructure hiccup.',
      author: 'Chloe Simmons',
      role: 'Founder',
      company: 'Aura Collective'
    }
  },
  {
    id: 'saas-analytics',
    title: 'Pulse SaaS Analytics',
    category: 'SaaS',
    headline: 'Zero-latency event pipeline & interactive cohort metrics',
    description: 'Privacy-focused product analytics platform capable of streaming millions of user behavioral events with instant cohort aggregation.',
    gradient: 'from-emerald-600/30 via-teal-500/20 to-slate-900/40',
    bannerImage: '/banners/banner_pulse_analytics.jpg',
    metrics: {
      buildTime: '2 Weeks Build',
      result: '300% User Growth',
      revenue: '150M Events/Mo'
    },
    tags: ['SaaS', 'ClickHouse', 'TypeScript', 'Framer Motion'],
    featured: false,
    liveUrl: 'https://pulse-analytics.demo',
    problem: 'Standard analytics tools were bloated, slow to render custom funnel queries, and required cookie consent banners.',
    solution: 'Lightweight 1.2KB script with ClickHouse columnar storage for real-time funnel and retention cohort queries.',
    buildLog: [
      { week: 'Week 1', focus: 'Ingestion Pipeline & Storage', details: 'Built edge collector with ClickHouse ingestion queues.' },
      { week: 'Week 2', focus: 'Interactive Visual Dashboard', details: 'Designed real-time chart canvas and automated email report workers.' }
    ],
    stack: ['Next.js', 'TypeScript', 'ClickHouse', 'Tailwind CSS', 'Docker'],
    testimonial: {
      quote: 'Queries that took 12 seconds on our old platform now render in under 40 milliseconds. Unbelievable craftsmanship.',
      author: 'Julian Croft',
      role: 'VP of Product',
      company: 'PulseMetrics'
    }
  },
  {
    id: 'mobile-fitness-ai',
    title: 'AuraFit Mobile AI',
    category: 'Mobile',
    headline: 'Real-time computer vision pose analysis on device',
    description: 'Next-generation fitness app using on-device ML vision to track workout form, count repetitions, and adapt training routines.',
    gradient: 'from-amber-500/30 via-orange-600/20 to-purple-950/40',
    bannerImage: '/banners/banner_aurafit_mobile.jpg',
    metrics: {
      buildTime: '4 Weeks Build',
      result: '50k+ Downloads',
      revenue: '4.9 App Rating'
    },
    tags: ['Mobile', 'React Native', 'Expo', 'TensorFlow Lite'],
    featured: false,
    liveUrl: 'https://aurafit.demo',
    problem: 'Users struggled with poor workout form and dropped personal trainer subscriptions due to high monthly fees.',
    solution: 'Built a 60fps React Native app with on-device CoreML/TF Lite camera tracking and personalized voice feedback.',
    buildLog: [
      { week: 'Week 1', focus: 'Vision Model Integration', details: 'Integrated lightweight pose detection with on-device TPU acceleration.' },
      { week: 'Week 2', focus: 'Audio Coach Engine', details: 'Engineered dynamic real-time voice feedback cues based on joint angles.' },
      { week: 'Week 3', focus: 'Gamification & Social Sync', details: 'Added streak tracking, leaderboards, and offline SQLite synchronization.' },
      { week: 'Week 4', focus: 'App Store Deployment', details: 'Beta tested on TestFlight and launched with zero store rejection cycles.' }
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'TensorFlow Lite', 'Supabase'],
    testimonial: {
      quote: 'The app achieved 50,000 downloads in month one with a 4.9-star rating. The execution was world-class.',
      author: 'Sophia Zhang',
      role: 'Co-Founder',
      company: 'AuraFit Health'
    }
  },
  {
    id: 'ecom-automation',
    title: 'Synapse Ecom Automation',
    category: 'AI Automation',
    headline: 'Automated fulfillment, inventory forecasting & customer triage',
    description: 'Complete operational automation hub bridging Shopify, Amazon, and 3PL warehouses with proactive restock predictors.',
    gradient: 'from-violet-600/30 via-fuchsia-600/20 to-slate-900/40',
    bannerImage: '/banners/banner_synapse_ecom.jpg',
    metrics: {
      buildTime: '2 Weeks Build',
      result: '$200k Ops Saved',
      revenue: '99.8% Sync Rate'
    },
    tags: ['AI Ops', 'Shopify Plus', 'FastAPI', 'PostgreSQL'],
    featured: false,
    liveUrl: 'https://synapse-ecom.demo',
    problem: 'Multi-channel inventory discrepancies caused over-selling, lost shipments, and thousands in manual customer support overhead.',
    solution: 'Centralized webhook aggregation engine with automated supplier re-ordering triggers and AI customer ticket auto-resolution.',
    buildLog: [
      { week: 'Week 1', focus: 'Multi-Channel Sync', details: 'Built real-time inventory locks across Shopify, Amazon, and warehouse APIs.' },
      { week: 'Week 2', focus: 'Predictive Restock & AI Triage', details: 'Trained demand forecasting model and integrated Zendesk AI resolution flow.' }
    ],
    stack: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'Shopify API'],
    testimonial: {
      quote: 'Saved over $200k in human operational costs in our very first quarter. LAZY CODER is our secret weapon.',
      author: 'Liam Patterson',
      role: 'Head of Operations',
      company: 'Synapse Brands'
    }
  }
];
