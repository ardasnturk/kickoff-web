import type { CSSProperties } from "react";
import { sticker } from "../config";

/** Decorative football sticker (the same ones as on the App Store screenshots). */
export function Sticker({ name, className = "", tilt = 0, delay = 0 }: { name: string; className?: string; tilt?: number; delay?: number }) {
  const style = { "--tilt": `${tilt}deg`, animationDelay: `${delay}s` } as CSSProperties;
  return (
    <img src={sticker(name)} alt="" aria-hidden="true" width={240} height={240} loading="lazy" decoding="async"
      className={`sticker pointer-events-none absolute select-none ${className}`} style={style} />
  );
}
