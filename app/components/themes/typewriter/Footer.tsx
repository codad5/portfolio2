'use client';

import ThemeSwitcher from '@/app/components/shared/ThemeSwitcher';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="w-full py-8 px-6 border-t-4"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg-secondary)'
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Paper edge effect */}
        <div 
          className="h-2 mb-6"
          style={{ 
            background: 'repeating-linear-gradient(90deg, transparent, transparent 10px, var(--color-border-light) 10px, var(--color-border-light) 11px)'
          }}
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Signature */}
          <div 
            className="text-center md:text-left font-mono"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}
          >
            <p className="text-sm uppercase tracking-widest">
              AUTHORED BY: CHIBUEZE ANIEZEOFOR
            </p>
            <p className="text-xs pt-1">
              © {currentYear} // ALL RIGHTS RESERVED
            </p>
          </div>

          {/* Center - Theme */}
          <div className="flex items-center gap-3">
            <span 
              className="font-mono text-xs uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}
            >
              MODE:
            </span>
            <ThemeSwitcher />
          </div>

          {/* Right - Quick nav */}
          <div 
            className="flex gap-4 font-mono text-xs uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <a 
              href="#about"
              className="no-underline hover:underline"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              [1]
            </a>
            <a 
              href="#projects"
              className="no-underline hover:underline"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              [3]
            </a>
            <a 
              href="#contact"
              className="no-underline hover:underline"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              [5]
            </a>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div 
          className="mt-6 text-center font-mono text-xs"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}
        >
          - - - END OF DOCUMENT - - -
        </div>
      </div>
    </footer>
  );
}
