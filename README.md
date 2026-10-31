# Alex Santos — personal portfolio

React + TypeScript + Vite + Tailwind CSS. Technical Editorial v1.3 direction reconstructed from the supplied brief: navy, off-white and muted cyan; Manrope headings, DM Sans body, IBM Plex Mono labels; split hero; workflow panel; responsive project grid; expertise; career; credentials; About; contact; resume PDF.

## Run locally

Use Node.js 22.12+ (tested on Node 24).

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

`dist/` is the complete static production site. No server, database, API keys, or GitHub Pages hosting is required. Fonts load from Google Fonts with local system fallbacks. Contact uses an honest email link rather than a nonfunctional form.

## Cloudflare Workers deployment (recommended)

Configuration is in `wrangler.jsonc`. It uses Workers static assets with no application Worker or paid bindings.

1. Sign in to the intended Cloudflare account: `npx wrangler login`. Complete authorization yourself in the browser. Do not put credentials in chat or in the repository.
2. Confirm the account: `npx wrangler whoami`.
3. Optionally change the Worker name in `wrangler.jsonc` if it is already in use.
4. Run `npm run deploy`.
5. Open the returned workers.dev URL. Confirm all sections, the external project link, email link, and PDF. Add your custom domain in Cloudflare's Worker settings if desired.

`npx wrangler deploy --dry-run` validates the deployment package without publishing. An actual deployment requires the user's Cloudflare account authorization. No deployment has been performed as part of the local handoff.

Official guide: https://developers.cloudflare.com/workers/static-assets/get-started/

### Cloudflare Pages alternative

Run `npx wrangler login`, then `npm run deploy:pages`. Create/select the Pages project when prompted. For a Cloudflare Pages Git integration, set build command `npm run build` and output directory `dist`. Git may store the source; Cloudflare serves the site. Neither option uses GitHub Pages.

## Content and source provenance

- Factual biography, dates, contact, skills, and credentials were read from the supplied resume and cover letter on 26 October 2026. No unsupported performance metrics or invented achievements are included.
- `public/alex-santos-resume.pdf` is the supplied resume, unchanged. It includes the phone number and professional experience the user supplied for this portfolio. The cover letter and its street address are not shipped.
- The About portrait uses the photo supplied by the user, stored in `public/alex-santos-portrait.jpg`, with descriptive alt text and lazy loading.
- Fantasy Score Calculator is featured. The user supplied the live URL https://alex-s4.github.io/fantasy-checker/ and it returned HTTP 200 with title "GT Fantasy Score Calculator" on 26 October 2026. Its matching public repository was verified through GitHub's API: https://github.com/alex-s4/fantasy-checker
- The portfolio links directly to that existing site and repository. It does not embed, copy, rebuild, or simulate the calculator. There are no project mockups or fabricated screenshots. The project remains hosted on GitHub Pages; the portfolio itself is configured for Cloudflare.
- No original company assets, logos, screenshots, proprietary repositories, database records, internal URLs, or credentials are shipped.
- Prior design responses were unavailable beyond reference markers; the current user's explicit specification controls the implementation. An exact pixel match against an unavailable artifact cannot be claimed.

## Editing

- `src/App.tsx`: biography, experience, project, and navigation.
- `src/styles.css`: responsive layout, palette, and typography.
- `public/alex-santos-resume.pdf`: replace when the resume changes.
- `public/_headers`: Cloudflare security headers and content security policy.

The case grid is two columns on desktop and one on mobile. Two public project cards each use the same paired case-study narrative; there are no invented project cards. To add future projects, extract the case-card into a component and map verified public project data into the grid.

## Accessibility and verification

Semantic landmarks, logical headings, a skip link, accessible names, mobile navigation state, visible keyboard focus, reduced-motion handling, accessible external project links are included. Test with keyboard and a screen reader before future content changes. Automated tests cover the correct live project/source destinations, absence of an embedded calculator, navigation state, and contact/resume targets.

Dependencies are locked in `package-lock.json`. An `undici` override selects a patched version for Cloudflare's development tooling. Recheck the override when upgrading Wrangler. Run `npm audit` periodically.

## Publication boundary

Keep private source PDFs, scratch downloads, company artifacts, credentials, and local configuration out of `public/` and `dist/`. Only files in `dist/` are uploaded by the supplied deployment configuration. Do not upload the parent chat workspace.


## Draftlab addition — 31 October 2026

Draftlab uses the same text-only project card and Problem / Approach / My focus narrative as Fantasy Score Calculator. The user supplied https://draftlab.alex-s4.workers.dev/ and its homepage returned HTTP 200 during verification. Project descriptions are based on that public page and the existing Draftlab project context: an MLBB coaching workspace with a hero library, draft analysis, and guided match review. No public source repository was verified, so no source button is fabricated. The portfolio does not embed the app or send analysis requests. No match outcome or AI accuracy claims are made.
