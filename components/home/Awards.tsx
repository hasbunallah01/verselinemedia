"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Medal } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { awards } from "@/data/awards";

const iconMap = {
  trophy: Trophy,
  star: Star,
  medal: Medal,
} as const;

export function Awards() {
  return (
    <section id="awards" className="section relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(184,115,51,0.08),transparent_60%)]" />
      <div className="container-wide">
        <SectionTitle
          eyebrow="Recognition & Awards"
          title="Honoring literary excellence"
          subtitle="We recognize the authors, works, and community contributions that elevate the literary world."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {awards.map((award, i) => {
            const Icon = iconMap[award.icon];
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <GlassCard hover className="flex h-full flex-col gap-5 p-8">
                  <div className="flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-copper to-copper-700 text-white shadow-glow-copper">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-copper">
                      {award.year}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted">
                      Recipient
                    </p>
                    <p className="mt-2 font-display text-2xl text-white">
                      {award.recipient}
                    </p>
                    <p className="mt-4 font-display text-lg text-copper">
                      {award.title}
                    </p>
                  </div>

                  <p className="text-pretty text-sm leading-relaxed text-muted">
                    {award.reason}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
