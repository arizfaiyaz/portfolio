"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function getInitials(name: string) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return initials || "AF";
}

function isConfiguredUsername(githubUsername?: string) {
  return Boolean(
    githubUsername &&
      githubUsername.trim() &&
      githubUsername !== "YOUR_GITHUB_USERNAME",
  );
}

export function GitHubAvatar({
  githubUsername,
  name,
  className,
}: {
  githubUsername?: string;
  name: string;
  className?: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = useMemo(() => getInitials(name), [name]);
  const shouldShowImage = isConfiguredUsername(githubUsername) && !imageFailed;

  return (
    <Card className={cn("relative overflow-hidden p-4", className)}>
      <div className="aspect-square rounded-2xl border border-border bg-[radial-gradient(circle_at_top_left,hsl(var(--muted))_0,transparent_42%),linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:100%_100%,24px_24px,24px_24px] p-5">
        <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-background/80">
          {shouldShowImage ? (
            <Image
              src={`https://github.com/${githubUsername}.png`}
              alt={`${name} GitHub avatar`}
              fill
              priority
              className="object-cover grayscale transition duration-300 hover:grayscale-0"
              sizes="260px"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <span className="font-mono text-5xl font-semibold tracking-normal">
              {initials}
            </span>
          )}
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
