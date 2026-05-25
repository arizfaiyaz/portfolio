"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import type { VisitorResponse } from "@/types/portfolio";

function formatOrdinal(value: number) {
  const mod100 = value % 100;

  if (mod100 >= 11 && mod100 <= 13) {
    return `${value}th`;
  }

  switch (value % 10) {
    case 1:
      return `${value}st`;
    case 2:
      return `${value}nd`;
    case 3:
      return `${value}rd`;
    default:
      return `${value}th`;
  }
}

function QuoteSkeleton() {
  return (
    <Card className="grid gap-5 p-5 md:grid-cols-[1fr_auto] md:items-center">
      <div className="space-y-3">
        <div className="h-4 w-full max-w-xl animate-pulse rounded-full bg-muted" />
        <div className="h-4 w-2/3 animate-pulse rounded-full bg-muted" />
        <div className="h-4 w-28 animate-pulse rounded-full bg-muted" />
      </div>
      <div className="h-9 w-44 animate-pulse rounded-full bg-muted" />
    </Card>
  );
}

export function DynamicQuoteVisitor() {
  const [data, setData] = useState<VisitorResponse | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadVisitor() {
      try {
        const response = await fetch("/api/visitor", { cache: "no-store" });

        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as VisitorResponse;

        if (mounted) {
          setData(payload);
        }
      } catch {
        if (mounted) {
          setData(null);
        }
      }
    }

    loadVisitor();

    return () => {
      mounted = false;
    };
  }, []);

  if (!data) {
    return <QuoteSkeleton />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="grid gap-5 p-5 md:grid-cols-[1fr_auto] md:items-center">
        <blockquote>
          <p className="text-sm leading-6 text-muted-foreground">
            &quot;{data.quote.text}&quot;
          </p>
          <footer className="mt-2 text-sm font-medium">
            — {data.quote.author}
          </footer>
        </blockquote>
        <p className="w-fit rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
          You are the {formatOrdinal(data.visitorNumber)} visitor
        </p>
      </Card>
    </motion.div>
  );
}
