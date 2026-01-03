export type ThemeType = 'newspaper' | 'typewriter' | 'creative';

export interface ThemeConfig {
  id: ThemeType;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  previewImage?: string; // Path to preview image in /public
  colors: {
    bg: string;
    accent: string;
  };
}

export const THEMES: ThemeConfig[] = [
  {
    id: 'newspaper',
    name: 'Classic Newspaper',
    description: 'Serif typography with multi-column layouts',
    longDescription: 'A classic editorial design inspired by traditional newspapers. Features elegant serif fonts, warm cream backgrounds, and sophisticated multi-column layouts.',
    icon: '📰',
    previewImage: '/images/themes/newspaper-preview.png',
    colors: {
      bg: '#faf8f3',
      accent: '#8b0000',
    },
  },
  {
    id: 'typewriter',
    name: 'Typewriter',
    description: 'Monospace typography with vintage feel',
    longDescription: 'A nostalgic design that evokes the charm of vintage typewriters. Uses monospace fonts, aged paper textures, and a warm sepia color palette.',
    icon: '⌨️',
    previewImage: '/images/themes/typewriter-preview.png',
    colors: {
      bg: '#f4e8c1',
      accent: '#5c4033',
    },
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Modern bento grid with decorative elements',
    longDescription: 'A modern portfolio design with playful decorative elements. Features clean bento-style layouts, bold typography, and vibrant accent colors.',
    icon: '✨',
    previewImage: '/images/themes/creative-preview.png',
    colors: {
      bg: '#faf9f6',
      accent: '#d35400',
    },
  },
];

export const DEFAULT_THEME: ThemeType = 
  (process.env.NEXT_PUBLIC_THEME as ThemeType) || 'newspaper';

export function getThemeById(id: string): ThemeType {
  const validThemes: ThemeType[] = ['newspaper', 'typewriter', 'creative'];
  return validThemes.includes(id as ThemeType) ? (id as ThemeType) : DEFAULT_THEME;
}

