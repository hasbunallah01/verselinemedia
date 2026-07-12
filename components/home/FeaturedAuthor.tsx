"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { authors } from "@/data/authors";

const ease = [0.22, 1, 0.36, 1] as const;

export function FeaturedAuthor() {
  // All hooks must be called unconditionally at the top level,
  // before any early return.
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance to the next author every 10s.
  // Pauses while the user is hovering over the card.
  // Re-arms whenever the slide changes (including on manual click),
  // so a fresh 10s window starts after every interaction.
  // Must be declared above the early return to satisfy Rules of Hooks.
  useEffect(() => {
    if (authors.length <= 1 || isHovered) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % authors.length);
    }, 10000);
    return () => window.clearInterval(id);
  }, [index, isHovered]);

  if (authors.length === 0) return null;

  const author = authors[index];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return authors.length - 1;
      if (next >= authors.length) return 0;
      return next;
    });
  };

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
          className="relative mt-20"
        >
          <GlassCard
            hover
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={author.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.5, ease }}
                className="grid gap-0 md:grid-cols-2"
              >
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
                      priority={index === 0}
                    />
                  </motion.div>

                  {/* Refined gradient overlay — diagonal on desktop for editorial depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent md:bg-gradient-to-tr md:from-ink/90 md:via-ink/20 md:to-transparent" />

                  {/* Bottom book info — editorial caption */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease }}
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease }}
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease }}
                    className="text-pretty leading-[1.8] text-muted"
                  >
                    {author.summary}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25, ease }}
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
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease }}
                    className="h-px w-full origin-left bg-gradient-to-r from-copper/40 via-white/10 to-transparent"
                    aria-hidden
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35, ease }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-copper" aria-hidden />
                      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-copper">
                        VerseLine Media Experience:
                      </p>
                    </div>
                  </motion.div>

                  <motion.blockquote
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease }}
                    className="font-sans text-sm leading-[1.65] text-white/85 italic"
                  >
                    <span className="text-copper not-italic">“</span>
                    {author.quote}
                    <span className="text-copper not-italic">”</span>
                  </motion.blockquote>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation controls — left/right swipe */}
            {authors.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => paginate(-1)}
                  aria-label="Previous author"
                  className="absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink/70 text-white/80 backdrop-blur-md transition-all duration-300 hover:border-copper/40 hover:bg-copper/10 hover:text-copper md:left-5"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => paginate(1)}
                  aria-label="Next author"
                  className="absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink/70 text-white/80 backdrop-blur-md transition-all duration-300 hover:border-copper/40 hover:bg-copper/10 hover:text-copper md:right-5"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
