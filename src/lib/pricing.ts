export interface PricingPlan {
  id: string;
  name: string;
  priceINR: string;
  priceUSD: string;
  positioning: string;
  description: string;
  timeline: string;
  popular?: boolean;
  productFeatures: string[];
  designFeatures: string[];
  engineeringFeatures: string[];
  integrationFeatures: string[];
  launchFeatures: string[];
  idealFor: string[];
  notIdealFor: string[];
  ctaText: string;
}

export const pricingPlansData: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    priceINR: '₹1,50,000',
    priceUSD: '$2,000',
    positioning: 'FOR VALIDATING AN IDEA',
    description: 'Get your most important idea into the hands of real users without spending months building features nobody asked for.',
    timeline: '~7 DAYS SPRINT',
    popular: false,
    productFeatures: ['Focused MVP scope', 'Core user journey', 'Essential 3–5 screens', 'Responsive mobile experience'],
    designFeatures: ['UI direction & typography', 'Core design system', 'Mobile responsive layouts'],
    engineeringFeatures: ['Frontend Next.js app', 'Backend APIs where required', 'Database setup (PostgreSQL/Supabase)', 'Authentication (Email/OTP/Google)'],
    integrationFeatures: ['Razorpay / Stripe payment checkout', 'Email notifications', 'WhatsApp basic alert', 'Basic third-party API'],
    launchFeatures: ['Production Vercel deployment', 'Custom domain connection', 'Basic Google Analytics', 'QA testing'],
    idealFor: ['Validation MVPs', 'Landing + conversion systems', 'Simple web apps', 'Internal prototypes', 'Early-stage founders'],
    notIdealFor: ['Complex marketplaces', 'Multi-role enterprise software', 'Advanced AI agent fleets', 'Large automation ecosystems'],
    ctaText: 'START WITH STARTER →'
  },
  {
    id: 'growth',
    name: 'GROWTH',
    priceINR: '₹3,50,000',
    priceUSD: '$5,000',
    positioning: 'FOR BUILDING THE REAL PRODUCT',
    description: 'A complete product sprint for founders ready to launch a serious customer-facing product or business system.',
    timeline: '~21 DAYS SPRINT',
    popular: true,
    productFeatures: ['Full product planning & user flows', 'Feature architecture & business logic', 'Admin experience & customer portals', 'Multi-role user permissions'],
    designFeatures: ['Complete UI/UX design system', 'Responsive desktop & mobile views', 'Interaction & loading states', 'Framer Motion polish'],
    engineeringFeatures: ['Full-stack Next.js + Node backend', 'PostgreSQL database + Redis caching', 'Role-based access control (RBAC)', 'Admin management dashboard'],
    integrationFeatures: ['Razorpay / Stripe checkout & autopay', 'WhatsApp Business API integration', 'CRM webhooks & lead routing', 'Third-party API connections'],
    launchFeatures: ['Production deployment & custom domain', 'PostgreSQL backups & logging', '30 days dedicated bug support', 'Operational handover training'],
    idealFor: ['SaaS products', 'D2C ecommerce stores', 'Customer portals', 'Booking platforms', 'AI-powered products', 'Automation systems'],
    notIdealFor: ['Multi-tenant enterprise ecosystems requiring custom SLAs'],
    ctaText: 'BUILD WITH GROWTH →'
  },
  {
    id: 'scale',
    name: 'SCALE',
    priceINR: '₹7,00,000+',
    priceUSD: '$10,000+',
    positioning: 'FOR COMPLEX SYSTEMS',
    description: 'Custom architecture and engineering for products that need deeper integrations, advanced automation, AI agents, or enterprise workflows.',
    timeline: 'CUSTOM MILESTONES',
    popular: false,
    productFeatures: ['Advanced multi-role product architecture', 'Multi-tenant B2B SaaS architecture', 'Custom analytics & audit logs', 'Complex operational pipelines'],
    designFeatures: ['Enterprise design system', 'Custom mobile app UI', 'Real-time telemetry dashboards'],
    engineeringFeatures: ['High-throughput microservices', 'Background job queues (BullMQ/Redis)', 'Cross-platform React Native apps', 'Database optimization & replication'],
    integrationFeatures: ['Multiple enterprise APIs', 'CRM / ERP deep sync', 'RazorpayX automated payouts', 'Telephony & WhatsApp fleets'],
    launchFeatures: ['Multi-region cloud infrastructure', 'SRE monitoring & logging setup', 'Dedicated architecture lead', '90 days post-launch support'],
    idealFor: ['AI agent & voice fleets', 'Enterprise CRM / ERP', 'Cross-platform mobile apps', 'High-volume fintech platforms'],
    notIdealFor: ['Simple 1-page landing sites'],
    ctaText: 'TALK ABOUT SCALE →'
  }
];

export const priceComparisonData = [
  { capability: 'Product Planning & Scope', starter: '✓', growth: '✓', scale: '✓' },
  { capability: 'UI/UX & Design System', starter: '✓', growth: '✓', scale: '✓' },
  { capability: 'Responsive Mobile Layouts', starter: '✓', growth: '✓', scale: '✓' },
  { capability: 'Backend Architecture', starter: 'Basic', growth: 'Full', scale: 'Advanced Microservices' },
  { capability: 'Database & Auth', starter: '✓', growth: '✓', scale: 'Advanced RBAC' },
  { capability: 'Admin Management Dashboard', starter: 'Basic', growth: '✓', scale: 'Advanced Multi-Role' },
  { capability: 'Razorpay / Stripe Payments', starter: 'Basic Checkout', growth: '✓ + Subscriptions', scale: 'Advanced Autopay & Payouts' },
  { capability: 'API & CRM Integrations', starter: '1 Integration', growth: 'Multiple APIs', scale: 'Complex Enterprise Systems' },
  { capability: 'WhatsApp Business Bot', starter: 'Optional', growth: '✓', scale: 'Custom WhatsApp Fleet' },
  { capability: 'AI Assistants & RAG', starter: 'Optional', growth: '✓', scale: 'Advanced AI Agent Fleets' },
  { capability: 'Bilingual AI Voice Telephony', starter: '—', growth: 'Optional', scale: '✓' },
  { capability: 'Post-Launch Support', starter: '14 Days', growth: '30 Days Included', scale: '90 Days Custom SLA' }
];

export const pricingFaqItems = [
  {
    q: 'Is the price fixed?',
    a: 'Package prices provide a clear starting point. Final pricing is confirmed after we review your exact product scope, integrations, and technical requirements.'
  },
  {
    q: 'Does the price include GST?',
    a: 'Prices shown are exclusive of 18% GST for Indian business invoices. Eligible registered businesses can claim input tax credit.'
  },
  {
    q: 'Do you charge hourly?',
    a: 'No. We work strictly on fixed-scope product sprints. You know the exact cost and timeline before any engineering begins.'
  },
  {
    q: 'Can I start with an MVP?',
    a: 'Yes. The Starter package (₹1.5L / $2k) is designed specifically for focused validation MVPs shipped in ~7 days.'
  },
  {
    q: 'Are third-party API / AI model costs included?',
    a: 'Third-party fees (OpenAI model usage, WhatsApp API messaging charges, telephony, domain registration, Vercel hosting) are billed directly by the providers and managed in your account.'
  },
  {
    q: 'What if I need changes during development?',
    a: 'New requests during a sprint are reviewed for impact on scope, timeline, and cost before implementation. Core features required for launch stay prioritized.'
  },
  {
    q: 'What happens after launch?',
    a: 'All plans include dedicated post-launch bug support (14 to 90 days). After that, you can continue with feature sprints or maintenance engagements.'
  }
];
