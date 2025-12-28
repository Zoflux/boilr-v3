import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ArrowRight, Search, BookOpen, Lightbulb, Wrench } from "lucide-react";
import { useState } from "react";

// Placeholder toolkit items - to be filled with real content
const toolkitItems = [
    {
        letter: "A",
        items: [
            { term: "ATS (Applicant Tracking System)", description: "Software that manages the recruiting process and stores candidate data." },
            { term: "Active Sourcing", description: "Proactively reaching out to potential candidates instead of waiting for applications." }
        ]
    },
    {
        letter: "B",
        items: [
            { term: "Boolean Search", description: "Using operators like AND, OR, NOT to refine candidate searches on job boards and LinkedIn." },
            { term: "Blind Hiring", description: "Removing identifying information from applications to reduce unconscious bias." }
        ]
    },
    {
        letter: "C",
        items: [
            { term: "Candidate Pipeline", description: "A pool of qualified candidates at various stages of the recruiting process." },
            { term: "Cold Outreach", description: "Contacting potential candidates who haven't expressed interest in a role." },
            { term: "CRM (Candidate Relationship Management)", description: "Tools and strategies for managing relationships with potential candidates over time." }
        ]
    },
    {
        letter: "D",
        items: [
            { term: "Direct Sourcing", description: "Finding and engaging candidates directly without job postings or agencies." }
        ]
    },
    {
        letter: "E",
        items: [
            { term: "Employee Referral", description: "When current employees recommend candidates from their network." },
            { term: "Employer Branding", description: "How a company markets itself as an attractive place to work." }
        ]
    },
    {
        letter: "H",
        items: [
            { term: "Headhunting", description: "Recruiting highly qualified candidates, often already employed, for senior positions." },
            { term: "Hiring Velocity", description: "The speed at which a company fills open positions — a key signal for boilr." }
        ]
    },
    {
        letter: "I",
        items: [
            { term: "ICP (Ideal Candidate Profile)", description: "A detailed description of the perfect candidate for a specific role." },
            { term: "Intent Signals", description: "Behavioral indicators that a company or candidate is ready to make a move." }
        ]
    },
    {
        letter: "L",
        items: [
            { term: "Lead Scoring", description: "Ranking prospects based on their likelihood to convert — boilr does this automatically." },
            { term: "LinkedIn Recruiter", description: "LinkedIn's premium tool for finding and contacting potential candidates." }
        ]
    },
    {
        letter: "P",
        items: [
            { term: "Passive Candidates", description: "People who aren't actively job searching but might be open to the right opportunity." },
            { term: "Pipeline Building", description: "Creating a steady flow of qualified candidates for current and future roles." }
        ]
    },
    {
        letter: "S",
        items: [
            { term: "Sourcing", description: "The process of identifying and attracting potential candidates." },
            { term: "Signal Detection", description: "Identifying events that indicate hiring intent or candidate availability." }
        ]
    },
    {
        letter: "T",
        items: [
            { term: "Talent Pool", description: "A database of qualified candidates for future hiring needs." },
            { term: "Tech Stack", description: "The technologies a company uses — important for targeting technical roles." }
        ]
    }
];

export default function ToolkitPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const demoLink = "https://calendly.com/felix-boilr/demo";

    // Filter items based on search
    const filteredItems = toolkitItems.map(section => ({
        ...section,
        items: section.items.filter(item =>
            item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(section => section.items.length > 0);

    return (
        <div className="min-h-screen bg-white">
            <CursorSpotlight size={180} />
            <NavigationHeader mode="recruitment" onModeChange={() => { }} />

            <main>

                {/* Hero Section */}
                <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5fff9e]/10 border border-[#5fff9e]/20 text-[#10b981] text-sm font-medium mb-6">
                            <BookOpen className="h-4 w-4" />
                            Recruiter Resources
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                            A-Z Toolkit for Recruiters
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                            Everything you need to know about modern recruiting — from sourcing strategies to signal detection. Your go-to glossary for recruitment intelligence.
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search terms..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5fff9e]/50 focus:border-[#5fff9e] transition-all"
                            />
                        </div>

                    </div>
                </section>

                {/* Quick Stats */}
                <section className="py-8 border-b border-gray-100">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">
                        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                                    <Wrench className="h-5 w-5 text-gray-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">25+ Terms</p>
                                    <p className="text-sm text-gray-500">Key concepts</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                                    <Lightbulb className="h-5 w-5 text-gray-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Pro Tips</p>
                                    <p className="text-sm text-gray-500">Actionable insights</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Alphabet Navigation */}
                <section className="py-6 border-b border-gray-100 sticky top-16 bg-white/95 backdrop-blur-sm z-10">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">
                        <div className="flex flex-wrap justify-center gap-2">
                            {toolkitItems.map(section => (
                                <a
                                    key={section.letter}
                                    href={`#letter-${section.letter}`}
                                    className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold text-gray-600 hover:bg-[#5fff9e]/10 hover:text-[#10b981] transition-colors"
                                >
                                    {section.letter}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Toolkit Content */}
                <section className="py-12 sm:py-16">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">

                        {filteredItems.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500">No terms found matching "{searchTerm}"</p>
                            </div>
                        ) : (
                            <div className="space-y-12">
                                {filteredItems.map(section => (
                                    <div key={section.letter} id={`letter-${section.letter}`} className="scroll-mt-32">
                                        {/* Letter Header */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="text-4xl sm:text-5xl font-bold text-[#5fff9e]">
                                                {section.letter}
                                            </span>
                                            <div className="flex-1 h-px bg-gray-200" />
                                        </div>

                                        {/* Items */}
                                        <div className="space-y-4">
                                            {section.items.map(item => (
                                                <div
                                                    key={item.term}
                                                    className="group p-5 sm:p-6 rounded-xl border border-gray-200 bg-gray-50/50 hover:border-[#5fff9e]/30 hover:bg-[#5fff9e]/5 transition-all"
                                                >
                                                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#10b981] transition-colors">
                                                        {item.term}
                                                    </h3>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-20 bg-black text-white">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Put this knowledge into action
                        </h2>
                        <p className="text-white/70 mb-8 max-w-xl mx-auto">
                            boilr automates the heavy lifting — signal detection, lead scoring, and enrichment — so you can focus on building relationships.
                        </p>
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-black bg-[#48ee8d] hover:bg-[#5fff9e] shadow-[0_4px_20px_rgba(72,238,141,0.35)] transition-all duration-200"
                        >
                            Book a Demo
                            <ArrowRight className="h-5 w-5" />
                        </a>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
