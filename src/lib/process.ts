export interface ProcessPhase {
  phase: string;
  duration: string;
  title: string;
  desc: string;
  whatYouGet: string[];
  whatWeNeed: string;
}

export const processPhases: ProcessPhase[] = [
  {
    phase: '01',
    duration: 'Day 1-2',
    title: 'Discovery — Map & Scope',
    desc: 'We cut through product ambiguity in a single focused 15-minute call. We define the single core metric, eliminate feature bloat, and lock technical milestones.',
    whatYouGet: [
      'Complete Technical Scope Document & Wireframe Flow',
      'Database Schema & Architecture Blueprint',
      'Fixed Sprint Milestones & Day-by-Day Roadmap'
    ],
    whatWeNeed: 'Brief product description, target audience, and brand assets (logo, colors, copy notes).'
  },
  {
    phase: '02',
    duration: 'Day 3-4',
    title: 'Architecture — System Design',
    desc: 'Before writing a single line of production code, we establish design tokens, security boundaries, and automated event triggers.',
    whatYouGet: [
      'Interactive Design System & Component Library in Next.js',
      'PostgreSQL / Supabase Database Schema Migrations',
      'Authentication, API Contracts & Webhook Architecture'
    ],
    whatWeNeed: 'Third-party API credentials (Stripe, OpenAI, Supabase, Cloudflare) and domain access.'
  },
  {
    phase: '03',
    duration: 'Day 5-18',
    title: 'Sprint Build — Code & Automate',
    desc: 'High-velocity asynchronous engineering sprints. Daily staging previews deployed automatically. Zero pointless sync meetings.',
    whatYouGet: [
      'Full-Stack Production App with strict TypeScript typing',
      'Autonomous AI Agent Pipelines & Background Workers',
      'Payment Gateway, Email Triggers & Automated Webhooks'
    ],
    whatWeNeed: 'Async feedback on staging builds in our dedicated Slack / Discord channel.'
  },
  {
    phase: '04',
    duration: 'Day 19-21',
    title: 'Launch — Deploy & Scale',
    desc: 'Zero-downtime production deployment, SSL certificate setup, automated telemetry, and complete GitHub codebase transfer.',
    whatYouGet: [
      'Live Production App Deployed to Vercel / AWS / Cloudflare',
      'Complete Codebase Ownership & GitHub Repository Transfer',
      '30-Day Post-Launch Bug Warranty & Performance Monitoring'
    ],
    whatWeNeed: 'DNS verification and final sign-off to flip the production switch.'
  }
];

export const processComparison = [
  {
    row: 'Meetings & Syncs',
    agency: 'Daily 1-hour standups, steering committees & endless slide decks',
    lazy: 'Zero useless meetings. Daily async Slack updates & live preview URLs'
  },
  {
    row: 'Timeline',
    agency: '3 to 6 months of scope creep & delayed milestones',
    lazy: 'Strict 21-day hard deadline with daily shipping milestones'
  },
  {
    row: 'Pricing',
    agency: 'Inflated hourly retainers ($150-$250/hr) with unpredictable bills',
    lazy: 'Flat, transparent sprint rate. No hidden fees or surprise invoices'
  },
  {
    row: 'Code Quality & Ownership',
    agency: 'Outsourced spaghetti code with vendor lock-in dependencies',
    lazy: 'Strict TypeScript + Next.js 14. 100% intellectual property ownership'
  },
  {
    row: 'Post-Launch Support',
    agency: 'Expensive monthly maintenance contracts required to fix their bugs',
    lazy: '30-90 days included warranty with automated error telemetry'
  }
];
