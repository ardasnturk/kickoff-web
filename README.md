# Kickoff website

Landing page, privacy policy, terms of use and support page for **Kickoff**, football live scores and AI forecasts
for iPhone, in 14 languages: English (US/UK), Turkish, German, French, Spanish (Spain/Mexico), Italian,
Portuguese (Brazil), Japanese, Korean, Simplified Chinese, Russian and Arabic (right-to-left).

Live at **https://kickoff.ardasnturk.com**

- `/` – landing page
- `/privacy/` – privacy policy (linked from the app and App Store Connect)
- `/terms/` – terms of use (summary of Apple's standard EULA plus the Kickoff Pro subscription terms)
- `/support/` – support page (App Store support URL)

Every page accepts `?lang=<code>` (`en`, `en-GB`, `tr`, `de`, `fr`, `es`, `es-MX`, `it`, `pt-BR`, `ja`, `ko`,
`zh-Hans`, `ru`, `ar`); without it the saved choice, then the browser language is used.

## Development

```bash
npm install
npm run dev
```

- Landing texts and the terms of use: `src/i18n/<language>.ts` (typed by `src/i18n/types.ts`).
- Privacy and support texts, the developer name and support email, screenshots, stickers and the icon come from the
  app repository — never edit them here:

  ```bash
  npm run sync        # expects the app at ../kickoff, or KICKOFF_APP=/path/to/kickoff
  ```

  It reads `apps/ios/store/legal/config.json` (→ `src/content/app.json`), `apps/ios/store/legal/<lang>/*.md`
  (→ `src/content/legal/<lang>.json`), the real App Store screenshots in
  `apps/ios/store/screenshots/raw/<locale>/iphone-6.9/` (→ `public/screens/<locale>/`), the stickers
  (→ `public/stickers/`) and the app icon (→ `public/assets/icon.png`), and regenerates `public/assets/og.png`
  (needs Pillow) and `public/sitemap.xml`. Languages without their own texts or screenshots in the app repository
  fall back to English; re-run the sync when they are added.
- When the app is live, set `APP_STORE_URL` in `src/config.ts`; until then the buttons read "Coming soon".

Privacy: the site has no analytics, cookies, external fonts or third-party scripts. The language choice is kept in
`localStorage` only.

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/deploy.yml`). The custom
domain is set by `public/CNAME`; DNS is a `CNAME kickoff → ardasnturk.github.io` record on Cloudflare.
