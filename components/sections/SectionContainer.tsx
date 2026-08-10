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
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen md:h-screen md:snap-start flex flex-col items-center justify-between layout-page pb-[12px] md:pb-[36px]",
        className
      )}
    >
      {children}
    </section>
  );
}
