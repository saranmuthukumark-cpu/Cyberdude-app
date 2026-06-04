'use client';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

const blogs = [
  {
    category: 'Technology',
    author: 'Anbuselvan Rocky',
    date: 'May 28, 2026',
    readTime: '6 Min Read',
    title: 'Connecting Physical Sensor Telemetry: Architecting Resilient IoT Infrastructure',
    desc: 'Deep-dive blueprint explaining ESP32 board firmware optimization, MQTT queue configurations, and secure local cache fallbacks for offline operational stability.',
  },
  {
    category: 'SaaS & Development',
    author: 'Dev Lead',
    date: 'May 15, 2026',
    readTime: '8 Min Read',
    title: 'Optimizing Multi-Tenant DB Schema Pooling for High-Concurrent SaaS Platforms',
    desc: 'A comprehensive technical layout illustrating PostgreSQL dynamic thread pooling, multi-region caching, and safe tenant data isolation protocols.',
  },
  {
    category: 'Cybersecurity',
    author: 'Tech Lead',
    date: 'May 02, 2026',
    readTime: '5 Min Read',
    title: 'Securing API Infrastructure: Resolving Crawling Blockages & Technical SEO Audits',
    desc: 'Guidelines on managing SSL key handshakes, establishing strict DDoS shields, resolving search crawling blockages, and passing technical indexing audits.',
  },
  {
    category: 'Branding',
    author: 'Design Lead',
    date: 'Apr 24, 2026',
    readTime: '4 Min Read',
    title: 'The Blueprint of Custom Layout Tokens: Scaling Consistent Visual Systems',
    desc: 'Learn how to construct robust layout design tokens, harmonized typography hierarchies, and interactive responsive UI prototypes using Figma.',
  }
];

export default function BlogPage() {
  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#05080f] pb-20">
      <HeroBanner
        title={
          <>
            Latest Insights &amp; <span className="text-[#E47911]">Technology News</span>
          </>
        }
        currentPage="Insights"
        showStats={false}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Blogs list */}
            <div className="lg:col-span-2 space-y-6">
              {blogs.map((b, idx) => (
                <article
                  key={idx}
                  className="blog-card p-8 group"
                >
                  <div className="flex flex-wrap items-center gap-4 text-xs font-bold mb-4 text-[#E47911] uppercase tracking-wider">
                    <span className="bg-orange-50 dark:bg-slate-800 px-3 py-1 rounded-sm">{b.category}</span>
                    <span className="text-gray-400 dark:text-gray-600">•</span>
                    <span className="text-[#4a4a52] dark:text-gray-400">{b.readTime}</span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-[#101010] dark:text-white mb-3 group-hover:text-[#E47911] transition-colors leading-snug">
                    <Link href={`/blog/${idx}`}>
                      {b.title}
                    </Link>
                  </h2>

                  <p className="text-[#4a4a52] dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                    {b.desc}
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-gray-150 dark:border-slate-800/40">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] flex items-center justify-center text-xs font-bold font-mono">
                        {b.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#101010] dark:text-white">{b.author}</div>
                        <div className="text-[10px] text-gray-400 dark:text-gray-500 font-semibold">{b.date}</div>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${idx}`}
                      className="learn-link"
                    >
                      Read Full Article <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Category selector */}
              <div className="bg-white dark:bg-[#0e1628] p-6 rounded-md border border-gray-200 dark:border-slate-800/80 shadow-sm">
                <h3 className="text-base font-bold text-[#101010] dark:text-white mb-4 pb-2 border-b border-gray-150 dark:border-slate-800">Blog Categories</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Technology', count: 12 },
                    { label: 'SaaS & Development', count: 8 },
                    { label: 'Cybersecurity', count: 5 },
                    { label: 'UI/UX Visual Design', count: 6 },
                    { label: 'IoT Infrastructure', count: 9 }
                  ].map((cat) => (
                    <button
                      key={cat.label}
                      className="w-full flex items-center justify-between px-3 py-2 bg-[#f8f9fa] dark:bg-[#0a0f1c] border border-gray-100 dark:border-slate-850 hover:border-[#E47911] text-[#4a4a52] dark:text-gray-300 hover:text-[#E47911] rounded-sm text-xs font-bold transition-all"
                    >
                      <span>{cat.label}</span>
                      <span className="px-2 py-0.5 bg-white dark:bg-[#0e1628] text-gray-400 dark:text-gray-500 rounded-sm text-[10px] font-bold border border-gray-200 dark:border-slate-800">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Sign up */}
              <div className="bg-[#0a0f1c] dark:bg-[#0e1628] p-8 rounded-md text-white border border-transparent dark:border-slate-800/80">
                <i className="fa-regular fa-envelope text-4xl text-[#E47911] mb-4 block text-center"></i>
                <h3 className="text-lg font-bold mb-2 text-center">Subscribe Newsletter</h3>
                <p className="text-xs text-gray-400 dark:text-gray-400 mb-6 leading-relaxed text-center font-medium">
                  Receive the latest high-value engineering summaries and API architectural blueprints directly to your inbox.
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter business email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 dark:border-slate-800 rounded-sm text-xs placeholder-gray-500 focus:outline-none focus:border-[#E47911] transition-colors"
                  />
                  <button type="submit" className="theme-btn1 w-full justify-center text-xs py-3.5">
                    Subscribe Now <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
