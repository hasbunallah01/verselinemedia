export interface Author {
  id: string;
  name: string;
  book: string;
  genre: string;
  summary: string;
  quote: string;
  tags: string[];
  image: string;
  articleUrl: string;
  year?: number;
}

export const authors: Author[] = [
  {
    id: "daniel-whitmore",
    name: "Daniel Whitmore",
    book: "The Weight of Tomorrow",
    genre: "Contemporary Fiction",
    year: 2024,
    summary:
      "The Weight of Tomorrow is a moving contemporary novel by Daniel Whitmore, an author known for writing heartfelt stories about resilience, forgiveness, and second chances. Drawing inspiration from everyday life, Daniel creates emotionally rich characters and meaningful narratives that encourage readers to find hope, healing, and the courage to move forward even in life's most difficult moments.",
    quote:
      "Being featured by VerseLine Media was one of the most rewarding experiences of my publishing journey. The conversation felt genuine, thoughtful, and personal rather than promotional. The team took the time to understand not only my book but also the experiences and inspirations behind it. Their audience asked meaningful questions, and I left the interview feeling that my story had truly connected with readers. VerseLine Media creates a welcoming space where authors are valued, celebrated, and given the opportunity to share the heart behind their work. I'm grateful to have been part of such a passionate community.",
    tags: ["Resilience", "Forgiveness", "Second Chances", "Healing"],
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
    articleUrl: "/articles/daniel-whitmore",
  },
];
