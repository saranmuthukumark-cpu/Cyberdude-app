'use client';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

const internships = [
  {
    title: 'Front-End Web Intern (React & Next.js)',
    duration: '3 to 6 Months',
    type: 'Paid / Stipend Based',
    desc: 'Work directly alongside our Senior Engineers! You will learn how to write responsive CSS variables, structure scalable Next.js routers, consume REST APIs, and optimize layout speeds.',
    learns: ['Next.js routing & metadata optimization', 'Tailwind CSS structural themes', 'API data parsing & cache handling']
  },
  {
    title: 'UI/UX Visual Design Intern',
    duration: '3 Months',
    type: 'Paid / Stipend Based',
    desc: 'Unleash your visual creativity. Gain real experience mapping responsive user persona flows, constructing visual style wireframes, and building Figma high-fidelity interactive prototypes.',
    learns: ['Figma design system scaling', 'User journey mapping & auditing', 'Responsive typography configurations']
  }
];
export default function InternshipsPage() {
  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#111111] pb-20 transition-colors duration-300">
      <HeroBanner
        title={
          <>
            Engineering <span className="text-[#E47911]">Internships</span>
          </>
        }
        currentPage="Careers / Internships"
        showStats={false}
      />

      <section className="py-20 bg-white dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-slate-800/40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] text-xs font-semibold px-3 py-1 rounded-sm">
                  <i className="fa fa-graduation-cap text-[10px]"></i> Internship Path
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101010] dark:text-white mb-6">
                Start Your Tech Career with <span className="text-[#E47911]">Hands-On Code</span>
              </h2>
              <p className="text-[#4a4a52] dark:text-gray-300 text-sm leading-relaxed mb-4">
                CyberDude Networks Pvt. Ltd. provides highly educational, practical internship programs for talented college students, fresh graduates, and tech enthusiasts.
              </p>
              <p className="text-[#4a4a52] dark:text-gray-300 text-sm leading-relaxed mb-8">
                We don't assign basic errand tasks. Our interns work side-by-side with senior tech leads building active solutions, resolving active code issues, and preparing real production blueprints.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'fa-solid fa-money-bill-wave', text: 'Stipend based pay' },
                  { icon: 'fa-solid fa-certificate', text: 'Official Experience Letter' },
                  { icon: 'fa-solid fa-user-tie', text: 'Mentorship by Tech Leads' },
                  { icon: 'fa-solid fa-circle-check', text: 'Job offer opportunities' }
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
                alt="CyberDude Intern Team Workspace"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Internships List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] text-xs font-semibold px-3 py-1 rounded-sm">
                <i className="fa fa-briefcase text-[10px]"></i> Open Internships
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#101010] dark:text-white">
              Select Your Internship <span className="text-[#E47911]">Focus Area</span>
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {internships.map((job) => (
              <div
                key={job.title}
                className="bg-white dark:bg-[#222222] p-8 rounded-md border border-gray-200 dark:border-slate-800 shadow-sm hover:border-[#E47911] dark:hover:border-[#E47911] transition-all duration-300 group"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-lg font-bold text-[#101010] dark:text-white group-hover:text-[#E47911] dark:group-hover:text-[#E47911] transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] rounded-sm text-[10px] font-bold">{job.duration}</span>
                    <span className="px-2.5 py-1 bg-[#f8f9fa] dark:bg-slate-900 text-gray-500 dark:text-gray-400 rounded-sm text-[10px] font-bold border border-gray-200 dark:border-slate-800">{job.type}</span>
                  </div>
                </div>

                <p className="text-[#4a4a52] dark:text-gray-300 text-xs leading-relaxed mb-6">
                  {job.desc}
                </p>

                <h4 className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">What You Will Learn</h4>
                <ul className="space-y-2 mb-6">
                  {job.learns.map((req) => (
                    <li key={req} className="flex items-center gap-2.5 text-xs text-[#4a4a52] dark:text-gray-300">
                      <i className="fa-solid fa-circle-check text-[#E47911] text-[10px]"></i>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-150 dark:border-slate-800 flex items-center justify-end">
                  <Link
                    href="/contact"
                    className="theme-btn1 py-2.5 px-4 text-xs rounded-sm"
                  >
                    Apply for Internship <i className="fa-solid fa-arrow-right text-[10px]"></i>
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
