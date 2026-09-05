import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

/**
 * The Book Crew Readers Community logo.
 * Uses the brand image asset; variant only controls a subtle background
 * ring around the badge in the light/dark contexts.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      aria-label="The Book Crew Readers Community — Home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "relative block h-10 w-10 overflow-hidden rounded-full ring-1 transition sm:h-11 sm:w-11",
          isLight
            ? "ring-white/30 group-hover:ring-white/50"
            : "ring-forest/25 group-hover:ring-forest/40",
        )}
      >
        <Image
          src="/bookcrew-logo.webp"
          alt="The Book Crew Readers Community"
          fill
          sizes="44px"
          className="object-cover"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[15px] font-semibold tracking-[0.16em] sm:text-base sm:tracking-[0.18em]",
            isLight ? "text-white" : "text-forest",
          )}
        >
          THE BOOK CREW
        </span>
        <span
          className={cn(
            "mt-0.5 text-[9px] font-medium uppercase tracking-[0.32em] sm:tracking-[0.4em]",
            isLight ? "text-white/70" : "text-bronze",
          )}
        >
          Readers Community
        </span>
      </span>
    </Link>
  );
}
