import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { DiffSection } from "@/components/landing/DiffSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-alur-off-white text-alur-charcoal selection:bg-alur-charcoal selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <DiffSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
