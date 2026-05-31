'use client';
import HeroBanner from '@/components/HeroBanner';
import AboutSection from '@/components/AboutSection';
import CompanyStoryTabs from '@/components/CompanyStoryTabs';
import MissionSection from '@/components/MissionSection';
import VisionSection from '@/components/VisionSection';
import TeamSection from '@/components/TeamSection';

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <HeroBanner
        title={
          <>
            About <span className="text-[#E47911]">Our Company</span>
          </>
        }
        currentPage="About"
        showStats={true}
      />
      <AboutSection />
      <MissionSection />
      <VisionSection />
      <CompanyStoryTabs />
      <TeamSection />
    </div>
  );
}
