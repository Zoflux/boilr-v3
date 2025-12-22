import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { NavigationHeader } from "@/components/NavigationHeader";
import { HeroSection } from "@/components/HeroSection";
import LogoOutcomeSection from "@/components/LogoOutcomeSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ConsolidationSection } from "@/components/ConsolidationSection";
import { Footer } from "@/components/Footer";
import ClosingSection from "@/components/ClosingSection";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { FAQSection, shortFAQs } from "@/components/FAQSection";

/**
 * Main Index page component
 *
 * This component manages the main landing page with dual modes (sales/recruitment).
 * It handles URL parameters to support deep linking and navigation from legal pages.
 * The page ensures proper scroll behavior and mode synchronization.
 */
const Index = () => {
  const [searchParams] = useSearchParams();
  const [activeMode, setActiveMode] = useState<"sales" | "recruitment">("recruitment");

  useEffect(() => {
    const modeParam = searchParams.get("mode");
    if (modeParam === "sales" || modeParam === "recruitment") {
      setActiveMode(modeParam);
    }

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [searchParams]);

  const handleModeChange = (mode: "sales" | "recruitment") => {
    setActiveMode(mode);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <CursorSpotlight size={180} />

      <NavigationHeader mode={activeMode} onModeChange={handleModeChange} />

      <main role="main" className="[&>section]:scroll-mt-20 [&>section]:pt-0 [&>section]:pb-0">
        <section aria-label="Hero section" className="-mt-20 sm:-mt-24 md:-mt-28 pb-8 sm:pb-10 md:pb-12">
          <HeroSection mode={activeMode} />
        </section>

        <section aria-label="Client logos" className="pb-0">
          <ClientLogosSection />
        </section>

        <section id="logos-outcomes" aria-label="Logos and Outcomes" className="pb-10 sm:pb-12 md:pb-14">
          <LogoOutcomeSection />
        </section>

        <section id="problem" aria-label="Problem" className="py-0">
          <ProblemSection />
        </section>

        <section id="solution" aria-label="Solution" className="py-6 sm:py-8 md:py-12">
          <SolutionSection mode={activeMode} />
        </section>

        <section id="consolidation" aria-label="Consolidation" className="py-0">
          <ConsolidationSection mode={activeMode} />
        </section>

        <section aria-label="FAQ">
          <FAQSection faqs={shortFAQs} />
        </section>

        <section aria-label="Closing" className="pt-0">
          <ClosingSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
