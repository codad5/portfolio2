'use client';

import { skillCategories } from '@/app/lib/data/skills';

export default function About() {
  return (
    <section 
      id="about"
      className="w-full py-12 px-6"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header - Typewriter style */}
        <div className="flex items-center gap-4 pb-6">
          <span 
            className="font-mono text-sm"
            style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
          >
            01.
          </span>
          <h2 
            className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-widest"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}
          >
            ABOUT_ME
          </h2>
          <div 
            className="flex-1"
            style={{ 
              borderBottom: '2px dashed var(--color-border)'
            }}
          />
        </div>

        {/* Content - Typewriter document style */}
        <div 
          className="p-8 border-2"
          style={{ 
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-bg-secondary)'
          }}
        >
          {/* Document header */}
          <div 
            className="pb-4 border-b-2 mb-6"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <p 
              className="font-mono text-xs uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}
            >
              SUBJECT: Professional Background
            </p>
            <p 
              className="font-mono text-xs uppercase tracking-widest pt-1"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}
            >
              DATE: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Body text */}
          <div 
            className="font-body text-base leading-loose space-y-6"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)' }}
          >
            <p>
              TO WHOM IT MAY CONCERN:
            </p>
            <p className="indent-8">
              I am a software engineer blending engineering discipline with 
              startup execution speed. Known for taking products from concept 
              to scale — from 0 to 100,000+ users — while ensuring security, 
              maintainability, and developer efficiency.
            </p>
            <p className="indent-8">
              With a track record building high-performance systems handling 
              240k+ daily messages with reliable payment processing at scale, 
              I specialize in backend architecture, API design, and system 
              optimization.
            </p>
            <p className="indent-8">
              Currently serving as Founding Engineer at AwaDoc, an AI-driven 
              health assistant empowering Nigerians to access reliable medical 
              insights via WhatsApp.
            </p>
            <p className="pt-4">
              Respectfully,<br/>
              <span className="font-bold">Chibueze Aniezeofor</span>
            </p>
          </div>

          {/* Technical proficiencies box */}
          <div 
            className="mt-8 p-4 border-2"
            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg-primary)' }}
          >
            <h3 
              className="font-mono text-sm uppercase tracking-widest pb-3"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-primary)' }}
            >
              [TECHNICAL PROFICIENCIES]
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {skillCategories.slice(0, 4).map((category) => (
                <div key={category.name}>
                  <span 
                    className="font-mono text-xs"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}
                  >
                    &gt; {category.name}:
                  </span>
                  <span 
                    className="font-mono text-xs pl-2"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
                  >
                    {category.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
