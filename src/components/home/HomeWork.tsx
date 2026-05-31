export default function HomeWork() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 text-[#4a4a52] font-semibold text-sm">
                <i className="fa fa-play text-[#E47911] text-[10px]"></i> Best It Solution
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#101010] mb-6 leading-tight">
              Let's Elevate Your Business With Strategic IT Solutions
            </h2>
            <p className="text-[#4a4a52] mb-8">
              At TechXen, we understand that every business is unique, which is why we offer a range of flexible IT solutions designed to address your specific challenges and goals.
            </p>

            <div className="space-y-6 mb-10">
              
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-[#fff4eb] flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-network-wired text-[#E47911] text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#101010] text-lg mb-2">Network Infrastructure Solutions</h4>
                  <p className="text-[#4a4a52] text-sm leading-relaxed">
                    Build a reliable and secure network infrastructure that supports your business operations enables seamless
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-[#fff4eb] flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-headset text-[#E47911] text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#101010] text-lg mb-2">Managed It Services</h4>
                  <p className="text-[#4a4a52] text-sm leading-relaxed">
                    Focus on your core business activities while we take care of your IT needs with our managed IT services.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-[#fff4eb] flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-server text-[#E47911] text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#101010] text-lg mb-2">Data Backup & Disaster Recovery</h4>
                  <p className="text-[#4a4a52] text-sm leading-relaxed">
                    Protect your critical business data and ensure business continuity with our data backup and disaster solution.
                  </p>
                </div>
              </div>

            </div>

            <a href="#about" className="theme-btn1">
              Discover More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="relative h-[600px] hidden md:block">
            {/* TechXen Work area image structure */}
            <div className="absolute right-0 top-0 w-[48%] h-[48%]">
              <img src="https://cyberdudenetworks.com/assets/img/portfolio/dic-management-software.png" alt="Work" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="absolute right-0 bottom-0 w-[48%] h-[48%]">
              <img src="https://cyberdudenetworks.com/assets/img/portfolio/selfmote-android-app.png" alt="Work" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="absolute left-0 top-[10%] w-[48%] h-[80%]">
              <img src="https://cyberdudenetworks.com/assets/img/portfolio/cybergym-management-software.png" alt="Work" className="w-full h-full object-cover rounded-md" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
