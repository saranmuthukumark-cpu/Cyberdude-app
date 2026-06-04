export default function HomeWork() {
  const points = [
    {
      icon: 'fa-solid fa-network-wired',
      title: 'Network Infrastructure Solutions',
      desc: 'Build a reliable and secure network infrastructure that supports your business operations and enables seamless collaboration.',
    },
    {
      icon: 'fa-solid fa-headset',
      title: 'Managed IT Services',
      desc: 'Focus on your core business while we handle your IT needs with proactive monitoring, maintenance, and 24/7 support.',
    },
    {
      icon: 'fa-solid fa-server',
      title: 'Data Backup & Disaster Recovery',
      desc: 'Protect your critical business data and ensure continuity with our automated backup and disaster recovery solutions.',
    },
  ];

  return (
    <div className="section-py bg-white dark:bg-[#05080f] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div>
            <span className="section-label">Best IT Solution</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--heading)] mt-4 mb-5 leading-[1.15] heading-highlight">
              Let's Elevate Your Business<br />With <span>Strategic IT</span>
            </h2>
            <p className="text-[var(--foreground)] mb-10 text-[15px] leading-relaxed">
              At CyberDude, we understand that every business is unique, which is why we offer flexible IT solutions designed to address your specific challenges and drive measurable results.
            </p>

            <div className="space-y-7 mb-10">
              {points.map((p, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="icon-box flex-shrink-0 group-hover:bg-[#E47911] transition-all duration-300">
                    <i className={`${p.icon} text-[#E47911] text-xl group-hover:text-white transition-colors duration-300`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--heading)] text-[16px] mb-2">{p.title}</h4>
                    <p className="text-[var(--foreground)] text-[14px] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/about" className="theme-btn1">
              Discover More <i className="fa-solid fa-arrow-right" />
            </a>
          </div>

          {/* Image mosaic */}
          <div className="relative h-[580px] hidden md:block">
            {/* Top right */}
            <div className="absolute right-0 top-0 w-[47%] h-[47%] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://cyberdudenetworks.com/assets/img/portfolio/dic-management-software.png"
                alt="Work 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Bottom right */}
            <div className="absolute right-0 bottom-0 w-[47%] h-[47%] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://cyberdudenetworks.com/assets/img/portfolio/selfmote-android-app.png"
                alt="Work 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Left tall */}
            <div className="absolute left-0 top-[8%] w-[47%] h-[84%] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://cyberdudenetworks.com/assets/img/portfolio/cybergym-management-software.png"
                alt="Work 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Orange corner accent */}
            <div className="absolute right-[46%] top-[46%] w-12 h-12 bg-[#E47911] rounded-full flex items-center justify-center z-10 shadow-lg shadow-[#E47911]/30">
              <i className="fa-solid fa-plus text-white text-lg" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
