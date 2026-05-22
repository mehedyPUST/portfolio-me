// import Image from "next/image";
// import { profile, socialLinks } from "@/data/portfolio";

// const footerLinks = [
//   { label: "About", href: "#about" },
//   { label: "Skills", href: "#skills" },
//   { label: "Works", href: "#projects" },
//   { label: "Contact", href: "#contact" },
// ];

// function SocialIcon({ label }) {
//   const normalized = label.toLowerCase();

//   if (normalized === "facebook") {
//     return (
//       <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
//         <path
//           d="M13.2 20V12.7H15.7L16.1 9.9H13.2V8.1C13.2 7.29 13.44 6.74 14.6 6.74H16.2V4.24C15.92 4.2 14.96 4.12 13.84 4.12C11.5 4.12 9.9 5.48 9.9 8V9.9H7.5V12.7H9.9V20H13.2Z"
//           fill="currentColor"
//         />
//       </svg>
//     );
//   }

//   if (normalized === "linkedin") {
//     return (
//       <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
//         <path
//           d="M6.6 8.2C7.68 8.2 8.55 7.33 8.55 6.25C8.55 5.17 7.68 4.3 6.6 4.3C5.52 4.3 4.65 5.17 4.65 6.25C4.65 7.33 5.52 8.2 6.6 8.2Z"
//           fill="currentColor"
//         />
//         <path
//           d="M5 9.6H8.15V19.6H5V9.6Z"
//           fill="currentColor"
//         />
//         <path
//           d="M10.2 9.6H13.22V10.97H13.26C13.68 10.17 14.71 9.33 16.25 9.33C19.45 9.33 20.05 11.3 20.05 13.87V19.6H16.9V14.52C16.9 13.31 16.88 11.75 15.19 11.75C13.48 11.75 13.22 13.04 13.22 14.43V19.6H10.2V9.6Z"
//           fill="currentColor"
//         />
//       </svg>
//     );
//   }

//   if (normalized === "github") {
//     return (
//       <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
//         <path
//           d="M12 4.5C7.86 4.5 4.5 7.86 4.5 12C4.5 15.31 6.64 18.12 9.61 19.11C9.99 19.17 10.13 18.95 10.13 18.76V17.45C8 17.9 7.56 16.56 7.56 16.56C7.22 15.68 6.72 15.45 6.72 15.45C6.04 15 6.77 15.01 6.77 15.01C7.52 15.06 7.91 15.79 7.91 15.79C8.58 16.91 9.67 16.58 10.1 16.39C10.17 15.92 10.37 15.6 10.59 15.41C8.89 15.23 7.1 14.58 7.1 11.68C7.1 10.85 7.4 10.17 7.9 9.64C7.82 9.45 7.57 8.67 7.97 7.62C7.97 7.62 8.6 7.43 10.12 8.42C10.72 8.26 11.37 8.18 12 8.18C12.63 8.18 13.28 8.26 13.88 8.42C15.4 7.43 16.03 7.62 16.03 7.62C16.43 8.67 16.18 9.45 16.1 9.64C16.6 10.17 16.9 10.85 16.9 11.68C16.9 14.59 15.1 15.22 13.39 15.4C13.68 15.65 13.94 16.13 13.94 16.86V18.76C13.94 18.95 14.08 19.17 14.47 19.11C17.43 18.12 19.57 15.31 19.57 12C19.57 7.86 16.21 4.5 12 4.5Z"
//           fill="currentColor"
//         />
//       </svg>
//     );
//   }

//   if (normalized === "twitter" || normalized === "x") {
//     return (
//       <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
//         <path
//           d="M6 5H9.1L12.8 10.1L17.1 5H19.3L13.8 11.5L19.7 19H16.6L12.5 13.5L7.8 19H5.6L11.5 12L6 5Z"
//           fill="currentColor"
//         />
//       </svg>
//     );
//   }

//   return (
//     <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
//       <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.7" />
//       <path
//         d="M12 7.4V16.6M7.4 12H16.6"
//         stroke="currentColor"
//         strokeWidth="1.7"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// export default function SiteFooter() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="px-4 pb-10 pt-14 sm:px-6 lg:px-8">
//       <div className="footer-shell mx-auto max-w-7xl rounded-[2rem] px-5 py-8 sm:rounded-[2.5rem] sm:px-10 sm:py-10">
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
//           {socialLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="footer-social inline-flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full"
//               aria-label={link.label}
//             >
//               <SocialIcon label={link.label} />
//             </a>
//           ))}
//         </div>

//         <div className="mt-8 flex justify-center sm:mt-10">
//           <div className="footer-logo flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
//             <Image
//               src="/icon.png"
//               alt={`${profile.name || "Mehedy Hasan"} logo`}
//               width={112}
//               height={112}
//               className="h-[4.75rem] w-[4.75rem] object-contain rounded-full object-cover transition-all sm:h-[5.75rem] sm:w-[5.75rem]"
//             />



//           </div>
//         </div>

//         <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mt-10 sm:gap-x-8 sm:gap-y-4">
//           {footerLinks.map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               className="footer-link text-base font-semibold sm:text-xl"
//             >
//               {item.label}
//             </a>
//           ))}
//         </nav>

