import { useEffect, useRef, useState } from "react";

// Tool logos for the "before" side (12 logos)
const toolLogos = [
    { name: "LinkedIn", src: "/assets/company-logos/linkeidn logo.svg" },
    { name: "Indeed", src: "/assets/company-logos/Indeed_logo (1).svg" },
    { name: "Apollo", src: "/assets/company-logos/Apollo.io_idY1K1QZB-_1.svg" },
    { name: "Lusha", src: "/assets/company-logos/Lusha_idDCG_-t5d_0.svg" },
    { name: "Greenhouse", src: "/assets/company-logos/greenhouse logo.svg" },
    { name: "HubSpot", src: "/assets/company-logos/HubSpot_Logo.svg" },
    { name: "Slack", src: "/assets/company-logos/Slack_Technologies_Logo.svg" },
    { name: "Notion", src: "/assets/company-logos/Notion-logo.svg" },
    { name: "Pipedrive", src: "/assets/company-logos/Pipedrive_idHo6Lfa2R_0.svg" },
    { name: "Glassdoor", src: "/assets/company-logos/Glassdoor_Logo_2023.svg" },
    { name: "Bullhorn", src: "/assets/company-logos/Bullhorn_idcftBMeek_1.svg" },
    { name: "Calendly", src: "/assets/company-logos/Calendly_idA4lPSDzF_0.svg" },
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

                    {/* Before Card - Logos */}
                    <div
                        className={`p-8 rounded-2xl border border-gray-200 bg-[#fafafa] transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        style={{ transitionDelay: "100ms" }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-600 text-xs font-medium mb-6">
                            Before boilr
                        </span>

                        <h3 className="text-xl font-bold text-gray-900 mb-8">Juggling between tools</h3>

                        {/* Logo Grid with subtle floating animation */}
                        <div className="grid grid-cols-4 gap-3 mb-8">
                            {toolLogos.map((tool, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-center p-4 bg-white rounded-xl border border-gray-100 h-16"
                                    style={{
                                        animation: `floatSubtle ${3 + (i * 0.5)}s ease-in-out infinite`,
                                        animationDelay: `${i * 0.3}s`
                                    }}
                                >
                                    <img
                                        src={tool.src}
                                        alt={tool.name}
                                        className="max-h-6 max-w-full object-contain grayscale opacity-60"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Animation keyframes */}
                        <style>{`
                          @keyframes floatSubtle {
                            0%, 100% { transform: translateY(0px); }
                            50% { transform: translateY(-4px); }
                          }
                        `}</style>

                        {/* Stats */}
                        <div className="pt-6 border-t border-gray-200">
                            <div className="text-3xl font-bold text-gray-900">13+ hours</div>
                            <div className="text-sm text-gray-500">spent on research every week</div>
                        </div>
                    </div>

                    {/* After Card - boilr */}
                    <div
                        className={`p-8 rounded-2xl border border-[#5fff9e]/30 bg-gradient-to-br from-[#f0fdf9] to-white transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        style={{ transitionDelay: "200ms" }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-[#5fff9e]/20 text-[#10b981] text-xs font-medium mb-6">
                            With boilr
                        </span>

                        <h3 className="text-xl font-bold text-gray-900 mb-8">Everything in one place</h3>

                        {/* boilr Logo centered - no border, much bigger */}
                        <div className="flex items-center justify-center py-12 mb-8">
                            <img
                                src="/boilr-logo-black.png"
                                alt="boilr"
                                className="h-24 object-contain"
                            />
                        </div>

                        {/* Stats */}
                        <div className="pt-6 border-t border-[#5fff9e]/20">
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
