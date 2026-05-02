"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar({ items }) {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(null);
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
      <div
        className={`navbar-shell transition-all duration-300 ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/" className="navbar-brand flex items-center">
              <span className="navbar-mark flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
                <Image
                  src="/favicon-logo.png"
                  alt="Nafiz Alam logo"
                  width={56}
                  height={56}
                  className="h-[2.7rem] w-[2.7rem] object-contain sm:h-[3.1rem] sm:w-[3.1rem]"
                  priority
                />
              </span>
            </Link>
          </div>

          <nav className="hidden items-center gap-9 lg:flex">
            {items.map((item, index) => (
              <a
                key={`${item.label}-${item.href}-${index}`}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`navbar-link navbar-navlink relative pb-2 text-lg font-semibold transition-colors ${
                  activeIndex === index ? "is-active" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="button-hover-soft theme-outline-button navbar-cta hidden rounded-full px-6 py-3 text-sm font-semibold md:inline-flex lg:px-8 lg:py-4 lg:text-base"
            >
              Hire Me!
            </a>

            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="navbar-mobile-button inline-flex h-11 w-11 items-center justify-center rounded-full sm:h-12 sm:w-12 lg:hidden"
              aria-expanded={open}
              aria-label="Toggle navigation menu"
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
              </span>
            </button>
          </div>
        </div>

        {open ? (
          <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
            <nav className="navbar-mobile-panel grid gap-2 rounded-[1.6rem] p-3 sm:rounded-[2rem] sm:p-4 lg:hidden">
              {items.map((item, index) => (
                <a
                  key={`${item.label}-${item.href}-${index}`}
                  href={item.href}
                  onClick={() => {
                    handleNavClick(item.href);
                    setOpen(false);
                  }}
                  className={`navbar-mobile-link rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                    activeIndex === index
                      ? "is-active"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="button-hover-soft theme-outline-button mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-base font-semibold"
              >
                Hire Me!
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
