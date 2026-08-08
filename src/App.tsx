import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';

export default function App() {
  return (
    <div className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}
