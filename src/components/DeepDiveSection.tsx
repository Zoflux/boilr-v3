import { Scan, Brain, Send } from "lucide-react";

interface DeepDiveSectionProps {
  mode: "sales" | "recruitment";
}

export function DeepDiveSection({ mode }: DeepDiveSectionProps) {
  const steps = [
    {
      icon: Scan,
      title: "Monitor",
      description: "10,000+ sources scanned for funding, expansion, hiring and product signals."
    },
    {
      icon: Brain,
      title: "Analyze",
      description: "ICP, intent and timing scored to surface only high‑fit companies."
    },
    {
      icon: Send,
      title: "Deliver",
      description: "Qualified, enriched lead lists and daily alerts ready for outreach."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How boilr Works</h2>
          <p className="text-white/70 mt-3">Simplify the magic into three steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#features" className="px-8 py-4 rounded-xl font-semibold text-black bg-white hover:bg-white/90 inline-flex items-center justify-center">
            See Live Pipeline Example
          </a>
        </div>
      </div>
    </section>
  );
}


