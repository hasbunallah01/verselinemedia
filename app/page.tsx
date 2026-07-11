import { Hero } from "@/components/home/Hero";
import { Welcome } from "@/components/home/Welcome";
import { FeaturedAuthor } from "@/components/home/FeaturedAuthor";
import { Awards } from "@/components/home/Awards";
import { Books } from "@/components/home/Books";
import { Articles } from "@/components/home/Articles";
import { Stats } from "@/components/home/Stats";
import { FAQ } from "@/components/home/FAQ";
import { ContactSection } from "@/components/home/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <FeaturedAuthor />
      <Awards />
      <Books />
      <Articles />
      <Stats />
      <ContactSection />
      <FAQ />
    </>
  );
}
