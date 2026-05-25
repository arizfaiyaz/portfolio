import type { Project } from "@/types/portfolio";

export const seriousProjects: Project[] = [
  {
    title: "Arcalist",
    description:
      "A published Chrome extension that replaces the default new tab with a visual bookmark workspace using pages, boards, drag-and-drop organization, import/export, privacy mode, cloud sync, and Pro feature gating.",
    image: "/images/projects/arcalist.png",
    tech: [
      "React.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Chrome Extension",
      "Dodo Payments",
    ],
    githubUrl: "https://github.com/arizfaiyaz/arcalist",
    liveUrl: "https://arcalist.app",
    featured: true,
  },
  {
    title: "Log Analyzer",
    description:
      "A command-line log analysis tool written in C for parsing large log files, identifying common errors, matching patterns, analyzing request types, and extracting usage trends.",
    image: "/images/projects/loganalyser.png",
    tech: ["C", "Makefile", "Git", "Linux"],
    githubUrl: "https://github.com/arizfaiyaz/Log_analyser",
    liveUrl: "",
    featured: true,
  },
  {
    title: "FAHHH on Error",
    description:
      "A VS Code extension that detects failed terminal commands and task executions, then triggers an audio alert for build, test, or command failures with real-time exit-code detection and debounced cross-platform sound playback.",
    image: "/images/projects/faahonerror.png",
    tech: ["TypeScript", "VS Code Extension API", "Node.js", "Git", "Linux"],
    githubUrl: "https://github.com/arizfaiyaz/faahonerror",
    liveUrl: "https://marketplace.visualstudio.com/items?itemName=arizdev.faahonerror",
    featured: true,
  },
];
