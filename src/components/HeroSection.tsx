import { useEffect, useState } from "react";

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
    <section className="relative isolate overflow-hidden bg-black pt-28 sm:pt-32 md:pt-36 text-white">
      {/* Subtle grid */}
      <svg className="pointer-events-none absolute inset-0 z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" shape-rendering="crispEdges" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Content - Mobile Optimized */}
      <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl items-center px-4 sm:px-6">
        <div className="grid w-full grid-cols-12 items-center gap-8 sm:gap-10 lg:gap-12">
          {/* Left: Copy - Mobile Optimized */}
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              What If Your Recruiters Could See What's Coming Before Everyone Else?
            </h1>
            <p className="mt-4 sm:mt-5 max-w-xl text-base sm:text-lg text-white/70">
              boilr AI tracks 10,000+ sources around the clock — so when your competitors are still checking for job openings on LinkedIn,
              you're already talking to the hiring manager.
            </p>
            {/* CTAs - Stack on mobile, row on desktop */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
              <a
                href="#solution"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 sm:py-2.5 text-sm font-medium text-[#0d1117] shadow-sm transition hover:shadow-lg w-full sm:w-auto"
              >
                See How It Works
              </a>
              <a
                href="https://calendly.com/felix-boilr/demo"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 sm:py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 w-full sm:w-auto"
              >
                Watch 5-Min Demo
              </a>
            </div>
          </div>

          {/* Right: Illustration (intel cards cycle) - Mobile Optimized */}
          <div className="relative col-span-12 lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md scale-[0.85] sm:scale-[0.9] opacity-65 blur-[0.3px] lg:max-w-lg lg:translate-x-4">
              <div className="relative rounded-[20px] sm:rounded-[24px] border border-white/10 bg-white/5 p-3 sm:p-4 shadow-2xl backdrop-blur">
                <div className="space-y-2 sm:space-y-3">
                  {intelCards.map((card, i) => (
                    <IntelCard key={card.title} card={card} active={i === cardIndex} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntelCard({ card, active }: { card: IntelCardT; active: boolean }) {
  return (
    <div
      className="rounded-xl sm:rounded-2xl border border-white/10 bg-[#0f141b] p-3 sm:p-4 transition-all duration-300 ease-[var(--ease-premium)]"
      style={{
        opacity: active ? 1 : 0.25,
        transform: active ? 'scale(1) translateY(0px)' : 'scale(0.96) translateY(0px)'
      }}
    >
      <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-white/50">{card.kicker}</div>
      <div className="mt-1 text-base sm:text-lg font-semibold text-white">{card.title}</div>
      <div className="mt-1 text-xs sm:text-sm text-white/70">{card.meta}</div>
    </div>
  );
}