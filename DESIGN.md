# Superachievers Design System

> Design tokens and system documentation for the Superachievers splash site

## Color

### Base Palette

The site uses the **stone** palette from Tailwind CSS, implemented via shadcn/ui in oklch color space for consistent perceptual lightness across light and dark modes.

#### Light Mode

- `--background`: `oklch(1 0 0)` — pure white base
- `--foreground`: `oklch(0.147 0.004 49.25)` — stone-950 equivalent
- `--card`: `oklch(1 0 0)`
- `--card-foreground`: `oklch(0.147 0.004 49.25)`
- `--popover`: `oklch(1 0 0)`
- `--popover-foreground`: `oklch(0.147 0.004 49.25)`
- `--primary`: `oklch(0.216 0.006 56.043)` — stone-900 equivalent
- `--primary-foreground`: `oklch(0.985 0.001 106.423)` — stone-50 equivalent
- `--secondary`: `oklch(0.97 0.001 106.424)` — stone-100 equivalent
- `--secondary-foreground`: `oklch(0.216 0.006 56.043)` — stone-900 equivalent
- `--muted`: `oklch(0.97 0.001 106.424)` — stone-100 equivalent
- `--muted-foreground`: `oklch(0.553 0.013 58.071)` — stone-500 equivalent
- `--accent`: `oklch(0.97 0.001 106.424)` — stone-100 equivalent
- `--accent-foreground`: `oklch(0.216 0.006 56.043)` — stone-900 equivalent
- `--destructive`: `oklch(0.577 0.245 27.325)`
- `--border`: `oklch(0.923 0.003 48.717)` — stone-200 equivalent
- `--input`: `oklch(0.923 0.003 48.717)` — stone-200 equivalent
- `--ring`: `oklch(0.709 0.01 56.259)` — stone-400 equivalent

#### Dark Mode

- `--background`: `oklch(0.147 0.004 49.25)` — stone-950 equivalent
- `--foreground`: `oklch(0.985 0.001 106.423)` — stone-50 equivalent
- `--card`: `oklch(0.216 0.006 56.043)` — stone-900 equivalent
- `--card-foreground`: `oklch(0.985 0.001 106.423)` — stone-50 equivalent
- `--popover`: `oklch(0.216 0.006 56.043)` — stone-900 equivalent
- `--popover-foreground`: `oklch(0.985 0.001 106.423)` — stone-50 equivalent
- `--primary`: `oklch(0.923 0.003 48.717)` — stone-200 equivalent
- `--primary-foreground`: `oklch(0.216 0.006 56.043)` — stone-900 equivalent
- `--secondary`: `oklch(0.268 0.007 34.298)` — stone-800 equivalent
- `--secondary-foreground`: `oklch(0.985 0.001 106.423)` — stone-50 equivalent
- `--muted`: `oklch(0.268 0.007 34.298)` — stone-800 equivalent
- `--muted-foreground`: `oklch(0.709 0.01 56.259)` — stone-400 equivalent
- `--accent`: `oklch(0.268 0.007 34.298)` — stone-800 equivalent
- `--accent-foreground`: `oklch(0.985 0.001 106.423)` — stone-50 equivalent
- `--destructive`: `oklch(0.704 0.191 22.216)`
- `--border`: `oklch(1 0 0 / 10%)` — 10% white overlay
- `--input`: `oklch(1 0 0 / 15%)` — 15% white overlay
- `--ring`: `oklch(0.553 0.013 58.071)` — stone-500 equivalent

### Accent Color: Fuchsia

The signature element is a fuchsia glow behind the splash content:

- Light mode: `bg-fuchsia-500/[0.08]` — 8% opacity
- Dark mode: `bg-fuchsia-500/[0.16]` — 16% opacity (doubled for visibility)
- Applied as a large blurred circle: `blur-3xl` on a `34rem × 52rem` ellipse

### Sidebar Colors

