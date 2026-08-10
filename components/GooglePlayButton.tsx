import { GOOGLE_PLAY_URL } from "@/lib/storeLinks";

type Props = {
  className?: string;
  size?: "md" | "lg";
};

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M3.6 2.25c-.35.2-.6.58-.6 1.02v17.46c0 .44.25.82.6 1.02l.14.07 10.02-10.02v-.22L3.74 2.18l-.14.07Zm12.16 7.02L6.58 4.1l8.67 8.67 1.5-1.5c.9-.9.9-1.55.01-2Zm-9.18 8.63 9.18-5.17-1.51-1.51-7.67 6.68Zm11.55-5.58-.02.01-2.12 1.2-1.62-1.62 1.62-1.62 2.12 1.2.02.01c.64.38.64.98 0 1.82Z" />
    </svg>
  );
}

/** Opens the Quitify listing on Google Play. */
export function GooglePlayButton({ className = "", size = "md" }: Props) {
  const sizing =
    size === "lg"
      ? "gap-3 px-6 py-3.5 text-base"
      : "gap-2.5 px-5 py-2.5 text-sm";

  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Quitify on Google Play"
      className={`inline-flex items-center justify-center rounded-full bg-primary font-semibold text-white transition-all hover:scale-[1.03] hover:bg-primary-dark active:scale-[0.98] ${sizing} ${className}`}
    >
      <PlayIcon className={size === "lg" ? "h-6 w-6" : "h-5 w-5"} />
      <span className="leading-tight">
        <span className="block text-[10px] font-medium uppercase tracking-wide text-white/80">
          Get it on
        </span>
        Google Play
      </span>
    </a>
  );
}
