'use client';

import { featuredProjects, Project } from '@/app/lib/data/projects';

function ProjectCard({ project }: { project: Project }) {
  return (
    <article 
      className="flex flex-col gap-3 p-6 border"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg-primary)'
      }}
    >
      {/* Project Type Badge */}
      <div className="flex justify-between items-start">
        <span 
          className="text-xs uppercase tracking-wider px-2 py-1"
          style={{ 
            backgroundColor: 'var(--color-bg-tertiary)',
            color: 'var(--color-text-muted)'
          }}
        >
          {project.type}
        </span>
        <span 
          className="text-xs"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {project.mainLang}
        </span>
      </div>

      {/* Title */}
      <h3 
        className="text-xl font-heading font-bold"
        style={{ 
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-text-primary)'
        }}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p 
        className="text-sm flex-1"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 border"
            style={{ 
              borderColor: 'var(--color-border-light)',
              color: 'var(--color-text-muted)'
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div 
        className="flex gap-4 pt-2 border-t"
        style={{ borderColor: 'var(--color-border-light)' }}
      >
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-wider"
            style={{ color: 'var(--color-accent)' }}
          >
            GitHub →
          </a>
        )}
        {project.links.website && (
          <a
            href={project.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-wider"
            style={{ color: 'var(--color-accent)' }}
          >
            Live →
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section 
      id="projects"
      className="w-full py-12 px-6"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 pb-6">
          <h2 
            className="text-3xl md:text-4xl font-heading font-bold"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}
          >
            Projects
          </h2>
          <div 
            className="flex-1 h-px"
            style={{ backgroundColor: 'var(--color-border)' }}
          />
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View all link */}
        <div className="flex justify-center pt-8">
          <a
            href="https://github.com/codad5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm uppercase tracking-wider border no-underline"
            style={{ 
              borderColor: 'var(--color-text-primary)',
              color: 'var(--color-text-primary)'
            }}
          >
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
