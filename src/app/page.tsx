import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import InternshipSection from "@/components/InternshipSection";
import TrainingSection from "@/components/TrainingSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import HackathonsSection from "@/components/HackathonsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <InternshipSection />
      <TrainingSection />
      <ProjectsSection />
      <CertificationsSection />
      <AchievementsSection />
      <HackathonsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
