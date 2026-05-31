export default function HomePricing() {
  const plans = [
    {
      name: 'Basic Plan',
      price: 'Custom',
      desc: 'Ideal for startups and small businesses looking get started essential IT services.',
      features: [
        'Network Monitoring',
        'Helpdesk Support (Limited Hours)',
        'Basic Cybersecurity Protection',
      ],
      popular: false,
    },
    {
      name: 'Standard Plan',
      price: 'Custom',
      desc: 'Perfect for growing businesses that require additional features and support.',
      features: [
        '24/7 Network Monitoring',
        'Dedicated Helpdesk Support',
        'Advance Cybersecurity Protection',
        'Cloud Backup & Recovery',
      ],
      popular: true,
    },
    {
      name: 'Premium Plan',
      price: 'Custom',
      desc: 'Tailored for larger enterprises with complex IT needs and stringent security.',
      features: [
        'Customised Network Monitoring',
        'Priority Helpdesk Support',
        'Comprehensive Cybersecurity Suite',
        'Disaster Recovery Planning & Testing',
        'Onsite Support (as needed)',
      ],
      popular: false,
    }
  ];

  return (
    <div className="py-24 bg-[#f8f9fa] dark:bg-[#05080f]">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-[#4a4a52] dark:text-gray-300 font-semibold text-sm">
              <i className="fa fa-play text-[#E47911] text-[10px]"></i> Our Pricing Plan
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#101010] dark:text-white leading-tight">
            Explore Our Flexible Pricing Plans
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className={`relative p-10 bg-white dark:bg-[#0a0f1c] border ${plan.popular ? 'border-[#E47911]' : 'border-gray-200 dark:border-slate-800/80'} rounded-md transition-shadow hover:shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:hover:shadow-none`}>
              
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#E47911] text-white text-xs font-bold px-4 py-2 rounded-bl-md rounded-tr-md uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <p className="text-[#101010] dark:text-white font-bold text-xl mb-4">{plan.name}</p>
              
              <div className="mb-4">
                <h2 className="text-4xl font-bold text-[#E47911] inline-block">{plan.price}</h2>
                <span className="text-[#4a4a52] dark:text-gray-400">/ Quote</span>
              </div>
              
              <p className="text-[#4a4a52] dark:text-gray-300 text-sm mb-8 leading-relaxed">
                {plan.desc}
              </p>

              <div className="w-full h-px bg-gray-200 dark:bg-slate-800 mb-8"></div>

              <h4 className="text-[#101010] dark:text-white font-bold mb-6">Featured Included:</h4>
              <ul className="space-y-4 mb-10">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#E47911] mt-1"><i className="fa-solid fa-check"></i></span>
                    <span className="text-[#4a4a52] dark:text-gray-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="theme-btn1 w-full justify-center">
                Get A Quote <i className="fa-solid fa-arrow-right"></i>
              </a>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

