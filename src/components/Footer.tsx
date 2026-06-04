'use client';
import Image from "next/image";
import Link from "next/link";

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
  return (
    <footer className="bg-[#050810] text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-5 relative w-40 h-10">
              <Image src="/cyberdude-logo.svg" alt="CyberDude Networks" fill className="object-contain object-left brightness-200" />
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-500">
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
                  className="w-9 h-9 rounded-lg bg-white/05 border border-white/08 flex items-center justify-center text-gray-500 hover:bg-[#E47911] hover:border-[#E47911] hover:text-white transition-all duration-200 text-xs"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider after:block after:w-8 after:h-0.5 after:bg-[#E47911] after:mt-2">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-500 hover:text-[#E47911] transition-colors flex items-center gap-2 group"
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
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider after:block after:w-8 after:h-0.5 after:bg-[#E47911] after:mt-2">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-500 hover:text-[#E47911] transition-colors flex items-center gap-2 group"
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
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider after:block after:w-8 after:h-0.5 after:bg-[#E47911] after:mt-2">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { icon: 'fa fa-location-dot', text: '#32, Second Street, Kamaraj Nagar, Avadi, Chennai – 600 071' },
                { icon: 'fa fa-phone', text: '+91 99529 13027', href: 'tel:+919952913027' },
                { icon: 'fa fa-phone', text: '+91 89397 38801', href: 'tel:+918939738801' },
                { icon: 'fa fa-envelope', text: 'hello@cyberdudenetworks.com', href: 'mailto:hello@cyberdudenetworks.com' },
                { icon: 'fa fa-globe', text: 'cyberdudenetworks.com', href: 'https://cyberdudenetworks.com' },
              ].map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
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
      <div className="border-t border-white/05">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>
            © 2026 Copyright{' '}
            <a href="https://cyberdudenetworks.com/" target="_blank" rel="noopener noreferrer" className="text-[#E47911] hover:underline">
              CyberDude Networks Pvt. Ltd.
            </a>{' '}
            All Rights Reserved.
          </p>
          <p>Crafted with <span className="text-red-500">❤</span> in Chennai, India</p>
        </div>
      </div>
    </footer>
  );
}