Sidebar tokens are defined but not currently used in the splash-only layout:

- Light: stone-50 background, stone-950 foreground
- Dark: stone-900 background, stone-50 foreground, fuchsia-500 primary accent

### Chart Colors

Five chart color tokens (not currently used):

1. `--chart-1`: `oklch(0.869 0.005 56.366)` — stone-300 equivalent
2. `--chart-2`: `oklch(0.553 0.013 58.071)` — stone-500 equivalent
3. `--chart-3`: `oklch(0.444 0.011 73.639)` — stone-600 equivalent
4. `--chart-4`: `oklch(0.374 0.01 67.558)` — stone-700 equivalent
5. `--chart-5`: `oklch(0.268 0.007 34.298)` — stone-800 equivalent

## Typography

### Font Families

- **Sans**: Geist (via `next/font/google`)
  - Variable: `--font-sans`
  - Weight range: 100–900
  - Subset: latin
  - Applied globally via `font-sans` class
- **Mono**: Geist Mono (via `next/font/google`)
  - Variable: `--font-mono`
  - Weight range: 100–900
  - Subset: latin
  - Used for uppercase descriptor text

### Type Scale

The splash uses a fluid type scale that responds to both viewport width and height:

- **Name** (SITE.name): `text-base sm:text-lg` — 16px base, 18px on small+ screens
  - Weight: `font-medium` (500)
  - Tracking: `tracking-tight` (-0.025em)
- **Descriptor** (SITE.descriptor): `font-mono text-xs tracking-[0.15em] uppercase`
  - Size: 12px
  - Weight: regular (400)
  - Transform: uppercase with wide tracking
  - Color: `text-muted-foreground`
  - Margin: `mt-2` (0.5rem above)
- **Tagline** (SITE.tagline): `text-[clamp(2.25rem,min(9vw,14svh),5.75rem)]`
  - Fluid range: 36px (2.25rem) to 92px (5.75rem)
  - Responsive to both viewport width (9vw) and height (14svh)
  - Weight: `font-semibold` (600)
  - Tracking: `tracking-[-0.035em]` (tight for large text)
  - Leading: `leading-[1.05]` (105% line height)
  - Margin: `my-8` (2rem vertical), collapses to `my-4` (1rem) at `max-height:480px`
  - Balance: `text-balance` for better wrapping
- **Plain** (SITE.plain): `text-lg sm:text-xl md:text-2xl`
  - Breakpoint scale: 18px → 20px (640px) → 24px (768px)
  - Weight: regular (400)
  - Leading: `leading-relaxed` (1.625)
  - Color: `text-muted-foreground`
  - Balance: `text-pretty` for optimal readability

### Text Rendering

- Antialiasing: `antialiased` (`-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale`)
- Applied globally on `<html>` element

## Spacing & Layout

### Border Radius

Base radius: `0.625rem` (10px)

Derived scale:
- `sm`: `0.375rem` (6px) — 60% of base
- `md`: `0.5rem` (8px) — 80% of base
- `lg`: `0.625rem` (10px) — base
- `xl`: `0.875rem` (14px) — 140% of base
- `2xl`: `1.125rem` (18px) — 180% of base
- `3xl`: `1.375rem` (22px) — 220% of base
- `4xl`: `1.625rem` (26px) — 260% of base

### Splash Layout

- Container: `min-h-dvh` (dynamic viewport height)
- Padding:
  - Horizontal: `px-6 sm:px-10` (1.5rem base, 2.5rem on small+ screens)
  - Top: `pt-[calc(env(safe-area-inset-top)+1.5rem)]` — respects notch/status bar
  - Bottom: `pb-[calc(env(safe-area-inset-bottom)+2.25rem)]`
  - Condensed on short screens: `[@media(max-height:480px)]:pt-4 [@media(max-height:480px)]:pb-5`
- Content max-width: `max-w-6xl` (72rem / 1152px)
- Centered: `mx-auto`

