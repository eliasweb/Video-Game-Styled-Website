# Agency 1-1 — NES-Styled Digital Agency Site

A fully functional digital-agency website (Web Design / E-Commerce / Google Ads)
themed as a classic NES Mario-style game. Every UI element — buttons, dialogs,
nav, pricing tiers, the contact form — is dressed up as a video-game element,
but the site behaves like a serious lead-generation site underneath.

Built with **Next.js 15** (App Router) + **TypeScript** + **Tailwind CSS v4**.

## Features

- 🍄 Title screen → World hero with parallax clouds & animated mascot
- 🌍 Level-Select services grid (Web / E-Com / Ads) + 3 detail pages
- ⭐ Trophy-Room portfolio with filterable categories
- 🔥 Power-Up pricing (Mushroom / Fire Flower / Super Star)
- 🎮 Sticky HUD nav with live coin counter, lives, score
- 💬 Dialog-box contact form posting to **Formspree** (no backend needed)
- 🎵 Procedural 8-bit SFX (jump / coin / power-up / 1-up / game-over) gated behind a sound toggle (default OFF)
- ♿ `prefers-reduced-motion` honored, sprites have ARIA labels, real body font for legibility
- 📱 Mobile responsive, sticky HUD with hamburger menu

## Getting started

```bash
# 1. Install deps
npm install

# 2. (Optional) Wire up the contact form
cp .env.local.example .env.local
# Then edit .env.local and paste your Formspree form ID
# (sign up free at https://formspree.io)

# 3. Run dev server
npm run dev
```

Visit `http://localhost:3000`.

> **Without `NEXT_PUBLIC_FORMSPREE_ID` set**, the contact form runs in *demo
> mode* — it logs the payload to the console and shows the success state.
> Submissions are not sent anywhere. Set the env var to wire it to Formspree.

## Available scripts

| command | what it does |
|---|---|
| `npm run dev` | Start Next.js dev server on port 3000 |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run typecheck` | TypeScript-only check |
| `npm run lint` | ESLint (Next.js defaults) |

## Customizing content

All site copy lives in **`src/lib/content.ts`** as typed objects:

- `studio` — agency name, email, social links
- `services` — three service slugs + features + FAQs
- `portfolio` — case studies / trophies (title, client, vertical, metric, stars)
- `pricing` — three power-up tiers
- `team` — character-select cards (HP/MP/ATK stats)

Edit those and the whole site updates. The visual primitives (sprites, dialog
box, pixel button, etc.) live in `src/components/` and `src/sprites/`.

## Project structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # HUD + Footer + PressStart overlay
│   ├── page.tsx          # Title screen + hero
│   ├── services/         # Level select + 3 detail pages
│   ├── portfolio/        # Trophy room
│   ├── pricing/          # Power-up tiers
│   ├── about/            # Character select
│   ├── contact/          # Quest log + Formspree form
│   └── not-found.tsx     # GAME OVER 404 screen
├── components/           # PixelButton, DialogBox, HUD, Footer, etc.
├── sprites/              # Inline-SVG sprite components (Mushroom, Star, Coin…)
└── lib/
    ├── content.ts        # All site copy
    └── sounds.ts         # Procedural Web Audio SFX engine
```

## Design system

- **Colors:** NES-accurate palette as CSS custom properties + Tailwind tokens
  (`nes-red`, `nes-blue`, `nes-yellow`, `nes-green`, `nes-brown`, `nes-sky`,
  `nes-cream`).
- **Typography:** `Press Start 2P` for headings/UI chrome, `VT323` for body
  (still pixelated but readable for long-form copy).
- **Pixel borders:** stacked `box-shadow`s — never `border-radius`. See
  `.pixel-frame` and `.pixel-btn` in `globals.css`.
- **Animations:** CSS keyframes only (`coin-spin`, `block-bounce`, `mascot-idle`,
  `wave`, `cloud-drift`, `blink`). All disabled under `prefers-reduced-motion`.

## Deploy

Push to any Next.js host. Easiest is **Vercel**:

```bash
vercel
```

Set `NEXT_PUBLIC_FORMSPREE_ID` in the project env vars (Settings → Environment
Variables) before going live. Or drop in a different form provider in
`src/components/ContactForm.tsx`.

## Optional: analytics

The site doesn't ship with analytics. To add Plausible/GA, drop a `<Script>` tag
in `src/app/layout.tsx` `<head>`.

## Notes / disclaimers

- The Mario-era visual references are a parody homage. The mascot, sprites, and
  copy are original — there are no Nintendo trademarks, character names, or
  asset rips in this repo. Rename the studio (`src/lib/content.ts`) before
  going to production.
- Sound is **off by default** so first-time visitors aren't surprised. Toggle
  in the HUD top-right.
