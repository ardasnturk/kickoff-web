export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return <img src="/assets/icon.png" alt="" width={36} height={36} className={`${className} rounded-[22%] shadow-sm`} />;
}