//         <p className="footer-copy mt-8 text-center text-sm sm:mt-10 sm:text-base">
//           &copy; {year} All rights reserved by {profile.name || "Mehedy Hasan"}
//         </p>
//       </div>
//     </footer>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { profile, socialLinks } from "@/data/portfolio";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function SocialIcon({ label }) {
  const normalized = label.toLowerCase();

  if (normalized === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M13.2 20V12.7H15.7L16.1 9.9H13.2V8.1C13.2 7.29 13.44 6.74 14.6 6.74H16.2V4.24C15.92 4.2 14.96 4.12 13.84 4.12C11.5 4.12 9.9 5.48 9.9 8V9.9H7.5V12.7H9.9V20H13.2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (normalized === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M6.6 8.2C7.68 8.2 8.55 7.33 8.55 6.25C8.55 5.17 7.68 4.3 6.6 4.3C5.52 4.3 4.65 5.17 4.65 6.25C4.65 7.33 5.52 8.2 6.6 8.2Z"
          fill="currentColor"
        />
        <path d="M5 9.6H8.15V19.6H5V9.6Z" fill="currentColor" />
        <path
          d="M10.2 9.6H13.22V10.97H13.26C13.68 10.17 14.71 9.33 16.25 9.33C19.45 9.33 20.05 11.3 20.05 13.87V19.6H16.9V14.52C16.9 13.31 16.88 11.75 15.19 11.75C13.48 11.75 13.22 13.04 13.22 14.43V19.6H10.2V9.6Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (normalized === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 4.5C7.86 4.5 4.5 7.86 4.5 12C4.5 15.31 6.64 18.12 9.61 19.11C9.99 19.17 10.13 18.95 10.13 18.76V17.45C8 17.9 7.56 16.56 7.56 16.56C7.22 15.68 6.72 15.45 6.72 15.45C6.04 15 6.77 15.01 6.77 15.01C7.52 15.06 7.91 15.79 7.91 15.79C8.58 16.91 9.67 16.58 10.1 16.39C10.17 15.92 10.37 15.6 10.59 15.41C8.89 15.23 7.1 14.58 7.1 11.68C7.1 10.85 7.4 10.17 7.9 9.64C7.82 9.45 7.57 8.67 7.97 7.62C7.97 7.62 8.6 7.43 10.12 8.42C10.72 8.26 11.37 8.18 12 8.18C12.63 8.18 13.28 8.26 13.88 8.42C15.4 7.43 16.03 7.62 16.03 7.62C16.43 8.67 16.18 9.45 16.1 9.64C16.6 10.17 16.9 10.85 16.9 11.68C16.9 14.59 15.1 15.22 13.39 15.4C13.68 15.65 13.94 16.13 13.94 16.86V18.76C13.94 18.95 14.08 19.17 14.47 19.11C17.43 18.12 19.57 15.31 19.57 12C19.57 7.86 16.21 4.5 12 4.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (normalized === "twitter" || normalized === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M6 5H9.1L12.8 10.1L17.1 5H19.3L13.8 11.5L19.7 19H16.6L12.5 13.5L7.8 19H5.6L11.5 12L6 5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.4V16.6M7.4 12H16.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default function SiteFooter() {
  // ১. হাইড্রেশন এরর মুক্ত সেফ ডাইনামিক ইয়ার ট্র্যাকিং
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="px-4 pb-10 pt-14 sm:px-6 lg:px-8">
      {/* ২. থিম ইন্টিগ্রেশন: globals.css এর ভেরিয়েবল এবং ডার্ক মোড ক্লাস যুক্ত করা হয়েছে */}
      <div
        className="footer-shell mx-auto max-w-7xl rounded-[2rem] px-5 py-8 sm:rounded-[2.5rem] sm:px-10 sm:py-10 transition-all duration-300"
        style={{
          background: "var(--surface-glass)",
          backdropFilter: "blur(12px)",
          border: "1px solid var(--overlay-light-b)",
        }}
      >
        {/* সোশ্যাল লিংকস এবং কাস্টম হোভার ট্রানজিশন */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social inline-flex h-12 w-12 items-center justify-center rounded-full text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-950 dark:hover:bg-white dark:hover:text-slate-950 transition-all duration-300 border border-slate-200 dark:border-slate-800"
              aria-label={link.label}
            >
              <SocialIcon label={link.label} />
            </a>
          ))}
        </div>

        {/* ৩. লোগো সেকশন ফিক্স এবং রিডিউসড সাইজ ট্রিক */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <div className="footer-logo flex h-20 w-20 items-center justify-center rounded-full bg-white/50 dark:bg-slate-900/50 p-1 border border-white/40">
            <Image
              src="/icon.png"
              alt={`${profile.name || "Mehedy Hasan"} logo`}
              width={64}
              height={64}
              priority={false}
              className="h-14 w-14 rounded-full object-contain transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        {/* নেভিগেশন লিংকস */}
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mt-10 sm:gap-x-8">
          {footerLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="footer-link text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* কপিরাইট টেক্সট */}
        <p className="footer-copy mt-8 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-500 transition-colors">
          &copy; {year} All rights reserved by {profile.name || "Mehedy Hasan"}
        </p>
      </div>
    </footer>
  );
}