# Hector Herrera — Portfolio Design System

## Overview

This design system governs the visual identity and UI components for **Hector Herrera's personal portfolio** — a minimalist developer portfolio showcasing freelance projects and professional work. The portfolio is a single website with four core pages: **Home, About, Projects, and Contact**.

**Sources used:** No codebase or Figma was provided. This design system was synthesized from the product brief and built from first principles as a developer-focused minimalist portfolio.

---

## Product Context

| Product | Surface | Purpose |
|---|---|---|
| Portfolio Website | Desktop-first, responsive web | Showcase freelance + professional work |

**Pages:**
- **Home** — Hero introduction, brief tagline, CTA to work
- **About** — Background, skills, approach to development
- **Projects** — Grid of freelance + professional project cards
- **Contact** — Simple form or links to reach Hector

---

## CONTENT FUNDAMENTALS

**Voice & Tone:**
- First person ("I build", "My work", "Let's connect")
- Confident but understated — lets the work speak
- No hype, no buzzwords, no filler
- Technical when relevant, never jargon for its own sake
- Direct and precise — short sentences, clear intent

**Casing:**
- Sentence case for UI labels and headings (not Title Case)
- ALL CAPS used sparingly — only for category labels and section markers
- Project titles use their real casing

**Copy Style:**
- Headers: declarative statements or short fragments ("Full stack developer", "Selected work", "Let's talk")
- Body: 1–3 sentences max per paragraph; never walls of text
- CTA labels: imperative, lowercase ("view project", "get in touch", "see all")
- No emoji — the writing is the personality

**Vibe:** A developer who values craft. Thoughtful, precise, quietly confident.

---

## VISUAL FOUNDATIONS

### Color System
- **Dark mode first.** Background: near-black `#0D0D0D`. Primary surface: `#111111`.
- **Foreground:** crisp off-white `#F0EDE6` (warm, not pure white — avoids harshness)
- **Muted:** `#6B6B6B` for secondary text, labels, borders
- **Accent:** warm amber `#C8965A` — used sparingly for highlights, hover underlines, active states
- **Semantic:** error red `#C84B4B`, success green `#4BAB72`
- Light mode uses an inverted cream/ink palette

### Typography
- **Display:** "DM Serif Display" (Google Fonts) — elegant, editorial serif for name and hero headings. Gives personality without being loud.
- **Body:** "Outfit" (Google Fonts) — clean, geometric sans for body text, UI labels, nav
- **Mono:** "JetBrains Mono" (Google Fonts) — for code snippets, technology tags, metadata
- Scale: 11px → 13px → 15px → 18px → 24px → 32px → 48px → 72px → 96px
- Line heights: tight (1.1) for display, comfortable (1.6) for body
- Letter spacing: –0.02em on large display, 0.08em on ALL CAPS labels

### Spacing
- Base unit: 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- Generous — breathing room is part of the brand
- Page max-width: 1200px, content column: 720px
- Section vertical padding: 96px desktop, 64px mobile

### Backgrounds
- Solid dark `#0D0D0D` — no gradients, no textures
- Occasional horizontal rule `1px solid rgba(240,237,230,0.1)` as section dividers
- No full-bleed photography by default; project images contained in cards with aspect ratio locks
- Subtle grain overlay (3% opacity noise SVG) on hero area only

### Animation & Motion
- Ease: `cubic-bezier(0.16, 1, 0.3, 1)` — fast start, smooth settle (expo out)
- Durations: 150ms (micro), 300ms (transitions), 500ms (page elements)
- Fade + translateY(12px) → translateY(0) for element entrances
- Staggered reveals on list items (50ms delay increments)
- NO bounces, NO spring physics, NO parallax

### Hover & Press States
- Links: amber underline slides in from left (scaleX transform)
- Buttons: background lightens slightly, no color change
- Cards: translateY(–3px) + subtle shadow increase
- Press: scale(0.98), 100ms

### Borders & Shadows
- Borders: `1px solid rgba(240,237,230,0.08)` — barely visible, structural only
- Cards: no drop shadow by default; border only
- Focus rings: `2px solid #C8965A` with 2px offset
- No inner shadows

### Corner Radii
- Default: `4px` — minimal rounding, nearly square
- Badges/tags: `2px`
- Inputs: `4px`
- Images: `0` — images are square-cropped

### Cards
- Thin border `rgba(255,255,255,0.08)`, `4px` radius
- Background: `#161616` (slightly lifted from page bg)
- No shadow by default; shadow on hover: `0 8px 32px rgba(0,0,0,0.4)`
- Padding: `24px`

### Imagery
- Color tone: desaturated, cool-to-neutral; no warm-filtered photos
- Project screenshots on dark background
- No decorative illustrations
- Aspect ratios locked: project cards use `16/10`

### Iconography → see ICONOGRAPHY section

---

## ICONOGRAPHY

**Approach:** Minimal. Icons used only where they add clarity, never decoration.

- **Icon system:** Lucide Icons (CDN: `https://unpkg.com/lucide@latest`) — thin-stroke, 24px base, consistent 1.5px stroke weight. Matches the clean, precise aesthetic.
- **Size:** 16px (inline), 20px (UI), 24px (feature callouts)
- **Color:** Inherits text color; accent color only for interactive indicators
- **No emoji** used as icons or decorative elements
- **No icon fonts** — SVG-based only for crispness at all sizes
- **Unicode chars:** Used for simple cases (→ for "view project" links)

**Assets in `assets/`:**
- `assets/lucide-usage.md` — CDN usage reference
- No logo assets provided; logo is typographic (name set in DM Serif Display)

---

## File Index

```
README.md                         ← This file
SKILL.md                          ← Agent skill manifest
colors_and_type.css               ← All CSS variables (colors, type, spacing)
assets/
  lucide-usage.md                 ← Icon system reference
preview/
  colors-base.html                ← Base color palette
  colors-semantic.html            ← Semantic / state colors
  type-display.html               ← Display type specimens
  type-body.html                  ← Body + mono specimens
  type-scale.html                 ← Full type scale
  spacing-tokens.html             ← Spacing + radius tokens
  spacing-shadows.html            ← Shadow + border system
  components-buttons.html         ← Button variants
  components-inputs.html          ← Form inputs
  components-cards.html           ← Project card variants
  components-nav.html             ← Navigation bar
  components-badges.html          ← Tags, badges, labels
ui_kits/
  portfolio/
    README.md                     ← UI kit notes
    index.html                    ← Interactive portfolio prototype
    Header.jsx                    ← Site header / nav
    HeroSection.jsx               ← Home page hero
    ProjectCard.jsx               ← Project card component
    ProjectsGrid.jsx              ← Projects page grid
    AboutSection.jsx              ← About page
    ContactSection.jsx            ← Contact page
    Footer.jsx                    ← Site footer
```
