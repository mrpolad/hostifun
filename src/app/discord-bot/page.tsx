"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DiscordBotPage: React.FC = () => {
  // Form için state
  const [framework, setFramework] = useState<string>("");
  const [selectedPlan, setSelectedPlan] = useState<string>("standard");
  const [botName, setBotName] = useState<string>("");

  // Sipariş formunu aç
  const openOrderForm = (planName: string = "standard") => {
    setSelectedPlan(planName.toLowerCase());
    document.getElementById('order-form')?.classList.remove('hidden');
  };

  // Sipariş formunu kapat
  const closeOrderForm = () => {
    document.getElementById('order-form')?.classList.add('hidden');
  };

  return (
    <>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="relative rounded-2xl overflow-hidden mb-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80 z-10"></div>
            <div className="absolute inset-0 opacity-20 bg-[url('/discord-bg.jpg')] bg-cover bg-center"></div>
            <div className="relative z-20 py-20 px-6 md:px-12 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Discord Bot <span className="text-blue-400">Hosting</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
                Reliable and scalable Discord bot hosting with 24/7 uptime. Keep your community engaged with custom bots that never go offline.
              </p>
              <button 
                onClick={() => openOrderForm()}
                className="inline-flex items-center px-8 py-4 border border-transparent font-medium rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-blue-500/20"
              >
                Order Discord Bot
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">
                Why Choose Our <span className="text-blue-400">Discord Bot Hosting</span>
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Our platform is optimized for Discord bots of all types, providing the reliability and scalability your community needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "24/7 Uptime",
                  description: "Our robust infrastructure ensures your bot stays online around the clock with 99.9% uptime guarantee.",
                  icon: (
                    <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Scalable Resources",
                  description: "As your bot grows, easily scale your resources to handle increased load without any downtime.",
                  icon: (
                    <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )
                },
                {
                  title: "Multi-Language Support",
                  description: "Deploy bots written in JavaScript, Python, Java, Go, or other popular programming languages.",
                  icon: (
                    <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )
                },
                {
                  title: "Automatic Restarts",
                  description: "If your bot crashes, our system automatically restarts it to minimize downtime and ensure continuous operation.",
                  icon: (
                    <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  )
                },
                {
                  title: "Easy Deployment",
                  description: "Deploy your bot with just a few clicks. Support for GitHub integration, direct code upload, or Docker containers.",
                  icon: (
                    <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )
                },
                {
                  title: "Environment Variables",
                  description: "Securely store sensitive information like API keys and tokens with built-in environment variable management.",
                  icon: (
                    <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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
          
          {/* Pricing Plans */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">
                Discord Bot Hosting <span className="text-blue-400">Plans</span>
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your Discord bot. All plans include 24/7 support and a 99.9% uptime guarantee.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: 3.99,
                  ram: "512MB",
                  cpu: "1 vCPU",
                  storage: "5GB SSD",
                  features: [
                    "24/7 Uptime",
                    "Automatic Restarts",
                    "Environment Variables",
                    "Basic Monitoring",
                    "Discord Support",
                    "Up to 50 Servers"
                  ],
                  highlighted: false
                },
                {
                  name: "Standard",
                  price: 7.99,
                  ram: "1GB",
                  cpu: "2 vCPU",
                  storage: "10GB SSD",
                  features: [
                    "24/7 Uptime",
                    "Automatic Restarts",
                    "Environment Variables",
                    "Advanced Monitoring",
                    "Priority Discord Support",
                    "Up to 250 Servers",
                    "Custom Domain",
                    "Database Support"
                  ],
                  highlighted: true
                },
                {
                  name: "Professional",
                  price: 14.99,
                  ram: "2GB",
                  cpu: "4 vCPU",
                  storage: "20GB SSD",
                  features: [
                    "24/7 Uptime",
                    "Automatic Restarts",
                    "Environment Variables",
                    "Premium Monitoring",
                    "24/7 Priority Support",
                    "Unlimited Servers",
                    "Custom Domain",
                    "Database Support",
                    "Scalable Resources",
                    "Webhook Notifications"
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
                        {plan.ram} RAM
                      </div>
                      <div className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {plan.cpu}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {plan.storage}
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
                    
                    <button 
                      onClick={() => {
                        // Temporarily show an alert instead of processing order
                        alert('Sipariş işlemi şu anda kullanılamıyor. Daha sonra tekrar deneyin.');
                      }}
                      className={`block w-full py-3 px-6 text-center rounded-lg font-medium transition-colors duration-300 ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Use Cases Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">
                Popular Discord Bot <span className="text-blue-400">Use Cases</span>
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Discover how Discord bots can enhance your server experience and engage your community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Community Management",
                  description: "Automate moderation tasks, welcome new members, assign roles, and filter spam to keep your server safe and organized.",
                  icon: (
                    <svg className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "Server Statistics",
                  description: "Track server growth, member activity, message frequency, and other metrics to gain insights into your community.",
                  icon: (
                    <svg className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: "Custom Games & Entertainment",
                  description: "Engage members with trivia games, music playback, meme generators, and other interactive entertainment features.",
                  icon: (
                    <svg className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "External Integrations",
                  description: "Connect your Discord server to external services like GitHub, Twitch, Twitter, or custom APIs for real-time notifications.",
                  icon: (
                    <svg className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 h-16 w-16 bg-blue-900/20 rounded-xl flex items-center justify-center">
                      {useCase.icon}
                    </div>
                    <h3 className="ml-4 text-2xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 text-lg">{useCase.description}</p>
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
                  question: "What programming languages can I use for my Discord bot?",
                  answer: "We support all major programming languages for Discord bot development, including JavaScript (Node.js), Python, Java, Go, Ruby, and more. Our platform is language-agnostic and can run any Discord bot regardless of the language it's built in."
                },
                {
                  question: "How do I deploy my bot to your hosting platform?",
                  answer: "You can deploy your bot through GitHub integration, direct code upload, or Docker containers. Our platform provides a simple step-by-step wizard to guide you through the process, making deployment quick and easy."
                },
                {
                  question: "Can I run multiple bots on one plan?",
                  answer: "Yes, you can run multiple bots on a single plan as long as the combined resource usage stays within your plan's limits. However, for optimal performance, we recommend using separate plans for production bots with significant traffic."
                },
                {
                  question: "What happens if my bot crashes?",
                  answer: "Our system includes automatic restart functionality that detects when your bot goes offline and immediately restarts it. You'll also receive notifications about the crash so you can investigate the cause if needed."
                },
                {
                  question: "Do you provide assistance with bot development?",
                  answer: "While we don't offer direct development services, we provide comprehensive documentation, code examples, and a community forum where you can ask questions and share knowledge with other bot developers."
                },
                {
                  question: "Can I upgrade my plan later?",
                  answer: "Absolutely! You can upgrade your hosting plan at any time as your bot's needs grow. The upgrade process is seamless and doesn't cause any downtime for your bot."
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Launch Your Discord Bot?</h2>
              <p className="text-xl text-gray-300 mb-8">Deploy your bot in minutes and keep it running 24/7 with our reliable hosting platform.</p>
              <button 
                onClick={() => {
                  // Temporarily show an alert instead of processing order
                  alert('Sipariş işlemi şu anda kullanılamıyor. Daha sonra tekrar deneyin.');
                }}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Order Discord Bot Hosting
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
            <h2 className="text-2xl font-bold text-white">Order Discord Bot Hosting</h2>
            <button 
              onClick={closeOrderForm}
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-white text-base font-medium mb-2">Select Framework</label>
              <select 
                value={framework} 
                onChange={(e) => setFramework(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Framework</option>
                <option value="nodejs">Node.js</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="csharp">C#</option>
                <option value="ruby">Ruby</option>
                <option value="go">Go</option>
              </select>
            </div>
            
            <div>
              <label className="block text-white text-base font-medium mb-2">Select Plan</label>
              <div className="space-y-3">
                <div 
                  onClick={() => setSelectedPlan("starter")}
                  className={`p-4 border rounded-lg cursor-pointer ${selectedPlan === "starter" ? 'border-blue-500 bg-blue-900/20' : 'border-gray-700 bg-gray-800/50 hover:bg-gray-800'}`}
                >
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Starter</h3>
                      <p className="text-gray-300">512MB RAM • Basic Bot</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-white">$3.99</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                  </div>
                </div>
                
                <div 
                  onClick={() => setSelectedPlan("standard")}
                  className={`p-4 border rounded-lg cursor-pointer ${selectedPlan === "standard" ? 'border-blue-500 bg-blue-900/20' : 'border-gray-700 bg-gray-800/50 hover:bg-gray-800'}`}
                >
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Standard</h3>
                      <p className="text-gray-300">1GB RAM • Advanced Bot</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-white">$7.99</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                  </div>
                </div>
                
                <div 
                  onClick={() => setSelectedPlan("premium")}
                  className={`p-4 border rounded-lg cursor-pointer ${selectedPlan === "premium" ? 'border-blue-500 bg-blue-900/20' : 'border-gray-700 bg-gray-800/50 hover:bg-gray-800'}`}
                >
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Premium</h3>
                      <p className="text-gray-300">2GB RAM • Multiple Bots</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-white">$14.99</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-white text-base font-medium mb-2">Bot Name</label>
              <input 
                type="text" 
                value={botName}
                onChange={(e) => setBotName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="My Discord Bot"
              />
            </div>
            
            <button 
              type="button"
              onClick={() => {
                // Temporarily show an alert instead of processing order
                alert('Sipariş işlemi şu anda kullanılamıyor. Daha sonra tekrar deneyin.');
              }}
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

export default DiscordBotPage; 