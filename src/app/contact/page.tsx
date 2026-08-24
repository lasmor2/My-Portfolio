import NavBarPage from "@/components/Layout/navBar";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/Layout/footer";

export default function ContactPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <NavBarPage />

      <main className="grow pt-24 md:pt-28">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
