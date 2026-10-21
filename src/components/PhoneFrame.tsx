/** A real App Store screenshot in a simple device-like frame. */
export function PhoneFrame({ src, alt, className = "", width = "max-w-[300px]", eager = false }: {
  src: string;
  alt: string;
  className?: string;
  /** Tailwind max-width class. */
  width?: string;
  eager?: boolean;
}) {
  return (
    <div className={`relative mx-auto w-full ${width} rounded-[2.6rem] bg-navy p-2.5 shadow-2xl shadow-navy/30 ring-2 ring-navy dark:ring-white/15 ${className}`}>
      <img src={src} alt={alt} width={600} height={1304} loading={eager ? "eager" : "lazy"} decoding="async"
        className="block h-auto w-full rounded-[2.1rem]" />
    </div>
  );
}
