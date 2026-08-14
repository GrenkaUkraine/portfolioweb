import React from "react";
import { cn } from "@/lib/utils";
import { SECTIONS_CONFIG } from "@/config/constants";
import Text from "@/components/ui/Text";

export interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function SectionContainer({
  children,
  id,
  className,
}: SectionContainerProps) {
  const isHero = id === "hero";
  const sectionConfig = id ? SECTIONS_CONFIG[id] : undefined;

  return (
    <section
      id={id}
      className={cn(
        isHero ? "h-dvh" : "md:h-dvh",
        "md:snap-start max-w-full flex flex-col items-center justify-center layout-page relative",
        !isHero && [
          "md:pt-[var(--header-height,60px)] md:pb-[var(--footer-height,60px)]",
          "py-10",
        ],
        className
      )}
    >
      {!isHero && sectionConfig && (
        <div
          className={cn(
            "md:hidden w-full items-center gap-5 pb-5 bg-bg",
            isHero ? "pointer-events-none" : "pointer-events-auto"
          )}
        >
          <div className="flex items-center gap-2">
            <Text variant="buttons" color="subtle">
              {sectionConfig.index} {"//"}
            </Text>
            <Text variant="buttons" color="subtle">
              {sectionConfig.title}
            </Text>
          </div>
        </div>
      )}

      <div className="w-full flex-1 flex flex-col justify-center min-h-0 max-h-full">
        {children}
      </div>
    </section>
  );
}
