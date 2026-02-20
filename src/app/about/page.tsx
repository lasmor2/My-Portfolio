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

      <footer className="py-6 text-center text-xs text-gray-600 border-t border-white/5">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-400 font-medium">Lasmor</span>. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
