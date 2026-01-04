import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import MindsetSection from "@/components/MindsetSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CursorGlow />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CTASection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <MindsetSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;