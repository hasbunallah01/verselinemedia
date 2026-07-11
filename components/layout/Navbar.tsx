"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,padding,box-shadow,border-color] duration-500 ease-out",
          scrolled
            ? "bg-ink/70 backdrop-blur-2xl border-b border-white/[0.06] py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.55)]"
            : "bg-transparent border-b border-transparent py-5"
        )}
      >
        <div className="container-wide flex items-center justify-between gap-8 px-6 md:px-10">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label={site.name}
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-copper/10 ring-1 ring-copper/30 transition group-hover:bg-copper/20">
              <BookOpen className="h-4 w-4 text-copper" />
            </span>
            <span className="font-display text-base font-medium tracking-wide text-white">
              VerseLine<span className="text-copper">.</span>
            </span>
          </Link>

          <nav className="hidden items-center md:flex">
            {site.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative px-4 py-2 text-sm tracking-wide transition-colors duration-300",
                    active ? "text-white" : "text-muted hover:text-white"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {!active && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute left-4 right-4 -bottom-0.5 h-px origin-left scale-x-0 transform bg-copper/70 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                    />
                  )}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-4 right-4 -bottom-0.5 h-px bg-copper"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="text-sm text-muted transition hover:text-white"
            >
              Log in
            </Link>
            <Link href="/contact#submit" className="btn-primary !py-2 !px-5">
              Get Featured
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition-colors hover:bg-white/[0.08] md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/80 backdrop-blur-2xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col gap-6 border-l border-white/10 bg-ink-50/95 p-8 pt-24 backdrop-blur-2xl"
            >
              {site.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.06,
                    duration: 0.5,
                    ease: EASE_OUT_EXPO,
                  }}
                >
                  <Link
                    href={item.href}
                    className="group relative inline-block font-display text-3xl text-white transition-colors duration-300 hover:text-copper"
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-copper transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                    />
                  </Link>
                </motion.div>
              ))}
              <div className="mt-auto flex flex-col gap-3">
                <Link href="/contact" className="btn-ghost w-full">
                  Log in
                </Link>
                <Link href="/contact#submit" className="btn-primary w-full">
                  Get Featured
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
