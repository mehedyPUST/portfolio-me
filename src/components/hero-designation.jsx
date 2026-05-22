// // "use client";

// // import { useEffect, useState } from "react";

// // export default function HeroDesignation({ items, fallback }) {
// //   const [index, setIndex] = useState(0);

// //   useEffect(() => {
// //     if (!items?.length) {
// //       return undefined;
// //     }

// //     const timer = window.setInterval(() => {
// //       setIndex((current) => (current + 1) % items.length);
// //     }, 2200);

// //     return () => window.clearInterval(timer);
// //   }, [items]);

// //   const value = items?.[index] ?? fallback;

// //   return (
// //     <span className="hero-designation-chip inline-flex min-h-11 items-center rounded-full px-4 py-2">
// //       <span className="hero-designation-dot" aria-hidden="true" />
// //       <span className="hero-designation-text">{value}</span>
// //     </span>
// //   );
// // }


// "use client";

// import { useEffect, useState } from "react";

// export default function HeroDesignation({ items, fallback }) {
//   const [index, setIndex] = useState(0);

//   // ১. সেফটি চেক এবং আইটেমের লেংথ ট্র্যাকিং (Array রেফারেন্স বাগ ফিক্স)
//   const itemsCount = items?.length ?? 0;

//   useEffect(() => {
//     if (itemsCount <= 1) return undefined;

//     const timer = window.setInterval(() => {
//       setIndex((current) => (current + 1) % itemsCount);
//     }, 2500); // ২.৫ সেকেন্ড পর পর চেঞ্জ হবে (globals.css এর টাইমিং এর সাথে সামঞ্জস্য রেখে)

//     return () => window.clearInterval(timer);
//   }, [itemsCount]);

//   // আইটেম না থাকলে ফলব্যাক দেখাবে
//   if (!items || items.length === 0) {
//     return (
//       <span className="hero-designation-chip inline-flex min-h-11 items-center rounded-full px-4 py-2">
//         <span className="hero-designation-dot" aria-hidden="true" />
//         <span className="hero-designation-text">{fallback}</span>
//       </span>
//     );
//   }

//   const value = items[index];

//   return (
//     <span
//       className="hero-designation-chip inline-flex min-h-11 items-center rounded-full px-4 py-2"
//       aria-live="polite" /* স্ক্রিন রিডারদের টেক্সট চেঞ্জ বুঝতে সাহায্য করবে */
//     >
//       <span className="hero-designation-dot" aria-hidden="true" />

//       {/* ২. Key ট্রিক: প্রতিবার index চেঞ্জ হলে React এই স্প্যানটিকে নতুন এলিমেন্ট হিসেবে ধরবে, 
//         যার ফলে সিএসএস এর fade-up অ্যানিমেশনটি প্রতিবার নতুন করে প্লে হবে।
//       */}
//       <span
//         key={index}
//         className="hero-designation-text inline-block motion-safe:animate-fade-up"
//         style={{
//           animationDuration: "400ms"
//         }}
//       >
//         {value}
//       </span>
//     </span>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function HeroDesignation({ items, fallback }) {
  const [index, setIndex] = useState(0);

  // ১. সেফটি চেক এবং আইটেমের লেংথ ট্র্যাকিং (Array রেফারেন্স বাগ ফিক্স)
  const itemsCount = items?.length ?? 0;

  useEffect(() => {
    // যদি রোটেশনের জন্য ১টি বা কোনো আইটেমই না থাকে, তবে টাইমার চালানোর প্রয়োজন নেই
    if (itemsCount <= 1) return undefined;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % itemsCount);
    }, 2500); // ২.৫ সেকেন্ড পর পর টেক্সট পরিবর্তন হবে

    return () => window.clearInterval(timer);
  }, [itemsCount]);

  // যদি কোনো ডেটাই পাস না করা হয়, তবে সেফটি ফলব্যাক রেন্ডার করবে
  if (!items || items.length === 0) {
    return (
      <span className="hero-designation-chip inline-flex min-h-11 items-center rounded-full px-4 py-2">
        <span className="hero-designation-dot" aria-hidden="true" />
        <span className="hero-designation-text">{fallback}</span>
      </span>
    );
  }

  const value = items[index];

  return (
    <span
      className="hero-designation-chip inline-flex min-h-11 items-center rounded-full px-4 py-2"
      aria-live="polite" /* স্ক্রিন রিডারদের (A11y) ডাইনামিক টেক্সট পরিবর্তন বুঝতে সাহায্য করবে */
    >
      {/* গ্লোবাল সিএসএস থেকে স্টাইল পাওয়া ছোট ডটটি */}
      <span className="hero-designation-dot" aria-hidden="true" />

      {/* Key ট্রিক: প্রতিবার index চেঞ্জ হলে React এই স্প্যানটিকে একদম নতুন এলিমেন্ট হিসেবে কাউন্ট করবে, 
        যার ফলে সিএসএস-এর 'animate-fade-up' অ্যানিমেশনটি প্রতিবার নতুন করে মাখনের মতো প্লে হবে।
      */}
      <span
        key={index}
        className="hero-designation-text inline-block motion-safe:animate-fade-up"
        style={{
          animationDuration: "400ms"
        }}
      >
        {value}
      </span>
    </span>
  );
}