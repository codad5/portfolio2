'use client';

import { featuredSkills } from '@/app/lib/data/skills';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'CHIBUEZE ANIEZEOFOR';
  
  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <header 
      className="w-full border-b-4"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg-primary)'
      }}
    >
      {/* Paper edge effect */}
      <div 
        className="h-4"
        style={{ 
          background: 'repeating-linear-gradient(90deg, transparent, transparent 10px, var(--color-border-light) 10px, var(--color-border-light) 11px)'
        }}
      />

      {/* Masthead */}
      <div className="flex flex-col items-center gap-6 py-12 px-6">
        {/* Name with typewriter effect */}
        <div className="relative">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-center tracking-widest uppercase"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)',
              letterSpacing: '0.2em'
            }}
          >
            {displayText}
            <span 
              className="inline-block w-3 h-12 ml-1 animate-pulse"
              style={{ backgroundColor: 'var(--color-text-primary)' }}
            />
          </h1>
        </div>

        {/* Decorative dashes */}
        <div 
          className="text-2xl tracking-widest"
          style={{ color: 'var(--color-text-muted)' }}
        >
          - - - - - - - - - -
        </div>

        {/* Tagline */}
        <p 
          className="text-lg md:text-xl text-center max-w-2xl font-body uppercase tracking-wider"
          style={{ 
            fontFamily: 'var(--font-body)',
            color: 'var(--color-text-secondary)'
          }}
        >
          Software Engineer // 6+ Years Experience
        </p>

        {/* Skills as typed list */}
        <div 
          className="flex flex-wrap justify-center gap-4 pt-4 font-mono text-sm"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {featuredSkills.map((skill, index) => (
            <span
              key={skill}
              style={{ color: 'var(--color-text-primary)' }}
            >
              [{skill}]
            </span>
          ))}
        </div>
      </div>

      {/* Navigation - typewriter style menu */}
      <nav 
        className="flex justify-center items-center gap-6 px-6 py-4 border-t-2 border-b-2"
        style={{ 
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)'
        }}
      >
        {['ABOUT', 'EXPERIENCE', 'PROJECTS', 'BLOG', 'CONTACT'].map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-mono text-sm tracking-widest no-underline hover:underline"
            style={{ 
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-text-primary)',
              textDecorationStyle: 'dashed'
            }}
          >
            {index + 1}. {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
