import SectionContainer from "@/components/sections/SectionContainer";
import { PLAYGROUND_PROJECTS } from "@/config/links";
import ProjectCard from "@/components/ui/ProjectCard";

export default function PlaygroundSection() {
  return (
    <SectionContainer
      id="playground"
      index="02"
      title="Playground"
      note="Page 1/2"
      activeSection="playground"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full">
        {PLAYGROUND_PROJECTS.map((project) => (
          <ProjectCard variant="small" key={project.id} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}
