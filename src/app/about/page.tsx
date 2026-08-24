import NavBarPage from "@/components/Layout/navBar";
import AboutSection from "@/components/sections/about";
import Footer from "@/components/Layout/footer";

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
