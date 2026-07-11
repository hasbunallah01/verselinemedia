import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Sparkles, Compass, Heart, BookOpen, Users, Mic } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "The mission, vision, and story behind VerseLine Media — and the people who make it possible.",
};

const values = [
  {
    icon: Heart,
    title: "Story first",
    body: "We choose books that move us and conversations that honour the work behind them.",
  },
  {
    icon: Compass,
    title: "Courage over polish",
    body: "We surface voices that take risks — and we tell those stories with care, not spin.",
  },
  {
    icon: Sparkles,
    title: "Craft in every frame",
    body: "From interview to thumbnail, we treat literary media like the art form it is.",
  },
  {
    icon: Users,
    title: "Community, not audience",
    body: "Readers, authors, and editors — we grow this together, in conversation, not at a distance.",
  },
];

const timeline = [
  { year: "2023", title: "A first conversation", body: "VerseLine Media begins as a single live interview, recorded in a small studio." },
  { year: "2024", title: "Building the team", body: "Editors, producers, and designers join to turn one good conversation into a rhythm." },
  { year: "2025", title: "Going global", body: "Authors from 14 countries featured; the community passes 10,000 readers." },
  { year: "2026", title: "A new chapter", body: "We launch the Recognition & Awards program and an open submissions process." },
];

const process = [
  { icon: BookOpen, step: "01", title: "Submit", body: "Authors and publicists send us a book and a story worth telling." },
  { icon: Mic, step: "02", title: "Conversation", body: "We host a long, real conversation — no script, no quick questions." },
  { icon: Sparkles, step: "03", title: "Craft", body: "Our editors and designers turn the conversation into a feature you'll want to share." },
  { icon: Users, step: "04", title: "Community", body: "We publish, you read, the conversation keeps going." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section pt-40">
        <div className="container-narrow text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-copper">
            <span className="h-1 w-1 rounded-full bg-copper" />
            About VerseLine
          </span>
          <h1 className="mt-8 font-display text-5xl leading-[1.05] tracking-tight text-white md:text-7xl">
            We exist so that <span className="italic text-copper">good books</span>
            <br /> are heard.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted">
            VerseLine Media is a literary media company. We host long, careful
            conversations with authors, design them into features, and bring
            readers into a community where books are part of how we live.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section pt-8">
        <div className="container-wide grid gap-8 md:grid-cols-2">
          <GlassCard className="p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-copper">Mission</p>
            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Give every book a real conversation.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted">
              Most books get a blurb. We think they deserve a room. Our mission
              is to give authors the kind of attention we wished more books
              received — generous, informed, and built to last.
            </p>
          </GlassCard>
          <GlassCard className="p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-copper">Vision</p>
            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              A literary culture that listens.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted">
              We imagine a world where the people who write books and the
              people who read them are closer than ever — talking, learning,
              and discovering together.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container-wide grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { v: 500, s: "+", l: "Authors featured" },
            { v: 250, s: "+", l: "Live conversations" },
            { v: 14, s: "", l: "Countries reached" },
            { v: 100, s: "+", l: "Books promoted" },
          ].map((s) => (
            <GlassCard key={s.l} className="p-8 text-center">
              <p className="font-display text-4xl text-copper md:text-5xl">
                <AnimatedCounter value={s.v} suffix={s.s} />
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted">
                {s.l}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="section">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Our Story"
            title="A short timeline of how we got here"
            subtitle="From a single interview to a community of readers, authors, and editors across the world."
          />

          <div className="relative mt-16">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-copper/40 via-copper/10 to-transparent md:left-1/2" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className={`relative grid items-start gap-6 md:grid-cols-2 ${
                    i % 2 ? "md:[&>:first-child]:order-2" : ""
                  }`}
                >
                  <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                    <p className="font-display text-3xl text-copper">{t.year}</p>
                    <h3 className="mt-2 font-display text-2xl text-white">
                      {t.title}
                    </h3>
                    <p className="mt-3 text-pretty text-muted">{t.body}</p>
                  </div>
                  <div className="hidden md:block md:pl-12" />
                  <span className="absolute left-4 top-2 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-copper shadow-glow-copper md:left-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Core Values"
            title="What we hold to"
            subtitle="Four principles that guide every conversation, every edit, and every release."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <GlassCard key={v.title} hover className="p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-copper/10 text-copper ring-1 ring-copper/30">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-white">{v.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
                  {v.body}
                </p>
                <p className="mt-6 font-display text-3xl text-copper/40">
                  0{i + 1}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Our Process"
            title="From submission to community"
            subtitle="A simple, transparent path from a book landing in our inbox to a feature in the world."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <GlassCard key={p.step} className="p-8">
                <div className="flex items-center justify-between">
                  <p className="font-display text-3xl text-copper/60">{p.step}</p>
                  <p.icon className="h-5 w-5 text-muted" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-white">{p.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-narrow">
          <GlassCard className="overflow-hidden p-10 text-center md:p-16">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.15),transparent_60%)]" />
            <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight text-white md:text-5xl">
              Got a book we should hear about?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-muted">
              We&apos;re always looking for our next conversation. Submit your
              work and we&apos;ll get back to you within two weeks.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <AnimatedButton href="/contact#submit" variant="primary">
                Submit your book
              </AnimatedButton>
              <AnimatedButton href="/#featured-authors" variant="ghost">
                See features
              </AnimatedButton>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
