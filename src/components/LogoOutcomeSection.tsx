import React, { useEffect, useRef, useState } from "react";

export default function LogoOutcomeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* Header */}
        <header className={`text-center mb-8 sm:mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
          <p className="inline-flex items-center rounded-full border border-[#5fff9e]/30 bg-[#5fff9e]/10 px-3 py-1 text-[11px] font-medium text-[#10b981]">
            The results speak for themselves
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Here's what changed when they switched
          </h2>
        </header>

        {/* 3 Key Stats with counter animation */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">

          {/* Stat 1 - Time Saved */}
          <StatCard
            isVisible={isVisible}
            delay={200}
            fromValue={13}
            toValue={1}
            prefix=""
            suffix="h"
            showArrow={true}
            label="Weekly Admin"
            description="Less time researching. More time closing."
          />

          {/* Stat 2 - Head Start */}
          <StatCard
            isVisible={isVisible}
            delay={400}
            fromValue={0}
            toValue={48}
            prefix=""
            suffix="-72h"
            label="Head Start"
            description="Signals before job boards publish."
          />

          {/* Stat 3 - Multiplier */}
          <StatCard
            isVisible={isVisible}
            delay={600}
            fromValue={0}
            toValue={3}
            prefix="2-"
            suffix="×"
            label="More Opportunities"
            description="See what competitors miss."
          />

        </div>

        {/* Subtle bottom text */}
        <p className={`mt-6 sm:mt-8 text-center text-xs text-gray-400 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"
          }`} style={{ transitionDelay: "800ms" }}>
          Based on data from teams using boilr for 3+ months
        </p>

        {/* ROI Calculator CTA */}
        <div className={`mt-6 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "900ms" }}>
          <a
            href="/roi-calculator"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#5fff9e] text-[#10b981] font-semibold text-sm hover:bg-[#5fff9e] hover:text-black transition-all duration-200 group"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Calculate your ROI
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

function StatCard({
  isVisible,
  delay,
  fromValue,
  toValue,
  prefix = "",
  suffix = "",
  showArrow = false,
  label,
  description
}: {
  isVisible: boolean;
  delay: number;
  fromValue: number;
  toValue: number;
  prefix?: string;
  suffix?: string;
  showArrow?: boolean;
  label: string;
  description: string;
}) {
  const [count, setCount] = useState(fromValue);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      // Delay before starting counter
      const startDelay = setTimeout(() => {
        setHasAnimated(true);

        const duration = 1500; // 1.5 seconds
        const steps = 30;
        const stepDuration = duration / steps;
        const increment = (toValue - fromValue) / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
          currentStep++;
          if (currentStep >= steps) {
            setCount(toValue);
            clearInterval(timer);
          } else {
            // Easing function for smooth animation
            const progress = currentStep / steps;
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.round(fromValue + (toValue - fromValue) * eased));
          }
        }, stepDuration);

        return () => clearInterval(timer);
      }, delay);

      return () => clearTimeout(startDelay);
    }
  }, [isVisible, hasAnimated, fromValue, toValue, delay]);

  return (
    <div
      className={`group text-center p-6 sm:p-8 rounded-xl border border-gray-100 bg-gray-50
        transition-all ease-out hover:shadow-lg hover:shadow-[#5fff9e]/10 hover:border-[#5fff9e]/30 hover:scale-[1.02]
        hover:duration-150 ${isVisible ? "opacity-100 scale-100 translate-y-0 duration-700" : "opacity-0 scale-90 translate-y-8 duration-700"}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 tabular-nums">
        {showArrow ? (
          <>
            {fromValue}h <span className="text-[#10b981] inline-block transition-transform group-hover:translate-x-1">→</span> {count}h
          </>
        ) : (
          <>
            {prefix}<span className="inline-block">{count}</span>{suffix}
          </>
        )}
      </div>
      <div className="text-sm text-[#10b981] font-medium mb-1">{label}</div>
      <div className="text-xs text-gray-500">{description}</div>

      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-[#5fff9e]/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </div>
  );
}
