import { useEffect, useRef, useState } from "react";

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

    const problems = [
        {
            number: "01",
            title: "Manual research eats your day",
            stat: "3+ hours daily",
            description: "Scraping LinkedIn, job boards, company pages — just to find who might be hiring."
        },
        {
            number: "02",
            title: "Signals arrive too late",
            stat: "Days behind",
            description: "By the time you spot an opportunity, three competitors have already called."
        },
        {
            number: "03",
            title: "Wrong contacts, wasted effort",
            stat: "50% bounce rate",
            description: "Outdated data means half your outreach never reaches the right person."
        }
    ];

    return (
        <section ref={sectionRef} className="py-20 sm:py-28 bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* Header - Centered */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                        The recruiting grind<br />nobody warns you about
                    </h2>
                    <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
                        Every week, recruiters lose hours to manual research — time that could be spent
                        actually talking to candidates and clients.
                    </p>

                    {/* Stats - Bigger & Centered */}
                    <div className="mt-10 flex items-center justify-center gap-6">
                        <span className="text-5xl sm:text-6xl font-bold text-gray-900">13h</span>
                        <span className="text-2xl text-gray-300">→</span>
                        <span className="text-5xl sm:text-6xl font-bold text-[#10b981]">1h</span>
                        <span className="text-gray-500">weekly</span>
                    </div>
                </div>

                {/* Problems - 3 Column Grid, all visible */}
                <div className="grid md:grid-cols-3 gap-6">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-2xl border border-gray-100 bg-[#fafafa] hover:bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${200 + index * 100}ms` }}
                        >
                            {/* Number */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-sm font-mono text-[#10b981] font-bold">{problem.number}</span>
                                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{problem.stat}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {problem.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={`mt-12 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "500ms" }}>
                    <a
                        href="https://calendly.com/felix-boilr/demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-black bg-[#5fff9e] hover:bg-[#4de88a] transition-all duration-200"
                    >
                        See how boilr helps →
                    </a>
                </div>

            </div>
        </section>
    );
}
