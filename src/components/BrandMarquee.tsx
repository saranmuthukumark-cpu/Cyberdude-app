export default function BrandMarquee() {
  const techs = [
    { icon: 'fab fa-react', label: 'React', color: '#61DAFB' },
    { icon: 'fab fa-node-js', label: 'Node.js', color: '#68A063' },
    { icon: 'fab fa-android', label: 'Android', color: '#3DDC84' },
    { icon: 'fab fa-apple', label: 'iOS', color: '#555555' },
    { icon: 'fab fa-php', label: 'PHP', color: '#777BB4' },
    { icon: 'fab fa-python', label: 'Python', color: '#3776AB' },
    { icon: 'fab fa-java', label: 'Java', color: '#ED8B00' },
    { icon: 'fa fa-database', label: 'MySQL', color: '#00758F' },
    { icon: 'fab fa-docker', label: 'Docker', color: '#2496ED' },
    { icon: 'fab fa-aws', label: 'AWS', color: '#FF9900' },
    { icon: 'fab fa-figma', label: 'Figma', color: '#F24E1E' },
    { icon: 'fa fa-microchip', label: 'IoT', color: '#E47911' },
  ];

  const items = [...techs, ...techs];

  return (
    <section className="bg-[var(--card-bg)] dark:bg-[#080c17] border-y border-[var(--border-color)] py-5 overflow-hidden transition-colors duration-300">
      <div
        className="flex"
        style={{
          animation: 'marquee 35s linear infinite',
          width: 'max-content',
        }}
      >
        {items.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-3 mx-10 whitespace-nowrap group cursor-default"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ background: `${t.color}18` }}
            >
              <i
                className={`${t.icon} text-lg transition-colors duration-300`}
                style={{ color: t.color }}
              />
            </div>
            <span className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[#E47911] transition-colors duration-300">
              {t.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
