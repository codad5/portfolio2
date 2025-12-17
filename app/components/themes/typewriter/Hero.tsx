'use client';

import { featuredSkills } from '@/app/lib/data/skills';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const fullText = 'CHIBUEZE ANIEZEOFOR';
  
  const navItems = ['ABOUT', 'EXPERIENCE', 'PROJECTS', 'BLOG', 'CONTACT'];
  
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
        className="h-4 hidden sm:block"
        style={{ 
          background: 'repeating-linear-gradient(90deg, transparent, transparent 10px, var(--color-border-light) 10px, var(--color-border-light) 11px)'
        }}
      />

      {/* Masthead */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 py-8 sm:py-12 px-4 sm:px-6">
        {/* Name with typewriter effect */}
        <div className="relative">
          <h1 
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-center tracking-widest uppercase"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)',
              letterSpacing: '0.1em'
            }}
          >
            {displayText}
            <span 
              className="inline-block w-2 sm:w-3 h-6 sm:h-12 ml-1 animate-pulse"
              style={{ backgroundColor: 'var(--color-text-primary)' }}
            />
          </h1>
        </div>

        {/* Decorative dashes */}
        <div 
          className="text-lg sm:text-2xl tracking-widest"
          style={{ color: 'var(--color-text-muted)' }}
        >
          - - - - - - - - - -
        </div>

        {/* Tagline */}
        <p 
          className="text-sm sm:text-lg md:text-xl text-center max-w-2xl font-body uppercase tracking-wider"
          style={{ 
            fontFamily: 'var(--font-body)',
            color: 'var(--color-text-secondary)'
          }}
        >
          Software Engineer // 6+ Years Experience
        </p>

        {/* Skills as typed list */}
        <div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 pt-4 font-mono text-xs sm:text-sm"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {featuredSkills.map((skill) => (
            <span
              key={skill}
              style={{ color: 'var(--color-text-primary)' }}
            >
              [{skill}]
            </span>
          ))}
        </div>
      </div>

      {/* Navigation - Desktop */}
      <nav 
        className="hidden md:flex justify-center items-center gap-6 px-6 py-4 border-t-2 border-b-2"
        style={{ 
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)'
        }}
      >
        {navItems.map((item, index) => (
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

      {/* Navigation - Mobile */}
      <div 
        className="md:hidden border-t-2 border-b-2"
        style={{ 
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)'
        }}
      >
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-full flex justify-between items-center px-6 py-4 font-mono"
          style={{ 
            fontFamily: 'var(--font-mono)',
            color: 'var(--color-text-primary)' 
          }}
        >
          <span className="text-sm tracking-widest">[MENU]</span>
          <span className="text-sm">{mobileMenuOpen ? '[CLOSE]' : '[OPEN]'}</span>
        </button>
        
        {mobileMenuOpen && (
          <div 
            className="flex flex-col border-t-2"
            style={{ borderColor: 'var(--color-border)' }}
          >
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 font-mono text-sm tracking-widest no-underline border-b"
                style={{ 
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-text-primary)',
                  borderColor: 'var(--color-border-light)'
                }}
              >
                {index + 1}. {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
