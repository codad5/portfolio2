export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Systems Languages',
    skills: ['TypeScript', 'PHP', 'Rust', 'JavaScript', 'Python'],
  },
  {
    name: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'NestJS', 'Laravel', 'FastAPI'],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    name: 'Message Queues',
    skills: ['RabbitMQ', 'Celery'],
  },
  {
    name: 'DevOps & Infrastructure',
    skills: ['Docker', 'GitHub Actions', 'Prometheus', 'Grafana', 'Loki'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'Next.js'],
  },
  {
    name: 'Other',
    skills: ['WebSockets', 'REST APIs', 'OAuth', 'CLI Development', 'SQLAlchemy'],
  },
];

// Flat list for quick access
export const allSkills: string[] = skillCategories.flatMap((cat) => cat.skills);

// Featured skills for hero/intro
export const featuredSkills: string[] = [
  'TypeScript',
  'Rust',
  'Node.js',
  'Laravel',
  'React',
  'PostgreSQL',
  'Redis',
  'Docker',
];
