'use client';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

const solutions = [
  {
    icon: 'fa-solid fa-microchip',
    title: 'IoT Solutions',
    slug: 'iot',
    desc: 'Connecting smart physical sensors and industrial equipment to the cloud with real-time analytics, remote device managers, and Bluetooth/WiFi systems.',
    benefits: ['Real-Time Sensor Sync', 'Robust Local Fallbacks', 'Low-Latency Operations', 'Hardware & Software Harmony']
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'SaaS & AI Products',
    slug: 'saas-ai',
    desc: 'Building modern multi-tenant software-as-a-service platforms integrated with high-intelligence Machine Learning workflows and smart automated tools.',
    benefits: ['Multi-Tenant Database Architectures', 'Workflow Automation Engines', 'Smart Analytics Dashboards', 'Stripe & Bill Payment Systems']
  },
  {
    icon: 'fa-solid fa-database',
    title: 'Custom ERP & CRM Suites',
    slug: 'erp-crm',
    desc: 'Streamlining massive company operations (Academics, Finance, HR, Inventory, Sales Pipelines) under standard high-security, custom central management hubs.',
    benefits: ['Tailored Workflow Pipelines', 'Unified Central DB Storage', 'Automated Financial Reports', 'Robust Multi-Role Permissions']
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: 'Digital Transformation',
    slug: 'digital-transformation',
    desc: 'Migrating obsolete legacy infrastructure into lightweight modern cloud architecture, automating manual tasks, and refining digital presence.',
    benefits: ['Cloud-Native Architecture Migration', 'Zero-Downtime Server Updates', 'API Automation Services', 'Core Web Vitals Boost']
  }
];

export default function SolutionsPage() {
  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#111111] pb-20">
      <HeroBanner
        title={
          <>
            Enterprise <span className="text-[#E47911]">Solutions</span>
          </>
        }
        currentPage="Solutions"
        showStats={false}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="mb-4">
              <span className="section-label">
                <i className="fa-solid fa-building text-[10px]"></i> Enterprise Offerings
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#101010] dark:text-white leading-tight">
              We Build Highly Tailored <span className="text-[#E47911]">Product Ecosystems</span>
            </h2>
            <p className="text-[#4a4a52] dark:text-gray-400 text-sm mt-3 font-semibold">
              Designed to help organizations scale effortlessly, reduce functional operational overhead, and make smarter, data-driven decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((sol) => (
              <div
                key={sol.slug}
                className="service-card group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="icon-box">
                      <i className={`${sol.icon} text-[#E47911] text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-[#101010] dark:text-white group-hover:text-[#E47911] transition-colors leading-snug">
                      {sol.title}
                    </h3>
                  </div>
                  <p className="text-[#4a4a52] dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                    {sol.desc}
                  </p>
                  
                  {/* Benefits checklist */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {sol.benefits.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300 font-semibold">
                        <span className="text-[#E47911] mt-0.5"><i className="fa-solid fa-check"></i></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-auto flex justify-between items-center">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="learn-link"
                  >
                    View Case Study & Details <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate trust block */}
      <section className="py-16 bg-white dark:bg-[#1a1a1a] border-t border-gray-200 dark:border-slate-800/40 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#101010] dark:text-white mb-4">
            Need a Custom Product Consultation?
          </h2>
          <p className="text-sm text-[#4a4a52] dark:text-gray-400 mb-8 leading-relaxed font-semibold">
            We design and construct high-performance digital infrastructure for international corporations, SMEs, and ambitious tech-startups. Let’s collaborate to automate your workflows!
          </p>
          <Link href="/contact" className="theme-btn1">
            Get Free Blueprint Strategy <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
