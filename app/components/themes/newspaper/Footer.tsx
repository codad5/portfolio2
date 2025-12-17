'use client';

import ThemeSwitcher from '@/app/components/shared/ThemeSwitcher';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="w-full py-8 px-6 border-t"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg-secondary)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Copyright */}
          <div 
            className="text-center md:text-left"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <p className="text-sm">
              © {currentYear} Chibueze Aniezeofor. All rights reserved.
            </p>
            <p className="text-xs pt-1">
              Published at codad5.me
            </p>
          </div>

          {/* Center - Theme Switcher */}
          <div className="flex items-center gap-3">
            <span 
              className="text-xs uppercase tracking-wider"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Theme:
            </span>
            <ThemeSwitcher />
          </div>

          {/* Right - Quick Links */}
          <div 
            className="flex gap-6 text-sm"
          >
            <a 
              href="#about"
              className="no-underline hover:underline"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              About
            </a>
            <a 
              href="#projects"
              className="no-underline hover:underline"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Projects
            </a>
            <a 
              href="#contact"
              className="no-underline hover:underline"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
