"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MobileCollapsible } from "@/components/ui/MobileCollapsible";
import { testimonials } from "@/data/home";

export function Testimonials() {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-wide">
        <MobileCollapsible title="What Our Authors Say">
        <SectionHeading title="What Our Authors Say" className="hidden lg:flex" />
        <div className="grid gap-6 md:grid-cols-3 lg:mt-12">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-light flex flex-col p-7 hover:shadow-card-hover"
            >
              <Quote className="h-6 w-6 text-bronze" aria-hidden />
              <blockquote className="mt-4 flex-1 font-display text-[15px] italic leading-relaxed text-charcoal/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                    loading="lazy"
                  />
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-charcoal/60">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        </MobileCollapsible>
      </div>
    </section>
  );
}
