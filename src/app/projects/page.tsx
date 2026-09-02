import type { Metadata } from "next";
import NavBarPage from "@/components/Layout/navBar";
import ProjectsSection from "@/components/sections/projects";
import Footer from "@/components/Layout/footer";

export const metadata: Metadata = {
  title: "Projects — Backend & Full-Stack Engineering",
  description:
    "Explore Lekan Okelola's backend and full-stack engineering projects across fintech, APIs, web apps, mobile apps, cloud infrastructure, Node.js, NestJS, TypeScript, React, PostgreSQL, AWS, and Docker.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Lekan Okelola Projects — Backend & Full-Stack Engineering",
    description:
      "Explore production-focused backend, full-stack, mobile, API, and cloud engineering projects by Lekan Okelola.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <NavBarPage />

      <main className="grow pt-24 md:pt-28">
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}
