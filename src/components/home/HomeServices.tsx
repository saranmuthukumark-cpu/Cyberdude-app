export default function HomeServices() {
  const services = [
    {
      icon: 'fa-solid fa-cloud-arrow-up',
      title: 'Cloud Computing Solutions',
      desc: 'Harness the power of the cloud with our robust computing solutions — migrate, optimise, and scale with confidence.',
      color: '#3b82f6',
    },
    {
      icon: 'fa-solid fa-chart-pie',
      title: 'Data Analytics & Intelligence',
      desc: 'Unlock actionable insights and drive informed decision-making with our advanced analytics and business intelligence.',
      color: '#8b5cf6',
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Cybersecurity & Compliance',
      desc: 'Protect your business from evolving cyber threats and ensure compliance with our comprehensive security services.',
      color: '#ef4444',
    },
    {
      icon: 'fa-solid fa-code',
      title: 'Custom Software Development',
      desc: 'Transform your ideas into reality with our tailor-made software development and seamless systems integration.',
      color: '#10b981',
    },
    {
      icon: 'fa-solid fa-microchip',
      title: 'IoT & Embedded Systems',
      desc: 'Build connected, intelligent devices and systems with our deep expertise in IoT hardware and firmware development.',
      color: '#f59e0b',
    },
    {
      icon: 'fa-solid fa-headset',
      title: 'IT Consulting & Support',
      desc: 'Navigate the complexities of the digital landscape with confidence through our expert consulting and 24/7 support.',
      color: '#E47911',
    },
  ];

  return (
    <div className="section-py bg-[var(--card-bg)] dark:bg-[#080c17] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--heading)] mt-4 mb-4 heading-highlight">
            Your Partner for <span>Strategic</span><br />IT Solutions
          </h2>
          <p className="text-[var(--foreground)] text-[15px]">
            Explore our comprehensive suite of technology services designed to address your specific challenges and goals.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="service-card group">
              <div className="icon-box mb-6" style={{ background: `${s.color}18` }}>
                <i className={`${s.icon} text-2xl`} style={{ color: s.color }} />
              </div>
              <h4 className="text-[var(--heading)] font-bold text-lg mb-3 group-hover:text-[#E47911] transition-colors duration-300">
                <a href="/services">{s.title}</a>
              </h4>
              <p className="text-[var(--foreground)] text-[14px] leading-relaxed mb-6">
                {s.desc}
              </p>
              <a href="/services" className="learn-link">
                Read More <i className="fa-solid fa-arrow-right text-xs" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
