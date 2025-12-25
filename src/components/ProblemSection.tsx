import { useEffect, useRef, useState } from "react";
import { X, Check } from "lucide-react";

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

    const beforeItems = [
        "12+ tabs open at once",
        "Manual copy-paste between tools",
        "Outdated contact information",
        "Signals discovered too late",
        "No way to prioritize leads"
    ];

    const afterItems = [
        "One dashboard, everything automated",
        "Leads enriched and ready to contact",
        "Verified emails and phone numbers",
        "Signals before they hit job boards",
        "AI-scored by fit and intent"
    ];

    const toolLogos = [
        "LinkedIn", "Indeed", "Crunchbase", "Hunter.io", "Apollo", "ZoomInfo"
    ];

    return (
        <section ref={sectionRef} className="py-20 sm:py-28 bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* Header */}
                <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                        From chaos to clarity
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        See what changes when you stop juggling tools and start closing deals.
                    </p>
                </div>

                {/* Before/After Cards */}
                <div className="grid md:grid-cols-2 gap-6 relative">

                    {/* Arrow in center */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-14 h-14 rounded-full bg-[#5fff9e] flex items-center justify-center shadow-lg shadow-[#5fff9e]/30">
                            <span className="text-black font-bold text-xl">→</span>
                        </div>
                    </div>

                    {/* Before Card */}
                    <div
                        className={`p-8 rounded-2xl border border-gray-200 bg-[#fafafa] transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        style={{ transitionDelay: "100ms" }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-600 text-xs font-medium mb-6">
                            Before boilr
                        </span>

                        <h3 className="text-xl font-bold text-gray-900 mb-6">The manual grind</h3>

                        <ul className="space-y-3 mb-8">
                            {beforeItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600">
                                    <X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Tool logos */}
                        <div className="pt-6 border-t border-gray-200">
                            <p className="text-xs text-gray-400 mb-3">Juggling between:</p>
                            <div className="flex flex-wrap gap-2">
                                {toolLogos.map((tool, i) => (
                                    <span key={i} className="text-xs text-gray-500 bg-white border border-gray-200 px-2.5 py-1 rounded-lg">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-8">
                            <div className="text-3xl font-bold text-gray-900">13+ hours</div>
                            <div className="text-sm text-gray-500">spent on research every week</div>
                        </div>
                    </div>

                    {/* After Card */}
                    <div
                        className={`p-8 rounded-2xl border border-[#5fff9e]/30 bg-gradient-to-br from-[#f0fdf9] to-white transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        style={{ transitionDelay: "200ms" }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-[#5fff9e]/20 text-[#10b981] text-xs font-medium mb-6">
                            With boilr
                        </span>

                        <h3 className="text-xl font-bold text-gray-900 mb-6">Automated pipeline</h3>

                        <ul className="space-y-3 mb-8">
                            {afterItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                    <Check className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* boilr badge */}
                        <div className="pt-6 border-t border-[#5fff9e]/20">
                            <p className="text-xs text-gray-400 mb-3">Everything in one place:</p>
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#10b981] bg-[#5fff9e]/10 px-3 py-1.5 rounded-lg">
                                <span className="w-2 h-2 rounded-full bg-[#5fff9e]" />
                                boilr Dashboard
                            </span>
                        </div>

                        {/* Stats */}
                        <div className="mt-8">
                            <div className="text-3xl font-bold text-[#10b981]">1 hour</div>
                            <div className="text-sm text-gray-500">reviewing qualified leads — that's it</div>
                        </div>
                    </div>

                </div>

                {/* CTA */}
                <div className={`mt-12 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "400ms" }}>
                    <a
                        href="https://calendly.com/felix-boilr/demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-black bg-[#5fff9e] hover:bg-[#4de88a] transition-all duration-200"
                    >
                        See boilr in action →
                    </a>
                </div>

            </div>
        </section>
    );
}
