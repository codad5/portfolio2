'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeType, THEME_STORAGE_KEY, THEME_COOKIE_NAME, getThemeById } from '@/app/lib/theme';
import ThemeBubble from '@/app/components/shared/ThemeBubble';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

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
    
    // If we have a stored theme and it differs from what the server gave us,
    // we might want to prioritize it (migration case).
    // However, if the server read a cookie, we should stick with that to avoid FOUC.
    // The only case to migrate is if the server used the default because the cookie was missing.
    if (stored && stored !== theme) {
      setThemeState(getThemeById(stored));
      setIsFirstVisit(false);
    } else if (!stored && !mounted) {
      // If no storage and we haven't mounted yet, it might be a first visit
      // Note: we check !mounted to only do this once
      setIsFirstVisit(true);
    }
    setMounted(true);
  }, [theme, mounted]);

  // Apply theme to document and persist when it changes
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(THEME_STORAGE_KEY, theme);
      
      // Update cookie to keep server in sync
      const maxAge = 60 * 60 * 24 * 365; // 1 year
      document.cookie = `${THEME_COOKIE_NAME}=${theme}; path=/; max-age=${maxAge}; SameSite=Lax`;
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  const handleThemeSelect = (selectedTheme: ThemeType) => {
    setThemeState(selectedTheme);
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


