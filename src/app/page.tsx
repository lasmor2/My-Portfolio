import NavBarPage from "@/components/Layout/navBar";
import Hero from "@/components/sections/Hero";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarPage />
      <main className="flex-1">
        <Hero />
      </main>
      <footer className="py-6 text-center text-xs text-gray-600 border-t border-white/5">
        <p>
          © 2026 <span className="text-gray-400 font-medium">Lasmor</span>. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
