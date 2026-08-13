import React from "react";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";

export interface ProjectCardProps {
  project?: Project;
  variant?: "default" | "small";
  isLast?: boolean;
  className?: string;
}

export default function ProjectCard({
  project,
  variant = "default",
  isLast,
  className,
}: ProjectCardProps) {
  const isSmall = variant === "small";

  const containerPadding = isSmall ? "p-3 md:p-5" : "p-5 md:p-8";

  const titleVariant = isSmall ? "h3" : "h2";

  if (isLast) {
    return (
      <div
        className={cn(
          "border border-dashed border-fg-50 flex flex-col items-center justify-center text-center gap-1",
          containerPadding,
          className
        )}
      >
        <Text variant={titleVariant} as="h2" className="mb-2">
          THAT&#39;S ALL :(
        </Text>
        <Text variant="system" color="subtle">
          But maybe there is something else on
        </Text>
        <a
          href="https://github.com/GrenkaUkraine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text
            variant="system"
            color="muted"
            className="hover:text-fg hover:underline"
          >
            [GITHUB]
          </Text>
        </a>
        <Text variant="system" color="subtle">
          or on
        </Text>
        <a href="#playground">
          <Text
            variant="system"
            color="muted"
            className="hover:text-fg hover:underline"
          >
            2 &gt; Playground
          </Text>
        </a>
      </div>
    );
  }

  if (!project) return null;

  return (
    <div
      className={cn(
        "border border-fg-50 flex flex-col justify-between relative group overflow-hidden",
        containerPadding,
        className
      )}
    >
      {project.image && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src={project.image}
            alt={`Render of ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover blur-md scale-110"
          />

          <div className="absolute inset-0 z-10 bg-black/30" />

          <div
            className="absolute inset-0 z-20"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, #000000 80%)",
            }}
          />
        </div>
      )}
      <div className="relative z-10">
        {variant === "small" && project.tag && (
          <Text variant="tag" color="subtle" className="mb-1">
            {project.tag}
          </Text>
        )}
        <div className="flex items-start justify-between gap-2 mb-2">
          <Text variant={titleVariant} as="h2">
            {project.title}
          </Text>
          {project.note && (
            <Text
              variant="system"
              color="subtle"
              className="text-right whitespace-pre-line"
            >
              {project.note}
            </Text>
          )}
        </div>
        <Text variant="system" color="muted">
          {project.description}
        </Text>
      </div>

      <div className="relative z-10 flex items-end justify-between gap-4">
        <div>
          <Text variant="tag" color="subtle" className="mb-1 block">
            Stack:
          </Text>
          <Text variant="buttons">[ {project.stack.join(" / ")} ]</Text>
        </div>

        <div className="flex flex-col items-end gap-1">
          {project.links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text
                variant="system"
                color="muted"
                className="transition-colors hover:text-fg"
              >
                {link.title}
              </Text>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
