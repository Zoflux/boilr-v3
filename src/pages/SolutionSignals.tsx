import { Footer } from "@/components/Footer";
import { NavigationHeader } from "@/components/NavigationHeader";
import { FAQSection, FAQItem } from "@/components/FAQSection";
import { Check, Bell, Zap, Filter, Newspaper, Briefcase, TrendingUp, Users, Building2, Radio, MessageSquare, Globe, Sparkles, Target, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const SolutionSignals = () => {
  const handleScheduleDemo = () => {
    window.open("https://calendly.com/felix-boilr/demo", "_blank");
  };

  // Animated signal notifications state
  const [visibleSignals, setVisibleSignals] = useState<Set<number>>(new Set());
  const [pulseActive, setPulseActive] = useState(true);

  // Hero animation - continuous carousel: one disappears, next one appears
  useEffect(() => {
    const signalCount = 5;
    const showDuration = 2800; // How long each signal stays visible
    const staggerDelay = 1000; // Delay between each signal appearing initially

    // Track which signals are in their cycle
    const timeouts: NodeJS.Timeout[] = [];

    // Function to handle one signal's lifecycle
    const cycleSignal = (index: number) => {
      // Show this signal
      setVisibleSignals(prev => new Set([...prev, index]));

      // Hide after showDuration, then restart cycle
      const hideTimeout = setTimeout(() => {
        setVisibleSignals(prev => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });

        // Wait a bit then show again (full cycle = all signals have had a turn)
        const restartTimeout = setTimeout(() => {
          cycleSignal(index);
        }, (signalCount - 1) * staggerDelay);

        timeouts.push(restartTimeout);
      }, showDuration);

      timeouts.push(hideTimeout);
    };

    // Start each signal with staggered timing
    // This creates the effect: 0 appears, then 1, then 2... 
    // When 0 disappears, it waits for others then reappears
    [0, 1, 2, 3, 4].forEach((idx) => {
      const startTimeout = setTimeout(() => {
        cycleSignal(idx);
      }, idx * staggerDelay);
      timeouts.push(startTimeout);
    });

    return () => {
      timeouts.forEach(t => clearTimeout(t));
    };
  }, []);

  // Scroll-based timeline animation
  const [visibleSignalIndices, setVisibleSignalIndices] = useState<number[]>([]);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const timelineSectionRef = useRef<HTMLDivElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineSectionRef.current) return;

      const sectionRect = timelineSectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionTop = sectionRect.top;
      const sectionHeight = timelineSectionRef.current.offsetHeight;

      // Progress: 0 when section enters viewport, 1 when we've scrolled through
      // The sticky content stays fixed while we scroll through the 200vh height
      const scrollableDistance = sectionHeight - viewportHeight;

      // Start counting when section top reaches top of viewport
      const scrolledIntoSection = Math.max(0, -sectionTop);
      const progress = Math.max(0, Math.min(1, scrolledIntoSection / scrollableDistance));

      setTimelineProgress(progress);

      // Calculate which signals should be visible (max 4 to fit with right side)
      const maxSignals = 4;
      const signalCount = 6;

      // Signals appear as we scroll - spread across the scroll distance
      const adjustedProgress = Math.max(0, (progress - 0.1) / 0.8);
      const signalsToShow = Math.floor(adjustedProgress * (maxSignals + 0.8));

      // Build array: signals appear from index 5 down to 0 (newest first = top)
      const newVisibleIndices: number[] = [];
      for (let i = 0; i < Math.min(signalsToShow, signalCount); i++) {
        const signalIndex = signalCount - 1 - i;
        newVisibleIndices.push(signalIndex);
      }
      setVisibleSignalIndices(newVisibleIndices);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample signals for hero animation
  const heroSignals = [
    { type: "funding", icon: TrendingUp, text: "TechCorp raised $45M Series B", score: 94, position: "top-right" },
    { type: "hiring", icon: Briefcase, text: "ScaleUp posted 12 engineering roles", score: 88, position: "right" },
    { type: "leadership", icon: Users, text: "New CTO at InnovateTech", score: 91, position: "bottom-right" },
    { type: "news", icon: Newspaper, text: "DataFlow expands to EU market", score: 85, position: "bottom" },
    { type: "competitor", icon: Target, text: "Rival Agency lost key client", score: 92, position: "left" },
  ];

  // Timeline signals
  const timelineSignals = [
    { time: "09:15", type: "funding", company: "TechCorp", signal: "Series B announced — $45M", score: 94 },
    { time: "10:32", type: "hiring", company: "ScaleUp Ltd", signal: "12 new engineering roles posted", score: 88 },
    { time: "11:47", type: "leadership", company: "InnovateTech", signal: "New CTO announced — Sarah Miller", score: 91 },
    { time: "13:05", type: "news", company: "DataFlow", signal: "EU expansion press release", score: 85 },
    { time: "14:22", type: "competitor", company: "Rival Agency", signal: "Lost major tech client", score: 92 },
    { time: "15:38", type: "hiring", company: "CloudScale", signal: "Head of Engineering role", score: 89 },
  ];

  // Signals-specific FAQs
  const signalsFaqs: FAQItem[] = [
    {
      question: "What is boilr Signals?",
      answer: "boilr Signals aggregates hiring intent from across the internet — funding rounds, job postings, leadership changes, news articles, social mentions — and delivers them in a scored, actionable feed tailored to your ICP.",
    },
    {
      question: "How does Signals scoring work?",
      answer: "Each signal is scored 0-100 based on your configured ICP: role types, seniority, geography, industry, and tech stack. Higher scores mean stronger hiring intent and better fit for your desk.",
    },
    {
      question: "What sources does Signals monitor?",
      answer: "We monitor 10,000+ sources: LinkedIn, Twitter/X, company career pages, Crunchbase, TechCrunch, press releases, job boards, GitHub activity, and industry-specific feeds — all refreshed continuously.",
    },
    {
      question: "Can I get alerts for specific competitors?",
      answer: "Absolutely. Set up watchlists for competitor clients or target accounts. Get instant alerts when they raise funding, post jobs, or make leadership changes — so you're always first to reach out.",
    },
  ];

  const bottomFeatures = [
    {
      icon: Radio,
      title: "Real-time monitoring",
      description: "Signals refresh every hour across 10,000+ sources — never miss a hiring moment.",
    },
    {
      icon: Filter,
      title: "Custom pipelines",
      description: "Build signal pipelines for each desk: engineering hires, leadership moves, expansion news.",
    },
    {
      icon: Bell,
      title: "Smart alerts",
      description: "Daily digests to Slack or email — only the signals that match your ICP.",
    },
    {
      icon: Zap,
      title: "Instant action",
      description: "One-click export to your CRM or outreach tool. From signal to contact in seconds.",
    },
  ];

  // Interactive Alert Configuration State
  const [alertRules, setAlertRules] = useState([
    { id: 'funding', icon: TrendingUp, label: 'Funding Rounds', frequency: 'Instant', enabled: true, color: '#5fff9e' },
    { id: 'engineering', icon: Briefcase, label: 'Engineering Roles', frequency: 'Daily', enabled: true, color: '#4ade80' },
    { id: 'competitor', icon: Target, label: 'Competitor Activity', frequency: 'Instant', enabled: true, color: '#10b981' },
  ]);
  const [deliveryChannels, setDeliveryChannels] = useState([
    { id: 'slack', label: 'Slack: #high-intent', enabled: true },
    { id: 'email', label: 'Email: 8am digest', enabled: true },
  ]);
  const [notifications, setNotifications] = useState<Array<{ id: number; text: string; type: string }>>([]);
  const [notificationCounter, setNotificationCounter] = useState(0);
  const alertSectionRef = useRef<HTMLDivElement>(null);
  const [alertSectionVisible, setAlertSectionVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 30 });
  const [cursorClicking, setCursorClicking] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorStep, setCursorStep] = useState(0);

  // Intersection observer for alert section animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAlertSectionVisible(true);
          } else {
            // Reset animation when section leaves viewport
            setAlertSectionVisible(false);
            setShowCursor(false);
            setCursorStep(0);
            setCursorPosition({ x: 50, y: 30 });
            setCursorClicking(false);
            // Reset to initial state
            setAlertRules([
              { id: 'funding', icon: TrendingUp, label: 'Funding Rounds', frequency: 'Instant', enabled: true, color: '#5fff9e' },
              { id: 'engineering', icon: Briefcase, label: 'Engineering Roles', frequency: 'Daily', enabled: true, color: '#4ade80' },
              { id: 'competitor', icon: Target, label: 'Competitor Activity', frequency: 'Instant', enabled: true, color: '#10b981' },
            ]);
            setDeliveryChannels([
              { id: 'slack', label: 'Slack: #high-intent', enabled: true },
              { id: 'email', label: 'Email: 8am digest', enabled: true },
            ]);
          }
        });
      },
      { threshold: 0.5 } // Start when 50% visible
    );

    if (alertSectionRef.current) {
      observer.observe(alertSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animated cursor demo sequence
  useEffect(() => {
    if (!alertSectionVisible) return;

    // Wait for entrance animations to complete
    const startDelay = setTimeout(() => {
      setShowCursor(true);
      setCursorStep(1);
    }, 1500); // Slightly longer delay to ensure section is fully visible

    return () => clearTimeout(startDelay);
  }, [alertSectionVisible]);

  // Cursor animation sequence
  useEffect(() => {
    if (!showCursor || cursorStep === 0) return;

    // Positions calculated based on the UI layout:
    // - Outer padding: 24px, Badge: ~44px, Card padding: 16px, Label: ~32px
    // - Each row: ~52px height with 8px gap
    const firstRuleY = 142;      // Center of "Funding Rounds" row
    const secondRuleY = 202;     // Center of "Engineering Roles" row
    const slackToggleY = 365;    // Center of Slack toggle row
    const frequencyX = 88;       // X position of frequency buttons (right side)
    const toggleX = 92;          // X position of toggle switches
    const rowCenterX = 50;       // X position for clicking the whole row

    const sequence = [
      // Step 1: Move to first rule frequency button ("Instant")
      { delay: 0, action: () => setCursorPosition({ x: frequencyX, y: firstRuleY }) },
      // Step 2: Click animation
      { delay: 600, action: () => setCursorClicking(true) },
      { delay: 800, action: () => { setCursorClicking(false); cycleFrequency('funding'); } },
      // Step 3: Move to Slack toggle switch
      { delay: 1500, action: () => setCursorPosition({ x: toggleX, y: slackToggleY }) },
      // Step 4: Click toggle
      { delay: 2100, action: () => setCursorClicking(true) },
      { delay: 2300, action: () => { setCursorClicking(false); toggleDelivery('slack'); } },
      // Step 5: Move to second rule (Engineering Roles)
      { delay: 3000, action: () => setCursorPosition({ x: rowCenterX, y: secondRuleY }) },
      // Step 6: Click to disable
      { delay: 3600, action: () => setCursorClicking(true) },
      { delay: 3800, action: () => { setCursorClicking(false); toggleAlertRule('engineering'); } },
      // Step 7: Wait and re-enable
      { delay: 4800, action: () => setCursorClicking(true) },
      { delay: 5000, action: () => { setCursorClicking(false); toggleAlertRule('engineering'); } },
      // Step 8: Re-enable slack
      { delay: 5800, action: () => setCursorPosition({ x: toggleX, y: slackToggleY }) },
      { delay: 6400, action: () => setCursorClicking(true) },
      { delay: 6600, action: () => { setCursorClicking(false); toggleDelivery('slack'); } },
      // Step 9: Fade out cursor
      { delay: 7500, action: () => setShowCursor(false) },
    ];

    const timeouts: NodeJS.Timeout[] = [];
    sequence.forEach(({ delay, action }) => {
      const timeout = setTimeout(action, delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(t => clearTimeout(t));
  }, [showCursor, cursorStep]);

  // Toggle alert rule
  const toggleAlertRule = (id: string) => {
    setAlertRules(prev => prev.map(rule =>
      rule.id === id ? { ...rule, enabled: !rule.enabled } : rule
    ));

    const rule = alertRules.find(r => r.id === id);
    if (rule) {
      const newEnabled = !rule.enabled;
      addNotification(
        newEnabled ? `${rule.label} alerts enabled` : `${rule.label} alerts disabled`,
        newEnabled ? 'success' : 'info'
      );
    }
  };

  // Cycle frequency
  const cycleFrequency = (id: string) => {
    const frequencies = ['Instant', 'Hourly', 'Daily', 'Weekly'];
    setAlertRules(prev => prev.map(rule => {
      if (rule.id === id) {
        const currentIndex = frequencies.indexOf(rule.frequency);
        const nextFrequency = frequencies[(currentIndex + 1) % frequencies.length];
        addNotification(`${rule.label} → ${nextFrequency}`, 'info');
        return { ...rule, frequency: nextFrequency };
      }
      return rule;
    }));
  };

  // Toggle delivery channel
  const toggleDelivery = (id: string) => {
    setDeliveryChannels(prev => prev.map(channel =>
      channel.id === id ? { ...channel, enabled: !channel.enabled } : channel
    ));

    const channel = deliveryChannels.find(c => c.id === id);
    if (channel) {
      const newEnabled = !channel.enabled;
      addNotification(
        newEnabled ? `${channel.id === 'slack' ? 'Slack' : 'Email'} notifications on` : `${channel.id === 'slack' ? 'Slack' : 'Email'} notifications off`,
        newEnabled ? 'success' : 'info'
      );
    }
  };

  // Add notification
  const addNotification = (text: string, type: string) => {
    const id = notificationCounter;
    setNotificationCounter(prev => prev + 1);
    setNotifications(prev => [...prev, { id, text, type }]);

    // Remove after 2 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 2000);
  };

  const getSignalColor = (type: string) => {
    // All signal types use variations of the brand green (#5fff9e) for cohesive look
    switch (type) {
      case "funding": return { bg: "bg-[#5fff9e]", text: "text-black", border: "border-[#5fff9e]" };
      case "hiring": return { bg: "bg-[#4ade80]", text: "text-black", border: "border-[#4ade80]" };
      case "leadership": return { bg: "bg-[#10b981]", text: "text-white", border: "border-[#10b981]" };
      case "news": return { bg: "bg-[#34d399]", text: "text-black", border: "border-[#34d399]" };
      case "competitor": return { bg: "bg-[#059669]", text: "text-white", border: "border-[#059669]" };
      default: return { bg: "bg-[#5fff9e]", text: "text-black", border: "border-[#5fff9e]" };
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavigationHeader />

      <main>
        {/* ===== HERO SECTION - Signals Popping Animation ===== */}
        <section className="bg-gradient-to-br from-[#0a0c0d] via-[#0c1015] to-[#0d1218] -mt-20 pt-32 pb-20 sm:-mt-24 sm:pt-40 sm:pb-28 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
                  Signals that{" "}
                  <span className="text-[#5fff9e]">find you first</span>
                </h1>
                <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
                  While you sleep, boilr scans the entire internet for hiring signals. Wake up to opportunities your competitors don't even know exist yet.
                </p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5fff9e] mt-0.5 flex-shrink-0" />
                    <span className="text-white">Real-time alerts when companies show hiring intent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5fff9e] mt-0.5 flex-shrink-0" />
                    <span className="text-white">Scored and filtered by your ideal customer profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5fff9e] mt-0.5 flex-shrink-0" />
                    <span className="text-white">Delivered to Slack, email, or your CRM</span>
                  </li>
                </ul>

                <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    placeholder="What's your work email?"
                    className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#5fff9e]/50 transition-colors"
                  />
                  <button
                    onClick={handleScheduleDemo}
                    className="px-6 py-4 rounded-xl font-semibold text-black bg-[#5fff9e] hover:bg-[#4ade80] transition-all duration-200 whitespace-nowrap"
                  >
                    Get started
                  </button>
                </div>
              </div>

              {/* Right: Animated Signal Radar with Popping Notifications */}
              <div className="relative h-[400px] sm:h-[450px]">
                {/* Central Radar/Scanner */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* Pulse rings */}
                  <div className={`absolute w-32 h-32 -top-16 -left-16 rounded-full border border-[#5fff9e]/30 ${pulseActive ? 'animate-ping' : ''}`} style={{ animationDuration: '3s' }}></div>
                  <div className={`absolute w-48 h-48 -top-24 -left-24 rounded-full border border-[#5fff9e]/20 ${pulseActive ? 'animate-ping' : ''}`} style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
                  <div className={`absolute w-64 h-64 -top-32 -left-32 rounded-full border border-[#5fff9e]/10 ${pulseActive ? 'animate-ping' : ''}`} style={{ animationDuration: '3s', animationDelay: '1s' }}></div>

                  {/* Center dot */}
                  <div className="w-4 h-4 rounded-full bg-[#5fff9e] shadow-lg shadow-[#5fff9e]/50 relative z-10">
                    <div className="absolute inset-0 rounded-full bg-[#5fff9e] animate-pulse"></div>
                  </div>
                </div>

                {/* Popping Signal Notifications */}
                {heroSignals.map((signal, idx) => {
                  const isVisible = visibleSignals.has(idx);
                  const colors = getSignalColor(signal.type);

                  // Position each signal around the radar
                  const positions: Record<string, string> = {
                    "top-right": "top-4 right-4 sm:top-8 sm:right-8",
                    "right": "top-1/2 -translate-y-1/2 right-0 sm:right-4",
                    "bottom-right": "bottom-16 right-8 sm:bottom-20 sm:right-12",
                    "bottom": "bottom-4 left-1/2 -translate-x-1/2 sm:bottom-8",
                    "left": "top-1/3 left-0 sm:left-4",
                  };

                  return (
                    <div
                      key={idx}
                      className={`absolute ${positions[signal.position]} transition-all duration-500 ${isVisible
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 scale-75 translate-y-4'
                        }`}
                    >
                      <div className={`bg-[#1a1a1f] rounded-xl p-3 sm:p-4 border ${colors.border} border-opacity-50 shadow-lg max-w-[200px] sm:max-w-[240px]`}>
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                            <signal.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.text}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white text-xs sm:text-sm font-medium truncate">{signal.text}</div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-semibold uppercase ${colors.bg} ${colors.text}`}>
                                {signal.type}
                              </span>
                              <span className="text-[#5fff9e] text-xs font-bold">{signal.score}</span>
                            </div>
                          </div>
                        </div>
                        {/* Notification "new" dot */}
                        <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${colors.bg} ${isVisible ? 'animate-bounce' : ''}`} style={{ animationDuration: '1s', animationIterationCount: '3' }}></div>
                      </div>
                    </div>
                  );
                })}

                {/* Connecting lines (decorative) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#5fff9e" stopOpacity="0" />
                      <stop offset="50%" stopColor="#5fff9e" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#5fff9e" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TIMELINE SECTION - Signals appearing as you scroll ===== */}
        <section ref={timelineSectionRef} className="bg-white relative">
          {/* This container creates the scroll height */}
          <div className="relative" style={{ height: '200vh' }}>
            {/* Sticky container that holds both columns */}
            <div className="sticky top-0 min-h-screen">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  {/* Left: Signals Feed */}
                  <div ref={stickyContainerRef}>
                    {/* Signals container */}
                    <div className="space-y-2.5">
                      {/* Only show max 4 signals to match right side height */}
                      {(() => {
                        const displayedSignals = visibleSignalIndices.slice(0, 4);
                        const lastIndex = displayedSignals.length - 1;

                        return displayedSignals.map((signalIdx, displayOrder) => {
                          const signal = timelineSignals[signalIdx];
                          // The NEWEST signal is the LAST one in the array (bottom)
                          const isNewest = displayOrder === lastIndex;

                          return (
                            <div
                              key={signalIdx}
                              className={isNewest ? 'animate-signalSlideIn' : 'transition-all duration-300'}
                            >
                              {/* Time label */}
                              <div className={`text-[11px] font-mono mb-1 ${isNewest ? 'text-[#10b981]' : 'text-gray-300'}`}>
                                {signal.time}
                              </div>

                              {/* Signal Card */}
                              <div className={`rounded-lg p-3.5 transition-all duration-300 ${isNewest
                                ? 'bg-[#f0fdf4] border border-[#5fff9e]/40 shadow-sm'
                                : 'bg-gray-50 border border-gray-100'
                                }`}>
                                <div className="flex items-center justify-between gap-3">
                                  <div className="flex-1 min-w-0">
                                    {/* Type badge */}
                                    <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase mb-1.5 ${isNewest ? 'bg-[#5fff9e] text-black' : 'bg-gray-200 text-gray-400'
                                      }`}>
                                      {signal.type}
                                    </span>

                                    {/* Company name */}
                                    <div className={`font-semibold text-sm ${isNewest ? 'text-gray-900' : 'text-gray-400'}`}>
                                      {signal.company}
                                    </div>

                                    {/* Signal description */}
                                    <div className={`text-xs ${isNewest ? 'text-gray-600' : 'text-gray-300'}`}>
                                      {signal.signal}
                                    </div>
                                  </div>

                                  {/* Score circle */}
                                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${isNewest
                                    ? 'bg-[#5fff9e] text-black'
                                    : 'bg-gray-200 text-gray-400'
                                    }`}>
                                    {signal.score}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        });
                      })()}

                      {/* Empty state with scroll indicator */}
                      {visibleSignalIndices.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-12 text-gray-400 min-h-[350px]">
                          {/* Scroll indicator container */}
                          <div className="flex flex-col items-center gap-4">
                            {/* Icon container with pulsing ring */}
                            <div className="relative">
                              <div className="w-14 h-14 rounded-full bg-[#5fff9e]/10 border-2 border-[#5fff9e]/30 flex items-center justify-center">
                                {/* Animated chevron/arrow */}
                                <div className="animate-bounce">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-[#5fff9e]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                  </svg>
                                </div>
                              </div>
                              {/* Outer pulsing ring */}
                              <div className="absolute inset-0 w-14 h-14 rounded-full border-2 border-[#5fff9e]/40 animate-ping" style={{ animationDuration: '2s' }}></div>
                            </div>

                            {/* Text */}
                            <div className="text-center">
                              <div className="text-base font-semibold text-gray-600">Scroll down to see your signals</div>
                              <div className="text-sm text-gray-400 mt-1">Your morning feed is ready</div>
                            </div>

                            {/* Additional animated dots indicating scroll direction */}
                            <div className="flex flex-col items-center gap-1 mt-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#5fff9e]/40 animate-pulse" style={{ animationDelay: '0ms' }}></div>
                              <div className="w-1.5 h-1.5 rounded-full bg-[#5fff9e]/60 animate-pulse" style={{ animationDelay: '200ms' }}></div>
                              <div className="w-1.5 h-1.5 rounded-full bg-[#5fff9e] animate-pulse" style={{ animationDelay: '400ms' }}></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right: Header + Stats (always visible alongside signals) */}
                  <div className="space-y-8">
                    <div className="text-center lg:text-left">
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Your Morning Signal Feed
                      </h2>
                      <p className="mt-3 text-lg text-gray-600 max-w-xl">
                        While you were sleeping, boilr found <span className="text-[#10b981] font-semibold">{Math.min(visibleSignalIndices.length, 4)}</span> new opportunities
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 shadow-sm">
                      <div className="text-sm text-gray-500 uppercase tracking-wider mb-4 font-medium">Today's Summary</div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white rounded-xl p-4 border border-gray-100">
                          <div className="text-3xl font-bold text-gray-900">{Math.round(20 + timelineProgress * 107)}</div>
                          <div className="text-sm text-gray-500">Signals found</div>
                        </div>

                        <div className={`bg-white rounded-xl p-4 border-2 transition-all duration-500 ${visibleSignalIndices.length > 1
                          ? 'border-[#5fff9e] shadow-lg shadow-[#5fff9e]/20'
                          : 'border-gray-100'
                          }`}>
                          <div className="flex items-center gap-3">
                            <div className={`relative transition-all duration-500 ${visibleSignalIndices.length > 2 ? 'scale-110' : ''}`}>
                              <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${visibleSignalIndices.length > 1
                                ? 'bg-[#5fff9e] ring-4 ring-[#5fff9e]/30'
                                : 'bg-gray-100'
                                }`}>
                                <span className={`text-2xl font-bold transition-colors duration-500 ${visibleSignalIndices.length > 1 ? 'text-black' : 'text-gray-400'
                                  }`}>
                                  {Math.round(3 + timelineProgress * 20)}
                                </span>
                              </div>
                              {visibleSignalIndices.length > 2 && (
                                <div className="absolute inset-0 rounded-full bg-[#5fff9e] animate-ping opacity-20"></div>
                              )}
                            </div>
                            <div>
                              <div className={`text-sm font-semibold transition-colors duration-500 ${visibleSignalIndices.length > 1 ? 'text-[#10b981]' : 'text-gray-500'
                                }`}>High intent</div>
                              <div className="text-xs text-gray-400">Score 90+</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Funding signals</span>
                          <span className="text-sm font-semibold text-[#5fff9e]">{Math.round(2 + timelineProgress * 10)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">New job postings</span>
                          <span className="text-sm font-semibold text-[#4ade80]">{Math.round(8 + timelineProgress * 37)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Leadership changes</span>
                          <span className="text-sm font-semibold text-[#10b981]">{Math.round(1 + timelineProgress * 7)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Competitor alerts</span>
                          <span className="text-sm font-semibold text-[#059669]">{Math.round(1 + timelineProgress * 4)}</span>
                        </div>
                      </div>

                      <button
                        onClick={handleScheduleDemo}
                        className="mt-6 w-full px-6 py-3 rounded-xl font-semibold text-black bg-[#5fff9e] hover:bg-[#4ade80] transition-all duration-200"
                      >
                        Get your signal feed →
                      </button>
                    </div>
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
                {/* Visual side - Signal notification stack */}
                <div className="bg-gradient-to-br from-[#10b981]/10 to-[#5fff9e]/20 p-8 sm:p-12 flex items-center justify-center">
                  <div className="relative w-full max-w-xs">
                    {/* Stacked notifications visual */}
                    <div className="space-y-3 transform rotate-[-2deg]">
                      <div className="bg-white rounded-xl p-3 shadow-lg border-l-4 border-[#5fff9e] transform translate-x-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#5fff9e] flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-black" />
                          </div>
                          <div>
                            <div className="font-medium text-sm text-gray-900">Funding Alert</div>
                            <div className="text-xs text-gray-500">2 min ago</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-lg border-l-4 border-[#4ade80] transform -translate-x-1">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#4ade80] flex items-center justify-center">
                            <Briefcase className="w-4 h-4 text-black" />
                          </div>
                          <div>
                            <div className="font-medium text-sm text-gray-900">New Roles Posted</div>
                            <div className="text-xs text-gray-500">15 min ago</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-lg border-l-4 border-[#10b981] transform translate-x-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#10b981] flex items-center justify-center">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-sm text-gray-900">Leadership Change</div>
                            <div className="text-xs text-gray-500">1 hour ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="text-[#10b981] font-medium text-sm mb-6">boilr.</div>
                  <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                    I check my signals before my coffee.
                  </blockquote>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    "Every morning I wake up to a curated list of hiring signals. Last week I reached out to a CTO the day after their funding announcement — they hadn't even posted the role yet. That's the timing advantage boilr gives us."
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">Marcus Chen</div>
                    <div className="text-gray-500 text-sm">Founder @ Apex Talent Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURE: Alert Configuration ===== */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Content */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Alerts, Your Way
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Configure exactly what signals you want, where you want them, and how often. Build custom alert rules for different desks, markets, or signal types.
                </p>

                <div className="mt-10 grid sm:grid-cols-2 gap-8">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                      <Building2 className="w-5 h-5 text-gray-700" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Competitor watchlists</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Track your competitors' clients. Get alerted when they raise, hire, or make news.
                    </p>
                  </div>
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                      <Sparkles className="w-5 h-5 text-gray-700" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Smart scoring</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Only see signals that match your ICP. AI filters out the noise automatically.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleScheduleDemo}
                  className="mt-10 px-8 py-4 rounded-xl font-semibold text-black bg-[#5fff9e] hover:bg-[#4ade80] shadow-lg shadow-[#5fff9e]/25 transition-all duration-200"
                >
                  Book a call
                </button>
              </div>

              {/* Right: Interactive Alert config UI */}
              <div ref={alertSectionRef} className="relative lg:order-last">
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

                {/* Floating notifications */}
                <div className="absolute -top-4 right-4 z-20 space-y-2">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-slideInRight ${notification.type === 'success'
                        ? 'bg-[#5fff9e] text-black'
                        : 'bg-gray-800 text-white'
                        }`}
                    >
                      {notification.text}
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                    {/* Interactive Demo Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5fff9e]/10 border border-[#5fff9e]/30">
                        <div className="relative">
                          <div className="w-2 h-2 rounded-full bg-[#5fff9e]"></div>
                          <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#5fff9e] animate-ping"></div>
                        </div>
                        <span className="text-xs font-medium text-[#10b981]">Interactive Demo</span>
                      </div>
                      <span className="text-[10px] text-gray-400">Try clicking around!</span>
                    </div>

                    {/* Alert Rules */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
                      <div className="text-sm font-medium text-gray-500 mb-3">Alert Rules</div>
                      <div className="space-y-2">
                        {alertRules.map((rule, idx) => {
                          const Icon = rule.icon;
                          return (
                            <div
                              key={rule.id}
                              className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-500 cursor-pointer group ${alertSectionVisible
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-4'
                                } ${rule.enabled
                                  ? `bg-[${rule.color}]/10 border-[${rule.color}]/30 hover:border-[${rule.color}]/60`
                                  : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                                }`}
                              style={{
                                transitionDelay: alertSectionVisible ? `${idx * 150}ms` : '0ms',
                                backgroundColor: rule.enabled ? `${rule.color}15` : undefined,
                                borderColor: rule.enabled ? `${rule.color}50` : undefined,
                              }}
                              onClick={() => toggleAlertRule(rule.id)}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${rule.enabled ? 'scale-100' : 'scale-90 opacity-50'
                                    }`}
                                  style={{ backgroundColor: rule.enabled ? rule.color : '#e5e7eb' }}
                                >
                                  <Icon className={`w-4 h-4 ${rule.enabled ? 'text-black' : 'text-gray-400'}`} />
                                </div>
                                <span className={`font-medium transition-colors duration-300 ${rule.enabled ? 'text-gray-900' : 'text-gray-400 line-through'
                                  }`}>
                                  {rule.label}
                                </span>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  cycleFrequency(rule.id);
                                }}
                                className={`text-sm font-semibold px-2 py-1 rounded transition-all duration-300 ${rule.enabled
                                  ? 'text-[#10b981] hover:bg-[#10b981]/10'
                                  : 'text-gray-400'
                                  }`}
                              >
                                {rule.frequency}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Delivery Settings */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                      <div className="text-sm font-medium text-gray-500 mb-3">Delivery</div>
                      <div className="space-y-2">
                        {deliveryChannels.map((channel, idx) => (
                          <div
                            key={channel.id}
                            className={`flex items-center justify-between p-2 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition-all duration-500 ${alertSectionVisible
                              ? 'opacity-100 translate-x-0'
                              : 'opacity-0 -translate-x-4'
                              }`}
                            style={{
                              transitionDelay: alertSectionVisible ? `${(idx + 3) * 150}ms` : '0ms',
                            }}
                            onClick={() => toggleDelivery(channel.id)}
                          >
                            <div className="flex items-center gap-2">
                              <div className={`w-6 h-6 rounded flex items-center justify-center transition-all duration-300 ${channel.id === 'slack'
                                ? channel.enabled ? 'bg-[#4A154B]' : 'bg-gray-300'
                                : channel.enabled ? 'bg-[#10b981]' : 'bg-gray-300'
                                }`}>
                                {channel.id === 'slack' ? (
                                  <span className={`text-xs font-bold ${channel.enabled ? 'text-white' : 'text-gray-500'}`}>#</span>
                                ) : (
                                  <Mail className={`w-3.5 h-3.5 ${channel.enabled ? 'text-white' : 'text-gray-500'}`} />
                                )}
                              </div>
                              <span className={`text-sm transition-colors duration-300 ${channel.enabled ? 'text-gray-700' : 'text-gray-400'
                                }`}>
                                {channel.label}
                              </span>
                            </div>
                            {/* Toggle switch */}
                            <div
                              className={`w-10 h-6 rounded-full relative transition-colors duration-300 ${channel.enabled ? 'bg-[#5fff9e]' : 'bg-gray-300'
                                }`}
                            >
                              <div
                                className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${channel.enabled ? 'right-1' : 'left-1'
                                  }`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Active channels summary */}
                      <div className={`mt-4 pt-3 border-t border-gray-100 transition-all duration-500 ${alertSectionVisible ? 'opacity-100' : 'opacity-0'
                        }`} style={{ transitionDelay: '750ms' }}>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">
                            {alertRules.filter(r => r.enabled).length} rules active
                          </span>
                          <span className="text-[#10b981] font-medium">
                            {deliveryChannels.filter(c => c.enabled).length} channels connected
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
        <FAQSection faqs={signalsFaqs} />

        {/* ===== FINAL CTA ===== */}
        <section className="py-20 sm:py-28 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Stop checking. Start receiving.
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Let signals find you. Join 50+ recruitment agencies who wake up to opportunities.
            </p>
            <button
              onClick={handleScheduleDemo}
              className="px-8 py-4 rounded-xl font-semibold text-black bg-[#5fff9e] hover:bg-[#4ade80] shadow-lg shadow-[#5fff9e]/25 transition-all duration-200"
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

export default SolutionSignals;
