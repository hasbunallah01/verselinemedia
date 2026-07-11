"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Quote } from "lucide-react";

export function Welcome() {
  return (
    <section id="welcome" className="section">
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

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-pretty text-base leading-relaxed text-muted md:text-lg"
          >
            <p>
              We host live conversations with authors, craft compelling visual
              features, and build a growing community of readers who believe
              that books deserve to be experienced beyond the page.
            </p>
            <p>
              We don&apos;t just promote books — we honour the journey, celebrate
              the voice, and build bridges between authors and the readers
              waiting to find them.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard
              hover
              className="relative h-full p-8 md:p-10"
            >
              <div className="absolute -left-3 -top-3 grid h-12 w-12 place-items-center rounded-full bg-copper/15 ring-1 ring-copper/30">
                <Quote className="h-5 w-5 text-copper" />
              </div>
              <blockquote className="font-display text-2xl leading-snug text-white md:text-3xl">
                <span className="text-copper">“</span>We don&apos;t just promote
                books — we honour the journey, celebrate the voice, and build
                bridges between authors and the readers waiting to discover
                them.<span className="text-copper">”</span>
              </blockquote>
              <p className="mt-6 text-sm uppercase tracking-[0.25em] text-muted">
                — The VerseLine Promise
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
