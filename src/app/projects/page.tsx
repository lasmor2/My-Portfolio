import NavBarPage from "@/components/Layout/navBar";
import ProjectsSection from "@/components/sections/projects";
import Footer from "@/components/Layout/footer";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <NavBarPage />

      <main className="flex-1 pt-24 md:pt-32 pb-20">
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}
