"use client"
export default function HomeProjects() {
  const projects = [
    {
      img: 'https://cyberdudenetworks.com/assets/img/portfolio/cyberhrm-management-software.png',
      title: 'Enterprise Resource Planning Implementation',
    },
    {
      img: 'https://cyberdudenetworks.com/assets/img/portfolio/dic-management-software.png',
      title: 'Enterprise Resource Planning Implementation',
    },
    {
      img: 'https://cyberdudenetworks.com/assets/img/portfolio/boo-music-player.png',
      title: 'Enterprise Resource Planning Implementation',
    }
  ];

  return (
    <div className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-[#4a4a52] font-semibold text-sm">
              <i className="fa fa-play text-[#E47911] text-[10px]"></i> Our Project
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#101010] leading-tight">
            Driving Success Through Innovative IT Solution Project
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group">
              <div className="overflow-hidden rounded-md mb-6 h-64">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#101010] mb-4 hover:text-[#E47911] transition-colors">
                  <a href="#">{p.title}</a>
                </h3>
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
