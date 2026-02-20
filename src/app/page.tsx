import NavBarPage from "@/components/Layout/navBar";
import Hero from "@/components/sections/Hero";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarPage />
      <main className="flex-1">
        <Hero />
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
};

export default HomePage;
