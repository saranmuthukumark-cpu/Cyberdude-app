'use client';
import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    quote: "This guys are amazing! They were so quick to respond and let me tell you... they are all knowing! I highly recommend this company! They are all about making their clients happy.",
    author: "Anand Kali",
    role: "Indian Forest Officer",
    initials: "AK",
    rating: 5,
  },
  {
    quote: "This one is undoubtedly the best service I got from them and I highly recommend it. It's wonderful design and also very fast and excellent support.",
    author: "Suresh",
    role: "www.studiomusic.in",
    initials: "SU",
    rating: 5,
  },
  {
    quote: "A satisfied customer is the best business strategy of all. CyberDude truly lives this — their team delivered our IoT project beyond expectations, on time and within budget.",
    author: "Enterprise Client",
    role: "CyberDude Networks Customer",
    initials: "EC",
    rating: 5,
  },
  {
    quote: "TechXen — I mean CyberDude has been our go-to partner for IT support. Their team is highly responsive, knowledgeable and reliable. Thanks to their expertise, we've overcome every IT challenge.",
    author: "Scott Boland",
    role: "E-Commerce Business Owner",
    initials: "SB",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((idx + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 250);
  };

  useEffect(() => {
    const timer = setInterval(() => goTo(active + 1), 5000);
    return () => clearInterval(timer);
  }, [active]);

  const t = testimonials[active];

  return (
    <section className="py-20 bg-white dark:bg-[#05080f]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-[#E47911] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            <i className="fa fa-star text-[10px]"></i> Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a0f1c] dark:text-white">
            See What Our <span className="text-[#E47911]">Customers Say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main card */}
          <div className={`bg-gradient-to-br from-gray-50 to-white dark:from-[#0a0f1c] dark:to-[#0e1628] border border-gray-100 dark:border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-xl relative transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
            {/* Quote icon */}
            <div className="absolute top-8 right-8 w-14 h-14 bg-[#E47911]/10 rounded-2xl flex items-center justify-center">
              <i className="fa fa-quote-right text-[#E47911] text-2xl"></i>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <i key={i} className="fa fa-star text-[#E47911] text-sm"></i>
              ))}
            </div>

            <blockquote className="text-gray-700 dark:text-gray-200 text-lg md:text-xl leading-relaxed mb-8 font-medium">
              "{t.quote}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E47911] to-[#c4680d] flex items-center justify-center text-white font-bold text-sm shadow-lg dark:shadow-none">
                {t.initials}
              </div>
              <div>
                <div className="font-bold text-[#0a0f1c] dark:text-white">{t.author}</div>
                <div className="text-xs text-gray-400">{t.role}</div>
              </div>
              <div className="ml-auto bg-[#E47911]/10 dark:bg-slate-800/50 rounded-xl px-4 py-2 text-center">
                <div className="text-lg font-extrabold text-[#E47911]">4.9/5</div>
                <div className="text-[10px] text-gray-400">Rating</div>
              </div>
            </div>
          </div>

          {/* Controls + dots */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => goTo(active - 1)}
              className="w-10 h-10 rounded-xl border-2 border-gray-200 dark:border-slate-800 flex items-center justify-center text-gray-400 hover:border-[#E47911] hover:text-[#E47911] transition-all"
              aria-label="Previous"
            >
              <i className="fa fa-arrow-left text-xs"></i>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-[#E47911]' : 'w-2 bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700'}`}
                  aria-label={`Slide ${i + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={() => goTo(active + 1)}
              className="w-10 h-10 rounded-xl border-2 border-gray-200 dark:border-slate-800 flex items-center justify-center text-gray-400 hover:border-[#E47911] hover:text-[#E47911] transition-all"
              aria-label="Next"
            >
              <i className="fa fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

  );
}
