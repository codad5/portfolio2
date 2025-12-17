import { StaticImageData } from 'next/image';

export interface ProjectLink {
  github?: string;
  website?: string;
}

// Available fields for relevance scoring
export type RelevanceField = 
  | 'backend'
  | 'frontend'
  | 'systems'
  | 'devops'
  | 'ai'
  | 'rust'
  | 'typescript'
  | 'php'
  | 'python'
  | 'opensource';

export const RELEVANCE_FIELDS: { id: RelevanceField; label: string }[] = [
  { id: 'backend', label: 'Backend Development' },
  { id: 'frontend', label: 'Frontend Development' },
  { id: 'systems', label: 'Systems Programming' },
  { id: 'devops', label: 'DevOps & CI/CD' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'rust', label: 'Rust' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'php', label: 'PHP' },
  { id: 'python', label: 'Python' },
  { id: 'opensource', label: 'Open Source' },
];

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
  stars?: number;
  downloads?: number;
  users?: number;
  // Relevance scores for each field (0-10, higher = more relevant)
  // Missing fields treated as 0
  relevance?: Partial<Record<RelevanceField, number>>;
}

export const projects: Project[] = [
  // === TIER 1: High-Impact Rust/Systems ===
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
    stars: 4,
    downloads: 12000,
    relevance: {
      rust: 10,
      systems: 9,
      backend: 7,
      opensource: 10,
      devops: 5,
    },
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
    stars: 11,
    relevance: {
      rust: 10,
      backend: 10,
      systems: 8,
      ai: 6,
      devops: 6,
      opensource: 8,
    },
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
    stars: 1,
    relevance: {
      rust: 10,
      systems: 9,
      devops: 6,
      backend: 5,
      opensource: 8,
    },
  },

  // === TIER 2: Fullstack/Backend Applications ===
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
    relevance: {
      typescript: 10,
      backend: 9,
      frontend: 8,
      systems: 5,
      devops: 4,
    },
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
    relevance: {
      python: 10,
      ai: 10,
      backend: 9,
      systems: 4,
      devops: 3,
    },
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
    stars: 18,
    relevance: {
      rust: 9,
      typescript: 7,
      frontend: 8,
      systems: 6,
      backend: 4,
    },
  },

  // === TIER 3: DevOps & Tools ===
  {
    id: 'verify-branch-ancestry',
    name: 'Verify Branch Ancestry',
    type: 'dev',
    mainLang: 'Shell/GitHub Actions',
    tags: ['devops', 'github-actions', 'ci-cd', 'open-source'],
    links: {
      github: 'https://github.com/codad5/verify-branch-ancestry',
    },
    description: 'GitHub Action enforcing staging-first workflows. Verifies commit ancestry and minimum soak time before production deployment.',
    featured: true,
    stars: 6,
    relevance: {
      devops: 10,
      backend: 5,
      systems: 4,
      opensource: 9,
    },
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
    relevance: {
      typescript: 9,
      ai: 8,
      frontend: 8,
      backend: 6,
    },
  },

  // === TIER 4: PHP/WordPress ===
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
    relevance: {
      php: 10,
      backend: 8,
      opensource: 8,
      frontend: 4,
    },
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
    relevance: {
      php: 9,
      backend: 9,
      frontend: 3,
    },
  },

  // === TIER 5: Frontend Libraries ===
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
    description: 'Frontend library for keyboard action manipulation in browsers. 15 stars on GitHub.',
    stars: 15,
    relevance: {
      typescript: 9,
      frontend: 10,
      opensource: 7,
      backend: 2,
    },
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
    relevance: {
      typescript: 6,
      frontend: 9,
      opensource: 6,
    },
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
    relevance: {
      typescript: 8,
      frontend: 8,
    },
  },
];

// Get featured projects
export const featuredProjects = projects.filter((p) => p.featured);

// Get projects sorted by relevance for a specific field
export function getProjectsByRelevance(field: RelevanceField): Project[] {
  return [...projects].sort((a, b) => {
    const scoreA = a.relevance?.[field] ?? 0;
    const scoreB = b.relevance?.[field] ?? 0;
    return scoreB - scoreA;
  });
}

// Get total relevance score for a project (sum of all fields)
export function getTotalRelevance(project: Project): number {
  if (!project.relevance) return 0;
  return Object.values(project.relevance).reduce((sum, score) => sum + (score ?? 0), 0);
}

// Get projects sorted by total relevance
export function getProjectsByTotalRelevance(): Project[] {
  return [...projects].sort((a, b) => getTotalRelevance(b) - getTotalRelevance(a));
}
