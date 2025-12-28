import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ArrowRight, Search, BookOpen } from "lucide-react";
import { useState } from "react";

// Placeholder toolkit items - to be filled with real content
const toolkitItems = [
    {
        letter: "A",
        items: [
            {
                term: "ATS (Applicant Tracking System)",
                description: "Software that manages the recruiting process and stores candidate data.",
                extendedDescription: "An ATS helps recruiters organize applications, track candidates through hiring stages, and collaborate with hiring managers. Popular options include Greenhouse, Lever, and Workday. Most ATS platforms integrate with job boards and offer reporting features to measure hiring performance."
            },
            {
                term: "Active Sourcing",
                description: "Proactively reaching out to potential candidates instead of waiting for applications.",
                extendedDescription: "Active sourcing involves identifying passive candidates through LinkedIn, GitHub, or industry events and reaching out directly. This approach is essential for competitive roles where the best candidates are rarely actively job searching. Success depends on personalization and timing."
            }
        ]
    },
    {
        letter: "B",
        items: [
            {
                term: "Boolean Search",
                description: "Using operators like AND, OR, NOT to refine candidate searches on job boards and LinkedIn.",
                extendedDescription: "Boolean search strings help recruiters find precise candidate matches. For example: (\"software engineer\" OR \"developer\") AND Python NOT junior. Mastering Boolean logic is fundamental for effective sourcing on LinkedIn Recruiter, Indeed, and other platforms."
            },
            {
                term: "Blind Hiring",
                description: "Removing identifying information from applications to reduce unconscious bias.",
                extendedDescription: "Blind hiring removes names, photos, education details, and other identifying information from resumes during initial screening. This helps companies build more diverse teams by focusing purely on skills and experience. Some ATS platforms offer built-in anonymization features."
            },
            {
                term: "boilr",
                description: "AI-powered platform for recruitment intelligence and automated lead generation.",
                extendedDescription: "boilr helps recruiters discover companies that are actively hiring by detecting signals like funding rounds, leadership changes, and job posting patterns. It automates research, enriches leads with contact data, and personalizes outreach at scale. Built specifically for modern recruitment workflows."
            }
        ]
    },
    {
        letter: "C",
        items: [
            {
                term: "Candidate Pipeline",
                description: "A pool of qualified candidates at various stages of the recruiting process.",
                extendedDescription: "A healthy pipeline includes candidates at every stage from initial contact to offer acceptance. Tracking pipeline metrics like conversion rates between stages helps identify bottlenecks. Strong pipelines are built through consistent sourcing, even when there are no open roles."
            },
            {
                term: "Cold Outreach",
                description: "Contacting potential candidates who have not expressed interest in a role.",
                extendedDescription: "Cold outreach requires compelling messaging that captures attention quickly. Best practices include referencing specific achievements, keeping messages short, and providing clear value. Response rates typically range from 10 to 30 percent for well-crafted messages."
            },
            {
                term: "CRM (Candidate Relationship Management)",
                description: "Tools and strategies for managing relationships with potential candidates over time.",
                extendedDescription: "A recruitment CRM helps nurture candidates who are not ready to move immediately. Features include email sequences, tagging, and activity tracking. Building relationships before a role opens leads to faster fills and better candidate quality."
            }
        ]
    },
    {
        letter: "D",
        items: [
            {
                term: "Direct Sourcing",
                description: "Finding and engaging candidates directly without job postings or agencies.",
                extendedDescription: "Direct sourcing puts recruiters in control of the candidate experience from first touch. It typically costs less than agency fees and builds internal recruiting expertise. Success requires strong employer branding and compelling outreach strategies."
            }
        ]
    },
    {
        letter: "E",
        items: [
            {
                term: "Employee Referral",
                description: "When current employees recommend candidates from their network.",
                extendedDescription: "Referrals consistently produce higher quality hires who stay longer. Effective referral programs offer meaningful incentives and make it easy for employees to submit recommendations. Some companies see up to 50 percent of hires come from referrals."
            },
            {
                term: "Employer Branding",
                description: "How a company markets itself as an attractive place to work.",
                extendedDescription: "Strong employer branding reduces cost per hire and improves candidate quality. It includes career page content, Glassdoor management, social media presence, and employee advocacy. Candidates research companies extensively before applying or responding to outreach."
            }
        ]
    },
    {
        letter: "H",
        items: [
            {
                term: "Headhunting",
                description: "Recruiting highly qualified candidates, often already employed, for senior positions.",
                extendedDescription: "Headhunting requires discretion, strong research skills, and executive-level communication. It often involves mapping out an entire market to identify the best candidates. Retained search firms typically charge 25 to 35 percent of first-year compensation."
            },
            {
                term: "Hiring Velocity",
                description: "The speed at which a company fills open positions. A key signal tracked by boilr.",
                extendedDescription: "Hiring velocity indicates company growth and can signal business development opportunities. Companies that suddenly accelerate hiring often have funding, new contracts, or expansion plans. Monitoring velocity changes helps recruiters time their outreach perfectly."
            }
        ]
    },
    {
        letter: "I",
        items: [
            {
                term: "ICP (Ideal Candidate Profile)",
                description: "A detailed description of the perfect candidate for a specific role.",
                extendedDescription: "An ICP goes beyond job requirements to include traits like career trajectory, company background, and cultural fit indicators. Well-defined ICPs help sourcers find better matches faster. They should be created collaboratively with hiring managers."
            },
            {
                term: "Intent Signals",
                description: "Behavioral indicators that a company or candidate is ready to make a move.",
                extendedDescription: "Intent signals include job posting changes, leadership moves, funding announcements, and engagement with career content. boilr monitors thousands of sources to detect these signals automatically, helping recruiters reach out at the right moment."
            }
        ]
    },
    {
        letter: "L",
        items: [
            {
                term: "Lead Scoring",
                description: "Ranking prospects based on their likelihood to convert. boilr does this automatically.",
                extendedDescription: "Lead scoring combines multiple data points like hiring patterns, growth indicators, and engagement history to prioritize outreach. Higher-scored leads receive more personalized attention. Automated scoring helps recruiters focus their time on the best opportunities."
            },
            {
                term: "LinkedIn Recruiter",
                description: "LinkedIn's premium tool for candidate sourcing and outreach.",
                extendedDescription: "LinkedIn Recruiter offers advanced search filters, InMail credits, and project management features. It integrates with most ATS platforms and provides insights about candidate activity. The tool is essential for sourcing in most professional industries."
            }
        ]
    },
    {
        letter: "P",
        items: [
            {
                term: "Passive Candidates",
                description: "People who are not actively job searching but might be open to the right opportunity.",
                extendedDescription: "Passive candidates represent up to 70 percent of the workforce. They typically need more nurturing and a compelling reason to consider a change. Successful recruiters focus on understanding their motivations rather than just presenting job specs."
            },
            {
                term: "Pipeline Building",
                description: "Creating a steady flow of qualified candidates for current and future roles.",
                extendedDescription: "Consistent pipeline building prevents urgent hiring crunches. It involves regular sourcing, relationship nurturing, and community engagement. Companies with strong pipelines fill roles 40 percent faster on average."
            }
        ]
    },
    {
        letter: "S",
        items: [
            {
                term: "Sourcing",
                description: "The process of identifying and attracting potential candidates.",
                extendedDescription: "Sourcing is the foundation of proactive recruiting. It involves researching, identifying, and engaging potential candidates across various channels. The best sourcers combine technical skills with creative approaches to find hidden talent."
            },
            {
                term: "Signal Detection",
                description: "Identifying events that indicate hiring intent or candidate availability.",
                extendedDescription: "Signal detection helps recruiters prioritize their outreach based on real-time market intelligence. Common signals include funding rounds, executive changes, expansion announcements, and job posting patterns. boilr automates this process by monitoring thousands of data sources."
            }
        ]
    },
    {
        letter: "T",
        items: [
            {
                term: "Talent Pool",
                description: "A database of qualified candidates for future hiring needs.",
                extendedDescription: "Talent pools reduce time-to-fill by maintaining relationships with pre-qualified candidates. They should be segmented by skills, seniority, and engagement level. Regular communication keeps candidates warm and interested in future opportunities."
            },
            {
                term: "Tech Stack",
                description: "The technologies a company uses. Important for targeting technical roles.",
                extendedDescription: "Understanding a company's tech stack helps recruiters identify relevant candidates and tailor their messaging. Tools like BuiltWith and StackShare reveal what technologies companies use. This information is valuable for both candidate matching and business development."
            }
        ]
    }
];

