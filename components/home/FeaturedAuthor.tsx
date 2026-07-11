"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BookOpen } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { authors } from "@/data/authors";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

const ease = [0.22, 1, 0.36, 1] as const;

export function FeaturedAuthor() {
  const author = authors[0];
  if (!author) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="featured-authors" className="section relative overflow-hidden">
      {/* Subtle visual separation from adjacent sections */}
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.05),transparent_70%)]" />

      <div className="container-wide" ref={sectionRef}>
        <SectionTitle
          eyebrow="Featured Author"
          title="Voices that move us"
          subtitle="A closer look at the writers who trust us with their story — and the books that change the way we read the world."
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="mt-20"
        >
          <GlassCard hover className="grid gap-0 overflow-hidden md:grid-cols-2">
            {/* Left: Author image — editorial presentation */}
            <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-inset ring-white/10 md:aspect-auto">
              {/* Parallax image */}
              <motion.div style={{ y: imageY }} className="absolute inset-0">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                  priority
                />
              </motion.div>

              {/* Refined gradient overlay — diagonal on desktop for editorial depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent md:bg-gradient-to-tr md:from-ink/90 md:via-ink/20 md:to-transparent" />

              {/* Bottom book info — editorial caption */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.4, ease }}
                className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="h-3 w-3 text-copper" />
                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-copper">
                    Featured Book
                  </p>
                </div>
                <h4 className="mt-3 font-display text-2xl leading-[1.1] text-white md:text-3xl lg:text-[2.5rem]">
                  {author.book}
                </h4>
                <p className="mt-2 text-sm text-muted">{author.genre}</p>
              </motion.div>
            </div>

            {/* Right: Content — editorial column */}
            <div className="flex flex-col gap-8 p-8 md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.2, ease }}
              >
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-copper" aria-hidden />
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-copper">
                    Author Spotlight
                  </p>
                </div>
                <h3 className="mt-4 font-display text-4xl leading-[1.05] text-white md:text-5xl lg:text-[3.5rem]">
                  {author.name}
                </h3>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.3, ease }}
                className="text-pretty leading-[1.8] text-muted"
              >
                {author.summary}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.4, ease }}
                className="flex flex-wrap gap-2"
              >
                {author.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted transition-all duration-300 hover:border-copper/30 hover:bg-copper/5 hover:text-copper"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.5, ease }}
                className="h-px w-full origin-left bg-gradient-to-r from-copper/40 via-white/10 to-transparent"
                aria-hidden
              />

              <motion.blockquote
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.55, ease }}
                className="font-display text-lg leading-[1.5] text-white/90 italic"
              >
                <span className="text-copper not-italic">“</span>
                {author.quote.slice(0, 200)}…
                <span className="text-copper not-italic">”</span>
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.65, ease }}
                className="pt-2"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="h-px w-8 bg-copper/50"
                    aria-hidden
                  />
                  <AnimatedButton href={author.articleUrl} variant="primary">
                    Read full article
                  </AnimatedButton>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
