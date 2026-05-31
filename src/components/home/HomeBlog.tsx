export default function HomeBlog() {
  const blogs = [
    {
      img: 'https://cyberdudenetworks.com/assets/img/blog/blog-1.jpg',
      author: 'John William',
      date: 'Feb 25, 24',
      title: 'Demystifying Blockchain: How It\'s Revolutionising Industries.',
    },
    {
      img: 'https://cyberdudenetworks.com/assets/img/blog/blog-2.jpg',
      author: 'John William',
      date: 'Feb 25, 24',
      title: 'Cybersecurity Essentials: Protecting Your Business',
    },
    {
      img: 'https://cyberdudenetworks.com/assets/img/blog/blog-3.jpg',
      author: 'John William',
      date: 'Feb 25, 24',
      title: 'The Future of Work: Embracing Remote Collaboration Tools',
    }
  ];

  return (
    <div className="py-24 bg-white dark:bg-[#05080f] border-t border-gray-200 dark:border-slate-800/30">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-[#4a4a52] dark:text-gray-300 font-semibold text-sm">
              <i className="fa fa-play text-[#E47911] text-[10px]"></i> Blog & Latest News
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#101010] dark:text-white leading-tight">
            Latest News & Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
            <div key={i} className="group animate-fade-in">
              <div className="overflow-hidden rounded-md mb-6 h-64 bg-gray-100 dark:bg-slate-800">
                 {/* Placeholders for images since they don't exist yet */}
                 <div className="w-full h-full bg-gray-200 dark:bg-slate-900 flex items-center justify-center">
                   <i className="fa-regular fa-image text-4xl text-gray-400"></i>
                 </div>
              </div>
              <div>
                <div className="flex items-center gap-6 mb-4">
                  <span className="text-[#4a4a52] dark:text-gray-400 text-sm flex items-center gap-2">
                    <i className="fa-regular fa-user text-[#E47911]"></i> {b.author}
                  </span>
                  <span className="text-[#4a4a52] dark:text-gray-400 text-sm flex items-center gap-2">
                    <i className="fa-regular fa-calendar-days text-[#E47911]"></i> {b.date}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-[#101010] dark:text-white mb-4 hover:text-[#E47911] transition-colors leading-relaxed">
                  <a href="#">{b.title}</a>
                </h4>
                <a href="#" className="inline-flex items-center gap-2 text-[#E47911] font-bold uppercase text-sm tracking-wider">
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

