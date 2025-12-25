import { useEffect, useRef, useState, useCallback } from "react";

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
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(50); // 0-100 percentage

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

    // Handle mouse move to update slider position
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(10, Math.min(90, (x / rect.width) * 100));
        setSliderPosition(percentage);
    }, []);

    // Handle touch move for mobile
    const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const percentage = Math.max(10, Math.min(90, (x / rect.width) * 100));
        setSliderPosition(percentage);
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
                        Move your mouse to see the difference.
                    </p>
                </div>

                {/* Interactive Slider Comparison */}
                <div
                    ref={containerRef}
                    className={`relative rounded-2xl overflow-hidden cursor-ew-resize h-[500px] transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    style={{ transitionDelay: "100ms" }}
                >
                    {/* Before Side (Left) - Full width, clipped */}
                    <div
                        className="absolute inset-0 bg-[#fafafa] border border-gray-200"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <div className="p-8 h-full flex flex-col">
                            <span className="inline-block w-fit px-3 py-1 rounded-full bg-gray-200 text-gray-600 text-xs font-medium mb-6">
                                Before boilr
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Juggling between tools</h3>

                            {/* Logo Grid */}
                            <div className="grid grid-cols-4 gap-3 mb-auto">
                                {toolLogos.map((tool, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-center p-3 bg-white rounded-xl border border-gray-100 h-14"
                                        style={{
                                            animation: `floatSubtle ${3 + (i * 0.4)}s ease-in-out infinite`,
                                            animationDelay: `${i * 0.2}s`
                                        }}
                                    >
                                        <img
                                            src={tool.src}
                                            alt={tool.name}
                                            className="max-h-5 max-w-full object-contain grayscale opacity-60"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="pt-6 border-t border-gray-200 mt-6">
                                <div className="text-3xl font-bold text-gray-900">13+ hours</div>
                                <div className="text-sm text-gray-500">spent on research every week</div>
                            </div>
                        </div>
                    </div>

                    {/* After Side (Right) - Full width, clipped */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-[#f0fdf9] to-white border border-[#5fff9e]/30"
                        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                    >
                        <div className="p-8 h-full flex flex-col">
                            <span className="inline-block w-fit px-3 py-1 rounded-full bg-[#5fff9e]/20 text-[#10b981] text-xs font-medium mb-6">
                                With boilr
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Everything in one place</h3>

                            {/* boilr Logo with glow */}
                            <div className="relative flex items-center justify-center flex-1 mb-6">
                                <div className="absolute w-48 h-48 bg-[#5fff9e]/20 rounded-full blur-3xl"></div>
                                <img
                                    src="/boilr-logo-black.png"
                                    alt="boilr"
                                    className="h-28 object-contain relative z-10"
                                />
                            </div>

                            {/* Benefit chips */}
                            <div className="flex flex-wrap gap-2 justify-center mb-6">
                                <span className="text-xs bg-white border border-[#5fff9e]/30 text-gray-600 px-3 py-1.5 rounded-full">
                                    ✓ Signal Detection
                                </span>
                                <span className="text-xs bg-white border border-[#5fff9e]/30 text-gray-600 px-3 py-1.5 rounded-full">
                                    ✓ Lead Enrichment
                                </span>
                                <span className="text-xs bg-white border border-[#5fff9e]/30 text-gray-600 px-3 py-1.5 rounded-full">
                                    ✓ AI Scoring
                                </span>
                                <span className="text-xs bg-white border border-[#5fff9e]/30 text-gray-600 px-3 py-1.5 rounded-full">
                                    ✓ CRM Sync
                                </span>
                            </div>

                            {/* Stats */}
                            <div className="pt-6 border-t border-[#5fff9e]/20">
                                <div className="text-3xl font-bold text-[#10b981]">1 hour</div>
                                <div className="text-sm text-gray-500">reviewing qualified leads — that's it</div>
                            </div>
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 pointer-events-none"
                        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                    >
                        {/* Handle Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-[#5fff9e]">
                            <span className="text-gray-600 text-sm font-bold">⟷</span>
                        </div>
                    </div>

                    {/* Animation keyframes */}
                    <style>{`
            @keyframes floatSubtle {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-4px); }
            }
          `}</style>
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
