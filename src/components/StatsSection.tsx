import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLine, setActiveLine] = useState(0);

  // Intersection observer
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

  const statements = [
    "Finding opportunities before anyone else.",
    "Enriching leads with verified contact data.",
    "Scoring every prospect by intent and fit.",
    "Automatically."
  ];

  // Sequential line rotation
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % statements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-[#f8f9fa] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="max-w-3xl mx-auto">
          {/* Subtitle */}
          <p className={`text-gray-800 text-base sm:text-lg font-medium mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Turn your recruitment process into a machine that never stops working.
          </p>

          {/* Statements with smooth gradient sweep */}
          <div className="space-y-2 mb-10">
            {statements.map((statement, index) => {
              const isActive = activeLine === index;

              return (
                <p
                  key={index}
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    } ${isActive ? "text-slate-900" : "text-slate-300"
                    }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 150}ms` : "0ms"
                  }}
                >
                  <span className={`relative inline-block ${isActive ? "animate-shine text-transparent bg-clip-text bg-[linear-gradient(110deg,#000,45%,#5fff9e,55%,#000)] bg-[length:200%_100%]" : ""}`}>
                    {statement}
                  </span>
                </p>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "700ms" }}>
            <a
              href="/roi-calculator"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-black bg-[#5fff9e] hover:bg-[#4de88a] shadow-[0_2px_10px_rgba(95,255,158,0.2)] transition-all duration-200"
            >
              Calculate Your ROI
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .animate-shine {
          animation: shine 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
