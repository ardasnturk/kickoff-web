import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LanguageProvider, useLanguage } from "./i18n";
import { Home } from "./pages/Home";
import { Legal } from "./pages/Legal";

export type Page = "home" | "privacy" | "terms" | "support";

function Content({ page }: { page: Page }) {
  const { t } = useLanguage();

  useEffect(() => {
    // Legal pages set their own title once their text has loaded.
    if (page === "home") document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [page, t]);

  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy">
        {t.nav.skip}
      </a>
      <Header />
      <main id="main">{page === "home" ? <Home /> : <Legal kind={page} />}</main>
      <Footer />
    </div>
  );
}

export default function App({ page }: { page: Page }) {
  return (
    <LanguageProvider>
      <Content page={page} />
    </LanguageProvider>
  );
}
