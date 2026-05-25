import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const hasGitHubUrl = Boolean(project.githubUrl.trim());
  const hasLiveUrl = Boolean(project.liveUrl.trim());

  return (
    <Card className="group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-subtle">
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:22px_22px]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-card/70">
            <div className="rounded-full border border-border bg-background px-4 py-2 font-mono text-xs text-muted-foreground">
              {project.title}
            </div>
          </div>
        )}
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-normal">{project.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>
          </div>
          {(hasGitHubUrl || hasLiveUrl) && (
            <div className="flex shrink-0 items-center gap-2">
              {hasGitHubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="rounded-full p-2 text-muted-foreground transition hover:bg-accent hover:text-foreground"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
              )}
              {hasLiveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live site`}
                  className="rounded-full p-2 text-muted-foreground transition hover:bg-accent hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} className="bg-background text-muted-foreground">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
