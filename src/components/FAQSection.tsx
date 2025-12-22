import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

/**
 * FAQ Section Component
 * 
 * Pressmaster-style FAQ layout matching SolutionDiscovery design:
 * - Left side: "Frequently Asked Questions" heading with subtitle
 * - Right side: Simple border-bottom accordion with ChevronDown icons
 * - Background: bg-gray-50 with top border
 */
export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Any questions? We'd love to help",
  faqs,
  className = "",
}: FAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className={`py-16 sm:py-20 bg-gray-50 border-t border-gray-200 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Left: Heading */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
            <p className="mt-4 text-gray-600">{subtitle}</p>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left py-2 group"
                >
                  <span className="font-medium text-gray-900 text-lg group-hover:text-[#10b981] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="pt-2 pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Default FAQs for boilr
export const defaultFAQs: FAQItem[] = [
  {
    question: "What is boilr and what does it do?",
    answer: "boilr is an AI-powered lead generation platform for recruitment agencies. It monitors 10,000+ sources 24/7 — career pages, funding rounds, hiring velocity, leadership changes — and delivers qualified opportunities to your inbox before they hit job boards.",
  },
  {
    question: "How is boilr different from job boards?",
    answer: "Job boards show you roles after they're posted. boilr detects hiring signals 48-72 hours earlier — funding announcements, expansion plans, leadership changes. You reach hiring managers before competitors even know about the opportunity.",
  },
  {
    question: "Do I have to change my workflow?",
    answer: "No. Signals arrive enriched with contacts, context, and suggested outreach so your team can plug them into existing playbooks. Push to your CRM/ATS or use our ready-to-send outreach lists.",
  },
  {
    question: "Is the data GDPR compliant?",
    answer: "Yes. Data is processed and stored in line with GDPR requirements, and only business-relevant signals are shared. We take data privacy seriously.",
  },
  {
    question: "Can we try it before committing?",
    answer: "Yes. Book a 15-minute walkthrough and start a 5-day trial so your team can validate the signal quality and fit. No credit card required.",
  },
  {
    question: "Does boilr cover multiple markets?",
    answer: "Absolutely. You can set different ICPs per market or desk — boilr remembers and keeps each stream clean and focused. We cover UK, EU, and international markets.",
  },
];

// Short FAQ list for landing/solution pages
export const shortFAQs: FAQItem[] = [
  {
    question: "What is boilr and what does it do?",
    answer: "boilr is an AI-powered lead generation platform for recruitment agencies. It monitors 10,000+ sources 24/7 and delivers qualified opportunities to your inbox before they hit job boards.",
  },
  {
    question: "How is boilr different from job boards?",
    answer: "Job boards show you roles after they're posted. boilr detects hiring signals 48-72 hours earlier — funding announcements, expansion plans, leadership changes.",
  },
  {
    question: "Do I have to change my workflow?",
    answer: "No. Signals arrive enriched with contacts, context, and suggested outreach so your team can plug them into existing playbooks.",
  },
  {
    question: "Can we try it before committing?",
    answer: "Yes. Book a 15-minute walkthrough and start a 5-day trial so your team can validate the signal quality and fit. No credit card required.",
  },
];
