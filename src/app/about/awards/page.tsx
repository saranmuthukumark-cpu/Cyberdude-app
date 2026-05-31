'use client';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

const awards = [
  {
    year: '2022',
    title: 'Outstanding IoT Product Innovation Award',
    issuer: 'Chennai Tech Startup Alliance',
    desc: 'Awarded for SelfMote (WiFi/Bluetooth hybrid control application), demonstrating outstanding hardware-software synchronization and near-zero delay latency.'
  },
  {
    year: '2020',
    title: 'Pioneering Digital Transformation Certificate',
    issuer: 'SME Association of Tamil Nadu',
    desc: 'Recognizing CyberDude Networks Pvt. Ltd.\'s rapid assistance in helping 15+ offline local businesses securely migrate inventories and ledger billing into cloud-native SaaS systems.'
  },
  {
    year: '2019',
    title: 'Best Educational ERP Solution Nominee',
    issuer: 'India Tech Awards Forum',
    desc: 'Nomination for DIC College Management software, praising the secure multi-role permission database schema and automated tuition invoicing pipelines.'
  }
];
export default function AwardsPage() {
  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#05080f] pb-20 transition-colors duration-300">
      <HeroBanner
        title={
          <>
            Accolades &amp; <span className="text-[#E47911]">Recognition</span>
          </>
        }
        currentPage="About / Awards"
        showStats={false}
      />

      {/* Awards Intro */}
      <section className="py-20 bg-white dark:bg-[#0a0f1c] border-b border-gray-200 dark:border-slate-800/40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] text-xs font-semibold px-3 py-1 rounded-sm">
                  <i className="fa fa-trophy text-[10px]"></i> Accolades &amp; Badges
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101010] dark:text-white mb-6">
                Recognizing Our Steadfast <span className="text-[#E47911]">Quest of Excellence</span>
              </h2>
              <p className="text-[#4a4a52] dark:text-gray-300 text-sm leading-relaxed mb-4">
                CyberDude Networks Pvt. Ltd. was started by tech geeks with a strong focus on quality and detail. We don't compromise on performance, and that has been recognized by industry leaders, local alliances, and client organizations across South India.
              </p>
              <p className="text-[#4a4a52] dark:text-gray-300 text-sm leading-relaxed mb-8">
                Every trophy and certificate we receive drives our engineers to write even cleaner code, develop even safer database architectures, and deliver outstanding customer experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'fa-solid fa-medal', text: 'Top tech start-up' },
                  { icon: 'fa-solid fa-ribbon', text: 'Certified ISO standard code' },
                  { icon: 'fa-solid fa-star', text: '5-star client ratings' },
                  { icon: 'fa-solid fa-heart', text: '18+ satisfied companies' }
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
                alt="CyberDude Awards & Accolades"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] text-xs font-semibold px-3 py-1 rounded-sm">
                <i className="fa fa-award text-[10px]"></i> Trophies &amp; Certificates
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#101010] dark:text-white">
              Key Milestones and <span className="text-[#E47911]">Accolades</span>
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {awards.map((a) => (
              <div
                key={a.title}
                className="bg-white dark:bg-[#0e1628] p-8 rounded-md border border-gray-200 dark:border-slate-800/80 shadow-sm hover:border-[#E47911] dark:hover:border-[#E47911] transition-all duration-300 group flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="text-4xl font-extrabold text-[#E47911] bg-[#fff4eb] dark:bg-slate-850 w-16 h-16 rounded-sm flex items-center justify-center shrink-0">
                  {a.year}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#101010] dark:text-white mb-1 group-hover:text-[#E47911] dark:group-hover:text-[#E47911] transition-colors font-sans">{a.title}</h3>
                  <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-4">{a.issuer}</div>
                  <p className="text-xs text-[#4a4a52] dark:text-gray-300 leading-relaxed font-semibold">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct support CTA */}
      <section className="py-20 bg-white dark:bg-[#0a0f1c] border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#101010] dark:text-white">Let's Build the Next Award-Winning Product!</h2>
          <p className="text-sm text-[#4a4a52] dark:text-gray-300 leading-relaxed font-semibold">
            Partner with Chennai's premium IoT and SaaS development team. We construct secure codebases that scale effortlessly.
          </p>
          <Link href="/contact" className="theme-btn1 py-3 px-6 rounded-sm">
            Build with Geeks <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
