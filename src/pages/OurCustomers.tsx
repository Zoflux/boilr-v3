import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ArrowRight, Quote, Star, Users } from "lucide-react";

// Client logos (same as landing page)
const CLIENT_LOGOS = [
    { name: "923 Home", src: "/client-logos/923+Home+Logo.webp" },
    { name: "Absolut", src: "/client-logos/absolut 1.png" },
    { name: "Altitude", src: "/client-logos/altitude 1.png" },
    { name: "Consol", src: "/client-logos/consol.png" },
    { name: "Datascope", src: "/client-logos/datascope.webp" },
    { name: "Empresaria", src: "/client-logos/Empresaria 1.png" },
    { name: "Gecko", src: "/client-logos/gecko.png" },
    { name: "IT", src: "/client-logos/IT.png" },
    { name: "KRG", src: "/client-logos/krg.png" },
    { name: "Palm Outsourcing", src: "/client-logos/palm-outsourcing.png" },
    { name: "Parity", src: "/client-logos/parity_logo 1.png" },
    { name: "Switch", src: "/client-logos/Switch.png" },
];

// YouTube video URLs for customer testimonials
// Replace these placeholder URLs with actual YouTube video IDs when available
const YOUTUBE_VIDEOS = {
    "923jobs": "", // Placeholder - add YouTube video ID here (e.g., "dQw4w9WgXcQ")
    "datascope": "", // Placeholder - add YouTube video ID here
};

// Featured video testimonials with Problem/Goal/Solution format
const featuredTestimonials = [
    {
        id: 1,
        youtubeId: YOUTUBE_VIDEOS["923jobs"], // Add YouTube video ID when available
        quote: "We went from no structured business development to signing a new client in month one. boilr lets us focus on the human side, not the research.",
        author: "Helen Wright",
        role: "Managing Director",
        company: "923 Jobs",
        problem: "The agency lacked a structured business development process. Recruiters wasted hours manually trawling LinkedIn and job boards for leads, resulting in sporadic outreach and missed opportunities.",
        goal: "Automate lead sourcing so 360-recruiters can manage their own pipelines. This eliminates manual research and lets them focus on outreach and relationship building.",
        solution: "boilr now monitors the market for niche flexible roles and delivers qualified leads daily. This automation allowed the team to build a consistent habit and secure a new client with signed terms within their first month."
    },
    {
        id: 2,
        youtubeId: YOUTUBE_VIDEOS["datascope"], // Add YouTube video ID when available
        quote: "We have the contacts, but we had no idea who was actually recruiting. boilr tips us off, allowing us to leverage our network to crack open new clients immediately.",
        author: "Julien Hofer",
        role: "Founder & Managing Director",
        company: "Datascope",
        problem: "After years of inbound business, a tough economic climate required aggressive outbound sales. Manual research was neglected, leaving the team with zero visibility on which companies were hiring.",
        goal: "Automate market mapping in the UK and abroad to bypass manual vacancy searches and focus on dialogues with hiring managers.",
        solution: "boilr monitors the market for international and niche triggers, delivering active job leads daily. The team cross-references vacancies with their 30-year candidate database to identify warm entry points and secure new business."
    },
];

// Quick quote cards
const customerQuotes = [
    {
        quote: "We operate in a very niche market, but Boilr is helping me discover new companies I’ve never seen before. I use it not just to find companies, but also to track job openings, including those not posted on job boards but only on company websites in the last 72 hours, giving me a real strategic advantage.",
        author: "Andrew Chubb",
        role: "Managing Director",
        company: "KRG Group Ltd",
        image: "/testimonials/andrew-chubb.png",
    },
    {
        quote: "We went from having no real business development structure to signing our first client and securing a job brief through Boiler in less than a month. It’s a simple, easy-to-use platform that instantly provided the critical structure and follow-up support we were missing in our outreach efforts.",
        author: "Helen Wright",
        role: "Managing Director",
        company: "923 Jobs",
        image: "/testimonials/helen-wright.jpg",
    },
    {
        quote: "Boilr helps us map new markets and uncover companies we’d never found before, especially smaller companies with under 200 people that are usually hard to find but perfect for outbound. Within the first week of signing up, we already saw our first wins. It truly pays for itself.",
        author: "Sam Wason",
        role: "Managing Director",
        company: "Cathcart Technology",
        image: "/testimonials/sam-wason.png",
    },
    {
        quote: "Already during the 5-day trial, our business development team managed to save three hours of research per day finding temporary positions. We even discovered 25 new companies we had never targeted before and we’ve been in business for 15 years!",
        author: "Ben Sayer",
        role: "Head of Business Development",
        company: "Altitude Select",
        image: "/testimonials/ben-sayer.png",
    },
    {
        quote: "We had the network. boilr showed us who's actually hiring. Now we close deals before competitors even know they exist.",
        author: "Julien Hofer",
        role: "Founder & Managing Director",
        company: "Datascope",
        image: "/testimonials/julien-hofer.png",
    },
    {
        quote: "The signal scoring saves us from chasing dead ends. Every lead is qualified.",
        author: "David Mueller",
        role: "Business Development",
        company: "Scale Recruiters",
    },
];

