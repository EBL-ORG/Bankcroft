---
name: Sovereign Heritage
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#45464f'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#767680'
  outline-variant: '#c6c5d0'
  surface-tint: '#515b91'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0a164a'
  on-primary-container: '#7680b9'
  inverse-primary: '#b9c3ff'
  secondary: '#4059aa'
  on-secondary: '#ffffff'
  secondary-container: '#8fa7fe'
  on-secondary-container: '#1d3989'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#281800'
  on-tertiary-container: '#9a805b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dee1ff'
  primary-fixed-dim: '#b9c3ff'
  on-primary-fixed: '#0a164a'
  on-primary-fixed-variant: '#394377'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b6c4ff'
  on-secondary-fixed: '#00164e'
  on-secondary-fixed-variant: '#264191'
  tertiary-fixed: '#fedeb2'
  tertiary-fixed-dim: '#e0c298'
  on-tertiary-fixed: '#281800'
  on-tertiary-fixed-variant: '#584323'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  tabular-figure:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an architectural, high-trust digital environment tailored for private wealth management, corporate treasury, and institutional banking. Built directly from the foundational geometry of the brand monogram, the aesthetic embodies permanence, stewardship, and absolute fiduciary discipline.

### Target Audience & Emotional Intent
- **Audience:** Institutional investors, family office principals, sovereign wealth fund directors, corporate treasurers, and high-net-worth clients requiring clarity, discretion, and swift execution.
- **Emotional Response:** Inspires absolute stability, gravitas, understated opulence, and intellectual rigor. The interface avoids ephemeral tech gimmicks, decorative noise, or gamified patterns, leaning instead into institutional dignity and precision.

### Design Movement
**Architectural Modernism meets Classical Editorial.** The visual language combines the disciplined, high-density clarity of Swiss typographic systems with the refined tactile quality of heritage financial broadsheets. Surfaces are crisp and intentional, demarcated by hairline structural rules, generous editorial whitespace, and sculptural proportions derived from the sharp radii and bold verticals of the primary mark.

## Colors

The color system is derived directly from the deep institutional corporate navy of the monogram mark, grounded in warm archival paper tones and enriched with subtle champagne bronze accents.

### Palette Architecture
- **Primary (`#081448` - Deep Heritage Navy):** The core institutional anchor. Used for primary navigation, critical calls-to-action, structural brand containers, and commanding headlines. Conveys absolute authority, history, and capital security.
- **Secondary (`#1E3A8A` - Royal Sapphire):** Secondary emphasis, active interactive states, selected row highlights, and deep informational charts.
- **Tertiary (`#C5A880` - Sovereign Bronze / Brushed Gold):** Reserved for elite status badges, private advisory indicators, subtle highlight pinstripes, and high-value data callouts. Must be used with restraint to maintain prestige.
- **Neutral (`#1E293B` - Slate Ink):** Used for primary body typography, metric tables, and secondary framing, avoiding harsh digital blacks (`#000000`) in favor of rich archival ink tones.

### Surface System
- **Base Canvas:** Soft archival alabaster (`#FBFBF9`) and crisp paper white (`#FFFFFF`) provide warmth and eliminate clinical starkness.
- **Container Tiers:** Subtle warm-tinted slate flats (`#F4F5F7` to `#EDEDF0`) with 1px border structures create clear boundary definition without heavy drop shadows.

## Typography

The typographic hierarchy pairs high-contrast editorial serifs with a rationalist Swiss sans-serif to bridge classical banking legacy and computational clarity.

### Hierarchy & Usage
- **Serif Display & Headlines (`Playfair Display`):** Utilized for editorial statements, executive summaries, account group headers, and marquee figures. Its delicate transitions and strong vertical stress mirror the architectural geometry of the brand monogram.
- **Sans-Serif System (`Inter`):** Powers all dense operational layers, transactional records, data tables, navigation, and micro-labels. Characterized by high legibility at diminutive sizes and robust tabular figure variants (`tnum`, `zero`).
- **Tabular Figures:** All monetary values, rate indicators, and percentage yields enforce tabular lining numbers (`font-variant-numeric: tabular-nums`) to preserve strict vertical alignment across large multi-row ledgers.
- **Micro-Labels & Metadata:** Displayed in uppercase tracking (`letter-spacing: 0.08em`) with heavy weight (`700`) at 11px, establishing clear architectural sub-dividers between content modules.

## Layout & Spacing

The spatial discipline adheres to an 8pt foundational baseline grid nested within a structured 12-column Swiss layout.

