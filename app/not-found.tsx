'use client';

import Link from 'next/link';
import { useTheme } from '@/app/providers/theme-provider';
import Footer from '@/app/components/shared/Footer';

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        {theme === 'typewriter' ? (
          // Typewriter Theme 404
          <div className="max-w-xl w-full">
            <div 
              className="text-6xl md:text-8xl font-heading font-bold mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              404
            </div>
            <div 
              className="text-xl md:text-2xl font-mono uppercase tracking-widest mb-8 p-4 border-2 border-dashed"
              style={{ 
                fontFamily: 'var(--font-mono)', 
                color: 'var(--color-accent)',
                borderColor: 'var(--color-text-muted)'
              }}
            >
              [ERROR: FILE_NOT_FOUND]
            </div>
            <p 
              className="font-body text-lg mb-8"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              The requested document could not be located in our archives. It may have been redacted or never existed.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-4 border-2 font-mono text-sm uppercase tracking-widest hover:bg-[var(--color-bg-secondary)] transition-colors"
              style={{ 
                fontFamily: 'var(--font-mono)', 
                borderColor: 'var(--color-text-primary)',
                color: 'var(--color-text-primary)'
              }}
            >
              [RETURN TO INDEX]
            </Link>
          </div>
        ) : (
          // Newspaper Theme 404
          <div className="max-w-xl w-full">
            <span 
              className="inline-block px-3 py-1 mb-6 text-xs font-bold uppercase tracking-wider border"
              style={{ 
                borderColor: 'var(--color-accent)',
                color: 'var(--color-accent)'
              }}
            >
              Breaking News
            </span>
            <h1 
              className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              PAGE MISSING
            </h1>
            <div 
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
            <p 
              className="font-body text-xl mb-10 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              We regret to inform our readers that the page you are looking for has gone missing. Our reporters are investigating the issue.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
              style={{ 
                backgroundColor: 'var(--color-accent)',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Back to Home
            </Link>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
