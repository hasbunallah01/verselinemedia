export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  cover: string;
  excerpt: string;
  href: string;
}

export const books: Book[] = [
  {
    id: "weight-of-tomorrow",
    title: "The Weight of Tomorrow",
    author: "Daniel Whitmore",
    genre: "Contemporary Fiction",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80",
    excerpt:
      "A moving novel about resilience, forgiveness, and the courage to begin again.",
    href: "/books/weight-of-tomorrow",
  },
  {
    id: "quiet-hours",
    title: "The Quiet Hours",
    author: "Maren Holloway",
    genre: "Literary Fiction",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
    excerpt: "A meditation on silence, memory, and the spaces between words.",
    href: "/books/quiet-hours",
  },
  {
    id: "letters-from-rome",
    title: "Letters from Rome",
    author: "Ettore Bianchi",
    genre: "Memoir",
    cover:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=700&q=80",
    excerpt: "A correspondent's love letter to a city and the people who shape it.",
    href: "/books/letters-from-rome",
  },
  {
    id: "salt-and-ember",
    title: "Salt and Ember",
    author: "Imogen Reyes",
    genre: "Historical Fiction",
    cover:
      "https://images.unsplash.com/photo-1531901599143-df5010ab9438?auto=format&fit=crop&w=700&q=80",
    excerpt:
      "A coastal village, a vanished fleet, and a daughter who refuses to forget.",
    href: "/books/salt-and-ember",
  },
];
