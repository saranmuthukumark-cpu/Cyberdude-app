export default function BrandMarquee() {
  const techs = [
    { icon: 'fab fa-react', label: 'React' },
    { icon: 'fab fa-node-js', label: 'Node.js' },
    { icon: 'fab fa-android', label: 'Android' },
    { icon: 'fab fa-apple', label: 'iOS' },
    { icon: 'fab fa-php', label: 'PHP' },
    { icon: 'fab fa-python', label: 'Python' },
    { icon: 'fab fa-java', label: 'Java' },
    { icon: 'fa fa-database', label: 'MySQL' },
    { icon: 'fab fa-docker', label: 'Docker' },
    { icon: 'fab fa-aws', label: 'AWS' },
    { icon: 'fab fa-figma', label: 'Figma' },
    { icon: 'fa fa-microchip', label: 'IoT' },
  ];

  const items = [...techs, ...techs]; // Duplicate for seamless loop

  return (
    <section className="bg-white border-y border-gray-100 py-6 overflow-hidden">
      <div
        className="flex"
        style={{
          animation: 'marquee 30s linear infinite',
          width: 'max-content',
        }}
      >
        {items.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-3 mx-8 whitespace-nowrap group cursor-default"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-[#E47911] transition-colors duration-300">
              <i
                className={`${t.icon} text-[#E47911] group-hover:text-white text-lg transition-colors duration-300`}
              ></i>
            </div>
            <span className="text-sm font-semibold text-gray-500 group-hover:text-[#E47911] transition-colors duration-300">
              {t.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
