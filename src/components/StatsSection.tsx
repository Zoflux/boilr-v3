import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLine, setActiveLine] = useState(0);
  const [charOffset, setCharOffset] = useState(0);

  // Intersection observer for when section comes into view
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

  // Animated line + character highlighting
  useEffect(() => {
    if (!isVisible) return;

    const totalLines = 4;

    // Character sweep animation
    const charInterval = setInterval(() => {
      setCharOffset(prev => (prev + 1) % 30);
    }, 80);

    // Line change animation
    const lineInterval = setInterval(() => {
      setActiveLine(prev => (prev + 1) % totalLines);
      setCharOffset(0);
    }, 2500);

    return () => {
      clearInterval(charInterval);
      clearInterval(lineInterval);
    };
  }, [isVisible]);

  const statements = [
    "Finding opportunities before anyone else.",
    "Enriching leads with verified contact data.",
    "Scoring every prospect by intent and fit.",
    "Automatically."
  ];

  // Render text with gradient sweep effect
  const renderWithGradient = (text: string, isActive: boolean) => {
    if (!isActive) return text;

    return text.split('').map((char, i) => {
      const distance = Math.abs(i - charOffset);
      const isHighlighted = distance < 4;
      const opacity = isHighlighted ? 1 - (distance * 0.25) : 0;

      return (
        <span
          key={i}
          style={{
            color: isHighlighted ? `rgba(95, 255, 158, ${opacity})` : 'inherit',
            transition: 'color 0.15s ease'
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-[#f8f9fa]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Centered container with left-aligned text */}
        <div className="max-w-3xl mx-auto">

          {/* Subtitle */}
          <p className={`text-gray-800 text-base sm:text-lg font-medium mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Turn your recruitment process into a machine that never stops working.
          </p>

          {/* Animated Statements */}
          <div className="space-y-1 mb-8">
            {statements.map((statement, index) => {
              const isActive = activeLine === index;
              const hasAppeared = isVisible;

              return (
                <p
                  key={index}
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight transition-all duration-700 ${hasAppeared ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    } ${isActive ? "text-gray-900" : "text-gray-300"
                    }`}
                  style={{
                    transitionDelay: hasAppeared ? `${index * 150}ms` : "0ms"
                  }}
                >
                  {renderWithGradient(statement, isActive)}
                </p>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "600ms" }}>
            <a
              href="/roi-calculator"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-black bg-[#5fff9e] hover:bg-[#4de88a] transition-all duration-200"
            >
              Calculate Your ROI
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
