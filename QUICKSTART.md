# Quick Start Guide

## Installation

```bash
npm install
```

## Development

Start the dev server with hot module reloading:

```bash
npm run dev
```

Opens automatically at `http://localhost:5173`. Changes to any component will auto-reload.

## Building

Create optimized production assets:

```bash
npm run build
```

Outputs to `dist/` — ready for deployment.

## Project Structure

- **`src/`** — React app source code (components, main entry point)
- **`preview/`** — Static HTML design system specs (colors, typography, components)
- **`CLAUDE.md`** — Architecture and development guide
- **`package.json`** — Dependencies and npm scripts

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Build production assets |
| `npm run preview` | Preview production build locally |

## Next Steps

1. **Run the dev server:** `npm run dev`
2. **Make changes to components** in `src/components/`
3. **See updates instantly** via hot module reloading
4. **Build for production** when ready: `npm run build`

Refer to `CLAUDE.md` for detailed architecture and development guidelines.
