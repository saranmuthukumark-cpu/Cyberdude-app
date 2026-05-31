import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const solutionsData: Record<string, {
  title: string;
  icon: string;
  desc: string;
  longDesc: string;
  features: string[];
  cases: string[];
}> = {
  'iot': {
    title: 'IoT Solutions',
    icon: 'fa-solid fa-microchip',
    desc: 'Connecting smart physical sensors and industrial equipment to the cloud with real-time analytics and remote device managers.',
    longDesc: 'Our Internet of Things (IoT) solutions integrate custom low-level electronics with high-level web software. We design low-power wireless boards (ESP32, Raspberry Pi) that synchronize sensor telemetry directly to centralized cloud databases over secure MQTT protocols. We build robust real-time graphical control panels, remote firmware update engines, and responsive control apps like SelfMote (Bluetooth/WiFi smart controllers).',
    features: [
      'ESP32 / Arduino / Raspberry Pi customized hardware integration',
      'MQTT & HTTP secure telemetry streaming pipelines with caching',
      'Real-time dashboards showing responsive visual charts and gauges',
      'Remote OTA Firmware management and system health notifications'
    ],
    cases: ['SelfMote smart smartphone-to-PC controller app', 'Industrial hardware thermal sensors telemetry monitor', 'Automated local building power switch grid console']
  },
  'saas-ai': {
    title: 'SaaS & AI Products',
    icon: 'fa-solid fa-robot',
    desc: 'Building modern multi-tenant software-as-a-service platforms integrated with high-intelligence Machine Learning workflows.',
    longDesc: 'We develop elite, multi-tenant SaaS products engineered to handle tens of thousands of requests concurrently. We combine modern front-ends (Next.js, Tailwind v4) with secure PostgreSQL databases, integrate subscription payment portals, and embed automated workflow intelligence (AI/ML models) to provide automated categorization, data projections, and automated PDF summaries.',
    features: [
      'Modern Multi-Tenant security and database schema pooling',
      'Subscription and checkout gateways (Stripe, Razorpay, Paypal)',
      'Automated background queues, mail servers, and document parsers',
      'Machine Learning APIs for advanced content categorization & summaries'
    ],
    cases: ['CyberHRM — Smart Human Resource ERP for small companies', 'CyberGYM+ — Cloud member checkout and trainer schedule tracker', 'AutoCategorize — AI smart invoice and ledger scanner']
  },
  'erp-crm': {
    title: 'Custom ERP & CRM Suites',
    icon: 'fa-solid fa-database',
    desc: 'Streamlining massive company operations (Academics, Finance, HR, Inventory, Sales Pipelines) under standard high-security, custom central hubs.',
    longDesc: 'We construct full-scale, robust Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) databases tailored exclusively to match your custom company processes. We replace chaotic excel sheets with an elegant, centralized dashboard containing fine-grained access control levels, automated financial logging, student registration pipelines, and detailed invoice printing systems.',
    features: [
      'Fine-grained Role-Based Access Control (Admin, Accountant, Staff)',
      'Custom student portals, fee checkout, and grading sheets (DIC ERP)',
      'Interactive visual sales funnel tracking and automatic lead updates',
      'Automated PDF invoice generation and financial PDF downloads'
    ],
    cases: ['DIC — Comprehensive College & University Management Portal', 'SME Billing Hub — Local retail inventory & sales ledger manager', 'Corporate HR Suite — Attendance tracker with biometric SDK sync']
  },
  'digital-transformation': {
    title: 'Digital Transformation',
    icon: 'fa-solid fa-network-wired',
    desc: 'Migrating obsolete legacy infrastructure into lightweight modern cloud architecture, automating manual tasks, and refining digital presence.',
    longDesc: 'We architect complete digital modernization paths for traditional businesses looking to scale. We audit slow, obsolete software setups, migrate physical database servers into high-availability cloud frameworks (AWS, Vercel), establish automatic API data pipes to eliminate manual data-entry, and optimize user experience metrics for search engine ranking.',
    features: [
      'Legacy system code audits and database normalization plans',
      'Migrating servers into AWS / Vercel cloud with Zero-Downtime configs',
      'Automating manual spreadsheet tasks using standard API pipelines',
      'Responsive design updates boosting Core Web Vitals to 100%'
    ],
    cases: ['Medical Registry Cloud Migration — 150K records safely synced', 'Real Estate Paperless Portal — 100% digital signature contracts', 'Global Logistic API Integration — Real-time tracking syncing']
  }
};

export default async function SolutionDetailPage({
  params
}: {
  params: Promise<{ solution: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.solution;
  const solution = solutionsData[slug];

  if (!solution) {
    notFound();
  }

  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#05080f] pb-20">
      <HeroBanner
        title={solution.title}
        currentPage={`Solutions / ${solution.title}`}
        showStats={false}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8 bg-white dark:bg-[#0e1628] p-8 md:p-10 rounded-md border border-gray-200 dark:border-slate-800/80 shadow-sm">
            <div className="flex items-center gap-4 border-b border-gray-150 dark:border-slate-800 pb-5">
              <div className="w-14 h-14 rounded-full bg-[#fff4eb] dark:bg-slate-850 flex items-center justify-center text-[#E47911] shrink-0">
                <i className={`${solution.icon} text-2xl`}></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#101010] dark:text-white">{solution.title} Overview</h2>
                <p className="text-xs text-[#E47911] font-bold mt-1 uppercase tracking-wider">Enterprise Architectural Solution</p>
              </div>
            </div>

            <p className="text-[#4a4a52] dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line font-medium">
              {solution.longDesc}
            </p>

            <div>
              <h3 className="text-lg font-bold text-[#101010] dark:text-white mb-4 border-b border-gray-100 dark:border-slate-800 pb-2">Core Architectural Capabilities</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {solution.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#f8f9fa] dark:bg-[#0a0f1c] p-4 rounded-md border border-gray-200 dark:border-slate-800/60">
                    <span className="text-[#E47911] mt-0.5"><i className="fa-solid fa-check text-xs"></i></span>
                    <span className="text-xs text-gray-700 dark:text-gray-300 font-bold leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#101010] dark:text-white mb-4 border-b border-gray-100 dark:border-slate-800 pb-2">Real-World Case Demonstrations</h3>
              <div className="space-y-3">
                {solution.cases.map((cName, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#f8f9fa] dark:bg-[#0a0f1c] p-4 rounded-md border border-gray-200 dark:border-slate-800/60">
                    <div className="w-6 h-6 rounded-sm bg-[#E47911] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-xs text-gray-700 dark:text-gray-300 font-bold">{cName}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white dark:bg-[#0e1628] p-6 rounded-md border border-gray-200 dark:border-slate-800/80 shadow-sm">
              <h3 className="text-base font-bold text-[#101010] dark:text-white mb-4 pb-2 border-b border-gray-150 dark:border-slate-800">Other Solutions</h3>
              <div className="space-y-2">
                {Object.entries(solutionsData).map(([sSlug, sData]) => (
                  <Link
                    key={sSlug}
                    href={`/solutions/${sSlug}`}
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
              <h3 className="text-lg font-bold mb-2">Request Custom Prototype?</h3>
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
