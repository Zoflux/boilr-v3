import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ArrowRight, Calculator, Clock, TrendingUp, DollarSign, Users } from "lucide-react";
import { useState } from "react";

export default function ROICalculator() {
    const demoLink = "https://calendly.com/felix-boilr/demo";

    // Calculator state
    const [recruiters, setRecruiters] = useState(5);
    const [hoursPerDay, setHoursPerDay] = useState(2); // Hours per day per recruiter (0.5-5)
    const [hourlyRate, setHourlyRate] = useState(50);

    // Calculations - based on hours per day
    const hoursPerWeek = hoursPerDay * 5; // 5 work days
    const hoursSavedPerDay = hoursPerDay * 0.7; // boilr saves ~70% of research time
    const weeklyHoursSaved = recruiters * hoursSavedPerDay * 5; // per week
    const totalWeeklyHours = recruiters * hoursPerDay * 5; // total hours before boilr
    const hoursAfterBoilr = totalWeeklyHours - weeklyHoursSaved; // hours left after automation
    const monthlyCostSaved = weeklyHoursSaved * 4 * hourlyRate;
    const yearlyCostSaved = monthlyCostSaved * 12;
    const productivityGain = Math.round(70); // 70% time reduction

    return (
        <div className="min-h-screen bg-gray-50">
            <CursorSpotlight size={180} />
            <NavigationHeader mode="recruitment" onModeChange={() => { }} />

            <main>

                {/* Hero Section */}
                <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 bg-gradient-to-b from-gray-50 to-white">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5fff9e]/10 border border-[#5fff9e]/20 text-[#10b981] text-sm font-medium mb-6">
                            <Calculator className="h-4 w-4" />
                            Free Tool
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                            ROI Calculator
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">
                            See how much time and money your team could save by automating lead research with boilr.
                        </p>

                    </div>
                </section>

                {/* Calculator Section */}
                <section className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-white">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                            {/* Inputs */}
                            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Your team details</h2>

                                <div className="space-y-6">
                                    {/* Recruiters */}
                                    <div>
                                        <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                                            <span>Number of recruiters</span>
                                            <span className="text-[#10b981] font-semibold">{recruiters}</span>
                                        </label>
                                        <input
                                            type="range"
                                            min="1"
                                            max="50"
                                            value={recruiters}
                                            onChange={(e) => setRecruiters(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#10b981]"
                                        />
                                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                                            <span>1</span>
                                            <span>50</span>
                                        </div>
                                    </div>

                                    {/* Hours per day */}
                                    <div>
                                        <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                                            <span>Hours spent on research per day (per recruiter)</span>
                                            <span className="text-[#10b981] font-semibold">{hoursPerDay}h</span>
                                        </label>
                                        <input
                                            type="range"
                                            min="0.5"
                                            max="5"
                                            step="0.5"
                                            value={hoursPerDay}
                                            onChange={(e) => setHoursPerDay(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#10b981]"
                                        />
                                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                                            <span>0.5h</span>
                                            <span>5h</span>
                                        </div>
                                    </div>

                                    {/* Hourly rate */}
                                    <div>
                                        <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                                            <span>Average hourly cost (salary + overhead)</span>
                                            <span className="text-[#10b981] font-semibold">${hourlyRate}</span>
                                        </label>
                                        <input
                                            type="range"
                                            min="20"
                                            max="150"
                                            step="5"
                                            value={hourlyRate}
                                            onChange={(e) => setHourlyRate(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#10b981]"
                                        />
                                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                                            <span>$20</span>
                                            <span>$150</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-white rounded-xl border border-gray-200">
                                    <p className="text-sm text-gray-500">
                                        <strong className="text-gray-700">How we calculate:</strong> boilr customers report saving up to 70% of their daily research time by automating manual lead research tasks.
                                    </p>
                                </div>
                            </div>

                            {/* Results */}
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Your potential savings</h2>

                                <div className="space-y-5">
                                    {/* TIME SAVINGS CARD */}
                                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                                        <div className="flex items-center gap-2 mb-5">
                                            <Clock className="h-5 w-5 text-[#10b981]" />
                                            <h3 className="font-semibold text-gray-900">Time savings</h3>
                                        </div>

                                        {/* Before vs After */}
                                        <div className="flex items-center justify-between gap-4 mb-4">
                                            <div className="flex-1">
                                                <p className="text-xs text-gray-500 mb-1">Before</p>
                                                <p className="text-2xl font-bold text-gray-400">{Math.round(totalWeeklyHours)}h</p>
                                                <p className="text-xs text-gray-400">per week</p>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <ArrowRight className="h-6 w-6 text-[#10b981]" />
                                            </div>
                                            <div className="flex-1 text-right">
                                                <p className="text-xs text-gray-500 mb-1">After</p>
                                                <p className="text-2xl font-bold text-gray-900">{Math.round(hoursAfterBoilr)}h</p>
                                                <p className="text-xs text-gray-400">per week</p>
                                            </div>
                                        </div>

                                        {/* Visual bar comparison */}
                                        <div className="space-y-2 mb-4">
                                            <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                                            <div className="h-3 bg-[#10b981] rounded-full" style={{ width: '30%' }}></div>
                                        </div>

                                        {/* Highlight */}
                                        <div className="bg-[#5fff9e]/10 rounded-xl p-4 text-center">
                                            <p className="text-sm text-gray-600">You save</p>
                                            <p className="text-3xl font-bold text-[#10b981]">{Math.round(weeklyHoursSaved)} hours</p>
                                            <p className="text-sm text-gray-500">every week</p>
                                        </div>
                                    </div>

                                    {/* COST SAVINGS CARD */}
                                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-lg">
                                        <div className="flex items-center gap-2 mb-5">
                                            <DollarSign className="h-5 w-5 text-[#5fff9e]" />
                                            <h3 className="font-semibold text-white">Cost savings</h3>
                                        </div>

                                        {/* Yearly - Big number */}
                                        <div className="text-center mb-4">
                                            <p className="text-4xl sm:text-5xl font-bold text-[#5fff9e]">${yearlyCostSaved.toLocaleString()}</p>
                                            <p className="text-white/60 text-sm mt-1">saved per year</p>
                                        </div>

                                        {/* Monthly - Small */}
                                        <div className="border-t border-white/10 pt-4 text-center">
                                            <p className="text-white/50 text-xs">That's</p>
                                            <p className="text-xl font-semibold text-white">${monthlyCostSaved.toLocaleString()}<span className="text-white/50 text-sm font-normal"> / month</span></p>
                                        </div>
                                    </div>

                                </div>

                                {/* CTA */}
                                <div className="mt-8">
                                    <a
                                        href={demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-black bg-[#48ee8d] hover:bg-[#5fff9e] shadow-[0_4px_20px_rgba(72,238,141,0.35)] transition-all duration-200"
                                    >
                                        Start Saving Time
                                        <ArrowRight className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-16 sm:py-20 bg-gray-50">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">
                            Ready to see these savings in action?
                        </h2>
                        <p className="text-gray-500 mb-8">
                            Book a demo and we'll show you exactly how boilr can transform your team's productivity.
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
