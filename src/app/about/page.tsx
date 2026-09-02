import type { Metadata } from "next";
import NavBarPage from "@/components/Layout/navBar";
import AboutSection from "@/components/sections/about";
import Footer from "@/components/Layout/footer";

export const metadata: Metadata = {
  title: "About — Backend & Full-Stack Engineer",
  description:
    "Learn about Lekan Okelola, a Backend and Full-Stack Engineer in Nigeria building production web, mobile, API, and cloud applications with Node.js, NestJS, TypeScript, React, PostgreSQL, AWS, and Docker.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Lekan Okelola — Backend & Full-Stack Engineer",
    description:
      "Learn about Lekan Okelola, a Backend and Full-Stack Engineer building production-ready web, mobile, API, and cloud applications.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <NavBarPage />

      <main className="grow pt-24 md:pt-28">
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
