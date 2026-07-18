import type { Metadata } from "next";
import {
  SpotlightsHero,
  SpotlightProfiles,
} from "@/components/spotlights/SpotlightProfiles";

export const metadata: Metadata = {
  title: "Featured Spotlights",
  description:
    "Complete profiles of every featured author on VerseLine Media — the books, the stories, and the authors who wrote them.",
};

export default function SpotlightsPage() {
  return (
    <>
      <SpotlightsHero />
      <SpotlightProfiles />
    </>
  );
}
