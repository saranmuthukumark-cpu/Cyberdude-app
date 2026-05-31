'use client';
import Link from 'next/link';

export default function HeroBanner({
  title,
  subtitle = "IoT & SAAS Product Company",
  currentPage,
  showStats = false
}: {
  title: string | React.ReactNode;
  subtitle?: string;
  currentPage: string;
  showStats?: boolean;
}) {
  return (
    <section className="relative bg-[#f8f9fa] dark:bg-[#0a0f1c] py-16 md:py-20 border-b border-gray-200 dark:border-slate-800/40 transition-all duration-300">
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#E47911]/10 border border-[#E47911]/20 text-[#E47911] text-xs font-bold px-3 py-1 rounded-sm mb-4">
          <i className="fa-solid fa-circle-check text-[10px]"></i>
          {subtitle}
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-[#101010] dark:text-white leading-tight mb-4 tracking-tight">
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-[#4a4a52] dark:text-gray-400">
          <Link href="/" className="hover:text-[#E47911] transition-colors flex items-center gap-1.5 font-semibold">
            <i className="fa-solid fa-house text-[#E47911] text-xs"></i> Home
          </Link>
          <i className="fa-solid fa-chevron-right text-[10px] text-gray-400 dark:text-gray-600"></i>
          <span className="text-[#E47911] font-bold">{currentPage}</span>
        </nav>

        {/* Stats row */}
        {showStats && (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { num: '18+', label: 'Happy Clients' },
              { num: '35+', label: 'Projects Delivered' },
              { num: '9+', label: 'Years Excellence' },
              { num: '56+', label: 'Maintaining Projects' },
            ].map((s) => (
              <div key={s.label} className="bg-white dark:bg-[#0e1628] border border-gray-200 dark:border-slate-800 rounded-md px-4 py-5 shadow-sm">
                <div className="text-2xl font-bold text-[#E47911]">{s.num}</div>
                <div className="text-xs text-[#4a4a52] dark:text-gray-400 mt-1 font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
