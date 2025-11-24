export function ProblemSection() {
  const cards = [
    {
      overline: "BD ADMIN OVERHEAD",
      quote: "50% of time on unproductive prospecting.",
      problem: "Manually scanning 5-10 boards daily for new hiring needs.",
      consequence: "20 hrs/week on lead discovery instead of outreach.",
      cost: "£52K–£67K/year per BD rep spent on admin instead of sales.",
      source: "Social Talent Research",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5h18M3 12h13M3 19h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      overline: "TOO SLOW = ALWAYS SECOND",
      quote: "Best candidates gone in 10 days. Best opportunities go even faster.",
      problem: "You find roles 24–72h after posting — manually.",
      consequence: "5 agencies already spoke to the hiring manager.",
      cost: "1–2 placements/month lost = 13–27% revenue loss.",
      source: "ERE Research, UK ONS",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      ),
    },
    {
      overline: "PIPELINE FRAGMENTATION",
      quote: "10,000+ sources. Manually you see 10%. Competitors see 10%. Who sees the other 80%? Nobody.",
      problem: "Job boards + career pages are fragmented across 10,000+ sources.",
      consequence: "90% of ICP opportunities remain invisible.",
      cost: "Your pipeline is 10× smaller than it could be.",
      source: "Industry Analysis",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12c2-4 6-6 9-6s7 2 9 6c-2 4-6 6-9 6s-7-2-9-6Z" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section id="problem" className="relative isolate bg-gray-50 py-12 sm:py-14 md:py-16 lg:py-20 text-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-black/10 p-5 sm:p-6 md:p-10 overflow-hidden">
        <header className="text-center">
          <p className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-brand-strong">THE PROBLEM</p>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">You already know this...</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-black/70">
            The way most agencies find opportunities is broken. And it's costing you placements you should be making.
          </p>
        </header>

        <div className="mt-8 sm:mt-10 md:mt-12 grid items-stretch gap-4 sm:gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={i}
              className="group flex h-full flex-col rounded-2xl sm:rounded-3xl border border-[#0d1117]/10 bg-white p-5 sm:p-6 md:p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="flex items-center gap-2 sm:gap-3 text-black">
                <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-[#0d1117]/5">{c.icon}</span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-black/55">
                  {c.overline}
                </span>
              </div>

              <blockquote className="mt-4 sm:mt-5 border-l-2 border-black/10 pl-3 sm:pl-4 text-[15px] sm:text-[17px] md:text-lg leading-relaxed text-black font-medium md:min-h-[110px]">
                "{c.quote}"
              </blockquote>

              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 flex-1 border-t border-black/10">
                <dl className="grid grid-cols-[auto,1fr] gap-x-2 sm:gap-x-3 gap-y-3 md:min-h-[220px]">
                  <dt className="min-w-[6rem] sm:min-w-[7.5rem] text-[11px] sm:text-[13px] font-semibold uppercase tracking-wider sm:tracking-widest text-brand-strong">
                    Problem
                  </dt>
                  <dd className="text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-black/75"><span className="block md:min-h-[96px]">{c.problem}</span></dd>

                  <dt className="min-w-[6rem] sm:min-w-[7.5rem] text-[11px] sm:text-[13px] font-semibold uppercase tracking-wider sm:tracking-widest text-brand-strong">
                    Consequence
                  </dt>
                  <dd className="text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-black/75"><span className="block md:min-h-[96px]">{c.consequence}</span></dd>

                  <dt className="min-w-[6rem] sm:min-w-[7.5rem] text-[11px] sm:text-[13px] font-semibold uppercase tracking-wider sm:tracking-widest text-brand-strong">
                    Cost
                  </dt>
                  <dd className="text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-black/75"><span className="block md:min-h-[44px]">{c.cost}</span></dd>
                </dl>
              </div>

              <footer className="mt-5 sm:mt-6 border-t border-black/10 pt-3 sm:pt-4 text-[10px] sm:text-xs text-black/45">
                Source: {c.source}
              </footer>
            </article>
          ))}
        </div>
        </div>
      </div>
      {/* removed divider to avoid any visual break between sections */}
    </section>
  );
}

