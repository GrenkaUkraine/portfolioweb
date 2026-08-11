"use client";

import { cn } from "@/lib/utils";

interface PageIndicatorProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageIndex: number) => void;
  className?: string;
}

export default function PageIndicator({
  totalPages,
  currentPage,
  onPageChange,
  className,
}: PageIndicatorProps) {
  return (
    <div className={cn("flex flex-col items-center gap-2 z-10", className)}>
      {Array.from({ length: totalPages }).map((_, index) => {
        const isActive = index + 1 === currentPage;

        return (
          <button
            key={index}
            type="button"
            onClick={() => onPageChange(index)}
            className={cn(
              "transition-all duration-300 cursor-pointer fucus:outline-none w-2",
              isActive ? "h-5 bg-fg" : "h-2 bg-fg-50 hover:bg-fg-70"
            )}
          />
        );
      })}
    </div>
  );
}
