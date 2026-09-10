---
name: Obsidian Amber
colors:
  surface: '#121316'
  surface-dim: '#121316'
  surface-bright: '#38393c'
  surface-container-lowest: '#0d0e11'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f23'
  surface-container-high: '#292a2d'
  surface-container-highest: '#343538'
  on-surface: '#e3e2e6'
  on-surface-variant: '#e1bfb6'
  inverse-surface: '#e3e2e6'
  inverse-on-surface: '#303034'
  outline: '#a98a81'
  outline-variant: '#59413a'
  surface-tint: '#ffb59f'
  primary: '#ffb59f'
  on-primary: '#5f1500'
  primary-container: '#ff6a3d'
  on-primary-container: '#611600'
  inverse-primary: '#ae3104'
  secondary: '#4fdbc8'
  on-secondary: '#003731'
  secondary-container: '#04b4a2'
  on-secondary-container: '#003f38'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#e3802d'
  on-tertiary-container: '#512600'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb59f'
  on-primary-fixed: '#3b0a00'
  on-primary-fixed-variant: '#862200'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#713700'
  background: '#121316'
  on-background: '#e3e2e6'
  surface-variant: '#343538'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
  label-badge:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies high-craft software engineering: focused, refined, and technologically uncompromising. Drawing inspiration from modern developer tooling giants like Linear, Vercel, and Stripe, the aesthetic marries dark obsidian canvases with warm terracotta embers and sharp teal telemetry. 

The brand persona is an elite technologist with playful craftsmanship—represented by the auspicious Japanese fortune cat merged with the rigor of code. Interfaces are built to evoke speed, deliberate restraint, and tactile precision. Visual noise is eradicated in favor of micro-interactions, subtle luminescence (glow effects reminiscent of terminal status lamps), crisp 1px borders, and ultra-readable geometric typography.

## Colors

The palette is engineered for a dark-first environment that avoids harsh pure blacks in favor of stratified, deep obsidian slate.

- **Canvas & Surfaces:**
  - `bg-base`: `#090A0D` — the foundational background layer.
  - `surface-1`: `#111318` — elevated container layers, sidebars, and structural panels.
  - `surface-2`: `#181B22` — active cards, inputs, dropdown menus, and elevated cards.
  - `surface-3`: `#21252E` — hover states, active chips, and selected list items.
- **Borders & Dividers:**
  - `border-subtle`: `rgba(255, 255, 255, 0.07)` (`#262B35` in solid context) — hairline structural dividers.
  - `border-interactive`: `rgba(255, 106, 61, 0.35)` — focus states and highlights.
- **Accents:**
  - **Primary Warm Amber / Terracotta:** `#FF6A3D` with `#FF8C42` highlights and `#D9532B` active presses. Used sparingly for primary CTA actions, active states, key focus rings, and badge highlights.
  - **Secondary Teal / Cyan:** `#14B8A6` with `#0D9488` dark variants. Evokes code compilation, verified status, telemetry badges, and syntax-level feedback.
- **Typography Colors:**
  - `text-primary`: `#F3F4F6` (High contrast, 96% luminance)
  - `text-secondary`: `#9CA3AF` (Balanced description text)
  - `text-muted`: `#6B7280` (Code comments, timestamps, disabled items)

## Typography

The typography structure combines three deliberate roles:
- **Headings (Plus Jakarta Sans):** Brings contemporary warmth and technical confidence with slightly geometric forms, tight negative tracking, and clear structural hierarchy.
- **Body & Controls (Inter):** Guarantees extreme legibility, pristine rendering at small point sizes across high-density displays, and neutral ergonomics for dashboards and product tools.
- **Labels, Telemetry & Code (JetBrains Mono):** Integrates authentic software engineering semantics. Used for commit hashes, API tokens, terminal outputs, micro-badges, keyboard shortcuts (`⌘K`), and numeric metrics.

## Layout & Spacing

This design system uses a strict 8-point base grid (with a 4-point micro step for nested components and badges). 

### Layout Model
- **Grid Structure:** 12-column responsive fluid grid on desktop (max-width `1280px` for marketing, fluid edge-to-edge for developer console workspaces), collapsible to 6 columns on tablet and 4 columns on mobile devices.
- **Density Control:** Developer views (tables, code viewers, node graphs) utilize compact density (`space-xs` and `space-sm`), while promotional and landing pages employ breathing room via `space-lg` and `space-xl`.
- **Reflow Rules:** Complex side-by-side split layouts stack vertically at `< 768px`. App sidebars collapse into a slide-over sheet or a minimal rail navigation.

