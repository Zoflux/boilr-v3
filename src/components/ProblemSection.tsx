import { useEffect, useRef, useState } from "react";
import { Clock, Search, Users, TrendingDown } from "lucide-react";

interface PainPoint {
    icon: typeof Clock;
    title: string;
    before: string;
    pain: string;
}

const painPoints: PainPoint[] = [
    {
        icon: Clock,
        title: "Time Drain",
        before: "3+ hours daily",
        pain: "Manually scraping LinkedIn, job boards, and company sites just to find who's hiring."
    },
    {
        icon: Search,
        title: "Information Overload",
        before: "15+ tabs open",
        pain: "Jumping between tools that don't talk to each other. Copy-paste chaos."
    },
    {
        icon: TrendingDown,
        title: "Always Behind",
        before: "Days late",
        pain: "By the time you find the opportunity, someone else already called."
    },
    {
        icon: Users,
        title: "Wrong Contacts",
        before: "50% bounce rate",
        pain: "Reaching the wrong person because contact data is outdated or incomplete."
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
        <section ref={sectionRef} className="py-20 sm:py-28 bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* Header */}
                <header
                    className={`text-center mb-14 sm:mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                    <p className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-600">
                        Sound familiar?
                    </p>
                    <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        The daily grind stealing your time
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        Every recruiter knows these problems. Few talk about how much they actually cost.
                    </p>
                </header>

                {/* Pain Points Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {painPoints.map((point, index) => {
                        const Icon = point.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative rounded-2xl border border-gray-200 bg-gray-50/50 p-6 sm:p-8 
                  hover:border-red-200 hover:bg-red-50/30
                  transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                style={{ transitionDelay: isVisible ? `${150 + index * 100}ms` : "0ms" }}
                            >
                                {/* Header Row */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-gray-100 group-hover:bg-red-100 flex items-center justify-center transition-colors">
                                            <Icon className="w-5 h-5 text-gray-500 group-hover:text-red-500 transition-colors" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {point.title}
                                        </h3>
                                    </div>
                                    <span className="text-xs font-medium text-red-500/80 bg-red-50 px-2 py-1 rounded-md">
                                        {point.before}
                                    </span>
                                </div>

                                {/* Pain Description */}
                                <p className="text-gray-600 leading-relaxed">
                                    {point.pain}
                                </p>

                                {/* Subtle accent on hover */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-300/0 to-transparent group-hover:via-red-300 transition-all duration-300 rounded-t-2xl" />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Line */}
                <div className={`mt-12 text-center transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "600ms" }}>
                    <p className="text-gray-500 text-sm">
                        The average recruiter spends <span className="font-semibold text-gray-900">13+ hours per week</span> on manual research.
                    </p>
                    <p className="text-[#10b981] font-medium mt-1">
                        That's 2.5 months per year — just finding leads.
                    </p>
                </div>

            </div>
        </section>
    );
}
