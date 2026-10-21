// Website packages — prices supplied by Florah (once-off, ZAR).
export const packages = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'R2500',
    note: 'Once off',
    features: ['1-page website', 'Professional design', 'Contact form', 'Free hosting', 'R50/month maintenance'],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 'R3500',
    note: 'Once off',
    featured: true,
    features: [
      'Up to 4 pages',
      'Custom design',
      'Multiple contact forms',
      'Free Google Business Account setup assistance',
      'Free .co.za domain for a year',
      'R100/month hosting & maintenance',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'R5000',
    note: 'Once off',
    features: [
      'Everything in Professional',
      'Up to 10 pages',
      'Newsletter integration',
      'R150/month hosting & maintenance',
      '3 months support',
    ],
  },
]

// No fixed rates exist for these, so they are quoted per project.
export const services = [
  {
    id: 'frontend',
    icon: 'layout',
    title: 'Website & Front-End Development',
    description: 'Responsive, accessible interfaces built with React, JavaScript, HTML and CSS.',
    deliverables: ['Responsive layouts', 'Reusable components', 'Deployed site'],
  },
  {
    id: 'fullstack',
    icon: 'stack',
    title: 'Full-Stack Web Applications',
    description: 'End-to-end applications with a backend, database and authentication where needed.',
    deliverables: ['React front end', 'Node.js / Python / Django back end', 'MySQL or PostgreSQL database'],
  },
  {
    id: 'ai',
    icon: 'spark',
    title: 'AI Integration & Chatbots',
    description: 'Adding LLM-powered features and assistants to an existing or new application.',
    deliverables: ['LLM API integration', 'Prompt design', 'Simple chat or form interface'],
  },
  {
    id: 'automation',
    icon: 'flow',
    title: 'Workflow Automation',
    description: 'Connecting tools such as Notion, Gmail and Calendar to remove repetitive manual work.',
    deliverables: ['Automated workflow', 'Tool integrations', 'Short handover notes'],
  },
  {
    id: 'api',
    icon: 'plug',
    title: 'API Integration',
    description: 'Connecting your site or app to third-party services and your own back-end APIs.',
    deliverables: ['REST API integration', 'Error handling', 'Documented endpoints'],
  },
  {
    id: 'portfolio',
    icon: 'user',
    title: 'Portfolio & Business Websites',
    description: 'Clean, professional sites for individuals and small businesses. See the packages above.',
    deliverables: ['Custom design', 'Contact forms', 'Hosting setup'],
  },
]
