"use client";

import React, { useEffect, useRef, useState } from "react";
import Text from "@/components/ui/Text";
import { NAV_LINKS, SECTION_IDS, SECTIONS_CONFIG } from "@/config/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const activeSection = useActiveSection(SECTION_IDS);
  const [dynamicNotes, setDynamicNotes] = useState<Record<string, string>>({});

  const headerRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const headerEl = headerRef.current;
    const footerEl = footerRef.current;

    if (!headerEl || !footerEl) return;

    const observer = new ResizeObserver(() => {
      const hHeight = headerEl.offsetHeight;
      const fHeight = footerEl.offsetHeight;

      document.documentElement.style.setProperty(
        "--header-height",
        `${hHeight}px`
      );
      document.documentElement.style.setProperty(
        "--footer-height",
        `${fHeight}px`
      );
    });

    observer.observe(headerEl);
    observer.observe(footerEl);

    return () => observer.disconnect();
  }, [activeSection]);

  useEffect(() => {
    const handleNoteChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ sectionId: string; note: string }>;
      if (customEvent.detail) {
        setDynamicNotes((prev) => ({
          ...prev,
          [customEvent.detail.sectionId]: customEvent.detail.note,
        }));
      }
    };

    window.addEventListener("section-note-change", handleNoteChange);
    return () =>
      window.removeEventListener("section-note-change", handleNoteChange);
  }, []);

  const isHero = activeSection === "hero";
  const currentConfig =
    SECTIONS_CONFIG[activeSection] || SECTIONS_CONFIG["work"];

  const activeNote = dynamicNotes[activeSection] ?? currentConfig.note;

  const currentIndex = NAV_LINKS.findIndex(
    (item) => item.href.replace("#", "") === activeSection
  );
  const nextHref =
    currentIndex !== -1 && currentIndex < NAV_LINKS.length - 1
      ? NAV_LINKS[currentIndex + 1].href
      : undefined;
  const prevHref =
    currentIndex > 0 ? NAV_LINKS[currentIndex - 1].href : "#hero";

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 pointer-events-none flex flex-col justify-between",
        isHero ? "opacity-0" : "opacity-100"
      )}
    >
      <header
        ref={headerRef}
        className={cn(
          "w-full flex items-center gap-5 layout-page pb-8 bg-bg",
          isHero ? "pointer-events-none" : "pointer-events-auto"
        )}
      >
        <div className="flex items-center gap-2">
          <Text variant="buttons" color="subtle">
            {currentConfig.index} {"//"}
          </Text>
          <Text variant="buttons" color="subtle">
            {currentConfig.title}
          </Text>
        </div>

        {activeNote && <Text variant="buttons">{activeNote}</Text>}
      </header>

      <footer
        ref={footerRef}
        className={cn(
          "w-full flex items-center justify-between layout-page pt-8 bg-bg",
          isHero ? "pointer-events-none" : "pointer-events-auto"
        )}
      >
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
      </footer>
    </div>
  );
}
