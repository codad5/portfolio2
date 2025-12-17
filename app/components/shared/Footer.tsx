'use client';

import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '@/app/providers/theme-provider';

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  const pdfLink = process.env.NEXT_PUBLIC_RESUME_PDF_LINK || 'https://drive.google.com/file/d/1Hq0ggN1ItEXV2-Z5aTpRDLzea35D-Tp5/view?usp=drive_link';

  // Typewriter theme style
  if (theme === 'typewriter') {
    return (
      <footer 
        className="w-full py-8 px-4 sm:px-6 border-t-4"
        style={{ 
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)'
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Paper edge effect */}
          <div 
            className="h-2 mb-6 hidden sm:block"
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
              className="flex flex-wrap justify-center gap-4 font-mono text-xs uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <Link
                href="/"
                className="no-underline hover:underline"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                [HOME]
              </Link>
              <Link
                href="/posts"
                className="no-underline hover:underline"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                [BLOG]
              </Link>
              <Link
                href="/resume"
                className="no-underline hover:underline"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                [RESUME]
              </Link>
              <a 
                href={pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:underline"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                [PDF]
              </a>
              <a 
                href="https://github.com/codad5"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:underline"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                [GITHUB]
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

  // Default: Newspaper theme style
  return (
    <footer 
      className="w-full py-8 px-4 sm:px-6 border-t-2"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg-secondary)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <Link 
              href="/"
              className="text-lg font-heading font-bold no-underline"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)'
              }}
            >
              CHIBUEZE ANIEZEOFOR
            </Link>
            <p 
              className="text-xs pt-1"
              style={{ color: 'var(--color-text-muted)' }}
            >
              © {currentYear} All rights reserved
            </p>
          </div>

          {/* Center - Theme */}
          <div className="flex items-center gap-3">
            <span 
              className="text-xs uppercase tracking-wider"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Theme:
            </span>
            <ThemeSwitcher />
          </div>

          {/* Right - Quick links */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="text-sm uppercase tracking-wider no-underline hover:underline"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Home
            </Link>
            <Link
              href="/posts"
              className="text-sm uppercase tracking-wider no-underline hover:underline"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Blog
            </Link>
            <Link
              href="/resume"
              className="text-sm uppercase tracking-wider no-underline hover:underline"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Resume
            </Link>
            <a
              href={pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-wider no-underline hover:underline"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              PDF
            </a>
            <a
              href="https://github.com/codad5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-wider no-underline hover:underline"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
