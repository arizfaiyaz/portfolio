import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { BlogPost } from "@/data/blogs";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group block">
      <Card className="h-full p-5 transition hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted/30">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold tracking-normal">
              {post.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {post.description}
            </p>
          </div>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-foreground" />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span>{post.date}</span>
          <span aria-hidden="true">/</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} className="bg-background text-muted-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </Card>
    </Link>
  );
}
