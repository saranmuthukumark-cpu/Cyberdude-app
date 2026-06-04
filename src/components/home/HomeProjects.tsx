'use client';
import { useState } from 'react';

const projects = [
  {
    img: 'https://cyberdudenetworks.com/assets/img/portfolio/cyberhrm-management-software.png',
    category: 'SaaS Product',
    title: 'CyberHRM Management Software',
  },
  {
    img: 'https://cyberdudenetworks.com/assets/img/portfolio/dic-management-software.png',
    category: 'Enterprise App',
    title: 'DIC Management Software',
  },
  {
    img: 'https://cyberdudenetworks.com/assets/img/portfolio/boo-music-player.png',
    category: 'Mobile App',
    title: 'Boo Music Player App',
  },
  {
    img: 'https://cyberdudenetworks.com/assets/img/portfolio/cybergym-management-software.png',
    category: 'IoT Solution',
    title: 'CyberGym Management Platform',
  },
  {
    img: 'https://cyberdudenetworks.com/assets/img/portfolio/selfmote-android-app.png',
    category: 'Android App',
    title: 'Selfmote Remote Control App',
  },
];

export default function HomeProjects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="section-py bg-[var(--card-bg)] dark:bg-[#080c17] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="section-label">Our Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--heading)] mt-4 heading-highlight">
              Tech Projects <span>Showcase</span>
            </h2>
          </div>
          <a href="/our-works" className="theme-btn1 shrink-0">
            View All Projects <i className="fa-solid fa-arrow-right" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Large featured card */}
          <div
            className="project-card md:row-span-2 h-80 md:h-auto cursor-pointer"
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={projects[0].img} alt={projects[0].title} className="w-full h-full" />
            <div className="overlay">
              <p className="text-[#E47911] text-xs font-semibold uppercase tracking-widest mb-1">{projects[0].category}</p>
              <h5 className="text-white font-bold text-xl mb-3">{projects[0].title}</h5>
              <a href="/our-works" className="w-9 h-9 rounded-full bg-[#E47911] flex items-center justify-center text-white hover:scale-110 transition-transform">
                <i className="fa-solid fa-arrow-right text-sm" />
              </a>
            </div>
          </div>

          {/* Remaining cards */}
          {projects.slice(1).map((p, i) => (
            <div
              key={i}
              className="project-card h-56 cursor-pointer"
              onMouseEnter={() => setHovered(i + 1)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={p.img} alt={p.title} className="w-full h-full" />
              <div className="overlay">
                <p className="text-[#E47911] text-xs font-semibold uppercase tracking-widest mb-1">{p.category}</p>
                <h5 className="text-white font-bold text-base mb-2">{p.title}</h5>
                <a href="/our-works" className="w-8 h-8 rounded-full bg-[#E47911] flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <i className="fa-solid fa-arrow-right text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
