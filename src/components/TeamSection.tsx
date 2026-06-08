'use client';

const team = [
  {
    name: 'Anbuselvan Rocky',
    role: 'CEO & Founder',
    initials: 'AR',
    color: 'bg-[#fff4eb] text-[#E47911] dark:bg-slate-800 dark:text-[#E47911]',
    socials: [
      { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/company/cyberdude-networks' },
      { icon: 'fab fa-x-twitter', href: 'https://twitter.com/cdudenetworks' },
      { icon: 'fab fa-youtube', href: 'https://www.youtube.com/user/CyberDudeNetworks' },
      { icon: 'fab fa-instagram', href: 'https://www.instagram.com/cdudenetworks' },
    ],
  },
  {
    name: 'Tech Lead',
    role: 'Chief Technology Officer',
    initials: 'TL',
    color: 'bg-gray-100 text-gray-700 dark:bg-[#111111] dark:text-gray-300',
    socials: [
      { icon: 'fab fa-linkedin-in', href: '#' },
      { icon: 'fab fa-x-twitter', href: '#' },
      { icon: 'fab fa-github', href: '#' },
    ],
  },
  {
    name: 'Design Lead',
    role: 'Head of UI/UX Design',
    initials: 'DL',
    color: 'bg-gray-100 text-gray-700 dark:bg-[#111111] dark:text-gray-300',
    socials: [
      { icon: 'fab fa-linkedin-in', href: '#' },
      { icon: 'fab fa-figma', href: '#' },
      { icon: 'fab fa-instagram', href: '#' },
    ],
  },
  {
    name: 'Dev Lead',
    role: 'Lead Software Engineer',
    initials: 'DV',
    color: 'bg-gray-100 text-gray-700 dark:bg-[#111111] dark:text-gray-300',
    socials: [
      { icon: 'fab fa-linkedin-in', href: '#' },
      { icon: 'fab fa-github', href: '#' },
      { icon: 'fab fa-x-twitter', href: '#' },
    ],
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-[#4a4a52] dark:text-gray-300 font-semibold text-sm">
              <i className="fa fa-play text-[#E47911] text-[10px]"></i> Our Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#101010] dark:text-white">
            Meet With Our <span className="text-[#E47911]">Expert Team</span>
          </h2>
          <p className="text-[#4a4a52] dark:text-gray-400 text-sm mt-3 max-w-xl mx-auto font-semibold">
            Passionate tech-geeks working together to build world-class IoT, AI and SaaS products from Chennai, India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white dark:bg-[#222222] rounded-md overflow-hidden border border-gray-200 dark:border-slate-800/80 shadow-sm"
            >
              {/* Profile initials container */}
              <div className={`h-48 ${member.color} flex items-center justify-center relative group`}>
                <span className="text-5xl font-extrabold select-none">{member.initials}</span>

                {/* Social hover trigger */}
                <div className="absolute inset-0 bg-[#1a1a1a]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {member.socials.map((s, idx) => (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/10 hover:bg-[#E47911] rounded-sm flex items-center justify-center text-white text-xs transition-colors"
                    >
                      <i className={s.icon}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Info section */}
              <div className="p-6 text-center border-t border-gray-150 dark:border-slate-850">
                <h3 className="font-bold text-[#101010] dark:text-white mb-1">{member.name}</h3>
                <p className="text-xs text-[#4a4a52] dark:text-gray-400 font-semibold">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
