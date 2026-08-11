import React from "react";
import { cn } from "@/lib/utils";
import Text from "@/components/ui/Text";
import { NAV_LINKS } from "@/config/links";

export interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;

  index?: string;
  title?: string;
  note?: string;
  activeSection?: string;
  showFooterNav?: boolean;
}

export default function SectionContainer({
  children,
  id,
  className,
  index,
  title,
  note,
  activeSection,
  showFooterNav = true,
}: SectionContainerProps) {
  const hasHeader = Boolean(title);

  const currentKey = activeSection || id;
  const currentIndex = NAV_LINKS.findIndex(
    (item) => item.href.replace("#", "") === currentKey
  );

  const nextHref =
    currentIndex !== -1 && currentIndex < NAV_LINKS.length - 1
      ? NAV_LINKS[currentIndex + 1].href
      : undefined;

  const prevHref =
    currentIndex > 0 ? NAV_LINKS[currentIndex - 1].href : "#hero";

  return (
    <section
      id={id}
      className={cn(
        "min-h-screen md:h-screen md:snap-start flex flex-col items-center justify-between layout-page pb-[12px] md:pb-[36px]",
        hasHeader && "gap-8",
        className
      )}
    >
      {hasHeader && (
        <header className="w-full flex items-center gap-5">
          <div className="flex items-center gap-2">
            {index && (
              <Text variant="buttons" color="subtle">
                {index} {"//"}
              </Text>
            )}
            <Text variant="buttons" color="subtle">
              {title}
            </Text>
          </div>

          {note && <Text variant="buttons">{note}</Text>}
        </header>
      )}

      {hasHeader ? (
        <div className="w-full flex-1 flex flex-col justify-center min-h-0">
          {children}
        </div>
      ) : (
        children
      )}

      {hasHeader && (
        <footer className="w-full flex items-center justify-between">
          <Text variant="tag" color="muted">
            Scroll{" "}
            {nextHref ? (
              <a
                href={nextHref}
                className="hover:text-fg hover:underline transition-colors"
              >
                down
              </a>
            ) : (
              <span className="text-fg-50 cursor-not-allowed">down</span>
            )}
            /
            {prevHref ? (
              <a
                href={prevHref}
                className="hover:text-fg hover:underline transition-colors"
              >
                up
              </a>
            ) : (
              <span className="text-fg-50 cursor-not-allowed">up</span>
            )}
          </Text>
          {showFooterNav && (
            <nav className="flex items-center gap-3">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");

                return (
                  <a key={item.id} href={item.href}>
                    <Text
                      variant="system"
                      className={cn(
                        "transition-colors hover:text-fg",
                        isActive ? "text-fg" : "text-fg-50"
                      )}
                    >
                      [{item.label}]
                    </Text>
                  </a>
                );
              })}
            </nav>
          )}
        </footer>
      )}
    </section>
  );
}
