

import mehedyPortfolioImage from "@/assests/mehedy-portfolio.png";

export const profile = {
  name: "Md. Mehedy Hasan",
  designation: "MERN Stack Developer",
  rotatingDesignations: [
    "MERN Stack Developer",
    "Full-Stack Web Developer",
    "Frontend Developer",
  ],
  headlineLines: [
    "Crafting Clear,",
    "Responsive Web",
    "Experiences With",
    "Room For Personality.",
  ],
  intro:
    "Analytical MERN Stack Developer with a Physics background, bringing a problem-solving mindset to building responsive, high-performance web applications and clean user interfaces.",
  photo: mehedyPortfolioImage,
  resumeUrl: "#",
  about: [
    "I started learning programming by following my curiosity around how software works and how complex systems can feel fast, responsive, and intuitive. My background in Physics has trained my analytical thinking and problem-solving abilities, which I now apply directly to breaking down application logic and debugging states.",
    "The kind of work I enjoy most sits at the intersection of precise engineering and aesthetic design: clean architecture, optimized database relations, and smooth frontend systems where layouts, spacing, and micro-interactions matter just as much as the core logic.",
    "Outside of writing code and designing interfaces, I focus on building functional digital identities. Having an eye for clean, minimalist design elements allows me to bridge the gap between design concepts and production-ready components effectively.",
  ],
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/mehedyPUST" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mehedypust" },
  { label: "Twitter", href: "https://x.com/MehedyPUST" },
  { label: "Facebook", href: "https://www.facebook.com/Me.WZPDCL" },
];

export const skillGroups = [
  {
    category: "Frontend",
    title: "Interfaces",
    items: [
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Tailwind CSS", level: 89 },
      { name: "JavaScript (ES6+)", level: 87 },
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
      { name: "Adobe Creative Suite", level: 82 },
      { name: "C/C++ & FORTRAN", level: 78 },
      { name: "Responsive Design", level: 90 },
    ],
  },
];

export const education = [
  {
    institution: "Pabna University of Science and Technology",
    degree: "BSc in Physics",
    timeframe: "2013 - 2017 (Held in 2019)",
    details: [
      "Graduated with a strong CGPA of 3.40 out of 4.00.",
      "Developed deep analytical research logic and computational problem-solving frameworks through core mathematics and physics courses.",
      "Utilized programming languages like C/C++ and FORTRAN to implement scientific computing models during laboratory modules.",
    ],
  },
];

export const experience = [
  {
    title: "MERN Stack Web Developer",
    organization: "Self-Directed Learning & Projects",
    timeframe: "2025 - Present",
    highlights: [
      "Building full-stack web applications with modern component structures, scalable routing, and optimized user flows.",
      "Implementing RESTful API services, secure data handling, and state management frameworks using the MERN ecosystem.",
      "Translating digital layout concepts into semantic, screen-responsive components with a close eye on design details.",
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
    stack: ["Next.js", "Tailwind CSS", "Express", "MongoDB"],
    description:
      "Orbit Storefront is a full-stack MERN platform where users can browse featured collections, inspect dynamic product components, and experience an intuitive checkout journey. The site uses server-side data synchronization and clean component structures.",
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
    stack: ["React", "Next.js", "Express", "MongoDB"],
    description:
      "Pulse Dashboard delivers an administrative control panel focused on data clarity, state handling, and layout scaling. It provides digestible metrics, performance monitoring states, and responsive data grid representations.",
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
    stack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    description:
      "Canvas Connect acts as a real-time interaction hub combining user dynamic profiles, secure interaction management, and efficient data mutations to power social feed feeds and engagement interfaces safely.",
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
  email: "mehedy.pust@gmail.com",
  phone: "+8801751479474",
  phoneLink: "+8801751479474",
  whatsapp: "+8801751479474",
  whatsappUrl: "https://wa.me/8801751479474",
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