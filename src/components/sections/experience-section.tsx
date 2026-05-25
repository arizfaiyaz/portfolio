"use client";

import { motion } from "framer-motion";
import { ExperienceItem } from "@/components/portfolio/experience-item";
import { SectionLabel } from "@/components/portfolio/section-label";
import { fadeUp } from "@/components/variants/motion-variants";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <motion.section
      className="py-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <SectionLabel>EXPERIENCE</SectionLabel>
      <div>
        {experience.map((item, index) => (
          <ExperienceItem
            key={`${item.role}-${item.company}`}
            item={item}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </motion.section>
  );
}
