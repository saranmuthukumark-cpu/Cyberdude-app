'use client';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

const steps = [
  {
    step: '01',
    title: 'Architectural Blueprinting',
    desc: 'We analyze project targets, map high-security database schemas, outline ESP32 telemetry queues, and create high-fidelity responsive interactive UI prototypes in Figma.'
  },
  {
    step: '02',
    title: 'Agile Engineering Sprints',
    desc: 'Our senior developers write clean code using modern frameworks. We run independent task checklists, perform continuous git branch audits, and configure local database synchronization.'
  },
  {
    step: '03',
    title: 'ISO/IEC 9126 Auditing',
    desc: 'We enforce absolute quality benchmarks. Every mobile app and SaaS landing page undergoes extensive load stress assessments, technical SEO crawls, and security keychain reviews.'
  },
  {
    step: '04',
    title: 'Zero-Downtime Deployment',
    desc: 'We set up automated deployment pipelines streaming compiled builds safely to AWS or Vercel edge networks, ensuring 100% Core Web Vitals speed scores and zero runtime crash errors.'
  }
];

export default function HowWeWorkPage() {
  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#111111] pb-20 transition-colors duration-300">
      <HeroBanner
        title={
          <>
            Our Seamless <span className="text-[#E47911]">Tech Workflow</span>
          </>
        }
        currentPage="About / How We Work"
        showStats={false}
      />

      {/* Engineering Philosophy */}
      <section className="py-20 bg-white dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-slate-800/40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] text-xs font-semibold px-3 py-1 rounded-sm">
                  <i className="fa fa-cogs text-[10px]"></i> Design Guidelines
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101010] dark:text-white mb-6">
                Enforcing Strict <span className="text-[#E47911]">Quality Standards</span>
              </h2>
              <p className="text-[#4a4a52] dark:text-gray-300 text-sm leading-relaxed mb-4">
                We are a team of tech geeks dedicated to the steadfast quest of excellence. We do not construct quick, low-quality software setups.
              </p>
              <p className="text-[#4a4a52] dark:text-gray-300 text-sm leading-relaxed mb-6 font-semibold">
                Every ERP suite, IoT firmware board, and mobile application we develop follows industry-standard ISO/IEC 9126 metrics—assuring extreme reliability, absolute data isolation, fluid scrolling responsiveness, and straightforward code maintainability.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'fa-solid fa-code-branch', text: 'Clean git architecture' },
                  { icon: 'fa-solid fa-gauge-high', text: '100% Page Speed scores' },
                  { icon: 'fa-solid fa-shield-halved', text: 'Encrypted telemetry streams' },
                  { icon: 'fa-solid fa-clock-rotate-left', text: 'On-time sprint milestones' }
                ].map((feat) => (
                  <div key={feat.text} className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300 font-semibold">
                    <div className="w-8 h-8 rounded-sm bg-[#fff4eb] dark:bg-slate-800 flex items-center justify-center text-[#E47911]">
                      <i className={feat.icon}></i>
                    </div>
                    <span>{feat.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md overflow-hidden border border-gray-200 dark:border-slate-800 shadow-md">
              <img
                src="https://cyberdudenetworks.com/assets/img/backgrounds/bg-home-fullscreen.jpg"
                alt="CyberDude Coding Sprint"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow steps */}
      <section className="py-20 bg-[#f8f9fa] dark:bg-[#111111] border-b border-gray-200 dark:border-slate-800/40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] text-xs font-semibold px-3 py-1 rounded-sm">
                <i className="fa fa-chart-line text-[10px]"></i> Process Roadmap
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#101010] dark:text-white">
              From Idea to <span className="text-[#E47911]">Scalable Product</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-white dark:bg-[#222222] p-8 rounded-md border border-gray-200 dark:border-slate-800 shadow-sm hover:border-[#E47911] dark:hover:border-[#E47911] transition-all duration-300 group flex items-start gap-5"
              >
                <div className="text-3xl font-extrabold text-[#E47911] bg-[#fff4eb] dark:bg-slate-850 w-12 h-12 rounded-sm flex items-center justify-center shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#101010] dark:text-white mb-2 font-sans">{s.title}</h3>
                  <p className="text-xs text-[#4a4a52] dark:text-gray-300 leading-relaxed font-semibold">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct prompt */}
      <section className="py-20 bg-white dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-slate-800/40 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#101010] dark:text-white">Ready to Kickstart Your Project?</h2>
          <p className="text-sm text-[#4a4a52] dark:text-gray-300 leading-relaxed font-semibold">
            Outline your company targets to our Senior Tech leads. We will construct a free, secure architectural blueprint mapping details, database schemas, and interface flows.
          </p>
          <Link href="/contact" className="theme-btn1 py-3 px-6 rounded-sm">
            Request Architectural Design <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}

