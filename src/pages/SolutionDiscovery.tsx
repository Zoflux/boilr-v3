import { Footer } from "@/components/Footer";
import { NavigationHeader } from "@/components/NavigationHeader";
import { FAQSection, FAQItem } from "@/components/FAQSection";
import { Check, Users, Compass, Award, DollarSign, Phone, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const SolutionDiscovery = () => {
  const handleScheduleDemo = () => {
    window.open("https://calendly.com/felix-boilr/demo", "_blank");
  };

  // Scroll animation state for "Leads from Everywhere" section
  const [scrollPhase, setScrollPhase] = useState(0); // 0 = sources, 1 = hiring managers
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1 for progress bar
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollSectionRef.current) return;

      const rect = scrollSectionRef.current.getBoundingClientRect();
      const sectionHeight = scrollSectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress within the section (0 to 1)
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (sectionHeight)));
      setScrollProgress(progress);

      // Determine phase based on scroll progress - trigger at 70% (more scroll before change)
      if (progress > 0.7) {
        setScrollPhase(1);
      } else {
        setScrollPhase(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hiring managers data
  const hiringManagers = [
    { name: "Sarah Miller", title: "VP Engineering", company: "TechCorp Inc.", phone: "+1 (555) 123-4567", email: "s.miller@techcorp.com" },
    { name: "James Chen", title: "Head of Talent", company: "ScaleUp Ltd.", phone: "+44 20 7946 0958", email: "j.chen@scaleup.co.uk" },
    { name: "Emma Rodriguez", title: "CTO", company: "InnovateTech", phone: "+1 (555) 987-6543", email: "e.rodriguez@innovate.io" },
  ];

  // Discovery-specific FAQs
  const discoveryFaqs: FAQItem[] = [
    {
      question: "What is boilr Discovery?",
      answer: "boilr Discovery is an AI-powered lead sourcing tool that monitors 10,000+ sources 24/7 — career pages, funding rounds, hiring velocity, leadership changes — and delivers qualified opportunities directly to your inbox.",
    },
    {
      question: "How does Discovery integrate with my CRM?",
      answer: "Discovery pushes enriched contacts and signals directly to major CRM and ATS platforms with one click. You can also export ready-to-send outreach lists.",
    },
    {
      question: "What sources does boilr monitor?",
      answer: "10,000+ sources refreshed daily — career pages, hiring velocity, funding rounds, leadership changes, tech signals, expansions, social mentions, news articles, and curated industry feeds.",
    },
    {
      question: "Can I customize what leads I receive?",
      answer: "Absolutely. You set your ICP — roles, seniority, geography, tech stack, industries — and boilr filters everything to match. Each desk or market can have its own configuration.",
    },
  ];

  const bottomFeatures = [
    {
      icon: Users,
      title: "Real-time sourcing",
      description: "Never have your recruitment team face empty pipelines alone.",
    },
    {
      icon: Compass,
      title: "Guided discovery",
      description: "Reinforce your sourcing methodology on leads and ramp recruiters faster.",
    },
    {
      icon: Award,
      title: "AI-powered scoring",
      description: "Have every lead graded with AI to determine where your best fits are.",
    },
    {
      icon: DollarSign,
      title: "Eliminate admin tasks",
      description: "Give your recruitment team back 50% of their time with automated enrichment.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavigationHeader />

      <main>
        {/* ===== HERO SECTION (Dark gray gradient) ===== */}
        <section className="bg-gradient-to-br from-[#0a0a0c] via-[#0d0d10] to-[#0f1012] -mt-20 pt-32 pb-20 sm:-mt-24 sm:pt-40 sm:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
                  How boilr Discovery{" "}
                  <span className="text-[#5fff9e]">powers your sourcing</span>
                </h1>
                <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
                  You can't force recruiters to manually research leads all day… unless you don't have boilr's Discovery AI
                </p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5fff9e] mt-0.5 flex-shrink-0" />
                    <span className="text-white">Never manually rebuild prospect lists again</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5fff9e] mt-0.5 flex-shrink-0" />
                    <span className="text-white">Get new qualified leads every morning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5fff9e] mt-0.5 flex-shrink-0" />
                    <span className="text-white">Stay ahead of competitors by 60+ days</span>
                  </li>
                </ul>

                {/* CTA with email input style */}
                <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    placeholder="What's your work email?"
                    className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#5fff9e]/50 transition-colors"
                  />
                  <button
                    onClick={handleScheduleDemo}
                    className="px-6 py-4 rounded-xl font-semibold text-black bg-[#5fff9e] hover:bg-[#4de88a] transition-all duration-200 whitespace-nowrap"
                  >
                    Get started
                  </button>
                </div>
              </div>

              {/* Right: Multi-card Floating Layout with 3D Perspective */}
              <div className="relative" style={{ perspective: '1500px' }}>

                {/* Top-right secondary card (like Battlecards in reference) */}
                <div
                  className="absolute -top-4 -right-4 w-44 rounded-xl overflow-hidden shadow-lg border border-white/[0.08] z-10"
                  style={{
                    transform: 'perspective(1500px) rotateY(-15deg) rotateX(8deg)',
                  }}
                >
                  <div className="bg-[#1a1a1f] p-4">
                    <div className="text-gray-300 font-medium text-sm mb-2">Quick Actions</div>
                    <div className="space-y-2">
                      <div className="bg-[#252529] rounded-lg px-3 py-2 text-gray-400 text-xs">
                        Export to CRM
                      </div>
                      <div className="bg-[#252529] rounded-lg px-3 py-2 text-gray-400 text-xs">
                        Send to Slack
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main floating card with tilt */}
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/[0.08]"
                  style={{
                    transform: 'perspective(1500px) rotateY(-12deg) rotateX(6deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Mock UI */}
                  <div className="aspect-[4/3] bg-[#0f0f12] p-6">
                    {/* Mock window chrome */}
                    <div className="flex gap-2 mb-5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                    </div>

                    {/* Mock content */}
                    <div className="space-y-4">
                      {/* Lead Discovery Card */}
                      <div className="bg-[#1a1a1f] rounded-xl p-4 border border-white/[0.06]">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-full bg-[#1f3d2a] flex items-center justify-center">
                            <Check className="w-4 h-4 text-[#4ade80]" />
                          </div>
                          <span className="text-[#4ade80] font-medium">New Lead Discovered</span>
                        </div>
                        <p className="text-gray-200 text-sm">TechCorp Inc. just posted 3 new engineering roles</p>
                      </div>

                      {/* Intent Score Card */}
                      <div className="bg-[#17171b] rounded-xl p-4 border border-white/[0.06]">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Intent Score</div>
                            <div className="text-white font-semibold">High Priority</div>
                          </div>
                          <div className="w-12 h-12 rounded-full border-[3px] border-[#4ade80] flex items-center justify-center">
                            <span className="text-[#4ade80] font-bold text-lg">92</span>
                          </div>
                        </div>
                      </div>

                      {/* Next Step */}
                      <div className="text-gray-600 text-xs uppercase tracking-wider">Next step</div>
                      <div className="bg-[#141417] rounded-xl p-3 text-gray-400 text-sm border border-white/[0.06]">
                        Contact Sarah Miller, VP Engineering — hiring signal detected
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom-right stats card */}
                <div
                  className="absolute -right-6 -bottom-4 w-40 rounded-xl overflow-hidden shadow-lg border border-white/[0.08]"
                  style={{
                    transform: 'perspective(1500px) rotateY(-18deg) rotateX(10deg)',
                  }}
                >
                  <div className="bg-[#1a1a1f] p-4">
                    <div className="flex gap-1.5 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#ff5f57]/70"></div>
                      <div className="w-2 h-2 rounded-full bg-[#febc2e]/70"></div>
                      <div className="w-2 h-2 rounded-full bg-[#28c840]/70"></div>
                    </div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-wider mb-2">Signals Today</div>
                    <div className="text-white font-bold text-xl">+24</div>
                    <div className="text-[#4ade80] text-xs">↑ 12% vs last week</div>
                  </div>
                </div>

                {/* Subtle glow - much more muted */}
                <div className="absolute inset-0 bg-[#4ade80]/[0.03] blur-3xl -z-10 rounded-full scale-150"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURE 1: Lead Sources with Scroll Animation ===== */}
        <section ref={scrollSectionRef} className="bg-white relative">
          {/* Scroll container for animation trigger */}
          <div className="h-[180vh]">
            {/* Sticky content wrapper - stays visible during scroll */}
            <div className="sticky top-0 pt-20 sm:pt-28 pb-20 sm:pb-28 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  {/* Left: Animated Mockup - vertically centered */}
                  <div className="relative flex items-center justify-center">
                    {/* Animated Progress Bar - shorter, centered vertically */}
                    <div
                      className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-24 rounded-full bg-gray-200 overflow-hidden"
                    >
                      <div
                        className="w-full bg-gradient-to-b from-[#5fff9e] to-[#10b981] rounded-full transition-all duration-100 ease-out"
                        style={{ height: `${Math.min(scrollProgress * 140, 100)}%` }}
                      ></div>
                    </div>

                    {/* Phase 0: Sources Grid - slides UP when leaving */}
                    <div
                      className={`rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white transition-all duration-700 ease-out w-full max-w-md ${scrollPhase === 0
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-full pointer-events-none absolute'
                        }`}
                    >
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                        <div className="grid grid-cols-2 gap-3">
                          {/* LinkedIn */}
                          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-lg bg-[#0A66C2] flex items-center justify-center">
                                <span className="text-white font-bold text-sm">in</span>
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 text-sm">LinkedIn</div>
                                <div className="text-xs text-[#10b981]">Synced ✓</div>
                              </div>
                            </div>
                          </div>

                          {/* Career Pages */}
                          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-lg bg-[#001e50] flex items-center justify-center">
                                <span className="text-white font-bold text-xs">VW</span>
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 text-sm">Career Pages</div>
                                <div className="text-xs text-[#10b981]">Synced ✓</div>
                              </div>
                            </div>
                          </div>

                          {/* News & PR */}
                          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-lg bg-[#FCD0A1] flex items-center justify-center">
                                <span className="text-[#33140c] font-serif font-bold text-sm">FT</span>
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 text-sm">News & PR</div>
                                <div className="text-xs text-[#10b981]">Synced ✓</div>
                              </div>
                            </div>
                          </div>

                          {/* Crunchbase */}
                          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-lg bg-[#0066FF] flex items-center justify-center">
                                <span className="text-white font-bold text-xs">cb</span>
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 text-sm">Crunchbase</div>
                                <div className="text-xs text-gray-500">Monitoring...</div>
                              </div>
                            </div>
                          </div>

                          {/* Websites */}
                          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                                <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <circle cx="12" cy="12" r="10" />
                                  <path d="M2 12h20" />
                                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 text-sm">Websites</div>
                                <div className="text-xs text-[#10b981]">Synced ✓</div>
                              </div>
                            </div>
                          </div>

                          {/* X (Twitter) */}
                          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center">
                                <span className="text-white font-bold text-base">𝕏</span>
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 text-sm">X / Twitter</div>
                                <div className="text-xs text-[#10b981]">Synced ✓</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-center">
                          <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm">
                            <span className="text-[#4ade80]">↓</span> All sources aggregated
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phase 1: Hiring Managers - slides UP from bottom */}
                    <div
                      className={`rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white transition-all duration-700 ease-out w-full max-w-md ${scrollPhase === 1
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full pointer-events-none absolute'
                        }`}
                    >
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-medium">
                          Hiring Managers Found
                        </div>
                        <div className="space-y-3">
                          {hiringManagers.map((manager, idx) => (
                            <div
                              key={idx}
                              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                              style={{ animationDelay: `${idx * 150}ms` }}
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-600 font-semibold text-sm">
                                  {manager.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold text-gray-900">{manager.name}</div>
                                  <div className="text-sm text-gray-500">{manager.title} @ {manager.company}</div>
                                  <div className="mt-2 flex flex-wrap gap-2">
                                    <a href={`tel:${manager.phone}`} className="inline-flex items-center gap-1.5 text-xs bg-[#5fff9e]/20 text-[#0d7c4a] px-2.5 py-1 rounded-full hover:bg-[#5fff9e]/30 transition-colors">
                                      <Phone className="w-3 h-3" />
                                      {manager.phone}
                                    </a>
                                    <a href={`mailto:${manager.email}`} className="inline-flex items-center gap-1.5 text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full hover:bg-gray-200 transition-colors">
                                      <Mail className="w-3 h-3" />
                                      {manager.email}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 flex items-center justify-center">
                          <div className="inline-flex items-center gap-2 bg-[#5fff9e] text-black px-4 py-2 rounded-full text-sm font-medium">
                            <Phone className="w-4 h-4" /> Ready to contact
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content with Animated Heading */}
                  <div>
                    {/* Animated Heading */}
                    <div className="relative h-[4rem] sm:h-[5rem] overflow-hidden">
                      <h2
                        className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight absolute inset-0 transition-all duration-500 ${scrollPhase === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
                          }`}
                      >
                        Leads from Everywhere
                      </h2>
                      <h2
                        className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight absolute inset-0 transition-all duration-500 ${scrollPhase === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                          }`}
                      >
                        Don't be shy, call them
                      </h2>
                    </div>

                    {/* Animated Description */}
                    <div className="relative h-[5rem] overflow-hidden mt-4">
                      <p
                        className={`text-lg text-gray-600 leading-relaxed absolute inset-0 transition-all duration-500 ${scrollPhase === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                          }`}
                      >
                        Not just LinkedIn. We aggregate signals from across the entire internet so you never miss an opportunity.
                      </p>
                      <p
                        className={`text-lg text-gray-600 leading-relaxed absolute inset-0 transition-all duration-500 ${scrollPhase === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                          }`}
                      >
                        We find the hiring managers with verified contact details — phone numbers and emails ready for outreach.
                      </p>
                    </div>

                    <div className="mt-10 grid sm:grid-cols-2 gap-8">
                      <div className={`transition-all duration-500 ${scrollPhase === 1 ? 'opacity-50' : 'opacity-100'}`}>
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                          <span className="text-xl">📡</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">10,000+ sources monitored</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Career pages, funding rounds, news articles, company websites — all tracked and aggregated.
                        </p>
                      </div>
                      <div className={`transition-all duration-500 ${scrollPhase === 0 ? 'opacity-50' : 'opacity-100 scale-105'}`}>
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-500 ${scrollPhase === 1 ? 'bg-[#5fff9e]/30' : 'bg-gray-100'}`}>
                          <span className="text-xl">👤</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Find the hiring manager</h3>
                        <p className="text-gray-600 leading-relaxed">
                          We identify the right decision-maker so you can reach out directly — no more guessing.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleScheduleDemo}
                      className="mt-10 px-8 py-4 rounded-xl font-semibold text-black bg-[#5fff9e] hover:bg-[#4de88a] shadow-lg shadow-[#5fff9e]/25 transition-all duration-200"
                    >
                      Book a call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIAL ===== */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Photo with circular frame */}
                <div className="aspect-square md:aspect-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-12">
                  <div className="relative">
                    {/* Outer circle container */}
                    <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-[#5fff9e]/20 to-[#10b981]/20 p-4 flex items-center justify-center">
                      {/* Inner circle with image */}
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img
                          src="/helen-wright.jpg"
                          alt="Helen Wright - Managing Director at 923-jobs"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#5fff9e]/30 scale-110"></div>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="text-gray-400 font-medium text-sm mb-6">boilr.</div>
                  <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                    Game-changer for our productivity.
                  </blockquote>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    "We went from no structured business development to signing a new client in month one. boilr lets us focus on the human side, not the research."
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">Helen Wright</div>
                    <div className="text-gray-500 text-sm">Managing Director @ 923-jobs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURE 2: ICP Filtering (Screenshot Right) ===== */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Content */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Matched Leads
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Stop wasting time on leads that don't fit. boilr filters every signal against your ideal customer profile in real time.
                </p>

                <div className="mt-10 grid sm:grid-cols-2 gap-8">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                      <span className="text-xl">🎯</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Smart filtering</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Role, seniority, geography, tech stack — only high-fit accounts make the cut.
                    </p>
                  </div>
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                      <span className="text-xl">📈</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Intent scoring</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Know who's actively hiring based on real signals, not guesswork.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleScheduleDemo}
                  className="mt-10 px-8 py-4 rounded-xl font-semibold text-black bg-[#5fff9e] hover:bg-[#4de88a] shadow-lg shadow-[#5fff9e]/25 transition-all duration-200"
                >
                  Book a call
                </button>
              </div>

              {/* Right: Interactive Lead Matcher */}
              <div className="relative lg:order-last">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                  <InteractiveLeadMatcher />
                </div>
                {/* Decorative blur */}
                <div className="absolute -right-8 top-1/4 w-32 h-32 bg-[#5fff9e]/20 blur-3xl rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4-COLUMN FEATURES ===== */}
        <section className="py-16 sm:py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {bottomFeatures.map((feature, idx) => (
                <div key={idx}>
                  <feature.icon className="w-6 h-6 text-gray-900 mb-4 stroke-[1.5]" />
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <FAQSection faqs={discoveryFaqs} />

        {/* ===== FINAL CTA ===== */}
        <section className="py-20 sm:py-28 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to automate your sourcing?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Join 50+ recruitment agencies already using boilr Discovery to stay ahead of the competition.
            </p>
            <button
              onClick={handleScheduleDemo}
              className="px-8 py-4 rounded-xl font-semibold text-black bg-[#5fff9e] hover:bg-[#4de88a] shadow-lg shadow-[#5fff9e]/25 transition-all duration-200"
            >
              Book Demo →
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Interactive Lead Matcher Component with Animated Cursor Demo
function InteractiveLeadMatcher() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>(["Engineering", "Series A+", "UK & EU"]);
  const [isVisible, setIsVisible] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });
  const [cursorClicking, setCursorClicking] = useState(false);
  const [notifications, setNotifications] = useState<Array<{ id: number; text: string; type: string }>>([]);
  const [notificationCounter, setNotificationCounter] = useState(0);
  const [selectedLead, setSelectedLead] = useState<string | null>(null);
  const [filterAnimKey, setFilterAnimKey] = useState(0); // Force re-animation

  const filters = [
    { id: "Engineering", label: "Engineering" },
    { id: "Series A+", label: "Series A+" },
    { id: "UK & EU", label: "UK & EU" },
    { id: "SaaS", label: "SaaS" },
    { id: "50-200", label: "50-200 emp" },
  ];

  const leads = [
    { name: "TechCorp Inc.", roles: 3, intent: "High", score: 95, tags: ["Engineering", "Series A+", "UK & EU"] },
    { name: "ScaleUp Ltd.", roles: 5, intent: "Medium", score: 72, tags: ["Engineering", "UK & EU", "SaaS"] },
    { name: "DataFlow AI", roles: 2, intent: "High", score: 88, tags: ["Engineering", "Series A+", "SaaS"] },
    { name: "CloudNine", roles: 4, intent: "Low", score: 45, tags: ["UK & EU", "50-200"] },
    { name: "NextGen Labs", roles: 6, intent: "High", score: 91, tags: ["Engineering", "SaaS", "Series A+"] },
    { name: "Velocity.io", roles: 3, intent: "Medium", score: 68, tags: ["SaaS", "50-200", "UK & EU"] },
  ];

  // Intersection observer - stricter threshold
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset everything when leaving view
          setIsVisible(false);
          setShowCursor(false);
          setCursorPosition({ x: 50, y: 30 });
          setActiveFilters(["Engineering", "Series A+", "UK & EU"]);
          setNotifications([]);
        }
      },
      { threshold: 0.6 } // More visible before starting
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Start cursor animation when visible
  useEffect(() => {
    if (!isVisible) return;

    const startDelay = setTimeout(() => {
      setShowCursor(true);
    }, 800); // Faster start

    return () => clearTimeout(startDelay);
  }, [isVisible]);

  // Cursor animation sequence - MORE DYNAMIC
  useEffect(() => {
    if (!showCursor || !isVisible) return;

    // Position calculations
    const filterRow1Y = 85;   // First filter row Y
    const engineeringX = 15;
    const seriesAX = 32;
    const ukEuX = 48;
    const saasX = 62;
    const empX = 78;

    const lead1Y = 175;
    const lead2Y = 215;
    const lead3Y = 255;
    const leadLeftX = 25;
    const leadScoreX = 90;

    // Slower, more deliberate animation sequence
    const sequence = [
      // Start position - cursor appears top center
      { delay: 0, action: () => setCursorPosition({ x: 50, y: 40 }) },

      // 1. Move to SaaS filter and click ON
      { delay: 800, action: () => setCursorPosition({ x: saasX, y: filterRow1Y }) },
      { delay: 1400, action: () => setCursorClicking(true) },
      { delay: 1600, action: () => { setCursorClicking(false); toggleFilter("SaaS"); addNotification("SaaS added", "success"); } },

      // 2. Move to 50-200 emp and click ON
      { delay: 2400, action: () => setCursorPosition({ x: empX, y: filterRow1Y }) },
      { delay: 3000, action: () => setCursorClicking(true) },
      { delay: 3200, action: () => { setCursorClicking(false); toggleFilter("50-200"); addNotification("50-200 emp added", "success"); } },

      // 3. Move down to first lead and click
      { delay: 4000, action: () => setCursorPosition({ x: 40, y: lead1Y }) },
      { delay: 4600, action: () => setCursorClicking(true) },
      { delay: 4800, action: () => { setCursorClicking(false); selectLead("TechCorp Inc."); addNotification("Viewing TechCorp", "success"); } },

      // 4. Move to lead score badge
      { delay: 5600, action: () => setCursorPosition({ x: leadScoreX, y: lead1Y }) },
      { delay: 6200, action: () => setCursorClicking(true) },
      { delay: 6400, action: () => { setCursorClicking(false); addNotification("High intent: 95", "success"); } },

      // 5. Back to filters - remove Series A+
      { delay: 7200, action: () => setCursorPosition({ x: seriesAX, y: filterRow1Y }) },
      { delay: 7800, action: () => setCursorClicking(true) },
      { delay: 8000, action: () => { setCursorClicking(false); toggleFilter("Series A+"); addNotification("Series A+ removed", "info"); } },

      // 6. Remove UK & EU
      { delay: 8800, action: () => setCursorPosition({ x: ukEuX, y: filterRow1Y }) },
      { delay: 9400, action: () => setCursorClicking(true) },
      { delay: 9600, action: () => { setCursorClicking(false); toggleFilter("UK & EU"); addNotification("UK & EU removed", "info"); } },

      // 7. Click second lead
      { delay: 10400, action: () => setCursorPosition({ x: 40, y: lead2Y }) },
      { delay: 11000, action: () => setCursorClicking(true) },
      { delay: 11200, action: () => { setCursorClicking(false); selectLead("ScaleUp Ltd."); addNotification("Viewing ScaleUp", "success"); } },

      // 8. Re-add filters back
      { delay: 12000, action: () => setCursorPosition({ x: seriesAX, y: filterRow1Y }) },
      { delay: 12600, action: () => setCursorClicking(true) },
      { delay: 12800, action: () => { setCursorClicking(false); toggleFilter("Series A+"); addNotification("Series A+ added", "success"); } },

      { delay: 13400, action: () => setCursorPosition({ x: ukEuX, y: filterRow1Y }) },
      { delay: 14000, action: () => setCursorClicking(true) },
      { delay: 14200, action: () => { setCursorClicking(false); toggleFilter("UK & EU"); addNotification("UK & EU added", "success"); } },

      // 9. Remove SaaS and 50-200
      { delay: 15000, action: () => setCursorPosition({ x: saasX, y: filterRow1Y }) },
      { delay: 15600, action: () => setCursorClicking(true) },
      { delay: 15800, action: () => { setCursorClicking(false); toggleFilter("SaaS"); } },

      { delay: 16400, action: () => setCursorPosition({ x: empX, y: filterRow1Y }) },
      { delay: 17000, action: () => setCursorClicking(true) },
      { delay: 17200, action: () => { setCursorClicking(false); toggleFilter("50-200"); } },

      // 10. Cursor exits
      { delay: 18000, action: () => setCursorPosition({ x: 105, y: 40 }) },
      { delay: 18600, action: () => setShowCursor(false) },

      // 11. Loop after pause
      {
        delay: 20000, action: () => {
          if (isVisible) {
            setShowCursor(true);
            setCursorPosition({ x: 50, y: 40 });
          }
        }
      },
    ];

    const timeouts: NodeJS.Timeout[] = [];
    sequence.forEach(({ delay, action }) => {
      const timeout = setTimeout(action, delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(t => clearTimeout(t));
  }, [showCursor, isVisible]);

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
    setFilterAnimKey(k => k + 1); // Trigger re-animation
    setSelectedLead(null); // Clear selection when filters change
  };

  const selectLead = (leadName: string) => {
    setSelectedLead(leadName);
  };

  const addNotification = (text: string, type: string) => {
    const id = notificationCounter;
    setNotificationCounter(prev => prev + 1);
    setNotifications(prev => [...prev, { id, text, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 2000);
  };

  // Filter leads based on active filters
  const filteredLeads = leads.filter(lead =>
    activeFilters.length === 0 || activeFilters.some(f => lead.tags.includes(f))
  );

  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-[#5fff9e]";
    if (score >= 60) return "bg-yellow-400";
    return "bg-gray-300";
  };

  return (
    <div ref={containerRef} className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Animated Demo Cursor */}
      {showCursor && (
        <div
          className="absolute z-30 pointer-events-none transition-all duration-500 ease-out"
          style={{
            left: `${cursorPosition.x}%`,
            top: `${cursorPosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Cursor SVG */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`transition-transform duration-150 ${cursorClicking ? 'scale-75' : 'scale-100'}`}
          >
            <path
              d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.48 0 .72-.58.38-.92L6.35 2.85a.5.5 0 0 0-.85.36Z"
              fill="#111"
              stroke="#fff"
              strokeWidth="1.5"
            />
          </svg>
          {/* Click ripple effect */}
          {cursorClicking && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 rounded-full bg-[#5fff9e]/40 animate-ping" />
            </div>
          )}
        </div>
      )}

      {/* Floating notifications - positioned inside the container */}
      <div className="absolute top-16 right-4 z-20 space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`px-3 py-1.5 rounded-lg shadow-lg text-xs font-medium animate-slideInRight ${notification.type === 'success'
              ? 'bg-[#5fff9e] text-black'
              : 'bg-gray-800 text-white'
              }`}
          >
            {notification.text}
          </div>
        ))}
      </div>

      {/* Interactive Demo Badge */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-[#5fff9e]/10 border border-[#5fff9e]/30">
          <div className="relative">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5fff9e]"></div>
            <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-[#5fff9e] animate-ping"></div>
          </div>
          <span className="text-[10px] font-medium text-[#10b981]">Interactive Demo</span>
        </div>
        <span className="text-[9px] text-gray-400">Try clicking the filters!</span>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 mb-3">
        <div className="text-xs font-medium text-gray-500 mb-2">Filters</div>
        <div className="flex flex-wrap gap-1.5">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => { toggleFilter(filter.id); addNotification(`${filter.label} ${activeFilters.includes(filter.id) ? 'off' : 'on'}`, activeFilters.includes(filter.id) ? 'info' : 'success'); }}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer
                ${activeFilters.includes(filter.id)
                  ? "bg-[#5fff9e]/20 text-[#10b981] border-2 border-[#5fff9e]/50 scale-105"
                  : "bg-gray-100 text-gray-500 border-2 border-transparent hover:bg-gray-200"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Leads - show more, better animation */}
      <div className="space-y-1.5 overflow-hidden" key={filterAnimKey}>
        {filteredLeads.length > 0 ? (
          filteredLeads.slice(0, 5).map((lead, idx) => (
            <div
              key={lead.name}
              onClick={() => { selectLead(lead.name); addNotification(`${lead.name} - Score ${lead.score}`, 'success'); }}
              className={`bg-white rounded-lg p-2 shadow-sm border flex items-center justify-between
                transition-all duration-300 cursor-pointer
                ${selectedLead === lead.name
                  ? "border-[#5fff9e] bg-[#5fff9e]/10 scale-[1.02] shadow-md"
                  : "border-gray-100 hover:shadow-md hover:border-[#5fff9e]/30 hover:scale-[1.01]"}`}
              style={{
                animation: `fadeSlideIn 0.35s ease-out ${idx * 80}ms both`
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[9px] font-bold text-gray-500">
                  {lead.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-[11px]">{lead.name}</div>
                  <div className="text-[9px] text-gray-500">{lead.roles} roles • {lead.intent}</div>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full ${getScoreColor(lead.score)} flex items-center justify-center transition-transform hover:scale-110`}>
                <span className="text-black text-[9px] font-bold">{lead.score}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-gray-400 text-xs bg-white rounded-lg border border-gray-100">
            No leads match — adjust filters above
          </div>
        )}
      </div>

      {/* Match count - more prominent */}
      <div className="mt-2 flex items-center justify-center gap-2">
        <div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#5fff9e] rounded-full transition-all duration-500"
            style={{ width: `${(filteredLeads.length / leads.length) * 100}%` }}
          />
        </div>
        <span className="text-[10px] text-gray-500 font-medium">
          {filteredLeads.length}/{leads.length}
        </span>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slideInRight {
            animation: slideInRight 0.3s ease-out;
          }
        `
      }} />
    </div>
  );
}

export default SolutionDiscovery;


