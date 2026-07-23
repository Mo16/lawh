import { cn } from "@/lib/utils";

/** Yelp burst mark (single-color, inherits currentColor). */
export function YelpIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path d="M12.83 15.35l3.63 1.77c.4.2.55.68.35 1.07-.05.1-.13.19-.22.26l-2.85 2.13a.79.79 0 0 1-1.27-.62l.09-4.03a.55.55 0 0 1 .27-.57zm-1.9-.6l-.9 3.9a.79.79 0 0 1-1.35.35L6.2 16.14a.79.79 0 0 1 .3-1.3l3.85-1.05a.55.55 0 0 1 .58.96zm-.5-2.62l-3.9-1.28a.79.79 0 0 1-.28-1.36l2.5-2.42a.79.79 0 0 1 1.35.44l.6 4.02a.55.55 0 0 1-.27.6zm2.02-1.4l.8-6.9A.79.79 0 0 1 14.6 2c.14 0 .28.04.41.11l3.16 1.72a.79.79 0 0 1 .17 1.27l-4.75 4.5a.55.55 0 0 1-.93-.47zm3.16 3.02l3.9-.62a.79.79 0 0 1 .84 1.12l-1.6 3.2a.79.79 0 0 1-1.38.06l-2.3-3.3a.55.55 0 0 1 .54-.86z" />
    </svg>
  );
}
