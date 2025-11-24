import { Brain, Scan, Users, Send } from "lucide-react";
import RadarGridPreviewV2 from "@/components/RadarGridPreviewV2";
import { useEffect, useState } from "react";

interface SolutionSectionProps {
  mode: "sales" | "recruitment";
}

export function SolutionSection({ mode }: SolutionSectionProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [mode]);

  const content = {
    sales: {
      title: "Meet Your New Team Member",
      subtitle: "boilr AI does what your team can't: monitor everything, miss nothing, deliver only what matters.",
      description: "Tell boilr AI your ICP once. It remembers. Then it tracks 10,000+ sources — and puts ready-to-go opportunities in your inbox.",
      features: [
        {
          icon: Brain,
          title: "It Learns What You Actually Want",
          description: "Define industry, size, stage, location once. It remembers — forever. No noise.",
          number: "01"
        },
        {
          icon: Scan,
          title: "It Monitors What You Can't",
          description: "Career pages, funding rounds, hiring velocity, expansions, leadership changes — 10,000+ sources, all day.",
          number: "02"
        },
        {
          icon: Users,
          title: "It Delivers Opportunities Ready to Go",
          description: "Qualified leads with context, growth signals, and hiring manager contacts. You call. That's it.",
          number: "03"
        }
      ],
      cta: "See How It Works"
    },
    recruitment: {
      title: "Meet Your New Team Member",
      subtitle: "boilr AI does what your team can't: monitor everything, miss nothing, deliver only what matters.",
      description: "Tell boilr AI your ICP once. It remembers. Then it tracks 10,000+ sources — and puts ready-to-go opportunities in your inbox.",
      features: [
        {
          icon: Brain,
          title: "It Learns What You Actually Want",
          description: "Define industry, size, stage, location once. It remembers — forever. No noise.",
          number: "01"
        },
        {
          icon: Scan,
          title: "It Monitors What You Can't",
          description: "Career pages, funding rounds, hiring velocity, expansions, leadership changes — 10,000+ sources, all day.",
          number: "02"
        },
        {
          icon: Users,
          title: "It Delivers Opportunities Ready to Go",
          description: "Qualified leads with context, growth signals, and hiring manager contacts. You call. That's it.",
          number: "03"
        }
      ],
      cta: "See How It Works"
    }
  };

  const current = content[mode];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-black">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header - Mobile Optimized */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight">
              {current.title}
            </h2>
            <span className="block text-white/70 text-lg sm:text-xl lg:text-2xl">{current.subtitle}</span>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed mt-4 sm:mt-5 px-2 sm:px-4 max-w-3xl mx-auto">
              {current.description}
            </p>
          </div>

          {/* Interactive Features Section - Mobile Optimized */}
          <div className="relative">
            {mode === 'sales' ? (
              // Sales - Fixed layout with mobile-optimized interactive features
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-start">
                {/* Animation - Mobile Optimized */}
                <div className="mb-8 sm:mb-12 lg:mb-0">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#0b0f14] border border-white/10 flex items-stretch justify-stretch p-0">
                    <div className="w-full h-[22rem] sm:h-[24rem] lg:h-[26rem]">
                      <RadarGridPreviewV2 />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Clickable Features - Mobile Optimized */}
                <div className="flex flex-col justify-center h-full space-y-5 sm:space-y-7">
                  {current.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className={`cursor-pointer transition-all duration-150 ease-out ${
                        activeFeature === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      {/* Top accent line for active feature - Mobile Optimized */}
                      {activeFeature === index && (
                        <div className="h-0.5 sm:h-1 w-24 sm:w-32 lg:w-40 mb-3 sm:mb-5 rounded-full bg-white/30 transition-all duration-150"></div>
                      )}
                      
                      <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                        {/* Feature Number - Mobile Optimized */}
                        <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold transition-colors duration-150 ${
                          activeFeature === index ? 'text-white' : 'text-white/30'
                        }`}>
                          {feature.number}
                        </div>
                        
                        {/* Feature Content - Mobile Optimized */}
                        <div className="flex-1 pt-1 sm:pt-2">
                          <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-2 lg:mb-3 transition-colors duration-150 leading-tight ${
                            activeFeature === index ? 'text-white' : 'text-white/50'
                          }`}>
                            {feature.title}
                          </h3>
                          
                          {activeFeature === index && (
                            <div className="transition-opacity duration-150">
                              <p className="text-sm sm:text-base lg:text-base text-white/70 leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Recruitment - Mobile Optimized Scrolling layout
              <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-12 lg:items-start">
                {/* Sticky Animation - Mobile Optimized */}
                <div className="sticky top-24 sm:top-28 mb-8 sm:mb-12 lg:mb-0">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-[#0b0f14] border border-white/10 flex items-stretch justify-stretch p-0">
                    <div className="w-full h-[22rem] sm:h-[24rem] lg:h-[26rem]">
                      <RadarGridPreviewV2 />
                    </div>
                    <div className="absolute inset-0"></div>
                  </div>
                </div>

                {/* Scrolling Features - Mobile Optimized */}
                <div className="space-y-10 sm:space-y-14 lg:space-y-20">
                  {current.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="feature-card opacity-0 translate-y-4 transition-all duration-400 ease-out"
                      style={{
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      <div className="text-center lg:text-left p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-black/95 border border-white/10 hover:border-white/20 transition-colors duration-300">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mx-auto lg:mx-0 mb-3 sm:mb-4 rounded-xl sm:rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-white">
                          <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                        </div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-base text-white/70 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .feature-card.animate-slide-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `
      }} />
    </section>
  );
}