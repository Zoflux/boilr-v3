import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { NavigationHeader } from "@/components/NavigationHeader";
import { HeroSection } from "@/components/HeroSection";
import LogoOutcomeSection from "@/components/LogoOutcomeSection";
import StatsSection from "@/components/StatsSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ConsolidationSection } from "@/components/ConsolidationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import ClosingSection from "@/components/ClosingSection";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { FAQSection, shortFAQs } from "@/components/FAQSection";

/**
 * Main Index page component
 *
 * Page Structure (redesigned for more substance):
 * 1. Hero (unchanged)
 * 2. Client Logos (social proof)
 * 3. Feature Bento Grid (what boilr does)
 * 4. Stats + ROI (numbers that matter)
 * 5. Pain Points (problems we solve)
 * 6. Solution Section with Radar (how we solve them)
 * 7. Testimonials (real success stories)
 * 8. Before/After Comparison (transformation)
 * 9. FAQ
 * 10. Closing CTA
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
        {/* 1. HERO - unchanged */}
        <section aria-label="Hero section" className="-mt-20 sm:-mt-24 md:-mt-28 pb-8 sm:pb-10 md:pb-12">
          <HeroSection mode={activeMode} />
        </section>

        {/* 2. CLIENT LOGOS - social proof */}
        <section aria-label="Client logos" className="pb-0">
          <ClientLogosSection />
        </section>

        {/* 3. FEATURE BENTO - what boilr does */}
        <section id="features" aria-label="Features">
          <LogoOutcomeSection />
        </section>

        {/* 4. STATS + ROI - numbers that matter */}
        <section id="stats" aria-label="Statistics">
          <StatsSection />
        </section>

        {/* 5. PAIN POINTS - problems we solve */}
        <section id="problem" aria-label="Problem">
          <ProblemSection />
        </section>

        {/* 5. SOLUTION - how boilr works (with Radar) */}
        <section id="solution" aria-label="Solution">
          <SolutionSection mode={activeMode} />
        </section>

        {/* 6. TESTIMONIALS - real success stories */}
        <section id="testimonials" aria-label="Testimonials">
          <TestimonialsSection />
        </section>

        {/* 7. BEFORE/AFTER - the transformation */}
        <section id="transformation" aria-label="Before and After">
          <ConsolidationSection mode={activeMode} />
        </section>

        {/* 8. FAQ */}
        <section aria-label="FAQ">
          <FAQSection faqs={shortFAQs} />
        </section>

        {/* 9. CLOSING CTA */}
        <section aria-label="Closing" className="pt-0">
          <ClosingSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
