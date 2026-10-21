import { Fragment, useEffect, type ReactNode } from "react";
import { fillPlaceholders, SUPPORT_EMAIL, UPDATED } from "../config";
import { useLegal, type Block, type LegalDocument, type LegalKind, type SyncedKind } from "../content/legal";
import { useLanguage, useLocalizedHref } from "../i18n";

const LINK = "font-medium text-blue underline underline-offset-2 dark:text-blue-soft";

/** Turns URLs and email addresses in plain text into links. */
function linkify(text: string, keyPrefix: string): ReactNode[] {
  return text.split(/(https:\/\/[^\s)]+[^\s).,]|[\w.+-]+@[\w-]+\.[\w.-]+\w)/g).map((part, index) => {
    const key = `${keyPrefix}-${index}`;
    if (part.startsWith("https://")) {
      return <a key={key} href={part} target="_blank" rel="noopener noreferrer" className={`break-all ${LINK}`}>{part}</a>;
    }
    if (/^[\w.+-]+@[\w-]+\.[\w.-]+\w$/.test(part)) {
      return <a key={key} href={`mailto:${part}`} className={LINK}>{part}</a>;
    }
    return <Fragment key={key}>{part}</Fragment>;
  });
}

/** Inline Markdown used in the app's legal texts: **bold** and [label](url), plus bare URLs and emails. */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).flatMap((part, index): ReactNode[] => {
    const bold = /^\*\*([^*]+)\*\*$/.exec(part);
    if (bold) return [<strong key={index} className="font-semibold">{linkify(bold[1], `b${index}`)}</strong>];
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const url = link[2];
      const external = /^https?:\/\//.test(url);
      return [
        <a key={index} href={external || url.startsWith("/") ? url : `/${url}`} className={LINK}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{link[1]}</a>,
      ];
    }
    return linkify(part, `t${index}`);
  });
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) =>
        "p" in block ? (
          <p key={index} className="mt-4 leading-relaxed opacity-85">{inline(block.p)}</p>
        ) : (
          <ul key={index} className="mt-4 list-disc space-y-2 ps-6 leading-relaxed opacity-85 marker:text-blue dark:marker:text-blue-soft">
            {block.ul.map((item) => <li key={item}>{inline(item)}</li>)}
          </ul>
        )
      )}
    </>
  );
}

function SyncedDocument({ kind }: { kind: SyncedKind }) {
  const { language } = useLanguage();
  const doc = useLegal(language, kind);
  if (!doc) return <div className="min-h-[60vh]" aria-busy="true" />;
  return <Document doc={doc} contact={kind === "support"} />;
}

function Terms() {
  const { t } = useLanguage();
  const fill = (blocks: Block[]): Block[] =>
    blocks.map((block) => ("p" in block ? { p: fillPlaceholders(block.p) } : { ul: block.ul.map(fillPlaceholders) }));
  const doc: LegalDocument = {
    title: t.terms.title,
    updated: UPDATED,
    intro: fill(t.terms.intro),
    sections: t.terms.sections.map((section) => ({ title: section.title, blocks: fill(section.blocks) })),
  };
  return <Document doc={doc} />;
}

function Document({ doc, contact = false }: { doc: LegalDocument; contact?: boolean }) {
  const { t } = useLanguage();
  const href = useLocalizedHref();
  useEffect(() => {
    document.title = `${doc.title} – Kickoff`;
  }, [doc.title]);
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
      <a href={href("/")} className="text-sm opacity-70 hover:opacity-100">
        <span className="inline-block rtl:rotate-180" aria-hidden="true">←</span> {t.legal.back}
      </a>
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight">{doc.title}</h1>
      <p className="mt-2 text-sm opacity-60">{t.legal.updated}: {doc.updated}</p>
      {contact && (
        <a href={`mailto:${SUPPORT_EMAIL}`}
          className="mt-8 inline-flex items-center gap-3 rounded-2xl border-2 border-navy bg-white px-5 py-3 font-semibold shadow-sticker transition hover:-translate-y-0.5 dark:border-white/20 dark:bg-navy-soft dark:shadow-none">
          <span className="text-xl" aria-hidden="true">✉️</span>
          <span>
            <span className="block text-xs font-medium opacity-70">{t.legal.contact}</span>
            {SUPPORT_EMAIL}
          </span>
        </a>
      )}
      <Blocks blocks={doc.intro} />
      {doc.sections.map((section) => (
        <section key={section.title} className="mt-10">
          <h2 className="text-xl font-bold">{section.title}</h2>
          <Blocks blocks={section.blocks} />
        </section>
      ))}
    </article>
  );
}

export function Legal({ kind }: { kind: LegalKind }) {
  return kind === "terms" ? <Terms /> : <SyncedDocument kind={kind} />;
}
