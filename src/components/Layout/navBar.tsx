"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/navBarData";
import Link from "next/link";
import { Code2, Menu, X } from "lucide-react";
import ThemeToggle from "./themeToggle";

const NavBarPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastMoveRef = useRef(0);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (isOpen) {
      timerRef.current = setTimeout(() => {
        closeMenu();
      }, 5000);
    }
  }, [isOpen, closeMenu]);

  const throttledResetTimer = useCallback(() => {
    const now = Date.now();
    if (now - lastMoveRef.current > 250) {
      lastMoveRef.current = now;
      resetTimer();
    }
  }, [resetTimer]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isOpen, resetTimer]);

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

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 font-sans md:px-6">
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-sm font-bold text-(--text) transition-colors hover:text-emerald-600 dark:hover:text-emerald-300 md:text-base"
        >
          <span className="rounded-md border border-(--logo-border) bg-(--logo-box) p-1.5 shadow-inner">
            <Code2 className="h-4 w-4 text-emerald-500" strokeWidth={2.5} />
          </span>
          <span className="hidden sm:inline">Lekan Okelola</span>
          <span className="sm:hidden">Lekan</span>
        </Link>

        <div
          ref={menuRef}
          onMouseMove={throttledResetTimer}
          onClick={resetTimer}
          className="relative ml-auto flex flex-1 items-center justify-between rounded-lg border border-(--surface-border) bg-(--surface) px-3 py-2 shadow-xl backdrop-blur-lg md:max-w-4xl md:px-4"
        >
          <nav className="hidden md:block" aria-label="Primary navigation">
            <ul className="flex items-center gap-4 lg:gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    className="group relative flex items-center gap-1.5 text-xs font-medium text-(--nav-link) transition-colors duration-300 hover:text-(--nav-link-hover)"
                  >
                    <link.icon className="h-3.5 w-3.5" />
                    {link.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-(--nav-link-hover) transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="effect-button rounded-md p-1.5 text-(--nav-link) hover:text-(--nav-link-hover) md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="ml-auto flex items-center gap-2.5">
            <Link
              href="/contact"
              className="effect-button rounded-md bg-(--cta-bg) px-3 py-1.5 text-[11px] font-semibold text-(--cta-text) hover:bg-(--cta-hover) active:scale-95 md:text-xs"
            >
              Hire / Contact
            </Link>
            <hr className="hidden h-5 w-px bg-(--surface-border) md:block" />
            <ThemeToggle />
          </div>

          {isOpen && (
            <div
              id="mobile-menu"
              className="absolute right-0 top-full mt-3 flex w-60 flex-col gap-3 rounded-lg border border-(--surface-border) bg-(--surface) p-3 shadow-xl backdrop-blur-xl md:hidden"
            >
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.link}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-(--nav-link) transition-colors hover:bg-(--logo-box) hover:text-(--nav-link-hover)"
                      >
                        <link.icon className="h-4 w-4" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBarPage;
