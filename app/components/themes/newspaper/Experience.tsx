'use client';

import { experiences, type Experience } from '@/app/lib/data/experience';

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article 
      className="p-6 border"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg-primary)'
      }}
    >
      {/* Header */}
      <div className="flex flex-col gap-1 pb-3 border-b" style={{ borderColor: 'var(--color-border-light)' }}>
        <div className="flex justify-between items-start gap-4">
          <h3 
            className="text-xl font-heading font-bold"
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
                className="hover:underline"
                style={{ color: 'var(--color-accent)' }}
              >
                {experience.company}
              </a>
            ) : (
              experience.company
            )}
          </h3>
          <span 
            className="text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[40%]"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {experience.timeline}
          </span>
        </div>
        <p 
          className="text-sm uppercase tracking-wider"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {experience.position}
        </p>
      </div>

      {/* Highlights */}
      <ul className="flex flex-col gap-2 pt-4">
        {experience.highlights.map((highlight, index) => (
          <li 
            key={index}
            className="text-sm pl-4 relative"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <span 
              className="absolute left-0"
              style={{ color: 'var(--color-accent)' }}
            >
              •
            </span>
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Experience() {
  return (
    <section 
      id="experience"
      className="w-full py-12 px-6"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
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
            Experience
          </h2>
          <div 
            className="flex-1 h-px"
            style={{ backgroundColor: 'var(--color-border)' }}
          />
          <a 
            href="https://drive.google.com/file/d/1Hq0ggN1ItEXV2-Z5aTpRDLzea35D-Tp5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm uppercase tracking-wider border no-underline"
            style={{ 
              borderColor: 'var(--color-text-primary)',
              color: 'var(--color-text-primary)',
              backgroundColor: 'transparent'
            }}
          >
            View Resume
          </a>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
