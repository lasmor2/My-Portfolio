"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Theme } from "../../types";

const STORAGE_KEY = "portfolio-theme";
const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY) as Theme;
    const domTheme = document.documentElement.dataset.theme as Theme;

    const resolvedTheme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : domTheme === "light" || domTheme === "dark"
          ? domTheme
          : "dark";

    setTheme(resolvedTheme);
  }, []);

  const applyTheme = (nextTheme: Theme) => {
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  const toggleTheme = () => {
    setTheme((currentTheme: Theme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      return nextTheme;
    });
  };
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-4.5 m-2 rounded-full border border-(--toggle-border) bg-(--toggle-bg) text-(--toggle-icon) transition-all hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--toggle-border)"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

export default ThemeToggle;

