export default function HomeAbout() {
  return (
    <div className="py-24 bg-white dark:bg-[#05080f]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative h-[500px]">
             <div className="absolute right-0 top-0 w-[85%] h-[90%]">
               <img src="https://cyberdudenetworks.com/assets/img/backgrounds/bg-home-fullscreen.jpg" alt="About" className="w-full h-full object-cover rounded-md" />
             </div>
             <div className="absolute left-0 bottom-0 w-[60%] h-[55%] border-[8px] border-white dark:border-[#05080f] rounded-md">
               <img src="https://cyberdudenetworks.com/assets/img/portfolio/cyberhrm-management-software.png" alt="About small" className="w-full h-full object-cover rounded-md" />
             </div>
             
             <div className="absolute left-4 top-[15%] bg-white dark:bg-[#0a0f1c] shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-none border dark:border-slate-800/80 p-5 rounded-md flex flex-col items-center justify-center">
                <img src="assets/img/icons/about1-shape-icon.png" alt="" className="mb-2 hidden" />
                <i className="fa-solid fa-headset text-[#E47911] text-2xl mb-2"></i>
                <h4 className="font-bold text-[#101010] dark:text-white text-lg">24/7 Support</h4>
                <p className="text-xs text-[#4a4a52] dark:text-gray-400 mt-1">TechXen Technology & It Solution</p>
             </div>
          </div>

          <div>
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 text-[#4a4a52] dark:text-gray-300 font-semibold text-sm">
                <i className="fa fa-play text-[#E47911] text-[10px]"></i> About Our Company
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#101010] dark:text-white mb-6 leading-tight">
              Discover Our Story Empowering Business Through Innovation
            </h2>
            <p className="text-[#4a4a52] dark:text-gray-300 mb-6">
              CyberDude Networks is a pioneering force in the realm of technology and IT solutions, dedicated to revolutionising the way businesses thrive in the digital age. Our approach is rooted in collaboration, transparency, and a relentless pursuit of excellence. We believe that by staying ahead of the curve and embracing change, we can help our clients stay ahead of competition.
            </p>
            
            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#E47911] mt-1"><i className="fa-solid fa-check"></i></span>
                <span className="text-[#101010] dark:text-gray-200 font-semibold">Dramatically re-engineer value added IT system.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#E47911] mt-1"><i className="fa-solid fa-check"></i></span>
                <span className="text-[#101010] dark:text-gray-200 font-semibold">Highlight any unique selling points or differentiators.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#E47911] mt-1"><i className="fa-solid fa-check"></i></span>
                <span className="text-[#101010] dark:text-gray-200 font-semibold">Incorporate visuals such as team photos shots.</span>
              </li>
            </ul>


            <a href="#about" className="theme-btn1">
              Discover More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
