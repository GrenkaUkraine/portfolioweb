import React from "react";
import { cn } from "@/lib/utils";

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

  return (
    <section
      id={id}
      style={
        !isHero
          ? {
              paddingTop: "var(--header-height, 60px)",
              paddingBottom: "var(--footer-height, 60px)",
            }
          : undefined
      }
      className={cn(
        "min-h-screen md:h-screen md:snap-start flex flex-col items-center justify-center layout-page",
        className
      )}
    >
      <div className="w-full flex-1 flex flex-col justify-center min-h-0 max-h-full overflow-hidden">
        {children}
      </div>
    </section>
  );
}
