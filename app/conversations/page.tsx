import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Conversations",
  description:
    "Explore live conversations and audio interviews with featured authors on VerseLine Media.",
};

/**
 * Placeholder route for the future Conversations library.
 * The full library (grid of ConversationCard, filters,
 * individual conversation pages) will be implemented later.
 */
export default function ConversationsPage() {
  return (
    <section className="section bg-ivory">
      <div className="container-narrow flex min-h-[50vh] flex-col items-center justify-center text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full border border-forest/20 bg-forest/5 text-forest">
          <Headphones className="h-7 w-7" />
        </span>
        <p className="eyebrow mt-6">Coming Soon</p>
        <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
          All Conversations
        </h1>
        <p className="mt-4 max-w-md text-pretty text-base text-charcoal/70">
          Our full library of author conversations is on its way. Soon
          you&apos;ll be able to browse, listen and discover every story we&apos;ve
          featured.
        </p>
        <Link href="/" className="btn-forest mt-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
