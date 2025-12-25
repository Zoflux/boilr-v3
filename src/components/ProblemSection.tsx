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

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left: Header & CTA */}
                    <div className={`lg:sticky lg:top-32 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                        <p className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-600 mb-6">
                            Sound familiar?
                        </p>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                            The recruiting grind
                            <br />
                            <span className="text-gray-400">nobody warns you about</span>
                        </h2>

                        <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                            Every week, recruiters lose hours to manual research — time that could be spent
                            actually talking to candidates and clients.
                        </p>

                        {/* Stats highlight */}
                        <div className="mt-10 flex items-center gap-8">
                            <div>
                                <div className="text-4xl font-bold text-gray-900">13h</div>
                                <div className="text-sm text-gray-500">wasted weekly</div>
                            </div>
                            <div className="h-12 w-px bg-gray-200" />
                            <div>
                                <div className="text-4xl font-bold text-[#5fff9e]">→ 1h</div>
                                <div className="text-sm text-gray-500">with boilr</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Problem Cards */}
                    <div className="space-y-4">
                        {problems.map((problem, index) => (
                            <div
                                key={index}
                                className={`group p-6 rounded-2xl border border-gray-100 bg-[#fafafa] hover:bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                                style={{ transitionDelay: `${200 + index * 100}ms` }}
                            >
                                <div className="flex items-start gap-5">
                                    {/* Number */}
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold text-sm">
                                        {problem.number}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {problem.title}
                                            </h3>
                                            <span className="flex-shrink-0 text-xs font-medium text-red-500 bg-red-50 px-2.5 py-1 rounded-full">
                                                {problem.stat}
                                            </span>
                                        </div>
                                        <p className="text-gray-500 leading-relaxed">
                                            {problem.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* CTA Card */}
                        <div
                            className={`p-6 rounded-2xl bg-gray-900 text-white transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: "500ms" }}
                        >
                            <p className="text-white/80 mb-4">
                                Ready to stop the grind?
                            </p>
                            <a
                                href="https://calendly.com/felix-boilr/demo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-black bg-[#5fff9e] hover:bg-[#4de88a] transition-all duration-200"
                            >
                                See how boilr helps →
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
