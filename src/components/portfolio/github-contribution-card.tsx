"use client";

import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import { cloneElement } from "react";
import { useState } from "react";
import {
  ContributionTooltip,
  type ContributionActivity,
  getContributionTooltipLabel,
} from "@/components/portfolio/contribution-tooltip";
import { Card } from "@/components/ui/card";

const calendarTheme = {
  light: ["#f3f4f6", "#d1d5db", "#9ca3af", "#6b7280", "#111827"],
  dark: ["#1f2937", "#374151", "#4b5563", "#9ca3af", "#f9fafb"],
};

export function GitHubContributionCard({ username }: { username: string }) {
  const { resolvedTheme } = useTheme();
  const [tooltip, setTooltip] = useState<{
    activity: ContributionActivity | null;
    x: number;
    y: number;
    visible: boolean;
  }>({ activity: null, x: 0, y: 0, visible: false });

  function showTooltip(
    event: { clientX: number; clientY: number },
    activity: ContributionActivity,
  ) {
    setTooltip({
      activity,
      x: event.clientX,
      y: event.clientY,
      visible: true,
    });
  }

  return (
    <Card className="relative overflow-x-auto p-5">
      <GitHubCalendar
        username={username}
        blockSize={11}
        blockMargin={4}
        blockRadius={3}
        fontSize={12}
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        hideColorLegend={false}
        hideMonthLabels={false}
        hideTotalCount={false}
        labels={{
          totalCount: "{{count}} contributions in the last year",
          legend: {
            less: "Less",
            more: "More",
          },
        }}
        theme={calendarTheme}
        renderBlock={(block, activity) =>
          cloneElement(block, {
            "aria-label": getContributionTooltipLabel(activity),
          })
        }
        eventHandlers={{
          onMouseEnter: (event) => (activity) =>
            showTooltip(event as unknown as MouseEvent, activity),
          onMouseMove: (event) => (activity) =>
            showTooltip(event as unknown as MouseEvent, activity),
          onMouseLeave: () => () => {
            setTooltip((current) => ({ ...current, visible: false }));
          },
        }}
      />
      <ContributionTooltip {...tooltip} />
    </Card>
  );
}
