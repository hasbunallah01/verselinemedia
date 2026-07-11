"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { authors } from "@/data/authors";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export function FeaturedAuthor() {
  const author = authors[0];
  if (!author) return null;

  return (
    <section id="featured-authors" className="section">
      <div className="container-wide">
        <SectionTitle
          eyebrow="Featured Author"
          title="Voices that move us"
          subtitle="A closer look at the writers who trust us with their story — and the books that change the way we read the world."
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <GlassCard hover className="grid gap-0 overflow-hidden md:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto">
              <Image
                src={author.image}
                alt={author.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent md:bg-gradient-to-r" />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-copper">
                  Featured Book
                </p>
                <p className="mt-2 font-display text-2xl text-white md:text-3xl">
                  {author.book}
                </p>
                <p className="mt-1 text-sm text-muted">{author.genre}</p>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6 p-8 md:p-12 lg:p-16">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-copper">
                  Author Spotlight
                </p>
                <h3 className="mt-3 font-display text-4xl text-white md:text-5xl">
                  {author.name}
                </h3>
              </div>

              <p className="text-pretty leading-relaxed text-muted">
                {author.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {author.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="divider-copper" />

              <blockquote className="font-display text-lg leading-snug text-white/90 italic">
                <span className="text-copper not-italic">“</span>
                {author.quote.slice(0, 200)}…
                <span className="text-copper not-italic">”</span>
              </blockquote>

              <div className="pt-2">
                <AnimatedButton href={author.articleUrl} variant="primary">
                  Read full article
                </AnimatedButton>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
