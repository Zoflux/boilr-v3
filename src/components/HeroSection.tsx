import { useEffect, useState } from "react";
import { CalendlyLink } from "@/components/CalendlyButton";

interface HeroSectionProps {
  mode: "sales" | "recruitment";
}

// Shared type for intel cards (used by subcomponent)
type IntelCardT = { kicker: string; title: string; meta: string };

export function HeroSection({ mode }: HeroSectionProps) {
  const intelCards: IntelCardT[] = [
    {
      kicker: "Expansion Alert",
      title: "Manchester Office Opening — 40+ Roles",
      meta: "Ops (12) • Admin (8) • IT (15) • Facilities (5) • Q2 2025 • No PSL yet",
    },
    {
      kicker: "Funding Round",
      title: "£6M Series A → 15–20 Hires Starting",
      meta: "Engineering (8) • Product (3) • GTM (5) • Tech: React/Node/AWS • Hiring starts 30d",
    },
    {
      kicker: "Hiring Velocity",
      title: "+12% headcount last 30d — Pattern detected",
      meta: "4 Eng/week • 3 Sales • Fast offers (18d avg) • 3 agencies engaged • More roles Q2",
    },
    {
      kicker: "Leadership Change",
      title: "New VP Engineering (Week 3) → Team build",
      meta: "2 Eng Managers • 4 Senior Devs • 2 DevOps • £480K budget • 90‑day fill target",
    },
  ];

  const [cardIndex, setCardIndex] = useState(0);

  // Cycle intel cards
  useEffect(() => {
    const id = window.setInterval(() => setCardIndex((i) => (i + 1) % intelCards.length), 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section data-dark-section="true" className="relative isolate overflow-hidden bg-gradient-to-br from-[#0a0a0c] via-[#0d0d10] to-[#0f1012] pt-28 sm:pt-32 md:pt-36 text-white">

      {/* Content - Mobile Optimized */}
      <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl items-center px-4 sm:px-6">
        <div className="grid w-full grid-cols-12 items-center gap-8 sm:gap-10 lg:gap-12">
          {/* Left: Copy - Mobile Optimized */}
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              What If Your Recruiters Could See{" "}
              <span className="text-[#5fff9e]">What's Coming</span>{" "}
              Before Everyone Else?
            </h1>
            <p className="mt-4 sm:mt-5 max-w-xl text-base sm:text-lg text-gray-400 leading-relaxed">
              boilr AI tracks 10,000+ sources around the clock, so when your competitors are still checking for job openings on LinkedIn,
              you're already talking to the hiring manager.
            </p>
            {/* CTAs - Stack on mobile, row on desktop */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
              <a
                href="#solution"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#5fff9e] px-6 py-3 sm:py-3 text-sm font-semibold text-black shadow-lg shadow-[#5fff9e]/25 transition-all duration-200 hover:bg-[#4de88a] hover:shadow-xl hover:shadow-[#5fff9e]/30 w-full sm:w-auto"
              >
                See How It Works
              </a>
              <CalendlyLink
                content="hero-demo-cta"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 sm:py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 w-full sm:w-auto"
              >
                Book 10-Min Demo
              </CalendlyLink>
            </div>
          </div>

          {/* Right: Illustration (intel cards cycle) - Mobile Optimized with 3D perspective */}
          <div className="relative col-span-12 lg:col-span-5" style={{ perspective: '1500px' }}>
            <div
              className="relative mx-auto w-full max-w-md lg:max-w-lg lg:translate-x-4"
              style={{
                transform: 'perspective(1500px) rotateY(-8deg) rotateX(4deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#1a1a1f] p-4 sm:p-5 shadow-2xl shadow-black/40">
                {/* Window chrome dots */}
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                </div>
                <div className="space-y-2.5 sm:space-y-3">
                  {intelCards.map((card, i) => (
                    <IntelCard key={card.title} card={card} active={i === cardIndex} />
                  ))}
                </div>
              </div>
            </div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-[#5fff9e]/[0.03] blur-3xl -z-10 rounded-full scale-150"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntelCard({ card, active }: { card: IntelCardT; active: boolean }) {
  return (
    <div
      className={`rounded-xl sm:rounded-2xl border p-3 sm:p-4 transition-all duration-300 ${active
        ? 'border-[#5fff9e]/30 bg-[#0f0f12] shadow-sm'
        : 'border-white/[0.06] bg-[#0f0f12]/50'
        }`}
      style={{
        opacity: active ? 1 : 0.35,
        transform: active ? 'scale(1) translateY(0px)' : 'scale(0.98) translateY(0px)'
      }}
    >
      <div className={`text-[9px] sm:text-[10px] uppercase tracking-[0.12em] ${active ? 'text-[#5fff9e]' : 'text-white/40'}`}>{card.kicker}</div>
      <div className="mt-1 text-base sm:text-lg font-semibold text-white">{card.title}</div>
      <div className="mt-1 text-xs sm:text-sm text-white/60">{card.meta}</div>
    </div>
  );
}