"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whyVerseLine } from "@/data/home";
import { iconMap } from "@/components/home/IconMap";

/** Always visible — image left, content right on desktop; image above content on mobile. */
export function WhyVerseLine() {
  return (
    <section id="why-verseline" className="section bg-ivory">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-5">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-card lg:col-span-2"
        >
          <Image
            src={whyVerseLine.image}
            alt={whyVerseLine.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Content */}
        <div className="lg:col-span-3">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center font-display text-3xl font-bold md:text-4xl lg:text-left"
          >
            {whyVerseLine.title}
          </motion.h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {whyVerseLine.items.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-full border border-forest/20 bg-forest/5 text-forest sm:mx-0">
                    {Icon && <Icon className="h-5 w-5" />}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
