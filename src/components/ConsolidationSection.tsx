import { useEffect, useRef, useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";

interface ConsolidationSectionProps {
  mode: "sales" | "recruitment";
}

export function ConsolidationSection({ mode }: ConsolidationSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const beforeItems = [
    "12+ tabs open at once",
    "Manual copy-paste between tools",
    "Outdated contact information",
    "Signals discovered too late",
    "No way to prioritize leads"
  ];

  const afterItems = [
    "One dashboard, everything automated",
    "Leads enriched and ready to contact",
    "Verified emails and phone numbers",
    "Signals before they hit job boards",
    "AI-scored by fit and intent"
  ];

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <header className={`text-center mb-14 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-600">
            The transformation
          </p>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            From chaos to clarity
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            See what changes when you stop juggling tools and start closing deals.
          </p>
        </header>

        {/* Before / After Comparison */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 relative">

          {/* Arrow between cards on desktop */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-12 h-12 rounded-full bg-[#5fff9e] flex items-center justify-center shadow-lg shadow-[#5fff9e]/30">
              <ArrowRight className="w-5 h-5 text-black" />
            </div>
          </div>

          {/* BEFORE Card */}
          <div
            className={`rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-600 mb-6">
              Before boilr
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              The manual grind
            </h3>

            <ul className="space-y-4">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-3xl font-bold text-gray-400">13+ hours</div>
              <div className="text-sm text-gray-500">spent on research every week</div>
            </div>
          </div>

          {/* AFTER Card */}
          <div
            className={`rounded-2xl border-2 border-[#5fff9e]/40 bg-gradient-to-b from-white to-[#5fff9e]/5 p-6 sm:p-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="inline-flex items-center rounded-full bg-[#5fff9e]/20 px-3 py-1 text-xs font-medium text-[#10b981] mb-6">
              With boilr
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Automatedpipeline
            </h3>

            <ul className="space-y-4">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5fff9e]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#10b981]" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-[#5fff9e]/30">
              <div className="text-3xl font-bold text-[#10b981]">1 hour</div>
              <div className="text-sm text-gray-600">reviewing qualified leads — that's it</div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "400ms" }}>
          <a
            href="https://calendly.com/felix-boilr/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-black bg-[#5fff9e] hover:bg-[#4de88a] shadow-lg shadow-[#5fff9e]/25 transition-all duration-200"
          >
            See boilr in action →
          </a>
        </div>

      </div>
    </section>
  );
}
