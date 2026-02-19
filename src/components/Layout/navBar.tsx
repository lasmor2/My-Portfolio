import { navLinks } from "../../data/navBatData";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import ThemeToggle from "./themeToggle";

const NavBarPage = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
      {/* Glassmorphism Container */}
      <div className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-black/30 backdrop-blur-lg border border-white/10 rounded-full shadow-xl">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white transition-all hover:scale-105"
        >
          <div className="bg-white/10 p-1.5 rounded-lg border border-white/5 shadow-inner">
            <Sparkles className="w-5 h-5 text-yellow-300" strokeWidth={2.5} />
          </div>
          <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
            Lasmor
          </span>
        </Link>

        {/* Navigation - Hidden on small screens for now, typically handled with a hamburger menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.link}
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  {link.name}
                  {/* Dot indicator on hover */}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="px-5 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
        >
          Contact me
        </Link>
      </div>
      <ThemeToggle />
    </header>
  );
};

export default NavBarPage;
