import { HeroSection } from '@/components/about/HeroSection';
import { HeritageSection } from '@/components/about/HeritageSection';
import { VisionSection } from '@/components/about/VisionSection';
import { MissionSection } from '@/components/about/MissionSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { AboutCTA } from '@/components/about/AboutCTA';

export default function VizyonMisyonPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <HeritageSection />
      <VisionSection />
      <MissionSection />
      <ProcessSection />
      <AboutCTA />
    </div>
  );
}
