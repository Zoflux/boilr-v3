import { useMemo, useState } from "react";

interface ConsolidationSectionProps {
  mode: "sales" | "recruitment";
}

// Simple seeded RNG (LCG) for deterministic randomness per page load
function createSeededRng(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296; // 0..1
  };
}

export function ConsolidationSection({ mode }: ConsolidationSectionProps) {
  // Import all company logos from the examples directory as URLs
  const exampleLogos = (Object.entries(
    import.meta.glob<string>(
      "/src/assets/company logos examples/*.{svg,png,jpg,jpeg,webp}",
      { eager: true, import: "default" }
    )
  )
    .map(([, url]) => url)) as string[];

  // Randomize per page load (stable during session) using a seeded RNG
  const seed = useMemo(() => Math.floor(Math.random() * 1e9), []);
  const rng = useMemo(() => createSeededRng(seed), [seed]);
  
  // Shuffle logos using Fisher-Yates with seeded RNG
  const shuffledLogos = useMemo(() => {
    const logos = [...exampleLogos];
    for (let i = logos.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [logos[i], logos[j]] = [logos[j], logos[i]];
    }
    return logos;
  }, [exampleLogos, rng]);
  
  const rowsCount = 4;
  const rowShuffles = useMemo(() => {
    if (shuffledLogos.length === 0) return [];
    // Create a separate shuffle for each row
    return Array.from({ length: rowsCount }, () => {
      const logos = [...shuffledLogos];
      for (let i = logos.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [logos[i], logos[j]] = [logos[j], logos[i]];
      }
      return logos;
    });
  }, [shuffledLogos, rng, rowsCount]);

  const offsets = useMemo(() => {
    return Array.from({ length: rowsCount }, () => 0);
  }, [rowsCount]);

  return (
    <section className="relative py-12 sm:py-14 md:py-16 lg:py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-black/10 p-5 sm:p-6 md:p-10 overflow-hidden">
          <header className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70">Yeah. That's over.</p>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              Remember When You Had 15 Tabs Open Just to Find One Lead?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-black/70">One system. One login. Everything automated.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-stretch">
            {/* BEFORE */}
            <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-black/10 bg-white p-4 sm:p-5 md:p-7 overflow-hidden">
              <div className="flex-1 overflow-hidden">
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/80 shadow-sm mb-3 sm:mb-4">How It Used to Work</span>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black mb-3 sm:mb-4">Sourcing across 7 boards. Prospecting with 6 tools. Data from 5 platforms. CRM in 6 systems.</h3>

                {/* Vertically scrolling logo-only bands - Mobile Optimized */}
                {shuffledLogos.length > 0 && (
                  <div className="relative h-60 sm:h-72 overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                    {/* Let track size to its content height for correct -50% loop */}
                    <div className="absolute left-0 right-0 top-0 flex flex-col animate-scrollVertical space-y-2">
                      {Array.from({ length: rowsCount }).map((_, idx) => (
                        <LogoBand
                          key={`row-${idx}`}
                          urls={rowShuffles[idx]}
                          reverse={idx % 2 === 1}
                          offset={offsets[idx] ?? 0}
                        />
                      ))}
                      {/* Duplicate for infinite loop */}
                      {Array.from({ length: rowsCount }).map((_, idx) => (
                        <LogoBand
                          key={`row-dup-${idx}`}
                          urls={rowShuffles[idx]}
                          reverse={idx % 2 === 1}
                          offset={offsets[idx] ?? 0}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 text-[9px] sm:text-[10px] text-black/70 justify-center">
                <Pill>Copy‑paste hell</Pill>
                <Pill>Tab chaos</Pill>
                <Pill>Manual everything</Pill>
                <Pill>Nothing talks to anything</Pill>
                <Pill>"Where did I see that?"</Pill>
              </div>
            </div>

            {/* AFTER - Mobile Optimized */}
            <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border-[3px] border-[hsl(var(--primary)/0.25)] bg-[linear-gradient(to_bottom,white,hsl(var(--primary)/0.07))]">
              <div className="p-4 sm:p-5 md:p-7">
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs mb-3 sm:mb-4 border border-[hsl(var(--primary)/0.20)] bg-[hsl(var(--primary)/0.07)] text-brand-strong">How It Works Now</span>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">boilr AI — finds it, researches it, enriches it, prioritizes it</h3>
                <div className="rounded-xl sm:rounded-2xl border border-[hsl(var(--primary)/0.13)] bg-white p-3 sm:p-4 md:p-6">
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-center gap-2 sm:gap-3"><span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg text-xs sm:text-sm border border-[hsl(var(--primary)/0.13)] bg-[hsl(var(--primary)/0.07)] text-brand-strong">✦</span><span className="text-gray-800 text-xs sm:text-sm md:text-base">AI finds opportunities</span></li>
                    <li className="flex items-center gap-2 sm:gap-3"><span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg text-xs sm:text-sm border border-[hsl(var(--primary)/0.13)] bg-[hsl(var(--primary)/0.07)] text-brand-strong">◎</span><span className="text-gray-800 text-xs sm:text-sm md:text-base">AI researches and enriches</span></li>
                    <li className="flex items-center gap-2 sm:gap-3"><span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg text-xs sm:text-sm border border-[hsl(var(--primary)/0.13)] bg-[hsl(var(--primary)/0.07)] text-brand-strong">⚡</span><span className="text-gray-800 text-xs sm:text-sm md:text-base">AI prioritizes by fit</span></li>
                </ul>
              </div>
              </div>
              <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 grid grid-cols-3 gap-2 sm:gap-3 text-center text-[9px] sm:text-[10px] text-black/70">
                <div className="rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1.5 sm:py-2 border border-[hsl(var(--primary)/0.13)] bg-[hsl(var(--primary)/0.07)]">Finds</div>
                <div className="rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1.5 sm:py-2 border border-[hsl(var(--primary)/0.13)] bg-[hsl(var(--primary)/0.07)]">Enriches</div>
                <div className="rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1.5 sm:py-2 border border-[hsl(var(--primary)/0.13)] bg-[hsl(var(--primary)/0.07)]">Prioritizes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marqueeLTR { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
          @keyframes marqueeRTL { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @keyframes scrollVertical { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
          ._bandTrack { width: 200%; display: flex; align-items: center; gap: 16px; }
          ._ltr { animation: marqueeLTR 32s linear infinite; }
          ._rtl { animation: marqueeRTL 28s linear infinite; }
          .animate-scrollVertical { animation: scrollVertical 25s linear infinite; }
        `
      }} />
    </section>
  );
}

function LogoBand({ urls, reverse, offset = 0 }: { urls: string[]; reverse?: boolean; offset?: number }) {
  const [paused, setPaused] = useState(false);
  const dirClass = reverse ? "_rtl" : "_ltr";
  // Rotate the array per row to vary order, then duplicate for seamless loop
  const rotated = urls.length > 0 ? [...urls.slice(offset), ...urls.slice(0, offset)] : urls;
  const duplicated = [...rotated, ...rotated];
  return (
    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-black/10 bg-white h-14 sm:h-16 flex-shrink-0">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-white to-transparent" />
      <div
        className={`_bandTrack ${dirClass} px-4 sm:px-6 py-3 sm:py-4 items-center`}
        style={{ animationPlayState: paused ? "paused" : "running" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {duplicated.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt="Company logo"
            className="h-5 sm:h-6 md:h-7 object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-white border border-black/10 px-2 py-1">{children}</span>;
}
