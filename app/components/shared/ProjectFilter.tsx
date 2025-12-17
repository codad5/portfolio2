'use client';

import { useState } from 'react';
import { RELEVANCE_FIELDS, RelevanceField, Project, getProjectsByRelevance, projects } from '@/app/lib/data/projects';

interface ProjectFilterProps {
  onFilterChange: (filteredProjects: Project[]) => void;
}

export default function ProjectFilter({ onFilterChange }: ProjectFilterProps) {
  const [selectedField, setSelectedField] = useState<RelevanceField | 'all'>('all');

  const handleChange = (field: RelevanceField | 'all') => {
    setSelectedField(field);
    if (field === 'all') {
      onFilterChange(projects);
    } else {
      onFilterChange(getProjectsByRelevance(field));
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleChange('all')}
        className="px-3 py-1 text-xs uppercase tracking-wider border transition-colors"
        style={{ 
          borderColor: selectedField === 'all' ? 'var(--color-accent)' : 'var(--color-border)',
          backgroundColor: selectedField === 'all' ? 'var(--color-accent)' : 'transparent',
          color: selectedField === 'all' ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)'
        }}
      >
        All
      </button>
      {RELEVANCE_FIELDS.map((field) => (
        <button
          key={field.id}
          onClick={() => handleChange(field.id)}
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
  );
}
