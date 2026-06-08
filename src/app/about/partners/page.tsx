'use client';
import HeroBanner from '@/components/HeroBanner';
import BrandMarquee from '@/components/BrandMarquee';
import Link from 'next/link';export default function PartnersPage() {
  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#111111] pb-20 transition-colors duration-300">
      <HeroBanner
        title={
          <>
            Our Trustworthy <span className="text-[#E47911]">Partners &amp; Alliances</span>
          </>
        }
        currentPage="About / Partners"
        showStats={false}
      />

      {/* Alliance Intro */}
      <section className="py-20 bg-white dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-slate-800/40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] text-xs font-semibold px-3 py-1 rounded-sm">
                  <i className="fa fa-handshake text-[10px]"></i> Ecosystem Alliances
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101010] dark:text-white mb-6">
                Strengthening Business Through <span className="text-[#E47911]">Collaborative Tech</span>
              </h2>
              <p className="text-[#4a4a52] dark:text-gray-300 text-sm leading-relaxed mb-4">
                At CyberDude Networks, we believe that true engineering breakthroughs happen through collaboration. We establish strategic alliances with leading hardware board designers, cloud hosting nodes, and international developer communities to enrich our SaaS and IoT products.
              </p>
              <p className="text-[#4a4a52] dark:text-gray-300 text-sm leading-relaxed mb-8">
                By maintaining these robust technology partnerships, we guarantee that our enterprise clients receive top-tier, low-latency infrastructure configurations and secure, high-compliance database services.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'fa-solid fa-microchip', title: 'Hardware board designers' },
                  { icon: 'fa-solid fa-cloud', title: 'Cloud server hosts' },
                  { icon: 'fa-solid fa-shield-halved', title: 'Security compliance groups' },
                  { icon: 'fa-solid fa-code', title: 'Open-source contributors' }
                ].map((p) => (
                  <div key={p.title} className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300 font-semibold">
                    <div className="w-8 h-8 rounded-sm bg-[#fff4eb] dark:bg-slate-800 flex items-center justify-center text-[#E47911]">
                      <i className={p.icon}></i>
                    </div>
                    <span>{p.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md overflow-hidden border border-gray-200 dark:border-slate-800 shadow-md">
              <img
                src="https://cyberdudenetworks.com/assets/img/backgrounds/bg-home-fullscreen.jpg"
                alt="CyberDude Partners Collaboration"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Marquee integrations */}
      <section className="py-20 bg-[#f8f9fa] dark:bg-[#111111] border-t border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-[#101010] dark:text-white mb-8 font-sans">Trusted by Global Corporations</h2>
          <BrandMarquee />
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-white dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-slate-800/40 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#101010] dark:text-white">Become a Technology Partner</h2>
          <p className="text-sm text-[#4a4a52] dark:text-gray-300 leading-relaxed font-semibold">
            Are you a custom hardware designer, software consultant, or system auditor? Let’s collaborate to expand IoT telemetry capabilities and deploy beautiful multi-tenant SaaS products globally.
          </p>
          <Link href="/contact" className="theme-btn1 py-3 px-6 rounded-sm">
            Apply for Alliance <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}

