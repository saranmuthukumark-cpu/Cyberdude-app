'use client';

export default function VisionSection() {
  return (
    <section className="py-20 bg-white dark:bg-[#111111] border-b border-gray-200 dark:border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-md overflow-hidden border border-gray-200 dark:border-slate-800">
              <img
                src="https://cyberdudenetworks.com/assets/img/backgrounds/bg-home-fullscreen.jpg"
                alt="CyberDude Vision"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-md overflow-hidden border border-gray-200 dark:border-slate-800">
              <img
                src="https://cyberdudenetworks.com/assets/img/portfolio/cybergym-management-software.png"
                alt="CyberGYM"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="rounded-md overflow-hidden border border-gray-200 dark:border-slate-800">
              <img
                src="https://cyberdudenetworks.com/assets/img/portfolio/selfmote-android-app.png"
                alt="SelfMote App"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 text-[#4a4a52] dark:text-gray-300 font-semibold text-sm">
                <i className="fa fa-play text-[#E47911] text-[10px]"></i> Our Vision
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#101010] dark:text-white leading-tight mb-5">
              Driving Innovation: <span className="text-[#E47911]">Our Vision at CyberDude</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-7">
              At CyberDude Networks, our vision is to be the leading force driving digital transformation and innovation worldwide. We envision a future where businesses of all sizes have the tools and expertise they need to thrive in an increasingly digital world.
            </p>

            {/* Feature boxes */}
            <div className="space-y-6">
              {[
                {
                  icon: 'fa-solid fa-network-wired',
                  title: 'IoT & Network Infrastructure',
                  desc: 'Build a reliable and secure connected infrastructure that supports your business operations and enables seamless digital experiences.',
                },
                {
                  icon: 'fa-solid fa-headset',
                  title: '24×7 Managed IT Support',
                  desc: 'Focus on your core business activities while we take care of your IT needs with our round-the-clock managed support services.',
                },
                {
                  icon: 'fa-solid fa-robot',
                  title: 'AI-Powered SaaS Products',
                  desc: 'Automate your workflows and make smarter business decisions with our cutting-edge Artificial Intelligence integrations.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-[#fff4eb] dark:bg-slate-800 flex items-center justify-center text-[#E47911]">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#101010] dark:text-white mb-1 font-sans">{item.title}</h3>
                    <p className="text-xs text-[#4a4a52] dark:text-gray-400 leading-relaxed font-semibold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="theme-btn1 mt-8">
              Contact Us <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
