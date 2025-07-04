import Navigation from '@/components/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background-primary">
      <Navigation />
      
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/8 via-transparent to-accent-secondary/8" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,140,0,0.08),transparent_50%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </div>

      {/* Floating Elements */}
      <ScrollToTop />
    </main>
  )
} 