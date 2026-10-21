#!/usr/bin/env python3
"""Pulls content from the Kickoff app repository so the website never drifts from the app.

    npm run sync          # expects the app repo at ../kickoff (override with KICKOFF_APP=/path/to/kickoff)

Safe to re-run at any time; generated files are replaced. Missing languages fall back to English.

- apps/ios/store/legal/config.json                          → src/content/app.json ({developer, email, updated})
- apps/ios/store/legal/<lang>/{privacy,support}.md           → src/content/legal/<lang>.json
- apps/ios/store/screenshots/raw/<locale>/iphone-6.9/*.png   → public/screens/<locale>/*.jpg (600 px wide)
                                                               + src/content/screens.json (language → locale)
- apps/ios/store/stickers/*.png                              → public/stickers/*.png (240 px)
- apps/ios/Kickoff/Resources/Assets.xcassets/AppIcon…/icon.png → public/assets/icon.png (512 px)
- generated                                                   → public/assets/og.png (1200 × 630, needs Pillow)
                                                                public/sitemap.xml
"""
import json
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

WEB = Path(__file__).resolve().parent.parent
APP = Path(os.environ.get("KICKOFF_APP", WEB.parent / "kickoff")).resolve()
STORE = APP / "apps/ios/store"
if not (STORE / "legal/config.json").exists():
    sys.exit(f"✗ App repository not found at {APP} (set KICKOFF_APP)")

SITE_URL = "https://kickoff.ardasnturk.com"
PAGES = ["/", "/privacy/", "/terms/", "/support/"]

# Website language → (App Store screenshot locale, legal folder). Matches src/i18n/types.ts.
LANGUAGES = {
    "en": ("en-US", "en"), "en-GB": ("en-GB", "en"), "tr": ("tr", "tr"), "de": ("de-DE", "de"),
    "fr": ("fr-FR", "fr"), "es": ("es-ES", "es"), "es-MX": ("es-MX", "es"), "it": ("it", "it"),
    "pt-BR": ("pt-BR", "pt-BR"), "ja": ("ja", "ja"), "ko": ("ko", "ko"), "zh-Hans": ("zh-Hans", "zh-Hans"),
    "ru": ("ru", "ru"), "ar": ("ar-SA", "ar"),
}
FALLBACK_LOCALE, FALLBACK_FOLDER = "en-US", "en"
SCREENS = ["01-live", "02-match", "03-forecast", "04-manage", "05-simulation", "06-lineups", "07-stats", "08-table"]
DOCUMENTS = ["privacy", "support"]  # terms are written in the site's own i18n (src/i18n/<lang>.ts)

BLUE, NAVY, SKY, CORAL, YELLOW = "#2457E6", "#0B1340", "#EAF2FF", "#F26B5B", "#FFC93C"

config = json.loads((STORE / "legal/config.json").read_text(encoding="utf-8"))
values = {key: str(config.get(key, "")) for key in ("developer", "email", "updated")}
missing = [key for key, value in values.items() if not value]
if missing:
    sys.exit(f"✗ {STORE}/legal/config.json is missing {missing}")


def fill(text: str) -> str:
    """Replaces {developer} {email} {updated} (Python str.format style) and leaves any other braces alone."""
    return re.sub(r"\{(developer|email|updated)\}", lambda m: values[m.group(1)], text)


def parse(markdown: str) -> dict:
    """Front matter + '## ', '- ' and paragraphs → {title, updated, intro, sections:[{title, blocks}]}.

    Inline **bold** and [links](url) are kept as written and rendered by src/pages/Legal.tsx.
    """
    markdown = fill(markdown.replace("\r\n", "\n"))
    meta = {}
    if markdown.startswith("---\n"):
        front, markdown = markdown[4:].split("\n---\n", 1)
        meta = dict(re.findall(r"^(\w+):\s*(.+)$", front, re.M))
    sections, intro = [], []
    current = None
    paragraph, items = [], []

    def target() -> list:
        return current["blocks"] if current else intro

    def flush_paragraph():
        if paragraph:
            target().append({"p": " ".join(paragraph)})
            paragraph.clear()

    def flush_items():
        if items:
            target().append({"ul": list(items)})
            items.clear()

    def flush():
        flush_paragraph()
        flush_items()

    for line in markdown.splitlines():
        stripped = line.strip()
        if not stripped:
            flush()
        elif stripped.startswith("## "):
            flush()
            current = {"title": stripped[3:].strip(), "blocks": []}
            sections.append(current)
        elif stripped.startswith("# "):
            flush()
            meta.setdefault("title", stripped[2:].strip())
        elif stripped.startswith("- "):
            flush_paragraph()
            items.append(stripped[2:])
        elif items and line.startswith("  "):
            items[-1] += " " + stripped
        else:
            flush_items()  # a paragraph right after a list (no blank line) still comes after it
            paragraph.append(stripped)
    flush()
    return {"title": meta.get("title", ""), "updated": meta.get("updated", values["updated"]),
            "intro": intro, "sections": sections}


# Legal texts ----------------------------------------------------------------------------------------------------
content = WEB / "src/content"
legal_dir = content / "legal"
if legal_dir.exists():
    shutil.rmtree(legal_dir)
