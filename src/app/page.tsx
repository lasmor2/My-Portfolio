import NavBarPage from "@/components/Layout/navBar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/Layout/footer";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarPage />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
