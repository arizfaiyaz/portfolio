import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { TechStackItem } from "@/types/portfolio";

const fallbackIconSlugs = new Set(["neondb", "zod"]);

export function TechIcon({ item }: { item: TechStackItem }) {
  const iconPath = `/icons/tech/${item.iconSlug}.svg`;
  const useFallback = fallbackIconSlugs.has(item.iconSlug);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/60 p-2 transition duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted/60"
          aria-label={item.name}
        >
          {useFallback ? (
            <span className="font-mono text-xs text-muted-foreground">
              {item.fallbackLabel}
            </span>
          ) : (
            <Image
              src={iconPath}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 object-contain transition-transform duration-200 group-hover:scale-105"
              aria-hidden="true"
            />
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <span>{item.name}</span>
      </TooltipContent>
    </Tooltip>
  );
}
