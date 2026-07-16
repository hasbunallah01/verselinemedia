import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Featured Spotlights",
  description:
    "Browse every featured author spotlight on VerseLine Media.",
};

/**
 * Placeholder route for the future Featured Spotlights archive.
 * The full archive (grid of past spotlights, individual spotlight
 * pages) will be implemented later.
 */
export default function SpotlightsPage() {
  return (
    <section className="section bg-ivory">
      <div className="container-narrow flex min-h-[50vh] flex-col items-center justify-center text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full border border-forest/20 bg-forest/5 text-forest">
          <Sparkles className="h-7 w-7" />
        </span>
        <p className="eyebrow mt-6">Coming Soon</p>
        <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
          All Featured Spotlights
        </h1>
        <p className="mt-4 max-w-md text-pretty text-base text-charcoal/70">
          An archive of every author we&apos;ve featured is on its way. Soon
          you&apos;ll be able to revisit each spotlight and discover the
          stories behind them.
        </p>
        <Link href="/" className="btn-forest mt-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
