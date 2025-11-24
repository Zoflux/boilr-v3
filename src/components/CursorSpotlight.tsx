import { useEffect, useState } from "react";

interface CursorSpotlightProps {
  /**
   * Size of the spotlight in pixels
   */
  size?: number;
}

/**
 * CursorSpotlight component that creates a glowing green effect following the mouse cursor
 * 
 * This creates a radial gradient that follows the cursor with a consistent green glow.
 * Disabled on small screens (mobile/tablet) to optimize performance.
 */
export function CursorSpotlight({ size = 450 }: CursorSpotlightProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable on small screens (< 768px = mobile/tablet) to optimize performance
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
  }, [isVisible]);

  // Don't render on mobile/tablet screens
  if (isMobile) return null;

  // Light green gradient - consistent everywhere
  const gradientColor = "rgba(72, 238, 141, 0.18) 0%, rgba(72, 238, 141, 0.10) 25%, rgba(72, 238, 141, 0.04) 50%, transparent 70%";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className="absolute rounded-full transition-all duration-100 ease-out"
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
