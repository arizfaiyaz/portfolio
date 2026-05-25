import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/types/portfolio";

export function ExperienceItem({
  item,
  isLast,
}: {
  item: Experience;
  isLast: boolean;
}) {
  return (
    <div className="grid grid-cols-[28px_1fr] gap-4">
      <div className="relative flex justify-center">
        <span className="mt-2 h-3 w-3 rounded-full border border-foreground/20 bg-background ring-4 ring-background" />
        {!isLast && <span className="absolute top-6 h-full w-px bg-border" />}
      </div>
      <article className="pb-10">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-base font-semibold">
              {item.role} — {item.company}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.location}</p>
          </div>
          <p className="text-sm text-muted-foreground">{item.date}</p>
        </div>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.description}</p>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((tech) => (
            <Badge key={tech} className="bg-background text-muted-foreground">
              {tech}
            </Badge>
          ))}
        </div>
      </article>
    </div>
  );
}