## Elevation & Depth

Visual depth is achieved through **tonal layering**, **micro-glows**, and **precision hairline strokes** rather than heavy muddy drop shadows:

1. **Surface Tiering:** Depth rises through lighter tones of charcoal: Base (`#090A0D`) → Secondary Canvas (`#111318`) → Cards & Dialogs (`#181B22`).
2. **Hairline Outlines:** Every container utilizes a crisp `1px` border with `border-subtle` (`rgba(255, 255, 255, 0.08)`), emulating the precise machining of professional desktop interfaces.
3. **Atmospheric Luminescence:** Interactive panels and featured active buttons cast faint ambient radial glows. For example, focused cards apply `box-shadow: 0 0 24px -4px rgba(255, 106, 61, 0.15)`.
4. **Frosted Translucency:** Floating navbars and contextual command palettes (`⌘K`) utilize `backdrop-filter: blur(16px)` over `rgba(9, 10, 13, 0.85)` to maintain situational context without visual clutter.

## Shapes

The design system adopts a **soft-to-moderately-crisp geometry** (`roundedness: 1`):
- Controls, standard inputs, small badges, and buttons use `6px` (`0.375rem`) to `8px` (`0.5rem`) radius.
- Cards, code snippets, and modal dialogs standardize on `10px` (`0.625rem`) or `12px` (`0.75rem`).
- Pills (`9999px`) are strictly reserved for status indicators, micro tags (e.g., `v2.4.0-rc1`), and avatar cutouts.

This shape profile feels surgical and tool-like, avoiding toyish bubbly curves while remaining friendlier than stark brutalist rectangles.

## Components

### Buttons
- **Primary:** Background `#FF6A3D`, text `#FFFFFF`, font-weight 600. Subtle top inner highlight `inset 0 1px 0 rgba(255, 255, 255, 0.2)`. Hover shifts to `#FF8C42` with an ambient glow `0 0 16px rgba(255, 106, 61, 0.35)`.
- **Secondary / Ghost:** Background `rgba(255, 255, 255, 0.04)`, border `1px solid rgba(255, 255, 255, 0.1)`, text `#F3F4F6`. Hover triggers background `#181B22` and border `rgba(255, 255, 255, 0.2)`.
- **Engineering / Terminal Action:** Border `1px dashed #262B35`, text `JetBrains Mono`, with teal status indicator dot.

### Inputs & Search Fields
- **Background:** `#111318` enclosed in `1px solid rgba(255, 255, 255, 0.1)`. 
- **Typography:** `Inter` 14px for placeholder, `JetBrains Mono` for code/token inputs.
- **Focus State:** Hairline border transition to `#FF6A3D` with an amber focus ring: `0 0 0 1px #FF6A3D, 0 0 12px rgba(255, 106, 61, 0.2)`.

### Cards & Code Blocks
- **Card Surface:** `#111318` background, 1px solid `rgba(255, 255, 255, 0.06)` border. On interactive hover, the border seamlessly transitions to `rgba(255, 106, 61, 0.3)`.
- **Code Block / Terminal Window:** `#090A0D` canvas with an upper metadata status strip featuring faux traffic light indicators or active branch/language tags (e.g., `main`, `TypeScript`).

### Chips, Badges & Status Indicators
- **Release / Feature Badges:** Background `rgba(255, 106, 61, 0.12)`, text `#FF8C42`, border `1px solid rgba(255, 106, 61, 0.25)`.
- **Success / Telemetry Tags:** Background `rgba(20, 184, 166, 0.12)`, text `#14B8A6`, border `1px solid rgba(20, 184, 166, 0.3)`. Accompanied by a pulsing 6px radial dot.

### Lists & Key-Value Panels
- Structured rows separated by `1px solid rgba(255, 255, 255, 0.05)`. Alternating row highlights on hover using `#181B22`. Monospaced right-aligned metrics and metadata.

### Checkboxes & Switches
- **Checkboxes:** 18x18px square with 4px border radius. Unchecked: `border: 1px solid #374151`, `bg: transparent`. Checked: `#FF6A3D` with an engraved white vector checkmark.
- **Switches:** Track is `#1F242D`, thumb is `#F3F4F6`. Active track shifts to gradient `#FF6A3D` to `#F28C38`.