import Image from "next/image";
import Link from "next/link";

export default function Footer() {
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
    { label: 'Our Apps', href: 'https://cyberdudenetworks.com/apps' },
    { label: 'Our Works', href: '/our-works' },
    { label: 'Partners', href: '/about/partners' },
    { label: 'Training', href: '/academy' },
    { label: 'Careers', href: '/careers' },
    { label: 'Client Login', href: 'https://cyberdudenetworks.com/client-login/' },
  ];
  const socials = [
    { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/cdudenetworks', label: 'Facebook' },
    { icon: 'fab fa-x-twitter', href: 'https://twitter.com/cdudenetworks', label: 'Twitter' },
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/company/cyberdude-networks', label: 'LinkedIn' },
    { icon: 'fab fa-youtube', href: 'https://www.youtube.com/user/CyberDudeNetworks', label: 'YouTube' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/cdudenetworks', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#f8f9fa] dark:bg-[#05080f] text-[#4a4a52] dark:text-gray-400 border-t border-gray-250/10 dark:border-transparent transition-all duration-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-30 h-30  relative rounded-lg flex items-center justify-center">
               <Image src="/cyberdude-logo.svg" alt="Logo" fill  /> 
              </div>
              
            </div>
            <p className="text-sm leading-relaxed mb-6">
              CyberDude Networks Pvt. Ltd. is a creative product startup company that primarily focuses on tech and product development. We stimulate creativity in everything that appears to our eye.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-gray-200/60 dark:bg-white/5 border border-gray-300/40 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#E47911] hover:border-[#E47911] hover:text-white transition-all duration-200 text-xs"
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#101010] dark:text-white font-bold mb-5 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-[#4a4a52] dark:text-gray-400 hover:text-[#E47911] transition-colors flex items-center gap-2"
                  >
                    <i className="fa fa-angle-right text-[#E47911] text-xs"></i>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#101010] dark:text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-[#4a4a52] dark:text-gray-400 hover:text-[#E47911] transition-colors flex items-center gap-2"
                  >
                    <i className="fa fa-angle-right text-[#E47911] text-xs"></i>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h4 className="text-[#101010] dark:text-white font-bold mb-5 text-sm uppercase tracking-wider">Visit Us Today!</h4>
            <ul className="space-y-4">
              {[
                { icon: 'fa fa-location-dot', text: '#32, Second Street, Ramalingapuram, Kamaraj Nagar, Avadi, Chennai – 600 071' },
                { icon: 'fa fa-phone', text: '+91 99529 13027' },
                { icon: 'fa fa-phone', text: '+91 89397 38801' },
                { icon: 'fa fa-envelope', text: 'hello@cyberdudenetworks.com' },
                { icon: 'fa fa-globe', text: 'cyberdudenetworks.com' },
              ].map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#4a4a52] dark:text-gray-400">
                  <i className={`${c.icon} text-[#E47911] mt-0.5 flex-shrink-0`}></i>
                  <span className="leading-relaxed">{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>
            © 2026 Copyright{' '}
            <a href="https://cyberdudenetworks.com/" target="_blank" rel="noopener noreferrer" className="text-[#E47911] hover:underline">
              CyberDude Networks Pvt. Ltd.
            </a>{' '}
            All Rights Reserved.
          </p>
          <p>Crafted with <span className="text-red-400">❤️</span> in Chennai, India</p>
        </div>
      </div>
    </footer>

  );
}
