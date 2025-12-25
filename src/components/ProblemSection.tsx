import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

export function ProblemSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

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
            description: "Scraping LinkedIn, job boards, company pages — just to find who might be hiring. Copy-paste chaos across 15+ tabs."
        },
        {
            number: "02",
            title: "Signals arrive too late",
            stat: "Days behind",
            description: "By the time you spot an opportunity, three competitors have already called. Speed wins in recruitment."
        },
        {
            number: "03",
            title: "Wrong contacts, wasted effort",
            stat: "50% bounce rate",
            description: "Outdated data means half your outreach never reaches the right person. Verified contacts change everything."
        }
    ];

    return (
        <section ref={sectionRef} className="py-20 sm:py-28 bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left: Header & Stats */}
                    <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                            The recruiting grind
                            <br />
                            nobody warns you about
                        </h2>

                        <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                            Every week, recruiters lose hours to manual research — time that could be spent
                            actually talking to candidates and clients.
                        </p>

                        {/* Stats highlight - Minimalist */}
                        <div className="mt-10 flex items-center gap-4">
                            <span className="text-3xl font-bold text-gray-900">13h</span>
                            <span className="text-gray-400">→</span>
                            <span className="text-3xl font-bold text-[#10b981]">1h</span>
                            <span className="text-gray-500 text-sm">weekly</span>
                        </div>
                    </div>

                    {/* Right: Clickable Tabs */}
                    <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
                        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                            {problems.map((problem, index) => {
                                const isActive = activeTab === index;

                                return (
                                    <div key={index}>
                                        {/* Tab Header - Always visible, clickable */}
                                        <button
                                            onClick={() => setActiveTab(index)}
                                            className={`w-full flex items-center justify-between p-5 text-left transition-all duration-300 ${isActive
                                                ? "bg-gray-900 text-white"
                                                : "bg-white text-gray-900 hover:bg-gray-50"
                                                } ${index !== 0 ? "border-t border-gray-200" : ""}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className={`font-mono text-sm ${isActive ? "text-[#5fff9e]" : "text-gray-400"}`}>
                                                    {problem.number}
                                                </span>
                                                <span className="font-semibold">
                                                    {problem.title}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                {!isActive && (
                                                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                                                        {problem.stat}
                                                    </span>
                                                )}
                                                <ChevronRight
                                                    className={`w-4 h-4 transition-transform duration-300 ${isActive ? "rotate-90 text-[#5fff9e]" : "text-gray-400"
                                                        }`}
                                                />
                                            </div>
                                        </button>

                                        {/* Expandable Content */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-out ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <div className="px-5 pb-5 pt-2 bg-gray-900">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#5fff9e] mt-2 flex-shrink-0" />
                                                    <p className="text-gray-300 leading-relaxed">
                                                        {problem.description}
                                                    </p>
                                                </div>
                                                <span className="inline-block mt-3 ml-5 text-xs font-medium text-gray-400 bg-gray-800 px-2.5 py-1 rounded-full">
                                                    {problem.stat}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-6">
                            <a
                                href="https://calendly.com/felix-boilr/demo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-black bg-[#5fff9e] hover:bg-[#4de88a] transition-all duration-200 shadow-lg shadow-[#5fff9e]/20"
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
