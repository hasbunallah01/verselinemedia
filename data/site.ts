export const site = {
  name: "VerseLine Media",
  tagline: "A Home for Storytellers",
  description:
    "VerseLine Media brings powerful stories to life through live interviews, visual storytelling, and meaningful connection between authors and readers.",
  url: "https://verselinemedia.online",
  email: "hello@verselinemedia.online",
  phone: "",
  address: "",
  hours: "Mon – Fri · 9:00 – 18:00 (UTC)",
  socials: {
    twitter: "https://twitter.com/verselinemedia",
    facebook: "https://www.facebook.com/share/1CtEHvGnTj/",
    youtube: "https://youtube.com/@verselinemedia",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Live Conversations", href: "/conversations" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: {
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "What We Do", href: "/#what-we-do" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Conversations", href: "/conversations" },
    ],
    resources: [
      { label: "Author Kit", href: "/contact" },
      { label: "Interview Tips", href: "/#faq" },
      { label: "FAQ", href: "/#faq" },
      { label: "Events", href: "/conversations" },
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "Submit Your Story", href: "/contact" },
      { label: "Privacy Policy", href: "/" },
      { label: "Terms & Conditions", href: "/" },
    ],
  },
} as const;
