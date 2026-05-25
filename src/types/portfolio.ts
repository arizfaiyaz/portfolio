export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  pronouns: string;
  bio: string;
  githubUsername: string;
  xUrl: string;
  linkedinUrl: string;
  calendarUrl: string;
  currentlyBuilding: string;
  socials: SocialLink[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface Experience {
  role: string;
  company: string;
  date: string;
  location: string;
  description: string;
  bullets: string[];
  tech: string[];
}

export interface TechStackItem {
  name: string;
  iconSlug: string;
  category: string;
  fallbackLabel: string;
}

export interface Quote {
  text: string;
  author: string;
}

export interface VisitorResponse {
  isNewVisitor: boolean;
  visitorNumber: number;
  totalVisitors: number;
  quote: Quote;
}
