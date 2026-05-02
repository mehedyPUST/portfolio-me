// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// export default function Navbar({ items }) {
//   const [open, setOpen] = useState(false);
//   const [activeHref, setActiveHref] = useState(null);
//   const [scrolled, setScrolled] = useState(false);
//   const lockRef = useRef(false);
//   const unlockTimerRef = useRef(null);
//   const activeIndex = items.findLastIndex((item) => item.href === activeHref);

//   useEffect(() => {
//     const sections = items
//       .map((item) => ({
//         href: item.href,
//         element: document.querySelector(item.href),
//       }))
//       .filter((item) => item.element);

//     if (!sections.length) {
//       return undefined;
//     }

//     const updateActiveSection = () => {
//       if (lockRef.current) {
//         return;
//       }

//       const triggerLine = 150;
//       const currentSection = sections.find((section) => {
//         const rect = section.element.getBoundingClientRect();
//         return rect.top <= triggerLine && rect.bottom > triggerLine;
//       });

//       if (window.scrollY < 120) {
//         setActiveHref(null);
//         return;
//       }

//       setActiveHref(currentSection?.href ?? null);
//     };

//     updateActiveSection();
//     window.addEventListener("scroll", updateActiveSection, { passive: true });
//     window.addEventListener("resize", updateActiveSection);

//     return () => {
//       window.removeEventListener("scroll", updateActiveSection);
//       window.removeEventListener("resize", updateActiveSection);
//     };
//   }, [items]);

//   useEffect(() => {
//     return () => {
//       if (unlockTimerRef.current) {
//         window.clearTimeout(unlockTimerRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 24);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (href) => {
//     setActiveHref(href);
//     lockRef.current = true;

//     if (unlockTimerRef.current) {
//       window.clearTimeout(unlockTimerRef.current);
//     }

//     unlockTimerRef.current = window.setTimeout(() => {
//       lockRef.current = false;
//     }, 900);
//   };

//   return (
//     <header className="fixed inset-x-0 top-0 z-50">
//       <div
//         className={`navbar-shell transition-all duration-300 ${scrolled ? "is-scrolled" : ""
//           }`}
//       >
//         <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
//           <div className="flex items-center gap-4 md:gap-6">
//             <Link href="/" className="navbar-brand flex items-center">
//               <span className="navbar-mark flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
//                 <Image
//                   src="/favicon-logo.png"
//                   alt="Mehedy logo"
//                   width={56}
//                   height={56}
//                   className="h-[2.7rem] w-[2.7rem] object-contain sm:h-[3.1rem] sm:w-[3.1rem]"
//                   priority
//                 />
//               </span>
//             </Link>
//           </div>

//           <nav className="hidden items-center gap-9 lg:flex">
//             {items.map((item, index) => (
//               <a
//                 key={`${item.label}-${item.href}-${index}`}
//                 href={item.href}
//                 onClick={() => handleNavClick(item.href)}
//                 className={`navbar-link navbar-navlink relative pb-2 text-lg font-semibold transition-colors ${activeIndex === index ? "is-active" : ""
//                   }`}
//               >
//                 {item.label}
//               </a>
//             ))}
//           </nav>

//           <div className="flex items-center gap-3">
//             <a
//               href="#contact"
//               className="button-hover-soft theme-outline-button navbar-cta hidden rounded-full px-6 py-3 text-sm font-semibold md:inline-flex lg:px-8 lg:py-4 lg:text-base"
//             >
//               Hire Me!
//             </a>

//             <button
//               type="button"
//               onClick={() => setOpen((current) => !current)}
//               className="navbar-mobile-button inline-flex h-11 w-11 items-center justify-center rounded-full sm:h-12 sm:w-12 lg:hidden"
//               aria-expanded={open}
//               aria-label="Toggle navigation menu"
//             >
//               <span className="flex flex-col gap-1.5">
//                 <span className="h-0.5 w-5 bg-current" />
//                 <span className="h-0.5 w-5 bg-current" />
//                 <span className="h-0.5 w-5 bg-current" />
//               </span>
//             </button>
//           </div>
//         </div>

