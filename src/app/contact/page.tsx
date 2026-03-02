import NavBarPage from "@/components/Layout/navBar";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/Layout/footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <NavBarPage />

      <main className="flex-1 pt-24 md:pt-32 pb-20">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
