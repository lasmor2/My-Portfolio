import NavBarPage from "@/components/Layout/navBar";
import ProjectsSection from "@/components/sections/projects";
import Footer from "@/components/Layout/footer";

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
