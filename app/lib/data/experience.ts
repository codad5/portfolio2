export interface Experience {
  id: string;
  company: string;
  position: string;
  timeline: string;
  url?: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: 'awadoc',
    company: 'AwaDoc',
    position: 'Founding Engineer',
    timeline: 'January 2024 – Present',
    url: 'https://awadoc.com',
    highlights: [
      'Scaled platform to 100,000+ users in 6 months',
      'Architected messaging infrastructure handling 240k+ daily messages',
      'Built high-performance message processing system (10,000+ messages/hour)',
      'Engineered API and backend architecture for WhatsApp bot and Admin Web App',
      'Led system hardening efforts enhancing infrastructure security',
      'Contributed to AI prompt optimization reducing hallucinations by 40%',
    ],
  },
  {
    id: 'fusion-intelligence',
    company: 'Fusion Intelligence',
    position: 'WordPress Developer',
    timeline: 'December 2024 – Present',
    url: 'https://fusionintel.io',
    highlights: [
      'Spearheading development of custom WordPress themes and plugins',
      'Improved system uptime to 99.9%',
      'Optimized plugin workflow efficiency by 40%',
      'Increased user engagement by 50% through responsive design',
    ],
  },
  {
    id: 'cyberinfomatic',
    company: 'Cyberinfomatic',
    position: 'PHP Developer',
    timeline: 'March 2024 – December 2024',
    url: 'https://cyberinfomatic.com',
    highlights: [
      'Built real-time crypto tracking plugin for WordPress',
      'Developed Laravel-based License Management System (60% faster validation)',
      'Achieved 70% performance boost via Redis caching',
      'Plugin approved on WordPress.org within 2 weeks',
    ],
  },
  {
    id: 'appsthathelps',
    company: 'Appsthathelps',
    position: 'Backend Developer',
    timeline: 'July 2023 – August 2024',
    highlights: [
      'Designed and maintained Laravel APIs for mobile app (5,000+ downloads)',
      'Automated recurring updates reducing manual work by 90%',
      'Integrated OneSignal for push notifications',
      'Achieved 99.9% API uptime',
    ],
  },
  {
    id: 'clusterlearn',
    company: 'Clusterlearn',
    position: 'Backend Developer',
    timeline: 'January 2023 – June 2023',
    highlights: [
      'Built Node.js-based learner connection system (40% retention improvement)',
      'Integrated Google Calendar API (50% scheduling efficiency)',
      'Strengthened security with Redis-based email validation',
    ],
  },
  {
    id: 'freelance',
    company: 'Freelance (Upwork)',
    position: 'PHP Web Developer',
    timeline: '2020 – Present',
    highlights: [
      'Delivered 10+ professional websites with 90% client satisfaction',
      '5+ open-source contributions',
      'Developed custom PHP plugins, scrapers, and dashboards',
    ],
  },
];
