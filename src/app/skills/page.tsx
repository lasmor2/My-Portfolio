import NavBarPage from "@/components/Layout/navBar";
import SkillsSection from "@/components/sections/skills";
import Footer from "@/components/Layout/footer";

export default function SkillsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <NavBarPage />

      <main className="flex-1 pt-24 md:pt-32 pb-20">
        <SkillsSection />
      </main>

      <Footer />
    </div>
  );
}
