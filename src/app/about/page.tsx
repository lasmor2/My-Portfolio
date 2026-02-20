import NavBarPage from "@/components/Layout/navBar";
import AboutSection from "@/components/sections/about";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <NavBarPage />

      <main className="flex-1 pt-24 md:pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <AboutSection />
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-muted-foreground border-t border-border">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-foreground font-medium">Lasmor</span>. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
