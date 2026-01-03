export type ThemeType = 'newspaper' | 'typewriter' | 'creative';

export const THEMES: { id: ThemeType; name: string; description: string }[] = [
  {
    id: 'newspaper',
    name: 'Classic Newspaper',
    description: 'Serif typography with multi-column layouts',
  },
  {
    id: 'typewriter',
    name: 'Typewriter',
    description: 'Monospace typography with vintage feel',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Modern bento grid with decorative elements',
  },
];

export const DEFAULT_THEME: ThemeType = 
  (process.env.NEXT_PUBLIC_THEME as ThemeType) || 'newspaper';

export function getThemeById(id: string): ThemeType {
  const validThemes: ThemeType[] = ['newspaper', 'typewriter', 'creative'];
  return validThemes.includes(id as ThemeType) ? (id as ThemeType) : DEFAULT_THEME;
}
