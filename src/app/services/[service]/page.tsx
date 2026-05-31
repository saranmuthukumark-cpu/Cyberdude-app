import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const servicesData: Record<string, {
  title: string;
  icon: string;
  desc: string;
  longDesc: string;
  features: string[];
  tools: string[];
}> = {
  'ui-ux': {
    title: 'UI/UX Designs',
    icon: 'fa-solid fa-pen-nib',
    desc: 'Crafting pixel-perfect, highly user-centric visual designs, wireframes, and high-fidelity interactive mockups tailored to engage and captivate audiences.',
    longDesc: 'Our UI/UX design process is heavily centered on research, empathy, and prototyping. We work closely with stakeholders to map user journeys, construct low-fidelity wireframes, and refine them into gorgeous, state-of-the-art interactive mockups. We create comprehensive layout guides and design systems to guarantee seamless engineering execution.',
    features: [
      'Comprehensive User Research & Persona mapping',
      'Wireframing, User Flow Analysis, & Structural mapping',
      'High-Fidelity Mockups & Interactive Prototypes (Figma)',
      'Brand Style Guides, Responsive Layouts, and Typography tokens'
    ],
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator']
  },
  'android': {
    title: 'Android Mobile Apps',
    icon: 'fa-solid fa-mobile-screen-button',
    desc: 'Developing fast, reliable, native and hybrid Android applications utilizing modern architectures.',
    longDesc: 'We construct high-quality, scalable mobile apps optimized specifically for the Android ecosystem. Utilizing standard Kotlin architectures or hybrid cross-platform systems (Flutter/React Native), we build features with seamless local cache synchronisation, rich native camera/location API integration, and lightweight execution foot-print.',
    features: [
      'Native Android Development utilizing Kotlin and Jetpack Compose',
      'Hybrid applications using Flutter or React Native frameworks',
      'Robust Local DB Offline storage and background synchronisation',
      'Play Store Deployment and compliance optimization'
    ],
    tools: ['Android Studio', 'Kotlin', 'Flutter', 'React Native', 'Firebase']
  },
  'ios': {
    title: 'iOS Mobile Apps',
    icon: 'fa-solid fa-apple',
    desc: 'Building premium, high-security native and hybrid iOS applications tailored to meet strict Apple Design Guidelines.',
    longDesc: 'We craft elite iOS applications that stand out on the Apple App Store. Our engineers focus heavily on Swift native development, adhering directly to Apple\'s strict human interface design guidelines, leveraging iOS security keys, core-data integrations, and local hardware APIs to deliver fluid, seamless experiences.',
    features: [
      'Native iOS Engineering using Swift and SwiftUI',
      'Apple Design Guidelines compliance and App Store Optimization',
      'Push Notifications, CoreData, and background processes',
      'Safe biometric keychain and local device integrations'
    ],
    tools: ['Xcode', 'Swift', 'SwiftUI', 'TestFlight', 'Cocoapods']
  },
  'wordpress': {
    title: 'WordPress & E-Commerce',
    icon: 'fa-brands fa-wordpress',
    desc: 'Powering your web presence with fully customized, super-fast WordPress sites, custom themes, plugin developments, and high-conversion WooCommerce stores.',
    longDesc: 'CyberDude Networks Pvt. Ltd. began as a startup of tech geeks with extensive web expertise. We write tailored, high-performance WordPress themes and plugins from scratch rather than relying on heavy bloated visual builders. We optimize site speed to achieve high Core Web Vitals, and build custom WooCommerce gateways for seamless shop integrations.',
    features: [
      'Pixel-perfect custom theme and plugin engineering from scratch',
      'WooCommerce configuration, product variations, & custom payment portals',
      'Strict Page Speed optimization and Core Web Vitals audit',
      'Security configurations, local backup servers, and continuous support'
    ],
    tools: ['WordPress', 'PHP', 'WooCommerce', 'MySQL', 'Elementor', 'WP Engine']
  },
  'seo': {
    title: 'SEO & Search Engine Optimization',
    icon: 'fa-solid fa-magnifying-glass-chart',
    desc: 'Elevating your organic Google search rankings using advanced technical audit practices, targeted keyword optimization, quality backlinking, and high-value branding.',
    longDesc: 'Our Search Engine Optimization processes go far beyond typical copywriting. We execute deep-dive technical audits, resolve Google crawling blockages, build robust XML maps, establish semantic keywords hierarchy, and craft authoritative high-value backlink networks to position your business at the very top of organic search lists.',
    features: [
      'Technical SEO audits (Crawling speed, indexation, redirects, robot.txt)',
      'In-depth competitor analysis and targeted semantic keyword mapping',
      'Content optimization and meta header structure refinement',
      'High-quality, authoritative local link-building campaigns'
    ],
    tools: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Analytics']
  },
  'social-marketing': {
    title: 'Social Marketing & SMM',
    icon: 'fa-solid fa-share-nodes',
    desc: 'Unlocking massive brand growth through data-backed social media campaigns, visual content planning, lead generation, and highly engaging audience interactions.',
    longDesc: 'We construct high-engagement SMM campaigns to organically capture customer trust and convert viewers into loyal brand advocates. We manage content calendars, curate custom visual assets, implement precise paid lead-generation funnels (Meta, LinkedIn, Google Ads), and audit weekly data to optimize ROI.',
    features: [
      'Strategic social content scheduling and post creative curation',
      'Paid lead-generation campaigns (Meta Ads, LinkedIn Campaign Manager)',
      'Community management, feedback response, and brand tone setup',
      'Conversion tracking, ROI analytics dashboard, and targeted remarketing'
    ],
    tools: ['Meta Business Suite', 'LinkedIn Ads', 'Canva', 'Hootsuite', 'Buffer']
  }
};

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ service: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.service;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#05080f] pb-20">
      <HeroBanner
        title={service.title}
        currentPage={`Services / ${service.title}`}
        showStats={false}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8 bg-white dark:bg-[#0e1628] p-8 md:p-10 rounded-md border border-gray-200 dark:border-slate-800/80 shadow-sm">
            <div className="flex items-center gap-4 border-b border-gray-150 dark:border-slate-800 pb-5">
              <div className="w-14 h-14 rounded-full bg-[#fff4eb] dark:bg-slate-850 flex items-center justify-center text-[#E47911] shrink-0">
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#101010] dark:text-white">{service.title} Overview</h2>
                <p className="text-xs text-[#E47911] font-bold mt-1 uppercase tracking-wider">Professional Technology Deliverable</p>
              </div>
            </div>

            <p className="text-[#4a4a52] dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line font-medium">
              {service.longDesc}
            </p>

            <div>
              <h3 className="text-lg font-bold text-[#101010] dark:text-white mb-4 border-b border-gray-100 dark:border-slate-800 pb-2">Core Deliverables &amp; Features</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#f8f9fa] dark:bg-[#0a0f1c] p-4 rounded-md border border-gray-200 dark:border-slate-800/60">
                    <span className="text-[#E47911] mt-0.5"><i className="fa-solid fa-check text-xs"></i></span>
                    <span className="text-xs text-gray-700 dark:text-gray-300 font-bold leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#101010] dark:text-white mb-4 border-b border-gray-100 dark:border-slate-800 pb-2">Technologies &amp; Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-[#fff4eb] dark:bg-slate-800 border border-orange-100 dark:border-slate-700 text-[#E47911] rounded-sm text-xs font-bold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white dark:bg-[#0e1628] p-6 rounded-md border border-gray-200 dark:border-slate-800/80 shadow-sm">
              <h3 className="text-base font-bold text-[#101010] dark:text-white mb-4 pb-2 border-b border-gray-150 dark:border-slate-800">Other Services</h3>
              <div className="space-y-2">
                {Object.entries(servicesData).map(([sSlug, sData]) => (
                  <Link
                    key={sSlug}
                    href={`/services/${sSlug}`}
                    className={`flex items-center justify-between px-4 py-3 rounded-md text-xs font-bold transition-all border ${
                      sSlug === slug
                        ? 'bg-[#E47911] text-white border-[#E47911]'
                        : 'bg-[#f8f9fa] dark:bg-[#0a0f1c] text-[#4a4a52] dark:text-gray-300 border-gray-200 dark:border-slate-800 hover:border-[#E47911] hover:text-[#E47911]'
                    }`}
                  >
                    <span>{sData.title}</span>
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-[#0a0f1c] dark:bg-[#0e1628] p-8 rounded-md text-center text-white relative border border-transparent dark:border-slate-800/80">
              <i className="fa-solid fa-headset text-4xl text-[#E47911] mb-4"></i>
              <h3 className="text-lg font-bold mb-2">Need Custom Solution?</h3>
              <p className="text-xs text-gray-400 dark:text-gray-400 mb-6 leading-relaxed">
                Connect with our tech geeks to map down your business targets and architect a free mock prototype!
              </p>
              <Link href="/contact" className="theme-btn1 w-full justify-center">
                Talk to Experts <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
