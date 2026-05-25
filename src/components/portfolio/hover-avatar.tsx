"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type HoverAvatarProps = {
  className?: string;
};

export function HoverAvatar({ className }: HoverAvatarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const idleSrc = "/images/ariz-avatar-idle.png";
  const waveSrc = "/images/ariz-avatar-wave.gif";

  return (
    <Card className={cn("relative overflow-hidden p-4", className)}>
      <div className="aspect-square rounded-2xl border border-border bg-[radial-gradient(circle_at_top_left,hsl(var(--muted))_0,transparent_42%),linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:100%_100%,24px_24px,24px_24px] p-5">
        <div
          tabIndex={0}
          className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-background/80 outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-ring"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          aria-label="Ariz Faiyaz avatar"
        >
          <img
            src={isHovered ? waveSrc : idleSrc}
            alt="Ariz Faiyaz avatar"
            className="h-full w-full object-contain"
            draggable={false}
          />
          <img src={waveSrc} alt="" aria-hidden="true" className="hidden" />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">India</span>
        <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
          Available
        </span>
      </div>
    </Card>
  );
}
