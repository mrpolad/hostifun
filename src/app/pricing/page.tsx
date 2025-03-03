import Link from 'next/link';

const PricingPage = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: 4.99,
      description: "Perfect for small communities and starting servers",
      features: [
        "1GB RAM",
        "10 Player Slots",
        "Basic Plugin Support",
        "SSD Storage",
        "99.5% Uptime",
        "Free Subdomain",
        "Daily Backups",
        "24/7 Support"
      ],
      highlighted: false,
      buttonText: "Get Started",
      buttonLink: "/deploy?plan=basic"
    },
    {
      name: "Pro",
      price: 9.99,
      description: "Enhanced performance for growing communities",
      features: [
        "4GB RAM",
        "50 Player Slots",
        "Premium Plugin Support",
        "NVMe SSD Storage",
        "99.9% Uptime",
        "Free Domain",
        "Daily Backups",
        "Priority Support",
        "DDoS Protection",
        "Modpack Installation"
      ],
      highlighted: true,
      buttonText: "Choose Pro",
      buttonLink: "/deploy?plan=pro"
    },
    {
      name: "Ultimate",
      price: 19.99,
      description: "Maximum performance for large communities",
      features: [
        "8GB RAM",
        "100+ Player Slots",
        "Advanced Plugin Support",
        "NVMe SSD Storage",
        "99.99% Uptime",
        "Free Domain",
        "Daily Backups",
        "Priority Support",
        "Advanced DDoS Protection",
        "Custom Mods Installation",
        "Resource Pack Hosting",
        "Dedicated IP"
      ],
      highlighted: false,
      buttonText: "Choose Ultimate",
      buttonLink: "/deploy?plan=ultimate"
    }
  ];

  const serviceSpecificPlans = [
    {
      service: "Minecraft",
      icon: (
        <svg className="w-8 h-8 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      plans: [
        { name: "Java Basic", price: 5.99, slots: 20, ram: "2GB" },
        { name: "Java Premium", price: 12.99, slots: 60, ram: "6GB" },
        { name: "Bedrock", price: 6.99, slots: 30, ram: "3GB" }
      ]
    },
    {
      service: "Discord Bots",
      icon: (
        <svg className="w-8 h-8 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      plans: [
        { name: "Starter", price: 3.99, slots: "Basic Bot", ram: "512MB" },
        { name: "Standard", price: 7.99, slots: "Advanced Bot", ram: "1GB" },
        { name: "Premium", price: 14.99, slots: "Multiple Bots", ram: "2GB" }
      ]
    },
    {
      service: "Web Hosting",
      icon: (
        <svg className="w-8 h-8 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      plans: [
        { name: "Basic", price: 4.99, slots: "1 Website", ram: "5GB Storage" },
        { name: "Business", price: 9.99, slots: "5 Websites", ram: "20GB Storage" },
        { name: "Professional", price: 19.99, slots: "Unlimited", ram: "50GB Storage" }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Simple, Transparent <span className="text-blue-400">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include 24/7 support, automated backups, and a 99.9% uptime guarantee.
          </p>
        </div>

        {/* Main Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border ${plan.highlighted ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-800'} transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-blue-900`}
            >
              {plan.highlighted && (
                <div className="bg-blue-600 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={plan.buttonLink}
                  className={`block w-full py-3 px-6 text-center rounded-lg font-medium transition-colors duration-300 ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Service-specific Plans */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Specialized <span className="text-blue-400">Service</span> Plans
          </h2>
          
          <div className="space-y-12">
            {serviceSpecificPlans.map((service, serviceIndex) => (
              <div key={serviceIndex} className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black/40 rounded-lg flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.service} Plans</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {service.plans.map((plan, planIndex) => (
                    <div key={planIndex} className="bg-black/40 rounded-lg p-6 border border-gray-800 hover:border-blue-900 transition-all duration-300">
                      <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-white">${plan.price}</span>
                        <span className="text-gray-400 ml-2">/month</span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {plan.ram}
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {plan.slots}
                        </li>
                      </ul>
                      <Link 
                        href={`/deploy?service=${service.service.toLowerCase()}&plan=${plan.name.toLowerCase().replace(' ', '-')}`}
                        className="block w-full py-2 px-4 text-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
                      >
                        Select
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I choose the right plan?",
                answer: "Consider your expected player count, whether you'll use mods or plugins, and your budget. Our Basic plan is perfect for small communities, while Pro and Ultimate offer more resources for larger servers with more complex setups."
              },
              {
                question: "Can I upgrade my plan later?",
                answer: "Yes! You can upgrade your hosting plan at any time. Your server data will be migrated automatically to the new plan with minimal downtime."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 7-day money-back guarantee if you're not satisfied with our service. Contact our support team within 7 days of purchase for assistance."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept credit/debit cards, PayPal, and cryptocurrency payments including Bitcoin and Ethereum."
              },
              {
                question: "Is there a setup fee?",
                answer: "No, there are no hidden fees. The price you see is the price you pay, with no setup fees or additional charges."
              },
              {
                question: "How long does it take to set up my server?",
                answer: "Most servers are deployed instantly after payment. In rare cases, it might take up to 15 minutes for all systems to be configured."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 rounded-2xl p-8 md:p-12 border border-blue-900/30 backdrop-blur-sm shadow-xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Deploy Your Server?</h2>
            <p className="text-xl text-gray-300 mb-8">Get started in minutes with our simple setup process. Choose your game, customize your options, and we'll handle the rest.</p>
            <Link 
              href="/deploy"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Deploy Now
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage; 