"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { spotlights } from "@/data/home";

/** Featured Spotlight — same card design, arrows cycle through all entries. */
export function FeaturedSpotlight() {
  const [index, setIndex] = useState(0);
  const count = spotlights.length;
  const item = spotlights[index];

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <section id="featured-spotlight" className="section overflow-x-clip bg-ivory">
      <div className="container-wide">
        <div className="card-light overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              {/* Copy */}
              <div className="p-8 md:p-12">
                <p className="eyebrow">{item.eyebrow}</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-charcoal/60">
                  {item.subtitle}
                </p>
                <Link href={item.cta.href} className="btn-forest mt-8">
                  {item.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Image with book-cover panel */}
              <div className="relative aspect-[16/10] md:aspect-auto md:h-full md:min-h-[340px]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-y-0 right-0 flex w-[38%] items-center justify-center bg-gradient-to-l from-charcoal via-charcoal/85 to-transparent">
                  <div className="relative aspect-[2/3] w-[62%] overflow-hidden rounded-md shadow-card-hover ring-1 ring-white/15">
                    <Image
                      src={item.bookCover}
                      alt={`${item.bookTitle} — book cover`}
                      fill
                      sizes="20vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-charcoal/70 px-2 py-1.5 text-center font-display text-[11px] font-semibold uppercase tracking-wide text-white">
                      {item.bookTitle}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel controls */}
          <div className="flex items-center justify-between border-t border-mist px-6 py-4 md:px-8">
            <div className="flex gap-2">
              {spotlights.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to spotlight ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-forest" : "w-2 bg-mist"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous spotlight"
                className="grid h-9 w-9 place-items-center rounded-full border border-mist bg-white text-charcoal transition hover:border-forest hover:text-forest"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next spotlight"
                className="grid h-9 w-9 place-items-center rounded-full border border-mist bg-white text-charcoal transition hover:border-forest hover:text-forest"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/spotlights"
            className="inline-flex items-center gap-2 text-sm font-medium text-forest transition-colors hover:text-bronze"
          >
            View All Featured Spotlights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
