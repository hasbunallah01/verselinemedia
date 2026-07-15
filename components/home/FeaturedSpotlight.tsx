"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { spotlight } from "@/data/home";

export function FeaturedSpotlight() {
  return (
    <section id="featured-spotlight" className="section bg-ivory">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="card-light grid items-center gap-8 overflow-hidden md:grid-cols-2"
        >
          {/* Copy */}
          <div className="p-8 md:p-12">
            <p className="eyebrow">{spotlight.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
              {spotlight.title}
            </h2>
            <p className="mt-2 text-sm font-medium text-charcoal/60">
              {spotlight.subtitle}
            </p>
            <Link href={spotlight.cta.href} className="btn-forest mt-8">
              {spotlight.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Image with book-cover panel + carousel controls (reference) */}
          <div className="relative aspect-[16/10] md:aspect-auto md:h-full md:min-h-[340px]">
            <Image
              src={spotlight.image}
              alt={spotlight.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
            {/* Dark right panel holding the book cover */}
            <div className="absolute inset-y-0 right-0 flex w-[38%] items-center justify-center bg-gradient-to-l from-charcoal via-charcoal/85 to-transparent">
              <div className="relative aspect-[2/3] w-[62%] overflow-hidden rounded-md shadow-card-hover ring-1 ring-white/15">
                <Image
                  src={spotlight.bookCover}
                  alt={`${spotlight.bookTitle} — book cover`}
                  fill
                  sizes="20vw"
                  className="object-cover"
                  loading="lazy"
                />
                <span className="absolute inset-x-0 bottom-0 bg-charcoal/70 px-2 py-1.5 text-center font-display text-[11px] font-semibold uppercase tracking-wide text-white">
                  {spotlight.bookTitle}
                </span>
              </div>
            </div>
            {/* Carousel controls — wired up when more spotlights exist */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                type="button"
                aria-label="Previous spotlight"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-charcoal transition hover:bg-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next spotlight"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-charcoal transition hover:bg-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
