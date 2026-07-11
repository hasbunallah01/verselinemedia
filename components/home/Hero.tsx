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
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=2400&q=80')",
          }}
        />
      </motion.div>

      {/* Gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/85 to-ink" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.15),transparent_60%)]" />

      {/* Noise overlay */}
      <div className="absolute inset-0 -z-10 bg-noise opacity-[0.04] mix-blend-overlay" />

      <motion.div
        style={{ y, opacity }}
        className="container-wide relative w-full px-6 pt-32 md:px-10 md:pt-40"
      >
        <motion.div
          variants={wordContainer}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-copper"
          >
            <span className="h-1 w-1 rounded-full bg-copper" />
            A Home for Storytellers
          </motion.span>

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
              >
                Media
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted md:text-xl"
          >
            Where authors are truly heard. We celebrate the courage behind every
            great book, spark conversations beyond the page, and connect readers
            with unforgettable voices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link href="/#featured-authors" className="btn-primary">
              Explore Stories
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/contact#submit" className="btn-ghost">
              <Play className="h-4 w-4" />
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
    </section>
  );
}
