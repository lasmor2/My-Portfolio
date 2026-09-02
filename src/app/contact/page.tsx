import type { Metadata } from "next";
import NavBarPage from "@/components/Layout/navBar";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/Layout/footer";

export const metadata: Metadata = {
  title: "Contact — Hire a Backend & Full-Stack Engineer",
  description:
    "Contact Lekan Okelola for backend, full-stack, web, mobile, API, cloud, contract, freelance, or remote engineering opportunities using Node.js, NestJS, TypeScript, React, PostgreSQL, AWS, and Docker.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Lekan Okelola — Backend & Full-Stack Engineer",
    description:
      "Get in touch with Lekan Okelola for backend, full-stack, web, mobile, API, cloud, freelance, contract, or remote engineering work.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <NavBarPage />

      <main className="grow pt-24 md:pt-28">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
