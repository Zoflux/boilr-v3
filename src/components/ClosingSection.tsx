export default function ClosingSection() {
  const openDemo = () => {
    window.open("https://calendly.com/felix-boilr/demo", "_blank");
  };

  return (
    <section data-dark-section="true" id="cta" className="bg-black text-white py-16 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Simple CTA */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Ready to get started?
        </h2>
        <p className="text-gray-400 mb-8 text-base sm:text-lg">
          Book a 15-minute demo and see how boilr works.
        </p>

        <button
          onClick={openDemo}
          className="px-8 py-4 rounded-xl font-semibold text-black bg-[#5fff9e] hover:bg-[#4de88a] transition-all duration-200"
        >
          Book a Demo →
        </button>

      </div>
    </section>
  );
}
