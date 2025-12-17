'use client';

import { skillCategories } from '@/app/lib/data/skills';

export default function About() {
  return (
    <section 
      id="about"
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
            About
          </h2>
          <div 
            className="flex-1 h-px"
            style={{ backgroundColor: 'var(--color-border)' }}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main article - 2 columns */}
          <article 
            className="lg:col-span-2 font-body text-lg leading-relaxed"
            style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-primary)'
            }}
          >
            <p className="drop-cap">
              Software engineer blending engineering discipline with startup execution speed. 
              Known for taking products from concept to scale — from 0 to 100,000+ users — 
              while ensuring security, maintainability, and developer efficiency.
            </p>
            <p className="pt-4">
              With a track record building high-performance systems handling 240k+ daily messages 
              with reliable payment processing at scale, I specialize in backend architecture, 
              API design, and system optimization.
            </p>
            <p className="pt-4">
              Currently serving as Founding Engineer at AwaDoc, an AI-driven health assistant 
              empowering Nigerians to access reliable medical insights via WhatsApp.
            </p>
            <p className="pt-4">
              Beyond my professional work, I'm passionate about open source development and 
              have contributed tools like FLI (12,000+ downloads on crates.io), a type-safe 
              CLI library for Rust.
            </p>
          </article>

          {/* Sidebar - Technical Proficiencies */}
          <aside 
            className="p-6 border"
            style={{ 
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-bg-secondary)'
            }}
          >
            <h3 
              className="text-xl font-heading font-bold pb-4 border-b"
              style={{ 
                fontFamily: 'var(--font-heading)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-primary)'
              }}
            >
              Technical Stack
            </h3>
            <div className="flex flex-col gap-4 pt-4">
              {skillCategories.slice(0, 5).map((category) => (
                <div key={category.name}>
                  <h4 
                    className="text-sm uppercase tracking-wider font-bold pb-1"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {category.name}
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {category.skills.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
