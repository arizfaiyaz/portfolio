"use client";

import { cn } from "@/lib/utils";

export type ContributionActivity = {
  date: string;
  count: number;
  level: number;
};

function formatContributionDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export function getContributionTooltipLabel(activity: ContributionActivity) {
  const count = activity.count;
  const contributionText =
    count === 0
      ? "No contributions"
      : `${count} contribution${count === 1 ? "" : "s"}`;

  return `${contributionText} on ${formatContributionDate(activity.date)}`;
}

export function ContributionTooltip({
  activity,
  x,
  y,
  visible,
}: {
  activity: ContributionActivity | null;
  x: number;
  y: number;
  visible: boolean;
}) {
  if (!activity) {
    return null;
  }

  return (
    <div
      className={cn(
        "pointer-events-none fixed z-50 -translate-x-1/2 rounded-lg border border-border bg-foreground px-3 py-1.5 text-xs text-background shadow-sm transition-opacity dark:bg-background dark:text-foreground",
        visible ? "opacity-100" : "opacity-0",
      )}
      style={{ left: x, top: y - 38 }}
      role="tooltip"
    >
      {getContributionTooltipLabel(activity)}
    </div>
  );
}
