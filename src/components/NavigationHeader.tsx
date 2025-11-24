import { useNavigate } from "react-router-dom";
import blackLogo from "@/assets/black-logo.svg";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

interface NavigationHeaderProps {
  mode?: "sales" | "recruitment";
  onModeChange?: (mode: "sales" | "recruitment") => void;
}

/**
 * Navigation Header Component for Boilr
 * 
 * This component provides the main navigation for the Boilr website.
 * It includes an announcement bar and a sticky navigation header.
 */
export function NavigationHeader({ mode = "recruitment", onModeChange }: NavigationHeaderProps) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLegalPage = !onModeChange; // If no onModeChange function, we're on a legal page
  
  // Function to handle demo scheduling
  const handleScheduleDemo = () => {
    window.open("https://calendly.com/felix-boilr/demo", "_blank");
  };

  // Function to handle navigation to main page
  const handleNavigateToMain = (targetMode: "sales" | "recruitment") => {
    if (isLegalPage) {
      // Navigate to main page with the selected mode
      navigate(`/?mode=${targetMode}`);
    } else {
      // Use the provided onModeChange function
      onModeChange?.(targetMode);
    }
  };

  // Close mobile menu and scroll to section
  const handleMobileNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Small delay to let the sheet close
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {/* Announcement Banner - Mobile Optimized */}
      <div className="relative z-50 bg-[hsl(var(--primary))] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 text-center text-xs sm:text-sm">
          <span className="font-medium">30 agencies onboarded last 30 days — Don't get left behind</span>
          <button
            onClick={handleScheduleDemo}
            className="ml-2 inline-flex items-center gap-1 rounded-md px-2 py-0.5 bg-black/5 hover:bg-black/10 transition font-semibold"
          >
            join them →
          </button>
        </div>
      </div>

      {/* Black spacer below announcement */}
      <div className="h-2 bg-black"></div>

      {/* Navigation - Mobile Optimized */}
      <nav className="sticky top-14 z-40 px-4">
        <div className="bg-white rounded-full h-14 max-w-3xl mx-auto border border-white/10 shadow-lg">
          <div className="px-3 sm:px-4 h-full">
            <div className="flex justify-between items-center h-full">
              {/* Logo - Mobile Optimized */}
              <div className="flex items-center gap-10 ml-6">
                <img
                  src={blackLogo}
                  alt="boilr. - AI-powered lead generation platform logo"
                  className="h-8 w-8 cursor-pointer origin-left scale-[2.6] sm:origin-center sm:scale-[3.2] object-contain -translate-y-[1px]"
                  loading="eager"
                  onClick={() => navigate("/")}
                />
              </div>

              {/* Desktop Navigation - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-2.5">
                <a href="#logos-outcomes" className="text-black/70 hover:text-black font-medium transition-colors px-2.5 py-1.5 text-base">Social Proof</a>
                <a href="#problem" className="text-black/70 hover:text-black font-medium transition-colors px-2.5 py-1.5 text-base">Problem</a>
                <a href="#consolidation" className="text-black/70 hover:text-black font-medium transition-colors px-2.5 py-1.5 text-base">Consolidated</a>
                <a
                  href="https://app.boilr.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full font-medium transition-colors bg-[hsl(var(--primary))]/80 text-black hover:bg-[hsl(var(--primary))] text-base"
                >
                  Log In
                </a>
                <button
                  onClick={handleScheduleDemo}
                  className="px-4 py-1.5 rounded-full font-medium transition-colors bg-black text-white hover:bg-black/90 text-base"
                >
                  Book Demo →
                </button>
              </div>

              {/* Mobile Menu Button - Visible only on mobile */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <button
                    className="p-2 rounded-lg hover:bg-black/5 transition-colors"
                    aria-label="Open menu"
                  >
                    <Menu className="h-6 w-6 text-black" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                  <nav className="flex flex-col gap-6 mt-8">
                    <a 
                      href="#logos-outcomes" 
                      onClick={() => handleMobileNavClick('#logos-outcomes')}
                      className="text-lg font-medium text-black/80 hover:text-black transition-colors"
                    >
                      Social Proof
                    </a>
                    <a 
                      href="#problem" 
                      onClick={() => handleMobileNavClick('#problem')}
                      className="text-lg font-medium text-black/80 hover:text-black transition-colors"
                    >
                      Problem
                    </a>
                    <a 
                      href="#consolidation" 
                      onClick={() => handleMobileNavClick('#consolidation')}
                      className="text-lg font-medium text-black/80 hover:text-black transition-colors"
                    >
                      Consolidated
                    </a>
                  <a
                    href="https://app.boilr.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-5 py-3 rounded-lg font-medium transition-colors bg-[hsl(var(--primary))]/15 text-[hsl(var(--brand-strong))] border border-[hsl(var(--primary))/0.30] hover:bg-[hsl(var(--primary))]/25"
                  >
                    Log In
                  </a>
                    <button 
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleScheduleDemo();
                      }}
                      className="w-full px-5 py-3 rounded-lg font-medium transition-colors bg-black text-white hover:bg-black/90 mt-4"
                    >
                      Book Demo →
                    </button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
