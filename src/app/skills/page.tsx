import NavBarPage from "@/components/Layout/navBar";
import SkillsSection from "@/components/sections/skills";
import Footer from "@/components/Layout/footer";

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
