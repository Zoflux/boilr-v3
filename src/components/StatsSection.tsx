import { useEffect, useRef, useState } from "react";
import { Calculator } from "lucide-react";

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
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

  const stats = [
    { value: "10,000+", label: "Sources monitored", sublabel: "24/7" },
    { value: "48-72h", label: "Earlier than competitors", sublabel: "Average head start" },
    { value: "12→1h", label: "Weekly research time", sublabel: "After switching" },
    { value: "3×", label: "More conversations", sublabel: "Same effort" },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-[#10b981]">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* ROI Calculator CTA */}
        <div className={`mt-10 flex justify-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "500ms" }}>
          <a
            href="/roi-calculator"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:border-[#5fff9e] hover:text-[#10b981] transition-colors group"
          >
            <Calculator className="w-4 h-4" />
            Calculate your ROI
            <span className="text-gray-400 group-hover:text-[#10b981] transition-colors">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
