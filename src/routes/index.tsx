import { createFileRoute } from "@tanstack/react-router";
import { PixelHeader } from "@/components/PixelHeader";
import { Hero } from "@/components/Hero";
import {
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  ExtrasSection,
} from "@/components/Sections";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deeshna Shetty — ACCA Student · Finance & Data Portfolio" },
      {
        name: "description",
        content:
          "Pixel portfolio of Deeshna Shetty, ACCA student skilled in accounting, auditing, financial analysis, Tableau, Power BI and Python.",
      },
      { property: "og:title", content: "Deeshna Shetty — Finance & Data Portfolio" },
      {
        property: "og:description",
        content:
          "ACCA student with a foundation in accounting, finance and auditing. Experience, research projects, skills and certifications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <PixelHeader />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ExtrasSection />
      </main>
      <Footer />
    </div>
  );
}
