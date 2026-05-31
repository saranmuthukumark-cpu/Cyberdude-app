'use client';
import { useEffect, useRef } from 'react';

const skills = [
  { label: 'Products', pct: 85 },
  { label: 'Open Source', pct: 100 },
  { label: 'UI/UX Designs', pct: 70 },
  { label: 'Web Development', pct: 82 },
  { label: 'Mobile App Development', pct: 94 },
];

export default function AboutSection() {
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            barRefs.current.forEach((bar, i) => {
              if (bar) {
                setTimeout(() => {
                  bar.style.width = bar.dataset.width + '%';
                }, i * 120);
              }
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#05080f] border-b border-gray-200 dark:border-slate-800/40" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-md overflow-hidden border border-gray-200 dark:border-slate-800">
                <img
                  src="https://cyberdudenetworks.com/assets/img/backgrounds/bg-home-fullscreen.jpg"
                  alt="CyberDude Networks office"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-md overflow-hidden border border-gray-200 dark:border-slate-800">
                <img
                  src="https://cyberdudenetworks.com/assets/img/backgrounds/bg-1.jpg"
                  alt="CyberDude Design & Development"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="rounded-md overflow-hidden bg-[#E47911] flex flex-col items-center justify-center text-white text-center p-6">
                <span className="text-4xl font-bold">9+</span>
                <span className="text-xs font-semibold mt-1 opacity-90 uppercase tracking-wider">Years of Excellence</span>
              </div>
            </div>
            {/* Flat support badge */}
            <div className="absolute -bottom-4 left-4 bg-white dark:bg-[#0e1628] rounded-md shadow-sm px-4 py-3 flex items-center gap-3 border border-gray-200 dark:border-slate-800">
              <div className="w-10 h-10 bg-orange-50 dark:bg-slate-800 rounded-md flex items-center justify-center text-[#E47911]">
                <i className="fa-solid fa-headset text-lg"></i>
              </div>
              <div>
                <div className="text-xs font-bold text-[#101010] dark:text-white">24×7 Support</div>
                <div className="text-[10px] text-gray-400 dark:text-gray-500">CyberDude Networks</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 text-[#4a4a52] dark:text-gray-300 font-semibold text-sm">
                <i className="fa fa-play text-[#E47911] text-[10px]"></i> About Our Company
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#101010] dark:text-white leading-tight mb-5">
              Empower Your Business With Our Comprehensive{' '}
              <span className="text-[#E47911]">IT Solutions</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
              <a href="https://cyberdudenetworks.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#101010] dark:text-[#E47911] hover:text-[#E47911] transition-colors">CyberDude Networks Pvt. Ltd.</a> is a Tech-Startup focused at Internet of Things (IoT), Artificial Intelligence (AI) — delivering and deploying the finest ideas and tech applications to empower customers in achieving new heights of excellence in today's challenging business landscape.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
              Driven by the steadfast quest of Excellence, CyberDude exudes professionalism and proficiency in all areas of function. Established as a Product oriented Enterprise started with Tech-questing geeks.
            </p>

            {/* Skill bars */}
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.label}</span>
                    <span className="text-[#E47911]">{skill.pct}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-slate-800 rounded-sm overflow-hidden border border-transparent dark:border-slate-800">
                    <div
                      ref={(el) => { barRefs.current[i] = el; }}
                      data-width={skill.pct}
                      className="h-full bg-[#E47911] rounded-sm transition-all duration-1000 ease-out"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="theme-btn1 mt-8">
              Get A Quote <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
