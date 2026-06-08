'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';



export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);



  const navLinks = [
    {
      label: 'About', href: '/about',
      items: [
        { label: 'About CDN', href: '/about' },
        { label: 'Our Works', href: '/our-works' },
        { label: 'Partners', href: '/about/partners' },
        { label: 'How We Work?', href: '/about/how-we-work' },
        { label: 'F.A.Qs', href: '/about/faqs' },
      ]
    },
    {
      label: 'Solutions', href: '/solutions',
      items: [
        { label: 'IoT Solutions', href: '/solutions/iot' },
        { label: 'SaaS & AI Products', href: '/solutions/saas-ai' },
        { label: 'Custom ERP / CRM', href: '/solutions/erp-crm' },
        { label: 'Digital Transformation', href: '/solutions/digital-transformation' },
      ]
    },
    {
      label: 'Services', href: '/services',
      items: [
        { label: 'UI/UX Designs', href: '/services/ui-ux' },
        { label: 'Android Apps', href: '/services/android' },
        { label: 'iOS Apps', href: '/services/ios' },
        { label: 'WordPress', href: '/services/wordpress' },
        { label: 'SEO Branding', href: '/services/seo' },
        { label: 'Social Marketing', href: '/services/social-marketing' },
      ]
    },
    { label: 'Academy', href: '/academy', items: [] },
    {
      label: 'Insights', href: '/blog',
      items: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Awards & Recognition', href: '/about/awards' },
      ]
    },
    {
      label: 'Careers', href: '/careers',
      items: [
        { label: 'Career Jobs', href: '/careers' },
        { label: 'Internship Jobs', href: '/careers/internships' },
      ]
    },
  ];

  return (
    <>
      <header className="relative w-full z-50">

      </header>

      {/* Navbar */}
      <nav className={`w-full transition-all duration-300 z-50 ${scrolled ? 'fixed top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-xl shadow-black/10 dark:shadow-black/50 border-b border-gray-200 dark:border-white/10 z-[100] animate-fade-in' : 'absolute top-0 left-0 bg-transparent border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20" ref={dropdownRef}>
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center">
              <Image src="/cyberdude-logo-dark.svg" alt="CyberDude Networks" width={160} height={40} className="h-9 w-auto dark:hidden" priority />
              <Image src="/cyberdude-logo.svg" alt="CyberDude Networks" width={160} height={40} className="h-9 w-auto hidden dark:block" priority />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((nav) => (
                <div
                  key={nav.label}
                  className="relative group py-2"
                  onMouseEnter={() => nav.items && nav.items.length > 0 && setActiveDropdown(nav.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={nav.href}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#E47911] dark:hover:text-[#E47911] rounded-lg hover:bg-orange-50 dark:hover:bg-zinc-900 transition-all duration-200"
                    onClick={(e) => {
                      if (nav.items && nav.items.length > 0) {
                        setActiveDropdown(activeDropdown === nav.label ? null : nav.label);
                      }
                    }}
                  >
                    {nav.label}
                    {nav.items && nav.items.length > 0 && <i className="fa fa-chevron-down text-[9px] mt-0.5 text-gray-400 transition-transform duration-200 group-hover:rotate-180"></i>}
                  </Link>

                  {nav.items && nav.items.length > 0 && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 bg-white dark:bg-black rounded-xl shadow-2xl border border-[var(--border-color)] py-2 transition-all duration-250 z-[100] ${
                        activeDropdown === nav.label
                          ? 'opacity-100 visible translate-y-0 scale-100 animate-dropdown'
                          : 'opacity-0 invisible translate-y-2 scale-95 pointer-events-none'
                      } group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100`}
                    >
                      {/* Invisible bridge to prevent hover gap */}
                      <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />
                      {nav.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-[#E47911] dark:hover:text-[#E47911] hover:bg-orange-50 dark:hover:bg-slate-800/50 transition-colors"
                        >
                          <i className="fa fa-angle-right text-[#E47911] text-xs"></i>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">


              <Link href="/contact" className="theme-btn1 !hidden lg:!inline-flex ml-2 !py-3 !px-6 !text-[14px]">
                Contact Us <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-900 dark:text-gray-100 hover:text-[#E47911] rounded-lg border border-gray-100 dark:border-slate-800 ml-1"
              >
                <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden bg-white dark:bg-black border-t border-gray-100 dark:border-slate-800 ${mobileMenuOpen ? 'max-h-screen border-b shadow-lg' : 'max-h-0'}`}>
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((nav) => (
              <div key={nav.label} className="border-b border-gray-50 dark:border-slate-800/40 last:border-0 pb-1.5 pt-1">
                <div className="flex items-center justify-between">
                  <Link
                    href={nav.items && nav.items.length > 0 ? '#' : nav.href}
                    onClick={(e) => {
                      if (nav.items && nav.items.length > 0) {
                        e.preventDefault();
                        setMobileActiveDropdown(mobileActiveDropdown === nav.label ? null : nav.label);
                      } else {
                        setMobileMenuOpen(false);
                      }
                    }}
                    className="block px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-[#E47911] rounded-lg transition-colors flex-grow"
                  >
                    {nav.label}
                  </Link>
                  {nav.items && nav.items.length > 0 && (
                    <button
                      onClick={() => setMobileActiveDropdown(mobileActiveDropdown === nav.label ? null : nav.label)}
                      className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#E47911]"
                    >
                      <i className={`fa-solid ${mobileActiveDropdown === nav.label ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs`}></i>
                    </button>
                  )}
                </div>

                {nav.items && nav.items.length > 0 && (
                  <div className={`ml-4 pl-3 border-l-2 border-orange-100 dark:border-slate-800 space-y-1 transition-all duration-300 overflow-hidden ${
                    mobileActiveDropdown === nav.label ? 'max-h-96 opacity-100 py-1' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}>
                    {nav.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs text-gray-500 dark:text-gray-400 hover:text-[#E47911] hover:bg-orange-50 dark:hover:bg-slate-800/40 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 px-3 pb-2 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#E47911] text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-[#c4680d] transition-colors"
              >
                Contact Us <i className="fa fa-arrow-right text-xs"></i>
              </Link>
              <Link
                href="/academy"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-transparent text-[#E47911] border-2 border-[#E47911] px-4 py-3 rounded-lg text-sm font-semibold hover:bg-orange-50 dark:hover:bg-[#E47911]/10 transition-colors"
              >
                Learn Tech <i className="fa fa-arrow-right text-xs"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
