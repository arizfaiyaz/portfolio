"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/portfolio/section-label";
import { TechIcon } from "@/components/portfolio/tech-icon";
import { TooltipProvider } from "@/components/ui/tooltip";
import { fadeUp, staggerContainer } from "@/components/variants/motion-variants";
import { techStack } from "@/data/tech-stack";

export function TechStackSection() {
  return (
    <motion.section
      className="py-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <SectionLabel>TECH STACK</SectionLabel>
      <TooltipProvider delayDuration={80}>
        <motion.div
          className="flex flex-wrap items-center gap-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techStack.map((item) => (
            <motion.div key={item.name} variants={fadeUp}>
              <TechIcon item={item} />
            </motion.div>
          ))}
        </motion.div>
      </TooltipProvider>
    </motion.section>
  );
}
