import SectionContainer from "@/components/sections/SectionContainer";
import { FEATURED_PROJECTS } from "@/config/constants";
import ProjectCard from "@/components/ui/ProjectCard";

export default function WorkSection() {
  return (
    <SectionContainer id="work">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full max-h-full">
        {FEATURED_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        <ProjectCard isLast />
      </div>
    </SectionContainer>
  );
}
