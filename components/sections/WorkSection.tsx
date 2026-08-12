import SectionContainer from "@/components/sections/SectionContainer";
import { FEATURED_PROJECTS } from "@/config/constants";
import Text from "@/components/ui/Text";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";

export default function WorkSection() {
  return (
    <SectionContainer
      id="work"
      index="01"
      title="Work"
      note="3 Featured Projects"
      activeSection="work"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
        {FEATURED_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        <ProjectCard isLast />
      </div>
    </SectionContainer>
  );
}
