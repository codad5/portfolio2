'use client';

import { experiences, type Experience } from '@/app/lib/data/experience';

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline dot and line container */}
      <div className="relative flex flex-col items-center" style={{ width: '24px' }}>
        {/* Dot */}
        <div 
          className="w-4 h-4 rounded-full z-10"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />
        {/* Line - only show if not last item */}
        {index < experiences.length - 1 && (
          <div 
            className="w-0.5 flex-1"
            style={{ backgroundColor: 'var(--color-border)' }}
          />
        )}
      </div>
      
      {/* Card content */}
      <div 
        className="flex-1 flex flex-col gap-4 p-6 rounded-2xl"
        style={{ 
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)'
        }}
      >
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 
              className="text-xl"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)'
              }}
            >
              {experience.url ? (
                <a 
                  href={experience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
            </h3>
            <span 
              className="text-sm uppercase tracking-wider"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {experience.position}
            </span>
          </div>
          <span 
            className="px-4 py-2 rounded-full text-xs"
            style={{ 
              backgroundColor: 'var(--color-bg-tertiary)',
              color: 'var(--color-text-secondary)'
            }}
          >
            {experience.timeline}
          </span>
        </div>
        
        {/* Highlights */}
        <div className="flex flex-col gap-2">
          {experience.highlights.slice(0, 3).map((highlight, i) => (
            <div 
              key={i}
              className="flex items-start gap-3"
            >
              <span 
                className="text-sm"
                style={{ color: 'var(--color-accent-secondary)' }}
              >
                ✓
              </span>
              <span 
                className="text-sm"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {highlight}
              </span>
            </div>
          ))}
        </div>
        
        {/* View link */}
        {experience.url && (
          <a 
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full no-underline transition-all"
            style={{ 
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-primary)'
            }}
          >
            ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section 
      id="experience"
      className="w-full px-6 lg:px-12 py-16 lg:py-24"
      style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)'
              }}
            >
              Work<br/>
              <span style={{ fontStyle: 'italic' }}>Experience</span>
            </h2>
          </div>
          <a 
            href="https://drive.google.com/file/d/1Hq0ggN1ItEXV2-Z5aTpRDLzea35D-Tp5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm no-underline"
            style={{ 
              border: '2px solid var(--color-text-primary)',
              color: 'var(--color-text-primary)'
            }}
          >
            View Resume <span>↗</span>
          </a>
        </div>
        
        {/* Timeline */}
        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={exp.id} 
              experience={exp} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
