'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeType, DEFAULT_THEME, getThemeById } from '@/app/lib/theme';
import ThemeBubble from '@/app/components/shared/ThemeBubble';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'portfolio-theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored) {
      setThemeState(getThemeById(stored));
      setIsFirstVisit(false);
    } else {
      // No theme stored = first time visitor, use default and show bubble tooltip
      setIsFirstVisit(true);
      // Set default theme immediately
      document.documentElement.setAttribute('data-theme', DEFAULT_THEME);
    }
    setMounted(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  const handleThemeSelect = (selectedTheme: ThemeType) => {
    setThemeState(selectedTheme);
    localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
    document.documentElement.setAttribute('data-theme', selectedTheme);
    setIsFirstVisit(false);
  };

  // For SSR and crawlers, render children with default theme
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: DEFAULT_THEME, setTheme: () => {} }}>
        {children}
      </ThemeContext.Provider>
    );
  }

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


