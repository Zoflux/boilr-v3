import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ArrowRight, Zap, Target, Users, Rocket } from "lucide-react";

export default function AboutUs() {
    const demoLink = "https://calendly.com/felix-boilr/demo";

    return (
        <div className="min-h-screen bg-white">
            <CursorSpotlight size={180} />
            <NavigationHeader mode="recruitment" onModeChange={() => { }} />

            <main className="pt-24 sm:pt-28 md:pt-32">

                {/* Hero Section */}
                <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5fff9e]/10 border border-[#5fff9e]/20 text-[#10b981] text-sm font-medium mb-6">
                            <Users className="h-4 w-4" />
                            About boilr
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                            Building the future of<br />
                            <span className="text-[#10b981]">recruitment intelligence</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">
                            We're on a mission to help recruiters find the right opportunities faster —
                            with AI that does the heavy lifting, so you can focus on building relationships.
                        </p>

                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 sm:py-20">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

                            <div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                                    Why we built boilr
                                </h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        Recruiters spend too much time on manual research — jumping between tabs,
                                        copying data into spreadsheets, and hoping they don't miss a key signal.
                                    </p>
                                    <p>
                                        We built boilr to change that. Our AI continuously scans thousands of sources,
                                        enriches every lead with context, and prioritizes opportunities so you can
                                        focus on what matters: connecting with the right people at the right time.
                                    </p>
                                    <p>
                                        No more tab chaos. No more missed opportunities. Just high-quality leads,
                                        delivered daily.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5fff9e]/20 text-[#5fff9e] flex-shrink-0">
                                            <Target className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Precision over volume</h3>
                                            <p className="text-white/70 text-sm">We believe in quality leads, not endless lists.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5fff9e]/20 text-[#5fff9e] flex-shrink-0">
                                            <Zap className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Speed without busywork</h3>
                                            <p className="text-white/70 text-sm">Automation that saves hours, not creates more tasks.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5fff9e]/20 text-[#5fff9e] flex-shrink-0">
                                            <Rocket className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Built for recruiters</h3>
                                            <p className="text-white/70 text-sm">Every feature designed with your workflow in mind.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 sm:py-20 bg-gray-50">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <p className="text-3xl sm:text-4xl font-bold text-[#10b981]">10k+</p>
                                <p className="text-gray-500 text-sm mt-1">Sources monitored</p>
                            </div>
                            <div>
                                <p className="text-3xl sm:text-4xl font-bold text-[#10b981]">3-4 hrs</p>
                                <p className="text-gray-500 text-sm mt-1">Saved per week</p>
                            </div>
                            <div>
                                <p className="text-3xl sm:text-4xl font-bold text-[#10b981]">40%</p>
                                <p className="text-gray-500 text-sm mt-1">More qualified leads</p>
                            </div>
                            <div>
                                <p className="text-3xl sm:text-4xl font-bold text-[#10b981]">24/7</p>
                                <p className="text-gray-500 text-sm mt-1">Always-on scanning</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-20 md:py-24">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                            Ready to work smarter?
                        </h2>
                        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                            See how boilr can transform your prospecting workflow.
                            Book a demo and we'll show you how it works.
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
