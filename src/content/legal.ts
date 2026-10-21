import { useEffect, useState } from "react";
import type { Language } from "../i18n/types";

export type Block = { p: string } | { ul: string[] };
export interface LegalDocument {
  title: string;
  updated: string;
  intro: Block[];
  sections: { title: string; blocks: Block[] }[];
}
/** Documents synced from the app repository; the terms of use live in src/i18n. */
export type SyncedKind = "privacy" | "support";
export type LegalKind = SyncedKind | "terms";
type LegalSet = Record<SyncedKind, LegalDocument>;

// Texts synced from the app repository's store/legal/ folder (`npm run sync`); one chunk per language, loaded on demand.
const loaders = import.meta.glob<LegalSet>("./legal/*.json", { import: "default" });

/** The synced document for the current language, or null while its chunk loads. */
export function useLegal(language: Language, kind: SyncedKind): LegalDocument | null {
  const [doc, setDoc] = useState<LegalDocument | null>(null);
  useEffect(() => {
    let active = true;
    setDoc(null);
    const load = loaders[`./legal/${language}.json`] ?? loaders["./legal/en.json"];
    load().then((set) => active && setDoc(set[kind]));
    return () => {
      active = false;
    };
  }, [language, kind]);
  return doc;
}
