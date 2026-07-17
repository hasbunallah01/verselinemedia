/**
 * Data-driven conversations.
 * To feature a new conversation, edit ONLY this file —
 * no component changes are needed.
 */

export interface Conversation {
  id: string;
  /** Author */
  authorName: string;
  authorPhoto: string;
  authorSlug: string;
  authorBio: string;
  authorRole?: string;
  /** Book */
  bookTitle: string;
  bookCover: string;
  /** Conversation */
  conversationTitle: string;
  conversationDescription: string;
  audioUrl: string;
  /** e.g. "42 min" */
  duration: string;
  /** ISO date, optional */
  publishDate?: string;
  tags?: string[];
}

/** Conversation #1 — Kate Washington. */
export const kateWashington: Conversation = {
  id: "kate-washington-already-toast",
  authorName: "Kate Washington",
  authorPhoto: "/images/kate-washington-monogram.png",
  authorSlug: "kate-washington",
  authorBio:
    "Kate Washington is a writer and critic whose work explores caregiving, family, and the labor we don't see.",
  authorRole: "Featured Author",
  bookTitle: "Already Toast: Caregiving and Burnout in America",
  bookCover: "/images/already-toast-cover.webp",
  conversationTitle: "A Conversation Worth Hearing",
  conversationDescription:
    "Kate Washington shares the personal story behind Already Toast, discussing caregiving, resilience, and the unseen challenges faced by millions of family caregivers.",
  audioUrl: "/audio/kate-washington-already-toast.mp3",
  duration: "10 min",
  publishDate: "2026-07-17",
  tags: ["Live Interview", "Author Spotlight"],
};

/**
 * Homepage featured conversation — always exactly ONE.
 * Point this at whichever archive entry is currently featured.
 */
export const featuredConversation: Conversation = kateWashington;

/**
 * Conversation archive (/conversations) — newest first.
 * To add a new conversation: create another Conversation object
 * above and add it to the front of this array. The archive page
 * renders one card per entry with no layout changes needed.
 */
/** Conversation #2 — Andrew Child. */
export const andrewChild: Conversation = {
  id: "andrew-child-the-sentinel",
  authorName: "Andrew Child",
  authorPhoto: "/images/andrew-child.webp",
  authorSlug: "andrew-child",
  authorBio:
    "Andrew Child is a bestselling thriller writer and co-author of the Jack Reacher series alongside Lee Child.",
  authorRole: "Interview Guest",
  bookTitle: "The Sentinel: A Jack Reacher Novel",
  bookCover: "/images/the-sentinel-cover.webp",
  conversationTitle: "A Conversation Worth Hearing",
  conversationDescription:
    "Andrew Child discusses The Sentinel, co-written with Lee Child, sharing insights into continuing the iconic Jack Reacher series, the writing process, and bringing one of thriller fiction's most enduring characters to a new generation.",
  audioUrl: "/audio/andrew-child-the-sentinel.mp3",
  duration: "10 min",
  publishDate: "2026-07-17",
  tags: ["Live Interview", "Lee Child & Andrew Child"],
};

/**
 * Archive order = display order on /conversations
 * (Conversation #1 first, new entries appended below).
 */
export const conversations: Conversation[] = [kateWashington, andrewChild];
