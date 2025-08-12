import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Navigation from '@/components/Navigation';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <>
    {/* <Navigation /> */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </>
  );
}