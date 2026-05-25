"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionLabel } from "@/components/portfolio/section-label";
import { fadeUp, staggerContainer } from "@/components/variants/motion-variants";
import { funProjects, seriousProjects } from "@/data/projects";

type ProjectType = "serious" | "fun";

const projectTabs: Array<{ label: string; value: ProjectType }> = [
  { label: "Serious Projects", value: "serious" },
  { label: "Fun Projects", value: "fun" },
];

export function ProjectsSection() {
  const [activeType, setActiveType] = useState<ProjectType>("serious");
  const visibleProjects =
    activeType === "serious" ? seriousProjects : funProjects;

  return (
    <motion.section
      id="projects"
      className="py-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <SectionLabel>FEATURED PROJECTS</SectionLabel>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {projectTabs.map((tab) => {
          const isActive = activeType === tab.value;

          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveType(tab.value)}
              className={
                isActive
                  ? "rounded-full border border-foreground/25 bg-foreground px-3.5 py-1.5 text-sm font-medium text-background transition"
                  : "rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition hover:border-foreground/20 hover:text-foreground"
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <motion.div
        key={activeType}
        className="mt-6 grid gap-4 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {visibleProjects.map((project) => (
          <motion.div key={project.title} variants={fadeUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
