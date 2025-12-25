import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLine, setActiveLine] = useState(0);
  const [sparkles, setSparkles] = useState<number[]>([]);

  // Intersection observer
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

  const statements = [
    "Finding opportunities before anyone else.",
    "Enriching leads with verified contact data.",
    "Scoring every prospect by intent and fit.",
    "Automatically."
  ];

  // Sequential line animation with sparkles
  useEffect(() => {
    if (!isVisible) return;

    const lineDuration = 2000; // How long each line is active
    const sparkleInterval = 150; // How often sparkles appear
    const sparkleCount = 5; // How many sparkles visible at once

    let sparkleTimer: NodeJS.Timeout;
    let lineTimer: NodeJS.Timeout;
    let currentSparkles: number[] = [];

    const animateLine = () => {
      // Clear sparkles from previous line
      setSparkles([]);
      currentSparkles = [];

      // Generate random sparkle positions for this line
      const textLength = statements[activeLine]?.length || 30;

      sparkleTimer = setInterval(() => {
        // Add new random sparkle position
        const newSparkle = Math.floor(Math.random() * textLength);
        currentSparkles = [...currentSparkles.slice(-sparkleCount + 1), newSparkle];
        setSparkles([...currentSparkles]);
      }, sparkleInterval);
    };

    animateLine();

    // Move to next line
    lineTimer = setInterval(() => {
      setActiveLine(prev => (prev + 1) % statements.length);
      clearInterval(sparkleTimer);
      setSparkles([]);
      currentSparkles = [];

      // Start sparkles for new line after small delay
      setTimeout(() => {
        const textLength = statements[(activeLine + 1) % statements.length]?.length || 30;
        sparkleTimer = setInterval(() => {
          const newSparkle = Math.floor(Math.random() * textLength);
          currentSparkles = [...currentSparkles.slice(-sparkleCount + 1), newSparkle];
          setSparkles([...currentSparkles]);
        }, sparkleInterval);
      }, 100);
    }, lineDuration);

    return () => {
      clearInterval(sparkleTimer);
      clearInterval(lineTimer);
    };
  }, [isVisible, activeLine]);

  // Render text with sparkle dots
  const renderWithSparkles = (text: string, lineIndex: number) => {
    const isActive = activeLine === lineIndex;

    if (!isActive) return text;

    return text.split('').map((char, i) => {
      const hasSparkle = sparkles.includes(i);

      return (
        <span key={i} className="relative inline-block">
          {char === ' ' ? '\u00A0' : char}
          {hasSparkle && (
            <span
              className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#5fff9e] animate-ping"
              style={{ animationDuration: '0.5s' }}
            />
          )}
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

              return (
                <p
                  key={index}
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    } ${isActive ? "text-gray-900" : "text-gray-300"
                    }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 150}ms` : "0ms"
                  }}
                >
                  {renderWithSparkles(statement, index)}
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
