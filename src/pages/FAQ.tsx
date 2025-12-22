import { useState } from "react";
import { Footer } from "@/components/Footer";
import { NavigationHeader } from "@/components/NavigationHeader";
import { ChevronDown } from "lucide-react";

// All FAQs collected on the dedicated FAQ page
const allFaqs = [
  // General
  {
    category: "General",
    question: "What is boilr and what does it do?",
    answer: "boilr is an AI-powered lead generation platform for recruitment agencies. It monitors 10,000+ sources 24/7 — career pages, funding rounds, hiring velocity, leadership changes — and delivers qualified opportunities to your inbox before they hit job boards.",
  },
  {
    category: "General",
    question: "How is boilr different from job boards?",
    answer: "Job boards show you roles after they're posted. boilr detects hiring signals 48-72 hours earlier — funding announcements, expansion plans, leadership changes. You reach hiring managers before competitors even know about the opportunity.",
  },
  {
    category: "General",
    question: "What sources does boilr monitor?",
    answer: "10,000+ sources refreshed 24/7 — career pages, hiring velocity, funding rounds, leadership changes, tech signals, expansions, social mentions, news articles, and curated industry feeds.",
  },
  // How It Works
  {
    category: "How It Works",
    question: "How fast are signals delivered?",
    answer: "Most signals land within minutes. You get a 48–72 hour advantage over teams who wait for job boards to update.",
  },
  {
    category: "How It Works",
    question: "Do I have to change my workflow?",
    answer: "No. Signals arrive enriched with contacts, context, and suggested outreach so your team can plug them into existing playbooks. Push to your CRM/ATS or use our ready-to-send outreach lists.",
  },
  {
    category: "How It Works",
    question: "Can I customize what signals I receive?",
    answer: "Absolutely. You set your ICP — roles, seniority, geography, tech stack, industries — and boilr filters everything to match. Each desk or market can have its own configuration.",
  },
  {
    category: "How It Works",
    question: "Does boilr integrate with my CRM/ATS?",
    answer: "Yes. We integrate with major CRM and ATS platforms. Enriched contacts and signals can be pushed directly to your existing tools with one click.",
  },
  // Compliance & Data
  {
    category: "Compliance & Data",
    question: "Is the data GDPR compliant?",
    answer: "Yes. Data is processed and stored in line with GDPR requirements, and only business-relevant signals are shared. We take data privacy seriously.",
  },
  {
    category: "Compliance & Data",
    question: "Where is boilr data stored?",
    answer: "All data is stored on secure, GDPR-compliant servers within the EU. We follow industry best practices for data security and encryption.",
  },
  // Pricing & Trial
  {
    category: "Pricing & Trial",
    question: "Can we try boilr before committing?",
    answer: "Yes. Book a 15-minute walkthrough and start a 5-day trial so your team can validate the signal quality and fit. No credit card required.",
  },
  {
    category: "Pricing & Trial",
    question: "How does pricing work?",
    answer: "Pricing is based on the number of desks or users and signal volume. We offer flexible plans for agencies of all sizes. Book a demo to get a custom quote.",
  },
  // Coverage
  {
    category: "Coverage",
    question: "Does boilr cover multiple markets?",
    answer: "Absolutely. You can set different ICPs per market or desk — boilr remembers and keeps each stream clean and focused. We cover UK, EU, and international markets.",
  },
  {
    category: "Coverage",
    question: "What industries does boilr cover?",
    answer: "boilr works across all industries — tech, finance, healthcare, manufacturing, and more. Our signal detection is industry-agnostic but can be filtered to your specific verticals.",
  },
  // Support
  {
    category: "Support",
    question: "What support do you offer?",
    answer: "All plans include email support and onboarding. Higher tiers get dedicated account managers, Slack channels, and priority support with faster response times.",
  },
  {
    category: "Support",
    question: "How long does onboarding take?",
    answer: "Most teams are fully set up within 30 minutes. You define your ICP, connect your tools, and start receiving signals the same day.",
  },
];

const FAQ = () => {
  const handleDemo = () => window.open("https://calendly.com/felix-boilr/demo", "_blank");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  // Group FAQs by category
  const categories = [...new Set(allFaqs.map(faq => faq.category))];

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <NavigationHeader />

      <main>
        {/* Hero Section */}
        <section className="-mt-20 pt-32 pb-12 sm:-mt-24 sm:pt-40 sm:pb-16 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
              {/* Left: Heading */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h1>
                <p className="mt-4 text-gray-600">Any questions? We'd love to help</p>
              </div>

              {/* Right: Description */}
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Everything you need to know about boilr — signals, data, compliance, and how it fits into your workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {categories.map((category) => (
              <div key={category} className="mb-16 last:mb-0">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
                  {/* Left: Category Title */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {category}
                    </h2>
                  </div>

                  {/* Right: Accordion */}
                  <div className="lg:col-span-2 space-y-4">
                    {allFaqs
                      .filter(faq => faq.category === category)
                      .map((faq, idx) => {
                        const faqId = `${category}-${idx}`;
                        const isOpen = openFaq === faqId;

                        return (
                          <div key={idx} className="border-b border-gray-200 pb-4">
                            <button
                              onClick={() => toggleFaq(faqId)}
                              className="w-full flex items-center justify-between text-left py-2 group"
                            >
                              <span className="font-medium text-gray-900 text-lg group-hover:text-[#10b981] transition-colors">
                                {faq.question}
                              </span>
                              <ChevronDown
                                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {isOpen && (
                              <div className="pt-2 pb-4 text-gray-600 leading-relaxed">
                                {faq.answer}
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Book a short call and see the signals live for your market. We'll answer anything not covered here.
            </p>
            <button
              onClick={handleDemo}
              className="px-8 py-4 rounded-xl font-semibold text-black bg-[#48ee8d] hover:bg-[#5fff9e] shadow-lg shadow-[#48ee8d]/25 transition-all duration-200"
            >
              Book a Demo →
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
