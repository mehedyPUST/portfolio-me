// "use client";

// import { useEffect, useState } from "react";

// function AnimatedNumber({ value, suffix }) {
//   const [displayValue, setDisplayValue] = useState(0);

//   useEffect(() => {
//     let frame = 0;
//     const duration = 700;
//     const stepTime = 16;
//     const totalFrames = Math.max(1, Math.round(duration / stepTime));

//     const timer = window.setInterval(() => {
//       frame += 1;
//       const progress = frame / totalFrames;
//       const nextValue = Math.round(value * progress);
//       setDisplayValue(nextValue);

//       if (frame >= totalFrames) {
//         window.clearInterval(timer);
//       }
//     }, stepTime);

//     return () => window.clearInterval(timer);
//   }, [value]);

//   return (
//     <span className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
//       {displayValue}
//       {suffix}
//     </span>
//   );
// }

// export default function PortfolioStats({ stats }) {
//   return (
//     <div className="grid gap-4 min-[480px]:grid-cols-2 sm:grid-cols-3">
//       {stats.map((stat) => (
//         <div
//           key={stat.label}
//           className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-sm shadow-slate-200/70"
//         >
//           <AnimatedNumber value={stat.value} suffix={stat.suffix} />
//           <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";

// ১. স্মুথ Ease-Out ফাংশন (কাউন্টার অ্যানিমেশনের শেষের দিকটি মাখনের মতো স্লো করার জন্য)
function easeOutQuad(x) {
  return 1 - (1 - x) * (1 - x);
}

function AnimatedNumber({ value, suffix }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime = null;
    const duration = 1200; // অ্যানিমেশন ডিউরেশন ১.২ সেকেন্ড করা হলো নিখুঁত ভিজ্যুয়ালের জন্য
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-Out লজিক অ্যাপ্লাই করা হলো
      const easedProgress = easeOutQuad(progress);
      const nextValue = Math.round(value * easedProgress);

      setDisplayValue(nextValue);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(animate);
      }
    };

    // ২. requestAnimationFrame ব্যবহার করে ব্রাউজারের রিফ্রেশ রেটের সাথে সিঙ্ক করা হলো (জিরো ল্যাগ)
    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [value]);

  return (
    <span className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function PortfolioStats({ stats }) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="grid gap-4 min-[480px]:grid-cols-2 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-[1.75rem] p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
          style={{
            background: "var(--surface-glass)",
            backdropFilter: "blur(8px)",
            border: "1px solid var(--overlay-light-b)",
          }}
        >
          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          <p className="mt-2 text-sm font-medium leading-6 text-slate-600 dark:text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}