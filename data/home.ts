/**
 * Homepage content — edit this file to change homepage copy,
 * stats, steps and testimonials without touching components.
 */

export const hero = {
  eyebrow: "Live Conversations. Real Stories. Lasting Impact.",
  title: "Where Authors Are Heard and Readers Connect",
  description:
    "VerseLine Media brings powerful stories to life through live interviews, visual storytelling, and meaningful connection.",
  primaryCta: { label: "Join Our Community", href: "/contact" },
  secondaryCta: { label: "View Us Live", href: "https://youtube.com/@verselinemedia" },
  image:
    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Studio microphone beside stacked books in warm light",
} as const;

export const stats = [
  { value: 2500, suffix: "+", label: "Authors Featured" },
  { value: 50000, suffix: "+", label: "Readers Engaged" },
  { value: 300, suffix: "+", label: "Live Interviews" },
  { value: 100, suffix: "+", label: "Countries" },
] as const;

export const communityAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
] as const;

export const whyVerseLine = {
  title: "Why VerseLine Media",
  image:
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80",
  imageAlt: "Books arranged on a sunlit desk beside a plant",
  items: [
    {
      icon: "heart",
      title: "Our Mission",
      description:
        "To elevate authors' voices and create meaningful connections through live conversations.",
    },
    {
      icon: "target",
      title: "Our Purpose",
      description:
        "To inspire, engage, and build a supportive community where stories create real impact.",
    },
    {
      icon: "users",
      title: "Our Introduction",
      description:
        "We are a media platform dedicated to authors, readers, and the power of storytelling.",
    },
  ],
} as const;

export const whatWeDo = [
  {
    icon: "mic",
    title: "Live Author Spotlight",
    description: "We feature authors in live, engaging interviews.",
  },
  {
    icon: "clapperboard",
    title: "Visual Storytelling",
    description: "We create beautiful visuals that bring stories to life.",
  },
  {
    icon: "megaphone",
    title: "Author Promotion",
    description: "We help authors reach more readers.",
  },
  {
    icon: "handshake",
    title: "Community Engagement",
    description: "We build meaningful connections.",
  },
  {
    icon: "newspaper",
    title: "Media Features",
    description: "We highlight authors across platforms.",
  },
] as const;

export interface Spotlight {
  authorName: string;
  authorTitle: string;
  authorPhoto: string;
  authorEmail: string;
  banner: string;
  bannerAlt: string;
  bookTitle: string;
  bookCover: string;
  tagline: string;
  genres: string[];
  description: string;
  publishedDate: string;
  language: string;
  pages: string;
  learnMoreUrl: string;
  buyUrl: string;
}

