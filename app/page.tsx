import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="w-full md:h-screen md:overflow-y-auto md:snap-y md:snap-mandatory custom-scrollbar scroll-smooth">
      <HeroSection />
    </main>
  );
}
