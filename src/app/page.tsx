import NavBarPage from "@/components/Layout/navBar";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import ExperienceSection from "@/components/sections/experience";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import Footer from "@/components/Layout/footer";

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBarPage />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
