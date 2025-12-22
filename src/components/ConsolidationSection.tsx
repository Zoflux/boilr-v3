interface ConsolidationSectionProps {
  mode: "sales" | "recruitment";
}

// Import tool/platform logos
const toolLogos = Object.values(
  import.meta.glob<string>(
    "/src/assets/company logos examples/*.{svg,png,jpg,jpeg,webp}",
    { eager: true, import: "default" }
  )
) as string[];

export function ConsolidationSection({ mode }: ConsolidationSectionProps) {
  // Take first 12 logos for the grid
  const displayLogos = toolLogos.slice(0, 12);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header - Clean centered */}
        <header className="text-center mb-12 sm:mb-16">
          <p className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-600">
            Yeah. That's over.
          </p>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Remember When You Had 15 Tabs Open Just to Find One Lead?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            One system. One login. Everything automated.
          </p>
        </header>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">

          {/* BEFORE Card - Show tool chaos with subtle "time sink" visual */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 relative overflow-hidden">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-500 mb-4">
              How It Used to Work
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">
              Jumping between 15 tools — none of them talking to each other
            </h3>

            {/* Logo Grid with subtle "drifting away / time wasted" animation */}
            <div className="relative mb-6 p-4 bg-white rounded-xl border border-gray-100 overflow-hidden">

              {/* Fade overlay on the right side - shows logos "disappearing" into time */}
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>

              {/* Subtle hourglass/time indicator in corner */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 text-gray-400 text-[10px] bg-white/80 px-2 py-1 rounded-md">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>time sink</span>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {displayLogos.map((src, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center h-12 rounded-lg bg-gray-50 border border-gray-100 p-2 drift-animation"
                    style={{
                      opacity: 0.35 + (i % 4) * 0.15,
                      transform: `rotate(${(i % 5 - 2) * 1.5}deg)`,
                      animationDelay: `${(i % 6) * 0.8}s`
                    }}
                  >
                    <img
                      src={src}
                      alt="Tool logo"
                      className="h-5 w-auto object-contain grayscale"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Pain points - subtle gray styling */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-white border border-gray-200 px-3 py-1 text-xs text-gray-500">Copy-paste hell</span>
              <span className="rounded-full bg-white border border-gray-200 px-3 py-1 text-xs text-gray-500">Tab chaos</span>
              <span className="rounded-full bg-white border border-gray-200 px-3 py-1 text-xs text-gray-500">Context switching</span>
              <span className="rounded-full bg-white border border-gray-200 px-3 py-1 text-xs text-gray-500">"Where did I see that?"</span>
            </div>

            {/* CSS Animation for drift effect */}
            <style>{`
              .drift-animation {
                animation: driftFade 6s ease-in-out infinite;
              }
              
              @keyframes driftFade {
                0%, 100% { 
                  transform: translateX(0); 
                }
                50% { 
                  transform: translateX(6px); 
                  opacity: 0.25;
                }
              }
            `}</style>
          </div>

          {/* AFTER Card - Clean single solution */}
          <div className="rounded-2xl border-2 border-[#5fff9e]/30 bg-gradient-to-b from-white to-[#5fff9e]/5 p-6 sm:p-8">
            <div className="inline-flex items-center rounded-full border border-[#5fff9e]/30 bg-[#5fff9e]/10 px-3 py-1 text-xs text-[#10b981] font-medium mb-4">
              How It Works Now
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">
              One platform that does everything — automatically
            </h3>

            {/* Single boilr logo highlighted */}
            <div className="relative mb-6 p-6 bg-white rounded-xl border border-[#5fff9e]/20 flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">boilr<span className="text-[#5fff9e]">.</span></div>
              <div className="text-sm text-gray-500">All-in-one AI platform</div>

              {/* Subtle glow */}
              <div className="absolute inset-0 bg-[#5fff9e]/5 blur-xl rounded-xl -z-10"></div>
            </div>

            {/* Features list */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5fff9e]/20 text-[#10b981] text-xs">✦</span>
                <span className="text-gray-700 text-sm">Finds opportunities across 10,000+ sources</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5fff9e]/20 text-[#10b981] text-xs">◎</span>
                <span className="text-gray-700 text-sm">Researches and enriches automatically</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5fff9e]/20 text-[#10b981] text-xs">⚡</span>
                <span className="text-gray-700 text-sm">Prioritizes by fit score</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg px-3 py-2 bg-[#5fff9e] text-black text-xs font-medium">Finds</div>
              <div className="rounded-lg px-3 py-2 bg-[#5fff9e] text-black text-xs font-medium">Enriches</div>
              <div className="rounded-lg px-3 py-2 bg-[#5fff9e] text-black text-xs font-medium">Prioritizes</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

