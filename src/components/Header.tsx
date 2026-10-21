import { useLanguage, useLocalizedHref } from "../i18n";
import { AppStoreButton } from "./AppStoreButton";
import { LanguageSelect } from "./LanguageSelect";
import { Logo } from "./Logo";

export function Header() {
  const { t } = useLanguage();
  const href = useLocalizedHref();
  const links = [
    { href: href("/#features"), label: t.nav.features },
    { href: href("/#pro"), label: t.nav.pro },
    { href: href("/#fair-play"), label: t.nav.fair },
    { href: href("/#faq"), label: t.nav.faq },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-sky/80 backdrop-blur-lg dark:border-white/10 dark:bg-navy-deep/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href={href("/")} className="flex items-center gap-2.5 font-bold tracking-tight">
          <Logo />
          <span className="text-lg">Kickoff</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="opacity-75 transition hover:opacity-100">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSelect />
          <span className="hidden sm:inline-flex">
            <AppStoreButton compact />
          </span>
        </div>
      </div>
    </header>
  );
}
