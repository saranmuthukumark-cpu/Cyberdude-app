export default function CTABanner() {
  return (
    <div className="bg-white dark:bg-[#0a0f1c] py-24 bg-cover bg-center border-t border-b border-gray-250/15 dark:border-transparent transition-all duration-300 dark:bg-[url('https://cyberdudenetworks.com/assets/img/backgrounds/bg-home-fullscreen.jpg')] dark:bg-blend-overlay">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101010] dark:text-white mb-4 leading-tight">
              At CyberDude IT Solutions, We're Committed To Businesses
            </h2>
            <p className="text-[#4a4a52] dark:text-gray-300 text-lg leading-relaxed">
              Take the first step towards achieving your business goals by contacting us today. Schedule a consultation with one of our IT specialists to discuss your objectives and explore how our innovative solutions can propel.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-4 lg:justify-end">
            <a href="#contact" className="theme-btn1 bg-[#E47911] text-white dark:bg-white dark:!text-[#101010] dark:hover:!bg-[#E47911] dark:hover:!text-white border border-transparent w-full sm:w-auto justify-center">
              Request a Consultation <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#solutions" className="theme-btn1 border border-gray-300 dark:border-white !bg-transparent !text-[#101010] dark:!text-white hover:!bg-gray-100 dark:hover:!bg-white dark:hover:!text-[#101010] w-full sm:w-auto justify-center">
              Explore Solution <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

        </div>
      </div>
    </div>
  );

}
