export default function HomeFeatures() {
  const stats = [
    { icon: 'fa-solid fa-trophy', value: '4x', title: 'Award Winning', desc: 'Industry recognised excellence' },
    { icon: 'fa-solid fa-briefcase', value: '500+', title: 'Projects Done', desc: 'Successfully delivered' },
    { icon: 'fa-solid fa-users', value: '150+', title: 'Happy Clients', desc: 'Across the globe' },
    { icon: 'fa-solid fa-headset', value: '24/7', title: 'Support', desc: 'Always ready to help' },
  ];

  return (
    <div className="bg-white dark:bg-[#1a1a1a] py-0 border-b border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--border-color)]">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-6 py-8 group hover:bg-[#E47911] transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-[rgba(228,121,17,0.1)] group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <i className={`${s.icon} text-[#E47911] group-hover:text-white text-xl transition-colors duration-300`} />
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--heading)] group-hover:text-white transition-colors duration-300">{s.value}</div>
                <div className="font-semibold text-sm text-[var(--heading)] group-hover:text-white transition-colors duration-300 leading-tight">{s.title}</div>
                <div className="text-xs text-[var(--foreground)] group-hover:text-white/75 transition-colors duration-300 mt-0.5">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
