'use client';

import { useTheme } from '@/app/providers/theme-provider';
import { THEMES, ThemeType } from '@/app/lib/theme';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as ThemeType)}
        className="appearance-none bg-transparent border border-[var(--color-border)] px-4 py-2 pr-8 font-body text-sm cursor-pointer focus:outline-none focus:border-[var(--color-accent)]"
        style={{ 
          backgroundColor: 'var(--color-bg-secondary)',
          color: 'var(--color-text-primary)'
        }}
        aria-label="Select theme"
      >
        {THEMES.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>
      <div 
        className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: 'var(--color-text-muted)' }}
      >
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </div>
    </div>
  );
}
