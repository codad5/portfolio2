'use client';

import { useState } from 'react';
import { THEMES, ThemeType, ThemeConfig } from '@/app/lib/theme';
import Image from 'next/image';

interface ThemePickerProps {
  onSelectThemeAction: (theme: ThemeType) => void;
  currentThemeId: ThemeType;
}

// Default preview component when no image is available
function DefaultPreview({ theme }: { theme: ThemeConfig }) {
  return (
    <div 
      className="w-full h-full flex flex-col items-center justify-center gap-6 p-8 rounded-2xl"
      style={{ backgroundColor: theme.colors.bg }}
    >
      <span className="text-6xl">{theme.icon}</span>
      <div className="text-center">
        <h3 
          className="text-2xl font-bold"
          style={{ color: theme.colors.accent }}
        >
          {theme.name}
        </h3>
        <p 
          className="text-sm max-w-xs opacity-70"
          style={{ color: theme.colors.accent }}
        >
          {theme.longDescription}
        </p>
      </div>
    </div>
  );
}

export default function ThemePicker({ onSelectThemeAction, currentThemeId }: ThemePickerProps) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeConfig>(
    THEMES.find(t => t.id === currentThemeId) ?? THEMES[0]
  );
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const handleSelect = (theme: ThemeConfig) => {
    setSelectedTheme(theme);
  };

  const handleConfirm = () => {
    onSelectThemeAction(selectedTheme.id);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col lg:flex-row"
      style={{ backgroundColor: '#09090b' }}
    >
      {/* Left Panel - Theme Selection */}
      <div className="flex-1 flex flex-col p-6 lg:p-12 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <span 
            className="text-xs uppercase tracking-widest"
            style={{ color: '#71717a' }}
          >
            Welcome to
          </span>
          <h1 
            className="text-3xl lg:text-5xl font-bold"
            style={{ 
              background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Codad5.me
          </h1>
          <p 
            className="text-base lg:text-lg max-w-md"
            style={{ color: '#a1a1aa' }}
          >
            Choose your preferred reading experience
          </p>
        </div>

        {/* Theme List */}
        <div className="flex flex-col gap-3 flex-1 py-8">
          <span 
            className="text-xs uppercase tracking-widest"
            style={{ color: '#52525b' }}
          >
            Select a theme
          </span>
          
          <div className="flex flex-col gap-2">
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleSelect(theme)}
                className="flex items-center gap-4 p-4 rounded-xl text-left transition-all"
                style={{ 
                  backgroundColor: selectedTheme.id === theme.id ? '#18181b' : 'transparent',
                  border: selectedTheme.id === theme.id ? '1px solid #27272a' : '1px solid transparent'
                }}
              >
                {/* Radio indicator */}
                <div 
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ 
                    border: selectedTheme.id === theme.id 
                      ? `2px solid ${theme.colors.accent}` 
                      : '2px solid #3f3f46'
                  }}
                >
                  {selectedTheme.id === theme.id && (
                    <div 
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: theme.colors.accent }}
                    />
                  )}
                </div>

                {/* Theme icon */}
                <span className="text-2xl">{theme.icon}</span>
                
                {/* Theme info */}
                <div className="flex flex-col gap-0.5 flex-1">
                  <span 
                    className="font-medium"
                    style={{ color: selectedTheme.id === theme.id ? '#fafafa' : '#a1a1aa' }}
                  >
                    {theme.name}
                  </span>
                  <span 
                    className="text-sm"
                    style={{ color: '#71717a' }}
                  >
                    {theme.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-4">
          <button
            onClick={handleConfirm}
            className="w-full py-4 rounded-xl font-medium text-white transition-all hover:opacity-90"
            style={{ backgroundColor: selectedTheme.colors.accent }}
          >
            Continue with {selectedTheme.name}
          </button>
          <p 
            className="text-xs text-center"
            style={{ color: '#52525b' }}
          >
            You can change your theme anytime in the footer
          </p>
        </div>
      </div>

      {/* Right Panel - Preview */}
      <div 
        className="hidden lg:flex flex-1 items-center justify-center p-12"
        style={{ backgroundColor: '#0a0a0b' }}
      >
        <div className="w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
          {selectedTheme.previewImage && !imageError[selectedTheme.id] ? (
            <Image
              src={selectedTheme.previewImage}
              alt={`${selectedTheme.name} preview`}
              width={800}
              height={600}
              className="w-full h-full object-contain"
              style={{ backgroundColor: selectedTheme.colors.bg }}
              onError={() => setImageError(prev => ({ ...prev, [selectedTheme.id]: true }))}
              priority
            />
          ) : (
            <DefaultPreview theme={selectedTheme} />
          )}
        </div>
      </div>
    </div>
  );
}
