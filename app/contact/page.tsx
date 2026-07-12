import type { Metadata } from "next";
import { Mail, MessageCircle, Twitter, Youtube, Facebook } from "lucide-react";
import { ContactSection } from "@/components/home/ContactForm";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { site } from "@/data/site";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with VerseLine Media.",
};

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    body: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MessageCircle,
    title: "Press & partnerships",
    body: "press@verselinemedia.com",
    href: "mailto:press@verselinemedia.com",
  },
];

const socialLinks = [
  { icon: Twitter, label: "Twitter / X", href: site.socials.twitter },
  { icon: Youtube, label: "YouTube", href: site.socials.youtube },
  { icon: Facebook, label: "Facebook", href: site.socials.facebook },
];

export default function ContactPage() {
  return (
    <>
      <section className="section pt-40">
        <div className="container-narrow text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-copper">
            <span className="h-1 w-1 rounded-full bg-copper" />
            Contact
          </span>
          <h1 className="mt-8 font-display text-5xl leading-[1.05] tracking-tight text-white md:text-7xl">
            Let&apos;s start a <span className="italic text-copper">conversation</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted">
            Whether you&apos;re an author with a story to tell, a reader with a
            question, or a partner with an idea — we&apos;d love to hear from
            you.
          </p>
        </div>
      </section>

      <section className="section pt-8">
        <div className="container-wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {contactCards.map((c) => (
              <GlassCard key={c.title} hover className="p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-copper/10 text-copper ring-1 ring-copper/30">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg text-white">{c.title}</h3>
                {c.href ? (
                  <a
                    href={c.href}
                    className="mt-2 block text-pretty text-sm text-muted transition hover:text-copper"
                  >
                    {c.body}
                  </a>
                ) : (
                  <p className="mt-2 text-pretty text-sm text-muted">{c.body}</p>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <section className="section">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Find us"
            title="Elsewhere online"
            subtitle="Follow the conversation on the platforms where readers actually live."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group"
              >
                <GlassCard hover className="flex items-center gap-4 p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-copper/10 text-copper ring-1 ring-copper/30 transition group-hover:bg-copper/20">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white">{s.label}</p>
                    <p className="text-xs text-muted">@verselinemedia</p>
                  </div>
                </GlassCard>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
