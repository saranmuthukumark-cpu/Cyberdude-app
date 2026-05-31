'use client';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

const services = [
  {
    icon: 'fa-solid fa-pen-nib',
    title: 'UI/UX Designs',
    slug: 'ui-ux',
    desc: 'Crafting pixel-perfect, highly user-centric visual designs, wireframes, and high-fidelity interactive mockups tailored to engage and captivate audiences across all devices.',
    features: ['Custom Visual Systems', 'Interactive Prototyping', 'User Research & Wireframing', 'Responsive Design Systems']
  },
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Android Mobile Apps',
    slug: 'android',
    desc: 'Developing fast, reliable, native and hybrid Android applications utilizing modern architectures (Kotlin, Flutter, React Native) for maximum performance.',
    features: ['Custom Kotlin Apps', 'Hybrid Flutter & React Native', 'Play Store Deployment', 'API Integration & Sync']
  },
  {
    icon: 'fa-solid fa-apple',
    title: 'iOS Mobile Apps',
    slug: 'ios',
    desc: 'Building premium, high-security native and hybrid iOS applications tailored to meet strict Apple Design Guidelines and offer fluid user experience.',
    features: ['Swift & Objective-C Native', 'App Store Compliance', 'Push Notifications Integration', 'Robust Security Features']
  },
  {
    icon: 'fa-brands fa-wordpress',
    title: 'WordPress & E-Commerce Development',
    slug: 'wordpress',
    desc: 'Powering your web presence with fully customized, super-fast WordPress sites, custom themes, plugin developments, and high-conversion WooCommerce stores.',
    features: ['Custom Themes & Plugins', 'WooCommerce E-Commerce', 'Page Speed Optimization', 'Elementor/Gutenberg Experts']
  },
  {
    icon: 'fa-solid fa-magnifying-glass-chart',
    title: 'SEO & Search Engine Optimization',
    slug: 'seo',
    desc: 'Elevating your organic Google search rankings using advanced technical audit practices, targeted keyword optimization, quality backlinking, and high-value branding.',
    features: ['Technical Audit & Crawling', 'Targeted Keyword Ranking', 'Backlinking Campaigns', 'Google Search Console Audit']
  },
  {
    icon: 'fa-solid fa-share-nodes',
    title: 'Social Marketing & SMM',
    slug: 'social-marketing',
    desc: 'Unlocking massive brand growth through data-backed social media campaigns, visual content planning, lead generation, and highly engaging audience interactions.',
    features: ['SMM Strategy Planning', 'High-Converting Ad Campaigns', 'Content Creation & Copywriting', 'Lead Generation Systems']
  }
];

export default function ServicesPage() {
  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#05080f] pb-20">
      <HeroBanner
        title={
          <>
            Our Dedicated <span className="text-[#E47911]">IT Services</span>
          </>
        }
        currentPage="Services"
        showStats={false}
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 text-[#4a4a52] dark:text-gray-300 font-semibold text-sm">
                <i className="fa fa-play text-[#E47911] text-[10px]"></i> Scope of Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#101010] dark:text-white leading-tight">
              We Provide Full-Scale <span className="text-[#E47911]">Tech Expertise</span>
            </h2>
            <p className="text-[#4a4a52] dark:text-gray-400 text-sm mt-3 font-semibold">
              We leverage cutting-edge tools and methodologies to develop premium high-performance solutions for global organizations and tech-startups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white dark:bg-[#0e1628] p-8 rounded-md border border-gray-250/20 dark:border-slate-800/80 shadow-sm hover:border-[#E47911] dark:hover:border-[#E47911] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#fff4eb] dark:bg-slate-800 flex items-center justify-center mb-6">
                    <i className={`${s.icon} text-[#E47911] text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#101010] dark:text-white mb-4 group-hover:text-[#E47911] transition-colors leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[#4a4a52] dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  
                  {/* Features checklist */}
                  <ul className="space-y-3 mb-6">
                    {s.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-xs text-gray-700 dark:text-gray-300 font-semibold">
                        <span className="text-[#E47911] mt-0.5"><i className="fa-solid fa-check"></i></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-150 dark:border-slate-800/40">
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[#101010] dark:text-white font-bold uppercase text-xs tracking-wider group-hover:text-[#E47911] transition-colors flex items-center gap-2"
                  >
                    Explore Service Details <i className="fa-solid fa-arrow-right text-[#E47911]"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process Roadmap */}
      <section className="py-20 bg-white dark:bg-[#0a0f1c] border-t border-b border-gray-200 dark:border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 text-[#4a4a52] dark:text-gray-300 font-semibold text-sm">
                <i className="fa fa-play text-[#E47911] text-[10px]"></i> Delivery Process
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#101010] dark:text-white leading-tight">
              How We Deliver <span className="text-[#E47911]">Success?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation & Discovery', desc: 'Analyzing targets, conducting technical audits, and establishing timelines.' },
              { step: '02', title: 'UI/UX & Prototyping', desc: 'Crafting responsive user interfaces and interactive prototypes.' },
              { step: '03', title: 'Engineering & Development', desc: 'Writing clean code using modern languages and secure architectures.' },
              { step: '04', title: 'Rigorous Testing & Launch', desc: 'Assuring 100% bug-free deployments and server migrations.' }
            ].map((p) => (
              <div key={p.title} className="group">
                <div className="text-4xl font-extrabold text-[#E47911] mb-3">{p.step}</div>
                <h3 className="text-base font-bold text-[#101010] dark:text-white mb-2">{p.title}</h3>
                <p className="text-xs text-[#4a4a52] dark:text-gray-400 leading-relaxed font-semibold">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
