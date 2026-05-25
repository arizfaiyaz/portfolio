"use client";

import { motion } from "framer-motion";
import { ContactCard } from "@/components/portfolio/contact-card";
import { SectionLabel } from "@/components/portfolio/section-label";
import { fadeUp } from "@/components/variants/motion-variants";

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <SectionLabel>LET&apos;S WORK TOGETHER</SectionLabel>
      <ContactCard />
    </motion.section>
  );
}
