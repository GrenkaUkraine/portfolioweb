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

  const hasImage = Boolean(project.image);

  return (
    <div
      className={cn(
        "border border-fg-50 flex flex-col md:justify-between gap-6 md:gap-0 relative group overflow-hidden",
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
            className="object-cover blur-md scale-110 transition-all duration-500 group-hover:blur-none group-hover:scale-100"
          />

          <div className="absolute inset-0 z-10 bg-black/30 transition-opacity duration-500 group-hover:opacity-0" />

          <div
            className="absolute inset-0 z-20 transition-opacity duration-500 group-hover:opacity-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, #000000 80%)",
            }}
          />
        </div>
      )}
      <div
        className={cn(
          "relative z-10 transition-all duration-500",
          hasImage &&
            "group-hover:opacity-0 group-hover:blur-md group-hover:pointer-events-none"
        )}
      >
        {variant === "small" && project.tag && (
          <Text variant="tag" color="subtle" className="mb-1">
            {project.tag}
          </Text>
        )}
        <div className="flex flex-col md:flex-row items-start justify-between gap-2 mb-2">
          <Text variant={titleVariant} as="h2">
            {project.title}
          </Text>
          {project.note && (
            <Text
              variant="system"
              color="subtle"
              className="md:text-right md:whitespace-pre-line w-full md:w-auto"
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
        <div
          className={cn(
            "transition-all duration-500",
            hasImage &&
              "group-hover:opacity-0 group-hover:blur-md group-hover:pointer-events-none"
          )}
        >
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
              className="transition-colors  group-hover:bg-fg hover:cursor-pointer py-0.5 group-hover:border-fg border-2 border-transparent"
            >
              <Text
                variant="system"
                color="muted"
                className="transition-colors text-right group-hover:text-bg hover:underline"
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
