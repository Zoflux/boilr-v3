import { useEffect, useRef, useState } from "react";

interface ProblemCard {
    number: string;
    problem: string;
    consequence: string;
    cost: string;
}

const problems: ProblemCard[] = [
    {
        number: "01",
        problem: "Manual research eats your day.",
        consequence: "Hours lost in tabs, spreadsheets, and copy-paste.",
        cost: "Less time for actual selling or recruiting."
    },
    {
        number: "02",
        problem: "You're always one step behind.",
        consequence: "Signals surface too late, opportunities vanish.",
        cost: "Competitors reach the lead first."
    },
    {
        number: "03",
        problem: "Good leads slip through the cracks.",
        consequence: "No system to prioritize or follow up.",
        cost: "Wasted pipeline, missed quota."
    }
];

export function ProblemSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* Header with fade-in animation */}
                <header
                    className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <p className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-600">
                        Sound familiar?
                    </p>
                    <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        The daily grind nobody talks about
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Three problems that silently kill your pipeline.
                    </p>
                </header>

                {/* Problem Cards Grid with staggered animation */}
                <div className="grid md:grid-cols-3 gap-6">
                    {problems.map((card, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-2xl border border-gray-200 bg-gray-50/50 p-6 sm:p-8 
                hover:border-[#5fff9e]/50 hover:shadow-lg hover:shadow-[#5fff9e]/5
                transition-all duration-500 ease-out ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                            style={{
                                transitionDelay: isVisible ? `${150 + index * 100}ms` : "0ms"
                            }}
                        >
                            {/* Number Badge - replaces icon */}
                            <div className="mb-5">
                                <span className="text-3xl sm:text-4xl font-bold text-[#5fff9e]">
                                    {card.number}
                                </span>
                            </div>

                            {/* Main Problem Statement */}
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug mb-4 group-hover:text-gray-800 transition-colors">
                                {card.problem}
                            </h3>

                            {/* Consequence & Cost - aligned, smaller */}
                            <div className="space-y-3 pt-4 border-t border-gray-200/70">
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-400 text-xs mt-0.5">→</span>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {card.consequence}
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-[#10b981] text-xs mt-0.5">✕</span>
                                    <p className="text-sm text-[#10b981]/80 leading-relaxed">
                                        {card.cost}
                                    </p>
                                </div>
                            </div>

                            {/* Subtle hover accent bar at top */}
                            <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#5fff9e]/0 to-transparent group-hover:via-[#5fff9e]/60 transition-all duration-300 rounded-full" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
