'use client';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

const cases = [
  {
    title: 'CyberHRM: Scaling Multi-Shift Attendance Tracking for 500+ Employee Factory',
    category: 'SaaS & Enterprise',
    challenge: 'Inefficient manual biometrics resulting in massive spreadsheet payroll sync errors.',
    outcome: 'Configured automated schema logs connected with local biometric clock SDKs. Reduced accounting time by 92% and cut human processing errors to 0%.',
    solutionSlug: 'saas-ai'
  },
  {
    title: 'DIC: Consolidating Academic Management for Avadi Engineering University',
    category: 'Custom ERP / Educational',
    challenge: 'Scattered standalone admissions, fee checkouts, and student profiling modules.',
    outcome: 'Architected unified Central SQL database containing secure user-role permissions. Handled 15K concurrent student score checkouts smoothly.',
    solutionSlug: 'erp-crm'
  },
  {
    title: 'SelfMote: Low-Power Wireless Mobile-to-PC Presentation Bridge',
    category: 'IoT / Hardware Sync',
    challenge: 'High-latency and unstable Bluetooth connectivity on old office Windows systems.',
    outcome: 'Programmed ESP32 local fallback bridge with hybrid Flutter socket sync, reducing tap latency to less than 15ms.',
    solutionSlug: 'iot'
  }
];
export default function CaseStudiesPage() {
  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#05080f] pb-20 transition-colors duration-300">
      <HeroBanner
        title={
          <>
            Technical <span className="text-[#E47911]">Case Studies</span>
          </>
        }
        currentPage="Case Studies"
        showStats={false}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] text-xs font-semibold px-3 py-1 rounded-sm">
                <i className="fa fa-chart-line text-[10px]"></i> Client Success
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#101010] dark:text-white">
              How We Solve <span className="text-[#E47911]">Complex Engineering Challenges?</span>
            </h2>
            <p className="text-[#4a4a52] dark:text-gray-400 text-sm mt-3 font-semibold">
              Read how we architect low-latency databases, secure networks, and smart hardware telemetry to resolve active business blockages.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {cases.map((c, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0e1628] p-8 rounded-md border border-gray-200 dark:border-slate-800/80 shadow-sm hover:border-[#E47911] dark:hover:border-[#E47911] transition-all duration-300 group"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="px-2.5 py-1 bg-[#fff4eb] dark:bg-slate-850 text-[#E47911] rounded-sm text-[10px] font-bold">{c.category}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-semibold">Case Study #{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-[#101010] dark:text-white mb-6 group-hover:text-[#E47911] dark:group-hover:text-[#E47911] transition-colors leading-snug font-sans">
                  {c.title}
                </h3>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-[#f8f9fa] dark:bg-slate-900/50 p-5 rounded-sm border border-gray-200 dark:border-slate-850">
                    <div className="text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase mb-2">The Challenge</div>
                    <p className="text-xs text-[#4a4a52] dark:text-gray-300 leading-relaxed font-semibold">{c.challenge}</p>
                  </div>
                  <div className="bg-[#fff4eb] dark:bg-[#e47911]/10 p-5 rounded-sm border border-[#E47911]/25">
                    <div className="text-[10px] font-extrabold text-[#E47911] uppercase mb-2">The Outcome</div>
                    <p className="text-xs text-[#101010] dark:text-white leading-relaxed font-bold">{c.outcome}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-150 dark:border-slate-800/80 flex items-center justify-between">
                  <Link
                    href={`/solutions/${c.solutionSlug}`}
                    className="text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-[#E47911] dark:hover:text-[#E47911] flex items-center gap-1.5 transition-colors"
                  >
                    Explore Technical Architecture <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </Link>

                  <Link
                    href="/contact"
                    className="theme-btn1 py-2.5 px-4 text-xs rounded-sm"
                  >
                    Request Free Consultation <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
