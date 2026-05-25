import type { Experience } from "@/types/portfolio";

export const experience: Experience[] = [
  {
    role: "Backend / Full Stack Developer",
    company: "Freelance Developer",
    date: "Dec 2025 - Present",
    location: "Remote",
    description:
      "Building backend and full-stack features for client projects with a focus on reliable APIs, structured data workflows, and production-ready application behavior.",
    bullets: [
      "Built backend features for client projects, including invoice generation, structured billing records, REST APIs, and database-backed workflows.",
      "Implemented request validation, error handling, API rate limiting, and debugging improvements to strengthen backend reliability and application stability.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Databases",
      "API Rate Limiting",
      "Validation",
    ],
  },
  {
    role: "Open Source Software Contributor",
    company: "FreeCodeCamp",
    date: "Jan 2025 - Oct 2025",
    location: "Open Source",
    description:
      "Contributed to FreeCodeCamp’s open-source codebase through feature enhancements, bug fixes, and collaborative development workflows.",
    bullets: [
      "Contributed feature enhancements and bug fixes to FreeCodeCamp’s codebase using JavaScript and modern frontend development practices.",
      "Used Git and GitHub for collaborative development, including branching, pull requests, code reviews, and resolving maintainer feedback.",
    ],
    tech: ["JavaScript", "Git", "GitHub", "Frontend Development"],
  },
];