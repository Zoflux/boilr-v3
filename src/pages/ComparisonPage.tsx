import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { Check, ArrowRight, Star, Zap, Target, Radar, Clock, TrendingUp, Users } from "lucide-react";

interface ComparisonPageProps {
    competitorName: string;
    competitorTagline?: string;
}

// Feature blocks for the "Game-Changing Features" section
const featureBlocks = [
    {
        title: "Always-on lead discovery",
        description: "boilr continuously scans 10,000+ sources to find companies actively hiring, expanding, or showing buying signals — so you never miss an opportunity.",
        subDescription: "Unlike manual research or basic alerts, boilr connects the dots across career pages, funding news, leadership changes, and tech stack updates.",
        bullets: [
            "Monitors career pages, job boards, and company news 24/7",
            "Detects hiring velocity changes before they're public",
            "Surfaces intent signals from multiple data sources"
        ]
    },
    {
        title: "Context-rich lead profiles",
        description: "Every lead comes enriched with the context you need — role, seniority, tech stack, company size, funding stage, and recent signals.",
        subDescription: "No more copy-pasting between tabs or building lists from scratch. boilr gives you outreach-ready intel.",
        bullets: [
            "Complete company and contact enrichment",
            "Role-specific context for personalized outreach",
            "Real-time updates when company data changes"
        ]
    },
    {
        title: "AI-powered prioritization",
        description: "boilr scores every lead based on your ideal customer profile, so you focus on the opportunities most likely to convert.",
        subDescription: "Set your criteria once — industry, size, tech stack, signals — and let boilr rank your pipeline automatically.",
        bullets: [
            "Custom scoring based on your ICP criteria",
            "Daily drops ranked by fit and timing",
            "Filter by signal type, urgency, or account tier"
        ]
    }
];

// Bottom features (3 columns)
const bottomFeatures = [
    {
        icon: Radar,
        title: "Signal detection",
        description: "AI-powered scanning across thousands of sources to catch buying signals early."
    },
    {
        icon: Target,
        title: "Smart matching",
        description: "Match leads to your ICP automatically — no manual filtering required."
    },
    {
        icon: Zap,
        title: "Instant enrichment",
        description: "Every lead comes with verified contact data and company context, ready for outreach."
    }
];

export function ComparisonPage({ competitorName, competitorTagline }: ComparisonPageProps) {
    const demoLink = "https://calendly.com/felix-boilr/demo";

    return (
        <div className="min-h-screen bg-white">
            <CursorSpotlight size={180} />
            <NavigationHeader mode="recruitment" onModeChange={() => { }} />

            <main className="pt-24 sm:pt-28 md:pt-32">

                {/* Hero Section */}
                <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50/50 to-white">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                            {/* Left: Headline */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-black text-white font-bold text-lg">
                                        b<span className="text-[#5fff9e]">.</span>
                                    </div>
                                    <span className="text-gray-400 text-2xl">×</span>
                                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-100 text-gray-600 font-bold text-lg">
                                        {competitorName.charAt(0)}
                                    </div>
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
                                    boilr vs {competitorName}
                                </h1>

                                <p className="text-lg sm:text-xl text-gray-500 mb-6">
                                    {competitorTagline || `See for yourself why teams are switching to boilr.`}
                                </p>

                                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                                    boilr was built for modern prospecting — with AI that finds, enriches, and prioritizes leads automatically. See why recruiters and sales teams choose boilr over {competitorName}.
                                </p>

                                <a
                                    href={demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-black bg-[#48ee8d] hover:bg-[#5fff9e] shadow-[0_4px_20px_rgba(72,238,141,0.35)] transition-all duration-200"
                                >
                                    Get started
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>

                            {/* Right: Testimonial */}
                            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#5fff9e]/5 to-transparent pointer-events-none" />

                                <blockquote className="relative text-xl sm:text-2xl font-medium leading-relaxed mb-6">
                                    "boilr gives us leads we never would have found manually — and saves hours every week."
                                </blockquote>
                                <div className="relative">
                                    <p className="font-semibold">Your Name Here</p>
                                    <p className="text-white/60 text-sm">Role @ Company</p>
                                </div>
                                <div className="relative flex gap-8 mt-8 pt-6 border-t border-white/10">
                                    <div>
                                        <p className="text-2xl font-bold text-[#5fff9e]">3-4 hrs</p>
                                        <p className="text-white/60 text-sm">saved per week</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-[#5fff9e]">40%</p>
                                        <p className="text-white/60 text-sm">more qualified leads</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Game-Changing Features Section */}
                <section className="py-16 sm:py-20 md:py-24">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">

                        {/* Section Header */}
                        <header className="text-center mb-16 sm:mb-20">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                                Three Game-Changing Features<br />
                                <span className="text-gray-900">boilr Has That {competitorName} Doesn't</span>
                            </h2>
                        </header>

                        {/* Feature Blocks - Alternating Layout */}
                        <div className="space-y-20 sm:space-y-28">
                            {featureBlocks.map((feature, index) => (
                                <div
                                    key={feature.title}
                                    className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Image/Visual Placeholder */}
                                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <div className="relative rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-6 sm:p-8 aspect-[4/3] flex items-center justify-center">
                                            {/* Placeholder for product screenshot */}
                                            <div className="text-center">
                                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center">
                                                    {index === 0 && <Radar className="h-8 w-8 text-[#10b981]" />}
                                                    {index === 1 && <Users className="h-8 w-8 text-[#10b981]" />}
                                                    {index === 2 && <TrendingUp className="h-8 w-8 text-[#10b981]" />}
                                                </div>
                                                <p className="text-gray-400 text-sm">Product screenshot</p>
                                            </div>

                                            {/* Decorative elements */}
                                            <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-red-400" />
                                            <div className="absolute top-4 left-9 w-3 h-3 rounded-full bg-yellow-400" />
                                            <div className="absolute top-4 left-14 w-3 h-3 rounded-full bg-green-400" />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {feature.description}
                                        </p>
                                        <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                                            {feature.subDescription}
                                        </p>

                                        {/* Bullet Points */}
                                        <ul className="space-y-3">
                                            {feature.bullets.map((bullet, bulletIndex) => (
                                                <li key={bulletIndex} className="flex items-start gap-3">
                                                    <Check className="h-5 w-5 text-[#10b981] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                                                    <span className="text-gray-700">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* Bottom Features - 3 Columns */}
                <section className="py-16 sm:py-20 border-t border-gray-100">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
                            {bottomFeatures.map((feature, index) => (
                                <div key={feature.title} className="text-center">
                                    <div className="flex justify-center mb-4">
                                        <feature.icon className="h-6 w-6 text-gray-400" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* G2 Section */}
                <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">

                        {/* G2 Badge */}
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#ff492c] text-white font-bold text-sm">
                                G2
                            </div>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-[#ff492c] text-[#ff492c]" />
                                ))}
                            </div>
                            <span className="text-gray-600 text-sm">4.9 stars <span className="text-gray-400">G2.com</span></span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                            Get started now
                        </h2>
                        <p className="text-gray-500 mb-8">
                            All you need to know about your next best leads.
                        </p>

                        {/* CTA */}
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

export default ComparisonPage;
