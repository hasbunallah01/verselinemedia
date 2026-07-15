"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { spotlight } from "@/data/home";

export function FeaturedSpotlight() {
  return (
    <section id="featured-spotlight" className="section bg-ivory">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="card-light grid items-center gap-8 overflow-hidden md:grid-cols-2"
        >
          {/* Copy */}
          <div className="p-8 md:p-12">
            <p className="eyebrow">{spotlight.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
              {spotlight.title}
            </h2>
            <p className="mt-2 text-sm font-medium text-charcoal/60">
              {spotlight.subtitle}
            </p>
            <Link href={spotlight.cta.href} className="btn-forest mt-8">
              {spotlight.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative aspect-[16/10] md:aspect-auto md:h-full md:min-h-[320px]">
            <Image
              src={spotlight.image}
              alt={spotlight.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
