import { useEffect } from "react";
import { AppStoreButton } from "../components/AppStoreButton";
import { PhoneFrame } from "../components/PhoneFrame";
import { Sticker } from "../components/Sticker";
import { screenshot, sticker } from "../config";
import { useLanguage, useLocalizedHref } from "../i18n";

/** Screenshots per feature row (see features.items in src/i18n/types.ts); a second one peeks out behind the first. */
const FEATURE_SHOTS: [string, string?][] = [["02-match"], ["06-lineups"], ["07-stats", "08-table"]];
const FEATURE_STICKERS = ["stopwatch", "tactics", "chart"];
const FEATURE_TINTS = [
  "bg-blue/10 dark:bg-blue/15",
  "bg-grass/15 dark:bg-grass/10",
  "bg-lavender/15 dark:bg-lavender/15",
];
const EVERYWHERE_STICKERS = ["bell", "stopwatch", "goal", "whistle", "jersey", "ball"];
const PRO_SHOTS = ["03-forecast", "04-manage", "05-simulation"];

function Check({ className = "text-grass" }: { className?: string }) {
  return (
    <svg className={`mt-0.5 h-5 w-5 shrink-0 ${className}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" clipRule="evenodd" />
    </svg>
  );
}

function ProBadge() {
  return <span className="rounded-full border-2 border-navy bg-sun px-2.5 py-0.5 text-xs font-extrabold text-navy">PRO</span>;
}

/** Soft round shapes like on the App Store screenshots, purely decorative. */
function Shapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -end-32 bottom-[-6rem] h-96 w-96 rounded-full bg-coral/90 dark:bg-coral/40" />
      <div className="absolute -start-24 -top-24 h-72 w-72 rounded-full bg-sky-deep dark:bg-navy-soft" />
      <div className="absolute end-1/3 top-10 h-20 w-20 rounded-full bg-sun/80 dark:bg-sun/40" />
    </div>
  );
}

function Hero() {
  const { t, language } = useLanguage();
  return (
    <section className="relative overflow-hidden">
      <Shapes />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 md:grid-cols-[1.15fr_1fr] md:pb-28 md:pt-20">
        <div>
          <p className="inline-flex rounded-full bg-blue px-3 py-1 text-sm font-bold text-white">{t.hero.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.title}
            <br />
            <span className="text-blue dark:text-blue-soft">{t.hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-80">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <AppStoreButton />
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {t.hero.badges.map((badge) => (
              <li key={badge} className="rounded-full border-2 border-navy bg-white px-3 py-1 text-sm font-semibold dark:border-white/20 dark:bg-navy-soft">
                {badge}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-[320px]">
          <PhoneFrame src={screenshot(language, "01-live")} alt={t.hero.screenshotAlt} eager className="rotate-[-4deg]" />
          <Sticker name="ball" className="-start-14 top-16 w-28" tilt={-10} />
          <Sticker name="trophy" className="-end-12 bottom-24 w-28" tilt={8} delay={1.2} />
          <Sticker name="bell" className="-end-8 -top-6 w-20" tilt={12} delay={2.1} />
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const { t } = useLanguage();
  return (
    <section className="relative -mt-8 px-4 sm:px-6">
      <ul className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.trust.map((item) => (
          <li key={item.title} className="rounded-3xl border-2 border-navy bg-white p-5 shadow-sticker dark:border-white/15 dark:bg-navy dark:shadow-none">
            <p className="font-bold">{item.title}</p>
            <p className="mt-1 text-sm opacity-70">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Features() {
  const { t, language } = useLanguage();
  return (
    <section id="features" className="scroll-mt-20 overflow-x-clip py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t.features.title}</h2>
          <p className="mt-4 text-lg opacity-75">{t.features.subtitle}</p>
        </div>
        <div className="mt-16 space-y-20 md:space-y-28">
          {t.features.items.map((item, index) => {
            const [main, extra] = FEATURE_SHOTS[index];
            return (
              <div key={item.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className={`relative rounded-[2.5rem] p-6 sm:p-10 ${FEATURE_TINTS[index]}`}>
                    <div className="relative mx-auto max-w-[260px]">
                      {extra && (
                        <div className="absolute inset-y-0 start-[30%] hidden w-[85%] pt-10 sm:block" aria-hidden="true">
                          <PhoneFrame src={screenshot(language, extra)} alt="" width="max-w-none" className="rotate-6" />
                        </div>
                      )}
                      <PhoneFrame src={screenshot(language, main)} alt={item.alt} width="max-w-[260px]"
                        className={extra ? "sm:-translate-x-[22%] sm:-rotate-3 sm:rtl:translate-x-[22%] sm:rtl:rotate-3" : ""} />
                    </div>
                    <Sticker name={FEATURE_STICKERS[index]} className="-end-4 -top-8 w-24" tilt={index % 2 ? -8 : 8} delay={index * 0.7} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{item.title}</h3>
                  <p className="mt-4 text-lg opacity-80">{item.text}</p>
                  <ul className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <Check />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Everywhere() {
  const { t } = useLanguage();
  return (
    <section className="bg-white/60 py-20 md:py-28 dark:bg-navy/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t.everywhere.title}</h2>
          <p className="mt-4 text-lg opacity-75">{t.everywhere.subtitle}</p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.everywhere.items.map((item, index) => (
            <li key={item.title} className="flex gap-4 rounded-3xl border-2 border-navy bg-white p-6 shadow-sticker dark:border-white/15 dark:bg-navy dark:shadow-none">
              <img src={sticker(EVERYWHERE_STICKERS[index])} alt="" aria-hidden="true" width={64} height={64} loading="lazy"
                className="h-14 w-14 shrink-0 drop-shadow" />
              <div>
                <p className="font-bold">{item.title}</p>
                <p className="mt-1 text-sm opacity-75">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pro() {
  const { t, language } = useLanguage();
  return (
    <section id="pro" className="relative scroll-mt-20 overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute -start-40 top-40 h-96 w-96 rounded-full bg-lavender/20" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-blue dark:text-blue-soft">
            <ProBadge /> {t.pro.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">{t.pro.title}</h2>
          <p className="mt-4 text-lg opacity-75">{t.pro.subtitle}</p>
        </div>
        <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <Sticker name="crystal" className="-top-14 start-[28%] hidden w-24 md:block" tilt={-6} />
          {t.pro.cards.map((card, index) => (
            <div key={card.title} className="text-center">
              <PhoneFrame src={screenshot(language, PRO_SHOTS[index])} alt={card.alt} width="max-w-[250px]" />
              <h3 className="mt-8 text-xl font-extrabold">{card.title}</h3>
              <p className="mx-auto mt-2 max-w-xs opacity-80">{card.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-navy bg-white p-8 shadow-sticker dark:border-white/15 dark:bg-navy dark:shadow-none">
            <h3 className="text-xl font-extrabold">{t.pro.freeTitle}</h3>
            <ul className="mt-6 space-y-3">
              {t.pro.free.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border-2 border-navy bg-gradient-to-br from-blue to-lavender p-8 text-white shadow-sticker dark:border-white/15 dark:shadow-none">
            <h3 className="flex items-center gap-2 text-xl font-extrabold">
              {t.pro.proTitle}
              <ProBadge />
            </h3>
            <ul className="mt-6 space-y-3">
              {t.pro.proItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="text-sun" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm opacity-70">{t.pro.note}</p>
      </div>
    </section>
  );
}

function FairPlay() {
  const { t } = useLanguage();
  const href = useLocalizedHref();
  return (
    <section id="fair-play" className="relative scroll-mt-20 overflow-hidden bg-navy py-20 text-white md:py-28">
      <Sticker name="cards" className="end-6 top-10 hidden w-28 md:block" tilt={10} />
      <Sticker name="whistle" className="bottom-10 start-6 hidden w-24 md:block" tilt={-12} delay={1.5} />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-wide text-sun">{t.fair.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{t.fair.title}</h2>
          <p className="mt-4 text-lg opacity-80">{t.fair.text}</p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.fair.points.map((point, index) => (
            <li key={point.title} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/15">
              <p className={`font-bold ${["text-sun", "text-coral", "text-grass", "text-blue-soft"][index % 4]}`}>{point.title}</p>
              <p className="mt-2 text-sm opacity-80">{point.text}</p>
            </li>
          ))}
        </ul>
        <a href={href("/privacy/")} className="mt-10 inline-block font-semibold text-sun underline-offset-4 hover:underline">
          {t.fair.link} <span className="inline-block rtl:rotate-180" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

function Faq() {
  const { t } = useLanguage();
  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">{t.faq.title}</h2>
        <div className="mt-12 divide-y-2 divide-navy/10 dark:divide-white/10">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                {item.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue text-white transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 opacity-80">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  const { t } = useLanguage();
  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border-2 border-navy bg-blue px-6 py-16 text-center text-white shadow-sticker sm:px-12 dark:border-white/15 dark:shadow-none">
        <div className="pointer-events-none absolute -end-16 -top-16 h-56 w-56 rounded-full bg-coral" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 -start-10 h-48 w-48 rounded-full bg-sun/90" aria-hidden="true" />
        <Sticker name="goal" className="end-4 top-4 hidden w-28 sm:block" tilt={8} />
        <Sticker name="boot" className="bottom-4 start-4 hidden w-24 sm:block" tilt={-10} delay={1} />
        <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">{t.cta.title}</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg opacity-90">{t.cta.text}</p>
        <div className="relative mt-8 flex justify-center">
          <AppStoreButton inverted />
        </div>
      </div>
    </section>
  );
}

export function Home() {
  // The page renders after load, so the browser can't jump to /#pro by itself.
  useEffect(() => {
    if (window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
  }, []);
  return (
    <>
      <Hero />
      <Trust />
      <Features />
      <Everywhere />
      <Pro />
      <FairPlay />
      <Faq />
      <Cta />
    </>
  );
}
