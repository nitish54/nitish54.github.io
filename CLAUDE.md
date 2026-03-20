# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Local development (webpack dev server)
npm start

# Production build
npm run build

# Serve the production build locally at http://localhost:3000
npm run serve

# Run tests
npm test
```

> **Note:** `NODE_OPTIONS=--openssl-legacy-provider` is already baked into the `start` and `build` scripts — required because Node 18+ is incompatible with the webpack 4 version bundled in react-scripts 3.x.

## Deployment

Pushing to the `source` branch triggers `.github/workflows/deploy.yml`, which builds the app and publishes `./build` to the `master` branch via `peaceiris/actions-gh-pages@v4`. The GitHub Pages site then serves from `master`.

- Do **not** add a manual `npm run deploy` / `gh-pages` script — CI handles it.
- Ensure the repo's Actions permissions allow write access (Settings → Actions → General → Read and write permissions).

## Architecture

Single-page React 16 app (Create React App / react-scripts 3.4.1). All styles live in one file (`src/portfolio.css`) using CSS custom properties for the design system. No CSS-in-JS, no component-level stylesheets.

**Scroll-reveal** is implemented in `src/App.jsx` via `IntersectionObserver`. Any element with class `reveal` animates in when it enters the viewport (`.reveal` → `.reveal.visible`).

**Section layout** follows a numbered pattern (`01.` through `04.`):
1. Hero — `src/components/Hero.jsx`
2. Experience — `src/components/Experience.jsx` (tabbed, `activeTab` state)
3. Skills — `src/components/Skills.jsx` (grouped cards)
4. Education — `src/components/Education.jsx`
5. Contact — `src/components/Contact.jsx`

**Contact form → Google Sheets**: uses `fetch` with `mode: 'no-cors'` POST to a Google Apps Script Web App URL. The URL constant `GOOGLE_SCRIPT_URL` in `Contact.jsx:23` must be replaced with the deployed Apps Script URL. Until replaced, the form runs in demo mode (simulated success).

## Design tokens (CSS variables in `portfolio.css`)

| Variable | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0a0f1e` | Page background |
| `--bg-card` | `#0f1729` | Card/panel background |
| `--accent` | `#64ffda` | Teal highlight, borders, focus |
| `--purple` | `#7c3aed` | Secondary accent |
| `--text-primary` | `#ccd6f6` | Body text |
| `--text-secondary` | `#8892b0` | Muted text |
| `--font-sans` | Inter | Body font |
| `--font-mono` | Fira Code | Code/numbered elements |

Responsive breakpoints: `900px` (tablet) and `650px` (mobile).
