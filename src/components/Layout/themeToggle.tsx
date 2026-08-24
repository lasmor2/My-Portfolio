"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { Theme } from "../../types";

const STORAGE_KEY = "portfolio-theme";
const THEME_CHANGE_EVENT = "portfolio-theme-change";

function getResolvedTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);
  const domTheme = document.documentElement.dataset.theme;

  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  if (domTheme === "light" || domTheme === "dark") return domTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
  };
}

function applyTheme(nextTheme: Theme) {
  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.classList.toggle("dark", nextTheme === "dark");
  window.localStorage.setItem(STORAGE_KEY, nextTheme);
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

const ThemeToggle = () => {
  const theme = useSyncExternalStore(subscribe, getResolvedTheme, () => "dark");
  const isDark = theme === "dark";

  const toggleTheme = () => {
    applyTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="effect-button m-0.5 rounded-md border border-(--toggle-border) bg-(--toggle-bg) p-2.5 text-(--toggle-icon) active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--toggle-border) md:m-1 md:p-3"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

export default ThemeToggle;
