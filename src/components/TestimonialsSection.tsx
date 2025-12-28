import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

interface Testimonial {
    quote: string;
    name: string;
    role: string;
    company: string;
    image: string;
    features?: string[];
}

// 4 categories with real testimonials
const testimonialsByCategory: Record<string, Testimonial> = {
    "Managing Director": {
        quote: "We went from having no real business development structure to signing our first client in less than a month. It's a simple, easy-to-use platform that instantly provided the critical structure we were missing.",
        name: "Helen Wright",
        role: "Managing Director",
        company: "923 Jobs",
        image: "/testimonials/helen-wright.jpg",
        features: ["Signal Detection", "Lead Enrichment", "Quick Setup"]
    },
    "Founder": {
        quote: "We operate in a very niche market, but Boilr is helping me discover new companies I've never seen before. I use it to track job openings not posted on job boards, giving me a real strategic advantage.",
        name: "Andrew Chubb",
        role: "Managing Director",
        company: "KRG Group Ltd",
        image: "/testimonials/andrew-chubb.png",
        features: ["Niche Markets", "Hidden Signals", "Competitive Edge"]
    },
    "Head of BD": {
        quote: "Already during the 5-day trial, our business development team managed to save three hours of research per day. We discovered 25 new companies we had never targeted before and we've been in business for 15 years!",
        name: "Ben Sayer",
        role: "Head of Business Development",
        company: "Altitude Select",
        image: "/testimonials/ben-sayer.png",
        features: ["Time Savings", "New Opportunities", "Market Mapping"]
    },
    "Team Lead": {
        quote: "Boilr helps us map new markets and uncover companies we'd never found before, especially smaller companies with under 200 people that are usually hard to find but perfect for outbound. Within the first week, we saw our first wins.",
        name: "Sam Wason",
        role: "Managing Director",
        company: "Cathcart Technology",
        image: "/testimonials/sam-wason.png",
        features: ["SMB Targeting", "Market Discovery", "Fast ROI"]
    }
};

const categories = Object.keys(testimonialsByCategory);

export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const activeTestimonial = testimonialsByCategory[activeCategory];

    return (
        <section ref={sectionRef} className="py-20 sm:py-28 bg-[#fafafa]">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">

                {/* Header */}
                <header className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        Trusted by 100+ recruitment companies
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        Here's what they say about working smarter, not harder.
                    </p>
                </header>

                {/* Tab Bar - Container style */}
                <div className={`flex justify-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "100ms" }}>
                    <div className="inline-flex items-center bg-gray-100 rounded-full p-1.5">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Testimonial Display - Two column layout, full width */}
                <div
                    className={`grid md:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: "200ms" }}
                >
                    {/* Image - Left aligned */}
                    <div>
                        <img
                            key={activeTestimonial.image}
                            src={activeTestimonial.image}
                            alt={activeTestimonial.name}
                            className="w-52 h-52 sm:w-60 sm:h-60 rounded-3xl object-cover shadow-lg"
                        />
                    </div>

                    {/* Quote and Author on right */}
                    <div>
                        <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                            "{activeTestimonial.quote}"
                        </blockquote>

                        {/* Author - Below quote */}
                        <div className="flex items-center gap-3 mb-4">
                            <div>
                                <p className="font-semibold text-gray-900">{activeTestimonial.name}</p>
                                <p className="text-gray-500 text-sm">{activeTestimonial.role} at {activeTestimonial.company}</p>
                            </div>
                        </div>

                        {/* Features */}
                        {activeTestimonial.features && (
                            <div className="flex flex-wrap gap-2">
                                <span className="text-sm text-gray-400">Features:</span>
                                {activeTestimonial.features.map((feature, i) => (
                                    <span key={i} className="text-sm text-[#10b981]">
                                        {feature}{i < activeTestimonial.features!.length - 1 ? "," : ""}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* G2 Rating - Simple, no border */}
                <div className={`mt-14 flex justify-center transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "400ms" }}>
                    <a
                        href="https://www.g2.com/products/boilr-ai/reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                        <img src="/g2-logo.png" alt="G2" className="h-7" />
                        <span className="text-lg font-bold text-gray-700">4.8</span>
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                            ))}
                        </div>
                    </a>
                </div>

            </div>
        </section>
    );
}
