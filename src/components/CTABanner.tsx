export default function CTABanner() {
  return (
    <div className="cta-section section-py">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-center">

          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-white/80 font-semibold text-sm uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-white/60" />
              Ready to Get Started?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.1]">
              At CyberDude, We're Committed<br className="hidden md:block" /> To Your Business Growth
            </h2>
            <p className="text-white/80 text-[15px] leading-relaxed max-w-xl">
              Take the first step towards achieving your business goals. Schedule a consultation with our IT specialists to explore how our innovative solutions can propel your business forward.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start lg:justify-end gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#E47911] font-bold px-8 py-4 rounded-lg text-[15px] hover:bg-[#101010] hover:text-white transition-all duration-300 shadow-lg w-full sm:w-auto justify-center"
            >
              Request a Consultation <i className="fa-solid fa-arrow-right" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-lg text-[15px] border border-white/25 hover:bg-white hover:text-[#E47911] transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Explore Solutions <i className="fa-solid fa-arrow-right" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
