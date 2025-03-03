import React from 'react';
import Link from 'next/link';

const MinecraftPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80 z-10"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('/minecraft-bg.jpg')] bg-cover bg-center"></div>
          <div className="relative z-20 py-20 px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Minecraft Server <span className="text-blue-400">Hosting</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
              High-performance, lag-free Minecraft hosting with easy setup and instant deployment. Create your ideal Minecraft experience today.
            </p>
            <Link 
              href="/deploy?service=minecraft"
              className="inline-flex items-center px-8 py-4 border border-transparent font-medium rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-blue-500/20"
            >
              Deploy Server
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
              Why Choose Our <span className="text-blue-400">Minecraft Hosting</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Our platform is optimized specifically for Minecraft servers, providing the performance and features your players deserve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "High-Performance Hardware",
                description: "Powered by latest-gen Intel CPUs and NVMe SSDs for lightning-fast performance with minimal lag.",
                icon: (
                  <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "DDoS Protection",
                description: "Enterprise-grade DDoS protection to keep your Minecraft server safe from attacks and online 24/7.",
                icon: (
                  <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "One-Click Mod Installation",
                description: "Easily install popular modpacks, plugins, and server types with our simple one-click installer.",
                icon: (
                  <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                )
              },
              {
                title: "Automatic Backups",
                description: "Daily automated backups with one-click restoration to keep your world safe from disasters.",
                icon: (
                  <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                )
              },
              {
                title: "Instant Setup",
                description: "Your Minecraft server is ready within seconds after purchase. No waiting, start playing immediately.",
                icon: (
                  <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "User-Friendly Control Panel",
                description: "Manage your server, install mods, configure settings, and monitor performance through our intuitive control panel.",
                icon: (
                  <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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
        
        {/* Modpack Support */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Supported <span className="text-blue-400">Modpacks & Versions</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              We support all major Minecraft versions and popular modpacks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Minecraft Versions</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "1.20.x", "1.19.x", "1.18.x", "1.17.x", 
                  "1.16.x", "1.15.x", "1.14.x", "1.13.x", 
                  "1.12.x", "1.8.x", "1.7.x", "Bedrock"
                ].map((version, index) => (
                  <div key={index} className="bg-gray-800/50 px-4 py-3 rounded-lg border border-blue-900/30 text-center">
                    <span className="text-white font-medium">{version}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Popular Modpacks</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Vanilla", "Spigot", "Paper", "Forge", 
                  "Fabric", "FTB", "SkyFactory", "RLCraft", 
                  "All The Mods", "Tekkit", "Pixelmon", "CraftBukkit"
                ].map((modpack, index) => (
                  <div key={index} className="bg-gray-800/50 px-4 py-3 rounded-lg border border-blue-900/30 text-center">
                    <span className="text-white font-medium">{modpack}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Pricing Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Minecraft Server <span className="text-blue-400">Plans</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your Minecraft server. All plans include 24/7 support and DDoS protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Minecraft Basic",
                description: "Perfect for small communities and friends",
                cpu: "1 CPU",
                ram: "2GB",
                storage: "10GB SSD",
                features: [
                  { label: "Versions", value: "Java & Bedrock" },
                  { label: "Plugins", value: "Up to 10" },
                  { label: "Players", value: "Up to 20" }
                ],
                price: "$5.99/mo",
                available: true,
                highlighted: false
              },
              {
                name: "Minecraft Pro",
                description: "Ideal for medium-sized communities with mods",
                cpu: "2 CPU",
                ram: "4GB",
                storage: "20GB SSD",
                features: [
                  { label: "Versions", value: "Java & Bedrock" },
                  { label: "Plugins", value: "Unlimited" },
                  { label: "Players", value: "Up to 50" }
                ],
                price: "$12.99/mo",
                available: true,
                highlighted: true
              },
              {
                name: "Minecraft Premium",
                description: "Best for large communities with heavy modpacks",
                cpu: "4 CPU",
                ram: "8GB",
                storage: "40GB SSD",
                features: [
                  { label: "Versions", value: "Java & Bedrock" },
                  { label: "Plugins", value: "Unlimited" },
                  { label: "Players", value: "Unlimited" }
                ],
                price: "$24.99/mo",
                available: true,
                highlighted: false
              },
            ].map((plan, index) => (
              <div 
                key={index}
                className={`rounded-3xl overflow-hidden bg-gray-900/40 backdrop-blur-sm border border-gray-800 hover:border-blue-700 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
                  <div className="absolute inset-0 opacity-40 bg-[url('/minecraft-bg.jpg')] bg-cover bg-center"></div>
                  {plan.highlighted && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">PREMIUM</span>
                    </div>
                  )}
                  <div className="relative z-20 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  </div>
                </div>
                
                <div className="p-6 pt-0">
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    <div className="bg-gray-800/50 p-3 rounded-xl flex flex-col items-center">
                      <div className="text-blue-400 mb-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4H20V6.5L12 11L4 6.5V4Z" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M4 6.5V16.5L12 21L20 16.5V6.5" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <div className="text-white font-bold text-sm">{plan.cpu}</div>
                      <div className="text-gray-400 text-xs">CPU</div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-xl flex flex-col items-center">
                      <div className="text-blue-400 mb-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M8 8H10V16H8V8Z" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M14 8H16V16H14V8Z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <div className="text-white font-bold text-sm">{plan.ram}</div>
                      <div className="text-gray-400 text-xs">RAM</div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-xl flex flex-col items-center">
                      <div className="text-blue-400 mb-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4Z" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z" fill="currentColor" />
                          <path d="M9 16C9.55228 16 10 15.5523 10 15C10 14.4477 9.55228 14 9 14C8.44772 14 8 14.4477 8 15C8 15.5523 8.44772 16 9 16Z" fill="currentColor" />
                          <path d="M15 10C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="text-white font-bold text-sm">{plan.storage}</div>
                      <div className="text-gray-400 text-xs">SSD</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-6 mr-2">
                          {idx === 0 ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
                              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          ) : idx === 1 ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
                              <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                          ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
                              <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
                              <path d="M16 19C16 16.7909 14.2091 15 12 15C9.79086 15 8 16.7909 8 19" stroke="currentColor" strokeWidth="1.5" />
                              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                          )}
                        </div>
                        <div className="text-gray-400">{feature.label}:</div>
                        <div className="ml-2 text-white">{feature.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <div className="text-gray-400 text-xs">Starting from</div>
                      <div className="text-white font-bold text-lg">{plan.price}</div>
                    </div>
                    <div>
                      {plan.available && (
                        <div className="flex items-center text-green-500 text-xs">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></div>
                          Available Now
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/order?service=minecraft&plan=${plan.name.toLowerCase()}`}
                    className="block w-full py-3 px-6 text-center rounded-lg font-medium transition-colors duration-300 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Learn More
                    <svg className="ml-2 inline-block w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
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
                question: "How do I install mods on my Minecraft server?",
                answer: "Our control panel includes a one-click mod installer that allows you to easily install popular modpacks and plugins. You can also manually upload mods via FTP or our web-based file manager."
              },
              {
                question: "Can my friends on Bedrock Edition join my Java server?",
                answer: "Yes, with our GeyserMC plugin integration, you can allow Bedrock Edition players to join your Java Edition server. This feature is available on all plans at no additional cost."
              },
              {
                question: "How many players can join my Minecraft server?",
                answer: "The player capacity depends on your chosen plan, ranging from 20 players on our Basic plan to 120+ on our Ultimate plan. The actual performance may vary based on the number of mods and plugins installed."
              },
              {
                question: "Can I upgrade my server if I need more resources?",
                answer: "Absolutely! You can upgrade your plan at any time from your control panel. The upgrade process takes just a few minutes and doesn't cause any data loss or significant downtime."
              },
              {
                question: "Do you provide backups of my Minecraft world?",
                answer: "Yes, we perform daily automated backups of your server. You can also create manual backups at any time through the control panel, and restore from any backup point with just a few clicks."
              },
              {
                question: "Can I run custom server plugins?",
                answer: "Yes, all our Minecraft hosting plans support custom plugins and mods. You can easily install them through our control panel or upload them manually via FTP access."
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Minecraft Adventure?</h2>
            <p className="text-xl text-gray-300 mb-8">Deploy your Minecraft server in minutes and start playing with your friends today.</p>
            <Link 
              href="/order?service=minecraft"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Order Now
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

export default MinecraftPage; 