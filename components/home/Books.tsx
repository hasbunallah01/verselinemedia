"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { books } from "@/data/books";
import { ArrowUpRight } from "lucide-react";

export function Books() {
  return (
    <section id="books" className="section">
      <div className="container-wide">
        <SectionTitle
          eyebrow="Featured Books"
          title="Stories worth your shelf"
          subtitle="Hand-picked works from authors we've had the privilege of featuring."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book, i) => (
            <motion.a
              key={book.id}
              href={book.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group block"
            >
              <GlassCard hover className="h-full overflow-hidden p-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
                  <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-copper/90 text-white opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-copper">
                    {book.genre}
                  </p>
                  <h3 className="mt-2 font-display text-lg leading-tight text-white">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{book.author}</p>
                  <p className="mt-3 line-clamp-2 text-pretty text-sm text-muted/80">
                    {book.excerpt}
                  </p>
                </div>
              </GlassCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
