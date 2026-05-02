"use client";

import { useEffect, useState } from "react";

const THEMES = ["light", "dark"];

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return THEMES[0];
    }

    const storedTheme = window.localStorage.getItem("portfolio-theme");
    return THEMES.includes(storedTheme) ? storedTheme : THEMES[0];
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const isDark = theme === "dark";

  function handleToggle() {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <div className="theme-toggle-shell" data-cursor="interactive">
      <button
        type="button"
        onClick={handleToggle}
        className={`theme-toggle ${isDark ? "is-dark" : "is-light"}`}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Light mode" : "Dark mode"}
      >
        <span className="theme-toggle-inner">
          <span className="theme-toggle-badge" aria-hidden="true">
            {isDark ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2.8V5.1M12 18.9v2.3M21.2 12h-2.3M5.1 12H2.8M18.5 5.5l-1.6 1.6M7.1 16.9l-1.6 1.6M18.5 18.5l-1.6-1.6M7.1 7.1 5.5 5.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18.5 14.5A7 7 0 0 1 9.5 5.5a7.8 7.8 0 1 0 9 9Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
          <span className="theme-toggle-label" aria-hidden="true">
            {isDark ? "Light" : "Dark"}
          </span>
        </span>
      </button>
    </div>
  );
}
