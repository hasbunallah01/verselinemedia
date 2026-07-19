import { Hero } from "@/components/home/Hero";
import { FeaturedConversation } from "@/components/home/FeaturedConversation";
import { WhyVerseLine } from "@/components/home/WhyVerseLine";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { FeaturedSpotlight } from "@/components/home/FeaturedSpotlight";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyAuthorsChooseUs } from "@/components/home/WhyAuthorsChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQPreview } from "@/components/home/FAQPreview";
import { CTABanner } from "@/components/home/CTABanner";
import { StayInspired } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedConversation />
      <WhyVerseLine />
      <WhatWeDo />
      <FeaturedSpotlight />
      <HowItWorks />
      <WhyAuthorsChooseUs />
      <Testimonials />
      <FAQPreview />
      <CTABanner />
      <StayInspired />
    </>
  );
}
