"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { faqs } from "@/data/faqs";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="section">
      <div className="container-narrow">
        <SectionTitle
          eyebrow="FAQs & Support"
          title="Frequently asked questions"
          subtitle="Find answers to some of the frequently asked questions about our services."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <GlassCard key={faq.id} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-6 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-white md:text-xl">
                    {faq.question}
                  </span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 transition ${
                      isOpen
                        ? "rotate-45 bg-copper/15 text-copper"
                        : "text-muted"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-pretty leading-relaxed text-muted">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
