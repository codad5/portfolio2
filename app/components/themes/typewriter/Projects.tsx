'use client';

import { featuredProjects, Project } from '@/app/lib/data/projects';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div 
      className="p-5 border-2"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg-primary)'
      }}
    >
      {/* File tab header */}
      <div 
        className="flex justify-between items-center pb-2 mb-3 border-b-2"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <span 
          className="font-mono text-xs uppercase"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}
        >
          FILE #{String(index + 1).padStart(2, '0')} // {project.type.toUpperCase()}
        </span>
      </div>

      {/* Title */}
      <h3 
        className="text-lg font-heading font-bold uppercase tracking-wider"
        style={{ 
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-text-primary)'
        }}
      >
        {project.name}
      </h3>

      {/* Language */}
      <p 
        className="font-mono text-xs pt-1"
        style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}
      >
        LANG: {project.mainLang}
      </p>

      {/* Description */}
      <p 
        className="font-body text-sm pt-3"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
      >
        {project.description}
      </p>

      {/* Links */}
      <div className="flex gap-4 pt-4">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider no-underline hover:underline"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}
          >
            [SOURCE]
          </a>
        )}
        {project.links.website && (
          <a
            href={project.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider no-underline hover:underline"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}
          >
            [LIVE]
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section 
      id="projects"
      className="w-full py-12 px-6"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 pb-6">
          <span 
            className="font-mono text-sm"
            style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
          >
            03.
          </span>
          <h2 
            className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-widest"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}
          >
            PROJECT_FILES
          </h2>
          <div 
            className="flex-1"
            style={{ 
              borderBottom: '2px dashed var(--color-border)'
            }}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center pt-8">
          <a
            href="https://github.com/codad5"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm uppercase tracking-widest px-6 py-3 border-2 no-underline hover:bg-[var(--color-bg-secondary)]"
            style={{ 
              fontFamily: 'var(--font-mono)',
              borderColor: 'var(--color-text-primary)',
              color: 'var(--color-text-primary)'
            }}
          >
            [VIEW ALL FILES ON GITHUB]
          </a>
        </div>
      </div>
    </section>
  );
}
