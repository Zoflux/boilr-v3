import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Zap } from "lucide-react";

interface BookDemoSectionProps {
  mode: "sales" | "recruitment";
}

export function BookDemoSection({ mode }: BookDemoSectionProps) {
  const handleScheduleDemo = () => {
    window.open("https://calendly.com/felix-boilr/demo", "_blank");
  };

  const content = {
    sales: {
      title: "Ready to boil up your outreach?",
      ctaText: "Book Your Demo",
      features: [
        "Live walkthrough",
        "Setting up 5 day trial",
        "Custom ICP setup"
      ]
    },
    recruitment: {
      title: "Ready to 10x your outreach?",
      ctaText: "Book Your Demo",
      features: [
        "Live walkthrough", 
        "Setting up 5 day trial",
        "Custom ICP setup"
      ]
    }
  };

  const current = content[mode];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ${
            mode === 'recruitment'
              ? 'bg-gradient-to-br from-emerald-500 to-green-400'
              : 'bg-gradient-to-br from-purple-500 to-blue-600'
          }`}>
            <div className="relative p-6 sm:p-8 lg:p-12 text-center text-white">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              
              <div className="relative z-10">
                {/* Header - Mobile Optimized */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 leading-tight">
                  {current.title}
                </h2>

                {/* Features - Mobile Optimized Stack */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10">
                  {current.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm min-h-[40px]">
                      <div className="w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
                      <span className="text-white font-medium text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - Mobile Optimized */}
                <button
                  onClick={handleScheduleDemo}
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-h-[48px] min-w-[160px] sm:min-w-[200px]"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
