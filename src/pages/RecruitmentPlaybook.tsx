import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ArrowRight, BookOpen, Target, MessageSquare, Clock, CheckCircle, Lightbulb } from "lucide-react";

// Playbook chapters
const chapters = [
    {
        number: "01",
        title: "Building Your Ideal Candidate Profile",
        description: "Define exactly who you're looking for — role, seniority, tech stack, and signals that indicate fit.",
        tips: [
            "Start with your best hires and work backwards",
            "Include both must-haves and nice-to-haves",
            "Consider company stage and growth signals"
        ]
    },
    {
        number: "02",
        title: "Signal-Based Sourcing",
        description: "Stop spray-and-pray. Learn to identify and act on buying signals before your competitors.",
        tips: [
            "Monitor hiring velocity as a leading indicator",
            "Track funding announcements and leadership changes",
            "Set up alerts for your target accounts"
        ]
    },
    {
        number: "03",
        title: "Crafting Outreach That Converts",
        description: "Write messages that get responses by leading with context and relevance.",
        tips: [
            "Reference specific signals or company news",
            "Keep it short — 3 sentences max for cold outreach",
            "Always include a clear, low-friction CTA"
        ]
    },
    {
        number: "04",
        title: "Building a Sustainable Pipeline",
        description: "Create a system that consistently delivers qualified opportunities without burnout.",
        tips: [
            "Batch your sourcing time for deep focus",
            "Use automation for repetitive tasks",
            "Track metrics that matter: response rate, conversion, time-to-fill"
        ]
    }
];

export default function RecruitmentPlaybook() {
    const demoLink = "https://calendly.com/felix-boilr/demo";

    return (
        <div className="min-h-screen bg-gray-100">
            <CursorSpotlight size={180} />
            <NavigationHeader mode="recruitment" onModeChange={() => { }} />

            <main className="pt-24 sm:pt-28 md:pt-32">

                {/* Hero Section */}
                <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5fff9e]/10 border border-[#5fff9e]/20 text-[#10b981] text-sm font-medium mb-6">
                            <BookOpen className="h-4 w-4" />
                            Free Resource
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                            The Modern Recruitment<br />
                            <span className="text-[#10b981]">Playbook</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-8">
                            A step-by-step guide to building a high-performance sourcing machine.
                            From ICP definition to pipeline metrics — everything you need to recruit smarter.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>15 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Lightbulb className="h-4 w-4" />
                                <span>4 chapters</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Target className="h-4 w-4" />
                                <span>Actionable tactics</span>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Chapters */}
                <section className="py-16 sm:py-20">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">
                        <div className="space-y-12 sm:space-y-16">
                            {chapters.map((chapter, index) => (
                                <div key={chapter.number} className="relative">
                                    {/* Chapter Header */}
                                    <div className="flex items-start gap-6 mb-6">
                                        <span className="text-4xl sm:text-5xl font-bold text-[#5fff9e]">
                                            {chapter.number}
                                        </span>
                                        <div>
                                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                                {chapter.title}
                                            </h2>
                                            <p className="text-gray-600 leading-relaxed">
                                                {chapter.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Tips */}
                                    <div className="ml-0 sm:ml-16 lg:ml-20 bg-gray-50 rounded-xl p-6">
                                        <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                                            Key Takeaways
                                        </h3>
                                        <ul className="space-y-3">
                                            {chapter.tips.map((tip, tipIndex) => (
                                                <li key={tipIndex} className="flex items-start gap-3">
                                                    <CheckCircle className="h-5 w-5 text-[#10b981] mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Divider */}
                                    {index < chapters.length - 1 && (
                                        <div className="mt-12 sm:mt-16 border-t border-gray-100" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-20 md:py-24 bg-gray-900 text-white">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Put the playbook into action
                        </h2>
                        <p className="text-white/70 mb-8 max-w-xl mx-auto">
                            boilr automates the heavy lifting — signal detection, lead scoring, and enrichment —
                            so you can focus on executing the strategies in this playbook.
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
