'use client';
import { useState, useEffect } from 'react';

const slides = [
  {
    bg: 'https://cyberdudenetworks.com/assets/img/backgrounds/bg-home-fullscreen.jpg',
    label: 'Next-Gen IT Solutions',
    heading: <>Transform Your Business<br />With <span className="text-[#E47911]">IT Solutions</span></>,
    desc: 'Welcome to CyberDude Networks — where cutting-edge technology meets your business goals. We deliver tailor-made solutions that propel organisations forward.',
  },
  {
    bg: 'https://cyberdudenetworks.com/assets/img/backgrounds/bg-1.jpg',
    label: 'Trusted Technology Partner',
    heading: <>Empowering Businesses<br />Through <span className="text-[#E47911]">Innovation</span></>,
    desc: 'From cloud computing to cybersecurity, our expert team delivers end-to-end technology services that keep you ahead of the competition.',
  },
];

export default function HomeHero() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [active]);

  function goNext() {
    setAnimating(true);
    setTimeout(() => {
      setActive((p) => (p + 1) % slides.length);
      setAnimating(false);
    }, 400);
  }

  function goPrev() {
    setAnimating(true);
    setTimeout(() => {
      setActive((p) => (p - 1 + slides.length) % slides.length);
      setAnimating(false);
    }, 400);
  }

  const slide = slides[active];

  return (
    <div className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slide.bg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/92 via-[#050810]/75 to-[#050810]/40" />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Decorative shape */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-[#E47911]/40 animate-[spin_20s_linear_infinite]" />
        <div className="absolute top-40 right-40 w-48 h-48 rounded-full border border-[#E47911]/25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="max-w-3xl py-36">
          {/* Label */}
          <div className={`mb-6 transition-all duration-500 ${animating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <span className="inline-flex items-center gap-2 text-[#E47911] font-semibold text-sm uppercase tracking-widest">
              <span className="w-8 h-px bg-[#E47911]" />
              {slide.label}
            </span>
          </div>

          {/* Heading */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] transition-all duration-500 ${animating ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}>
            {slide.heading}
          </h1>

          {/* Description */}
          <p className={`text-gray-300 text-lg max-w-xl mb-10 leading-relaxed transition-all duration-500 delay-100 ${animating ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}>
            {slide.desc}
          </p>

          {/* Buttons */}
          <div className={`flex flex-wrap items-center gap-4 mb-14 transition-all duration-500 delay-200 ${animating ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}>
            <a href="/contact" className="theme-btn1">
              Free Consultation <i className="fa-solid fa-arrow-right" />
            </a>
            <a href="/services" className="inline-flex items-center gap-3 text-white font-semibold hover:text-[#E47911] transition-colors group">
              <span className="w-12 h-12 rounded-full border border-white/25 flex items-center justify-center group-hover:border-[#E47911] group-hover:bg-[#E47911] transition-all duration-300">
                <i className="fa-solid fa-play text-sm" />
              </span>
              Discover More
            </a>
          </div>

          {/* Stats Row */}
          <div className={`flex flex-wrap gap-8 transition-all duration-500 delay-300 ${animating ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}>
            {[
              { value: '12+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Done' },
              { value: '150+', label: 'Happy Clients' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E47911]">{s.value}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">{s.label}</div>
                </div>
                {i < 2 && <div className="w-px h-10 bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 right-8 z-20 flex gap-3">
        <button
          onClick={goPrev}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#E47911] hover:border-[#E47911] transition-all duration-300"
        >
          <i className="fa-solid fa-arrow-left text-sm" />
        </button>
        <button
          onClick={goNext}
          className="w-12 h-12 rounded-full bg-[#E47911] border border-[#E47911] flex items-center justify-center text-white hover:bg-transparent transition-all duration-300"
        >
          <i className="fa-solid fa-arrow-right text-sm" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-[#E47911]' : 'w-4 bg-white/30'}`}
          />
        ))}
      </div>

    </div>
  );
}
