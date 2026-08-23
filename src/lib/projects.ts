export type Project = {
  slug: string;
  title: string;
  category: ('WEB' | 'MOBILE' | 'D2C' | 'SAAS' | 'SOFTWARE' | 'AI' | 'AUTOMATION' | 'FINTECH')[];
  projectType: 'CLIENT PROJECT' | 'INTERNAL PRODUCT' | 'CONCEPT' | 'PROTOTYPE';
  status: 'Live' | 'In Development' | 'Prototype';
  tagline: string;
  summary: string;
  bannerImage: string;
  problem: string;
  solution: string;
  outcome?: string;
  timeline?: string;
  platform: string[];
  services: string[];
  technologies: string[];
  customerFeatures?: string[];
  businessFeatures?: string[];
  automationFeatures?: string[];
  paymentFeatures?: string[];
  aiWorkflow?: {
    userPrompt: string;
    steps: string[];
    explanation: string;
  };
  metrics?: { val: string; label: string }[];
  timelinePhases?: { period: string; title: string }[];
};

export const projectsData: Project[] = [
  {
    slug: 'd2c-ayurveda-platform',
    title: 'Ayurvedic Wellness D2C Store',
    category: ['D2C', 'WEB', 'AUTOMATION'],
    projectType: 'CLIENT PROJECT',
    status: 'Live',
    tagline: 'A modern commerce system built to simplify how customers discover, purchase, and track products.',
    summary: 'High-converting online storefront integrated with instant Razorpay UPI checkout and automated WhatsApp Cash-on-Delivery (COD) verification to eliminate fraudulent orders.',
    bannerImage: '/banners/Ayurvedic Wellness D2C Store.png',
    problem: 'The brand was losing 40% of orders due to unconfirmed Cash-on-Delivery purchases, causing high Return-to-Origin (RTO) shipping fees and delayed operations.',
    solution: 'Built a lightweight 0.8s fast storefront with an automated WhatsApp bot that verifies COD customer phone numbers in real-time before order dispatch.',
    outcome: 'Eliminated manual phone verifications, reduced RTO fake orders by 30%, and processed over 10,000+ orders seamlessly.',
    timeline: '14 DAYS',
    platform: ['Web', 'Mobile Browser', 'WhatsApp API'],
    services: ['UI/UX Design', 'Full-Stack Development', 'Razorpay Integration', 'WhatsApp Automation'],
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Razorpay', 'WhatsApp Business API', 'Vercel'],
    customerFeatures: ['Sub-second catalog search', '1-click UPI checkout', 'Instant order status on WhatsApp', 'Customer account portal'],
    businessFeatures: ['Live orders dashboard', 'RTO risk scoring', 'Inventory management', 'Automated GST invoices'],
    automationFeatures: ['WhatsApp COD phone verification', 'Shiprocket courier dispatch sync', 'Payment confirmation webhook'],
    paymentFeatures: ['UPI (GPay/PhonePe)', 'Credit/Debit Cards', 'COD verification bot', 'Razorpay Autopay'],
    metrics: [
      { val: '14 Days', label: 'DELIVERY TIME' },
      { val: '30%', label: 'RTO REDUCTION' },
      { val: '0.8s', label: 'MOBILE SPEED' }
    ],
    timelinePhases: [
      { period: 'DAY 01', title: 'Scope & Wireframes' },
      { period: 'DAY 04', title: 'Storefront Build' },
      { period: 'DAY 09', title: 'WhatsApp Bot Integration' },
      { period: 'DAY 14', title: 'QA & Production Launch' }
    ]
  },
  {
    slug: 'bilingual-ai-voice-agent',
    title: 'Bilingual AI Voice Receptionist',
    category: ['AI', 'AUTOMATION', 'SOFTWARE'],
    projectType: 'CLIENT PROJECT',
    status: 'Live',
    tagline: 'An action-oriented AI voice agent that answers calls, qualifies leads, and books appointments in Hindi & English.',
    summary: 'Autonomous AI telephony system deployed for healthcare clinics and real estate offices to answer 24/7 inbound calls without missed opportunities.',
    bannerImage: '/banners/banner_ai_voice_receptionist.jpg',
    problem: 'Front-desk receptionists missed 60% of after-hours appointment calls, leading to lost client bookings and expensive staffing costs.',
    solution: 'Engineered a bilingual voice AI agent that connects to telephony lines, understands spoken Hindi and English, checks live Google Calendar availability, and executes direct bookings.',
    outcome: 'Handled 80% of inbound phone calls automatically without human intervention, saving ₹25,000/month in front-desk overhead.',
    timeline: '14 DAYS',
    platform: ['Telephony API', 'Web Portal', 'Google Calendar'],
    services: ['Voice AI Development', 'Telephony Integration', 'Calendar Sync', 'CRM Pipeline'],
    technologies: ['Python', 'OpenAI Realtime', 'FastAPI', 'PostgreSQL', 'Telephony APIs', 'Google Calendar API'],
    customerFeatures: ['Natural spoken conversational flow', 'Bilingual Hindi & English support', 'Instant appointment booking', 'SMS confirmation alerts'],
    businessFeatures: ['Call transcripts & audio playback', 'Lead qualification scoring', 'Automatic CRM contact creation', 'Escalation to human staff'],
    automationFeatures: ['Instant calendar slot locking', 'WhatsApp appointment reminder bot', 'Lead data enrichment'],
    aiWorkflow: {
      userPrompt: '“Namaste, I would like to book a consultation for tomorrow afternoon.”',
      steps: ['CHECK CALENDAR', 'FIND AVAILABLE SLOT', 'BOOK APPOINTMENT', 'UPDATE CRM', 'SEND WHATSAPP CONFIRMATION'],
      explanation: 'The voice agent evaluates natural language intent, queries live calendar availability, locks the slot, creates the CRM lead, and fires a WhatsApp confirmation within 3 seconds.'
    },
    metrics: [
      { val: '14 Days', label: 'BUILD TIME' },
      { val: '80%', label: 'AUTO-ANSWERED' },
      { val: '₹25k/mo', label: 'STAFF SAVED' }
    ]
  },
  {
    slug: 'smb-credit-upi-app',
    title: 'SMB Credit & Autopay Platform',
    category: ['FINTECH', 'SAAS', 'MOBILE'],
    projectType: 'CLIENT PROJECT',
    status: 'Live',
    tagline: 'Instant credit disbursement with automated UPI recurring subscription collection & GST invoices.',
    summary: 'A fintech application for small businesses in India providing digital loan underwriting, direct bank transfers, and automatic UPI recurring collection.',
    bannerImage: '/banners/banner_smb_credit_autopay.jpg',
    problem: 'Manual loan collection was taking 15 days per borrower with high default rates and cumbersome paperwork.',
    solution: 'Built a 2-minute digital verification portal with automated bank disbursement and UPI Autopay recurring collections.',
    outcome: 'Reduced verification time to under 2 minutes and automated recurring collection schedules.',
    timeline: '24 DAYS',
    platform: ['iOS App', 'Android App', 'Web Admin'],
    services: ['Fintech Architecture', 'React Native App', 'UPI Autopay Engine', 'GST Compliance'],
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'RazorpayX', 'Digio eKYC'],
    customerFeatures: ['2-minute digital onboarding', 'Instant bank account link', 'Autopay approval', 'Repayment schedule view'],
    businessFeatures: ['Automated credit underwriting', 'Loan portfolio analytics', 'Default risk tracking', '18% GST invoices'],
    metrics: [
      { val: '24 Days', label: 'DELIVERY' },
      { val: '<2 Min', label: 'UNDERWRITING' },
      { val: '100%', label: 'AUTOPAY SYNC' }
    ]
  },
  {
    slug: 'gst-invoicing-ca-automation',
    title: 'GST Invoicing & CA Automation',
    category: ['SAAS', 'AUTOMATION', 'SOFTWARE'],
    projectType: 'INTERNAL PRODUCT',
    status: 'Live',
    tagline: 'Automated 18% GST calculation, B2B invoice generation, and WhatsApp payment reminders.',
    summary: 'An internal automated operations system created for business founders to generate compliant GST PDF invoices and export CA-ready Tally XML data in 1 click.',
    bannerImage: '/banners/banner_gst_invoicing_ca.jpg',
    problem: 'Founders spent over 10 hours every month manually typing GST invoices in Word/Excel and reminding clients on WhatsApp.',
    solution: 'Designed a 1-click B2B billing engine that auto-calculates CGST/SGST/IGST, generates PDF invoices, and sends instant WhatsApp payment links.',
    outcome: 'Eliminated manual billing errors and reduced CA accounting reconciliation time from 10 hours to 5 minutes.',
    timeline: '21 DAYS',
    platform: ['Web Dashboard', 'WhatsApp Business API'],
    services: ['SaaS Development', 'WhatsApp Integration', 'PDF Engine', 'Tally XML Converter'],
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'WhatsApp API', 'Tailwind CSS'],
    customerFeatures: ['Instant PDF invoice download', 'WhatsApp payment link', 'Receipt history'],
    businessFeatures: ['1-click GSTR-1 XML export', 'Client GSTIN auto-lookup', 'Overdue invoice alerts', 'Revenue dashboard'],
    metrics: [
      { val: '21 Days', label: 'SHIP TIME' },
      { val: '100%', label: 'GST ACCURACY' },
      { val: '10h → 5m', label: 'TIME SAVED' }
    ]
  },
  {
    slug: 'cross-platform-fitness-app',
    title: 'Mobile Fitness & Workout Tracker',
    category: ['MOBILE', 'WEB'],
    projectType: 'CLIENT PROJECT',
    status: 'Live',
    tagline: 'Lightweight cross-platform iOS and Android workout tracking app with offline local sync.',
    summary: 'High-performance mobile workout companion app designed for speed, working 100% offline with background sync.',
    bannerImage: '/banners/banner_mobile_fitness_tracker.jpg',
    problem: 'Existing apps crashed on budget smartphones and took 5 seconds to load workout routines.',
    solution: 'Re-engineered a lightweight mobile app that launches in under 500ms and syncs data seamlessly in the background.',
    outcome: 'Achieved a 4.8-star app store rating and over 10,000+ downloads within 60 days of launch.',
    timeline: '28 DAYS',
    platform: ['iOS App', 'Android App'],
    services: ['Mobile App Design', 'React Native Engineering', 'Offline Sync Engine', 'App Store Deployment'],
    technologies: ['React Native', 'TypeScript', 'WatermelonDB', 'PostgreSQL', 'Firebase Push'],
    customerFeatures: ['100% offline workout logging', 'Custom routine creator', 'Rest timer notifications', 'Progress graphs'],
    businessFeatures: ['Subscription billing management', 'User engagement telemetry', 'Content CMS portal'],
    metrics: [
      { val: '28 Days', label: 'DEVELOPMENT' },
      { val: '4.8★', label: 'RATING' },
      { val: '10k+', label: 'DOWNLOADS' }
    ]
  },
  {
    slug: 'internal-operations-portal',
    title: 'Custom Operations & Task Portal',
    category: ['SOFTWARE', 'AUTOMATION'],
    projectType: 'CLIENT PROJECT',
    status: 'Live',
    tagline: 'Custom business management application replacing messy Excel sheets with automated task routing.',
    summary: 'A unified operational dashboard built for a logistics enterprise to track shipments, assign tasks, and trigger Slack notifications.',
    bannerImage: '/banners/banner_operations_portal.jpg',
    problem: 'Team members wasted 20 hours per week manually copying data between email threads and disconnected spreadsheets.',
    solution: 'Unified operational data into a single-pane web portal with automated status transitions and instant alerts.',
    outcome: 'Saved 20 hours per week per employee and completely eliminated spreadsheet data corruption.',
    timeline: '7 DAYS',
    platform: ['Web Dashboard', 'Slack API'],
    services: ['Internal Tool Design', 'Full-Stack Development', 'Slack Integration'],
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Slack API', 'Vercel'],
    customerFeatures: ['Task routing', 'Status pipeline', 'Role-based access', 'Instant Slack alerts'],
    businessFeatures: ['Employee productivity metrics', 'Audit log history', 'CSV/Excel export'],
    metrics: [
      { val: '7 Days', label: 'SPRINT' },
      { val: '20h/wk', label: 'SAVED PER DEV' },
      { val: '100%', label: 'ADOPTION' }
    ]
  }
];
