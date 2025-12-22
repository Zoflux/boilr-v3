import { CursorSpotlight } from "@/components/CursorSpotlight";
import { Footer } from "@/components/Footer";
import { NavigationHeader } from "@/components/NavigationHeader";
import ClientLogosSection from "@/components/ClientLogosSection";
import LogoOutcomeSection from "@/components/LogoOutcomeSection";
import { FAQSection, shortFAQs } from "@/components/FAQSection";

const testimonials = [
  {
    quote: "We see signals days before competitors. Our BDs now spend their time speaking with hiring managers instead of scrolling boards.",
    name: "Celia M.",
    role: "Director, Growth Recruitment",
    metric: "3x more first calls",
  },
  {
    quote: "boilr is the only tool that actually cut our research time. 15 minutes a day and the team has everything they need.",
    name: "Marcus H.",
    role: "Head of Business Development",
    metric: "12h admin saved weekly",
  },
  {
    quote: "The quality of signals is what stands out. Funding, hiring velocity, tech changes — all enriched so we can act immediately.",
    name: "Priya M.",
    role: "Partner, Niche Tech Search",
    metric: "65% reply rate on warm signals",
  },
];

const SocialProof = () => {
  const handleDemo = () => window.open("https://calendly.com/felix-boilr/demo", "_blank");

  return (
    <div className="min-h-screen bg-background text-black">
      <CursorSpotlight size={420} />
      <NavigationHeader />

      <main className="-mt-20 pt-24 sm:-mt-24 sm:pt-32 pb-14 sm:pb-16">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-black/60">
            Social Proof
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Teams that stopped being second
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-black/70 max-w-3xl mx-auto">
            Agencies using boilr win the speed race, spot intent sooner, and hold better conversations because every signal arrives
            enriched and prioritized.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              onClick={handleDemo}
              className="px-6 sm:px-7 py-3 rounded-full bg-black text-white font-semibold text-sm sm:text-base hover:bg-black/90 transition"
            >
              Book a demo
            </button>
            <button
              onClick={() => window.open("https://app.boilr.ai/", "_blank")}
              className="px-6 sm:px-7 py-3 rounded-full border border-black/10 bg-white text-sm sm:text-base font-semibold text-black hover:border-black/20 transition"
            >
              Log in
            </button>
          </div>
        </section>

        <section className="mt-12 sm:mt-14">
          <ClientLogosSection />
        </section>

        <section className="mt-12 sm:mt-14 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <article
                key={idx}
                className="h-full rounded-2xl border border-black/10 bg-white p-6 sm:p-7 shadow-sm"
              >
                <p className="text-sm sm:text-base text-black/75 leading-relaxed">“{testimonial.quote}”</p>
                <div className="mt-5 pt-4 border-t border-black/10">
                  <p className="text-base font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-black/60">{testimonial.role}</p>
                  <p className="mt-2 inline-flex items-center rounded-lg bg-black/5 text-black px-3 py-1 text-xs font-semibold">
                    {testimonial.metric}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 sm:mt-14">
          <LogoOutcomeSection />
        </section>

        <section className="mt-12 sm:mt-14">
          <FAQSection faqs={shortFAQs} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SocialProof;
