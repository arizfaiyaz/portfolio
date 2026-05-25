import { createSocials } from "@/data/socials";
import type { Profile } from "@/types/portfolio";

const githubUsername = "arizfaiyaz";
const email = "arizfaiyazwork@gmail.com";
const xUrl = "https://x.com/thatnerdwalaguy";
const linkedinUrl = "https://www.linkedin.com/in/ariz-faiyaz/";

export const profile: Profile = {
  name: "Ariz Faiyaz",
  title: "Full-Stack Developer",
  subtitle: "Backend-focused builder",
  location: "India",
  email,
  pronouns: "he/him",
  githubUsername,
  xUrl,
  linkedinUrl,
  calendarUrl: "https://cal.com/ariz-nerd-vlsr3j/30min",
  currentlyBuilding:
    "Currently building — Arcalist, a visual bookmark manager for focused browsing.",
  bio: "I build full-stack web products end-to-end, with a strong focus on backend systems, clean APIs, scalable architecture, and product ownership. Currently working with TypeScript, React, Next.js, Node.js, PostgreSQL, and modern developer tooling.",
  socials: createSocials(githubUsername, email),
};
