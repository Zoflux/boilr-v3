import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ArrowRight, Target, TrendingUp, Users, Handshake, Lightbulb, CheckCircle, Building2 } from "lucide-react";

// BD strategies
const strategies = [
    {
        number: "01",
        title: "Signal-Based Prospecting",
        description: "Instead of cold-calling every company in your market, focus on those showing active hiring intent.",
        tips: [
            "Monitor hiring velocity — companies ramping up are often open to agency support",
            "Track funding announcements for new budget availability",
            "Watch for leadership changes that bring new hiring priorities"
        ]
    },
    {
        number: "02",
        title: "Building Decision-Maker Relationships",
        description: "BD in recruiting is about building long-term relationships with hiring managers and HR leaders.",
        tips: [
            "Connect before they have an urgent need",
            "Share valuable insights about market trends",
            "Position yourself as a talent advisor, not just a vendor"
        ]
    },
    {
        number: "03",
        title: "Account-Based Recruiting",
        description: "Focus your BD efforts on a curated list of target companies that match your specialty.",
        tips: [
            "Define your ideal client profile (size, industry, growth stage)",
            "Research each account deeply before outreach",
            "Create multi-threaded relationships within target accounts"
        ]
    },
    {
        number: "04",
        title: "Converting Leads to Clients",
        description: "The best BD reps know how to turn a single conversation into a lasting partnership.",
        tips: [
            "Start with a quick win — place one candidate to prove value",
            "Set clear expectations around communication and timelines",
            "Ask for introductions to other hiring managers"
        ]
    }
];

const metrics = [
    { label: "Response Rate", value: "30-40%", description: "When reaching out to companies with active signals" },
    { label: "Conversion", value: "3x", description: "Higher close rate with signal-based prospecting" },
    { label: "Time Saved", value: "5+ hrs", description: "Per week on prospecting and research" }
];

export default function BusinessDevelopment() {
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
                            <Handshake className="h-4 w-4" />
                            Growth Strategies
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                            Business Development<br />
                            <span className="text-[#10b981]">in Recruiting</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-8">
                            Proven strategies to grow your recruiting agency or build a pipeline of clients
                            that actually need your services.
                        </p>

                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-black bg-[#48ee8d] hover:bg-[#5fff9e] shadow-[0_4px_20px_rgba(72,238,141,0.35)] transition-all duration-200"
                        >
                            Supercharge Your BD
                            <ArrowRight className="h-4 w-4" />
                        </a>

                    </div>
                </section>

                {/* Metrics */}
                <section className="py-12 border-b border-gray-100">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">
                        <div className="grid grid-cols-3 gap-8 text-center">
                            {metrics.map((metric, index) => (
                                <div key={metric.label}>
                                    <p className="text-2xl sm:text-3xl font-bold text-[#10b981]">{metric.value}</p>
                                    <p className="text-gray-900 font-medium text-sm mt-1">{metric.label}</p>
                                    <p className="text-gray-500 text-xs mt-1">{metric.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Strategies */}
                <section className="py-16 sm:py-20">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                                BD Strategies That Work
                            </h2>
                            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                                Move beyond cold calling. Build a modern BD engine that brings clients to you.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {strategies.map((strategy, index) => (
                                <div key={strategy.number} className="relative">
                                    <div className="flex items-start gap-6">
                                        <span className="text-4xl sm:text-5xl font-bold text-[#5fff9e] flex-shrink-0">
                                            {strategy.number}
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                                {strategy.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4">{strategy.description}</p>
                                            <ul className="space-y-2">
                                                {strategy.tips.map((tip, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <CheckCircle className="h-5 w-5 text-[#10b981] mt-0.5 flex-shrink-0" />
                                                        <span className="text-gray-700">{tip}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    {index < strategies.length - 1 && (
                                        <div className="mt-8 border-t border-gray-100" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How boilr helps */}
                <section className="py-16 sm:py-20 bg-black text-white">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                                How boilr powers your BD
                            </h2>
                            <p className="text-white/70 max-w-xl mx-auto">
                                Automate the research. Focus on the relationships.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5fff9e]/20 text-[#5fff9e]">
                                        <Target className="h-6 w-6" />
                                    </div>
                                </div>
                                <h3 className="font-semibold mb-2">Find Ready Buyers</h3>
                                <p className="text-white/60 text-sm">Identify companies actively hiring before they go to market.</p>
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5fff9e]/20 text-[#5fff9e]">
                                        <Building2 className="h-6 w-6" />
                                    </div>
                                </div>
                                <h3 className="font-semibold mb-2">Rich Company Intel</h3>
                                <p className="text-white/60 text-sm">Get context on every account: size, stack, funding, and more.</p>
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5fff9e]/20 text-[#5fff9e]">
                                        <TrendingUp className="h-6 w-6" />
                                    </div>
                                </div>
                                <h3 className="font-semibold mb-2">Daily Lead Drops</h3>
                                <p className="text-white/60 text-sm">Fresh opportunities delivered to you every morning.</p>
                            </div>
                        </div>

                        <div className="text-center mt-12">
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
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
