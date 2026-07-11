"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 500, suffix: "+", label: "Featured Authors" },
  { value: 250, suffix: "+", label: "Live Conversations" },
  { value: 15000, suffix: "+", label: "Readers Reached" },
  { value: 100, suffix: "+", label: "Books Promoted" },
];

export function Stats() {
  return (
    <section className="section">
      <div className="container-wide">
        <SectionTitle
          eyebrow="Our Reach"
          title="A growing community"
          subtitle="The numbers behind the conversations we're proud to host."
        />

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-ink/80 p-8 text-center md:p-10"
            >
              <p className="font-display text-4xl text-copper md:text-5xl lg:text-6xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted md:text-sm">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
