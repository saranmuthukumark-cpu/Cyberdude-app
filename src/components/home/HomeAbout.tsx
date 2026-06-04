export default function HomeAbout() {
  return (
    <div className="section-py bg-white dark:bg-[#05080f] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Stack */}
          <div className="relative h-[560px]">
            {/* Main image */}
            <div className="absolute right-0 top-0 w-[85%] h-[90%] rounded-2xl overflow-hidden">
              <img
                src="https://cyberdudenetworks.com/assets/img/backgrounds/bg-home-fullscreen.jpg"
                alt="CyberDude Office"
                className="w-full h-full object-cover"
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-[#E47911]/10" />
            </div>

            {/* Secondary image */}
            <div className="absolute left-0 bottom-0 w-[55%] h-[52%] rounded-2xl overflow-hidden border-[6px] border-white dark:border-[#05080f] transition-colors duration-300 shadow-xl">
              <img
                src="https://cyberdudenetworks.com/assets/img/portfolio/cyberhrm-management-software.png"
                alt="CyberDude Team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute left-4 top-[18%] exp-badge animate-fade-in-up z-10">
              <div className="text-4xl font-bold leading-none">12+</div>
              <div className="text-sm font-medium text-white/80 mt-1">Years of<br />Experience</div>
            </div>

            {/* Support badge */}
            <div className="absolute right-4 bottom-[12%] bg-white dark:bg-[#0e1628] rounded-xl shadow-2xl border border-[var(--border-color)] p-4 flex items-center gap-3 z-10 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-[rgba(228,121,17,0.12)] flex items-center justify-center">
                <i className="fa-solid fa-headset text-[#E47911]" />
              </div>
              <div>
                <div className="font-bold text-sm text-[var(--heading)] leading-tight">24/7 Support</div>
                <div className="text-xs text-[var(--foreground)]">Always available</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-label mb-4 inline-block">
              About Our Company
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--heading)] mb-6 mt-4 leading-[1.15] heading-highlight">
              Discover Our Story<br />Empowering Business Through <span>Innovation</span>
            </h2>
            <p className="text-[var(--foreground)] mb-6 leading-relaxed text-[15px]">
              CyberDude Networks is a pioneering force in the realm of technology and IT solutions, dedicated to revolutionising the way businesses thrive in the digital age. Our approach is rooted in collaboration, transparency, and a relentless pursuit of excellence.
            </p>
            <p className="text-[var(--foreground)] mb-8 leading-relaxed text-[15px]">
              We believe that by staying ahead of the curve and embracing change, we can help our clients stay ahead of the competition. From IoT solutions to SaaS products, we're your end-to-end technology partner.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Dramatically re-engineer value added IT systems',
                'Highlight any unique selling points or differentiators',
                'Incorporate visuals such as team photos and case studies',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[rgba(228,121,17,0.12)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-check text-[#E47911] text-xs" />
                  </span>
                  <span className="text-[var(--heading)] text-[15px] font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="/about" className="theme-btn1">
              About CyberDude <i className="fa-solid fa-arrow-right" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
