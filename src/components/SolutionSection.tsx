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
  // Legacy modes (home page still passes these)
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

      // Calculate scroll progress through the section
      // Start when section enters viewport, end when it leaves
      const scrollableDistance = sectionHeight - viewportHeight;
      const scrolledIntoSection = Math.max(0, -sectionTop);
      const progress = Math.max(0, Math.min(1, scrolledIntoSection / scrollableDistance));

      // Map progress to feature index (0, 1, 2)
      // Divide into thirds with some overlap
      let newActiveFeature = 0;
      if (progress < 0.35) {
        newActiveFeature = 0;
      } else if (progress < 0.7) {
        newActiveFeature = 1;
      } else {
        newActiveFeature = 2;
      }

      setActiveFeature(newActiveFeature);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
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
      {/* Extended height for scroll-based animation */}
      <div className="relative" style={{ height: '200vh' }}>
        {/* Sticky container */}
        <div className="sticky top-0 min-h-screen py-12 sm:py-16 lg:py-20 xl:py-24 flex items-center">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
                  {current.pill}
                </div>
                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  {current.title}
                </h2>
                <span className="block text-white/70 text-lg sm:text-xl lg:text-2xl mt-2">
                  {current.subtitle}
                </span>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed mt-4 sm:mt-5 px-2 sm:px-4 max-w-3xl mx-auto">
                  {current.description}
                </p>
              </div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-start">
                <div className="mb-8 sm:mb-12 lg:mb-0">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#0b0f14] border border-white/10 flex items-stretch justify-stretch p-0">
                    <div className="w-full h-[22rem] sm:h-[24rem] lg:h-[26rem]">
                      <RadarGridPreviewV2 />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent" />
                  </div>
                </div>

                <div className="flex flex-col justify-center h-full space-y-5 sm:space-y-7">
                  {current.features.map((feature, index) => (
                    <div
                      key={feature.title}
                      className={`transition-all duration-500 ease-out ${activeFeature === index
                          ? "opacity-100 transform translate-x-0"
                          : activeFeature > index
                            ? "opacity-40 transform -translate-x-2"
                            : "opacity-40 transform translate-x-2"
                        }`}
                    >
                      {/* Progress bar - only show for active */}
                      <div
                        className={`h-0.5 sm:h-1 mb-3 sm:mb-5 rounded-full bg-white/30 transition-all duration-500 overflow-hidden ${activeFeature === index ? 'w-24 sm:w-32 lg:w-40' : 'w-0'
                          }`}
                      >
                        {activeFeature === index && (
                          <div className="h-full bg-[#5fff9e] animate-pulse" style={{ width: '100%' }} />
                        )}
                      </div>

                      <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                        <div
                          className={`text-2xl sm:text-3xl lg:text-4xl font-bold transition-all duration-500 ${activeFeature === index ? "text-[#5fff9e]" : "text-white/20"
                            }`}
                        >
                          {feature.number}
                        </div>

                        <div className="flex-1 pt-1 sm:pt-2">
                          <h3
                            className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-2 lg:mb-3 transition-all duration-500 leading-tight ${activeFeature === index ? "text-white" : "text-white/40"
                              }`}
                          >
                            {feature.title}
                          </h3>

                          {/* Description - always visible but with transition */}
                          <div
                            className={`transition-all duration-500 overflow-hidden ${activeFeature === index
                                ? 'max-h-32 opacity-100'
                                : 'max-h-0 opacity-0'
                              }`}
                          >
                            <p className="text-sm sm:text-base lg:text-base text-white/70 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

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
    </section>
  );
}