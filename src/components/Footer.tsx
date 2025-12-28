import { Zap, Twitter, Linkedin, Github } from "lucide-react";
import greenRoundLogo from "@/assets/green-round-logo.svg";
import { getCalendlyUrl } from "@/hooks/useCalendlyUrl";

export function Footer() {
  const navigation = {
    company: [{
      name: "About Us",
      href: "/about-us"
    }, {
      name: "Discovery",
      href: "/solutions/discovery"
    }, {
      name: "Signals",
      href: "/solutions/signals"
    }, {
      name: "Hire boilr",
      href: getCalendlyUrl("/footer", { content: "footer-hire" }),
      external: true
    }],
    legal: [{
      name: "Imprint",
      href: "/imprint"
    }, {
      name: "Privacy Policy",
      href: "/privacy-policy"
    }],
    moreForYou: [{
      name: "A-Z Toolkit for Recruiters",
      href: "/toolkit"
    }, {
      name: "Recruitment Playbook",
      href: "/playbook"
    }, {
      name: "Our Customers",
      href: "/reviews"
    }, {
      name: "ROI Calculator",
      href: "/roi-calculator"
    }, {
      name: "Hiring Signals for Recruiters",
      href: "/hiring-signals"
    }, {
      name: "Business Development in Recruiting",
      href: "/business-development"
    }, {
      name: "Prompts for Recruiters",
      href: "/prompts-for-recruiters"
    }]
  };
  const social = [{
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/boilr-ai"
  }];

  return (
    <footer data-dark-section="true" className="bg-black border-t border-white/10 text-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Brand - Mobile Optimized */}
          <div className="col-span-1 sm:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-3 sm:mb-4">
              <img src={greenRoundLogo} alt="boilr. logo" className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="text-lg sm:text-xl font-bold text-white">boilr.</span>
            </div>
            <p className="text-white/70 max-w-xs leading-relaxed text-sm sm:text-base mx-auto sm:mx-0 mb-4 sm:mb-6">
              Transform your prospecting and outreach with high-precision signals.
            </p>

            {/* Social Links - Mobile Optimized */}
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
              {social.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/5 min-w-[40px] min-h-[40px] flex items-center justify-center"
                  aria-label={item.name}
                >
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation - Mobile Optimized */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map(item => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm block py-0.5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-2">
              {navigation.legal.map(item => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm block py-0.5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">More for you</h3>
            <ul className="space-y-2">
              {navigation.moreForYou.map(item => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm block py-0.5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Bottom Section - Mobile Optimized */}
        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-white/60 text-xs sm:text-sm">© 2025 boilr. All rights reserved.</p>
          <p className="text-white/60 text-xs sm:text-sm">
            Built for recruitment agencies.
          </p>
        </div>
      </div>
    </footer>
  );
}
