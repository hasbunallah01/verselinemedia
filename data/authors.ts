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
      "Being featured by VerseLine Media was one of the most rewarding experiences of my publishing journey. The conversation felt genuine and thoughtful, allowing me to share not only my book but also the inspiration behind it. The team's engaging questions and welcoming approach made the experience truly memorable. I'm grateful to have connected with readers through such a passionate literary community.",
    tags: ["Resilience", "Forgiveness", "Second Chances", "Healing"],
    image: "/authors/daniel-whitmore.png",
    articleUrl: "/articles/daniel-whitmore",
  },
];
