import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-2xl border border-border bg-card text-card-foreground",
  {
    variants: {
      variant: {
        default: "shadow-none",
        interactive:
          "transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-subtle",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-5",
        lg: "p-6",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  },
);
