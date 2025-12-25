import { useEffect, useRef, useState } from "react";
import { Bell, Search, Users, TrendingUp, Mail, Zap } from "lucide-react";

export default function LogoOutcomeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} className="relative py-20 sm:py-28 bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <header className={`text-center mb-14 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Your <span className="text-[#5fff9e]">opportunities</span> used to hide everywhere.
            <br className="hidden sm:block" />
            <span className="text-gray-400">Now they come to you.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            boilr scans, enriches, and delivers qualified leads — so you focus on conversations, not research.
          </p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1: Signal Detection - Large */}
          <div
            className={`bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 overflow-hidden
              hover:shadow-xl hover:shadow-gray-100/50 hover:border-[#5fff9e]/20
              transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Signal Detection</h3>
            <p className="text-gray-500 text-sm mb-6">
              <span className="text-gray-900 font-medium">Finds hiring signals 24/7.</span> Funding rounds, job postings, leadership changes, tech stack updates — all tracked automatically.
            </p>

            {/* Visual: Signal Feed Mockup */}
            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
              {[
                { type: "FUNDING", text: "TechCorp raised £6M Series A", time: "2m ago", color: "bg-[#5fff9e]" },
                { type: "HIRING", text: "ScaleUp posted 8 engineering roles", time: "15m ago", color: "bg-[#4ade80]" },
                { type: "LEADERSHIP", text: "New VP Engineering at DataFlow", time: "1h ago", color: "bg-[#10b981]" },
              ].map((signal, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100">
                  <span className={`${signal.color} text-black text-[10px] font-bold px-2 py-0.5 rounded`}>
                    {signal.type}
                  </span>
                  <span className="text-gray-700 text-sm flex-1">{signal.text}</span>
                  <span className="text-gray-400 text-xs">{signal.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Lead Enrichment - Large */}
          <div
            className={`bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 overflow-hidden
              hover:shadow-xl hover:shadow-gray-100/50 hover:border-[#5fff9e]/20
              transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lead Enrichment</h3>
            <p className="text-gray-500 text-sm mb-6">
              <span className="text-gray-900 font-medium">Finds the right contact.</span> Hiring managers with verified emails and phone numbers — ready for outreach.
            </p>

            {/* Visual: Contact Card Mockup */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5fff9e] to-[#10b981] flex items-center justify-center text-black font-bold">
                    SM
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Sarah Miller</div>
                    <div className="text-sm text-gray-500">VP Engineering @ TechCorp</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-[#5fff9e]/20 text-[#10b981] text-xs px-2.5 py-1 rounded-full">
                        <Mail className="w-3 h-3" /> s.miller@techcorp.io
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full">
                        📞 +44 20 7946 0958
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-10 h-10 rounded-full bg-[#5fff9e] flex items-center justify-center text-black font-bold text-sm">
                      94
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1">Intent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Intent Scoring - Small */}
          <div
            className={`bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 overflow-hidden
              hover:shadow-xl hover:shadow-gray-100/50 hover:border-[#5fff9e]/20
              transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#5fff9e]/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-[#10b981]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Intent Scoring</h3>
                <p className="text-gray-500 text-sm">
                  AI scores every lead 0-100 based on your ICP. High-intent opportunities surface first.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Smart Alerts - Small */}
          <div
            className={`bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 overflow-hidden
              hover:shadow-xl hover:shadow-gray-100/50 hover:border-[#5fff9e]/20
              transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#5fff9e]/20 flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-[#10b981]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Smart Alerts</h3>
                <p className="text-gray-500 text-sm">
                  Daily digests to Slack or email. Competitor watchlists. Never miss a hiring moment.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
