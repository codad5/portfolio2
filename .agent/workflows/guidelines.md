---
description: CSS and component styling guidelines for this portfolio project
---

# Styling Guidelines

## CSS Rules

### Layout Philosophy
- **Box-based layout system**: Every element is a container box
- **Use Flexbox and Grid exclusively** for all layouts and spacing
- **Component-based architecture**: Break everything into reusable components

### Spacing Rules

#### ❌ NEVER Use Margins
```jsx
// WRONG
<div className="mb-4 mt-2 ml-6">Content</div>

// CORRECT - Use gap instead
<div className="flex flex-col gap-4">
  <div>Content 1</div>
  <div>Content 2</div>
</div>
```

#### ✅ Use Gap for Spacing Between Elements
```jsx
// Vertical spacing
<div className="flex flex-col gap-6">...</div>

// Horizontal spacing  
<div className="flex flex-row gap-4">...</div>

// Grid spacing
<div className="grid grid-cols-3 gap-8">...</div>
```

#### ✅ Padding Rules: Internal Spacing Only
Padding is ONLY for creating distance between content and container walls.
```jsx
// CORRECT - Symmetrical padding
<div className="p-6">Content</div>
<div className="px-8 py-4">Content</div>

// WRONG - One-sided padding
<div className="pr-4">Don't do this</div>
```

### Positioning Rules

#### Floating/Overlapping Elements
Always use `relative` parent + `absolute` child, contained within a defined box:
```jsx
<div className="relative border rounded-lg p-6">
  <div className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded">
    Badge
  </div>
  <h3>Card Title</h3>
</div>
```

## Theme System

### CSS Variables
All colors and typography use CSS variables defined in `globals.css`:
- `--color-bg-primary`, `--color-bg-secondary`, `--color-bg-tertiary`
- `--color-text-primary`, `--color-text-secondary`, `--color-text-muted`
- `--color-accent`, `--color-accent-hover`
- `--color-border`, `--color-border-light`
- `--font-heading`, `--font-body`, `--font-mono`

### Theme Switching
- Themes are switched via `data-theme` attribute on `<html>`
- Default theme: `newspaper`
- Available: `newspaper`, `typewriter`
- User preference stored in localStorage

### Using Theme Variables
```jsx
// In Tailwind classes (use inline styles for CSS variables)
<div 
  className="p-6 rounded-lg"
  style={{ 
    backgroundColor: 'var(--color-bg-secondary)',
    color: 'var(--color-text-primary)'
  }}
>
  Content
</div>
```

## Component Structure

```
app/
├── components/
│   ├── themes/
│   │   ├── newspaper/    # Newspaper theme components
│   │   └── typewriter/   # Typewriter theme components
│   ├── shared/           # Theme-agnostic utilities
│   └── wrappers/         # Dynamic theme loaders
├── providers/
│   └── theme-provider.tsx
└── lib/
    ├── theme.ts
    └── data/
        ├── projects.ts
        ├── experience.ts
        └── skills.ts
```

## Technology Preferences

- **Tailwind first**, CSS variables for theming
- **Next.js server actions** over API routes
- **TypeScript** for all components
- **React Server Components** by default, `'use client'` only when needed
