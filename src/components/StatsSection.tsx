import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);

  // Intersection observer for when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animated word highlighting - cycles through key words
  useEffect(() => {
    if (!isVisible) return;

    const totalHighlights = 4;
    let current = 0;

    const interval = setInterval(() => {
      current = (current + 1) % totalHighlights;
      setHighlightIndex(current);
    }, 1800);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Highlight specific words in each line
  const renderLine = (text: string, highlightWord: string, lineIndex: number) => {
    const parts = text.split(highlightWord);
    const isActive = highlightIndex === lineIndex;

    return (
      <span>
        {parts[0]}
        <span className={`relative inline-block transition-all duration-500 ${isActive ? "text-[#5fff9e]" : "text-gray-900"}`}>
          {highlightWord}
          {isActive && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5fff9e] animate-pulse" />
          )}
        </span>
        {parts[1]}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-[#f8f9fa]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Left-aligned content */}
        <div className="max-w-2xl">

          {/* Subtitle */}
          <p className={`text-gray-600 text-sm font-medium mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Turn your recruitment process into a machine that never stops working.
          </p>

          {/* Animated Statements - smaller, left aligned */}
          <div className="space-y-1 mb-8">
            <p
              className={`text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-snug transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "100ms" }}
            >
              {renderLine("Finding opportunities before anyone else.", "opportunities", 0)}
            </p>
            <p
              className={`text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-snug transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "200ms" }}
            >
              {renderLine("Enriching leads with verified contact data.", "verified", 1)}
            </p>
            <p
              className={`text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-snug transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "300ms" }}
            >
              {renderLine("Scoring every prospect by intent and fit.", "intent", 2)}
            </p>
            <p
              className={`text-xl sm:text-2xl md:text-3xl font-semibold leading-snug transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <span className={`transition-colors duration-500 ${highlightIndex === 3 ? "text-[#5fff9e]" : "text-gray-900"}`}>
                Automatically.
              </span>
            </p>
          </div>

          {/* CTA Button - smaller, more angular, left aligned */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "500ms" }}>
            <a
              href="/roi-calculator"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-black bg-[#5fff9e] hover:bg-[#4de88a] transition-all duration-200"
            >
              Calculate Your ROI
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
