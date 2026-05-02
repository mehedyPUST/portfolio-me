"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar({ items }) {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const lockRef = useRef(false);
  const unlockTimerRef = useRef(null);
  const activeIndex = items.findLastIndex((item) => item.href === activeHref);

  useEffect(() => {
    const sections = items
      .map((item) => ({
        href: item.href,
        element: document.querySelector(item.href),
      }))
      .filter((item) => item.element);

    if (!sections.length) {
      return undefined;
    }

    const updateActiveSection = () => {
      if (lockRef.current) {
        return;
      }

      const triggerLine = 150;
      const currentSection = sections.find((section) => {
        const rect = section.element.getBoundingClientRect();
        return rect.top <= triggerLine && rect.bottom > triggerLine;
      });

      if (window.scrollY < 120) {
        setActiveHref(null);
        return;
      }

      setActiveHref(currentSection?.href ?? null);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [items]);

  useEffect(() => {
    return () => {
      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveHref(href);
    lockRef.current = true;

    if (unlockTimerRef.current) {
      window.clearTimeout(unlockTimerRef.current);
    }

    unlockTimerRef.current = window.setTimeout(() => {
      lockRef.current = false;
    }, 900);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Permanent background with gradient and blur */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-md dark:bg-slate-900/95" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-pink-500/5" />

      {/* Bottom border with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className={`relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 transition-all duration-500 sm:px-6 sm:py-4 lg:px-8 lg:py-5 ${scrolled ? "shadow-lg" : ""
        }`}>
        {/* Logo with floating animation - Now rounded and clicky */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="group relative flex items-center"
            onClick={() => {
              // Optional: Scroll to top when clicking logo
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {/* Rounded logo container with interactive effects */}
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/10 to-pink-500/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/25 sm:h-14 sm:w-14">
              <Image
                src="/icon.png"
                alt="Mehedy logo"
                width={60}
                height={60}
                className="h-[2.7rem] w-[2.7rem] rounded-full object-cover transition-all duration-300 group-hover:rotate-6 sm:h-[3.1rem] sm:w-[3.1rem]"
                preload={true}
                loading="eager"
                fetchPriority="high"
              />
            </span>

            {/* Animated gradient ring on hover */}
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-30" />

            {/* Pulsing ring effect */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 transition-all duration-300 group-hover:animate-pulse group-hover:opacity-40" />
          </Link>
        </div>

        {/* Desktop Navigation with modern effects */}
        <nav className="hidden items-center gap-2 lg:flex">
          {items.map((item, index) => (
            <div key={`${item.label}-${item.href}-${index}`} className="relative">
              <a
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative block px-4 py-2 text-lg font-semibold transition-all duration-300 ${activeIndex === index ? "text-orange-600 dark:text-orange-400" : "text-slate-700 hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400"
                  }`}
              >
                <span className="relative z-10">{item.label}</span>

                <span
                  className={`absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 transition-all duration-300 ${hoveredIndex === index ? "scale-100 opacity-100" : "scale-90 opacity-0"
                    }`}
                />
              </a>

              {activeIndex === index && (
                <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500">
                  <span className="absolute inset-0 animate-ping rounded-full bg-orange-500 opacity-60" />
                </span>
              )}

              <span className={`absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 ${activeIndex === index ? "w-8" : ""
                }`} />
            </div>
          ))}
        </nav>

        {/* Right side with modern CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/35 md:inline-flex lg:px-8 lg:py-4 lg:text-base"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative flex items-center gap-2">
              Hire Me!
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="relative h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/30 dark:bg-slate-800/50 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <span className="absolute left-1/2 top-1/2 flex w-5 -translate-x-1/2 -translate-y-1/2 flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 rounded-full bg-slate-700 transition-all duration-300 dark:bg-white ${open ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-slate-700 transition-all duration-300 dark:bg-white ${open ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-slate-700 transition-all duration-300 dark:bg-white ${open ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="relative mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <nav className="grid gap-2 rounded-2xl bg-white/95 p-3 shadow-2xl backdrop-blur-xl dark:bg-slate-900/95 sm:rounded-3xl sm:p-4 lg:hidden">
            {items.map((item, index) => (
              <a
                key={`${item.label}-${item.href}-${index}`}
                href={item.href}
                onClick={() => {
                  handleNavClick(item.href);
                  setOpen(false);
                }}
                className={`relative transform rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-pink-500/10 ${activeIndex === index
                  ? "bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-700 dark:text-orange-300"
                  : "text-slate-700 dark:text-slate-300"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  {activeIndex === index && (
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500">
                      <span className="absolute inset-0 animate-pulse rounded-full bg-orange-500 opacity-60" />
                    </span>
                  )}
                </div>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span>Hire Me!</span>
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}