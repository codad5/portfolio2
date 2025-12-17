'use client';

import { useState } from 'react';
import { projects, Project, RELEVANCE_FIELDS, RelevanceField, getProjectsByRelevance } from '@/app/lib/data/projects';

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
        {(() => {
          const metrics = [
            { type: 'stars', value: project.stars || 0, label: '★' },
            { type: 'downloads', value: project.downloads || 0, label: 'DL:' },
            { type: 'users', value: project.users || 0, label: 'USR:' },
          ];
          const best = metrics.reduce((prev, current) => (current.value > prev.value ? current : prev));
          
          if (best.value === 0) return null;

          return (
            <span 
              className="font-mono text-xs"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}
            >
              {best.label} {best.value.toLocaleString()}
            </span>
          );
        })()}
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
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-4 pb-6">
          <div className="flex items-center gap-4">
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

          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleFilterChange('all')}
              className="px-3 py-1 font-mono text-xs uppercase tracking-wider border-2 transition-colors"
              style={{ 
                fontFamily: 'var(--font-mono)',
                borderColor: selectedField === 'all' ? 'var(--color-accent)' : 'var(--color-border)',
                backgroundColor: selectedField === 'all' ? 'var(--color-accent)' : 'transparent',
                color: selectedField === 'all' ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)'
              }}
            >
              [ALL]
            </button>
            {RELEVANCE_FIELDS.slice(0, 6).map((field) => (
              <button
                key={field.id}
                onClick={() => handleFilterChange(field.id)}
                className="px-3 py-1 font-mono text-xs uppercase tracking-wider border-2 transition-colors"
                style={{ 
                  fontFamily: 'var(--font-mono)',
                  borderColor: selectedField === field.id ? 'var(--color-accent)' : 'var(--color-border)',
                  backgroundColor: selectedField === field.id ? 'var(--color-accent)' : 'transparent',
                  color: selectedField === field.id ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)'
                }}
              >
                [{field.id.toUpperCase()}]
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center pt-8">
          <a
            href="https://github.com/codad5"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm uppercase tracking-widest px-6 py-3 border-2 no-underline"
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
