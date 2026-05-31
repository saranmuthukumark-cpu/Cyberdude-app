export default function HomeHero() {
  return (
    <div className="relative py-28 md:py-40 bg-white dark:bg-[#0a0f1c] bg-cover bg-center border-b border-gray-250/15 dark:border-transparent transition-all duration-300 dark:bg-[url('https://cyberdudenetworks.com/assets/img/backgrounds/bg-home-fullscreen.jpg')] dark:bg-blend-overlay">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-left">
            <span className="inline-flex items-center gap-2 text-[#4a4a52] dark:text-white font-semibold mb-4">
              <i className="fa fa-play text-[#E47911] text-[10px]"></i>  CyberDude Networks Private Limited
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#101010] dark:text-white mb-6 leading-tight">
              Transform Your Business With Next Generation <span className="text-[#E47911]">IT Solutions</span>
            </h1>
            <p className="text-[#4a4a52] dark:text-gray-300 mb-10 max-w-lg text-lg">
              Welcome to CyberDude where we specialise in delivering tailored technology and IT solutions designed to propel your business forward. From streamlining operations to driving growth.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#contact" className="theme-btn1">
                Get Started Now <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="https://www.youtube.com/watch?v=kcfs1-ryKWE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-800 dark:text-white font-semibold hover:text-[#E47911] transition-colors">
                <span className="w-12 h-12 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center">
                  <i className="fa-solid fa-play"></i>
                </span>
                Watch Demo Video
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative h-[500px]">
             {/* Exact TechXen Hero Images Layout */}
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px]">
                <img src="https://cyberdudenetworks.com/assets/img/backgrounds/bg-1.jpg" alt="Hero Main" className="w-full h-full object-cover rounded-md" />
             </div>
             <div className="absolute left-0 bottom-10 w-64 h-48 border-[6px] border-white dark:border-[#0a0f1c] rounded-md overflow-hidden transition-colors duration-300">
                <img src="https://cyberdudenetworks.com/assets/img/portfolio/cybergym-management-software.png" alt="Hero Small" className="w-full h-full object-cover" />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

