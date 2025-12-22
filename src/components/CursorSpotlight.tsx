import { useEffect, useState, useCallback } from "react";

interface CursorSpotlightProps {
  /**
   * Size of the spotlight in pixels
   */
  size?: number;
  /**
   * CSS selectors for dark sections where the spotlight should appear
   */
  darkSectionSelectors?: string[];
}

/**
 * CursorSpotlight component that creates a glowing green effect following the mouse cursor
 * 
 * This creates a radial gradient that follows the cursor with a consistent green glow.
 * Only appears over dark sections. Disabled on small screens (mobile/tablet).
 */
export function CursorSpotlight({
  size = 200, // Smaller default size
  darkSectionSelectors = [
    '[data-dark-section="true"]',
    '.dark-section',
  ]
}: CursorSpotlightProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if element or any parent is a dark section
  const checkIfOverDarkSection = useCallback((x: number, y: number) => {
    const element = document.elementFromPoint(x, y);
    if (!element) return false;

    // Check if element or any ancestor matches dark section selectors
    let current: Element | null = element;
    while (current) {
      for (const selector of darkSectionSelectors) {
        try {
          if (current.matches(selector)) {
            return true;
          }
        } catch {
          // Invalid selector, skip
        }
      }
      current = current.parentElement;
    }
    return false;
  }, [darkSectionSelectors]);

  useEffect(() => {
    // Disable on small screens (<768px = mobile/tablet) to optimize performance
    const checkIfMobile = () => window.innerWidth < 768;
    setIsMobile(checkIfMobile());

    // Re-check on resize
    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };

    if (checkIfMobile()) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsOverDarkSection(checkIfOverDarkSection(e.clientX, e.clientY));
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener('resize', handleResize);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, checkIfOverDarkSection]);

  // Don't render on mobile/tablet screens
  if (isMobile) return null;

  // Light green gradient - subtle glow
  const gradientColor = "rgba(95, 255, 158, 0.15) 0%, rgba(95, 255, 158, 0.08) 30%, rgba(95, 255, 158, 0.02) 60%, transparent 80%";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        opacity: isVisible && isOverDarkSection ? 1 : 0,
      }}
    >
      <div
        className="absolute rounded-full transition-all duration-75 ease-out"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${gradientColor})`,
        }}
      />
    </div>
  );
}
