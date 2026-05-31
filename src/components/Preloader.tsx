'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Preloader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [hiding, setHiding] = useState(false);

  // Initial load transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setHiding(true);
      const hideTimer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(hideTimer);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Track route changes to hide loading screen
  useEffect(() => {
    setHiding(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Intercept all link clicks globally to cover full page with loading screen during navigation
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        const targetAttr = anchor.getAttribute('target');
        
        // Intercept internal path links only, excluding hash-links (scroll anchors)
        if (
          href &&
          href.startsWith('/') &&
          !href.startsWith('/#') &&
          !href.includes('#') &&
          targetAttr !== '_blank' &&
          !e.ctrlKey &&
          !e.metaKey &&
          !e.shiftKey
        ) {
          const cleanHref = href.split('?')[0].split('#')[0];
          const cleanPathname = pathname.split('?')[0].split('#')[0];
          
          if (cleanHref !== cleanPathname) {
            setLoading(true);
            setHiding(false);
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [pathname]);

  if (!loading) return null;

  const text = "CYBERDUDE";

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-white dark:bg-[#05080f] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        hiding ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-[3px] border-gray-100 dark:border-slate-800 border-t-[#E47911] rounded-full animate-spin mb-8"></div>
        
        {/* Text */}
        <div className="flex gap-2 text-3xl font-bold text-[#E47911] tracking-widest uppercase overflow-hidden h-10">
          {text.split('').map((letter, i) => (
            <span 
              key={i} 
              className="letters-loading" 
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
