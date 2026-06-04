'use client';
import HeroBanner from '@/components/HeroBanner';
import BrandMarquee from '@/components/BrandMarquee';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 20 }
  }
};

export default function OurWorksPage() {
  return (
    <div className="bg-white dark:bg-[#05080f] pb-20 transition-colors duration-300">
      <HeroBanner
        title={
          <>
            Our Successful <span className="text-[#E47911]">Products &amp; Works</span>
          </>
        }
        currentPage="Our Works"
        showStats={false}
      />

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="mb-6 inline-flex">
              <span className="px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider border border-purple-200 dark:border-purple-500/20 shadow-sm">
                <i className="fa-solid fa-briefcase mr-2"></i> Product Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              We Build Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[#E47911]">Real-World Systems</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore actual technical applications deployed and maintained by our highly-skilled engineering teams.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((p, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
              >
                {/* Image Background */}
                <div className="absolute inset-0">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    {p.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                  <h3 className="text-2xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {p.title}
                  </h3>
                  
                  {/* Hidden description that reveals on hover */}
                  <div className="overflow-hidden">
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      {p.desc}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-bold text-[#E47911] group-hover:text-white transition-colors w-fit transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-300 delay-150"
                  >
                    Request Live Demo <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Marquee integrations */}
      <section className="py-16 bg-gray-50 dark:bg-[#0a0f1c] border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <h4 className="text-sm font-bold text-gray-500 tracking-widest uppercase">Trusted By Global Brands</h4>
        </div>
        <BrandMarquee />
      </section>
    </div>
  );
}
