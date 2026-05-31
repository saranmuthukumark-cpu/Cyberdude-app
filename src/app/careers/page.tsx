'use client';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

const jobs = [
  {
    title: 'Front-End Software Engineer (Next.js)',
    type: 'Full-Time',
    location: 'Avadi, Chennai (On-site)',
    salary: 'Competitive Pay',
    desc: 'Join our SaaS engineering team! You will construct high-performance, responsive multi-tenant web systems using React, Next.js App Router, Tailwind CSS, and TypeScript.',
    reqs: ['2+ years experience building React/Next.js systems', 'Familiarity with Tailwind CSS & Responsive design systems', 'Familiarity with REST APIs & state management']
  },
  {
    title: 'Full-Stack Developer Trainer (Academy)',
    type: 'Full-Time / Part-Time',
    location: 'Avadi, Chennai (On-site)',
    salary: 'Competitive Pay',
    desc: 'Empower the next generation of engineers! Lead bilingual (Tamil & English) Full-Stack Web Development classes at CyberDude Academy. Mentor real-world project deployments.',
    reqs: ['Strong command over Javascript, Node.js, and React', 'Passion for teaching and explaining complex code patterns', 'Ability to conduct code audits & mock technical reviews']
  },
  {
    title: 'IoT & Telemetry Hardware Integrator',
    type: 'Full-Time',
    location: 'Avadi, Chennai (On-site)',
    salary: 'Competitive Pay',
    desc: 'Bridge physical hardware with smart cloud systems. Build and test ESP32 wireless boards, configure low-latency MQTT streams, and manage remote firmware.',
    reqs: ['Experience with ESP32, Arduino SDK, or Raspberry Pi boards', 'Understanding of MQTT protocols, JSON schemas, & low-power designs', 'Skills in electrical breadboarding & basic PCB debugging']
  }
];

export default function CareersPage() {
  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#05080f] pb-20 transition-colors duration-300">
      <HeroBanner
        title={
          <>
            Join Our <span className="text-[#E47911]">Tech-Geek Team</span>
          </>
        }
        currentPage="Careers"
        showStats={false}
      />

      {/* Culture Section */}
      <section className="py-20 bg-white dark:bg-[#0a0f1c] border-b border-gray-200 dark:border-slate-800/40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] text-xs font-semibold px-3 py-1 rounded-sm">
                  <i className="fa fa-heart text-[10px]"></i> CyberDude Life
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101010] dark:text-white mb-6">
                Work with Passionate, <span className="text-[#E47911]">Inquisitive Minds</span>
              </h2>
              <p className="text-[#4a4a52] dark:text-gray-300 text-sm leading-relaxed mb-4">
                CyberDude Networks Pvt. Ltd. was founded by tech geeks with a strong quest for engineering excellence. We believe in transparency, shared learning, and building innovative, high-impact tools that help clients thrive.
              </p>
              <p className="text-[#4a4a52] dark:text-gray-300 text-sm leading-relaxed mb-8">
                We maintain a highly collaborative workspace where engineers are encouraged to contribute to open-source systems, architect dynamic software prototypes, and develop clean systems from scratch.
              </p>

              {/* Benefits list */}
              <h3 className="text-base font-bold text-[#101010] dark:text-white mb-4">Why Work With Us?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: 'fa-solid fa-graduation-cap', title: 'Continuous learning' },
                  { icon: 'fa-solid fa-mug-hot', title: 'Great work culture' },
                  { icon: 'fa-solid fa-code-branch', title: 'Open-source emphasis' },
                  { icon: 'fa-solid fa-handshake', title: 'Paid internships' }
                ].map((b) => (
                  <div key={b.title} className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300 font-semibold">
                    <div className="w-8 h-8 rounded-sm bg-[#fff4eb] dark:bg-slate-800 flex items-center justify-center text-[#E47911]">
                      <i className={b.icon}></i>
                    </div>
                    <span>{b.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md overflow-hidden border border-gray-200 dark:border-slate-800 shadow-md">
              <img
                src="https://cyberdudenetworks.com/assets/img/backgrounds/bg-home-fullscreen.jpg"
                alt="CyberDude Team Workspace"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Openings list */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] text-xs font-semibold px-3 py-1 rounded-sm">
                <i className="fa fa-briefcase text-[10px]"></i> Current Openings
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#101010] dark:text-white">
              We Are Hiring for <span className="text-[#E47911]">Active Roles</span>
            </h2>
            <p className="text-[#4a4a52] dark:text-gray-400 text-sm mt-3 font-semibold">
              Explore our current professional openings and submit your developer credentials.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="bg-white dark:bg-[#0e1628] p-8 rounded-md border border-gray-200 dark:border-slate-800 shadow-sm hover:border-[#E47911] dark:hover:border-[#E47911] transition-all duration-300 group"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-lg font-bold text-[#101010] dark:text-white group-hover:text-[#E47911] dark:group-hover:text-[#E47911] transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] rounded-sm text-[10px] font-bold">{job.type}</span>
                    <span className="px-2.5 py-1 bg-[#f8f9fa] dark:bg-slate-900 text-gray-500 dark:text-gray-400 rounded-sm text-[10px] font-bold border border-gray-200 dark:border-slate-800">{job.location}</span>
                  </div>
                </div>

                <p className="text-[#4a4a52] dark:text-gray-300 text-xs leading-relaxed mb-6">
                  {job.desc}
                </p>

                <h4 className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Key Requirements</h4>
                <ul className="space-y-2 mb-6">
                  {job.reqs.map((req) => (
                    <li key={req} className="flex items-center gap-2.5 text-xs text-[#4a4a52] dark:text-gray-300">
                      <i className="fa-solid fa-circle-check text-[#E47911] text-[10px]"></i>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-150 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#E47911]">{job.salary}</span>
                  <Link
                    href="/contact"
                    className="theme-btn1 py-2.5 px-4 text-xs rounded-sm"
                  >
                    Apply for this Job <i className="fa-solid fa-arrow-right text-[10px]"></i>
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
