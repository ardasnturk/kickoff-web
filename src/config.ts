import app from "./content/app.json";
import screens from "./content/screens.json";

/** App Store link — empty until the app is live; the buttons then read "Coming soon". */
export const APP_STORE_URL = "";
export const SITE_URL = "https://kickoff.ardasnturk.com";

/** Developer, support email and legal update date, synced from the app's store/legal/config.json. */
export const DEVELOPER = app.developer;
export const SUPPORT_EMAIL = app.email;
export const UPDATED = app.updated;

/** Replaces {developer}, {email} and {updated} in texts written in src/i18n. */
export function fillPlaceholders(text: string): string {
  return text.replaceAll("{developer}", DEVELOPER).replaceAll("{email}", SUPPORT_EMAIL).replaceAll("{updated}", UPDATED);
}

/** Real App Store screenshot for the language (synced by `npm run sync`; English where none exist yet). */
export function screenshot(language: string, name: string): string {
  const locale = (screens as Record<string, string>)[language] ?? "en-US";
  return `/screens/${locale}/${name}.jpg`;
}

/** Football sticker from the App Store screenshots (synced by `npm run sync`). */
export function sticker(name: string): string {
  return `/stickers/${name}.png`;
}