legal_dir.mkdir(parents=True)
fallbacks = []
for lang, (_, folder) in LANGUAGES.items():
    docs = {}
    for name in DOCUMENTS:
        source = STORE / "legal" / folder / f"{name}.md"
        if not source.exists():
            source = STORE / "legal" / FALLBACK_FOLDER / f"{name}.md"
            fallbacks.append(f"{lang}/{name}")
        docs[name] = parse(source.read_text(encoding="utf-8"))
    (legal_dir / f"{lang}.json").write_text(json.dumps(docs, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
(content / "app.json").write_text(json.dumps(values, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"✓ legal texts for {len(LANGUAGES)} languages → src/content/legal/"
      + (f" (English fallback: {', '.join(fallbacks)})" if fallbacks else ""))

# Screenshots ----------------------------------------------------------------------------------------------------
raw = STORE / "screenshots/raw"


def complete(locale: str) -> bool:
    return all((raw / locale / "iphone-6.9" / f"{name}.png").exists() for name in SCREENS)


if not complete(FALLBACK_LOCALE):
    sys.exit(f"✗ missing English screenshots in {raw / FALLBACK_LOCALE / 'iphone-6.9'}")
screens_dir = WEB / "public/screens"
if screens_dir.exists():
    shutil.rmtree(screens_dir)
mapping, locales = {}, set()
for lang, (locale, _) in LANGUAGES.items():
    mapping[lang] = locale if complete(locale) else FALLBACK_LOCALE
    locales.add(mapping[lang])
for locale in sorted(locales):
    for name in SCREENS:
        target = screens_dir / locale / f"{name}.jpg"
        target.parent.mkdir(parents=True, exist_ok=True)
        subprocess.run(["sips", "-s", "format", "jpeg", "-s", "formatOptions", "82", "--resampleWidth", "600",
                        str(raw / locale / "iphone-6.9" / f"{name}.png"), "--out", str(target)],
                       check=True, capture_output=True)
(content / "screens.json").write_text(json.dumps(mapping, indent=1) + "\n", encoding="utf-8")
print(f"✓ {len(locales) * len(SCREENS)} screenshots ({', '.join(sorted(locales))}) → public/screens/")

# Stickers and icon ----------------------------------------------------------------------------------------------
stickers_dir = WEB / "public/stickers"
if stickers_dir.exists():
    shutil.rmtree(stickers_dir)
stickers_dir.mkdir(parents=True)
stickers = sorted((STORE / "stickers").glob("*.png"))
for sticker in stickers:
    subprocess.run(["sips", "-Z", "240", str(sticker), "--out", str(stickers_dir / sticker.name)],
                   check=True, capture_output=True)
print(f"✓ {len(stickers)} stickers → public/stickers/")

assets = WEB / "public/assets"
assets.mkdir(parents=True, exist_ok=True)
icon_source = APP / "apps/ios/Kickoff/Resources/Assets.xcassets/AppIcon.appiconset/icon.png"
icon = assets / "icon.png"
subprocess.run(["sips", "-Z", "512", str(icon_source), "--out", str(icon)], check=True, capture_output=True)
print("✓ icon → public/assets/icon.png")

# Open Graph image -----------------------------------------------------------------------------------------------
try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("! Pillow not installed: public/assets/og.png left unchanged (pip3 install pillow)")
else:
    def font(size: int):
        for path in ("/System/Library/Fonts/SFNSRounded.ttf", "/System/Library/Fonts/SFNS.ttf",
                     "/System/Library/Fonts/Supplemental/Arial Rounded Bold.ttf",
                     "/System/Library/Fonts/Supplemental/Arial Bold.ttf"):
            if Path(path).exists():
                loaded = ImageFont.truetype(path, size)
                try:
                    loaded.set_variation_by_name("Bold")
                except Exception:
                    pass
                return loaded
        return ImageFont.load_default(size)

    W, H = 1200, 630
    og = Image.new("RGB", (W, H), SKY)
    draw = ImageDraw.Draw(og)
    draw.ellipse((820, 300, 1360, 840), fill=CORAL)
    draw.ellipse((-160, -200, 260, 220), fill="#D6E4FF")
    draw.ellipse((1010, -60, 1150, 80), fill=YELLOW)

    size = 300
    app_icon = Image.open(icon_source).convert("RGBA").resize((size, size), Image.LANCZOS)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size - 1, size - 1), radius=int(size * 0.225), fill=255)
    shadow = Image.new("RGBA", (size + 16, size + 16), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle((8, 16, size + 7, size + 15), radius=int(size * 0.225),
                                             fill=(11, 19, 64, 255))
    og.paste(shadow, (82, 157), shadow)
    og.paste(app_icon, (90, 165), mask)

    draw.text((450, 190), "Kickoff", font=font(118), fill=NAVY)
    draw.text((455, 335), "Football live scores", font=font(46), fill=BLUE)
    draw.text((455, 392), "& AI forecasts for iPhone", font=font(46), fill=BLUE)

    for name, box in (("ball.png", (1000, 420, 170)), ("crystal.png", (880, 60, 130))):
        path = STORE / "stickers" / name
        if path.exists():
            x, y, side = box
            image = Image.open(path).convert("RGBA").resize((side, side), Image.LANCZOS)
            og.paste(image, (x, y), image)
    og.save(assets / "og.png", optimize=True)
    print("✓ og image → public/assets/og.png")

# Sitemap --------------------------------------------------------------------------------------------------------
lines = ['<?xml version="1.0" encoding="UTF-8"?>',
         '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']
for page in PAGES:
    for lang in LANGUAGES:
        lines.append(f"  <url><loc>{SITE_URL}{page}?lang={lang}</loc>")
        for alternate in LANGUAGES:
            lines.append(f'    <xhtml:link rel="alternate" hreflang="{alternate}" href="{SITE_URL}{page}?lang={alternate}"/>')
        lines.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{SITE_URL}{page}"/>')
        lines.append(f"    <lastmod>{values['updated']}</lastmod></url>")
lines.append("</urlset>")
(WEB / "public/sitemap.xml").write_text("\n".join(lines) + "\n", encoding="utf-8")
print(f"✓ sitemap with {len(PAGES) * len(LANGUAGES)} URLs → public/sitemap.xml")
