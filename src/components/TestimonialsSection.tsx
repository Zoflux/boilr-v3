import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

interface Testimonial {
    quote: string;
    name: string;
    role: string;
    company: string;
    image?: string;
    highlight: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "We went from no structured business development to signing a new client in month one. boilr lets us focus on the human side, not the research.",
        name: "Helen Wright",
        role: "Managing Director",
        company: "923-jobs",
        image: "/testimonials/helen-wright.jpg",
        highlight: "New client in month one"
    },
    {
        quote: "The time savings alone justified the investment. We're now calling hiring managers before they've even posted the role publicly.",
        name: "Sam Wason",
        role: "Co-Founder",
        company: "Digital Gurus",
        image: "/testimonials/sam-wason.jpg",
        highlight: "48h head start on every opportunity"
    },
    {
        quote: "boilr changed how we think about sourcing. It's not about working harder — it's about knowing where to look before anyone else.",
        name: "Andrew Chubb",
        role: "Head of Talent",
        company: "Ventrica",
        image: "/testimonials/andrew-chubb.jpg",
        highlight: "Changed our entire approach"
    }
];

export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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

    return (
        <section ref={sectionRef} className="py-20 sm:py-28 bg-[#fafafa]">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* Header */}
                <header className={`text-center mb-14 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    <div className="flex items-center justify-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-[#5fff9e] text-[#5fff9e]" />
                        ))}
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        Trusted by 50+ recruitment teams
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        Here's what they say about working smarter, not harder.
                    </p>
                </header>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 
                hover:shadow-xl hover:shadow-gray-100/50 hover:border-[#5fff9e]/20
                transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{ transitionDelay: `${150 + index * 100}ms` }}
                        >
                            {/* Highlight Badge */}
                            <div className="inline-flex items-center rounded-full bg-[#5fff9e]/10 px-3 py-1 text-xs font-medium text-[#10b981] mb-4">
                                {testimonial.highlight}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-gray-700 leading-relaxed mb-6">
                                "{testimonial.quote}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                {testimonial.image ? (
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5fff9e] to-[#10b981] flex items-center justify-center text-black font-semibold text-sm">
                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                )}
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                                    <div className="text-gray-500 text-xs">{testimonial.role} @ {testimonial.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* G2 Rating */}
                <div className={`mt-10 flex justify-center transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "500ms" }}>
                    <a
                        href="https://www.g2.com/products/boilr/reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 hover:border-[#5fff9e]/50 transition-colors"
                    >
                        <img src="/g2-logo.svg" alt="G2" className="h-6" />
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">4.8/5 on G2</span>
                    </a>
                </div>

            </div>
        </section>
    );
}
