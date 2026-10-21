import { DEVELOPER } from "../config";
import { useLanguage, useLocalizedHref } from "../i18n";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useLanguage();
  const href = useLocalizedHref();
  return (
    <footer className="border-t border-navy/10 bg-white/50 dark:border-white/10 dark:bg-navy/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 font-bold">
            <Logo className="h-8 w-8" />
            Kickoff
          </div>
          <p className="mt-3 max-w-md text-sm opacity-75">{t.footer.tagline}</p>
          <p className="mt-6 max-w-xl text-xs opacity-60">{t.footer.disclaimer}</p>
          <p className="mt-2 max-w-xl text-xs opacity-60">{t.footer.data}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold">{t.footer.legal}</h2>
          <ul className="mt-3 space-y-2 text-sm opacity-80">
            <li><a href={href("/privacy/")} className="hover:underline">{t.footer.privacy}</a></li>
            <li><a href={href("/terms/")} className="hover:underline">{t.footer.terms}</a></li>
            <li><a href={href("/support/")} className="hover:underline">{t.footer.support}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy/10 px-4 py-5 text-center text-xs opacity-60 dark:border-white/10">
        © {new Date().getFullYear()} {DEVELOPER} · Apple, iPhone, iPad, Apple Intelligence and App Store are trademarks of Apple Inc.
      </div>
    </footer>
  );
}