// Video Testimonial Card with YouTube embed support
function VideoTestimonialCard({ testimonial, isReversed }: { testimonial: typeof featuredTestimonials[0], isReversed: boolean }) {
    return (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className={`grid md:grid-cols-2 gap-0 ${isReversed ? 'md:grid-flow-dense' : ''}`}>
                {/* Video Side */}
                <div
                    className={`relative bg-gray-900 min-h-[250px] md:min-h-[320px] overflow-hidden ${isReversed ? 'md:col-start-2' : ''}`}
                >
                    {testimonial.youtubeId ? (
                        // YouTube embed
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${testimonial.youtubeId}?rel=0&modestbranding=1`}
                            title={`${testimonial.company} testimonial`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        // Video placeholder when no YouTube ID is set
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-400 text-sm">Video coming soon</p>
                        </div>
                    )}

                    {/* Quote overlay at bottom - only show when no video */}
                    {!testimonial.youtubeId && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pointer-events-none">
                            <blockquote className="text-white text-lg sm:text-xl font-medium leading-relaxed mb-3">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="text-white/70 text-sm">
                                {testimonial.author}, {testimonial.role} at {testimonial.company}
                            </div>
                        </div>
                    )}
                </div>

                {/* Problem / Goal / Solution Side */}
                <div className={`p-8 sm:p-10 lg:p-12 ${isReversed ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">Problem:</h3>
                            <p className="text-gray-600 leading-relaxed">{testimonial.problem}</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">Goal:</h3>
                            <p className="text-gray-600 leading-relaxed">{testimonial.goal}</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">Solution:</h3>
                            <p className="text-gray-600 leading-relaxed">{testimonial.solution}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function OurCustomers() {
    const demoLink = "https://calendly.com/felix-boilr/demo";

    return (
        <div className="min-h-screen bg-gray-50">
            <CursorSpotlight size={180} />
            <NavigationHeader mode="recruitment" onModeChange={() => { }} />

            <main>

                {/* ===== HERO SECTION ===== */}
                <section className="py-10 sm:py-12 md:py-14 bg-gray-50 relative overflow-hidden">
                    {/* Subtle gradient orbs in background */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5fff9e]/5 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#5fff9e]/5 rounded-full blur-3xl -z-10"></div>

                    <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">

                        {/* Avatar Stack + Trust Text */}
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="flex -space-x-3">
                                {[
                                    "/testimonials/sam-wason.png",
                                    "/testimonials/helen-wright.jpg",
                                    "/testimonials/andrew-chubb.png",
                                    "/testimonials/ben-sayer.png",
                                ].map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt="Customer"
                                        className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-gray-500">
                                Trusted by <span className="font-semibold text-gray-700">100+</span> recruitment agencies worldwide
                            </p>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                            <span className="text-[#5fff9e]"></span> Customer Success Stories
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-8">
                            Transform your recruitment workflow. Spend less time researching,
                            more time placing candidates.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                            <a
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-[#48ee8d] hover:bg-[#5fff9e] shadow-[0_4px_20px_rgba(72,238,141,0.35)] transition-all duration-200"
                            >
                                Check leads
                            </a>
                            <a
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                            >
                                Book a Call
                            </a>
                        </div>

                        {/* Review Platform Badges with Backlinks */}
                        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 mb-12">
                            {/* G2 Badge */}
                            <a
                                href="https://www.g2.com/products/boilr-ai/reviews"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
                            >
                                <img src="/g2-logo.png" alt="G2" className="h-7 w-auto" />
                                <div className="flex items-center gap-1">
                                    <span className="text-lg font-bold text-gray-700">5.0</span>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 text-orange-400 fill-orange-400" />
                                        ))}
                                    </div>
                                </div>
                            </a>

                            {/* Capterra Badge */}
                            <a
                                href="https://www.capterra.co.uk/software/1082714/boilr-AI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:opacity-80 transition-opacity duration-300"
                            >
                                <img src="/capterra-logo.png" alt="Capterra" className="h-7 w-auto" />
                            </a>

                            {/* Product Hunt Badge */}
                            <a
                                href="https://www.producthunt.com/products/boilr/launches/boilr?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-boilr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity duration-300"
                            >
                                <img
                                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1038496&theme=light&t=1766417810289"
                                    alt="boilr. - The first autonomous AI agent for recruiter lead generation | Product Hunt"
                                    width="200"
                                    height="43"
                                    className="h-9 w-auto"
                                />
                            </a>
                        </div>

                        {/* Animated Logo Marquee */}
                        <div className="relative w-full overflow-hidden mt-6">
                            {/* Fade edges */}
                            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                            {/* Scrolling logos */}
                            <div className="client-logos-marquee flex items-center gap-16 py-4">
                                {/* First set of logos */}
                                {CLIENT_LOGOS.map((logo, i) => (
                                    <img
                                        key={`logo-1-${i}`}
                                        src={logo.src}
                                        alt={logo.name}
                                        className="h-6 sm:h-7 w-auto object-contain grayscale opacity-40 flex-shrink-0"
                                    />
                                ))}
                                {/* Duplicate for seamless loop */}
                                {CLIENT_LOGOS.map((logo, i) => (
                                    <img
                                        key={`logo-2-${i}`}
                                        src={logo.src}
                                        alt={logo.name}
                                        className="h-6 sm:h-7 w-auto object-contain grayscale opacity-40 flex-shrink-0"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Marquee animation styles - NO pause on hover */}
                        <style>{`
                            @keyframes clientLogosScroll {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-50%); }
                            }
                            .client-logos-marquee {
                                animation: clientLogosScroll 50s linear infinite;
                                width: max-content;
                            }
                        `}</style>
                    </div>
                </section>

                {/* ===== VIDEO TESTIMONIALS SECTION ===== */}
                <section className="py-16 sm:py-20 bg-white">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">

                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                How Recruitment Leaders Built{" "}
                                <span className="text-[#10b981]">Speed, Scale & Success</span>
                                {" "}with boilr
                            </h2>
                        </div>

                        {/* Featured Video Testimonials */}
                        <div className="space-y-16 sm:space-y-24">
                            {featuredTestimonials.map((testimonial, idx) => (
                                <VideoTestimonialCard
                                    key={testimonial.id}
                                    testimonial={testimonial}
                                    isReversed={idx % 2 === 1}
                                />
                            ))}
                        </div>

                        {/* Book Demo CTA after videos */}
                        <div className="mt-16 text-center">
                            <a
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-[#48ee8d] hover:bg-[#5fff9e] shadow-[0_4px_20px_rgba(72,238,141,0.35)] transition-all duration-200"
                            >
                                Book a Demo
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <p className="mt-4 text-sm text-gray-400">Personal setup • Get new opportunities</p>
                        </div>
                    </div>
                </section>

                {/* ===== CUSTOMER QUOTES GRID ===== */}
                <section className="py-16 sm:py-20 bg-gray-50">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">

                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-medium mb-6">
                                <Quote className="h-4 w-4" />
                                What customers say
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                                More Reviews from Leading Recruiters
                            </h2>
                        </div>

                        {/* Quotes Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {customerQuotes.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-[#5fff9e]/30 transition-all duration-300 flex flex-col h-full"
                                >
                                    {/* Quote Icon */}
                                    <Quote className="w-8 h-8 text-[#5fff9e] mb-4 flex-shrink-0" />

                                    {/* Quote Text - grows to push author down */}
                                    <p className="text-gray-700 leading-relaxed flex-grow">
                                        "{item.quote}"
                                    </p>

                                    {/* Author - always at bottom */}
                                    <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                                        {'image' in item && item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.author}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5fff9e] to-[#10b981] flex items-center justify-center text-black font-semibold text-sm">
                                                {item.author.split(' ').map(n => n[0]).join('')}
                                            </div>
                                        )}
                                        <div>
                                            <p className="font-semibold text-gray-900 text-sm">{item.author}</p>
                                            <p className="text-gray-500 text-xs">{item.role}</p>
                                            <p className="text-gray-500 text-xs">{item.company}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== RESULTS + CTA SECTION (Combined dark) ===== */}
                <section className="py-16 sm:py-20" style={{ background: 'linear-gradient(to bottom, #0a0f0c, #080b09, #050705)' }}>
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
                            The results speak for themselves
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                            {/* Result 1 */}
                            <div className="text-left">
                                <div className="text-[#5fff9e] mb-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-white mb-2">95% satisfaction</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Our customers rate their experience with boilr as excellent or very good.
                                </p>
                            </div>
                            {/* Result 2 */}
                            <div className="text-left">
                                <div className="text-[#5fff9e] mb-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-white mb-2">2+ hours saved daily</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Recruiters report saving over 3 hours per day on research and lead generation.
                                </p>
                            </div>
                            {/* Result 3 */}
                            <div className="text-left">
                                <div className="text-[#5fff9e] mb-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-white mb-2">More qualified leads</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Teams see a significant increase in lead quality and conversion rates.
                                </p>
                            </div>
                            {/* Result 4 */}
                            <div className="text-left">
                                <div className="text-[#5fff9e] mb-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-white mb-2">Rated 4.8 on G2</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Rated as a top performer with excellent reviews from verified users.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Part */}
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center mt-16 sm:mt-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                            Ready to transform your recruitment?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Join 50+ recruitment agencies already using boilr to find better leads faster.
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