### Grid & Composition
- **Desktop (1440px+):** 12-column layout, max-width bounded at 1360px for analytical cockpits and 1140px for editorial perspectives. Margins expand to `space-xl` (2.5rem / 40px) with `gutter` set to 1.5rem (24px) for measured separation.
- **Tablet (768px – 1023px):** 8-column layout with 24px margins and 16px gutters. Secondary analytical sidebars collapse into sticky bottom trays or segmented tabs.
- **Mobile (< 768px):** 4-column layout with 16px lateral safe margins. Complex ledger tables convert into progressive vertical disclosure cards.

### Spacing Principles
- Whitespace is deliberate and ample. High-density data matrices are counterbalanced by generous margins above section divisions.
- Internal component padding relies on strict proportional pairings: cards standardise on `space-lg` (24px) padding, while transactional rows maintain a compact vertical rhythm of `space-md` (16px) to maximize screen efficiency.

## Elevation & Depth

This design system avoids floaty or exaggerated multi-layered shadows in favor of a low-elevation, architectural plane system. Depth is communicated through hairline precision borders, contrasting background tiers, and subtle, diffuse anchor shadows.

### Elevation Architecture
- **Flat Ground (Level 0):** Canvas base tone (`#FBFBF9`). Provides the calm, neutral foundation.
- **Structural Planar (Level 1):** Primary cards, account panels, and metric docks utilize pure white (`#FFFFFF`) surfaces bound by 1px hairline rules (`#E2E8F0`). No blur shadows are applied; containment is achieved solely through contrast and line.
- **Floating Overlays (Level 2):** Context menus, date pickers, and filter dropdowns employ a delicate, tinted ambient shadow: `0 8px 24px -4px rgba(8, 20, 72, 0.08)`, complemented by a 1px solid border (`#CBD5E1`).
- **Modal Dialogs (Level 3):** Wire transfer confirmations and security authenticators feature deep structural anchors: `0 24px 48px -12px rgba(8, 20, 72, 0.16)` centered over an institutional navy overlay (`#081448` with 60% opacity).

## Shapes

The shape language reflects the crisp, disciplined architecture of the monogram. Radii are kept modest and restrained (`roundedness: 1`), reinforcing precision, strength, and structural permanence rather than casual friendliness.

### Shape Scale
- **Containers & Cards:** 4px (`rounded-sm`) to 8px (`rounded-lg`) corner radii maintain crisp geometry that aligns cleanly with dense tabular columns and financial charts.
- **Buttons & Interactive Controls:** 4px radius ensures tactile clarity without drifting into playful or rounded aesthetics.
- **Pill Exceptions:** Restricted strictly to concise status tags (e.g., "Settled", "Pending Audit", "Tier 1 Capital") where full rounded caps provide quick peripheral identification without softening the macro structure.

## Components

### Buttons & Interactive Triggers
- **Primary Button:** Deep Heritage Navy background (`#081448`), crisp white text (`#FFFFFF`), subtle 1px border (`#081448`), and 4px border radius. Hover state subtly brightens to `#0E2370` with no elevation jump.
- **Secondary Button:** Alabaster background (`#FFFFFF`), 1px solid navy outline (`#081448`), navy typography. Hover engages a faint navy wash (`rgba(8, 20, 72, 0.04)`).
- **Tertiary / Prestige Action:** Subtle champagne bronze hairline border (`#C5A880`) over pure white with bronze text, reserved exclusively for wealth advisory, bespoke reporting, or executive escalations.

### Data Tables & Ledgers
- Tables form the backbone of the institutional experience.
- Row heights are standardized at 56px with 1px border-bottom dividers (`#E2E8F0`).
- Header cells use `label-caps` in Slate Ink (`#64748B`), left-aligned for descriptors and right-aligned for numeric and balance values.
- Alternating row zebra fills are avoided; instead, hover states use a quiet warm wash (`#F8F9FB`) to preserve legibility across long lists.

### Input Fields & Controls
- Form controls feature an off-white input surface (`#FFFFFF`), 1px structural slate border (`#CBD5E1`), 8px padding, and 4px corner radius.
- Active focus state replaces generic bright blue glow rings with a sharp, disciplined 1px deep navy border (`#081448`) paired with a 2px offset halo (`rgba(8, 20, 72, 0.12)`).
- Checkboxes and radio buttons retain geometric sharpness with 2px borders, filling with deep navy on selection.

### Status Chips & Metadata Badges
- Compact indicators (22px total height) featuring uppercase 10px tracking.
- Success / Settled states utilize deep forest slate (`#134E4A` text on `#F0FDF4` base), pending states utilize warm amber bronze (`#78350F` text on `#FEF3C7` base), and critical alerts utilize burgundy crimson (`#7F1D1D` text on `#FEF2F2` base).

### Architectural Cards
- High-value metric summaries feature top-border accent pinstripes (2px solid `#081448` or `#C5A880`).
- Content within cards is segregated using subtle 1px interior rules (`#F1F5F9`) rather than nested floating containers, maximizing perceived order and structural density.