//         {open ? (
//           <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
//             <nav className="navbar-mobile-panel grid gap-2 rounded-[1.6rem] p-3 sm:rounded-[2rem] sm:p-4 lg:hidden">
//               {items.map((item, index) => (
//                 <a
//                   key={`${item.label}-${item.href}-${index}`}
//                   href={item.href}
//                   onClick={() => {
//                     handleNavClick(item.href);
//                     setOpen(false);
//                   }}
//                   className={`navbar-mobile-link rounded-2xl px-4 py-3 text-base font-medium transition-colors ${activeIndex === index
//                       ? "is-active"
//                       : ""
//                     }`}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//               <a
//                 href="#contact"
//                 onClick={() => setOpen(false)}
//                 className="button-hover-soft theme-outline-button mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-base font-semibold"
//               >
//                 Hire Me!
//               </a>
//             </nav>
//           </div>
//         ) : null}
//       </div>
//     </header>
//   );
// }


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// export default function Navbar({ items }) {
//   const [open, setOpen] = useState(false);
//   const [activeHref, setActiveHref] = useState(null);
//   const [scrolled, setScrolled] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const lockRef = useRef(false);
//   const unlockTimerRef = useRef(null);
//   const activeIndex = items.findLastIndex((item) => item.href === activeHref);

//   useEffect(() => {
//     const sections = items
//       .map((item) => ({
//         href: item.href,
//         element: document.querySelector(item.href),
//       }))
//       .filter((item) => item.element);

//     if (!sections.length) {
//       return undefined;
//     }

//     const updateActiveSection = () => {
//       if (lockRef.current) {
//         return;
//       }

//       const triggerLine = 150;
//       const currentSection = sections.find((section) => {
//         const rect = section.element.getBoundingClientRect();
//         return rect.top <= triggerLine && rect.bottom > triggerLine;
//       });

//       if (window.scrollY < 120) {
//         setActiveHref(null);
//         return;
//       }

//       setActiveHref(currentSection?.href ?? null);
//     };

//     updateActiveSection();
//     window.addEventListener("scroll", updateActiveSection, { passive: true });
//     window.addEventListener("resize", updateActiveSection);

//     return () => {
//       window.removeEventListener("scroll", updateActiveSection);
//       window.removeEventListener("resize", updateActiveSection);
//     };
//   }, [items]);

//   useEffect(() => {
//     return () => {
//       if (unlockTimerRef.current) {
//         window.clearTimeout(unlockTimerRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 24);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (href) => {
//     setActiveHref(href);
//     lockRef.current = true;

//     if (unlockTimerRef.current) {
//       window.clearTimeout(unlockTimerRef.current);
//     }

//     unlockTimerRef.current = window.setTimeout(() => {
//       lockRef.current = false;
//     }, 900);
//   };

//   return (
//     <header className="fixed inset-x-0 top-0 z-50">
//       <div
//         className={`navbar-shell transition-all duration-500 ${scrolled ? "is-scrolled" : ""
//           }`}
//       >
//         <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5">
//           {/* Logo with floating animation */}
//           <div className="flex items-center gap-4 md:gap-6">
//             <Link
//               href="/"
//               className="navbar-brand group relative flex items-center"
//             >
//               <span className="navbar-mark flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
//                 <Image
//                   src="/favicon-logo.png"
//                   alt="Mehedy logo"
//                   width={56}
//                   height={56}
//                   className="h-[2.7rem] w-[2.7rem] object-contain transition-all duration-300 group-hover:rotate-3 sm:h-[3.1rem] sm:w-[3.1rem]"
//                   priority
//                 />
//               </span>

//               {/* Animated gradient border on hover */}
//               <span className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-20" />
//             </Link>
//           </div>

//           {/* Desktop Navigation with modern effects */}
//           <nav className="hidden items-center gap-2 lg:flex">
//             {items.map((item, index) => (
//               <div key={`${item.label}-${item.href}-${index}`} className="relative">
//                 <a
//                   href={item.href}
//                   onClick={() => handleNavClick(item.href)}
//                   onMouseEnter={() => setHoveredIndex(index)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                   className={`navbar-link navbar-navlink relative block px-4 py-2 text-lg font-semibold transition-all duration-300 ${activeIndex === index ? "is-active" : ""
//                     }`}
//                 >
//                   {/* Modern underline effect */}
//                   <span className="relative z-10">{item.label}</span>

