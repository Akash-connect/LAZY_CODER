export interface ServiceItem {
  id: string;
  title: string;
  category: 'Intelligence & Flow' | 'Core Engineering' | 'Infrastructure' | 'Design & UX';
  icon: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  timeline: string;
  stack: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'ai-automation',
    title: 'AI Workflow Automation',
    category: 'Intelligence & Flow',
    icon: 'Bot',
    shortDesc: 'Automate 80% of repetitive operational tasks with custom LLM pipelines.',
    fullDesc: 'We construct autonomous intelligence layers and background workers that interact with your databases, customer tools, and APIs without manual intervention.',
    deliverables: [
      'Custom LLM Orchestration & Agents',
      'Multi-Platform Webhook Synchronization',
      'Automated Data Transformation Pipelines',
      'Zero-Latency Event Triggers'
    ],
    timeline: '7-14 days',
    stack: ['OpenAI', 'Anthropic', 'LangChain', 'Python', 'Supabase']
  },
  {
    id: 'mvp-development',
    title: 'Rapid MVP Development',
    category: 'Core Engineering',
    icon: 'Rocket',
    shortDesc: 'Production-ready web application shipped in 21 days or less.',
    fullDesc: 'Zero-bloat, full-stack Next.js applications built for immediate customer acquisition. Ready for enterprise security, payment processing, and scale from Day 1.',
    deliverables: [
      'Full-Stack Next.js 14 App Router',
      'Stripe / Lemonsqueezy Payments',
      'Authentication & RBAC Security',
      'Automated CI/CD Deployment'
    ],
    timeline: '14-21 days',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma']
  },
  {
    id: 'saas-engineering',
    title: 'Scalable SaaS Architecture',
    category: 'Core Engineering',
    icon: 'Code2',
    shortDesc: 'High-throughput microservices and robust database structures.',
    fullDesc: 'We architect clean multi-tenant architectures engineered for high concurrency, low latency responses, and effortless horizontal scaling.',
    deliverables: [
      'Multi-Tenant Tenant Isolation',
      'High-Concurrency Database Indexing',
      'Edge Cache & CDN Optimization',
      'Real-time WebSocket Data Feeds'
    ],
    timeline: '14-28 days',
    stack: ['TypeScript', 'Node.js', 'Go', 'Redis', 'PostgreSQL']
  },
  {
    id: 'api-integrations',
    title: 'API & Infrastructure Networks',
    category: 'Infrastructure',
    icon: 'Cpu',
    shortDesc: 'Seamlessly bridge payment gateways, CRMs, and external tools.',
    fullDesc: 'Unify fragmented toolchains into a singular high-reliability infrastructure network with automated health monitoring and failover redundancy.',
    deliverables: [
      'REST & GraphQL API Endpoints',
      'Bi-directional Third-Party Syncing',
      'Automated Retry & Error Queues',
      '24/7 Endpoint Health Observability'
    ],
    timeline: '7-14 days',
    stack: ['Vercel', 'AWS', 'Cloudflare Workers', 'GraphQL', 'Docker']
  },
  {
    id: 'frontend-systems',
    title: 'Frontend Design Systems',
    category: 'Design & UX',
    icon: 'Layers',
    shortDesc: 'Pixel-perfect component libraries with modern micro-interactions.',
    fullDesc: 'We create reusable design tokens, dark/light accessibility matrices, and smooth 60fps animations that maintain visual excellence across products.',
    deliverables: [
      'Complete React Component Library',
      'Dark/Light Dynamic Token Matrix',
      'Framer-Motion Micro-Interactions',
      'WCAG Accessibility & Mobile Polish'
    ],
    timeline: '7-14 days',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'Figma']
  },
  {
    id: 'ongoing-scale',
    title: 'Performance Tuning & SRE',
    category: 'Infrastructure',
    icon: 'TrendingUp',
    shortDesc: 'Proactive code optimizations, latency trimming, and continuous scaling.',
    fullDesc: 'We stay after launch to optimize bundle sizes, run database vacuuming, audit security vulnerabilities, and ship feature enhancements.',
    deliverables: [
      'P99 Latency & Bundle Size Reductions',
      'Automated Crash & Error Telemetry',
      'Proactive Security & Dependency Patches',
      'Dedicated Weekly Feature Sprints'
    ],
    timeline: 'Ongoing',
    stack: ['Sentry', 'Datadog', 'AWS', 'PostgreSQL', 'Vercel']
  }
];

export const phaseSteps = [
  {
    phase: '01',
    duration: 'Day 1-2',
    title: 'Discovery & Scope',
    desc: '15-minute alignment call. We dissect bottlenecks, eliminate feature bloat, and lock technical milestones.'
  },
  {
    phase: '02',
    duration: 'Day 3-5',
    title: 'Architecture & Design',
    desc: 'Crafting database schema, API contracts, design tokens, and interactive component flows.'
  },
  {
    phase: '03',
    duration: 'Day 6-18',
    title: 'Sprint Build & Automate',
    desc: 'High-velocity async sprints with daily preview builds. Production code with automated test coverage.'
  },
  {
    phase: '04',
    duration: 'Day 19-21',
    title: 'Deploy & Handoff',
    desc: 'Zero-downtime production deployment, DNS & SSL rollout, full documentation, and codebase handoff.'
  }
];

export const comparisonData = [
  { feature: 'Delivery Speed', lazy: '21 Days Average', agency: '3 to 6 Months', freelancer: 'Unpredictable' },
  { feature: 'Pricing Model', lazy: 'Flat Sprint Rate', agency: 'Inflated Hourly Retainers', freelancer: 'Scope Creep Billed' },
  { feature: 'Communication', lazy: 'Daily Async Updates', agency: 'Endless Weekly Meetings', freelancer: 'Ghosting Risk' },
  { feature: 'Code Quality', lazy: 'Strict TypeScript & Zero Tech Debt', agency: 'Outsourced Spaghetti Code', freelancer: 'Varying Standards' },
  { feature: 'Post-Launch Support', lazy: 'Automated CI/CD & Ongoing SRE', agency: 'Extra Maintenance Fee', freelancer: 'Unavailable' }
];
