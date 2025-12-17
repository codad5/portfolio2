'use client';

import { featuredSkills } from '@/app/lib/data/skills';

export default function Hero() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header 
      className="w-full border-b-2"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg-primary)'
      }}
    >
      {/* Top bar */}
      <div 
        className="flex justify-between items-center px-6 py-2 text-sm border-b"
        style={{ 
          borderColor: 'var(--color-border-light)',
          color: 'var(--color-text-muted)'
        }}
      >
        <span>Vol. 1, No. 1</span>
        <span>{currentDate}</span>
        <span>codad5.me</span>
      </div>

      {/* Masthead */}
      <div className="flex flex-col items-center gap-4 py-8 px-6">
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-center tracking-tight"
          style={{ 
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-text-primary)'
          }}
        >
          CHIBUEZE ANIEZEOFOR
        </h1>
        
        {/* Decorative rule */}
        <div 
          className="w-full max-w-2xl flex items-center gap-4"
        >
          <div 
            className="flex-1 h-px"
            style={{ backgroundColor: 'var(--color-border)' }}
          />
          <span 
            className="text-sm tracking-widest uppercase"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Software Engineer
          </span>
          <div 
            className="flex-1 h-px"
            style={{ backgroundColor: 'var(--color-border)' }}
          />
        </div>

        {/* Tagline */}
        <p 
          className="text-lg md:text-xl text-center max-w-3xl font-body leading-relaxed"
          style={{ 
            fontFamily: 'var(--font-body)',
            color: 'var(--color-text-secondary)'
          }}
        >
          6+ years building scalable backend systems, developer tools, and AI-driven products.
          Passionate about systems architecture and performance optimization.
        </p>

        {/* Skills ticker */}
        <div 
          className="flex flex-wrap justify-center gap-3 pt-4"
        >
          {featuredSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm border"
              style={{ 
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-primary)',
                backgroundColor: 'var(--color-bg-secondary)'
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation bar */}
      <nav 
        className="flex justify-center items-center gap-8 px-6 py-3 border-t border-b"
        style={{ 
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)'
        }}
      >
        {['About', 'Experience', 'Projects', 'Blog', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm uppercase tracking-wider font-medium no-underline hover:underline"
            style={{ 
              color: 'var(--color-text-primary)',
              textDecorationColor: 'var(--color-accent)'
            }}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
