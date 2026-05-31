'use client';
import HeroBanner from '@/components/HeroBanner';
import BrandMarquee from '@/components/BrandMarquee';
import Link from 'next/link';

const projects = [
  {
    img: 'https://cyberdudenetworks.com/assets/img/portfolio/cyberhrm-management-software.png',
    title: 'CyberHRM Enterprise Suite',
    category: 'SaaS / ERP Product',
    desc: 'Robust Human Resource Management ERP helping SMEs automate employee directories, track monthly attendance shifts, generate payroll invoices, and conduct peer assessments.'
  },
  {
    img: 'https://cyberdudenetworks.com/assets/img/portfolio/dic-management-software.png',
    title: 'DIC College & University ERP',
    category: 'Custom CRM / Web App',
    desc: 'Comprehensive multi-role university management software resolving student admissions workflows, course allocation lists, academic checkouts, and student/parent messaging grids.'
  },
  {
    img: 'https://cyberdudenetworks.com/assets/img/portfolio/boo-music-player.png',
    title: 'Boo Music Streaming Player',
    category: 'Mobile / Android App',
    desc: 'Breathtaking local and cloud mobile streaming audio interface featuring offline audio caching, lyrics synchronization, playlist curations, and responsive equalizer.'
  },
  {
    img: 'https://cyberdudenetworks.com/assets/img/portfolio/selfmote-android-app.png',
    title: 'SelfMote Wireless PC Controller',
    category: 'IoT / Mobile App',
    desc: 'Connect your smartphone to your PC via secure Bluetooth and local WiFi networks. Supports presentation slides remote controller, mouse gestures pad, and volume dashboard.'
  },
  {
    img: 'https://cyberdudenetworks.com/assets/img/portfolio/cybergym-management-software.png',
    title: 'CyberGYM+ Club Suite',
    category: 'Cloud SaaS',
    desc: 'Dedicated gym member billing and checkin software featuring fingerprint and RFID SDK synchronizations, automated payment email receipts, and diet/workout planners.'
  }
];

export default function OurWorksPage() {
  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#05080f] pb-20 transition-colors duration-300">
      <HeroBanner
        title={
          <>
            Our Successful <span className="text-[#E47911]">Products &amp; Works</span>
          </>
        }
        currentPage="Our Works"
        showStats={false}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] text-xs font-semibold px-3 py-1 rounded-sm">
                <i className="fa fa-briefcase text-[10px]"></i> Product Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#101010] dark:text-white">
              We Build Premium <span className="text-[#E47911]">Real-World Systems</span>
            </h2>
            <p className="text-[#4a4a52] dark:text-gray-400 text-sm mt-3 font-semibold">
              Explore actual technical applications deployed and maintained by our Chennai-based tech geeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0e1628] rounded-md overflow-hidden border border-gray-200 dark:border-slate-800 shadow-sm hover:border-[#E47911] dark:hover:border-[#E47911] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-56 bg-[#f8f9fa] dark:bg-slate-900 overflow-hidden border-b border-gray-200 dark:border-slate-800">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-[#101010] dark:bg-slate-900 text-white px-3 py-1 rounded-sm text-[10px] font-bold">
                      {p.category}
                    </span>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-lg font-bold text-[#101010] dark:text-white mb-3 group-hover:text-[#E47911] dark:group-hover:text-[#E47911] transition-colors leading-snug font-sans">
                      {p.title}
                    </h3>
                    <p className="text-[#4a4a52] dark:text-gray-300 text-xs leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 md:px-8 md:pb-8 border-t border-gray-200 dark:border-slate-800">
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-[#101010] dark:text-white group-hover:text-[#E47911] dark:group-hover:text-[#E47911] transition-colors flex items-center gap-1.5"
                  >
                    Request Live Demo Blueprint <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Marquee integrations */}
      <section className="py-12 bg-white dark:bg-[#0a0f1c] border-t border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
        <BrandMarquee />
      </section>
    </div>
  );
}
