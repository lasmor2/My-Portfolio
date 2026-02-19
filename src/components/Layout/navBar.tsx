"use client";

import { useState } from "react";
import { navLinks } from "@/data/navBarData";
import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react";
import ThemeToggle from "./themeToggle";

const NavBarPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-start items-center py-6 px-6 md:px-10 font-sans">
      <div className="flex items-center mr-6 md:mr-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tighter text-(--text) transition-all hover:scale-105"
        >
          <div className="bg-(--logo-box) p-1.5 rounded-lg border border-(--logo-border) shadow-inner">
            <Sparkles className="w-5 h-5 text-(--sparkle)" strokeWidth={2.5} />
          </div>
          <span className="bg-clip-text text-transparent bg-linear-to-r from-(--brand-from) to-(--brand-to)">
            Lasmor
          </span>
        </Link>
      </div>

      {/* Desktop & Mobile Container */}
      <div className="flex items-center justify-between w-full max-w-4xl px-4 md:px-5 py-2 bg-(--surface) backdrop-blur-lg border border-(--surface-border) rounded-full shadow-xl relative">
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.link}
                  className="relative flex items-center gap-2 text-sm font-medium text-(--nav-link) hover:text-(--nav-link-hover) transition-colors duration-300 group"
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                  {/* Dot indicator on hover */}
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
          className="md:hidden p-2 text-(--nav-link) hover:text-(--nav-link-hover) transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="flex items-center gap-3">
          {/* CTA Button */}
          <Link
            href="/contact"
            className="px-3 md:px-4 py-1 text-xs md:text-sm font-semibold text-(--cta-text) bg-(--cta-bg) rounded-full hover:bg-(--cta-hover) transition-all hover:scale-105 active:scale-95"
          >
            Contact me
          </Link>
          <hr className="bg-(--surface-border) w-px h-6 hidden md:block" />
          <ThemeToggle />
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full right-0 mt-4 w-64 p-4 bg-(--surface) backdrop-blur-xl border border-(--surface-border) rounded-3xl md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-300"
          >
            <nav>
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.link}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-base font-medium text-(--nav-link) hover:text-(--nav-link-hover) transition-colors hover:bg-(--logo-box) rounded-xl"
                    >
                      <link.icon className="w-5 h-5" />
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
