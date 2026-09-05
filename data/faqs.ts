export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "what-is-bookcrew",
    question: "What is The Book Crew Readers Community?",
    answer:
      "The Book Crew Readers Community is a platform that connects authors with a growing community of passionate readers through live conversations and carefully crafted visual features. We exist to celebrate not just your book, but the story behind it.",
  },
  {
    id: "after-selection",
    question: "What happens after I'm selected?",
    answer:
      "Once selected, our team will guide you through the next steps, including scheduling your live session and preparing your feature content.",
  },
  {
    id: "content-ownership",
    question: "Who owns the content created during the feature?",
    answer:
      "You retain full ownership of your original work. By submitting, you grant The Book Crew Readers Community the right to use session recordings and promotional materials for marketing purposes.",
  },
  {
    id: "multiple-books",
    question: "Can I submit more than one book?",
    answer:
      "Yes, you're welcome to submit multiple books. However, each submission will be reviewed individually based on our selection criteria.",
  },
  {
    id: "stay-updated",
    question: "How can I stay updated on future opportunities?",
    answer:
      "You can follow The Book Crew Readers Community on our social platforms or subscribe to our updates to stay informed about upcoming features and opportunities.",
  },
];
