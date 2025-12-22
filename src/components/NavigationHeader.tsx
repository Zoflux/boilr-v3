import { useNavigate } from "react-router-dom";
import blackLogo from "@/assets/black-logo.svg";
import { ChevronDown, Menu, Radar, Bell } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

interface NavigationHeaderProps {
  mode?: "sales" | "recruitment";
  onModeChange?: (mode: "sales" | "recruitment") => void;
}

const solutionItems = [
  {
    id: "discovery",
    label: "Discovery",
    description: "Always-on sourcing for recruiters.",
    icon: Radar,
    path: "/solutions/discovery",
    color: "#5fff9e", // Brand green
    hoverBg: "group-hover:bg-[#5fff9e]/15",
    hoverText: "group-hover:text-[#10b981]",
  },
  {
    id: "signals",
    label: "Signals",
    description: "Market signals from across the web.",
    icon: Bell,
    path: "/solutions/signals",
    color: "#06b6d4", // Cyan
    hoverBg: "group-hover:bg-[#06b6d4]/15",
    hoverText: "group-hover:text-[#0891b2]",
  },
];

/**
 * Navigation Header Component for Boilr
 *
 * Pure white pill navigation with Solutions dropdown on hover.
 * - Slimmer height
 * - Evenly distributed items
 * - Dropdown appears on hover (top-to-bottom animation)
 * - Icons turn neon green (#48ee8d) on hover
 * - No gray hover backgrounds
 */
export function NavigationHeader({ mode = "recruitment", onModeChange }: NavigationHeaderProps) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const navItems = [
    { label: "Reviews", path: "/reviews" },
    { label: "FAQ", path: "/faq" },
  ];

  const handleScheduleDemo = () => {
    window.open("https://calendly.com/felix-boilr/demo", "_blank");
  };

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Announcement Banner - Green */}
      <div className="relative z-50 bg-[#5fff9e] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 text-center text-xs sm:text-sm">
          <span className="font-medium">30 agencies onboarded last 30 days — Don't get left behind</span>
          <button
            onClick={handleScheduleDemo}
            className="ml-2 inline-flex items-center gap-1 rounded-md px-2 py-0.5 bg-black/10 hover:bg-black/20 transition font-semibold"
          >
            join them →
          </button>
        </div>
      </div>

      {/* Navigation - White Pill floating over content */}
      <nav className="sticky top-0 z-40 px-4 py-3">
        <div className="relative mx-auto max-w-3xl">
          <div className="relative h-12 sm:h-14 rounded-2xl">
            {/* === Pure White Background === */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_2px_16px_-2px_rgba(0,0,0,0.08)]">
              <div className="absolute inset-0 bg-white" />
            </div>

            {/* === Subtle Border === */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none z-20">
              <div className="absolute inset-0 rounded-2xl border border-black/[0.06]" />
            </div>

            {/* === CONTENT LAYER === */}
            <div className="relative h-full px-4 sm:px-6 z-10">
              <div className="flex items-center justify-between h-full">
                {/* Logo - Bigger */}
                <img
                  src={blackLogo}
                  alt="boilr."
                  className="h-6 w-6 cursor-pointer scale-[3] sm:scale-[3.5] object-contain"
                  loading="eager"
                  onClick={() => navigate("/")}
                />

                {/* Desktop Navigation - Equal Spacing */}
                <div className="hidden md:flex items-center gap-6">
                  {/* Solutions Dropdown - Opens on Hover */}
                  <div
                    className="relative"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <button className="text-gray-700 hover:text-black font-medium transition-colors duration-150 px-3 py-1.5 text-sm inline-flex items-center gap-1">
                      Solutions
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown Panel - Top to Bottom Animation */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-50 transition-all duration-200 origin-top ${solutionsOpen
                          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                        }`}
                    >
                      <div className="bg-white rounded-2xl shadow-xl border border-black/[0.06] overflow-hidden">
                        <div className="p-2">
                          {solutionItems.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => handleNavClick(item.path)}
                              className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50/80 transition-colors text-left group"
                            >
                              <div className={`w-10 h-10 rounded-xl bg-gray-100 ${item.hoverBg} flex items-center justify-center flex-shrink-0 transition-colors`}>
                                <item.icon className={`w-5 h-5 text-gray-500 ${item.hoverText} transition-colors`} />
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900 text-sm">{item.label}</div>
                                <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.path)}
                      className="text-gray-700 hover:text-black font-medium transition-colors duration-150 px-3 py-1.5 text-sm"
                    >
                      {item.label}
                    </button>
                  ))}

                  <a
                    href="https://app.boilr.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-lg font-medium text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 transition-colors duration-150"
                  >
                    Log In
                  </a>

                  <button
                    onClick={handleScheduleDemo}
                    className="px-4 py-1.5 rounded-lg font-medium text-sm bg-[#48ee8d] hover:bg-[#3dd97a] text-black transition-colors duration-150"
                  >
                    Book Demo →
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild className="md:hidden">
                    <button className="p-2 -mr-2" aria-label="Open menu">
                      <Menu className="h-5 w-5 text-gray-700" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-white border-gray-200">
                    <nav className="flex flex-col gap-4 mt-8">
                      {/* Mobile Solutions Accordion */}
                      <div>
                        <button
                          onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                          className="w-full flex items-center justify-between text-left text-lg font-medium text-gray-900 py-2"
                        >
                          Solutions
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {mobileSolutionsOpen && (
                          <div className="pl-2 mt-2 space-y-1">
                            {solutionItems.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  navigate(item.path);
                                }}
                                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left group"
                              >
                                <div className={`w-9 h-9 rounded-lg bg-gray-100 ${item.hoverBg} flex items-center justify-center transition-colors`}>
                                  <item.icon className={`w-4 h-4 text-gray-500 ${item.hoverText} transition-colors`} />
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900 text-sm">{item.label}</div>
                                  <div className="text-xs text-gray-500">{item.description}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {navItems.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleNavClick(item.path)}
                          className="text-left text-lg font-medium text-gray-900 hover:text-black transition-colors py-2"
                        >
                          {item.label}
                        </button>
                      ))}
                      <a
                        href="https://app.boilr.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-5 py-3 rounded-xl font-medium transition-colors bg-gray-100 text-gray-900 hover:bg-gray-200 text-center mt-4"
                      >
                        Log In
                      </a>
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          handleScheduleDemo();
                        }}
                        className="w-full px-5 py-3 rounded-xl font-medium transition-colors bg-[#48ee8d] text-black hover:bg-[#3dd97a]"
                      >
                        Book Demo →
                      </button>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
