'use client';

import { useState } from 'react';
import { featuredSkills } from '@/app/lib/data/skills';

// Decorative SVG components
const Squiggle = () => (
  <svg viewBox="0 0 120 30" className="w-32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M5 15 Q20 5, 35 15 T65 15 T95 15 T115 15" 
      stroke="var(--color-accent-blue)" 
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const Star = ({ className = '' }: { className?: string }) => (
  <span 
    className={`text-2xl ${className}`} 
    style={{ color: 'var(--color-accent-blue)' }}
  >
    ✦
  </span>
);

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = ['About', 'Experience', 'Projects', 'Blog', 'Contact'];

  return (
    <header 
      className="w-full flex flex-col"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 lg:px-12 py-6">
        {/* Logo */}
        <span 
          className="text-xl font-bold italic"
          style={{ 
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-accent-blue)'
          }}
        >
          Codad5
        </span>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-5 py-2 rounded-full text-sm no-underline transition-all"
              style={{ 
                backgroundColor: i === 0 ? 'var(--color-accent-blue)' : 'transparent',
                color: i === 0 ? '#fff' : 'var(--color-text-primary)'
              }}
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* CTA Button */}
        <a 
          href="#contact"
          className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full text-sm no-underline transition-all"
          style={{ 
            border: '2px solid var(--color-text-primary)',
            color: 'var(--color-text-primary)'
          }}
        >
          Let's Talk <span>↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden flex flex-col px-6 pb-6 gap-2"
          style={{ backgroundColor: 'var(--color-bg-primary)' }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm no-underline"
              style={{ 
                backgroundColor: 'var(--color-bg-secondary)',
                color: 'var(--color-text-primary)'
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Hero Content - Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Left: Big Typography */}
        <div className="flex flex-col gap-8">
          <div className="relative">
            <Star className="absolute -top-4 -left-4" />
            <h1 
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}
          >
            Software<br/>
            Engineer &<br/>
            <span style={{ fontStyle: 'italic' }}>more</span>
          </h1>
            <Star className="absolute -bottom-2 right-0 lg:right-1/4" />
          </div>
          
          {/* CTA Button */}
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm no-underline w-fit transition-all"
            style={{ 
              backgroundColor: 'var(--color-accent-secondary)',
              color: '#fff'
            }}
          >
            Let's Talk <span>↗</span>
          </a>
        </div>
        
        {/* Right: Decorative Photo Placeholder */}
        <div className="relative flex items-center justify-center">
          {/* Squiggle decoration */}
          <div className="absolute -top-8 -left-4 rotate-12">
            <Squiggle />
          </div>
          
          {/* Photo container */}
          <div 
            className="relative w-64 h-80 lg:w-80 lg:h-96 rounded-3xl flex items-center justify-center"
            style={{ 
              backgroundColor: 'var(--color-accent-blue)',
              transform: 'rotate(3deg)'
            }}
          >
            <span 
              className="text-6xl"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              {"</>"}
            </span>
          </div>
          
          {/* Decorative star */}
          <Star className="absolute top-4 right-8" />
        </div>
      </div>

      {/* Hero Content - Introduction Section */}
      <div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-6 lg:px-12 py-12 lg:py-16"
        style={{ 
          borderTop: '1px solid var(--color-border)'
        }}
      >
        {/* Left: Bio */}
        <div className="flex flex-col gap-6">
          <span className="text-xl lg:text-2xl">HI, I'M 👋</span>
          <h2 
            className="text-4xl lg:text-5xl xl:text-6xl"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}
          >
            Chibueze Aniezeofor
          </h2>
          <p 
            className="text-lg leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            I'm an{' '}
            <span 
              style={{ 
                textDecoration: 'underline',
                textDecorationColor: 'var(--color-accent)',
                textDecorationThickness: '2px',
                textUnderlineOffset: '4px'
              }}
            >
              award-winning
            </span>{' '}
            software engineer with over{' '}
            <span 
              style={{ 
                fontStyle: 'italic',
                textDecoration: 'underline',
                textDecorationColor: 'var(--color-accent)',
                textDecorationThickness: '2px',
                textUnderlineOffset: '4px'
              }}
            >
              6 years experience
            </span>
            , building scalable backend systems and developer tools.
          </p>
          
          {/* Social links */}
          <div className="flex flex-col gap-4">
            <span 
              className="text-sm uppercase tracking-wider"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Follow Me
            </span>
            <div className="flex gap-3">
              {[
                { abbr: 'Gh', url: 'https://github.com/codad5' },
                { abbr: 'Li', url: 'https://www.linkedin.com/in/chibueze-michael' },
                { abbr: 'Tw', url: 'https://twitter.com/codad5_' },
              ].map((social) => (
                <a
                  key={social.abbr}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full text-sm no-underline transition-all"
                  style={{ 
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-primary)'
                  }}
                >
                  {social.abbr}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right: CTA + Decorations */}
        <div className="flex flex-col gap-8 items-start lg:items-end justify-end">
          {/* Skills pills */}
          <div className="flex flex-wrap gap-3">
            {featuredSkills.slice(0, 6).map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm"
                style={{ 
                  backgroundColor: 'var(--color-bg-tertiary)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-primary)'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
          
          {/* Big CTA */}
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full no-underline transition-all"
            style={{ 
              backgroundColor: 'var(--color-accent-blue)',
              color: '#fff'
            }}
          >
            I'M READY TO TALK <span className="text-lg">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
