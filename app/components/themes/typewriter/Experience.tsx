'use client';

import { experiences, type Experience } from '@/app/lib/data/experience';

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <div 
      className="p-6 border-2"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg-primary)'
      }}
    >
      {/* Index card header */}
      <div className="flex justify-between items-start pb-3 border-b-2" style={{ borderColor: 'var(--color-border)' }}>
        <div>
          <span 
            className="font-mono text-xs"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}
          >
            CARD #{String(index + 1).padStart(2, '0')}
          </span>
          <h3 
            className="text-lg font-heading font-bold uppercase tracking-wider pt-1"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}
          >
            {experience.company}
          </h3>
        </div>
        <span 
          className="font-mono text-xs"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}
        >
          {experience.timeline}
        </span>
      </div>

      {/* Position */}
      <p 
        className="font-mono text-sm uppercase tracking-widest pt-3"
        style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}
      >
        POSITION: {experience.position}
      </p>

      {/* Highlights */}
      <ul className="pt-4 space-y-2">
        {experience.highlights.slice(0, 3).map((highlight, i) => (
          <li 
            key={i}
            className="font-body text-sm"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
          >
            <span style={{ color: 'var(--color-text-muted)' }}>-</span> {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section 
      id="experience"
      className="w-full py-12 px-6"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-center gap-4 pb-6">
          <span 
            className="font-mono text-sm"
            style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
          >
            02.
          </span>
          <h2 
            className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-widest"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}
          >
            WORK_HISTORY
          </h2>
          <div 
            className="flex-1"
            style={{ 
              borderBottom: '2px dashed var(--color-border)'
            }}
          />
          <a 
            href="https://drive.google.com/file/d/1Hq0ggN1ItEXV2-Z5aTpRDLzea35D-Tp5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest px-3 py-2 border-2 no-underline"
            style={{ 
              fontFamily: 'var(--font-mono)',
              borderColor: 'var(--color-text-primary)',
              color: 'var(--color-text-primary)'
            }}
          >
            [RESUME.PDF]
          </a>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
