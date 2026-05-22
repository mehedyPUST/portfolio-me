// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useMemo, useState } from "react";

// function ProjectCard({ project }) {
//   return (
//     <article className="project-card group overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-lg shadow-slate-200/70">
//       <div className="project-image-shell relative overflow-hidden rounded-t-[2rem]">
//         <Image
//           src={project.image}
//           alt={project.name}
//           width={900}
//           height={600}
//           className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//         />
//         <div className="project-image-softener pointer-events-none absolute inset-0" />
//         <div className="project-badge absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.25em]">
//           {project.category}
//         </div>
//       </div>
//       <div className="relative space-y-5 p-6">
//         <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(249,115,22,0.5),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//         <div className="space-y-3">
//           <h3 className="text-2xl font-semibold text-slate-950">{project.name}</h3>
//           <p className="text-sm leading-7 text-slate-600">{project.summary}</p>
//         </div>

//         <div className="flex flex-wrap gap-2">
//           {project.stack.slice(0, 3).map((item) => (
//             <span
//               key={item}
//               className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700"
//             >
//               {item}
//             </span>
//           ))}
//         </div>

//         <Link
//           href={`/projects/${project.slug}`}
//           className="button-hover-secondary inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900"
//         >
//           View Details
//           <span aria-hidden="true">{"->"}</span>
//         </Link>
//       </div>
//     </article>
//   );
// }

// export default function ProjectGrid({ projects }) {
//   const categories = useMemo(
//     () => ["All", ...new Set(projects.map((project) => project.category))],
//     [projects]
//   );
//   const [activeCategory, setActiveCategory] = useState("All");

//   const visibleProjects = useMemo(() => {
//     if (activeCategory === "All") {
//       return projects;
//     }

//     return projects.filter((project) => project.category === activeCategory);
//   }, [activeCategory, projects]);

//   return (
//     <div className="space-y-8">
//       <div className="flex flex-wrap gap-3">
//         {categories.map((category) => {
//           const isActive = category === activeCategory;

//           return (
//             <button
//               key={category}
//               type="button"
//               onClick={() => setActiveCategory(category)}
//               className={`button-hover-filter rounded-full px-4 py-2 text-sm font-semibold ${
//                 isActive
//                   ? "filter-button-active"
//                   : "border border-slate-300 bg-white/80 text-slate-700 hover:border-slate-950"
//               }`}
//             >
//               {category}
//             </button>
//           );
//         })}
//       </div>

//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {visibleProjects.map((project) => (
//             <ProjectCard key={project.slug} project={project} />
//           ))}
//         </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

function ProjectCard({ project, activeCategory }) {
  return (
    // ১. থিম ইন্টিগ্রেশন: globals.css এর ভেরিয়েবল এবং hover ট্রানজিশন ইন্টিগ্রেট করা হয়েছে
    <article
      key={`${activeCategory}-${project.slug}`} // ক্যাটাগরি চেঞ্জের সাথে সাথে অ্যানিমেশন ট্রিগার করার ট্রিক
      className="project-card group overflow-hidden rounded-[2rem] transition-all duration-500 motion-safe:animate-fade-up"
      style={{
        background: "var(--surface-glass)",
        backdropFilter: "blur(12px)",
        border: "1px solid var(--overlay-light-b)",
      }}
    >
      <div className="project-image-shell relative overflow-hidden rounded-t-[2rem]">
        <Image
          src={project.image}
          alt={project.name}
          width={900}
          height={600}
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="project-image-softener pointer-events-none absolute inset-0" />

        {/* কাস্টম ক্যাটাগরি ব্যাজ থিমিং */}
        <div
          className="project-badge absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.25em]"
          style={{
            background: "var(--overlay-light-a)",
            backdropFilter: "blur(4px)",
            border: "1px solid var(--overlay-light-b)",
            color: "var(--foreground)"
          }}
        >
          {project.category}
        </div>
      </div>

      <div className="relative space-y-5 p-6">
        {/* হোভার করলে কার্ডের টপে একটি নিয়ন অরেঞ্জ লাইটিং ইফেক্ট আসবে */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(249,115,22,0.5),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white transition-colors">{project.name}</h3>
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-400 transition-colors">{project.summary}</p>
        </div>

        {/* টেক স্ট্যাক ব্যাজসমূহ (যা থিম কালার অনুযায়ী এডজাস্ট হবে) */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full px-3 py-1 text-xs font-medium bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 transition-all"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="button-hover-secondary inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-all duration-300"
        >
          View Details
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 inline-block">{"->"}</span>
        </Link>
      </div>
    </article>
  );
}

export default function ProjectGrid({ projects }) {
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    [projects]
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div className="space-y-8">
      {/* ক্যাটাগরি ফিল্টার বাটন সেকশন */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className="rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 cursor-pointer"
              style={{
                background: isActive ? "linear-gradient(135deg, var(--cursor-dot-start), var(--color-accent-strong))" : "var(--surface-glass)",
                color: isActive ? "#ffffff" : "var(--foreground)",
                border: isActive ? "1px solid transparent" : "1px solid var(--overlay-light-b)",
                boxShadow: isActive ? "0 4px 14px rgba(249, 115, 22, 0.3)" : "none"
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* প্রজেক্টস গ্রিড লেআউট */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            activeCategory={activeCategory}
          />
        ))}
      </div>
    </div>
  );
}