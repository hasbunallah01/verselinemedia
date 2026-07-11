"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const wordContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };
  const word = {
    hidden: { y: "120%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.9, ease },
    },
  };

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div style={{ scale }} className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 bg-cover bg-[center_35%]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=2400&q=80')",
          }}
        />
      </motion.div>

      {/* Multi-layer cinematic overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/30 via-ink/70 to-ink" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_50%,rgba(184,115,51,0.22),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.6),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

      {/* Noise overlay */}
      <div className="absolute inset-0 -z-10 bg-noise opacity-[0.05] mix-blend-overlay" />

      {/* Top editorial rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.8, ease }}
        className="absolute left-6 right-6 top-24 hidden h-px origin-left bg-gradient-to-r from-copper/60 via-white/10 to-transparent md:left-10 md:right-10 md:block"
      />

      <motion.div
        style={{ y, opacity }}
        className="container-wide relative z-10 w-full px-6 pt-32 md:px-10 md:pt-40"
      >
        <motion.div
          variants={wordContainer}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          {/* Editorial eyebrow: rule + dot + label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-copper" />
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] text-copper">
              <span className="h-1 w-1 rounded-full bg-copper" />
              A Home for Storytellers
            </span>
          </motion.div>

          <h1 className="mt-8 font-display text-[clamp(3rem,9vw,8rem)] font-medium leading-[0.95] tracking-tight text-white">
            <span className="block overflow-hidden">
              <motion.span variants={word} className="inline-block">
                VerseLine
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                variants={word}
                className="inline-block bg-gradient-to-r from-copper-200 via-copper to-copper-400 bg-clip-text italic text-transparent"
                style={{ textShadow: "0 0 40px rgba(184, 115, 51, 0.25)" }}
              >
                Media
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 max-w-2xl text-pretty text-lg leading-[1.7] text-muted md:text-xl"
          >
            Where authors are truly heard. We celebrate the courage behind every
            great book, spark conversations beyond the page, and connect readers
            with unforgettable voices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
            <Link
              href="/#featured-authors"
              className="btn-primary group/cta"
            >
              Explore Stories
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact#submit"
              className="btn-ghost group/play"
            >
              <Play className="h-4 w-4 transition-transform duration-300 group-hover/play:scale-110" />
              Become Featured
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-px bg-gradient-to-b from-copper to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Bottom editorial rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.9, ease }}
        className="absolute bottom-10 left-6 right-6 hidden h-px origin-right bg-gradient-to-l from-copper/60 via-white/10 to-transparent md:left-10 md:right-10 md:block"
      />
    </section>
  );
}
