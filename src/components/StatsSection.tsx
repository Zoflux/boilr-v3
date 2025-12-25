import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLine, setActiveLine] = useState(0);

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

  // Animated line highlighting
  useEffect(() => {
    if (!isVisible) return;

    const lines = 4;
    let currentLine = 0;

    const interval = setInterval(() => {
      currentLine = (currentLine + 1) % lines;
      setActiveLine(currentLine);
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const statements = [
    "Finding opportunities before anyone else.",
    "Enriching leads with verified contact data.",
    "Scoring every prospect by intent and fit.",
    "Automatically."
  ];

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-[#f8f9fa]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">

        {/* Subtitle */}
        <p className={`text-gray-900 text-base sm:text-lg font-medium mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Turn your recruitment process into a machine that never stops working.
        </p>

        {/* Animated Statements */}
        <div className="space-y-2 sm:space-y-3 mb-12">
          {statements.map((statement, index) => (
            <p
              key={index}
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-700 ${isVisible ? "translate-y-0" : "translate-y-8"
                } ${activeLine === index
                  ? "text-gray-900"
                  : "text-gray-300"
                }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                opacity: isVisible ? 1 : 0
              }}
            >
              {/* Special gradient animation for last word on active line */}
              {index === statements.length - 1 ? (
                <span className={`transition-all duration-500 ${activeLine === index ? "bg-gradient-to-r from-[#10b981] via-[#5fff9e] to-[#10b981] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient" : ""}`}>
                  {statement}
                </span>
              ) : (
                statement
              )}
            </p>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "600ms" }}>
          <a
            href="/roi-calculator"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-[#5fff9e] hover:bg-[#4de88a] shadow-lg shadow-[#5fff9e]/25 transition-all duration-200 hover:scale-105"
          >
            Calculate Your ROI
          </a>
        </div>

      </div>

      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-gradient {
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