/** Featured Spotlight carousel — one object per featured author. */
export const spotlights: Spotlight[] = [
  {
    authorName: "Elena Marlowe",
    authorTitle: "Bestselling Author",
    authorPhoto:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    authorEmail: "elena.marlowe@example.com",
    banner:
      "https://images.unsplash.com/photo-1521056787327-165dc2a32836?auto=format&fit=crop&w=1400&q=80",
    bannerAlt: "Elena Marlowe during a recorded live interview in a library studio",
    bookTitle: "Beneath the Silence",
    bookCover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80",
    tagline: "Some truths are buried for a reason.",
    genres: ["Fiction", "Mystery", "Psychological Thriller"],
    description:
      "A gripping tale of secrets, betrayal, and the courage to uncover what lies beneath. When a small town hides a dangerous truth, one woman's search for answers threatens everything.",
    publishedDate: "May 12, 2024",
    language: "English",
    pages: "320 pages",
    learnMoreUrl: "#",
    buyUrl: "https://www.amazon.com/",
  },
  {
    authorName: "Amara Osei",
    authorTitle: "Award-Winning Novelist",
    authorPhoto:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
    authorEmail: "amara.osei@example.com",
    banner:
      "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&w=1400&q=80",
    bannerAlt: "Amara Osei reading in a warmly lit studio",
    bookTitle: "The Salt of Distant Seas",
    bookCover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
    tagline: "Every tide carries a story home.",
    genres: ["Literary Fiction", "Family Saga"],
    description:
      "Spanning three generations and two continents, a luminous novel about the women of one fishing family and the ocean that both separates and binds them.",
    publishedDate: "February 3, 2025",
    language: "English",
    pages: "412 pages",
    learnMoreUrl: "#",
    buyUrl: "https://www.amazon.com/",
  },
  {
    authorName: "Daniel Hart",
    authorTitle: "Debut Memoirist",
    authorPhoto:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    authorEmail: "daniel.hart@example.com",
    banner:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1400&q=80",
    bannerAlt: "Studio microphone and headphones ready for Daniel Hart's conversation",
    bookTitle: "Letters I Never Sent",
    bookCover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
    tagline: "The stories we carry home never leave us.",
    genres: ["Memoir", "Nonfiction"],
    description:
      "Twenty years of unsent letters become a map of a life lived between headlines — a memoir about the people a war correspondent never stopped writing to.",
    publishedDate: "September 21, 2025",
    language: "English",
    pages: "288 pages",
    learnMoreUrl: "#",
    buyUrl: "https://www.amazon.com/",
  },
];

export const howItWorks = [
  {
    step: "01",
    icon: "user-plus",
    title: "Submit Author Kit",
    description: "Tell us about you and your book.",
  },
  {
    step: "02",
    icon: "clipboard-check",
    title: "Review",
    description: "Our team reviews your submission.",
  },
  {
    step: "03",
    icon: "badge-check",
    title: "Approval",
    description: "You'll receive confirmation.",
  },
  {
    step: "04",
    icon: "radio",
    title: "Live Author Spotlight",
    description: "Go live and share your story.",
  },
] as const;

export const whyAuthorsChooseUs = [
  {
    icon: "shield-check",
    title: "Authentic",
    description: "Real conversations that build trust.",
  },
  {
    icon: "book-open",
    title: "Engaged Readers",
    description: "Connect with a vibrant and supportive audience.",
  },
  {
    icon: "trending-up",
    title: "Professional Exposure",
    description: "High-quality promotion across platforms.",
  },
  {
    icon: "sparkles",
    title: "Creative Storytelling",
    description: "Visual storytelling that makes your story unique.",
  },
  {
    icon: "globe",
    title: "Global Community",
    description: "Join a worldwide network of authors and readers.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "VerseLine Media helped me reach thousands of new readers. The interview was such a beautiful experience!",
    name: "Claire Bennett",
    role: "Bestselling Author",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The team is professional, kind, and truly cares about authors. Highly recommended!",
    name: "James Whitaker",
    role: "Thriller Author",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "An amazing platform that gives your story the attention it deserves.",
    name: "Sophie Lane",
    role: "Romance Author",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "From the first call to the live conversation, everything felt effortless and beautifully produced.",
    name: "Miguel Alvarez",
    role: "Historical Fiction Author",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "My readers finally got to hear the story behind the story. The response was overwhelming.",
    name: "Priya Nair",
    role: "Literary Fiction Author",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
  },
] as const;

export const faqImage = {
  src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80",
  alt: "Books and a plant on a wooden desk",
} as const;

export const ctaBanner = {
  title: "Share Your Story. Inspire the World.",
  description:
    "Join VerseLine Media and connect with readers through the power of live conversation.",
  primaryCta: { label: "Submit Your Story", href: "https://form.jotform.com/261917650330050" },
  secondaryCta: { label: "Learn More", href: "/about" },
  image:
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1000&q=80",
  imageAlt: "Open book with reading glasses and coffee",
} as const;

export const newsletter = {
  title: "Stay Inspired",
  description:
    "Subscribe to our newsletter for updates on live interviews, featured authors, and community stories.",
} as const;
