import { ContactSection } from "@/components/sections/contact-section";
import { ContributionSection } from "@/components/sections/contribution-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MusicListeningButton } from "@/components/portfolio/music-listening-button";
import { ProjectsSection } from "@/components/sections/projects-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MusicListeningButton />
      <ContributionSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <QuoteSection />
    </>
  );
}
