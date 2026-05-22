// "use client";

// import { useEffect, useState } from "react";

// export default function ScrollTopButton() {
//   const [progress, setProgress] = useState(0);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const updateProgress = () => {
//       const scrollTop = window.scrollY;
//       const scrollHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const nextProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

//       setProgress(nextProgress);
//       setVisible(scrollTop > 180);
//     };

//     updateProgress();
//     window.addEventListener("scroll", updateProgress, { passive: true });
//     window.addEventListener("resize", updateProgress);

//     return () => {
//       window.removeEventListener("scroll", updateProgress);
//       window.removeEventListener("resize", updateProgress);
//     };
//   }, []);

//   return (
//     <button
//       type="button"
//       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//       aria-label="Scroll to top"
//       className={`scroll-top-shell ${visible ? "is-visible" : ""}`}
//       style={{ "--scroll-progress": `${progress * 360}deg` }}
//     >
//       <span className="scroll-top-inner">
//         <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
//           <path
//             d="M12 18V6"
//             stroke="currentColor"
//             strokeWidth="1.9"
//             strokeLinecap="round"
//           />
//           <path
//             d="M7 11L12 6L17 11"
//             stroke="currentColor"
//             strokeWidth="1.9"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </span>
//     </button>
//   );
// }


"use client";

import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      setProgress(nextProgress);
      setVisible(scrollTop > 180);
    };

    updateProgress();

    // পারফরম্যান্স অপ্টিমাইজেশনের জন্য passive ট্র্যাকিং অ্যাড করা হয়েছে
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      // ৩ডি মোশন, ফিক্সড পজিশনিং এবং হিরো ইন্টিগ্রেশনের সাথে মিলিয়ে রেসপন্সিভ ক্লাস যুক্ত করা হয়েছে
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500 cursor-pointer shadow-lg hover:scale-110 active:scale-95 ${visible
          ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
          : "translate-y-8 opacity-0 scale-75 pointer-events-none"
        } scroll-top-shell`}
      style={{
        // JSX সেফ সিএসএস ভেরিয়েবল ডিক্লেয়ারেশন
        "--scroll-progress": `${progress * 360}deg`,
        background: "var(--surface-glass)",
        backdropFilter: "blur(8px)",
        border: "1px solid var(--overlay-light-b)"
      }}
    >
      {/* সার্কুলার প্রগ্রেস ট্র্যাক বর্ডার বা ইনার এলিমেন্ট */}
      <span
        className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors scroll-top-inner"
        style={{
          background: "var(--background)"
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 transition-transform group-hover:-translate-y-0.5">
          <path
            d="M12 18V6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M7 11L12 6L17 11"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}