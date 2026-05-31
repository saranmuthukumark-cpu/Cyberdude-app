'use client';
import { useState } from 'react';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

const faqs = [
  {
    q: 'What core technologies does CyberDude Networks specialize in?',
    a: 'We focus heavily on the Internet of Things (ESP32 microcontrollers, custom electrical circuitry, telemetry streaming dashboards), AI-integrated Software-as-a-Service (SaaS multi-tenant environments), custom Enterprise Resource Planning (ERP suites), custom CRMs, native and cross-platform mobile apps (Kotlin, Swift, Flutter, React Native), and high-performance custom WordPress developments.'
  },
  {
    q: 'How does the CyberDude Academy training system work?',
    a: 'CyberDude Academy is taught by active software engineers rather than traditional theoretical lecturers. We offer full syllabus paths in Full-Stack Web Development, Mobile Development, IoT, and UI/UX Designs, conducted in bilingual (Tamil & English) interactive classes. The curriculum focus is heavily project-based, concluding with mock technical reviews, open-source git contributions, and professional job landing preparation.'
  },
  {
    q: 'Can you synchronize IoT hardware sensors to custom cloud dashboards?',
    a: 'Absolutely. We design secure low-power microchip configurations (using MQTT/MQTTS and JSON payloads) to synchronize sensor data (like temperatures, motion, levels) safely into centralized cloud databases, accompanied by real-time responsive web graphic panels.'
  },
  {
    q: 'What is the standard development timeline for a custom ERP or SaaS platform?',
    a: 'Development timelines vary depending on scope complexity. A standard SaaS prototype or custom CRM dashboard takes between 6 to 12 weeks. We structure execution using Agile sprints, presenting interactive milestones to our clients every fortnight.'
  },
  {
    q: 'Does CyberDude Networks provide continuous post-deployment support?',
    a: 'Yes, we provide robust, continuous support services, automated database backups, technical SEO health crawls, periodic server updates (AWS, Vercel, VPS), and hot-fixes to ensure zero operational downtime.'
  }
];
export default function FaqsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="animate-fade-in bg-[#f8f9fa] dark:bg-[#05080f] pb-20 transition-colors duration-300">
      <HeroBanner
        title={
          <>
            Frequently Asked <span className="text-[#E47911]">Questions</span>
          </>
        }
        currentPage="About / FAQs"
        showStats={false}
      />

      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911] text-xs font-semibold px-3 py-1 rounded-sm">
              <i className="fa fa-question-circle text-[10px]"></i> Client Enquiries
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#101010] dark:text-white">
            Resolving Your <span className="text-[#E47911]">Tech Concerns</span>
          </h2>
          <p className="text-[#4a4a52] dark:text-gray-400 text-sm mt-3 font-semibold">
            Read comprehensive answers detailing our developmental stacks, Academy syllabus, and deployment models.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0e1628] rounded-md border border-gray-200 dark:border-slate-800/80 shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-sm font-bold text-[#101010] dark:text-white hover:text-[#E47911] dark:hover:text-[#E47911] transition-colors pr-4 font-sans">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-sm bg-[#f8f9fa] dark:bg-slate-900 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  activeIndex === idx ? 'rotate-180 bg-[#fff4eb] dark:bg-slate-800 text-[#E47911]' : 'text-gray-400 dark:text-gray-500'
                }`}>
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </button>

              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === idx ? 'max-h-[500px] border-t border-gray-250/20 dark:border-slate-800' : 'max-h-0'
              }`}>
                <p className="p-6 text-xs text-[#4a4a52] dark:text-gray-300 leading-relaxed font-semibold">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct support CTA */}
      <section className="py-20 bg-white dark:bg-[#0a0f1c] border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#101010] dark:text-white">Still Have Questions?</h2>
          <p className="text-sm text-[#4a4a52] dark:text-gray-300 leading-relaxed font-semibold">
            Our technology consultants are ready to outline custom answers mapping to your specific corporate requirements.
          </p>
          <Link href="/contact" className="theme-btn1 py-3 px-6 rounded-sm">
            Contact Support Desk <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
