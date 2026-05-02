import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, profile, projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | ${profile.name}`,
    description: project.summary,
  };
}

function DetailSection({ title, children }) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/70">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.18),_transparent_22%),linear-gradient(180deg,#fffdf8_0%,#f8fafc_100%)] px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[1.75rem] border border-white/80 bg-white/80 px-4 py-4 shadow-lg shadow-slate-200/70 backdrop-blur sm:rounded-full sm:px-5 sm:py-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/#projects"
              className="font-mono text-sm uppercase tracking-[0.32em] text-slate-950"
            >
              {"<- Back to Projects"}
            </Link>
            <div className="flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white"
              >
                Live Project
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900"
              >
                GitHub Client
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {project.category}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {project.name}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {project.description}
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-3 shadow-[0_25px_80px_rgba(148,163,184,0.2)]">
              <Image
                src={project.image}
                alt={project.name}
                width={1200}
                height={720}
                priority
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <DetailSection title="Main Technology Stack">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </DetailSection>

            <DetailSection title="Brief Description">
              <p className="text-base leading-8 text-slate-600">
                {project.summary}
              </p>
            </DetailSection>

            <DetailSection title="Challenges Faced">
              <ul className="grid gap-3 text-sm leading-7 text-slate-600">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="rounded-2xl bg-slate-50 px-4 py-3">
                    {challenge}
                  </li>
                ))}
              </ul>
            </DetailSection>

            <DetailSection title="Potential Improvements and Future Plans">
              <ul className="grid gap-3 text-sm leading-7 text-slate-600">
                {project.futurePlans.map((plan) => (
                  <li key={plan} className="rounded-2xl bg-slate-50 px-4 py-3">
                    {plan}
                  </li>
                ))}
              </ul>
            </DetailSection>
          </div>
        </div>
      </div>
    </main>
  );
}
