'use client';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Aravind Kumar',
    role: 'CEO, TechStart India',
    avatar: 'AK',
    rating: 5,
    text: "CyberDude Networks transformed our operations completely. Their IT solutions helped us streamline workflows and boosted productivity by over 40%. The team is responsive, knowledgeable, and truly invested in our success.",
  },
  {
    name: 'Priya Sharma',
    role: 'CTO, FinServe Solutions',
    avatar: 'PS',
    rating: 5,
    text: "From seamless implementation to ongoing support, the CyberDude team has been exceptional. Their cybersecurity expertise gave us peace of mind, and their custom ERP solution has been a game changer for our business.",
  },
  {
    name: 'Ramesh Venkataraman',
    role: 'Founder, EduTech Hub',
    avatar: 'RV',
    rating: 5,
    text: "Partnering with CyberDude was the best decision we made. Their IoT and mobile solutions helped us create a truly connected learning experience. Professional, innovative, and always delivering on time.",
  },
  {
    name: 'Meena Iyer',
    role: 'Director, Healthcare Plus',
    avatar: 'MI',
    rating: 5,
    text: "The cloud migration project was handled flawlessly. Our data is now secure, accessible, and scalable. CyberDude's 24/7 support team is always there whenever we need them — truly a reliable technology partner.",
  },
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);

  function prev() { setActive((a) => (a - 1 + testimonials.length) % testimonials.length); }
  function next() { setActive((a) => (a + 1) % testimonials.length); }

  const visible = [
    testimonials[active % testimonials.length],
    testimonials[(active + 1) % testimonials.length],
    testimonials[(active + 2) % testimonials.length],
  ];

  return (
    <div
      className="section-py relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #050810 0%, #0a1020 100%)',
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
      {/* Orange glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #E47911 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 heading-highlight">
            Feedback from <span>Our Partners</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-400 p-8 ${
                i === 0
                  ? 'bg-[#E47911] border-[#E47911] shadow-xl shadow-[#E47911]/20'
                  : 'bg-[#0e1628] border-white/05'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <i key={s} className={`fa-solid fa-star text-sm ${i === 0 ? 'text-white' : 'text-[#E47911]'}`} />
                ))}
              </div>

              {/* Quote */}
              <p className={`text-sm leading-relaxed mb-6 ${i === 0 ? 'text-white/90' : 'text-gray-400'}`}>
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                  i === 0 ? 'bg-white/20 text-white' : 'bg-[#E47911]/20 text-[#E47911]'
                }`}>
                  {t.avatar}
                </div>
                <div>
                  <div className={`font-bold text-sm ${i === 0 ? 'text-white' : 'text-white'}`}>{t.name}</div>
                  <div className={`text-xs ${i === 0 ? 'text-white/70' : 'text-gray-500'}`}>{t.role}</div>
                </div>
              </div>

              {/* Quote icon */}
              <div className={`text-5xl font-serif leading-none mt-4 opacity-20 ${i === 0 ? 'text-white' : 'text-[#E47911]'}`}>
                "
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-[#E47911] hover:border-[#E47911] transition-all duration-300"
          >
            <i className="fa-solid fa-arrow-left text-sm" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-[#E47911]' : 'w-3 bg-white/20'}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-[#E47911] border border-[#E47911] flex items-center justify-center text-white hover:bg-transparent transition-all duration-300"
          >
            <i className="fa-solid fa-arrow-right text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
