'use client';

import { useState } from 'react';
import { projects, Project, RELEVANCE_FIELDS, RelevanceField, getProjectsByRelevance } from '@/app/lib/data/projects';

// Squiggle decoration
const Squiggle = () => (
  <svg viewBox="0 0 60 20" className="w-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M2 10 Q15 2, 28 10 T55 10" 
      stroke="var(--color-accent-blue)" 
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

function ProjectCard({ project }: { project: Project }) {
  // Get best metric
  const metrics = [
    { type: 'stars', value: project.stars || 0, icon: '★', label: 'stars' },
    { type: 'downloads', value: project.downloads || 0, icon: '↓', label: 'downloads' },
    { type: 'users', value: project.users || 0, icon: '👥', label: 'users' },
  ];
  const bestMetric = metrics.reduce((prev, current) => (current.value > prev.value ? current : prev));

  return (
    <article 
      className="relative flex flex-col gap-4 p-6 rounded-2xl"
      style={{ 
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border)'
      }}
    >
      {/* Floating metric badge */}
      {bestMetric.value > 0 && (
        <div 
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs"
          style={{ 
            backgroundColor: 'var(--color-bg-tertiary)',
            color: 'var(--color-accent)'
          }}
        >
          {bestMetric.icon} {bestMetric.value.toLocaleString()}
        </div>
      )}
      
      {/* Category */}
      <span 
        className="text-xs uppercase tracking-wider"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {project.type}
      </span>
      
      {/* Title */}
      <h3 
        className="text-xl"
        style={{ 
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-text-primary)'
        }}
      >
        {project.name}
      </h3>
      
      {/* Language badge */}
      <span 
        className="inline-flex w-fit px-3 py-1 rounded-full text-xs"
        style={{ 
          backgroundColor: 'var(--color-accent-secondary)',
          color: '#fff'
        }}
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
            className="text-xs px-3 py-1 rounded-full"
            style={{ 
              backgroundColor: 'var(--color-bg-tertiary)',
              color: 'var(--color-text-muted)'
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Links */}
      <div 
        className="flex gap-4 pt-4"
        style={{ borderTop: '1px solid var(--color-border-light)' }}
      >
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm no-underline"
            style={{ color: 'var(--color-accent)' }}
          >
            GitHub <span>↗</span>
          </a>
        )}
        {project.links.website && (
          <a
            href={project.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm no-underline"
            style={{ color: 'var(--color-accent)' }}
          >
            Demo <span>↗</span>
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
      className="w-full px-6 lg:px-12 py-16 lg:py-24"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="flex items-end gap-4">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)'
              }}
            >
              Explore My Top<br/>
              <span style={{ fontStyle: 'italic' }}>Creations</span>
            </h2>
            <Squiggle />
          </div>
          <a 
            href="https://github.com/codad5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm no-underline"
            style={{ color: 'var(--color-accent)' }}
          >
            Explore All →
          </a>
        </div>
        
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => handleFilterChange('all')}
            className="px-5 py-2 rounded-full text-sm transition-all"
            style={{ 
              backgroundColor: selectedField === 'all' ? 'var(--color-accent-blue)' : 'transparent',
              border: selectedField === 'all' ? 'none' : '1px solid var(--color-border)',
              color: selectedField === 'all' ? '#fff' : 'var(--color-text-secondary)'
            }}
          >
            All
          </button>
          {RELEVANCE_FIELDS.slice(0, 6).map((field) => (
            <button
              key={field.id}
              onClick={() => handleFilterChange(field.id)}
              className="px-5 py-2 rounded-full text-sm transition-all"
              style={{ 
                backgroundColor: selectedField === field.id ? 'var(--color-accent-blue)' : 'transparent',
                border: selectedField === field.id ? 'none' : '1px solid var(--color-border)',
                color: selectedField === field.id ? '#fff' : 'var(--color-text-secondary)'
              }}
            >
              {field.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* View All CTA */}
        <div className="flex justify-center">
          <a
            href="https://github.com/codad5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm no-underline transition-all"
            style={{ 
              border: '2px solid var(--color-text-primary)',
              color: 'var(--color-text-primary)'
            }}
          >
            View All on GitHub <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
