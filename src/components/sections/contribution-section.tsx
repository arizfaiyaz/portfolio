"use client";

import { motion } from "framer-motion";
import { GitHubContributionCard } from "@/components/portfolio/github-contribution-card";
import { SectionLabel } from "@/components/portfolio/section-label";
import { Card } from "@/components/ui/card";
import { fadeUp } from "@/components/variants/motion-variants";
import { profile } from "@/data/profile";

export function ContributionSection() {
  const hasGitHubUsername =
    Boolean(profile.githubUsername.trim()) &&
    profile.githubUsername !== "YOUR_GITHUB_USERNAME";

  return (
    <motion.section
      className="py-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <SectionLabel className="mb-0">CONTRIBUTIONS</SectionLabel>
        <p className="text-sm text-muted-foreground">
          {hasGitHubUsername
            ? `Public contribution graph for @${profile.githubUsername}`
            : "Public GitHub contribution graph"}
        </p>
      </div>
      {hasGitHubUsername ? (
        <GitHubContributionCard username={profile.githubUsername} />
      ) : (
        <Card className="p-5">
          <div className="grid grid-cols-12 gap-1.5" aria-label="Contribution graph placeholder">
            {Array.from({ length: 84 }).map((_, index) => (
              <span key={index} className="aspect-square rounded-[3px] bg-muted" />
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Add a GitHub username in profile data to load contributions.
          </p>
        </Card>
      )}
    </motion.section>
  );
}
