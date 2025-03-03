"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaCheck, FaServer, FaRocket, FaShieldAlt, FaNetworkWired } from 'react-icons/fa';
import { SiSpeedtest, SiIntel, SiAmd } from 'react-icons/si';
import { FaMicrochip } from 'react-icons/fa';

const VPSHostingPage = () => {
  const [selectedProcessor, setSelectedProcessor] = useState('intel');
  
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful VPS <span className="text-green-400">Hosting</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Host your projects securely with SSD-based, high-performance, and scalable VPS solutions.
            Experience the hostifun difference with full root access and 99.9% uptime guarantee.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <FaMicrochip className="text-green-400 text-4xl mr-4" />
              <h3 className="text-xl font-semibold text-white">High Performance</h3>
            </div>
            <p className="text-gray-300">
              Offers maximum speed and performance with NVMe SSD disks, latest Intel Xeon and AMD Ryzen processors, and DDR4 RAM.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-green-400 text-4xl mr-4" />
              <h3 className="text-xl font-semibold text-white">Advanced Security</h3>
            </div>
            <p className="text-gray-300">
              Your data is always secure with DDoS protection, regular backups, firewall, and SSL certificates.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <FaNetworkWired className="text-green-400 text-4xl mr-4" />
              <h3 className="text-xl font-semibold text-white">Global Network</h3>
            </div>
            <p className="text-gray-300">
              Low latency and fast access with our worldwide data centers and 10Gbps network connections.
            </p>
          </div>
        </div>

        {/* Processor Selection */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Choose Your Processor</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedProcessor('intel')}
              className={`flex items-center justify-center py-3 px-6 rounded-lg ${
                selectedProcessor === 'intel' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition-colors duration-200`}
            >
              <SiIntel className="mr-2 text-xl" />
              Intel Xeon
            </button>
            <button
              onClick={() => setSelectedProcessor('amd')}
              className={`flex items-center justify-center py-3 px-6 rounded-lg ${
                selectedProcessor === 'amd' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition-colors duration-200`}
            >
              <SiAmd className="mr-2 text-xl" />
              AMD Ryzen
            </button>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">VPS Hosting Plans</h2>
          
          {/* Table View for Desktop */}
          <div className="hidden lg:block">
            <div className="bg-gray-800/50 rounded-xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-7 bg-gray-700/50 py-4 border-b border-gray-600">
                <div className="px-6 font-semibold text-gray-300">Plan</div>
                <div className="px-6 font-semibold text-gray-300">CPU</div>
                <div className="px-6 font-semibold text-gray-300">RAM</div>
                <div className="px-6 font-semibold text-gray-300">Storage</div>
                <div className="px-6 font-semibold text-gray-300">Bandwidth</div>
                <div className="px-6 font-semibold text-gray-300">Price</div>
                <div className="px-6"></div>
              </div>
              
              {/* VPS Starter */}
              <div className="grid grid-cols-7 py-6 border-b border-gray-700 hover:bg-gray-700/30 transition-colors duration-200">
                <div className="px-6 font-semibold text-white">VPS Starter</div>
                <div className="px-6 text-gray-300">
                  {selectedProcessor === 'intel' ? '2 vCPU Intel Xeon' : '2 vCPU AMD Ryzen'}
                </div>
                <div className="px-6 text-gray-300">4GB DDR4</div>
                <div className="px-6 text-gray-300">50GB NVMe SSD</div>
                <div className="px-6 text-gray-300">2TB Traffic/Month</div>
                <div className="px-6 text-green-400 font-bold">$19.99/mo</div>
                <div className="px-6">
                  <Link 
                    href="/contact"
                    className="inline-block text-center py-2 px-4 bg-green-500 text-black font-medium rounded-md hover:bg-green-400 transition-colors duration-200"
                  >
                    Order
                  </Link>
                </div>
              </div>
              
              {/* VPS Pro */}
              <div className="grid grid-cols-7 py-6 border-b border-gray-700 bg-gray-700/20 hover:bg-gray-700/30 transition-colors duration-200">
                <div className="px-6 font-semibold text-white flex items-center">
                  VPS Pro
                  <span className="ml-2 px-2 py-1 text-xs font-bold bg-green-500 text-black rounded">POPULAR</span>
                </div>
                <div className="px-6 text-gray-300">
                  {selectedProcessor === 'intel' ? '4 vCPU Intel Xeon' : '4 vCPU AMD Ryzen'}
                </div>
                <div className="px-6 text-gray-300">8GB DDR4</div>
                <div className="px-6 text-gray-300">100GB NVMe SSD</div>
                <div className="px-6 text-gray-300">4TB Traffic/Month</div>
                <div className="px-6 text-green-400 font-bold">$39.99/mo</div>
                <div className="px-6">
                  <Link 
                    href="/contact"
                    className="inline-block text-center py-2 px-4 bg-green-500 text-black font-medium rounded-md hover:bg-green-400 transition-colors duration-200"
                  >
                    Order
                  </Link>
                </div>
              </div>
              
              {/* VPS Enterprise */}
              <div className="grid grid-cols-7 py-6 border-b border-gray-700 hover:bg-gray-700/30 transition-colors duration-200">
                <div className="px-6 font-semibold text-white">VPS Enterprise</div>
                <div className="px-6 text-gray-300">
                  {selectedProcessor === 'intel' ? '8 vCPU Intel Xeon' : '8 vCPU AMD Ryzen'}
                </div>
                <div className="px-6 text-gray-300">16GB DDR4</div>
                <div className="px-6 text-gray-300">200GB NVMe SSD</div>
                <div className="px-6 text-gray-300">8TB Traffic/Month</div>
                <div className="px-6 text-green-400 font-bold">$79.99/mo</div>
                <div className="px-6">
                  <Link 
                    href="/contact"
                    className="inline-block text-center py-2 px-4 bg-green-500 text-black font-medium rounded-md hover:bg-green-400 transition-colors duration-200"
                  >
                    Order
                  </Link>
                </div>
              </div>
              
              {/* VPS Advanced */}
              <div className="grid grid-cols-7 py-6 hover:bg-gray-700/30 transition-colors duration-200">
                <div className="px-6 font-semibold text-white">VPS Advanced</div>
                <div className="px-6 text-gray-300">
                  {selectedProcessor === 'intel' ? '12 vCPU Intel Xeon' : '12 vCPU AMD Ryzen'}
                </div>
                <div className="px-6 text-gray-300">32GB DDR4</div>
                <div className="px-6 text-gray-300">400GB NVMe SSD</div>
                <div className="px-6 text-gray-300">12TB Traffic/Month</div>
                <div className="px-6 text-green-400 font-bold">$129.99/mo</div>
                <div className="px-6">
                  <Link 
                    href="/contact"
                    className="inline-block text-center py-2 px-4 bg-green-500 text-black font-medium rounded-md hover:bg-green-400 transition-colors duration-200"
                  >
                    Order
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile View */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* VPS Starter */}
            <div className="bg-gray-800/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:bg-gray-800/50 border border-gray-700 hover:border-green-500/50">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">VPS Starter</h3>
                <div className="flex items-end mb-6">
                  <span className="text-3xl font-bold text-white">$19.99</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">
                      {selectedProcessor === 'intel' ? '2 vCPU Intel Xeon' : '2 vCPU AMD Ryzen'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">4GB DDR4 RAM</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">50GB NVMe SSD</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">2TB Traffic/Month</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">DDoS Protection</span>
                  </div>
                </div>
                
                <Link 
                  href="/contact"
                  className="block text-center py-3 px-4 bg-green-500 text-black font-medium rounded-md hover:bg-green-400 transition-colors duration-200"
                >
                  Order Now
                </Link>
              </div>
            </div>
            
            {/* VPS Pro */}
            <div className="bg-gray-800/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:bg-gray-800/50 border border-gray-700 hover:border-green-500/50 relative">
              <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">VPS Pro</h3>
                <div className="flex items-end mb-6">
                  <span className="text-3xl font-bold text-white">$39.99</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">
                      {selectedProcessor === 'intel' ? '4 vCPU Intel Xeon' : '4 vCPU AMD Ryzen'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">8GB DDR4 RAM</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">100GB NVMe SSD</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">4TB Traffic/Month</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">Advanced DDoS Protection</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">Automatic Backup</span>
                  </div>
                </div>
                
                <Link 
                  href="/contact"
                  className="block text-center py-3 px-4 bg-green-500 text-black font-medium rounded-md hover:bg-green-400 transition-colors duration-200"
                >
                  Order Now
                </Link>
              </div>
            </div>

            {/* VPS Enterprise */}
            <div className="bg-gray-800/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:bg-gray-800/50 border border-gray-700 hover:border-green-500/50">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">VPS Enterprise</h3>
                <div className="flex items-end mb-6">
                  <span className="text-3xl font-bold text-white">$79.99</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">
                      {selectedProcessor === 'intel' ? '8 vCPU Intel Xeon' : '8 vCPU AMD Ryzen'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">16GB DDR4 RAM</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">200GB NVMe SSD</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">8TB Traffic/Month</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">Premium DDoS Protection</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">Daily Backup</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">Priority Support</span>
                  </div>
                </div>
                
                <Link 
                  href="/contact"
                  className="block text-center py-3 px-4 bg-green-500 text-black font-medium rounded-md hover:bg-green-400 transition-colors duration-200"
                >
                  Order Now
                </Link>
              </div>
            </div>

            {/* VPS Advanced */}
            <div className="bg-gray-800/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:bg-gray-800/50 border border-gray-700 hover:border-green-500/50">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">VPS Advanced</h3>
                <div className="flex items-end mb-6">
                  <span className="text-3xl font-bold text-white">$129.99</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">
                      {selectedProcessor === 'intel' ? '12 vCPU Intel Xeon' : '12 vCPU AMD Ryzen'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">32GB DDR4 RAM</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">400GB NVMe SSD</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">12TB Traffic/Month</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">Premium DDoS Protection</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">Daily Backup</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">Priority Support</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-400 mr-3" />
                    <span className="text-gray-300">Dedicated Resources</span>
                  </div>
                </div>
                
                <Link 
                  href="/contact"
                  className="block text-center py-3 px-4 bg-green-500 text-black font-medium rounded-md hover:bg-green-400 transition-colors duration-200"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                  <h2 className="text-3xl font-bold text-white mb-6">Superior Performance, <span className="text-green-400">Reliable</span> Infrastructure</h2>
                  <p className="text-gray-300 mb-6">
                    hostifun VPS servers are optimized for your business or project needs. 
                    We stand out with state-of-the-art hardware, high security measures, and flexible configuration options.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <SiSpeedtest className="text-green-400 mr-3 text-xl" />
                      <div>
                        <span className="block text-white font-medium">NVMe SSD Storage</span>
                        <span className="text-gray-400 text-sm">5-7 times faster than SATA SSDs</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <FaServer className="text-green-400 mr-3 text-xl" />
                      <div>
                        <span className="block text-white font-medium">Modern Hardware</span>
                        <span className="text-gray-400 text-sm">Latest generation Intel Xeon and AMD Ryzen processors</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <FaRocket className="text-green-400 mr-3 text-xl" />
                      <div>
                        <span className="block text-white font-medium">High Availability</span>
                        <span className="text-gray-400 text-sm">Uninterrupted operation with 99.9% uptime guarantee</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-800/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Performance Comparison</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">NVMe SSD</span>
                          <span className="text-gray-300">3500MB/s</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">SATA SSD</span>
                          <span className="text-gray-300">550MB/s</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">HDD</span>
                          <span className="text-gray-300">150MB/s</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <hr className="my-6 border-gray-700" />
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Processor Performance</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300">Intel Xeon</span>
                            <span className="text-gray-300">Optimized for reliability</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300">AMD Ryzen</span>
                            <span className="text-gray-300">Great multi-thread performance</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">What is a VPS?</h3>
              <p className="text-gray-300">
                A VPS (Virtual Private Server) is a virtualized server that simulates a dedicated server within a shared hosting environment. It offers dedicated resources and greater control compared to shared hosting.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Do I need technical knowledge to manage a VPS?</h3>
              <p className="text-gray-300">
                Basic technical knowledge is helpful, but we offer managed VPS options where our team handles the technical aspects. For unmanaged VPS, you'll need familiarity with server administration.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Can I upgrade my VPS plan later?</h3>
              <p className="text-gray-300">
                Yes, you can easily upgrade to a higher plan as your needs grow. We offer seamless upgrades with minimal downtime and our support team can assist with the transition.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">What operating systems are available?</h3>
              <p className="text-gray-300">
                We support a wide range of operating systems including various Linux distributions (Ubuntu, CentOS, Debian, etc.) and Windows Server. Custom OS installations are also possible upon request.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Is my data backed up?</h3>
              <p className="text-gray-300">
                We offer daily backups with our Pro, Enterprise, and Advanced plans. For the Starter plan, you can add backup service for an additional fee. We recommend maintaining your own backups as well.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">What's the difference between Intel and AMD processors?</h3>
              <p className="text-gray-300">
                Intel Xeon processors generally offer excellent single-core performance and stability, while AMD Ryzen processors excel in multi-threaded workloads and often provide better price-to-performance ratio for certain applications.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to boost your <span className="text-green-400">projects</span> with a high-performance VPS?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get started with our VPS hosting today. Choose the plan that fits your needs and scale as you grow.
              All plans come with 24/7 support and a 30-day money-back guarantee.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-3 bg-green-500 text-black font-medium rounded-md hover:bg-green-400 transition-colors duration-200"
              >
                Get Started Now
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-3 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-600 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPSHostingPage; 