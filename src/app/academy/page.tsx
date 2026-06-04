'use client';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

const courses = [
  {
    title: 'Full-Stack Web Development',
    duration: '24 Weeks',
    level: 'Beginner to Advanced',
    desc: 'Master HTML5, CSS3, JavaScript (ES6+), React, Next.js, Node.js, Express, and PostgreSQL. Build and deploy real production applications.',
    topics: ['Responsive UI Systems', 'REST & GraphQL APIs', 'DB Optimization', 'Hosting & CI/CD Pipelines']
  },
  {
    title: 'Mobile App Development',
    duration: '16 Weeks',
    level: 'Intermediate',
    desc: 'Architect native-like apps using Flutter and React Native. Sync sensor APIs, secure offline storage, and publish on Android/iOS app stores.',
    topics: ['State Management', 'Hardware Sensor SDKs', 'Keychain & biometrics', 'Play/App Store Release']
  },
  {
    title: 'Internet of Things (IoT) Engineering',
    duration: '12 Weeks',
    level: 'Intermediate to Pro',
    desc: 'Bridge hardware and software! Learn ESP32 microcontrollers, electrical circuitry breadboarding, MQTT telemetry queues, and real-time dashboard controls.',
    topics: ['Microcontroller Architectures', 'Electrical Circuits & Breadboarding', 'MQTT & HTTP Caching', 'Telemetry Graphics Dashboards']
  },
  {
    title: 'UI/UX Visual Designs',
    duration: '8 Weeks',
    level: 'Beginner friendly',
    desc: 'Unleash your visual creativity. Understand visual composition, grid lines, typography layouts, user persona surveys, wireframing, and Figma prototyping.',
    topics: ['Figma Mastery', 'Visual Systems Architecture', 'User Journey Mapping', 'Interactive Prototypes']
  }
];

export default function AcademyPage() {
  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#05080f] pb-20">
      <HeroBanner
        title={
          <>
            CyberDude <span className="text-[#E47911]">Tech Academy</span>
          </>
        }
        currentPage="Academy"
        showStats={false}
      />

      {/* Intro section */}
      <section className="py-20 bg-white dark:bg-[#05080f] border-b border-gray-200 dark:border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 text-[#4a4a52] dark:text-gray-300 font-semibold text-sm">
                  <i className="fa fa-play text-[#E47911] text-[10px]"></i> Learn from Real Engineers
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#101010] dark:text-white mb-6">
                Step-by-Step Training in <span className="text-[#E47911]">Tamil &amp; English</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                CyberDude Academy is not a typical visual learning site. We are a startup of tech geeks and software engineers who build real production software every day.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                Our classes are structured to give students high-value, practical project construction experience. We focus heavily on writing clean code, building responsive interfaces, designing databases, and passing rigorous mock technical reviews.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'fa-solid fa-microphone-lines', text: 'Bilingual lectures' },
                  { icon: 'fa-solid fa-laptop-code', text: 'Real projects construction' },
                  { icon: 'fa-solid fa-handshake', text: 'Mock technical interviews' },
                  { icon: 'fa-solid fa-code-branch', text: 'Open-source contributions' }
                ].map((feat) => (
                  <div key={feat.text} className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300 font-bold">
                    <div className="w-8 h-8 rounded-full bg-[#fff4eb] dark:bg-slate-800 flex items-center justify-center text-[#E47911] shrink-0">
                      <i className={feat.icon}></i>
                    </div>
                    <span>{feat.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md overflow-hidden border border-gray-200 dark:border-slate-800">
              <img
                src="https://cyberdudenetworks.com/assets/img/backgrounds/bg-home-fullscreen.jpg"
                alt="CyberDude Academy learning environment"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 text-[#4a4a52] dark:text-gray-300 font-semibold text-sm">
                <i className="fa fa-play text-[#E47911] text-[10px]"></i> Active Syllabus
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#101010] dark:text-white leading-tight">
              Select Your Tech <span className="text-[#E47911]">Learning Path</span>
            </h2>
            <p className="text-[#4a4a52] dark:text-gray-400 text-sm mt-3 font-semibold">
              We offer structured curricula containing high-value production tools to help you land high-paying engineering roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.title}
                className="service-card group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-slate-800 pb-3">
                    <span className="px-3 py-1 bg-orange-50 dark:bg-slate-800 text-[#E47911] rounded-sm text-xs font-bold">{course.duration}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-bold">{course.level}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#101010] dark:text-white mb-3 group-hover:text-[#E47911] transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-[#4a4a52] dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                    {course.desc}
                  </p>

                  <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Syllabus Highlights</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.topics.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-[#f8f9fa] dark:bg-[#0a0f1c] border border-gray-150 dark:border-slate-800 text-gray-600 dark:text-gray-300 rounded-sm text-xs font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-150 dark:border-slate-800/40">
                  <Link
                    href="/contact"
                    className="theme-btn1 w-full justify-center"
                  >
                    Enroll / Request Syllabus <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub section */}
      <section className="py-16 bg-white dark:bg-[#0a0f1c] border-t border-gray-200 dark:border-slate-800/40 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <i className="fa-brands fa-github text-5xl text-[#101010] dark:text-white"></i>
          <h2 className="text-2xl md:text-3xl font-bold text-[#101010] dark:text-white">
            GitHub Open Source Contributors
          </h2>
          <p className="text-sm text-[#4a4a52] dark:text-gray-400 leading-relaxed font-semibold mb-6">
            We encourage students to actively contribute to global libraries, tools, and repositories during their learning path. Build a rich public developer footprint!
          </p>
          <a
            href="https://github.com/cyberdudenetworks"
            target="_blank"
            rel="noopener noreferrer"
            className="theme-btn1 inline-flex items-center gap-2"
          >
            Explore Our GitHub <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
