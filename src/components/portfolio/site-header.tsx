"use client";

import { type MouseEvent, useEffect, useState } from "react";

import { navigation } from "@/data/portfolio";

import { BrandLogo } from "./brand-logo";
import { MoonIcon, SunIcon } from "./icons";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)")
      .matches
      ? "light"
      : "dark";
    const nextTheme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : preferredTheme;

    setTheme(nextTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [mounted, theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    if (mediaQuery.matches) {
      setMenuOpen(false);
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const handleGoToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="surface-panel sticky top-3 z-30 mx-auto w-full rounded-3xl px-3 py-2.5 backdrop-blur-xl sm:top-4 sm:rounded-full sm:px-4 sm:py-3 md:max-w-6xl lg:max-w-304">
      <div className="flex items-center justify-between gap-3 md:gap-5">
        <a
          href="#top"
          onClick={handleGoToTop}
          className="flex shrink-0 items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground sm:text-xs md:gap-3 md:text-[11px] md:tracking-[0.18em]"
        >
          <BrandLogo size="header" priority />
          <span>Maynard Toong</span>
        </a>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {mounted && theme === "light" ? <MoonIcon /> : <SunIcon />}
            <span className="hidden sm:inline">
              {mounted && theme === "light" ? "Dark" : "Light"}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            className="menu-button"
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open navigation menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d={
                  menuOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"
                }
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            </svg>
          </button>
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-2 md:flex lg:gap-2.5">
          <nav className="flex flex-wrap items-center justify-end gap-0.5 text-sm text-muted lg:gap-1">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="header-link">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {mounted && theme === "light" ? <MoonIcon /> : <SunIcon />}
            <span>{mounted && theme === "light" ? "Dark" : "Light"}</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          className="mobile-drawer mt-2 grid gap-1 p-2 md:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="header-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
