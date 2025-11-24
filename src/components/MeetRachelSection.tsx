import Reveal from "@/components/ui/reveal";
import { Search, Target, BarChart3 } from "lucide-react";

interface MeetRachelSectionProps {
  mode: "sales" | "recruitment";
}

export function MeetRachelSection({ mode }: MeetRachelSectionProps) {
  const rachelCards = [
    {
      icon: Search,
      title: "Find Hidden Opportunities",
      description: "Detects funding, expansion and hiring signals early."
    },
    {
      icon: Target,
      title: "Understands Your ICP",
      description: "Surfaces only high‑fit companies based on your criteria."
    },
    {
      icon: BarChart3,
      title: "Delivers Context",
      description: "Enriched company data and contacts ready for outreach."
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Meet Your New BD Team Member</h2>
          </Reveal>
          <p className="text-white/70 mt-3">One agent. Less admin. More wins.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {rachelCards.map((card, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
