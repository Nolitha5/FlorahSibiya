export const projects = [
  {
    id: 'personal-os',
    title: 'PersonalOS — AI Productivity Platform',
    tag: 'AI · Automation · Featured',
    description:
      'An AI-powered personal productivity system built with Claude Code. Integrates three automation modules: Sprint Tracker (Notion-based), Morning Brief (Gmail + Calendar summary), and Market Pulse (intelligent trend monitoring). Notion acts as the central data layer; deployed via Vercel with continuous integration.',
    image: '/assets/personalOS.jpeg',
    video: '/assets/PersonalOS3in1.mp4',
    docs: 'https://github.com/Nolitha5/PersonalOS/blob/main/README.md',
    featured: true,
    links: [
      { label: 'GitHub', href: 'https://github.com/Nolitha5/PersonalOS', type: 'github' },
      {
        label: 'Live Demo',
        href: 'https://personal-os-git-main-florah-s-projects.vercel.app/',
        type: 'demo',
      },
    ],
  },
  {
    id: 'smarttech',
    title: 'SmartTech — CV Scanner & Job Portal',
    tag: 'AI · NLP · Job Portal',
    description:
      'Three-phase platform: company website → AI job portal → NLP-powered CV scanner that automatically matches candidates to job requirements with a real-time tracking dashboard.',
    image: '/assets/admin_log.jpg',
    video: null,
    docs: 'https://github.com/Nolitha5/SmartTech-Web/blob/main/README.md',
    featured: false,
    links: [{ label: 'GitHub', href: 'https://github.com/Nolitha5/SmartTech-Web', type: 'github' }],
  },
  {
    id: 'doctor-appointment',
    title: 'Doctor Appointment Booking System',
    tag: 'Full-Stack · Healthcare',
    description:
      'A web application enabling patients to book, manage, and track medical appointments online. Centralised platform for scheduling and doctor-patient communication.',
    image: '/assets/projImage.png',
    video: null,
    docs: 'https://github.com/Nolitha5/DoctorsAppointmentBooking/blob/main/README.md',
    featured: false,
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Nolitha5/DoctorsAppointmentBooking/',
        type: 'github',
      },
      { label: 'Live Demo', href: 'https://dr-appointment-6316.vercel.app/', type: 'demo' },
    ],
  },
  {
    id: 'career-guidance',
    title: 'Smart Career Guidance Assistant',
    tag: 'Multi-Agent AI',
    description:
      'Multi-agent AI system in Google Colab. Analyses education, skills, and aspirations to generate career path recommendations, skills gap analysis, and real-time labour market assessments.',
    image: '/assets/Career.png',
    video: '/assets/SmartCareerguidance.mp4',
    docs: 'https://colab.research.google.com/drive/1ThZYO6gBBGuM-E4Tlc1vn4io_dF55zF-',
    featured: false,
    links: [
      {
        label: 'Open in Colab',
        href: 'https://colab.research.google.com/drive/1ThZYO6gBBGuM-E4Tlc1vn4io_dF55zF-',
        type: 'demo',
      },
    ],
  },
  {
    id: 'clothing-intelligence',
    title: 'AI Clothing Store Competitor Intelligence',
    tag: 'LangGraph · Intelligence',
    description:
      'LangGraph-based system that analyses local clothing retail competition. Graph-based workflow handles data extraction, pricing analysis, and brand positioning to surface market opportunities.',
    image: '/assets/ClothingAnalysis.webp',
    video: null,
    docs: 'https://colab.research.google.com/drive/1ThZYO6gBBGuM-E4Tlc1vn4io_dF55zF-',
    featured: false,
    links: [
      {
        label: 'Open in Colab',
        href: 'https://colab.research.google.com/drive/1ThZYO6gBBGuM-E4Tlc1vn4io_dF55zF-',
        type: 'demo',
      },
    ],
  },
  {
    id: 'health-assistant',
    title: 'Smart Health Assistant',
    tag: 'Agentic AI · Health',
    description:
      'Agentic AI wellness tool that calculates BMI from user inputs and autonomously generates personalised exercise recommendations. Built with Gradio for an accessible browser interface.',
    image: '/assets/bmipic.png',
    video: '/assets/SHA.mp4',
    docs: 'https://colab.research.google.com/drive/1ThZYO6gBBGuM-E4Tlc1vn4io_dF55zF-',
    featured: false,
    links: [
      {
        label: 'Open in Colab',
        href: 'https://colab.research.google.com/drive/1ThZYO6gBBGuM-E4Tlc1vn4io_dF55zF-',
        type: 'demo',
      },
    ],
  },
  {
    id: 'fingerprint-scanner',
    title: 'Fingerprint Access Scanner System',
    tag: 'Biometric · Security',
    description:
      'Biometric security solution replacing key/password access with fingerprint authentication. Controls and monitors entry to restricted areas with a fast, user-friendly identification flow.',
    image: '/assets/fingerprint.png',
    video: null,
    docs: 'https://github.com/Nolitha5/fingerprint/blob/main/README.md',
    featured: false,
    links: [{ label: 'GitHub', href: 'https://github.com/Nolitha5/fingerprint', type: 'github' }],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Web Application',
    tag: 'E-Commerce · Full-Stack',
    description:
      'Full-featured online store where users can browse and purchase products, with built-in price comparison across categories.',
    image: '/assets/storr.png',
    video: null,
    docs: 'https://github.com/Nolitha5/ecom/blob/main/README.md',
    featured: false,
    links: [
      { label: 'GitHub', href: 'https://github.com/Nolitha5/ecom', type: 'github' },
      { label: 'Live Demo', href: 'https://ecom-r26z.onrender.com/', type: 'demo' },
    ],
  },
  {
    id: '4ir-application',
    title: '4IR Online Application System',
    tag: 'Web App · 4IR',
    description:
      'Student application portal for 4IR-TUT programmes. Handles personal details, specialisation selection, document uploads, and form submissions in a streamlined flow.',
    image: '/assets/4ir.jpg',
    video: null,
    docs: 'https://github.com/Nolitha5/Form/blob/main/README.md',
    featured: false,
    links: [{ label: 'GitHub', href: 'https://github.com/Nolitha5/Form', type: 'github' }],
  },
]
