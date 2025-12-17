'use client';

import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function BlogFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="w-full py-8 px-6 border-t-2 mt-12"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg-secondary)'
      }}
    >
      <div className="max-w-4xl mx-auto">
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
          <div className="flex gap-4">
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
