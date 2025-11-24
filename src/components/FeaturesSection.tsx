import Reveal from "@/components/ui/reveal";
import { Search, Target, BarChart3, Zap } from "lucide-react";

interface FeaturesSectionProps {
  mode: "sales" | "recruitment";
}

export function FeaturesSection({ mode }: FeaturesSectionProps) {
  const features = [
    {
      title: "Finds Hidden Opportunities",
      description: "Monitors 10,000+ sources for funding, expansion and product signals.",
      icon: Search
    },
    {
      title: "Understands Your ICP",
      description: "Learns roles, industries and locations to surface only high‑fit companies.",
      icon: Target
    },
    {
      title: "Researches Everything",
      description: "Company data, contacts, tech stack — ready to plug into your CRM.",
      icon: BarChart3
    },
    {
      title: "Delivers Daily Alerts",
      description: "Keeps your team 60–90 days ahead of competition.",
      icon: Zap
    }
  ];

  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Meet Your New BD Team Member</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-white/70 mt-3">Präzise Signale, weniger Admin, mehr Abschlüsse.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 80}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
