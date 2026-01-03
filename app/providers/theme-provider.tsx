'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeType, DEFAULT_THEME, getThemeById } from '@/app/lib/theme';
import ThemePicker from '@/app/components/shared/ThemePicker';

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
      // No theme stored = first time visitor
      setIsFirstVisit(true);
    }
    setMounted(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (mounted && !isFirstVisit) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  }, [theme, mounted, isFirstVisit]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  const handleThemeSelect = (selectedTheme: ThemeType) => {
    setThemeState(selectedTheme);
    localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
    document.documentElement.setAttribute('data-theme', selectedTheme);
    setIsFirstVisit(false);
  };

  // Prevent flash of wrong theme - but still apply default for SSR/crawlers
  if (!mounted) {
    // For SSR and crawlers, render children with default theme
    // This ensures content is always indexable
    return (
      <ThemeContext.Provider value={{ theme: DEFAULT_THEME, setTheme: () => {} }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  // Always render content, show theme picker as overlay for first-time visitors
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {isFirstVisit && <ThemePicker onSelectThemeAction={handleThemeSelect} />}
      {children}
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

