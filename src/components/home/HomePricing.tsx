const plans = [
  {
    name: 'Starter',
    icon: 'fa-solid fa-rocket',
    price: 'Custom',
    desc: 'Ideal for startups and small businesses looking to get started with essential IT services.',
    features: [
      'Network Monitoring',
      'Helpdesk Support (Business Hours)',
      'Basic Cybersecurity Protection',
      'Email & Collaboration Setup',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    icon: 'fa-solid fa-chart-line',
    price: 'Custom',
    desc: 'Perfect for growing businesses that require additional features and round-the-clock support.',
    features: [
      '24/7 Network Monitoring',
      'Dedicated Helpdesk Support',
      'Advanced Cybersecurity Suite',
      'Cloud Backup & Recovery',
      'Software Development Support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: 'fa-solid fa-building',
    price: 'Custom',
    desc: 'Tailored for larger enterprises with complex IT needs, custom integrations, and stringent security.',
    features: [
      'Customised Network Monitoring',
      'Priority 24/7 Helpdesk Support',
      'Comprehensive Security Suite',
      'Disaster Recovery & Testing',
      'Onsite Support (as needed)',
      'Dedicated Account Manager',
    ],
    popular: false,
  },
];

export default function HomePricing() {
  return (
    <div className="section-py bg-[var(--card-bg)] dark:bg-[#080c17] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Pricing Plans</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--heading)] mt-4 heading-highlight">
            Explore Our <span>Flexible</span> Pricing
          </h2>
          <p className="text-[var(--foreground)] text-[15px] mt-4">
            All plans include a free consultation. Get in touch to discuss your specific requirements.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 border transition-all duration-350 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#E47911] to-[#c4680d] border-transparent shadow-2xl shadow-[#E47911]/25 scale-[1.02]'
                  : 'bg-white dark:bg-[#222222] border-[var(--border-color)] hover:border-[#E47911]/40 hover:-translate-y-1 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#101010] text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                plan.popular ? 'bg-white/20' : 'bg-[rgba(228,121,17,0.1)]'
              }`}>
                <i className={`${plan.icon} text-xl ${plan.popular ? 'text-white' : 'text-[#E47911]'}`} />
              </div>

              <h3 className={`font-bold text-xl mb-2 ${plan.popular ? 'text-white' : 'text-[var(--heading)]'}`}>
                {plan.name}
              </h3>

              <div className="mb-3">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-[#E47911]'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.popular ? 'text-white/70' : 'text-[var(--foreground)]'}`}>
                  / Quote
                </span>
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${plan.popular ? 'text-white/80' : 'text-[var(--foreground)]'}`}>
                {plan.desc}
              </p>

              <div className={`h-px mb-6 ${plan.popular ? 'bg-white/20' : 'bg-[var(--border-color)]'}`} />

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-white/20' : 'bg-[rgba(228,121,17,0.12)]'
                    }`}>
                      <i className={`fa-solid fa-check text-xs ${plan.popular ? 'text-white' : 'text-[#E47911]'}`} />
                    </span>
                    <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-[var(--foreground)]'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-bold text-[15px] transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-[#E47911] hover:bg-[#101010] hover:text-white'
                    : 'bg-[#E47911] text-white hover:bg-[#c4680d] shadow-lg shadow-[#E47911]/20'
                }`}
              >
                Contact Us <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
