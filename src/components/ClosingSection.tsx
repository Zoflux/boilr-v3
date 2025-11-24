export default function ClosingSection() {
  const openDemo = () => {
    window.open("https://calendly.com/felix-boilr/demo", "_blank");
  };

  return (
    <section id="cta" className="bg-black text-white py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* FOMO copy - Mobile Optimized */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4">A Year From Now, Every Agency Will Have This</h2>
        <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Right now, you're early. Agencies already using AI for BD are growing 3× faster. Not because they're smarter.
          Because they can see further. By this time next year, AI‑powered BD will be standard. The question is:
          will you be ahead of that curve, or catching up to it?
        </p>

        {/* subtle connector divider */}
        <div className="mx-auto my-6 sm:my-8 md:my-10 h-px w-20 sm:w-24 bg-gradient-to-r from-white/0 via-white/20 to-white/0" />

        {/* CTA - Mobile Optimized */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3 leading-tight">The Question Isn't Whether This Works</h3>
        <p className="text-white/70 mb-5 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">The question is: how much longer are you okay being second?</p>
        <button
          onClick={openDemo}
          className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl font-semibold text-black bg-white hover:bg-white/90 transition"
        >
          Show Me How It Works
        </button>
        <div className="mt-3 text-xs text-white/70">15‑minute demo. See the platform. Decide if it's for you.</div>

        <div className="mt-5 sm:mt-6 flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-white/60 flex-wrap">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10">Used by 100+ UK agencies</span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10">GDPR‑compliant</span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10">5‑day trial • No credit card</span>
        </div>
      </div>
    </section>
  );
}