### Motion & Animation

Staggered fade-in animation using Framer Motion:

- **Stagger delay**: 0.09s between items
- **Item animation**:
  - Duration: 0.6s
  - Easing: `[0.22, 1, 0.36, 1]` (custom bezier, emphasizing ease-out)
  - Transform: `y: 12` (starts 12px down) → `y: 0`
  - Opacity: `0` → `1`
- **Reduced motion**: animations skipped when `prefers-reduced-motion: reduce`
  - All animations clamped to `0.01ms` duration
  - Scroll behavior set to `auto` (no smooth scrolling)

## Effects

### Fuchsia Glow

- Shape: `rounded-full` — perfect circle/ellipse
- Size: `h-[34rem] w-[52rem]` (544px × 832px)
- Max-width: `max-w-[170vw]` to prevent overflow on narrow screens
- Position: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` — centered behind content
- Blur: `blur-3xl` (64px Gaussian blur)
- Color:
  - Light: `bg-fuchsia-500/[0.08]` — 8% opacity
  - Dark: `bg-fuchsia-500/[0.16]` — 16% opacity
- Non-interactive: `pointer-events-none`
- Decorative: `aria-hidden="true"`

## Theme

### Color Scheme

System preference determines initial mode:

- Light: `color-scheme: light` on `:root`
- Dark: `color-scheme: dark` on `.dark` class
- Applied via next-themes ThemeProvider with `enableSystem` and `disableTransitionOnChange`
- Browser UI (scrollbars, form controls, caret) adapts to match

### Suppressed Hydration Warning

The `<html>` element uses `suppressHydrationWarning` because next-themes injects a blocking script to prevent flash of unstyled content (FOUC) during SSR/hydration.

## Accessibility

### Skip Link

A visually hidden "Skip to content" link appears on keyboard focus:

- Target: `#main` (the `<main>` element)
- Initially: `sr-only` (screen reader only)
- On focus: `focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50`
- Styled: `rounded-md bg-background px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-ring`

### Touch & Interaction

- Tap highlight: `transparent` (no blue flash on mobile tap)
- Touch action: `manipulation` — removes ~300ms double-tap delay
- Cursor: `pointer` on non-disabled buttons and `[role="button"]` elements

### Reduced Motion

All animations respect `prefers-reduced-motion: reduce`:

- Framer Motion animations skipped via `useReducedMotion()` hook
- CSS animations clamped to `0.01ms` duration and single iteration
- Transitions clamped to `0.01ms`
- Scroll behavior: `auto` (no smooth scrolling)

## Configuration

### shadcn/ui

Source: `components.json`

- Style: `base-nova`
- Base color: `stone`
- CSS variables: enabled
- RSC: enabled (React Server Components)
- Icon library: lucide-react
- Prefix: none

### Tailwind CSS

Version: 4.x (via `@tailwindcss/postcss`)

Custom variant:
- `@custom-variant dark (&:is(.dark *))` — scopes dark mode to `.dark` parent

Imports in `globals.css`:
1. `@import "tailwindcss"`
2. `@import "tw-animate-css"`
3. `@import "shadcn/tailwind.css"`
4. `@import "./typeset.css"`

### Framework

- Next.js: 16.3.6 (App Router)
- React: 19.3.0
- Motion library: motion 13.4.1 (replaces framer-motion)

## Content Source

All splash text comes from `lib/site.ts`:

```typescript
export const SITE = {
  name: "Superachievers",
  descriptor: "Multi Family Office Rewards",
  tagline: "Synchronously Co-Create Our Super Puzzle",
  plain: "Ensure you are set to always win with others via our multi family office.",
  domain: "superachievers.xyz",
  url: "https://superachievers.xyz",
  sells: true,
} as const
```

The tagline uses a non-breaking hyphen (`\u2011`) to prevent "Co-Create" from breaking across lines.
