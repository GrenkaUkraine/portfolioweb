import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";
import PlaygroundSection from "@/components/sections/PlaygroundSection";
import StackSection from "@/components/sections/StackSection";

export default function Home() {
  return (
    <main className="w-full md:h-screen md:overflow-y-auto md:snap-y md:snap-mandatory custom-scrollbar scroll-smooth">
      <HeroSection />
      <WorkSection />
      <PlaygroundSection />
      <StackSection />
    </main>
  );
}
