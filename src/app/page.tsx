import { ContactSection } from "@/components/portfolio/contact-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SiteHeader } from "@/components/portfolio/site-header";
import { StackSection } from "@/components/portfolio/stack-section";

export default function Home() {
  return (
    <main className="px-3 pb-12 pt-3 sm:px-6 sm:pb-16 sm:pt-4 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <SiteHeader />
        <HeroSection />
        <ExperienceSection />
        <StackSection />
        <ProjectsSection />
        <ContactSection />

        <footer className="surface-panel flex flex-col items-center gap-4 rounded-4xl px-5 py-5 text-center sm:px-8">
          <p className="max-w-xl text-sm leading-6 text-muted">
            © 2026 Maynard Toong.
          </p>
        </footer>
      </div>
    </main>
  );
}
