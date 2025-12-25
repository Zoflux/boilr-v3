import { useEffect, useRef, useState, useCallback } from "react";

// Tool logos for the "before" side (6 logos for compact view)
const toolLogos = [
    { name: "LinkedIn", src: "/assets/company-logos/linkeidn logo.svg" },
    { name: "Indeed", src: "/assets/company-logos/Indeed_logo (1).svg" },
    { name: "Apollo", src: "/assets/company-logos/Apollo.io_idY1K1QZB-_1.svg" },
    { name: "Lusha", src: "/assets/company-logos/Lusha_idDCG_-t5d_0.svg" },
    { name: "Greenhouse", src: "/assets/company-logos/greenhouse logo.svg" },
    { name: "HubSpot", src: "/assets/company-logos/HubSpot_Logo.svg" },
];

export function ProblemSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(50);

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

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(15, Math.min(85, (x / rect.width) * 100));
        setSliderPosition(percentage);
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const percentage = Math.max(15, Math.min(85, (x / rect.width) * 100));
        setSliderPosition(percentage);
    }, []);

    return (
        <section ref={sectionRef} className="py-16 sm:py-24 bg-white">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">

                {/* Header */}
                <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                        From chaos to clarity
                    </h2>
                    <p className="mt-3 text-base text-gray-500 max-w-xl mx-auto">
                        Move your mouse to see the difference.
                    </p>
                </div>

                {/* Interactive Slider - Single Card */}
                <div
                    ref={containerRef}
                    className={`relative rounded-2xl overflow-hidden cursor-ew-resize shadow-xl border border-gray-200 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    style={{ transitionDelay: "100ms" }}
                >
                    {/* Before Side (Left) */}
                    <div
                        className="absolute inset-0 bg-[#fafafa]"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <div className="flex h-full">
                            {/* Left Content */}
                            <div className="w-1/2 p-6 flex flex-col">
                                <span className="inline-block w-fit px-2.5 py-1 rounded-full bg-gray-200 text-gray-600 text-xs font-medium mb-4">
                                    Before
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Juggling tools</h3>

                                {/* Logo Grid - 3x2 */}
                                <div className="grid grid-cols-3 gap-2 mb-auto">
                                    {toolLogos.map((tool, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-center p-2 bg-white rounded-lg border border-gray-100 h-10"
                                            style={{
                                                animation: `floatSubtle ${2.5 + (i * 0.3)}s ease-in-out infinite`,
                                                animationDelay: `${i * 0.15}s`
                                            }}
                                        >
                                            <img
                                                src={tool.src}
                                                alt={tool.name}
                                                className="max-h-4 max-w-full object-contain grayscale opacity-50"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Stats */}
                                <div className="pt-4 border-t border-gray-200 mt-4">
                                    <div className="text-2xl font-bold text-gray-900">13+ hours</div>
                                    <div className="text-xs text-gray-500">weekly research</div>
                                </div>
                            </div>

                            {/* Right placeholder to maintain layout */}
                            <div className="w-1/2 bg-[#fafafa]"></div>
                        </div>
                    </div>

                    {/* After Side (Right) */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] to-[#0d2818]"
                        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                    >
                        <div className="flex h-full">
                            {/* Left placeholder */}
                            <div className="w-1/2"></div>

                            {/* Right Content */}
                            <div className="w-1/2 p-6 flex flex-col text-white">
                                <span className="inline-block w-fit px-2.5 py-1 rounded-full bg-[#5fff9e]/20 text-[#5fff9e] text-xs font-medium mb-4">
                                    With boilr
                                </span>
                                <h3 className="text-lg font-bold text-white mb-4">One platform</h3>

                                {/* boilr Logo */}
                                <div className="flex items-center justify-center flex-1 mb-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 w-24 h-24 bg-[#5fff9e]/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>
                                        <img
                                            src="/boilr-logo-white.png"
                                            alt="boilr"
                                            className="h-14 object-contain relative z-10"
                                            onError={(e) => {
                                                // Fallback to black logo with filter
                                                (e.target as HTMLImageElement).src = "/boilr-logo-black.png";
                                                (e.target as HTMLImageElement).style.filter = "brightness(0) invert(1)";
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="pt-4 border-t border-white/20 mt-4">
                                    <div className="text-2xl font-bold text-[#5fff9e]">1 hour</div>
                                    <div className="text-xs text-gray-400">reviewing leads</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-20 pointer-events-none"
                        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                            <span className="text-gray-500 text-sm">⟷</span>
                        </div>
                    </div>

                    {/* Set height */}
                    <div className="h-[320px]"></div>

                    {/* Animation keyframes */}
                    <style>{`
            @keyframes floatSubtle {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-3px); }
            }
          `}</style>
                </div>

                {/* CTA */}
                <div className={`mt-10 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "400ms" }}>
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
