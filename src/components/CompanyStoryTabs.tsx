'use client';
import { useState } from 'react';

const tabs = [
  {
    year: '2016',
    title: '2016 — The Beginning',
    content: [
      { label: 'Founded:', text: 'CyberDude Networks Pvt. Ltd. was born in 2016 in Chennai, India — a Tech-Startup by passionate geeks with a dream to build IoT and AI-powered products.' },
      { label: 'First Steps:', text: 'Started with Web & Mobile App development services, quickly gaining trust from clients across Chennai with quality-first approach and fast delivery.' },
    ],
  },
  {
    year: '2017',
    title: '2017 — First Products',
    content: [
      { label: 'CyberHRM:', text: 'Launched CyberHRM — a complete Human Resource Management System for SMEs, marking CyberDude\'s entry into the enterprise software space.' },
      { label: 'Growth:', text: 'Expanded team and client base, delivering 5+ successful projects across E-Commerce, Healthcare and Media sectors.' },
    ],
  },
  {
    year: '2018',
    title: '2018 — IoT Expansion',
    content: [
      { label: 'IoT Focus:', text: 'Introduced Internet of Things solutions, integrating hardware with software. Launched SelfMote — a wireless device control app connecting smartphones to PCs via Bluetooth & WiFi.' },
      { label: 'Milestone:', text: 'Surpassed 10 clients and 15 projects delivered, achieving consistent 5-star client satisfaction ratings.' },
    ],
  },
  {
    year: '2019',
    title: '2019 — SaaS & AI',
    content: [
      { label: 'AI Integration:', text: 'Began integrating Artificial Intelligence into SaaS products, enabling businesses to automate workflows and predict future trends with smart analytics.' },
      { label: 'DIC ERP:', text: 'Launched DIC — College Management ERP for universities and schools, covering admissions, academics, finance and student portals.' },
    ],
  },
  {
    year: '2020',
    title: '2020 — Going Digital',
    content: [
      { label: 'Remote Solutions:', text: 'Pivoted to help businesses digitally transform during global challenges. Delivered remote-work platforms, e-commerce solutions and digital marketing packages.' },
      { label: 'CyberGYM+:', text: 'Launched CyberGYM+ — a comprehensive Gym Management Software covering billing, attendance, member tracking and trainer scheduling.' },
    ],
  },
  {
    year: '2021',
    title: '2021 — Academy Launch',
    content: [
      { label: 'Tech Academy:', text: 'Launched CyberDude Academy — teaching Full Stack Web Development, Mobile App Development, IoT and UI/UX Design in Tamil & English through real-world engineers.' },
      { label: 'Open Source:', text: 'Released multiple open-source tools and libraries, contributing actively to the global developer community.' },
    ],
  },
  {
    year: '2022',
    title: '2022 — Scale & Awards',
    content: [
      { label: 'Recognition:', text: 'Received multiple industry recognitions and awards for innovative product development and outstanding client service in the IoT and SaaS space.' },
      { label: 'Scale:', text: 'Expanded to 35+ projects delivered, 18+ happy clients, and 56+ projects under active maintenance — growing 3× year-over-year.' },
    ],
  },
];

export default function CompanyStoryTabs() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#111111] border-b border-gray-200 dark:border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-[#4a4a52] dark:text-gray-300 font-semibold text-sm">
              <i className="fa fa-play text-[#E47911] text-[10px]"></i> Our Story
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#101010] dark:text-white">Our Company Story</h2>
        </div>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab.year}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 border ${
                active === i
                  ? 'bg-[#E47911] text-white border-[#E47911] shadow-sm'
                  : 'bg-white dark:bg-[#1a1a1a] text-[#4a4a52] dark:text-gray-300 border-gray-200 dark:border-slate-800 hover:border-[#E47911] hover:text-[#E47911]'
              }`}
            >
              {tab.year}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-md p-8 shadow-sm border border-gray-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-[#101010] dark:text-white mb-6 border-b border-gray-100 dark:border-slate-800 pb-3">{current.title}</h3>
            <div className="space-y-4">
              {current.content.map((c) => (
                <p key={c.label} className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  <span className="font-bold text-[#E47911]">{c.label}</span>{' '}
                  {c.text}
                </p>
              ))}
            </div>
            {/* Year badge */}
            <div className="mt-8 flex items-center gap-3">
              <div className="w-12 h-12 rounded-md bg-[#E47911] flex items-center justify-center text-white">
                <i className="fa-solid fa-trophy text-lg"></i>
              </div>
              <div>
                <div className="text-xs text-gray-400 dark:text-gray-500">Milestone Year</div>
                <div className="text-lg font-bold text-[#101010] dark:text-white">{current.year}</div>
              </div>
            </div>
          </div>
          <div className="rounded-md overflow-hidden border border-gray-200 dark:border-slate-800">
            <img
              src="https://cyberdudenetworks.com/assets/img/backgrounds/bg-home-fullscreen.jpg"
              alt={`CyberDude ${current.year}`}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
