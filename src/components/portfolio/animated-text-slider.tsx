"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const intervalMs = 2200;

export function AnimatedTextSlider({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const currentItem = items[index] ?? "";

  useEffect(() => {
    if (items.length <= 1 || prefersReducedMotion) {
      return;
    }

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [items.length, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <p className={cn("mt-3 h-8 text-xl text-muted-foreground", className)}>
        {currentItem}
      </p>
    );
  }

  return (
    <div
      className={cn("relative mt-3 h-8 overflow-hidden text-xl text-muted-foreground", className)}
      aria-live="polite"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.p
          key={currentItem}
          className="absolute inset-x-0 top-0 leading-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {currentItem}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
