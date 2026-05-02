import nafizPortfolioImage from "@/assests/nafiz_portfolio.png";

export const profile = {
  name: "Nafiz Alam",
  designation: "Frontend Developer",
  rotatingDesignations: [
    "Frontend Developer",
    "Web Developer",
    "Creative Coder",
  ],
  headlineLines: [
    "Designing Clear,",
    "Responsive Web",
    "Experiences With",
    "Room For Personality.",
  ],
  intro:
    "This portfolio is set up with polished placeholders so you can launch the structure now and replace the story, photo, resume, and project details when they are ready.",
  photo: nafizPortfolioImage,
  resumeUrl: "#",
  about: [
    "I started learning programming by following my curiosity around how websites feel fast, expressive, and easy to use. That curiosity turned into a habit of building small ideas, breaking them, and rebuilding them with more care each time.",
    "The kind of work I enjoy most sits at the intersection of design and engineering: interfaces that feel smooth, thoughtful systems behind the UI, and projects where details like spacing, copy, and states matter just as much as the logic.",
    "Outside of programming, this placeholder section leaves room for the parts of you that make the portfolio human. You might talk about sports, sketching, gaming, reading, or the way you recharge after deep work and bring that energy back into your projects.",
  ],
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/nafiz2024" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nafiz-alam04/" },
  { label: "Twitter", href: "https://x.com/NafizAlamDev" },
  { label: "Facebook", href: "https://www.facebook.com/nafiz.alam.733/" },
];

export const skillGroups = [
  {
    category: "Frontend",
    title: "Interfaces",
    items: [
      { name: "HTML5", level: 92 },
      { name: "CSS3 / Tailwind", level: 89 },
      { name: "JavaScript", level: 87 },
      { name: "React / Next.js", level: 84 },
    ],
  },
  {
    category: "Backend",
    title: "Application Logic",
    items: [
      { name: "Node.js", level: 76 },
      { name: "Express", level: 74 },
      { name: "REST APIs", level: 81 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    category: "Tools",
    title: "Workflow",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Figma Handoff", level: 72 },
      { name: "Responsive Design", level: 90 },
      { name: "Debugging", level: 80 },
    ],
  },
];

export const education = [
  {
    institution: "Your University Name",
    degree: "BSc in Computer Science and Engineering",
    timeframe: "2021 - 2025",
    details: [
      "Replace this with your actual institution, degree title, and ongoing or completed timeline.",
      "Use this space for achievements such as CGPA, scholarships, thesis focus, or coursework relevant to web development.",
      "If you studied something else after HSC, you can swap the degree without changing the UI.",
    ],
  },
];

export const experience = [
  {
    title: "Frontend Developer Intern",
    organization: "Sample Studio or Company",
    timeframe: "2024",
    highlights: [
      "Contributed to responsive user interface work with close attention to layout consistency across devices.",
      "Collaborated with designers and developers to turn requirements into reusable components and cleaner interaction flows.",
      "This entry is optional later: keep, edit, or remove the experience array to hide the section.",
    ],
  },
];

export const projects = [
  {
    slug: "orbit-storefront",
    name: "Orbit Storefront",
    category: "E-commerce",
    image: "/project-orbit.svg",
    summary:
      "A modern storefront experience focused on clean discovery, strong product presentation, and conversion-friendly flows.",
    stack: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    description:
      "Orbit Storefront is a placeholder case study for an e-commerce platform where users can browse featured collections, inspect product details, and move through a clear purchasing journey. The page structure is designed to make later replacement with your real project details straightforward.",
    liveUrl: "https://example.com/orbit-storefront",
    repoUrl: "https://github.com/your-username/orbit-storefront-client",
    challenges: [
      "Balancing a visually rich shopping interface with fast loading and responsive behavior.",
      "Keeping reusable product UI flexible enough for different content lengths and image ratios.",
      "Designing an experience that remains clear on smaller mobile screens without losing visual polish.",
    ],
    futurePlans: [
      "Add wishlist and filtering improvements.",
      "Refine analytics for product engagement and conversion points.",
      "Expand the admin workflow for content and inventory management.",
    ],
  },
  {
    slug: "pulse-dashboard",
    name: "Pulse Dashboard",
    category: "Dashboard",
    image: "/project-pulse.svg",
    summary:
      "A data-focused dashboard concept with responsive cards, status summaries, and actionable interface patterns.",
    stack: ["React", "Next.js", "Chart UI", "Express"],
    description:
      "Pulse Dashboard stands in for a management or analytics product where users need quick visual clarity, digestible metrics, and a layout that scales from desktop to tablet cleanly. The structure supports a future real case study with minimal code changes.",
    liveUrl: "https://example.com/pulse-dashboard",
    repoUrl: "https://github.com/your-username/pulse-dashboard-client",
    challenges: [
      "Creating dense layouts that still feel calm and readable.",
      "Handling multiple content blocks without making the page feel repetitive.",
      "Keeping interactions discoverable while avoiding unnecessary client-side complexity.",
    ],
    futurePlans: [
      "Introduce role-based views and notification settings.",
      "Improve chart accessibility and empty-state storytelling.",
      "Add export and reporting tools for power users.",
    ],
  },
  {
    slug: "canvas-connect",
    name: "Canvas Connect",
    category: "Community App",
    image: "/project-canvas.svg",
    summary:
      "A community platform concept built around profiles, updates, and a friendly, approachable interaction model.",
    stack: ["Next.js", "Node.js", "MongoDB", "JWT Auth"],
    description:
      "Canvas Connect is a placeholder project for a social or community-focused application. It highlights how you might present a product that combines user profiles, engagement, and future feature growth without overcomplicating the initial story.",
    liveUrl: "https://example.com/canvas-connect",
    repoUrl: "https://github.com/your-username/canvas-connect-client",
    challenges: [
      "Maintaining a consistent visual system across different content types and user-generated states.",
      "Planning for authenticated features while keeping the public-facing experience lightweight.",
      "Designing scalable content cards that feel personal rather than generic.",
    ],
    futurePlans: [
      "Add richer user onboarding and profile customization.",
      "Expand moderation and reporting workflows.",
      "Introduce saved posts and smarter feed personalization.",
    ],
  },
];

export const contact = {
  email: "nafizalam.dev@gmail.com",
  phone: "+8801876566181",
  phoneLink: "+8801876566181",
  whatsapp: "+8801876566181",
  whatsappUrl: "https://wa.me/8801876566181",
};

export const portfolioStats = [
  { label: "Projects Ready", value: projects.length, suffix: "+" },
  { label: "Skill Areas", value: skillGroups.length, suffix: "" },
  {
    label: "Tools Highlighted",
    value: skillGroups.reduce((total, group) => total + group.items.length, 0),
    suffix: "+",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
