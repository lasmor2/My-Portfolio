"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Theme } from "../../types";

const STORAGE_KEY = "portfolio-theme";
const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") {
      return "dark";
    }
    const currentTheme = document.documentElement.dataset.theme;
    return currentTheme === "light" || currentTheme === "dark"
      ? currentTheme
      : "dark";
  });
  const applyTheme = (nextTheme: Theme) => {
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((currentTheme: Theme) =>
      currentTheme === "dark" ? "light" : "dark",
    );
  };
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-4.5 m-2 rounded-full border border-(--toggle-border) bg-(--toggle-bg) text-(--toggle-icon) transition-all hover:scale-105 active:scale-95"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

export default ThemeToggle;

