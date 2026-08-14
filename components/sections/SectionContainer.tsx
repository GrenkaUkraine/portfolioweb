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
      className={cn(
        isHero ? "h-dvh" : "md:h-dvh",
        "md:snap-start flex flex-col items-center justify-center layout-page relative",
        !isHero && [
          "md:pt-[var(--header-height,60px)] md:pb-[var(--footer-height,60px)]",
          "py-10",
        ],
        className
      )}
    >
      <div className="w-full flex-1 flex flex-col justify-center min-h-0 max-h-full">
        {children}
      </div>
    </section>
  );
}
