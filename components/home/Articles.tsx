"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { articles } from "@/data/articles";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export function Articles() {
  return (
    <section id="articles" className="section">
      <div className="container-wide">
        <SectionTitle
          eyebrow="Latest Articles"
          title="From the studio"
          subtitle="Interviews, essays, and behind-the-scenes notes from our editorial team."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {articles.map((article, i) => (
            <motion.a
              key={article.id}
              href={article.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group block"
            >
              <GlassCard hover className="h-full overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-copper/40 bg-copper/15 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-copper backdrop-blur">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="line-clamp-2 font-display text-xl leading-snug text-white transition group-hover:text-copper">
                    {article.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-pretty text-sm text-muted">
                    {article.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted">
                    <div className="flex items-center gap-3">
                      <span>{article.author}</span>
                      <span>·</span>
                      <span>{fmt(article.date)}</span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readingTime} min
                    </span>
                  </div>
                  <div className="mt-5 flex items-center gap-1 text-sm font-medium text-copper opacity-0 transition group-hover:opacity-100">
                    Read article
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </GlassCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
