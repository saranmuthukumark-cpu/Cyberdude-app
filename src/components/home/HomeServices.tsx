export default function HomeServices() {
  const services = [
    {
      icon: 'fa-solid fa-cloud-arrow-up',
      title: 'Cloud Computing Solutions',
      desc: "Harness the power of the cloud with our robust cloud computing solutions. Whether you're looking to migrate to the cloud, optimize your existing infrastructure, or build scalable cloud-native.",
    },
    {
      icon: 'fa-solid fa-chart-pie',
      title: 'Data Analytics & Business Intelligence',
      desc: 'Unlock actionable insights and drive informed decision-making with our advanced data analytics and business intelligence services. Our data-driven approach empowers you to harness the full potential.',
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Cybersecurity & Compliance',
      desc: 'Protect your business from evolving cyber threats and ensure compliance with industry regulations with comprehensive.',
    },
    {
      icon: 'fa-solid fa-code',
      title: 'Software Development',
      desc: 'Transform your ideas into reality with our custom software development and integration services whether you need.',
    },
    {
      icon: 'fa-solid fa-headset',
      title: 'It Consulting & Support',
      desc: 'Navigate the complexities of the digital landscape with confidence with our IT consulting and support services.',
    },
  ];

  return (
    <div className="py-24 bg-[#f8f9fa] dark:bg-[#0a0f1c]">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-[#4a4a52] dark:text-gray-300 font-semibold text-sm">
              <i className="fa fa-play text-[#E47911] text-[10px]"></i> Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#101010] dark:text-white leading-tight">
            Empower Your Business With Our Comprehensive Technology & IT Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Top row - 2 cols */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(0, 2).map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>

          {/* Bottom row - 3 cols */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(2, 5).map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="bg-white dark:bg-[#0e1628] p-10 rounded-md shadow-[0_0_20px_rgba(0,0,0,0.03)] dark:shadow-none border border-transparent dark:border-slate-800/50 hover:border-[#E47911] dark:hover:border-[#E47911] transition-all duration-300 group">
      <div className="w-16 h-16 rounded-full bg-[#fff4eb] dark:bg-slate-800 flex items-center justify-center mb-6">
        <i className={`${icon} text-[#E47911] text-2xl`}></i>
      </div>
      <h4 className="text-xl font-bold text-[#101010] dark:text-white mb-4">
        <a href="#contact" className="hover:text-[#E47911] transition-colors">{title}</a>
      </h4>
      <p className="text-[#4a4a52] dark:text-gray-400 mb-6">
        {desc}
      </p>
      <a href="#contact" className="text-[#101010] dark:text-white font-bold uppercase text-sm tracking-wider group-hover:text-[#E47911] transition-colors flex items-center gap-2">
        Learn More <i className="fa-solid fa-arrow-right text-[#E47911]"></i>
      </a>
    </div>
  );
}

