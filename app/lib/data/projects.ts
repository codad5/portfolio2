import { StaticImageData } from 'next/image';

export interface ProjectLink {
  github?: string;
  website?: string;
}

export interface Project {
  id: string;
  name: string;
  type: 'desktop' | 'web' | 'backend' | 'fullstack' | 'dev' | 'frontend' | 'chrome-ext' | 'command-line';
  mainLang: string;
  tags: string[];
  image?: string;
  links: ProjectLink;
  description: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'fli',
    name: 'FLI - Rust CLI Framework',
    type: 'dev',
    mainLang: 'Rust',
    tags: ['rust', 'cli', 'open-source'],
    image: '/assets/fli.png',
    links: {
      github: 'https://github.com/codad5/fli',
      website: 'https://crates.io/crates/fli',
    },
    description: 'Type-safe CLI library for Rust inspired by commander.js. 12,000+ downloads on crates.io with zero-cost abstractions.',
    featured: true,
  },
  {
    id: 'cilbup',
    name: 'Cilbup',
    type: 'fullstack',
    mainLang: 'TypeScript (Next.js)',
    tags: ['messaging', 'payments', 'next.js'],
    links: {
      github: 'https://github.com/codad5/usecret-node-version',
      website: 'https://cilbup.site',
    },
    description: 'Privacy-first anonymous messaging platform for creators. Features tip system, real-time updates via WebSockets, and multi-channel notifications.',
    featured: true,
  },
  {
    id: 'resurgee',
    name: 'Resurgee',
    type: 'fullstack',
    mainLang: 'Python (FastAPI)',
    tags: ['ai', 'task-management', 'google-api'],
    links: {
      github: 'https://github.com/codad5/resurgee',
    },
    description: 'AI task management orchestration layer augmenting Google Tasks and Calendar. Features smart rescheduling and conversational planning with GPT-4.',
    featured: true,
  },
  {
    id: 'pdfz',
    name: 'PDFz',
    type: 'backend',
    mainLang: 'Rust',
    tags: ['rust', 'ocr', 'pdf', 'microservice'],
    links: {
      github: 'https://github.com/codad5/pdfz',
    },
    description: 'High-performance PDF extraction service with Tesseract and Ollama OCR. Async queue-based processing with RabbitMQ.',
    featured: true,
  },
  {
    id: 'google-task-desktop',
    name: 'Google Task Desktop',
    type: 'desktop',
    mainLang: 'Tauri (Rust + React)',
    tags: ['rust', 'desktop', 'react'],
    image: '/assets/Google-Task-Desktop.png',
    links: {
      github: 'https://github.com/codad5/google-task-tauri',
      website: 'https://google-task.codad5.me/',
    },
    description: 'Cross-platform desktop app for Google Tasks using Tauri. 1,000+ users with 30% productivity improvement.',
    featured: true,
  },
  {
    id: 'quickcv',
    name: 'QuickCV',
    type: 'web',
    mainLang: 'Next.js',
    tags: ['typescript', 'next.js', 'ai'],
    image: '/assets/quickcv.png',
    links: {
      github: 'https://github.com/codad5/quickcv',
      website: 'https://quickcv.codad5.me',
    },
    description: 'AI-powered resume builder using Groq API. 90% ATS accuracy with 30s average generation time.',
  },
  {
    id: 'hard-sync-cli',
    name: 'Hard-Sync-CLI',
    type: 'command-line',
    mainLang: 'Rust',
    tags: ['rust', 'cli', 'file-sync', 'open-source'],
    links: {
      github: 'https://github.com/codad5/hard-sync-cli',
    },
    description: 'Fast directory synchronization tool with dry-run, file exclusion, and reverse sync. Written in Rust for performance and reliability.',
    featured: true,
  },
  {
    id: 'verify-branch-ancestry',
    name: 'Verify Branch Ancestry',
    type: 'dev',
    mainLang: 'Shell/GitHub Actions',
    tags: ['devops', 'github-actions', 'ci-cd', 'open-source'],
    links: {
      github: 'https://github.com/codad5/verify-branch-ancestry',
    },
    description: 'GitHub Action enforcing staging-first workflows. Verifies commit ancestry and minimum soak time before production deployment. 6 stars.',
    featured: true,
  },
  {
    id: 'wptoolkit',
    name: 'WPToolkit',
    type: 'dev',
    mainLang: 'PHP',
    tags: ['php', 'wordpress', 'framework', 'open-source'],
    links: {
      github: 'https://github.com/codad5/wptoolkit',
    },
    description: 'Enterprise WordPress development framework with dependency injection, smart caching, and type-safe MetaBox system. Modern architecture for WP.',
  },
  {
    id: 'keybinder',
    name: 'Keybinder',
    type: 'dev',
    mainLang: 'TypeScript',
    tags: ['typescript', 'library', 'npm'],
    links: {
      github: 'https://github.com/codad5/keybinder',
      website: 'https://www.npmjs.com/package/domkeybinder',
    },
    description: 'Frontend library for keyboard action manipulation in browsers.',
  },
  {
    id: 'currencynet',
    name: 'CurrencyNet',
    type: 'dev',
    mainLang: 'JavaScript',
    tags: ['currency', 'javascript', 'library'],
    image: '/assets/currencynet.png',
    links: {
      github: 'https://github.com/codad5/currencynet',
      website: 'https://codad5.github.io/currencynet',
    },
    description: 'Frontend library for currency conversion based on user location.',
  },
  {
    id: 'webpdf',
    name: 'WebPDF',
    type: 'chrome-ext',
    mainLang: 'TypeScript',
    tags: ['pdf', 'chrome-extension'],
    image: 'https://github.com/codad5/webpdf/raw/master/assets/preview.png',
    links: {
      github: 'https://github.com/codad5/webpdf',
    },
    description: 'Chrome extension to convert multiple webpages into a single PDF.',
  },
  {
    id: 'wemall',
    name: 'Wemall',
    type: 'backend',
    mainLang: 'PHP',
    tags: ['php', 'e-commerce', 'api'],
    image: '/assets/wemall-b.png',
    links: {
      github: 'https://github.com/codad5/wemall-v2',
    },
    description: 'E-commerce CMS with API for frontend/mobile developers to build fullstack applications.',
  },
];

// Get featured projects
export const featuredProjects = projects.filter((p) => p.featured);
