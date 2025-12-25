import { useEffect, useRef, useState } from "react";

export default function LogoOutcomeSection() {
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
    {
      value: "10,000+",
      label: "Sources monitored",
      description: "Career pages, funding rounds, news, social signals — all tracked 24/7."
    },
    {
      value: "48-72h",
      label: "Earlier than competitors",
      description: "Get opportunities before they hit job boards."
    },
    {
      value: "12h → 1h",
      label: "Weekly research time",
      description: "What took half a day now takes minutes."
    },
    {
      value: "3×",
      label: "More qualified leads",
      description: "Better targeting means better conversations."
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <header className={`text-center mb-14 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            The numbers that matter
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Real results from recruitment teams who switched to boilr.
          </p>
        </header>

        {/* Stats Grid - Bento-style like Pressmaster */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 
                hover:border-[#5fff9e]/30 hover:shadow-lg hover:shadow-[#5fff9e]/5
                transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-[#10b981] mb-2">
                {stat.label}
              </div>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* ROI Calculator CTA */}
        <div className={`mt-10 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "600ms" }}>
          <a
            href="/roi-calculator"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#5fff9e] text-[#10b981] font-semibold text-sm hover:bg-[#5fff9e] hover:text-black transition-all duration-200 group"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Calculate your ROI
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
