'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeType, DEFAULT_THEME, getThemeById } from '@/app/lib/theme';
import ThemeBubble from '@/app/components/shared/ThemeBubble';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const THEME_COOKIE_NAME = 'portfolio-theme';
const THEME_STORAGE_KEY = 'portfolio-theme';

export function ThemeProvider({ 
  children, 
  initialTheme 
}: { 
  children: ReactNode;
  initialTheme: ThemeType;
}) {
  const [theme, setThemeState] = useState<ThemeType>(initialTheme);
  const [mounted, setMounted] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  // Sync with localStorage on mount (for legacy or fallback)
  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeType | null;
    if (stored && stored !== theme) {
      // Legacy user: migrate localStorage theme to state (which logic below will sync to cookie)
      setThemeState(getThemeById(stored));
      setIsFirstVisit(false);
    } else if (!stored && !initialTheme) {
      setIsFirstVisit(true);
    }
    setMounted(true);
  }, [initialTheme, theme]);

  // Apply theme to document and persist when it changes
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(THEME_STORAGE_KEY, theme);
      // Update cookie to keep server in sync for next request
      const maxAge = 60 * 60 * 24 * 365; // 1 year
      document.cookie = `${THEME_COOKIE_NAME}=${theme}; path=/; max-age=${maxAge}; SameSite=Lax`;
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  const handleThemeSelect = (selectedTheme: ThemeType) => {
    setThemeState(selectedTheme);
    localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
    document.documentElement.setAttribute('data-theme', selectedTheme);
    const maxAge = 60 * 60 * 24 * 365; // 1 year
    document.cookie = `${THEME_COOKIE_NAME}=${selectedTheme}; path=/; max-age=${maxAge}; SameSite=Lax`;
    setIsFirstVisit(false);
  };

  // Render content with floating theme bubble
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
      <ThemeBubble 
        isFirstVisit={isFirstVisit} 
        onSelectThemeAction={handleThemeSelect} 
      />
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}


