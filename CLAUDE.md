# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Hector Herrera — Portfolio Design System** is a minimalist, developer-focused design system for a personal portfolio website. It defines visual identity, UI components, and brand guidelines across four pages: Home, About, Projects, and Contact.

The project has two main parts:
1. **Design system foundations** — CSS variables, typography scales, color system, spacing, shadows, iconography
2. **Interactive portfolio prototype** — React-based clickable prototype showcasing all pages and components

## Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

This starts a Vite dev server at `http://localhost:5173` with hot module reloading (HMR). The portfolio is a full single-page application with page routing, not just a static prototype.

### Build for Production
```bash
npm run build
```

Outputs minified assets to `dist/` ready for deployment.

### Preview Design System Components
Open any `.html` file in the `preview/` directory in a browser to view:
- Color palettes (base and semantic colors)
- Typography scales and specimens
- Spacing and radius tokens
- Shadow and border system
- Interactive component variants (buttons, inputs, cards, nav, badges)

Example:
```bash
open preview/colors-base.html
open preview/type-scale.html
open preview/components-buttons.html
```

## Architecture & Design Foundations

### Design System Structure
- **`colors_and_type.css`** — Master CSS variables file. Contains all color tokens (base, semantic, states), typography scales, spacing units, and animation timing curves. This is the single source of truth for design tokens.
- **`README.md`** — Comprehensive brand guidelines covering voice/tone, visual foundations, color system, typography, spacing, animations, states, and component patterns.
- **`assets/lucide-usage.md`** — Reference for icon system (Lucide Icons, thin-stroke 24px, CDN-based SVG).

### Design Token Principles
- **Color system:** Dark mode first (`#0D0D0D` background, `#F0EDE6` foreground). Warm amber accent (`#C8965A`). Semantic reds/greens for states.
- **Typography:** DM Serif Display (display), Outfit (body/UI), JetBrains Mono (code). Nine-step scale from 11px to 96px.
- **Spacing:** 4px base unit. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.
- **Animation:** Cubic-bezier(0.16, 1, 0.3, 1) ease (expo out). Durations: 150ms (micro), 300ms (transitions), 500ms (page elements).

### Portfolio Prototype Architecture
The portfolio is a modern React 18 SPA built with Vite. It uses proper ES modules, component-based architecture, and Vite's fast HMR (hot module reloading) for development.

**Directory structure:**
```
src/
  components/
    Header.jsx              Navigation with scroll-aware styling
    HeroSection.jsx         Home page hero + call-to-action
    ProjectCard.jsx         Reusable project card component
    ProjectsGrid.jsx        Projects page with filtering
    AboutSection.jsx        About page with bio + skills
    ExpertiseSection.jsx    Work experience timeline + competencies
    ContactSection.jsx      Contact form with validation
    Footer.jsx              Footer navigation
  App.jsx                   Main app component with routing
  main.jsx                  Entry point
  index.css                 Global styles (fonts, resets, scrollbar)
index.html                  Vite HTML entry point
vite.config.js              Vite configuration
package.json               Dependencies and scripts
```

**State management:**
- Page routing via React state (home, about, expertise, projects, contact)
- LocalStorage persistence for current page across sessions
- Page transitions with fade + translateY animation
- Form state in ContactSection for email form handling

## File Index

```
README.md                              Design guidelines, voice/tone, all visual foundations
SKILL.md                               Agent skill manifest
CLAUDE.md                              This file
package.json                           Dependencies and npm scripts
vite.config.js                         Vite build configuration
index.html                             Vite entry point
.gitignore                             Git ignore patterns
colors_and_type.css                    CSS variables for all design tokens
assets/
  lucide-usage.md                      Icon system reference

src/
  main.jsx                             React app entry point
  App.jsx                              Main app component with page routing
  index.css                            Global styles (fonts, resets)
  components/
    Header.jsx                         Navigation bar component
    HeroSection.jsx                    Home page hero section
    ProjectCard.jsx                    Reusable project card component
    ProjectsGrid.jsx                   Projects page with filter
    AboutSection.jsx                   About page
    ExpertiseSection.jsx               Work experience timeline
    ContactSection.jsx                 Contact form page
    Footer.jsx                         Footer component

preview/                               Design system component previews
  colors-base.html                     Base color palette
  colors-semantic.html                 Semantic and state colors
  type-display.html                    Display typeface specimens
  type-body.html                       Body and mono specimens
  type-scale.html                      Complete type scale
  spacing-tokens.html                  Spacing and radius tokens
  spacing-shadows.html                 Shadows and border system
  components-buttons.html              Button variants
  components-inputs.html               Form input components
  components-cards.html                Project card variants
  components-nav.html                  Navigation bar
  components-badges.html               Tags, badges, labels
```

## Common Development Tasks

### Add a New Portfolio Page Section
1. Create a new component in `src/components/MySection.jsx`:
   ```jsx
   import React from 'react';
   
   export const MySection = ({ setPage }) => {
     return (
       <div style={{ /* styles */ }}>
         {/* content */}
       </div>
     );
   };
   ```
2. Import it in `src/App.jsx`
3. Add a case in the `renderPage()` switch statement:
   ```jsx
   case 'mypage': return <MySection setPage={setPage} />;
   ```
4. Add link to Header navigation (update `navLinks` array in Header.jsx)

### Update Design Tokens
All color, type, and spacing variables are in `colors_and_type.css`. Update this file to propagate changes across all preview files and the prototype. Changes are visible on HMR (hot reload).

### Modify Component Styles
Components inline their styles. Edit `style={}` props directly in JSX files. Reference color values:
- Background: `#0D0D0D`
- Foreground: `#F0EDE6`
- Accent: `#C8965A`
- Secondary text: `#6B6B6B`

### Create a New Preview Component
1. Copy an existing preview HTML file (e.g., `preview/components-buttons.html`) as a template
2. Modify to showcase your component
3. Open in browser to view static design specs

### Deploy to Production
```bash
npm run build
# outputs to dist/ — ready for deployment
```

## Brand Guidelines Summary

- **Voice:** First person, confident but understated. No hype, no jargon.
- **Casing:** Sentence case for headings/labels, ALL CAPS for category markers.
- **Color:** Dark-first (`#0D0D0D`), warm amber accent (`#C8965A`).
- **Typography:** Serif for display (editorial tone), sans for body (clean, modern).
- **Spacing:** Generous whitespace; breathing room is part of the brand.
- **Motion:** Fast entrance (150–300ms), smooth settle. No bounces, no parallax.
- **Icons:** Lucide, thin-stroke, 24px base. Structural only — no decoration.
- **Images:** Desaturated, cool-to-neutral tone. Square-cropped (16/10 aspect in cards).

## Key Design Decisions

- **Vite + React 18** — Fast, modern build tool with hot module reloading and optimized production builds.
- **ES modules** — All components are proper ESM imports/exports for tree-shaking and clarity.
- **Inline styles** — Components own their styling (not CSS modules). Simple and portable.
- **No utility CSS framework** — Design tokens expressed as color/spacing constants. One file of truth (`colors_and_type.css`).
- **Static HTML previews** — Design system specs live in `preview/*.html` for isolated, non-interactive reference.
- **LocalStorage persistence** — App remembers the current page across sessions.
- **Single entry point** — All pages (home, about, projects, contact, expertise) routed through `App.jsx`.
