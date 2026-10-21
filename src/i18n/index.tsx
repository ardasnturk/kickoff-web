import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { LANGUAGES, RTL_LANGUAGES, type Dictionary, type Language } from "./types";
import { en } from "./en";
import { enGB } from "./en-GB";
import { tr } from "./tr";
import { de } from "./de";
import { fr } from "./fr";
import { es } from "./es";
import { esMX } from "./es-MX";
import { it } from "./it";
import { ptBR } from "./pt-BR";
import { ja } from "./ja";
import { ko } from "./ko";
import { zhHans } from "./zh-Hans";
import { ru } from "./ru";
import { ar } from "./ar";

export * from "./types";

const DICTIONARIES: Record<Language, Dictionary> = {
  en, "en-GB": enGB, tr, de, fr, es, "es-MX": esMX, it, "pt-BR": ptBR, ja, ko, "zh-Hans": zhHans, ru, ar,
};
const STORAGE_KEY = "kickoff-language";

function isLanguage(value: string | null | undefined): value is Language {
  return !!value && (LANGUAGES as readonly string[]).includes(value);
}

/** Maps a browser language tag (en-AU, es-AR, zh-CN, pt-PT…) to the closest site language. */
export function matchLanguage(tag: string): Language | null {
  const lower = tag.toLowerCase();
  const exact = LANGUAGES.find((language) => language.toLowerCase() === lower);
  if (exact) return exact;
  const [base, region = ""] = lower.split("-");
  switch (base) {
    case "en":
      return region === "us" || region === "" ? "en" : "en-GB"; // Commonwealth English reads UK spelling
    case "es":
      return region === "es" || region === "" ? "es" : "es-MX"; // Latin America and the US
    case "pt":
      return "pt-BR";
    case "zh":
      return ["tw", "hk", "mo", "hant"].includes(region) ? null : "zh-Hans";
    default:
      return isLanguage(base) ? base : null;
  }
}

/** ?lang=de, then the saved choice, then the browser languages, then English. */
function detect(): Language {
  const query = new URLSearchParams(window.location.search).get("lang");
  if (isLanguage(query)) return query;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch {
    // Storage can be unavailable (private mode); fall through.
  }
  for (const preferred of navigator.languages ?? [navigator.language]) {
    const match = matchLanguage(preferred);
    if (match) return match;
  }
  return "en";
}

interface LanguageContextValue {
  language: Language;
  t: Dictionary;
  isRTL: boolean;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detect);
  const isRTL = RTL_LANGUAGES.includes(language);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [language, isRTL]);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore: the choice just won't be remembered.
    }
    // Keep shared links in the chosen language.
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
  };

  return (
    <LanguageContext.Provider value={{ language, t: DICTIONARIES[language], isRTL, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

/** Same page in the current language — used for internal links so ?lang survives navigation. */
export function useLocalizedHref() {
  const { language } = useLanguage();
  return (path: string) => {
    const [base, hash] = path.split("#");
    return `${base}?lang=${language}${hash ? `#${hash}` : ""}`;
  };
}
