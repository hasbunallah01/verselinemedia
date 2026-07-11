import Link from "next/link";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Music2,
  BookOpen,
} from "lucide-react";
import { site } from "@/data/site";

const socialIcons = {
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
  youtube: Youtube,
  tiktok: Music2,
  linkedin: Linkedin,
} as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 bg-ink-50/40">
      <div className="container-wide px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-copper/10 ring-1 ring-copper/30">
                <BookOpen className="h-5 w-5 text-copper" />
              </span>
              <span className="font-display text-xl tracking-wide text-white">
                VerseLine<span className="text-copper">.</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {Object.entries(site.socials).map(([key, href]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                if (!Icon) return null;
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={key}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-muted transition hover:border-copper/40 hover:bg-copper/10 hover:text-copper"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-white">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-copper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-white">
              Resources
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <Link href="/about" className="transition hover:text-copper">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#featured-authors"
                  className="transition hover:text-copper"
                >
                  Featured Authors
                </Link>
              </li>
              <li>
                <Link href="/#awards" className="transition hover:text-copper">
                  Awards
                </Link>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition hover:text-copper">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-copper mt-16" />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-muted md:flex-row md:items-center">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="#" className="transition hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