//                   {/* Animated background on hover */}
//                   <span
//                     className={`absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 transition-all duration-300 ${hoveredIndex === index ? "scale-100 opacity-100" : "scale-90 opacity-0"
//                       }`}
//                   />
//                 </a>

//                 {/* Active indicator dot */}
//                 {activeIndex === index && (
//                   <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500">
//                     <span className="absolute inset-0 animate-ping rounded-full bg-orange-500 opacity-60" />
//                   </span>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Right side with modern CTA */}
//           <div className="flex items-center gap-3">
//             <a
//               href="#contact"
//               className="button-hover-soft relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/35 md:inline-flex lg:px-8 lg:py-4 lg:text-base"
//             >
//               {/* Shine effect */}
//               <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 hover:translate-x-full" />

//               {/* Glow effect */}
//               <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

//               <span className="relative flex items-center gap-2">
//                 Hire Me!
//                 <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </span>
//             </a>

//             {/* Modern hamburger button */}
//             <button
//               type="button"
//               onClick={() => setOpen((current) => !current)}
//               className="navbar-mobile-button relative h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 lg:hidden"
//               aria-expanded={open}
//               aria-label="Toggle navigation menu"
//             >
//               <span className="absolute left-1/2 top-1/2 flex w-5 -translate-x-1/2 -translate-y-1/2 flex-col gap-1.5">
//                 <span
//                   className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""
//                     }`}
//                 />
//                 <span
//                   className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "opacity-0" : ""
//                     }`}
//                 />
//                 <span
//                   className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""
//                     }`}
//                 />
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu with modern animations */}
//         {open && (
//           <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
//             <nav className="navbar-mobile-panel grid gap-2 rounded-2xl bg-white/95 p-3 shadow-2xl backdrop-blur-xl dark:bg-slate-900/95 sm:rounded-3xl sm:p-4 lg:hidden">
//               {items.map((item, index) => (
//                 <a
//                   key={`${item.label}-${item.href}-${index}`}
//                   href={item.href}
//                   onClick={() => {
//                     handleNavClick(item.href);
//                     setOpen(false);
//                   }}
//                   className={`navbar-mobile-link relative transform rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-pink-500/10 ${activeIndex === index
//                       ? "is-active bg-gradient-to-r from-orange-500/20 to-pink-500/20"
//                       : ""
//                     }`}
//                 >
//                   <div className="flex items-center justify-between">
//                     <span>{item.label}</span>
//                     {activeIndex === index && (
//                       <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500">
//                         <span className="absolute inset-0 animate-pulse rounded-full bg-orange-500 opacity-60" />
//                       </span>
//                     )}
//                   </div>
//                 </a>
//               ))}
//               <a
//                 href="#contact"
//                 onClick={() => setOpen(false)}
//                 className="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
//               >
//                 <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
//                 <span>Hire Me!</span>
//                 <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </a>
//             </nav>
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         .navbar-shell {
//           transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
//         }

//         .navbar-shell.is-scrolled {
//           backdrop-filter: blur(20px);
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
//         }

//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .navbar-mobile-panel {
//           animation: slideDown 0.3s cubic-bezier(0.22, 1, 0.36, 1);
//         }
//       `}</style>
//     </header>
//   );
// }


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
        {/* Logo with floating animation */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="group relative flex items-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
              <Image
                src="/favicon-logo.png"
                alt="Mehedy logo"
                width={56}
                height={56}
                className="h-[2.7rem] w-[2.7rem] object-contain transition-all duration-300 group-hover:rotate-3 sm:h-[3.1rem] sm:w-[3.1rem]"
                preload={true}           // Replace 'priority' with this
                loading="eager"          // Keep this for immediate loading
                fetchPriority="high"     // Keep this for modern browser hint
              />
            </span>

            {/* Animated gradient border on hover */}
            <span className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-20" />
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