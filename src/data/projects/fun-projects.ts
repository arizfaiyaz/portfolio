import type { Project } from "@/types/portfolio";

export const funProjects: Project[] = [
  {
    title: "A Day Math",
    description:
      "Solve one math problem a day",
    image: "/images/projects/adaymath.png",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/arizfaiyaz/amathquestion",
    liveUrl: "https://adaymath.vercel.app/",
    featured: true,
  },
  {
    title: "Dragon Repeller",
    description:
      "A browser-based game where you control a character to repel a Dragon.",
    image: "/images/projects/dragon.png",
    tech: ["JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/arizfaiyaz/dragon-repeller",
    liveUrl: "dragon-repeller-lac.vercel.app",
    featured: true,
  },
];
