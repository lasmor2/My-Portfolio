import type { Metadata } from "next";
import NavBarPage from "@/components/Layout/navBar";
import SkillsSection from "@/components/sections/skills";
import Footer from "@/components/Layout/footer";

export const metadata: Metadata = {
  title: "Skills — Full-Stack & Backend Development",
  description:
    "View Lekan Okelola's full-stack and backend development skills, including Node.js, NestJS, TypeScript, FastAPI, PostgreSQL, React, Next.js, React Native, AWS, Docker, APIs, and cloud deployment.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    title: "Lekan Okelola Skills — Full-Stack & Backend Development",
    description:
      "Full-stack, backend, mobile, database, DevOps, and cloud engineering skills used by Lekan Okelola to build production-ready software.",
    url: "/skills",
  },
};

export default function SkillsPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <NavBarPage />

      <main className="grow pt-24 md:pt-28">
        <SkillsSection />
      </main>

      <Footer />
    </div>
  );
}
