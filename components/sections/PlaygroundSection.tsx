"use client";

import SectionContainer from "@/components/sections/SectionContainer";
import { PLAYGROUND_PROJECTS } from "@/config/constants";
import ProjectCard from "@/components/ui/ProjectCard";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import PageIndicator from "@/components/playground/PageIndicator";

export default function PlaygroundSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const isBlockingRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const pageSize = 6;
  const pages = Array.from(
    { length: Math.ceil(PLAYGROUND_PROJECTS.length / pageSize) },
    (_, i) => PLAYGROUND_PROJECTS.slice(i * pageSize, (i + 1) * pageSize)
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("section-note-change", {
          detail: {
            sectionId: "playground",
            note: `Page ${currentPage}/${pages.length}`,
          },
        })
      );
    }

    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (isBlockingRef.current) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [currentPage, pages.length]);

  const blockScroll = () => {
    isBlockingRef.current = true;

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      isBlockingRef.current = false;
    }, 500);
  };

  return (
    <SectionContainer id="playground">
      <div
        ref={containerRef}
        className="relative w-full h-full min-h-0 max-h-full "
      >
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={24}
          speed={400}
          modules={[Mousewheel]}
          mousewheel={{
            forceToAxis: false,
            releaseOnEdges: true,
          }}
          onSlideChangeTransitionStart={() => {
            blockScroll();
          }}
          onSlideChangeTransitionEnd={(swiper: SwiperType) => {
            const page = swiper.activeIndex + 1;
            setCurrentPage(page);
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full h-full overflow-hidden"
        >
          {pages.map((group, pageIndex) => (
            <SwiperSlide key={pageIndex} className="h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-3 h-full">
                {group.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    variant="small"
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <PageIndicator
          totalPages={pages.length}
          currentPage={currentPage}
          onPageChange={(index) => swiperRef.current?.slideTo(index)}
          className="absolute -right-6 md:-right-7 top-1/2 -translate-y-1/2 hidden md:flex"
        />
      </div>
    </SectionContainer>
  );
}
