'use client';
import Link from 'next/link';

export default function HeroBanner({
  title,
  subtitle = "IoT & SaaS Product Company",
  currentPage,
  showStats = false
}: {
  title: string | React.ReactNode;
  subtitle?: string;
  currentPage: string;
  showStats?: boolean;
}) {
  return (
    <section 
      className="relative py-28 md:py-36 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: 'url(https://cyberdudenetworks.com/assets/img/backgrounds/bg-home-fullscreen.jpg)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-[#111111]/40" />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-[#E47911] font-semibold text-sm uppercase tracking-widest">
            <span className="w-8 h-px bg-[#E47911]" />
            {subtitle}
            <span className="w-8 h-px bg-[#E47911]" />
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-8">
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-[15px] font-medium text-white/70">
          <Link href="/" className="hover:text-[#E47911] transition-colors flex items-center gap-2">
            <i className="fa-solid fa-house text-[#E47911]"></i> Home
          </Link>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
          <span className="text-white">{currentPage}</span>
        </nav>

        {/* Stats row */}
        {showStats && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { num: '12+', label: 'Years Experience' },
              { num: '500+', label: 'Projects Done' },
              { num: '150+', label: 'Happy Clients' },
              { num: '24/7', label: 'Support Available' },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold text-[#E47911] mb-2">{s.num}</div>
                <div className="text-xs text-white/80 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
