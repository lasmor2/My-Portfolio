"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { navLinks } from "@/data/navBarData";
import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react";
import ThemeToggle from "./themeToggle";

const NavBarPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (isOpen) {
      timerRef.current = setTimeout(() => {
        closeMenu();
      }, 5000); // 5 seconds of inactivity
    }
  }, [isOpen, closeMenu]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isOpen, resetTimer]);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-start items-center py-4 px-6 md:px-10 font-sans">
      <div className="flex items-center mr-6 md:mr-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tighter text-(--text) transition-all hover:scale-105"
        >
          <div className="bg-(--logo-box) p-1 rounded-lg border border-(--logo-border) shadow-inner">
            <Sparkles className="w-4 h-4 text-(--sparkle)" strokeWidth={2.5} />
          </div>
          <span className="bg-clip-text text-transparent bg-linear-to-r from-(--brand-from) to-(--brand-to)">
            Lasmor
          </span>
        </Link>
      </div>

      {/* Desktop & Mobile Container */}
      <div
        ref={menuRef}
        onMouseMove={resetTimer}
        onClick={resetTimer}
        className="flex items-center justify-between w-full max-w-3xl px-4 md:px-5 py-1.5 bg-(--surface) backdrop-blur-lg border border-(--surface-border) rounded-full shadow-xl relative"
      >
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.link}
                  className="relative flex items-center gap-2 text-xs font-medium text-(--nav-link) hover:text-(--nav-link-hover) transition-colors duration-300 group"
                >
                  <link.icon className="w-3.5 h-3.5" />
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-(--nav-link-hover) rounded-full transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden p-1.5 text-(--nav-link) hover:text-(--nav-link-hover) transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <div className="flex items-center gap-2.5">
          {/* CTA Button */}
          <Link
            href="/contact"
            className="px-3 md:px-3.5 py-1 text-[11px] md:text-xs font-semibold text-(--cta-text) bg-(--cta-bg) rounded-full hover:bg-(--cta-hover) transition-all hover:scale-105 active:scale-95"
          >
            Contact
          </Link>
          <hr className="bg-(--surface-border) w-px h-5 hidden md:block" />
          <ThemeToggle />
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full right-0 mt-3 w-56 p-3 bg-(--surface) backdrop-blur-xl border border-(--surface-border) rounded-2xl md:hidden flex flex-col gap-3 animate-fade-in-down"
          >
            <nav>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.link}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-1.5 text-sm font-medium text-(--nav-link) hover:text-(--nav-link-hover) transition-colors hover:bg-(--logo-box) rounded-lg"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBarPage;
