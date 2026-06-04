'use client';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

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
    icon: 'fa-brands fa-apple',
    title: 'iOS Mobile Apps',
    slug: 'ios',
    desc: 'Building premium, high-security native and hybrid iOS applications tailored to meet strict Apple Design Guidelines and offer fluid user experience.',
    features: ['Swift & Objective-C Native', 'App Store Compliance', 'Push Notifications Integration', 'Robust Security Features']
  },
  {
    icon: 'fa-brands fa-wordpress',
    title: 'WordPress & E-Commerce',
    slug: 'wordpress',
    desc: 'Powering your web presence with fully customized, super-fast WordPress sites, custom themes, plugin developments, and high-conversion WooCommerce stores.',
    features: ['Custom Themes & Plugins', 'WooCommerce E-Commerce', 'Page Speed Optimization', 'Elementor/Gutenberg Experts']
  },
  {
    icon: 'fa-solid fa-magnifying-glass-chart',
    title: 'SEO & Search Optimization',
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-[#05080f] pb-20 transition-colors duration-300">
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
      <section className="py-24 relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] right-[5%] w-[40rem] h-[40rem] rounded-full bg-orange-500/5 dark:bg-orange-500/5 blur-[100px] mix-blend-multiply dark:mix-blend-lighten" />
          <div className="absolute bottom-[10%] left-[5%] w-[30rem] h-[30rem] rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[100px] mix-blend-multiply dark:mix-blend-lighten" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="mb-6 inline-flex">
              <span className="px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 text-[#E47911] text-xs font-bold uppercase tracking-wider border border-orange-200 dark:border-orange-500/20 shadow-sm">
                <i className="fa-solid fa-briefcase mr-2"></i> Scope of Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              We Provide Full-Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E47911] to-yellow-500">Tech Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Leveraging cutting-edge tools and methodologies to develop premium high-performance solutions for global organizations and tech-startups.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((s, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-white dark:bg-[#0e1628] rounded-2xl p-8 border border-gray-200 dark:border-white/5 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 overflow-hidden flex flex-col h-full"
              >
                {/* Top highlight line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E47911] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex-grow">
                  <div className="w-16 h-16 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#E47911]">
                    <i className={`${s.icon} text-3xl text-[#E47911] group-hover:text-white transition-colors duration-300`}></i>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#E47911] transition-colors">
                    {s.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {s.desc}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {s.features.map((feat, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700 dark:text-gray-300 font-medium">
                        <span className="mr-3 mt-1 text-[#E47911]"><i className="fa-solid fa-circle-check"></i></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 mt-auto pt-6 border-t border-gray-100 dark:border-white/5">
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center text-sm font-bold text-[#E47911] hover:text-gray-900 dark:hover:text-white transition-colors group/link"
                  >
                    EXPLORE DETAILS 
                    <i className="fa-solid fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                  </Link>
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-50/50 dark:to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Delivery Process Roadmap */}
      <section className="py-24 bg-gray-50 dark:bg-[#0a0f1c] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <div className="mb-6 inline-flex">
              <span className="px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-500/20 shadow-sm">
                <i className="fa-solid fa-truck-fast mr-2"></i> Delivery Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              How We Deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Success</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-gray-200 dark:bg-slate-800" />
            
            {[
              { step: '01', title: 'Consultation & Discovery', desc: 'Analyzing targets, conducting technical audits, and establishing timelines.' },
              { step: '02', title: 'UI/UX & Prototyping', desc: 'Crafting responsive user interfaces and interactive prototypes.' },
              { step: '03', title: 'Engineering & Development', desc: 'Writing clean code using modern languages and secure architectures.' },
              { step: '04', title: 'Rigorous Testing & Launch', desc: 'Assuring 100% bug-free deployments and server migrations.' }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group text-center lg:text-left"
              >
                <div className="w-20 h-20 mx-auto lg:mx-0 bg-white dark:bg-[#0e1628] rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 flex items-center justify-center text-3xl font-black text-[#E47911] mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                  {p.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
