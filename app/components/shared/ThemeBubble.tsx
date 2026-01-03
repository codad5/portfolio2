'use client';

import { useState, useEffect } from 'react';
import ThemePicker from './ThemePicker';
import { ThemeType } from '@/app/lib/theme';

interface ThemeBubbleProps {
  isFirstVisit: boolean;
  onSelectThemeAction: (theme: ThemeType) => void;
}

const TOOLTIP_DISMISSED_KEY = 'theme-tooltip-dismissed';

export default function ThemeBubble({ isFirstVisit, onSelectThemeAction }: ThemeBubbleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show tooltip on first visit
  useEffect(() => {
    if (isFirstVisit) {
      const dismissed = localStorage.getItem(TOOLTIP_DISMISSED_KEY);
      if (!dismissed) {
        setShowTooltip(true);
        // Auto-hide tooltip after 8 seconds
        const timer = setTimeout(() => {
          setShowTooltip(false);
        }, 8000);
        return () => clearTimeout(timer);
      }
    }
  }, [isFirstVisit]);

  const handleBubbleClick = () => {
    setShowTooltip(false);
    localStorage.setItem(TOOLTIP_DISMISSED_KEY, 'true');
    setIsOpen(true);
  };

  const handleThemeSelect = (theme: ThemeType) => {
    onSelectThemeAction(theme);
    setIsOpen(false);
  };

  const handleDismissTooltip = () => {
    setShowTooltip(false);
    localStorage.setItem(TOOLTIP_DISMISSED_KEY, 'true');
  };

  return (
    <>
      {/* Theme Picker Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          {/* Picker */}
          <ThemePicker onSelectThemeAction={handleThemeSelect} />
        </div>
      )}

      {/* Floating Bubble */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Tooltip */}
        {showTooltip && (
          <div 
            className="relative flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg max-w-xs animate-pulse"
            style={{ backgroundColor: '#18181b', border: '1px solid #27272a' }}
          >
            <span className="text-sm text-white">
              ✨ Switch between themes to customize your experience!
            </span>
            <button
              onClick={handleDismissTooltip}
              className="text-gray-400 hover:text-white text-sm"
            >
              ✕
            </button>
            {/* Arrow pointing to bubble */}
            <div 
              className="absolute -bottom-2 right-6 w-4 h-4 rotate-45"
              style={{ backgroundColor: '#18181b', borderRight: '1px solid #27272a', borderBottom: '1px solid #27272a' }}
            />
          </div>
        )}

        {/* Bubble Button */}
        <button
          onClick={handleBubbleClick}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          style={{ 
            backgroundColor: '#18181b',
            border: '1px solid #27272a'
          }}
          aria-label="Change theme"
        >
          <span className="text-2xl">🎨</span>
        </button>
      </div>
    </>
  );
}