export default function ToolkitPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedItem, setSelectedItem] = useState<{ term: string; description: string; extendedDescription: string } | null>(null);
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
        <div className="min-h-screen bg-[#fafafa]">
            <CursorSpotlight size={180} />
            <NavigationHeader mode="recruitment" onModeChange={() => { }} />

            <main>

                {/* Hero Section */}
                <section className="py-16 sm:py-20 bg-[#fafafa]">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5fff9e]/10 border border-[#5fff9e]/20 text-[#10b981] text-sm font-medium mb-6">
                            <BookOpen className="h-4 w-4" />
                            Recruiter Resources
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                            A-Z Toolkit for Recruiters
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                            Everything you need to know about modern recruiting. Your go-to glossary for recruitment intelligence, from sourcing strategies to signal detection.
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

                {/* Toolkit Content - 3 Column Grid */}
                <section className="py-12 sm:py-16 bg-[#fafafa]">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">

                        {filteredItems.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500">No terms found matching "{searchTerm}"</p>
                            </div>
                        ) : (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredItems.flatMap(section =>
                                    section.items.map(item => (
                                        <button
                                            key={item.term}
                                            onClick={() => setSelectedItem(item)}
                                            className="group p-5 sm:p-6 rounded-xl border border-gray-200 bg-white hover:border-[#5fff9e]/30 hover:shadow-lg transition-all text-left cursor-pointer"
                                        >
                                            <div className="flex items-start gap-3 mb-3">
                                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5fff9e]/20 text-[#10b981] font-bold text-sm flex-shrink-0">
                                                    {item.term.charAt(0)}
                                                </span>
                                                <h3 className="font-semibold text-gray-900 group-hover:text-[#10b981] transition-colors">
                                                    {item.term}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                            <p className="text-[#10b981] text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                Click for more details →
                                            </p>
                                        </button>
                                    ))
                                )}
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
                            boilr automates the heavy lifting: signal detection, lead scoring, and enrichment. Focus on building relationships.
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

            {/* Popup Modal */}
            {selectedItem && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedItem(null)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5fff9e]/20 text-[#10b981] font-bold">
                                    {selectedItem.term.charAt(0)}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900">{selectedItem.term}</h3>
                            </div>
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-[#10b981] font-medium mb-4">{selectedItem.description}</p>
                        <p className="text-gray-600 leading-relaxed">{selectedItem.extendedDescription}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
