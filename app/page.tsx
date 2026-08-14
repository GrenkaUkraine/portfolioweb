import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";
import PlaygroundSection from "@/components/sections/PlaygroundSection";
import StackSection from "@/components/sections/StackSection";
import ContactSection from "@/components/sections/ContactSection";
import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-full">
        <HeroSection />
        <WorkSection />
        <PlaygroundSection />
        <StackSection />
        <ContactSection />
      </main>
    </>
  );
}
