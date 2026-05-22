// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function RevealSection({
//   as: Tag = "div",
//   className = "",
//   delay = 0,
//   children,
// }) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const node = ref.current;

//     if (!node) {
//       return undefined;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       {
//         threshold: 0.18,
//         rootMargin: "0px 0px -8% 0px",
//       }
//     );

//     observer.observe(node);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <Tag
//       ref={ref}
//       className={`reveal-section ${visible ? "is-visible" : ""} ${className}`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </Tag>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealSection({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // ১. অ্যাক্সেসিবিলিটি (A11y) চেক: ইউজার যদি ডিভাইসে অ্যানিমেশন অফ রাখে, তবে অবজর্ভার বন্ধ রেখে সরাসরি visible করে দেবে
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // একবার স্ক্রিনে এসে গেলে অবজর্ভার ডিসকানেক্ট করে মেমোরি সেভ করবে
        }
      },
      {
        threshold: 0.15, // globals.css এর সাথে মিল রেখে থ্রেশহোল্ড কিছুটা অপ্টিমাইজ করা হলো
        rootMargin: "0px 0px -10% 0px", // নিচে ১০% আসার সাথে সাথে স্মুথলি রিভিল হবে
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []); // সিঙ্গেল ইনিশিয়াল মাуন্টের জন্য পারফেক্ট

  // ২. অ্যানিমেশন এবং ট্রানজিশন উভয় ডিলির নিরাপদ কম্বিনেশন স্টাইল
  const delayStyle = delay
    ? {
      transitionDelay: `${delay}ms`,
      animationDelay: `${delay}ms`,
    }
    : {};

  return (
    <Tag
      ref={ref}
      className={`reveal-section ${visible ? "is-visible" : ""} ${className}`}
      style={delayStyle}
    >
      {children}
    </Tag>
  );
}