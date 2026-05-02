import Image from "next/image";
import ContactForm from "@/components/contact-form";
import HeroDesignation from "@/components/hero-designation";
import Navbar from "@/components/navbar";
import PortfolioStats from "@/components/portfolio-stats";
import ProjectGrid from "@/components/project-grid";
import RevealSection from "@/components/reveal-section";
import SiteFooter from "@/components/site-footer";
import {
  contact,
  education,
  experience,
  portfolioStats,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from "@/data/portfolio";

const navItems = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#education" },
  { label: "Testimonials", href: "#experience" },
  { label: "Works", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm font-mono uppercase tracking-[0.3em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-16 pt-6 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-18">
          <div className="space-y-8">
            <div className="hero-chip inline-flex max-w-full items-center gap-3 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-xs text-slate-700 shadow-sm shadow-orange-100/80 backdrop-blur sm:text-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
              Placeholder content ready for your real story
            </div>

            <div className="space-y-5">
              <p className="font-mono text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">
                <HeroDesignation
                  items={profile.rotatingDesignations}
                  fallback={profile.designation}
                />
              </p>
              <h1 className="hero-title max-w-none text-[2.65rem] font-semibold leading-[0.98] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {profile.headlineLines.map((line) => (
                  <span key={line} className="block sm:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="hero-copy max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:text-xl">
                {profile.intro}
              </p>
            </div>

            <div className="hero-actions flex flex-col gap-4 sm:flex-row">
              <a
                className="button-hover-primary hero-primary-button inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold sm:w-auto"
                href={profile.resumeUrl}
                target={profile.resumeUrl.startsWith("http") ? "_blank" : undefined}
                rel={
                  profile.resumeUrl.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                View Resume
              </a>
              <a
                className="button-hover-secondary inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-900 sm:w-auto"
                href="#contact"
              >
                Let&apos;s Connect
              </a>
            </div>

            <div className="hero-social flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-hover-soft inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm"
                >
                  <span className="font-medium">{link.label}</span>
                  <span aria-hidden="true" className="text-[var(--color-accent)]">
                    {"->"}
                  </span>
                </a>
              ))}
            </div>

            <div className="hero-stats">
              <PortfolioStats stats={portfolioStats} />
            </div>
          </div>

          <div className="hero-visual relative mx-auto w-full max-w-sm sm:max-w-md">
            <div className="orb-float-a absolute -left-6 top-8 h-32 w-32 rounded-full bg-[var(--color-accent-soft)] blur-3xl" />
            <div className="orb-float-b absolute -right-4 bottom-0 h-40 w-40 rounded-full bg-[var(--color-sky-soft)] blur-3xl" />
            <div className="hero-card relative overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(160deg,rgba(255,255,255,0.88),rgba(255,247,237,0.9))] p-4 shadow-[0_30px_80px_rgba(148,163,184,0.28)] backdrop-blur sm:p-5">
              <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-2 shadow-sm shadow-slate-200/60">
                <Image
                  src={profile.photo}
                  alt="Placeholder portrait for your portfolio"
                  width={720}
                  height={860}
                  priority
                  className="h-auto w-full rounded-[1.25rem] object-cover"
                />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/90 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
                    Focus
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Building thoughtful products with clean UI, strong structure,
                    and room to grow.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/90 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
                    Updating Next
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Swap in your real image, resume, and links when you&apos;re ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-anchor px-4 py-20 sm:px-6 lg:px-8">
      <RevealSection
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]"
        delay={80}
      >
        <SectionHeading
          eyebrow="About Me"
          title="A personal intro with space for both craft and character."
          description="This section is intentionally written with a warmer voice so your portfolio feels like a person, not just a list of technologies."
        />
        <div className="grid gap-6">
          {profile.about.map((paragraph) => (
            <p
              key={paragraph}
              className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 text-base leading-8 text-slate-700 shadow-sm shadow-slate-200/70 backdrop-blur"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="section-anchor px-4 py-20 sm:px-6 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={100}>
        <SectionHeading
          eyebrow="Skills"
          title="A graphical skills layout that stays readable."
          description="Each category is driven by local data, so replacing placeholder skills later is a content edit instead of a redesign."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <article
              key={group.category}
              className="skill-card relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-lg shadow-slate-200/60"
            >
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-24 w-24 rounded-full blur-3xl"
                style={{
                  background:
                    index % 3 === 0
                      ? "var(--color-accent-soft)"
                      : index % 3 === 1
                        ? "var(--color-sky-soft)"
                        : "rgba(196,181,253,0.35)",
                }}
              />
              <div className="relative space-y-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
                    {group.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                    {group.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {group.items.map((skill) => (
                    <div key={skill.name} className="skill-item space-y-2">
                      <div className="skill-row flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-800">
                          {skill.name}
                        </span>
                        <span className="skill-percent font-mono text-slate-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-track h-2 overflow-hidden rounded-full bg-slate-200">
                        <div
                          className="skill-fill h-full rounded-full bg-[linear-gradient(90deg,#f97316,#fb7185,#38bdf8)]"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="section-anchor px-4 py-20 sm:px-6 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={120}>
        <SectionHeading
          eyebrow="Education"
          title="Your academic foundation, presented with useful detail."
          description="The placeholders below assume education beyond HSC and can be edited directly from the central data file."
        />

        <div className="grid gap-6">
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.degree}`}
              className="rounded-[2rem] border border-slate-200 bg-[rgba(255,255,255,0.82)] p-7 shadow-sm shadow-slate-200/80"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {item.timeframe}
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-950">
                    {item.degree}
                  </h3>
                  <p className="text-base text-slate-700">{item.institution}</p>
                </div>
                <ul className="grid max-w-2xl gap-3 text-sm leading-7 text-slate-600">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}

function ExperienceSection() {
  if (!experience.length) {
    return null;
  }

  return (
    <section id="experience" className="section-anchor px-4 py-20 sm:px-6 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={140}>
        <SectionHeading
          eyebrow="Experience"
          title="Relevant work, internships, or leadership experience."
          description="This block is data-driven, so you can keep placeholder entries for now or remove the array later to hide the section entirely."
        />

        <div className="grid gap-6">
          {experience.map((item) => (
            <article
              key={`${item.title}-${item.organization}`}
              className="rounded-[2rem] border border-slate-200 bg-[rgba(255,255,255,0.82)] p-7 shadow-sm shadow-slate-200/80"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {item.timeframe}
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="text-slate-600">{item.organization}</p>
                </div>
                <ul className="grid max-w-2xl gap-3 text-sm leading-7 text-slate-600">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="section-anchor px-4 py-20 sm:px-6 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-12" delay={160}>
        <SectionHeading
          eyebrow="Projects"
          title="Three portfolio-ready case studies with their own detail pages."
          description="Each card and project page is generated from the same data model so your future updates stay consistent."
        />

        <ProjectGrid projects={projects} />
      </RevealSection>
    </section>
  );
}

function ContactSection() {
  const findMeLinks = [
    socialLinks.find((link) => link.label === "GitHub"),
    socialLinks.find((link) => link.label === "LinkedIn"),
    { label: "Fiverr", href: "https://www.fiverr.com/sellers/pro_sammo/edit" },
  ].filter(Boolean);

  return (
    <section id="contact" className="section-anchor px-4 py-20 sm:px-6 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl" delay={180}>
        <div className="contact-shell relative overflow-hidden rounded-[2.75rem] border border-slate-200 shadow-[0_30px_100px_rgba(15,23,42,0.14)]">
          <div className="contact-orb contact-orb-one pointer-events-none absolute -left-10 top-10 h-48 w-48 rounded-full" />
          <div className="contact-orb contact-orb-two pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full" />
          <div className="relative grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-12 lg:py-14">
            <div className="contact-story space-y-6">
              <div className="space-y-2">
                <p className="contact-eyebrow font-mono text-sm uppercase tracking-[0.3em]">
                  Contact
                </p>
              </div>

              <div className="space-y-5 pt-1">
                <div className="space-y-2">
                  <h3 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    {profile.name}
                  </h3>
                  <p className="text-lg text-[var(--color-accent)] sm:text-xl">
                    Frontend Developer
                  </p>
                </div>

                <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  I&apos;m a skilled Frontend developer specializing in building
                  dynamic and responsive web applications using React,
                  Next.js &amp; Tailwind CSS.
                </p>

                <div className="space-y-4 text-base text-slate-700 sm:text-lg">
                  <p className="flex items-center gap-3">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[var(--color-accent)] shadow-sm shadow-slate-200/60"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d="M8.5 5.5H6.8C5.86 5.5 5.1 6.26 5.1 7.2C5.1 13.5 10.2 18.6 16.5 18.6C17.44 18.6 18.2 17.84 18.2 16.9V15.2L14.7 14.1L12.9 15.9C10.89 14.88 8.82 12.81 7.8 10.8L9.6 9L8.5 5.5Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <a href={`tel:${contact.phoneLink}`} className="hover:text-[var(--color-accent)]">
                      {contact.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[var(--color-accent)] shadow-sm shadow-slate-200/60"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d="M12 4.75C8 4.75 4.75 7.88 4.75 11.75C4.75 13.22 5.22 14.58 6.03 15.7L5.25 19.25L8.92 18.43C9.92 19 10.94 19.25 12 19.25C16 19.25 19.25 16.12 19.25 12.25C19.25 8.38 16 5.25 12 5.25V4.75Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.35 8.95C9.49 8.63 9.62 8.58 9.85 8.58H10.43C10.6 8.58 10.8 8.53 10.97 8.74C11.14 8.94 11.69 9.58 11.69 9.8C11.69 10.02 11.55 10.15 11.41 10.32C11.28 10.49 11.13 10.66 11.28 10.92C11.44 11.19 11.96 12.05 12.77 12.78C13.82 13.72 14.68 14.01 15 14.15C15.25 14.25 15.44 14.23 15.59 14.06C15.79 13.84 16.05 13.49 16.27 13.16C16.42 12.92 16.61 12.89 16.84 12.98L18.18 13.56C18.41 13.66 18.57 13.72 18.62 13.81C18.68 13.91 18.68 14.35 18.52 14.67C18.35 15 17.65 15.55 17.16 15.61C16.67 15.67 16.05 15.69 14.23 14.9C12.27 14.03 10.89 11.86 10.78 11.71C10.68 11.56 9.99 10.69 9.67 9.85C9.36 9 9.12 9.49 9.35 8.95Z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <a
                      href={contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--color-accent)]"
                    >
                      {contact.whatsapp}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[var(--color-accent)] shadow-sm shadow-slate-200/60"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d="M4 7.5L12 13.25L20 7.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="3.5"
                          y="5.5"
                          width="17"
                          height="13"
                          rx="3"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="break-all hover:text-[var(--color-accent)] sm:break-normal"
                    >
                      {contact.email}
                    </a>
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <p className="font-mono text-sm uppercase tracking-[0.3em] text-slate-500">
                    Find Me In
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {findMeLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="button-hover-panel find-me-icon inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 shadow-sm shadow-slate-200/60"
                        aria-label={link.label}
                      >
                        {link.label === "GitHub" ? (
                          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                            <path
                              d="M12 4.5C7.86 4.5 4.5 7.86 4.5 12C4.5 15.31 6.64 18.12 9.61 19.11C9.99 19.17 10.13 18.95 10.13 18.76V17.45C8 17.9 7.56 16.56 7.56 16.56C7.22 15.68 6.72 15.45 6.72 15.45C6.04 15 6.77 15.01 6.77 15.01C7.52 15.06 7.91 15.79 7.91 15.79C8.58 16.91 9.67 16.58 10.1 16.39C10.17 15.92 10.37 15.6 10.59 15.41C8.89 15.23 7.1 14.58 7.1 11.68C7.1 10.85 7.4 10.17 7.9 9.64C7.82 9.45 7.57 8.67 7.97 7.62C7.97 7.62 8.6 7.43 10.12 8.42C10.72 8.26 11.37 8.18 12 8.18C12.63 8.18 13.28 8.26 13.88 8.42C15.4 7.43 16.03 7.62 16.03 7.62C16.43 8.67 16.18 9.45 16.1 9.64C16.6 10.17 16.9 10.85 16.9 11.68C16.9 14.59 15.1 15.22 13.39 15.4C13.68 15.65 13.94 16.13 13.94 16.86V18.76C13.94 18.95 14.08 19.17 14.47 19.11C17.43 18.12 19.57 15.31 19.57 12C19.57 7.86 16.21 4.5 12 4.5Z"
                              fill="currentColor"
                            />
                          </svg>
                        ) : null}
                        {link.label === "LinkedIn" ? (
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
                        ) : null}
                        {link.label === "Facebook" ? (
                          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                            <path
                              d="M13.2 20V12.7H15.7L16.1 9.9H13.2V8.1C13.2 7.29 13.44 6.74 14.6 6.74H16.2V4.24C15.92 4.2 14.96 4.12 13.84 4.12C11.5 4.12 9.9 5.48 9.9 8V9.9H7.5V12.7H9.9V20H13.2Z"
                              fill="currentColor"
                            />
                          </svg>
                        ) : null}
                        {link.label === "Fiverr" ? (
                          <span className="text-lg font-bold lowercase leading-none">
                            fi
                          </span>
                        ) : null}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-shell rounded-[2.2rem] border p-4 sm:p-6">
              <div className="mb-5">
                <p className="contact-label font-mono text-xs uppercase tracking-[0.3em]">
                  Send A Message
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative flex-1 overflow-x-hidden">
      <div className="background-base pointer-events-none absolute inset-0 -z-30" />
      <div className="background-grid pointer-events-none absolute inset-0 -z-20 opacity-50" />
      <div className="ambient-orb ambient-orb-one pointer-events-none absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full" />
      <div className="ambient-orb ambient-orb-two pointer-events-none absolute right-[-6rem] top-[28rem] -z-10 h-80 w-80 rounded-full" />
      <div className="ambient-orb ambient-orb-three pointer-events-none absolute left-1/3 top-[70rem] -z-10 h-64 w-64 rounded-full" />
      <Navbar items={navItems} />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
