const blogs = [
  {
    category: 'Technology',
    categoryColor: '#3b82f6',
    date: 'Feb 25, 2024',
    title: 'Demystifying Blockchain: How It\'s Revolutionising Industries',
    desc: 'Explore how blockchain technology is reshaping finance, healthcare, and supply chain management around the world.',
    author: 'CyberDude Team',
    readTime: '5 min read',
    icon: 'fa-solid fa-link',
  },
  {
    category: 'Security',
    categoryColor: '#ef4444',
    date: 'Mar 10, 2024',
    title: 'Cybersecurity Essentials: Protecting Your Business in 2024',
    desc: 'Learn the essential cybersecurity practices every business needs to implement to stay safe from modern threats.',
    author: 'CyberDude Team',
    readTime: '7 min read',
    icon: 'fa-solid fa-shield-halved',
  },
  {
    category: 'Productivity',
    categoryColor: '#10b981',
    date: 'Apr 05, 2024',
    title: 'The Future of Work: Embracing Remote Collaboration Tools',
    desc: 'Discover the latest tools and strategies to help distributed teams work more effectively and stay connected.',
    author: 'CyberDude Team',
    readTime: '6 min read',
    icon: 'fa-solid fa-laptop-code',
  },
];

export default function HomeBlog() {
  return (
    <div className="section-py bg-white dark:bg-[#05080f] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="section-label">Blog & Latest News</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--heading)] mt-4 heading-highlight">
              Latest <span>News</span> & Insights
            </h2>
          </div>
          <a href="/blog" className="theme-btn1 shrink-0">
            View All Posts <i className="fa-solid fa-arrow-right" />
          </a>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
            <article key={i} className="blog-card group">
              {/* Image / Icon area */}
              <div
                className="relative h-52 flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${b.categoryColor}18, ${b.categoryColor}08)` }}
              >
                <i className={`${b.icon} text-7xl opacity-10 group-hover:scale-110 transition-transform duration-500`} style={{ color: b.categoryColor }} />
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider"
                    style={{ background: b.categoryColor }}
                  >
                    {b.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center gap-4 mb-4 text-xs text-[var(--foreground)]">
                  <span className="flex items-center gap-1.5">
                    <i className="fa-regular fa-calendar-days text-[#E47911]" />
                    {b.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <i className="fa-regular fa-clock text-[#E47911]" />
                    {b.readTime}
                  </span>
                </div>

                <h4 className="font-bold text-[var(--heading)] text-[17px] mb-3 leading-snug group-hover:text-[#E47911] transition-colors duration-300">
                  <a href="/blog">{b.title}</a>
                </h4>

                <p className="text-[var(--foreground)] text-sm leading-relaxed mb-5">
                  {b.desc}
                </p>

                <a href="/blog" className="learn-link">
                  Read More <i className="fa-solid fa-arrow-right text-xs" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
