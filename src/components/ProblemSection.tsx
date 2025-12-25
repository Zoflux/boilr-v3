import { useEffect, useRef, useState, useCallback } from "react";

// Tool logos
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
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* Two column layout: Text left, Slider right */}
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left Column - Text and bullet points */}
                    <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            From chaos to clarity
                        </h2>

                        {/* Bullet points */}
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-gray-500 text-xs">✕</span>
                                </span>
                                <span className="text-gray-600">12+ tabs open, copy-pasting between tools</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-gray-500 text-xs">✕</span>
                                </span>
                                <span className="text-gray-600">Outdated contact data and missed signals</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-5 h-5 rounded-full bg-[#5fff9e]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-[#10b981] text-xs">✓</span>
                                </span>
                                <span className="text-gray-700 font-medium">One platform, real-time signals, verified data</span>
                            </li>
                        </ul>

                        {/* CTA */}
                        <a
                            href="https://calendly.com/felix-boilr/demo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-black bg-[#5fff9e] hover:bg-[#4de88a] transition-all duration-200"
                        >
                            See boilr in action →
                        </a>
                    </div>

                    {/* Right Column - Interactive Slider */}
                    <div
                        ref={containerRef}
                        className={`relative rounded-2xl overflow-hidden cursor-ew-resize shadow-xl border border-gray-200 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        onMouseMove={handleMouseMove}
                        onTouchMove={handleTouchMove}
                        style={{ transitionDelay: "200ms" }}
                    >
                        {/* Before Side (Left half) */}
                        <div
                            className="absolute inset-0 bg-[#fafafa]"
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            <div className="p-6 h-full flex flex-col">
                                {/* Logo Grid */}
                                <div className="grid grid-cols-2 gap-3 flex-1 mt-10">
                                    {toolLogos.map((tool, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-center p-3 bg-white rounded-lg border border-gray-100"
                                            style={{
                                                animation: `floatSubtle ${2.5 + (i * 0.3)}s ease-in-out infinite`,
                                                animationDelay: `${i * 0.15}s`
                                            }}
                                        >
                                            <img
                                                src={tool.src}
                                                alt={tool.name}
                                                className="max-h-6 max-w-full object-contain grayscale opacity-50"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* After Side (Right half) */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] to-[#0d2818]"
                            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                        >
                            <div className="p-6 h-full flex flex-col items-center justify-center text-white">
                                {/* boilr Logo centered */}
                                <div className="relative">
                                    <div className="absolute w-40 h-40 bg-[#5fff9e]/15 rounded-full blur-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                    <img
                                        src="/boilr-logo-black.png"
                                        alt="boilr"
                                        className="h-32 object-contain relative z-10 brightness-0 invert"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Static Labels - Always visible on top */}
                        {/* Before badge - Top Left */}
                        <div className="absolute top-4 left-4 z-30">
                            <span className="px-2.5 py-1 rounded-full bg-gray-200 text-gray-600 text-xs font-medium">
                                Before
                            </span>
                        </div>

                        {/* With boilr badge - Top Right */}
                        <div className="absolute top-4 right-4 z-30">
                            <span className="px-2.5 py-1 rounded-full bg-[#5fff9e]/20 text-[#5fff9e] text-xs font-medium">
                                With boilr
                            </span>
                        </div>

                        {/* 13+ hours - Bottom Left */}
                        <div className="absolute bottom-4 left-4 z-30">
                            <div className="text-xl font-bold text-gray-900">13+ hours</div>
                            <div className="text-xs text-gray-500">weekly</div>
                        </div>

                        {/* 1 hour - Bottom Right */}
                        <div className="absolute bottom-4 right-4 z-30 text-right">
                            <div className="text-xl font-bold text-[#5fff9e]">1 hour</div>
                            <div className="text-xs text-gray-400">weekly</div>
                        </div>

                        {/* Slider Handle */}
                        <div
                            className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-20 pointer-events-none"
                            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                                <span className="text-gray-500 text-xs">⟷</span>
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

                </div>

            </div>
        </section>
    );
}
