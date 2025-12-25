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

      // Map progress to feature index (0, 1, 2)
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
  const activeContent = current.features[activeFeature];

  return (
    <section ref={sectionRef} data-dark-section="true" className="bg-black relative">
      {/* Scroll container - 250vh for smooth scroll through 3 features */}
      <div className="relative" style={{ height: '250vh' }}>
        {/* Sticky centered container */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

              <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center">
                {/* Left: Radar Preview */}
                <div className="mb-8 lg:mb-0">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#0b0f14] border border-white/10">
                    <div className="w-full h-[20rem] sm:h-[24rem] lg:h-[28rem]">
                      <RadarGridPreviewV2 />
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="text-center lg:text-left">
                  {/* Step indicator */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-500 ${i === activeFeature
                            ? 'w-8 bg-[#5fff9e]'
                            : i < activeFeature
                              ? 'w-4 bg-[#5fff9e]/50'
                              : 'w-4 bg-white/20'
                          }`}
                      />
                    ))}
                  </div>

                  {/* Animated content - single feature at a time */}
                  <div className="relative min-h-[280px] sm:min-h-[260px]">
                    {current.features.map((feature, index) => (
                      <div
                        key={feature.number}
                        className={`absolute inset-0 transition-all duration-500 ease-out ${index === activeFeature
                            ? 'opacity-100 translate-y-0'
                            : index < activeFeature
                              ? 'opacity-0 -translate-y-8'
                              : 'opacity-0 translate-y-8'
                          }`}
                      >
                        {/* Number badge */}
                        <div className="inline-flex items-center gap-3 mb-4">
                          <span className="text-[#5fff9e] text-sm font-bold tracking-wider">
                            {feature.number}
                          </span>
                          <div className="h-px w-8 bg-[#5fff9e]/50" />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                          {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
                          {feature.description}
                        </p>

                        {/* CTA Button */}
                        <a
                          href={demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-black bg-[#48ee8d] hover:bg-[#5fff9e] shadow-[0_4px_20px_rgba(72,238,141,0.35)] transition-all duration-200"
                        >
                          Book Demo →
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Scroll hint */}
                  <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-white/40 text-sm">
                    <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span>Scroll to explore</span>
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