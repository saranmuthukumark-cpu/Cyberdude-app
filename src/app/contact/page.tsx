'use client';
import { useState } from 'react';
import HeroBanner from '@/components/HeroBanner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#111111] pb-20 transition-colors duration-300">
      <HeroBanner
        title={
          <>
            Contact <span className="text-[#E47911]">Our Team</span>
          </>
        }
        currentPage="Contact Us"
        showStats={false}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info column */}
            <div className="space-y-6 lg:col-span-1">
              <div className="bg-[#222222] text-white p-8 rounded-md relative overflow-hidden border border-slate-800/80 shadow-md">
                <div className="absolute inset-0 pointer-events-none opacity-5">
                  <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle, #E47911 1px, transparent 1px)', backgroundSize:'30px 30px'}}></div>
                </div>

                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 bg-[#E47911]/20 text-[#E47911] text-xs font-semibold px-3 py-1 rounded-sm">
                    <i className="fa fa-phone text-[10px]"></i> Contact Info
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-6 font-sans">CyberDude Networks Pvt. Ltd.</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#E47911]/15 border border-[#E47911]/30 flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-location-dot text-[#E47911] text-sm"></i>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-bold mb-1">Office Location</div>
                      <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                        #32, Second Street, Ramalingapuram, Kamaraj Nagar, Avadi, Chennai – 600 071, India.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#E47911]/15 border border-[#E47911]/30 flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-envelope text-[#E47911] text-sm"></i>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-bold mb-1">Email Addresses</div>
                      <a href="mailto:hello@cyberdudenetworks.com" className="text-xs text-gray-300 hover:text-[#E47911] font-bold block transition-colors">
                        hello@cyberdudenetworks.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#E47911]/15 border border-[#E47911]/30 flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-phone text-[#E47911] text-sm"></i>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-bold mb-1">Phone Enquiries</div>
                      <a href="tel:+919952913027" className="text-xs text-gray-300 hover:text-[#E47911] font-bold block transition-colors">
                        +91 99529 13027
                      </a>
                      <a href="tel:+918939738801" className="text-xs text-gray-300 hover:text-[#E47911] font-bold block transition-colors">
                        +91 89397 38801
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Operational Hours */}
              <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-md border border-gray-200 dark:border-slate-800/80 shadow-sm transition-colors duration-300">
                <h3 className="text-base font-bold text-[#101010] dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-slate-800/80">Operational Hours</h3>
                <ul className="space-y-3">
                  {[
                    { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM – 2:00 PM' },
                    { day: 'Sunday', hours: 'Closed' }
                  ].map((item) => (
                    <li key={item.day} className="flex justify-between text-xs text-[#4a4a52] dark:text-gray-300 font-semibold">
                      <span>{item.day}</span>
                      <span className="text-gray-400 dark:text-gray-500">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form column */}
            <div className="lg:col-span-2 bg-white dark:bg-[#1a1a1a] p-8 md:p-12 rounded-md border border-gray-200 dark:border-slate-800/80 shadow-sm transition-colors duration-300">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] text-xs font-semibold px-3 py-1 rounded-sm">
                  <i className="fa fa-envelope text-[10px]"></i> Send Message
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#101010] dark:text-white mb-6">
                Get in Touch with <span className="text-[#E47911]">Our Experts</span>
              </h2>

              {submitted ? (
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/30 text-green-700 dark:text-green-400 p-6 rounded-sm text-center space-y-3">
                  <i className="fa-solid fa-circle-check text-4xl text-green-500"></i>
                  <h3 className="text-lg font-bold">Thank You!</h3>
                  <p className="text-xs">Your message has been safely received. Our tech geeks will review it and reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#4a4a52] dark:text-gray-300 mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#f8f9fa] dark:bg-[#131b2e] border border-gray-200 dark:border-slate-800 rounded-sm text-xs text-[#101010] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#E47911] dark:focus:border-[#E47911] focus:bg-white dark:focus:bg-[#1a1a1a] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#4a4a52] dark:text-gray-300 mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="hello@company.com"
                        className="w-full px-4 py-3 bg-[#f8f9fa] dark:bg-[#131b2e] border border-gray-200 dark:border-slate-800 rounded-sm text-xs text-[#101010] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#E47911] dark:focus:border-[#E47911] focus:bg-white dark:focus:bg-[#1a1a1a] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#4a4a52] dark:text-gray-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-[#f8f9fa] dark:bg-[#131b2e] border border-gray-200 dark:border-slate-800 rounded-sm text-xs text-[#101010] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#E47911] dark:focus:border-[#E47911] focus:bg-white dark:focus:bg-[#1a1a1a] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#4a4a52] dark:text-gray-300 mb-2">Subject</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Quote Request / Partnerships"
                        className="w-full px-4 py-3 bg-[#f8f9fa] dark:bg-[#131b2e] border border-gray-200 dark:border-slate-800 rounded-sm text-xs text-[#101010] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#E47911] dark:focus:border-[#E47911] focus:bg-white dark:focus:bg-[#1a1a1a] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#4a4a52] dark:text-gray-300 mb-2">Your Message</label>
                    <textarea
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project scope or business targets here..."
                      className="w-full px-4 py-3 bg-[#f8f9fa] dark:bg-[#131b2e] border border-gray-200 dark:border-slate-800 rounded-sm text-xs text-[#101010] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#E47911] dark:focus:border-[#E47911] focus:bg-white dark:focus:bg-[#1a1a1a] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="theme-btn1 w-full justify-center py-4 rounded-sm font-bold">
                    Submit Message <i className="fa-solid fa-paper-plane text-xs"></i>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
