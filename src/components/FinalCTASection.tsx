interface FinalCTASectionProps {
  mode: "sales" | "recruitment";
}

export function FinalCTASection({ mode }: FinalCTASectionProps) {
  const handleScheduleDemo = () => {
    window.open("https://calendly.com/felix-boilr/demo", "_blank");
  };

  return (
    <section className="py-16 md:py-20 bg-black text-white text-center">
      <div className="max-w-6xl mx-auto px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight tracking-tight">The Question Isn’t Whether This Works</h2>
        <p className="text-base md:text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">The question is: how much longer are you okay being second?</p>
        <button 
          onClick={handleScheduleDemo}
          className="px-10 py-4 rounded-xl font-semibold text-black bg-white hover:bg-white/90"
        >
          Show Me How It Works
        </button>
        <div className="mt-3 text-xs text-white/70">15‑minute demo. See the platform. Decide if it’s for you.</div>
        <div className="mt-6 flex items-center justify-center gap-3 text-xs text-white/60">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10">Used by 100+ UK agencies</span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10">GDPR‑compliant</span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10">5‑day trial • No credit card</span>
        </div>
      </div>
    </section>
  );
}
