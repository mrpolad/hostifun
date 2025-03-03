"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WebHostingPage = () => {
  return (
    <>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="relative rounded-2xl overflow-hidden mb-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80 z-10"></div>
            <div className="absolute inset-0 opacity-20 bg-[url('/web-bg.jpg')] bg-cover bg-center"></div>
            <div className="relative z-20 py-20 px-6 md:px-12 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Web <span className="text-blue-400">Hosting</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
                Fast, reliable, and secure hosting for your websites and web applications. Get your site online in minutes.
              </p>
              <Link 
                href="/order?service=web-hosting"
                className="inline-flex items-center px-8 py-4 border border-transparent font-medium rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-blue-500/20"
              >
                Order Now
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">
                Our Web Hosting <span className="text-blue-400">Features</span>
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Powerful features designed to make your website fast, secure, and easy to manage
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "99.9% Uptime",
                  description: "Our robust infrastructure ensures your website stays online with 99.9% uptime guarantee.",
                  icon: (
                    <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "SSD Storage",
                  description: "All websites are hosted on high-performance SSD storage for lightning-fast page loads.",
                  icon: (
                    <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  )
                },
                {
                  title: "Free SSL Certificate",
                  description: "Secure your website with a free SSL certificate, providing security and SEO benefits.",
                  icon: (
                    <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                },
                {
                  title: "One-Click Installs",
                  description: "Deploy WordPress, Joomla, Drupal, and many other popular applications with a single click.",
                  icon: (
                    <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  )
                },
                {
                  title: "Free Domain",
                  description: "Get a free domain name for one year with our annual hosting plans.",
                  icon: (
                    <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )
                },
                {
                  title: "Daily Backups",
                  description: "Rest easy knowing your website is backed up daily with easy restoration options.",
                  icon: (
                    <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  )
                },
              ].map((feature, index) => (
                <div key={index} className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-blue-900 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 h-12 w-12 bg-blue-900/20 rounded-xl flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="ml-4 text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Popular Applications */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">
                Popular <span className="text-blue-400">Applications</span>
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Deploy these applications with a single click and get started in minutes
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "WordPress", icon: "/icons/wordpress.svg" },
                { name: "Joomla", icon: "/icons/joomla.svg" },
                { name: "Drupal", icon: "/icons/drupal.svg" },
                { name: "Magento", icon: "/icons/magento.svg" },
                { name: "PrestaShop", icon: "/icons/prestashop.svg" },
                { name: "Ghost", icon: "/icons/ghost.svg" },
                { name: "OpenCart", icon: "/icons/opencart.svg" },
                { name: "MediaWiki", icon: "/icons/mediawiki.svg" },
              ].map((app, index) => (
                <div key={index} className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 flex items-center space-x-4 hover:border-blue-900 transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    {/* Replace with actual icons in production */}
                    <div className="text-blue-400 text-lg font-bold">{app.name.charAt(0)}</div>
                  </div>
                  <span className="text-white font-medium">{app.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pricing Plans */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">
                Web Hosting <span className="text-blue-400">Plans</span>
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your website. All plans include 24/7 support and a 99.9% uptime guarantee.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: 4.99,
                  storage: "10GB SSD",
                  bandwidth: "Unmetered",
                  domains: "1 Free Domain",
                  databases: "5 Databases",
                  features: [
                    "Free SSL Certificate",
                    "Daily Backups",
                    "One-Click Installs",
                    "24/7 Support",
                    "99.9% Uptime Guarantee"
                  ],
                  highlighted: false
                },
                {
                  name: "Business",
                  price: 9.99,
                  storage: "25GB SSD",
                  bandwidth: "Unmetered",
                  domains: "1 Free Domain",
                  databases: "20 Databases",
                  features: [
                    "Free SSL Certificate",
                    "Daily Backups",
                    "One-Click Installs",
                    "24/7 Support",
                    "99.9% Uptime Guarantee",
                    "CDN Integration",
                    "Advanced Caching",
                    "Priority Support"
                  ],
                  highlighted: true
                },
                {
                  name: "Enterprise",
                  price: 19.99,
                  storage: "100GB SSD",
                  bandwidth: "Unmetered",
                  domains: "5 Free Domains",
                  databases: "Unlimited Databases",
                  features: [
                    "Free SSL Certificate",
                    "Daily Backups",
                    "One-Click Installs",
                    "24/7 Support",
                    "99.9% Uptime Guarantee",
                    "CDN Integration",
                    "Advanced Caching",
                    "Priority Support",
                    "Dedicated Resources",
                    "Advanced Security"
                  ],
                  highlighted: false
                },
              ].map((plan, index) => (
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
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                    
                    <div className="space-y-2 mb-6 pb-6 border-b border-gray-800">
                      <div className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {plan.storage}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {plan.bandwidth}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {plan.domains}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {plan.databases}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={`/order?service=web-hosting&plan=${plan.name.toLowerCase()}`}
                      className={`block w-full py-3 px-6 text-center rounded-lg font-medium transition-colors duration-300 ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}
                    >
                      Select Plan
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">
                Frequently Asked <span className="text-blue-400">Questions</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "What is web hosting?",
                  answer: "Web hosting is a service that allows individuals and organizations to post a website or web page onto the Internet. A web host provides the technologies and services needed for the website to be viewed on the Internet."
                },
                {
                  question: "Do I need technical knowledge to use your web hosting?",
                  answer: "No, our web hosting services are designed to be user-friendly for beginners. We provide a simple control panel, one-click application installations, and 24/7 support to help you get started. No technical knowledge required!"
                },
                {
                  question: "Can I upgrade my hosting plan later?",
                  answer: "Yes, you can upgrade your hosting plan at any time as your website grows. The upgrade process is seamless and doesn't cause any downtime for your website."
                },
                {
                  question: "Do you provide email hosting with web hosting plans?",
                  answer: "Yes, all our web hosting plans include email hosting. You can create multiple email addresses using your domain name and access them via webmail or set them up on your favorite email client."
                },
                {
                  question: "What is the difference between shared and dedicated hosting?",
                  answer: "Shared hosting means your website shares server resources with other websites, making it more affordable. Dedicated hosting provides exclusive server resources for your website, offering better performance and security but at a higher cost."
                },
                {
                  question: "How do I migrate my existing website to your hosting?",
                  answer: "We offer free website migration services for all new customers. Our technical team will handle the entire migration process, ensuring your website is transferred correctly without any data loss or downtime."
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
          <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 rounded-2xl p-8 md:p-12 border border-blue-900/30 backdrop-blur-sm shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Launch Your Website?</h2>
              <p className="text-xl text-gray-300 mb-8">Get your website online in minutes with our reliable and affordable hosting services.</p>
              <button 
                onClick={() => {
                  // Burada sipariş formunu açabilirsiniz
                  document.getElementById('order-form')?.classList.remove('hidden');
                }}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Order Web Hosting
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sipariş formu */}
      <div id="order-form" className="hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-xl p-6 w-full max-w-xl border border-gray-800 max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Order Web Hosting</h2>
            <button 
              onClick={() => {
                document.getElementById('order-form')?.classList.add('hidden');
              }}
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-white text-base font-medium mb-2">Select Platform</label>
              <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
                <option value="">Select Platform</option>
                <option value="wordpress">WordPress</option>
                <option value="php">PHP</option>
                <option value="html">Static HTML</option>
                <option value="nodejs">Node.js</option>
                <option value="django">Python Django</option>
                <option value="rails">Ruby on Rails</option>
              </select>
            </div>
            
            <div>
              <label className="block text-white text-base font-medium mb-2">Select Plan</label>
              <div className="space-y-3">
                <div className="p-4 border border-gray-700 rounded-lg bg-gray-800/50 hover:bg-gray-800 cursor-pointer">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Basic</h3>
                      <p className="text-gray-300">5GB Storage • 1 Website</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-white">$4.99</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-blue-500 rounded-lg bg-blue-900/20 cursor-pointer">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Business</h3>
                      <p className="text-gray-300">20GB Storage • 5 Websites</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-white">$9.99</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-gray-700 rounded-lg bg-gray-800/50 hover:bg-gray-800 cursor-pointer">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Professional</h3>
                      <p className="text-gray-300">50GB Storage • Unlimited Websites</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-white">$19.99</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-white text-base font-medium mb-2">Website Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="My Website"
              />
            </div>
            
            <div>
              <label className="block text-white text-base font-medium mb-2">Domain Name (Optional)</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="mywebsite.com"
              />
            </div>
            
            <button 
              type="button"
              className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
            >
              Complete Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WebHostingPage; 