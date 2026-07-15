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

/**
 * PLACEHOLDER — replace with real content when the first
 * conversation is produced. Audio, images and copy are all
 * swappable from this single object.
 */
export const featuredConversation: Conversation = {
  id: "placeholder-featured",
  authorName: "Author Name",
  authorPhoto:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  authorSlug: "author-name",
  authorBio:
    "A short author biography goes here. Replace this placeholder with the featured author's real bio.",
  authorRole: "Featured Author",
  bookTitle: "Book Title",
  bookCover:
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
  conversationTitle: "A Conversation Worth Hearing",
  conversationDescription:
    "A short description of the conversation goes here — what the author shares, the story behind the book, and why it matters to readers. Replace this placeholder text when the first real conversation is published.",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  duration: "42 min",
  publishDate: "2026-07-01",
  tags: ["Live Interview", "Author Spotlight"],
};

/** Future conversation library — populated later. */
export const conversations: Conversation[] = [featuredConversation];
