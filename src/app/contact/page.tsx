import NavBarPage from "@/components/Layout/navBar";
import ContactSection from "@/components/sections/contact";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <NavBarPage />

      <main className="flex-1 pt-24 md:pt-32 pb-20">
        <ContactSection />
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
