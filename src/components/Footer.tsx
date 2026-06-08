'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from 'next-themes';

const services = [
  { label: 'UI/UX Designs', href: '/services/ui-ux' },
  { label: 'Android Apps', href: '/services/android' },
  { label: 'iOS Apps', href: '/services/ios' },
  { label: 'WordPress Dev', href: '/services/wordpress' },
  { label: 'SEO Branding', href: '/services/seo' },
  { label: 'Social Marketing', href: '/services/social-marketing' },
];

const quickLinks = [
  { label: 'About CDN', href: '/about' },
  { label: 'Our Works', href: '/our-works' },
  { label: 'Partners', href: '/about/partners' },
  { label: 'Training', href: '/academy' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];

const socials = [
  { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/cdudenetworks', label: 'Facebook' },
  { icon: 'fab fa-x-twitter', href: 'https://twitter.com/cdudenetworks', label: 'Twitter' },
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/company/cyberdude-networks', label: 'LinkedIn' },
  { icon: 'fab fa-youtube', href: 'https://www.youtube.com/user/CyberDudeNetworks', label: 'YouTube' },
  { icon: 'fab fa-instagram', href: 'https://www.instagram.com/cdudenetworks', label: 'Instagram' },
];

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-black text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-white/5">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <div className="text-[15vw] font-black text-black/15 dark:text-white/30 whitespace-nowrap">
          CYBER DUDE
        </div>
      </div>
      {/* Glassmorphic Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-white/10 dark:bg-black/10 pointer-events-none z-0" />

      {/* Main footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-5 relative w-40 h-10">
              <Image src="/cyberdude-logo-dark.svg" alt="CyberDude Networks" fill className="object-contain object-left dark:hidden" />
              <Image src="/cyberdude-logo.svg" alt="CyberDude Networks" fill className="object-contain object-left hidden dark:block brightness-200" />
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-600 dark:text-gray-500">
              CyberDude Networks Pvt. Ltd. is a creative product startup company focused on tech and product development. We stimulate creativity in everything we build.
            </p>
            <div className="flex gap-2 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-500 hover:bg-[#E47911] dark:hover:bg-[#E47911] hover:border-[#E47911] dark:hover:border-[#E47911] hover:text-white transition-all duration-200 text-xs"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-5 text-sm uppercase tracking-wider after:block after:w-8 after:h-0.5 after:bg-[#E47911] after:mt-2">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-600 dark:text-gray-500 hover:text-[#E47911] dark:hover:text-[#E47911] transition-colors flex items-center gap-2 group"
                  >
                    <i className="fa fa-angle-right text-[#E47911] text-xs group-hover:translate-x-1 transition-transform" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-5 text-sm uppercase tracking-wider after:block after:w-8 after:h-0.5 after:bg-[#E47911] after:mt-2">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-600 dark:text-gray-500 hover:text-[#E47911] dark:hover:text-[#E47911] transition-colors flex items-center gap-2 group"
                  >
                    <i className="fa fa-angle-right text-[#E47911] text-xs group-hover:translate-x-1 transition-transform" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-5 text-sm uppercase tracking-wider after:block after:w-8 after:h-0.5 after:bg-[#E47911] after:mt-2">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { icon: 'fa fa-location-dot', text: '#32, Second Street, Kamaraj Nagar, Avadi, Chennai – 600 071' },
                { icon: 'fa fa-phone', text: '+91 99529 13027', href: 'tel:+919952913027' },
                { icon: 'fa fa-phone', text: '+91 89397 38801', href: 'tel:+918939738801' },
                { icon: 'fa fa-envelope', text: 'hello@cyberdudenetworks.com', href: 'mailto:hello@cyberdudenetworks.com' },
                { icon: 'fa fa-globe', text: 'cyberdudenetworks.com', href: 'https://cyberdudenetworks.com' },
              ].map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-500">
                  <div className="w-7 h-7 rounded-lg bg-[#E47911]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className={`${c.icon} text-[#E47911] text-xs`} />
                  </div>
                  {c.href ? (
                    <a href={c.href} className="leading-relaxed hover:text-[#E47911] transition-colors">{c.text}</a>
                  ) : (
                    <span className="leading-relaxed">{c.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-gray-200 dark:border-white/05">
        <div className="max-w-7xl mx-auto px-4 py-5 relative flex items-center justify-center text-center gap-2 text-xs text-gray-500 dark:text-gray-600">
          <p>
            © 2026 Copyright{' '}
            <a href="https://cyberdudenetworks.com/" target="_blank" rel="noopener noreferrer" className="text-[#E47911] hover:underline">
              CyberDude Networks Pvt. Ltd.
            </a>{' '}
            All Rights Reserved.
          </p>
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-8 h-8 flex items-center justify-center cursor-pointer text-gray-600 dark:text-gray-400 hover:text-[#E47911] dark:hover:text-[#E47911] hover:bg-gray-100 dark:hover:bg-white/5 transition-colors rounded-lg"
            >
              {mounted && (
                theme === 'dark' ? (
                  <i className="fa-solid fa-sun text-yellow-500 text-sm"></i>
                ) : (
                  <i className="fa-solid fa-moon text-gray-500 text-sm"></i>
                )
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
