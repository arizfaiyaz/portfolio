"use client";

import { motion } from "framer-motion";
import { DynamicQuoteVisitor } from "@/components/portfolio/dynamic-quote-visitor";
import { fadeUp } from "@/components/variants/motion-variants";

export function QuoteSection() {
  return (
    <motion.section
      className="py-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <DynamicQuoteVisitor />
    </motion.section>
  );
}
