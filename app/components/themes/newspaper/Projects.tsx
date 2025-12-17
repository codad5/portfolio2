'use client';

import { useState } from 'react';
import { projects, Project, RELEVANCE_FIELDS, RelevanceField, getProjectsByRelevance } from '@/app/lib/data/projects';

function ProjectCard({ project }: { project: Project }) {
  return (
    <article 
      className="flex flex-col gap-3 p-5 border"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg-secondary)'
      }}
    >
      {/* Category */}
      <div className="flex items-center justify-between">
        <span 
          className="text-xs uppercase tracking-wider"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {project.type}
        </span>
        {project.stars && (
          <span 
            className="text-xs"
            style={{ color: 'var(--color-accent)' }}
          >
            ★ {project.stars.toLocaleString()}
          </span>
        )}
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

      {/* Language */}
      <span 
        className="text-sm font-semibold"
        style={{ color: 'var(--color-accent)' }}
      >
        {project.mainLang}
      </span>

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
        className="flex gap-4 pt-3 border-t"
        style={{ borderColor: 'var(--color-border-light)' }}
      >
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider"
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
            className="text-xs uppercase tracking-wider"
            style={{ color: 'var(--color-accent)' }}
          >
            Live Demo →
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [selectedField, setSelectedField] = useState<RelevanceField | 'all'>('all');

  const handleFilterChange = (field: RelevanceField | 'all') => {
    setSelectedField(field);
    if (field === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(getProjectsByRelevance(field));
    }
  };

  return (
    <section 
      id="projects"
      className="w-full py-12 px-6"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-4 pb-6">
          <div className="flex items-center gap-4">
            <h2 
              className="text-3xl md:text-4xl font-heading font-bold"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)'
              }}
            >
              Featured Projects
            </h2>
            <div 
              className="flex-1 h-px"
              style={{ backgroundColor: 'var(--color-border)' }}
            />
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleFilterChange('all')}
              className="px-3 py-1 text-xs uppercase tracking-wider border transition-colors"
              style={{ 
                borderColor: selectedField === 'all' ? 'var(--color-accent)' : 'var(--color-border)',
                backgroundColor: selectedField === 'all' ? 'var(--color-accent)' : 'transparent',
                color: selectedField === 'all' ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)'
              }}
            >
              All
            </button>
            {RELEVANCE_FIELDS.slice(0, 6).map((field) => (
              <button
                key={field.id}
                onClick={() => handleFilterChange(field.id)}
                className="px-3 py-1 text-xs uppercase tracking-wider border transition-colors"
                style={{ 
                  borderColor: selectedField === field.id ? 'var(--color-accent)' : 'var(--color-border)',
                  backgroundColor: selectedField === field.id ? 'var(--color-accent)' : 'transparent',
                  color: selectedField === field.id ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)'
                }}
              >
                {field.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center gap-4 pt-8">
          <a
            href="https://github.com/codad5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm uppercase tracking-wider border no-underline"
            style={{ 
              borderColor: 'var(--color-text-primary)',
              color: 'var(--color-text-primary)',
              backgroundColor: 'transparent'
            }}
          >
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
