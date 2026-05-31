export default function HomeFeatures() {
  const features = [
    { icon: 'fa-solid fa-trophy', title: '4x Award Wining', desc: 'Always ready to support' },
    { icon: 'fa-solid fa-briefcase', title: '2.5k Case Solved', desc: 'It Solution case solved' },
    { icon: 'fa-solid fa-chart-pie', title: '150k Optimisation', desc: 'Keywords into online' },
    { icon: 'fa-solid fa-headset', title: '24/7 Support', desc: 'Always ready to support' },
  ];

  return (
    <div className="bg-white dark:bg-[#0a0f1c] py-10 border-b border-gray-200 dark:border-slate-800/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-4 bg-white dark:bg-[#0a0f1c] p-4">
              <div className="w-14 h-14 flex-shrink-0 bg-white dark:bg-[#0e1628] shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-none rounded-full flex items-center justify-center">
                <i className={`${f.icon} text-[#E47911] text-xl`}></i>
              </div>
              <div>
                <h5 className="font-bold text-[#101010] dark:text-white text-lg mb-1">{f.title}</h5>
                <p className="text-sm text-[#4a4a52] dark:text-gray-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
