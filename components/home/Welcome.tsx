"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Quote } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Welcome() {
  return (
    <section id="welcome" className="section relative overflow-hidden">
      {/* Subtle visual separation from adjacent sections */}
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(184,115,51,0.06),transparent_60%)]" />

      <div className="container-wide">
        <SectionTitle
          eyebrow="Welcome"
          title={
            <>
              More Than a Platform
              <br />
              <span className="italic text-copper">A Home for Storytellers</span>
            </>
          }
          subtitle="VerseLine Media was founded on a singular belief: that every story holds the power to move hearts, spark conversation, and connect people across different walks of life."
        />

        <div className="mt-20 grid gap-10 md:gap-14 lg:gap-20 md:grid-cols-12 md:items-start">
          {/* Left: Body text — editorial column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="md:col-span-7 space-y-7 text-pretty text-base leading-[1.8] text-muted md:text-lg"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              We host live conversations with authors, craft compelling visual
              features, and build a growing community of readers who believe
              that books deserve to be experienced beyond the page.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.25, ease }}
              className="h-px w-12 origin-left bg-gradient-to-r from-copper/60 to-transparent"
              aria-hidden
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
            >
              We don&apos;t just promote books — we honour the journey, celebrate
              the voice, and build bridges between authors and the readers
              waiting to find them.
            </motion.p>
          </motion.div>

          {/* Right: Pull-quote — editorial aside */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="md:col-span-5"
          >
            <GlassCard
              hover
              className="relative h-full p-8 md:p-10 lg:p-12"
            >
              {/* Vertical copper rule — editorial pull-quote accent */}
              <div
                aria-hidden
                className="absolute left-0 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-copper/60 to-transparent"
              />

              {/* Quote mark badge */}
              <div className="absolute -left-3 -top-3 grid h-12 w-12 place-items-center rounded-full bg-copper/15 ring-1 ring-copper/30">
                <Quote className="h-5 w-5 text-copper" />
              </div>

              <blockquote className="font-display text-2xl leading-[1.35] text-white md:text-3xl">
                <span className="text-copper">“</span>We don&apos;t just promote
                books — we honour the journey, celebrate the voice, and build
                bridges between authors and the readers waiting to discover
                them.<span className="text-copper">”</span>
              </blockquote>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-px w-8 bg-copper/50" aria-hidden />
                <p className="text-sm uppercase tracking-[0.25em] text-muted">
                  — The VerseLine Promise
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
