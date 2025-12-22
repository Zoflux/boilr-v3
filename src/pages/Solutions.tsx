import { useState } from "react";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { Footer } from "@/components/Footer";
import { NavigationHeader } from "@/components/NavigationHeader";
import { PlatformToggle } from "@/components/PlatformToggle";
import { SolutionSection } from "@/components/SolutionSection";
import TransitionSection from "@/components/TransitionSection";
import ClosingSection from "@/components/ClosingSection";

type SolutionMode = "discovery" | "signals";

const Solutions = () => {
  const [mode, setMode] = useState<SolutionMode>("discovery");

  return (
    <div className="min-h-screen bg-background text-black">
      <CursorSpotlight size={420} />
      <NavigationHeader />

      <main className="pt-10 sm:pt-12 pb-14 sm:pb-16">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-black/60">
            Solutions
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Two ways boilr keeps recruiters ahead
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-black/70 max-w-3xl mx-auto">
            Explore Discovery and Signals — from always-on sourcing to live market signals without a single product screenshot.
          </p>
        </section>

        <div className="mt-8 sm:mt-10">
          <PlatformToggle activeMode={mode} onModeChange={setMode} />
        </div>

        <section className="mt-4">
          <SolutionSection mode={mode} />
        </section>

        <section className="mt-2">
          <TransitionSection />
        </section>

        <section>
          <ClosingSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
