import { useEffect, useRef, useState } from "react";
import { Bell, TrendingUp, Mail, Target, Zap } from "lucide-react";

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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-24 bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <header className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Your <span className="text-[#5fff9e]">opportunities</span> used to hide everywhere.
            <br className="hidden sm:block" />
            <span className="text-gray-400">Now they come to you.</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
            boilr scans, enriches, and delivers qualified leads — so you focus on conversations, not research.
          </p>
        </header>

        {/* Bento Grid - 2 top, 3 bottom */}
        <div className="space-y-4">

          {/* Top Row - 2 Large Cards */}
          <div className="grid md:grid-cols-2 gap-4">

            {/* Card 1: Signal Detection - Slides from LEFT */}
            <div
              className={`bg-white rounded-2xl border border-gray-100 p-6 overflow-hidden
                hover:shadow-lg hover:border-[#5fff9e]/20 hover:scale-[1.02]
                transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}
              style={{ transitionDelay: "150ms" }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Signal Detection</h3>
              <p className="text-gray-500 text-sm mb-5">
                <span className="text-gray-700 font-medium">Finds hiring signals 24/7.</span> Funding, job posts, leadership changes — all tracked.
              </p>

              {/* Visual: Signal Feed */}
              <div className="bg-gray-50 rounded-xl p-3 space-y-2">
                {[
                  { type: "FUNDING", text: "TechCorp raised £6M Series A", time: "2m", color: "bg-[#5fff9e]" },
                  { type: "HIRING", text: "ScaleUp posted 8 roles", time: "15m", color: "bg-[#4ade80]" },
                  { type: "LEADER", text: "New VP Eng at DataFlow", time: "1h", color: "bg-[#10b981]" },
                ].map((signal, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-100">
                    <span className={`${signal.color} text-black text-[9px] font-bold px-1.5 py-0.5 rounded`}>
                      {signal.type}
                    </span>
                    <span className="text-gray-700 text-xs flex-1 truncate">{signal.text}</span>
                    <span className="text-gray-400 text-[10px]">{signal.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Lead Enrichment - Slides from RIGHT */}
            <div
              className={`bg-white rounded-2xl border border-gray-100 p-6 overflow-hidden
                hover:shadow-lg hover:border-[#5fff9e]/20 hover:scale-[1.02]
                transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
              style={{ transitionDelay: "150ms" }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Lead Enrichment</h3>
              <p className="text-gray-500 text-sm mb-5">
                <span className="text-gray-700 font-medium">Gets the right contact.</span> Verified emails and phone numbers — ready for outreach.
              </p>

              {/* Visual: Contact Card */}
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="bg-white rounded-lg p-3 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5fff9e] to-[#10b981] flex items-center justify-center text-black font-bold text-sm">
                      SM
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-sm">Sarah Miller</div>
                      <div className="text-xs text-gray-500">VP Engineering @ TechCorp</div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        <span className="inline-flex items-center gap-1 bg-[#5fff9e]/20 text-[#10b981] text-[10px] px-2 py-0.5 rounded-full">
                          <Mail className="w-2.5 h-2.5" /> s.miller@techcorp.io
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-[#5fff9e] flex items-center justify-center text-black font-bold text-xs">
                        94
                      </div>
                      <div className="text-[8px] text-gray-400 mt-0.5">Score</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - 3 Cards */}
          <div className="grid sm:grid-cols-3 gap-4">

            {/* Card 3: Intent Scoring - Slides from BOTTOM */}
            <div
              className={`bg-white rounded-2xl border border-gray-100 p-5 overflow-hidden
                hover:shadow-lg hover:border-[#5fff9e]/20 hover:scale-[1.02]
                transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: "350ms" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fff9e]/20 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#10b981]" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">Intent Scoring</h3>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                AI scores leads 0-100 based on your ICP.
              </p>
              {/* Visual: Score bars */}
              <div className="space-y-2">
                {[
                  { name: "TechCorp", score: 94 },
                  { name: "ScaleUp", score: 78 },
                  { name: "DataFlow", score: 65 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-500 w-14 truncate">{item.name}</span>
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#5fff9e] to-[#10b981] rounded-full"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-medium text-gray-700">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 4: Smart Alerts - Slides from BOTTOM */}
            <div
              className={`bg-white rounded-2xl border border-gray-100 p-5 overflow-hidden
                hover:shadow-lg hover:border-[#5fff9e]/20 hover:scale-[1.02]
                transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: "450ms" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fff9e]/20 flex items-center justify-center">
                  <Bell className="w-4 h-4 text-[#10b981]" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">Smart Alerts</h3>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                Digests to Slack or email. Never miss a signal.
              </p>
              {/* Visual: Notification preview */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-2.5 py-2">
                  <div className="w-5 h-5 rounded bg-[#4A154B] flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold">#</span>
                  </div>
                  <span className="text-[10px] text-gray-600 flex-1">3 new signals today</span>
                  <span className="text-[9px] text-gray-400">9:00</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-2.5 py-2">
                  <div className="w-5 h-5 rounded bg-[#10b981] flex items-center justify-center">
                    <Mail className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-[10px] text-gray-600 flex-1">Weekly digest ready</span>
                  <span className="text-[9px] text-gray-400">Mon</span>
                </div>
              </div>
            </div>

            {/* Card 5: CRM Integration - Slides from BOTTOM */}
            <div
              className={`bg-white rounded-2xl border border-gray-100 p-5 overflow-hidden
                hover:shadow-lg hover:border-[#5fff9e]/20 hover:scale-[1.02]
                transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: "550ms" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#5fff9e]/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[#10b981]" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">Push to CRM</h3>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                One-click export to your CRM or ATS.
              </p>
              {/* Visual: Integration logos */}
              <div className="flex flex-wrap gap-2">
                {["Salesforce", "HubSpot", "Bullhorn", "Vincere"].map((crm, i) => (
                  <span
                    key={i}
                    className="text-[10px] text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100"
                  >
                    {crm}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
