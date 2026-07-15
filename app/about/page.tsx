import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { site } from "@/data/site";
import {
  Sparkles,
  Heart,
  Link2,
  Shield,
  Users,
  Flame,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, vision, values, and rules behind VerseLine Media — a platform built to amplify author voices and connect them with readers who care.",
};

const values = [
  {
    icon: Sparkles,
    title: "Authenticity",
    body: "We believe every story deserves to be told the way it truly is. We never force a narrative or polish a journey beyond recognition. At VerseLine Media, we celebrate real voices, real journeys, and real inspiration — because that is what readers connect with the most.",
  },
  {
    icon: Heart,
    title: "Respect",
    body: "Every author who comes to us has poured their heart into their work, and we honour that. We treat every story, every message, and every person with the respect they deserve, from the moment they submit their work to the day they go live with us.",
  },
  {
    icon: Link2,
    title: "Connection",
    body: "We exist to build bridges, not just broadcast content. We are deeply committed to creating genuine connections between authors and readers, because we believe that is where the true magic of storytelling lives.",
  },
  {
    icon: Shield,
    title: "Integrity",
    body: "We review every submission with honesty and care. We do not make promises we cannot keep, and we do not feature stories simply to fill a schedule. We choose with purpose, and we communicate with transparency every step of the way.",
  },
  {
    icon: Users,
    title: "Community",
    body: "We are more than a platform — we are a growing family of authors and readers who share a love for meaningful stories. We nurture this community intentionally, because we know that a strong community is what gives every story the audience it deserves.",
  },
  {
    icon: Flame,
    title: "Passion",
    body: "We do this work because we love it. Every live session, every feature, every conversation is crafted with genuine enthusiasm for storytelling — and that passion is what makes VerseLine Media feel different.",
  },
];

const rules = [
  {
    title: "Be Honest With Us",
    body: "We can only tell your story well if you give us the truth. Every detail you submit must be accurate. Misleading information disqualifies you immediately and permanently.",
  },
  {
    title: "Understand That Selection Is a Process",
    body: "We review every submission with genuine care and attention. Being selected is something you earn through the strength and authenticity of your story — not something that is owed. Our selection decisions are final.",
  },
  {
    title: "Show Up Ready",
    body: "When we schedule your session, we have already invested our time, our team, and our platform into your story. We expect you to honour that. Come prepared, come on time, and come with the same energy you put into writing your book.",
  },
  {
    title: "Communicate With Respect",
    body: "We are people, and we treat every author like one. All we ask is the same in return. Any form of disrespect or misconduct ends our working relationship immediately.",
  },
  {
    title: "Trust Only Our Official Channels",
    body: "All fees, arrangements, and communications from VerseLine Media come through our official platforms only. If anyone contacts you claiming to represent VerseLine Media through an unverified source, do not send any fees or personal details. Reach out to our team or admin immediately and we will get back to you as soon as possible.",
  },
  {
    title: "Your Story Belongs to You",
    body: "Working with us does not change who owns your work. Your book, your words, and your ideas remain entirely yours. We simply help the world hear them.",
  },
];

const aboutImage = "/about-who-we-are.webp";

const socialLinks = [
  { label: "X", href: site.socials.twitter, Icon: Twitter },
  { label: "Facebook", href: site.socials.facebook, Icon: Facebook },
  { label: "YouTube", href: site.socials.youtube, Icon: Youtube },
];

export default function AboutPage() {
  return (
    <div className="dark-page">
      {/* Hero */}
      <section className="section pt-40">
        <div className="container-narrow text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-copper">
            <span className="h-1 w-1 rounded-full bg-copper" />
            Our Story
          </span>
          <h1 className="mt-8 font-display text-5xl leading-[1.05] tracking-tight text-white md:text-7xl">
            Explore Our <span className="italic text-copper">Journey</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted">
            The story behind VerseLine Media — why we built it, who it is for,
            and the conviction that drives every conversation we host.
          </p>
        </div>
      </section>

      {/* Who We Are — copy + image */}
      <section className="section pt-8">
        <div className="container-wide grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl glass ring-1 ring-white/10 md:order-1">
            <Image
              src={aboutImage}
              alt="A quiet moment with a book, lit by warm light — the spirit of VerseLine Media."
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
          </div>

          <div className="md:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-copper">
              Who We Are
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-white md:text-5xl">
              We exist so the right story reaches the people who need it.
            </h2>
            <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted">
              <p>
                We are VerseLine Media — and we exist for one reason: to make
                sure your story reaches the people who need to hear it.
              </p>
              <p>
                We built this platform from a deep passion for storytelling and
                a genuine desire to close the gap between authors and readers.
                Through our live sessions and powerful visual features, we
                create conversations that go beyond the book — exploring the
                heart behind the writing, the journey behind the words, and the
                message that made you put pen to paper in the first place.
              </p>
              <p>
                We are not a passive platform. We are active, intentional, and
                deeply invested in the authors we feature. When you join
                VerseLine Media, our team works to present you to our audience
                in the most authentic and impactful way possible, because we
                believe the right introduction can change everything.
              </p>
              <p>
                Our community is growing, our conversations are real, and our
                commitment to amplifying author voices has never been stronger.
                If you are ready to step beyond the pages and connect with
                readers who are genuinely waiting for what you have written —
                we are ready for you.
              </p>
              <p className="font-display text-xl italic text-white">
                Welcome to VerseLine Media. Your story starts here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="section">
        <div className="container-narrow">
          <SectionTitle
            eyebrow="Our Vision"
            title="Honouring the voice behind every book"
          />
          <div className="mt-12 space-y-5 text-pretty text-lg leading-relaxed text-muted">
            <p>
              At VerseLine Media, our mission is to celebrate the voice behind
              every book. We are here to give authors a platform that goes
              beyond promotion — one that honours their journey, amplifies
              their message, and connects them with readers who are genuinely
              hungry for meaningful stories.
            </p>
            <p>
              We believe that when the right story reaches the right reader,
              something powerful happens. That moment of connection is what
              drives everything we do. It is why we show up, why we keep
              growing our community, and why we are deeply committed to doing
              this work with heart, intention, and authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Our Core Values"
            title="What we hold to"
            subtitle="Six principles that shape every conversation, every feature, and every relationship we build."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <GlassCard key={v.title} hover className="p-8">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-copper/10 text-copper ring-1 ring-copper/30">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <p className="font-display text-3xl text-copper/40">
                    0{i + 1}
                  </p>
                </div>
                <h3 className="mt-6 font-display text-2xl text-white">
                  {v.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
                  {v.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Rules and Regulations */}
      <section className="section">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Rules and Regulations"
            title="How we work, and what we ask of you"
            subtitle="A clear, honest set of expectations — so the people we work with always know where they stand."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {rules.map((r, i) => (
              <GlassCard
                key={r.title}
                className="flex h-full gap-6 p-8 md:p-10"
              >
                <p className="font-display text-4xl leading-none text-copper/60 md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-display text-xl leading-snug text-white md:text-2xl">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted md:text-base">
                    {r.body}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="section pt-8">
        <div className="container-narrow">
          <GlassCard className="overflow-hidden p-10 text-center md:p-16">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.15),transparent_60%)]" />
            <p className="text-xs uppercase tracking-[0.3em] text-copper">
              Follow Along
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight text-white md:text-4xl">
              Stay close to the conversation
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-muted">
              Find us on the platforms we publish on most — new features,
              behind-the-scenes moments, and the conversations we cannot fit
              into a single post.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm text-muted transition hover:-translate-y-0.5 hover:border-copper/40 hover:bg-copper/10 hover:text-copper"
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
