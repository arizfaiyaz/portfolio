import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}
