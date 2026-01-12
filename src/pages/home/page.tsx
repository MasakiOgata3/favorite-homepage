
import { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import ServiceSection from './components/ServiceSection';
import ToolSelectionSection from './components/ToolSelectionSection';
import CurriculumSection from './components/CurriculumSection';
import EnvironmentSection from './components/EnvironmentSection';
import CompanySection from './components/CompanySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <main>
        <HeroSection />
        <MissionSection />
        <ServiceSection />
        <ToolSelectionSection />
        <CurriculumSection />
        <EnvironmentSection />
        <CompanySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
