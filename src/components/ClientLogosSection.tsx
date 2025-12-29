import React from "react";
import { Star } from "lucide-react";

/**
 * ClientLogosSection - Displays a scrolling marquee of client logos
 * 
 * Features:
 * - Logos scroll continuously from right to left
 * - All logos are displayed in grayscale
 * - Smooth infinite animation
 * - Responsive sizing
 * - Review platform badges with backlinks (G2, Capterra, Product Hunt)
 * 
 * Placement: Between HeroSection and LogoOutcomeSection
 */

// Client logos from public/client-logos folder
// NOTE: Logos are NOT loaded automatically! When adding a new logo:
// 1. Copy the file to public/client-logos/
// 2. Add an entry to this array below
const CLIENT_LOGOS = [
  { name: "923 Home", src: "/client-logos/923+Home+Logo.webp" },
  { name: "Absolut", src: "/client-logos/absolut 1.png" },
  { name: "Altitude", src: "/client-logos/altitude 1.png" },
  { name: "Blusource", src: "/client-logos/blusource.png" },
  { name: "Consol", src: "/client-logos/consol.png" },
  { name: "Datascope", src: "/client-logos/datascope.webp" },
  { name: "Enable Recruitment", src: "/client-logos/enable-recruitment.png" },
  { name: "Empresaria", src: "/client-logos/Empresaria 1.png" },
  { name: "Gecko", src: "/client-logos/gecko.png" },
  { name: "IT", src: "/client-logos/IT.png" },
  { name: "KRG", src: "/client-logos/krg.png" },
  { name: "Palm Outsourcing", src: "/client-logos/palm-outsourcing.png" },
  { name: "Parity", src: "/client-logos/parity_logo 1.png" },
  { name: "Switch", src: "/client-logos/Switch.png" },
];

export default function ClientLogosSection() {
  // Duplicate the logos for seamless infinite scroll
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative py-10 sm:py-12 md:py-16 bg-gray-50">
      {/* Container matching LogoOutcomeSection width */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Chosen daily by 100+ small and large recruitment agencies worldwide.
          </h2>
        </div>

        {/* Logo Marquee - contained within max-w-6xl */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 md:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 md:w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Scrolling track */}
          <div className="overflow-hidden">
            <div className="client-logos-track flex items-center gap-12 sm:gap-16 md:gap-20">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="shrink-0 flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-6 sm:h-7 md:h-8 w-auto object-contain grayscale opacity-60 hover:opacity-80 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Review Platform Badges with Backlinks */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 mt-10">
          {/* G2 Badge */}
          <a
            href="https://www.g2.com/products/boilr-ai/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
          >
            <img src="/g2-logo.png" alt="G2" className="h-7 w-auto" />
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-gray-700">4.8</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-orange-400 fill-orange-400" />
                ))}
              </div>
            </div>
          </a>

          {/* Capterra Badge */}
          <a
            href="https://www.capterra.co.uk/software/1082714/boilr-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
          >
            <img src="/capterra-logo.png" alt="Capterra" className="h-7 w-auto" />
          </a>

          {/* Product Hunt Badge */}
          <a
            href="https://www.producthunt.com/products/boilr/launches/boilr?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-boilr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1038496&theme=light&t=1766417810289"
              alt="boilr. - The first autonomous AI agent for recruiter lead generation | Product Hunt"
              width="200"
              height="43"
              className="h-9 w-auto"
            />
          </a>
        </div>
      </div>

      {/* Animation styles - NO pause on hover */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scrollLogos {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .client-logos-track {
            animation: scrollLogos 40s linear infinite;
            width: max-content;
          }
        `
      }} />
    </section>
  );
}
