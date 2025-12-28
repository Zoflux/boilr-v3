import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ArrowRight, Radar, TrendingUp, Building2, Users, Briefcase, Zap, Target, Clock } from "lucide-react";

// Signal types
const signalTypes = [
    {
        icon: TrendingUp,
        title: "Hiring Velocity Changes",
        description: "Track when companies suddenly accelerate or slow down their hiring — a key indicator of growth or restructuring.",
        examples: [
            "Company posts 5x more jobs than usual",
            "New roles in a specific department",
            "Speed of hiring across teams"
        ]
    },
    {
        icon: Building2,
        title: "Funding & Growth Events",
        description: "Funding rounds, acquisitions, and expansions almost always trigger a hiring surge.",
        examples: [
            "Series A/B/C announcements",
            "Office expansions or new locations",
            "Major partnership announcements"
        ]
    },
    {
        icon: Users,
        title: "Leadership Changes",
        description: "New executives often bring in their own teams and reshape company priorities.",
        examples: [
            "New CEO, CTO, or VP-level hires",
            "Departures in key positions",
            "Team restructuring signals"
        ]
    },
    {
        icon: Briefcase,
        title: "Job Posting Patterns",
        description: "The types of roles being posted reveal a company's strategic direction.",
        examples: [
            "First-time roles (e.g., first Head of Sales)",
            "Bulk hiring for new teams",
            "Urgent or re-posted positions"
        ]
    }
];

const benefits = [
    {
        icon: Clock,
        title: "Be first to the opportunity",
        description: "Reach decision-makers before your competitors even know they're hiring."
    },
    {
        icon: Target,
        title: "Higher response rates",
        description: "Reference specific signals in your outreach for more relevant conversations."
    },
    {
        icon: Zap,
        title: "Focus your time",
        description: "Stop cold-emailing everyone. Focus on companies with active intent."
    }
];

export default function HiringSignals() {
    const demoLink = "https://calendly.com/felix-boilr/demo";

    return (
        <div className="min-h-screen bg-gray-100">
            <CursorSpotlight size={180} />
            <NavigationHeader mode="recruitment" onModeChange={() => { }} />

            <main>

                {/* Hero Section */}
                <section className="py-16 sm:py-20 bg-gray-100">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5fff9e]/10 border border-[#5fff9e]/20 text-[#10b981] text-sm font-medium mb-6">
                            <Radar className="h-4 w-4" />
                            Signal Intelligence
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                            Hiring Signals for<br />
                            <span className="text-[#10b981]">Recruiters</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-8">
                            Learn to spot the buying signals that indicate a company is about to hire —
                            and reach them before your competitors.
                        </p>

                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-black bg-[#48ee8d] hover:bg-[#5fff9e] shadow-[0_4px_20px_rgba(72,238,141,0.35)] transition-all duration-200"
                        >
                            See Signals in Action
                            <ArrowRight className="h-4 w-4" />
                        </a>

                    </div>
                </section>

                {/* What are Hiring Signals */}
                <section className="py-16 sm:py-20">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                                What are hiring signals?
                            </h2>
                            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                                Hiring signals are events, patterns, and data points that indicate a company
                                is actively looking to grow their team — often before they even post a job.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {signalTypes.map((signal, index) => (
                                <div
                                    key={signal.title}
                                    className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-[#5fff9e]/30 transition-colors"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5fff9e]/10 text-[#10b981]">
                                            <signal.icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">{signal.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">{signal.description}</p>
                                    <ul className="space-y-2">
                                        {signal.examples.map((example, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                                                <span className="text-[#10b981] mt-0.5">→</span>
                                                {example}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-16 sm:py-20 bg-gray-50">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">
                                Why signals matter for recruiters
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={benefit.title} className="text-center">
                                    <div className="flex justify-center mb-4">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white border border-gray-200 text-[#10b981]">
                                            <benefit.icon className="h-7 w-7" />
                                        </div>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-500 text-sm">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-20 md:py-24">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                            Stop guessing. Start knowing.
                        </h2>
                        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                            boilr monitors 10,000+ sources to detect hiring signals automatically —
                            so you always know which companies to reach out to and when.
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
