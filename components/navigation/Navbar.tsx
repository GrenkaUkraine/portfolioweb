"use client";

import React, { useEffect, useRef, useState } from "react";
import Text from "@/components/ui/Text";
import { NAV_LINKS, SECTION_IDS, SECTIONS_CONFIG } from "@/config/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import SlotText from "@/components/ui/SlotText";

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
      const hHeight = headerEl?.offsetHeight || 0;
      const fHeight = footerEl?.offsetHeight || 0;

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

  const [sections, setSections] = useState({
    prev: activeSection,
    current: activeSection,
  });

  if (sections.current !== activeSection) {
    setSections({
      prev: sections.current,
      current: activeSection,
    });
  }

  const skipAnimation = activeSection === "hero" || sections.prev === "hero";

  return (
    <div className="fixed flex w-full max-w-full inset-0 z-50 pointer-events-none flex-col justify-between">
      <header
        ref={headerRef}
        className={cn(
          "w-full hidden md:flex items-center gap-5 layout-page pb-8 bg-bg transition-all duration-500 ease-out",
          isHero
            ? "opacity-0 -translate-y-4 pointer-events-none"
            : "opacity-100 translate-y-0 pointer-events-auto"
        )}
      >
        {skipAnimation ? (
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Text variant="buttons" color="subtle">
                {currentConfig.index} {"//"}
              </Text>
              <Text variant="buttons" color="subtle">
                {currentConfig.title}
              </Text>
            </div>
            {activeNote && <Text variant="buttons">{activeNote}</Text>}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <div key={activeSection} className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <SlotText
                  text={`${currentConfig.index} //`}
                  variant="buttons"
                  color="subtle"
                />
                <SlotText
                  text={currentConfig.title}
                  variant="buttons"
                  color="subtle"
                />
              </div>

              {activeNote && <SlotText text={activeNote} variant="buttons" />}
            </div>
          </AnimatePresence>
        )}
      </header>

      <div className="md:hidden" />

      <footer
        ref={footerRef}
        className={cn(
          "w-full flex items-center justify-between layout-page md:pt-8 bg-bg md:transition-all md:duration-500 md:ease-out",
          isHero
            ? "pointer-events-auto md:opacity-0 md:translate-y-4 md:pointer-events-none"
            : "pointer-events-auto opacity-100 translate-y-0"
        )}
      >
        <Text variant="tag" color="muted" className="hidden md:block">
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

        <nav className="flex items-center justify-between w-full md:w-auto gap-2 md:gap-3">
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
