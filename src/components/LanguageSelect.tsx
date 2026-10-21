import { LANGUAGES, LANGUAGE_NAMES, useLanguage, type Language } from "../i18n";

export function LanguageSelect() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{t.nav.language}</span>
      <svg className="pointer-events-none absolute start-2.5 h-4 w-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
      </svg>
      <select value={language} onChange={(event) => setLanguage(event.target.value as Language)}
        className="appearance-none rounded-full border border-navy/20 bg-transparent py-1.5 ps-8 pe-3 text-sm dark:border-white/20">
        {LANGUAGES.map((code) => (
          <option key={code} value={code} className="text-navy">
            {LANGUAGE_NAMES[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
