# AutomationWorks

Production website for AutomationWorks, a small-business website, automation and client-portal studio.

**Live:** https://www.automationworks.ca/

**Continuing in Claude? Read [CLAUDE.md](CLAUDE.md), then [HANDOFF.md](HANDOFF.md).**

## Stack

- Plain HTML, CSS and browser JavaScript. No frontend framework or compilation step.
- Nine static pages in `public/`: homepage plus eight industry landing pages.
- Node.js 24 Vercel Function at `api/consultations.js`.
- Private Vercel Blob storage for consultation submissions.
- CAD setup fees plus monthly managed service plans.

## Local preview

With Python 3 installed, run from the repository root:

```sh
python3 -m http.server 8771 --directory public
```

Open `http://localhost:8771/`. This previews the UI and animated demo. Python's static server cannot run the consultation API.

To run the API locally with Vercel CLI:

```sh
npm install
vercel link
vercel env pull .env.local
vercel dev
```

Use an authorized Vercel account and a test environment for real submissions. The private Blob token stays in environment variables. Never commit it.

## Production

`vercel.json` sets `npm run build`, `public` as the output directory, clean URLs, trailing slashes, and the consultation function's 15-second duration limit. `npm run build` verifies required source files; the static site is already authored in `public`.

The current Vercel project is `kosta-x-george/automationworks`. Production was uploaded through Vercel Drop. Creating this repository does **not** automatically link it to Vercel or activate Git deployments. Connect this existing repository to the existing project in Vercel Git settings before relying on pushes to deploy.

## Important files

| File | Purpose |
| --- | --- |
| `public/index.html` | Homepage and shared marketing sections |
| `public/*/index.html` | Eight static industry pages with unique SEO content |
| `public/redesign.css` | Current visual design, entry reveal, responsive layouts |
| `public/style.css` | Original base styles and lower-page components |
| `public/app.js` | Animated demo, editable scenarios, tabs, navigation, cost toggle |
| `public/consultation.js` | Consultation dialog/submission and pricing tabs |
| `api/consultations.js` | Vercel/Blob adapter |
| `lib/consultation-handler.js` | Input validation, rate cap, private storage behavior |
| `public/robots.txt`, `public/sitemap.xml` | Crawl discovery |
| `HANDOFF.md` | Full project decisions and known limitations |

Feather interface icons are included in `public/icons/`; see `THIRD_PARTY_NOTICES.md`.
