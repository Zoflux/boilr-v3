import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeLine, setActiveLine] = useState(0);

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

    // Very slow, relaxed line rotation
    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            setActiveLine((prev) => (prev + 1) % statements.length);
        }, 5000); // 5 seconds per line - very relaxed

        return () => clearInterval(interval);
    }, [isVisible]);

    return (
        <section ref={sectionRef} className="py-16 sm:py-20 bg-[#f8f9fa]">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                <div className="max-w-3xl mx-auto">
                    {/* Subtitle */}
                    <p className={`text-gray-800 text-base sm:text-lg font-medium mb-6 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        Turn your recruitment process into a machine that never stops working.
                    </p>

                    {/* Statements - very subtle transitions */}
                    <div className="space-y-2 mb-10">
                        {statements.map((statement, index) => {
                            const isActive = activeLine === index;

                            return (
                                <p
                                    key={index}
                                    className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight transition-all duration-[1500ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                        }`}
                                    style={{
                                        transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
                                        color: isActive ? "#1a1a1a" : "#d1d5db"
                                    }}
                                >
                                    {/* Green gradient text for active line */}
                                    {isActive ? (
                                        <span className="bg-gradient-to-r from-gray-900 via-[#10b981] to-gray-900 bg-clip-text text-transparent bg-[length:300%_100%] animate-shimmer">
                                            {statement}
                                        </span>
                                    ) : (
                                        statement
                                    )}
                                </p>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <div className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "800ms" }}>
                        <a
                            href="/roi-calculator"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-black bg-[#5fff9e] hover:bg-[#4de88a] transition-all duration-300"
                        >
                            Calculate Your ROI
                        </a>
                    </div>
                </div>
            </div>

            {/* Very slow, subtle shimmer */}
            <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
}
