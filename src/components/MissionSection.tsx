export default function MissionSection() {
  return (
    <section className="py-20 bg-white dark:bg-[#111111] relative overflow-hidden transition-all duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E47911]/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:'radial-gradient(circle, #E47911 1px, transparent 1px)', backgroundSize:'50px 50px'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E47911]/15 border border-[#E47911]/30 text-[#E47911] text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              <i className="fa fa-bullseye text-[10px]"></i> Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#101010] dark:text-white leading-tight mb-5">
              Innovating for Success:{' '}
              <span className="text-[#E47911]">Our Technology Mission</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              At CyberDude Networks, our mission is simple: to revolutionize the digital landscape by delivering top-notch IoT, AI and SaaS solutions that drive growth, efficiency, and sustainability for our clients. We strive to be the trusted partner that businesses can rely on to navigate the complexities of the digital world.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
              "We are passionate about harnessing the power of technology to empower businesses. Through our tailored solutions and unwavering commitment to excellence, we strive to be the catalyst for positive change in the digital landscape."
            </p>

            {/* Feature points */}
            <div className="space-y-3 mb-8">
              {[
                { icon: 'fa fa-microchip', text: 'Internet of Things (IoT) — combining hardware with software seamlessly' },
                { icon: 'fa fa-robot', text: 'SaaS Apps with AI — automating business workflows intelligently' },
                { icon: 'fa fa-diamond', text: 'Quality-Centered Products — ISO/IES 9126 standards and Agile approach' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="mt-0.5 w-8 h-8 flex-shrink-0 bg-[#E47911]/15 rounded-lg flex items-center justify-center">
                    <i className={`${item.icon} text-[#E47911] text-xs`}></i>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.text}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 bg-[#E47911] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#c4680d] transition-colors shadow-lg shadow-orange-900/10 dark:shadow-none">
              Contact Us <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800/80">
                <img
                  src="https://cyberdudenetworks.com/assets/img/portfolio/cyberhrm-management-software.png"
                  alt="CyberHRM Software"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800/80">
                <img
                  src="https://cyberdudenetworks.com/assets/img/portfolio/dic-management-software.png"
                  alt="DIC College Management"
                  className="w-full h-36 object-cover"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800/80">
                <img
                  src="https://cyberdudenetworks.com/assets/img/portfolio/boo-music-player.png"
                  alt="Boo Music Player"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="mt-4 bg-[#E47911] rounded-2xl p-4 text-center text-white">
                <div className="text-2xl font-bold">35+</div>
                <div className="text-xs opacity-90 mt-1">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
