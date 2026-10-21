import type { Block } from "../content/legal";

export const LANGUAGES = [
  "en", "en-GB", "tr", "de", "fr", "es", "es-MX", "it", "pt-BR", "ja", "ko", "zh-Hans", "ru", "ar",
] as const;
export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English (US)",
  "en-GB": "English (UK)",
  tr: "Türkçe",
  de: "Deutsch",
  fr: "Français",
  es: "Español (España)",
  "es-MX": "Español (México)",
  it: "Italiano",
  "pt-BR": "Português (Brasil)",
  ja: "日本語",
  ko: "한국어",
  "zh-Hans": "简体中文",
  ru: "Русский",
  ar: "العربية",
};

export const RTL_LANGUAGES: readonly Language[] = ["ar"];

export interface Item {
  title: string;
  text: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: { features: string; pro: string; fair: string; faq: string; language: string; skip: string };
  hero: { eyebrow: string; title: string; highlight: string; subtitle: string; badges: string[]; screenshotAlt: string };
  appStore: { small: string; large: string; soon: string };
  /** Four short facts under the hero. */
  trust: Item[];
  features: {
    title: string;
    subtitle: string;
    /** Three rows, in order: match centre (events), lineups, stats & tables. */
    items: (Item & { points: string[]; alt: string })[];
  };
  /** Six cards, in order: alerts, Live Activities, widgets, Control Center & Siri, no account / iCloud, devices. */
  everywhere: { title: string; subtitle: string; items: Item[] };
  pro: {
    eyebrow: string;
    title: string;
    subtitle: string;
    /** Three screens, in order: AI forecast, Manage the team, minute-by-minute simulation. */
    cards: (Item & { alt: string })[];
    freeTitle: string;
    free: string[];
    proTitle: string;
    proItems: string[];
    note: string;
  };
  fair: { eyebrow: string; title: string; text: string; points: Item[]; link: string };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; text: string };
  footer: {
    tagline: string;
    legal: string;
    privacy: string;
    terms: string;
    support: string;
    disclaimer: string;
    data: string;
  };
  legal: { updated: string; back: string; contact: string };
  /** Terms of use: written here, since the app repository only has the privacy policy and support texts. */
  terms: { title: string; intro: Block[]; sections: { title: string; blocks: Block[] }[] };
}
