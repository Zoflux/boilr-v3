import { useEffect, useState, useRef } from "react";
import {
  BellRing,
  Brain,
  Globe2,
  Radar,
  Scan,
  Send
} from "lucide-react";
import RadarGridPreviewV2 from "@/components/RadarGridPreviewV2";

type SolutionMode =
  | "discovery"
  | "signals"
  | "sales"
  | "recruitment";

interface SolutionSectionProps {
  mode: SolutionMode;
}

export function SolutionSection({ mode }: SolutionSectionProps) {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveFeature(0);
  }, [mode]);

  // Scroll-based feature activation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRef.current.offsetHeight;

      const scrollableDistance = sectionHeight - viewportHeight;
      const scrolledIntoSection = Math.max(0, -sectionTop);
      const progress = Math.max(0, Math.min(1, scrolledIntoSection / scrollableDistance));

      let newActiveFeature = 0;
      if (progress < 0.33) {
        newActiveFeature = 0;
      } else if (progress < 0.66) {
        newActiveFeature = 1;
      } else {
        newActiveFeature = 2;
      }

      setActiveFeature(newActiveFeature);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content: Record<
    "discovery" | "signals",
    {
      pill: string;
      title: string;
      subtitle: string;
      description: string;
      features: {
        icon: typeof Scan;
        title: string;
        description: string;
        number: string;
      }[];
    }
  > = {
    discovery: {
      pill: "Discovery",
      title: "Always-on sourcing without busywork",
      subtitle: "The baseline: what we already do for you every day.",
      description:
        "Set your roles, locations, and tech stack once. boilr keeps hunting, enriching, and handing you outreach-ready leads — zero tabs, zero screenshots.",
      features: [
        {
          icon: Scan,
          title: "Continuous scanning",
          description:
            "Career pages, hiring velocity, leadership moves, funding — 10k+ sources monitored so you never rebuild lists.",
          number: "01"
        },
        {
          icon: Brain,
          title: "Context that filters noise",
          description:
            "Role, seniority, geo, stack, and intent scoring so only high-fit accounts and contacts make the cut.",
          number: "02"
        },
        {
          icon: Send,
          title: "Hand-off ready",
          description:
            "Daily drops you can push to CRM/ATS or send as outreach lists — no product screenshots required.",
          number: "03"
        }
      ]
    },
    signals: {
      pill: "Signals",
      title: "Market signals for recruiters in one feed",
      subtitle: "Stay ahead of hiring moments before they're public.",
      description:
        "boilr aggregates intent signals across the web, scores them against your ICP, and delivers concise briefs — perfect for recruiters who need timing without manual research.",
      features: [
        {
          icon: Globe2,
          title: "Signal capture",
          description:
            "News, social, job hints, leadership moves, product launches — unified into one stream.",
          number: "01"
        },
        {
          icon: Radar,
          title: "Recruiter-ready scoring",
          description:
            "Weights by role, level, industry, and region so you see the signals that matter for your desk.",
          number: "02"
        },
        {
          icon: BellRing,
          title: "Actionable alerts",
          description:
            "Daily/weekly digests to Slack or email with who to contact and why now, no screenshot clutter.",
          number: "03"
        }
      ]
    }
  };

  const resolvedMode: "discovery" | "signals" =
    mode === "signals" ? "signals" : "discovery";

  const current = content[resolvedMode];
  const demoLink = "https://calendly.com/felix-boilr/demo";

  return (
    <section ref={sectionRef} data-dark-section="true" className="bg-black relative">
      {/* Scroll container */}
      <div className="relative" style={{ height: '250vh' }}>
        {/* Sticky centered container */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

              {/* Section Header */}
              <div className="text-center mb-10 sm:mb-14">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-[0.12em] text-white/70 mb-4">
                  {current.pill}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  {current.title}
                </h2>
                <p className="text-base sm:text-lg text-white/60 mt-3 max-w-2xl mx-auto">
                  {current.subtitle}
                </p>
              </div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center">
                {/* Left: Radar Preview */}
                <div className="mb-8 lg:mb-0">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#0b0f14] border border-white/10">
                    <div className="w-full h-[18rem] sm:h-[22rem] lg:h-[24rem]">
                      <RadarGridPreviewV2 />
                    </div>
                  </div>
                </div>

                {/* Right: All features visible, one expanded at a time */}
                <div className="flex gap-4">
                  {/* Vertical progress dots on the left */}
                  <div className="flex flex-col items-center py-6 gap-4">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeFeature
                            ? 'bg-[#5fff9e] scale-125'
                            : i < activeFeature
                              ? 'bg-[#5fff9e]/50'
                              : 'bg-white/20'
                          }`}
                      />
                    ))}
                  </div>

                  {/* Feature cards */}
                  <div className="flex-1 space-y-4">
                    {current.features.map((feature, index) => {
                      const isActive = index === activeFeature;
                      const Icon = feature.icon;

                      return (
                        <div
                          key={feature.number}
                          className={`rounded-xl border transition-all duration-500 overflow-hidden ${isActive
                            ? 'bg-white/5 border-[#5fff9e]/30'
                            : 'bg-transparent border-white/10 hover:border-white/20'
                            }`}
                        >
                          {/* Header - always visible */}
                          <div className={`flex items-center gap-4 p-4 sm:p-5 transition-colors duration-300 ${isActive ? '' : 'opacity-50'
                            }`}>
                            {/* Number */}
                            <span className={`text-sm font-bold transition-colors duration-300 ${isActive ? 'text-[#5fff9e]' : 'text-white/30'
                              }`}>
                              {feature.number}
                            </span>

                            {/* Title */}
                            <h3 className={`text-lg sm:text-xl font-semibold transition-colors duration-300 flex-1 ${isActive ? 'text-white' : 'text-white/50'
                              }`}>
                              {feature.title}
                            </h3>

                            {/* Icon */}
                            <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-[#5fff9e]' : 'text-white/30'
                              }`} />
                          </div>

                          {/* Expandable content */}
                          <div className={`overflow-hidden transition-all duration-500 ease-out ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                            <div className="px-4 sm:px-5 pb-5">
                              <p className="text-white/70 text-sm sm:text-base leading-relaxed pl-8">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* CTA Button */}
                    <div className="pt-4">
                      <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-black bg-[#48ee8d] hover:bg-[#5fff9e] shadow-[0_4px_20px_rgba(72,238,141,0.35)] transition-all duration-200"
                      >
                        Book Demo →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}