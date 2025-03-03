"use client";

import React from 'react';
import Link from 'next/link';
import { FaCheck, FaServer, FaShieldAlt, FaNetworkWired, FaRocket, FaCog } from 'react-icons/fa';
import { SiIntel, SiAmd } from 'react-icons/si';

const DedicatedServerPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            High-Performance <span className="text-green-400">Dedicated Server</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Maximize your project's performance with our powerful dedicated server solutions.
            Full control, enhanced security, and superior hardware with 24/7 technical support.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <FaRocket className="text-green-400 text-4xl mr-4" />
              <h3 className="text-xl font-semibold text-white">Superior Performance</h3>
            </div>
            <p className="text-gray-300">
              Experience maximum speed and performance with dedicated processors, large RAM capacity, and NVMe SSD storage.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <FaCog className="text-green-400 text-4xl mr-4" />
              <h3 className="text-xl font-semibold text-white">Full Control</h3>
            </div>
            <p className="text-gray-300">
              Get complete control over your server with full root access, custom OS options, and the freedom to install any software.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-green-400 text-4xl mr-4" />
              <h3 className="text-xl font-semibold text-white">Advanced Security</h3>
            </div>
            <p className="text-gray-300">
              Your server is protected with advanced DDoS protection, hardware firewall, regular security updates, and backup options.
            </p>
          </div>
        </div>

        {/* Server Types */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Dedicated Server</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Intel Servers */}
            <div className="bg-gray-800/30 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-800/30 to-blue-600/30 py-6 px-8">
                <div className="flex items-center">
                  <SiIntel className="text-blue-400 text-4xl mr-4" />
                  <h3 className="text-2xl font-bold text-white">Intel Servers</h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 gap-8">
                  {/* Intel Xeon */}
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-white">Intel Xeon</h4>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">$249.99<span className="text-gray-400 text-lg">/month</span></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <FaCheck className="text-blue-400 mr-3" />
                        <span className="text-gray-300">Intel Xeon E-2388G (8C/16T, 3.2 GHz, 5.1 GHz Turbo)</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-blue-400 mr-3" />
                        <span className="text-gray-300">64GB DDR4 ECC RAM</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-blue-400 mr-3" />
                        <span className="text-gray-300">2 x 1TB NVMe SSD (RAID-1)</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-blue-400 mr-3" />
                        <span className="text-gray-300">1Gbps Unmetered Connection</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-blue-400 mr-3" />
                        <span className="text-gray-300">DDoS Protection Included</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-blue-400 mr-3" />
                        <span className="text-gray-300">24/7 Technical Support</span>
                      </div>
                    </div>
                    
                    <Link 
                      href="/contact"
                      className="block text-center py-3 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition-colors duration-200"
                    >
                      Order Now
                    </Link>
                  </div>
                  
                  {/* Intel Core */}
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-white">Intel Core</h4>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">$179.99<span className="text-gray-400 text-lg">/month</span></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <FaCheck className="text-blue-400 mr-3" />
                        <span className="text-gray-300">Intel Core i9-13900K (24C/32T, 3.0 GHz, 5.8 GHz Turbo)</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-blue-400 mr-3" />
                        <span className="text-gray-300">32GB DDR5 RAM</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-blue-400 mr-3" />
                        <span className="text-gray-300">1TB NVMe SSD</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-blue-400 mr-3" />
                        <span className="text-gray-300">1Gbps Connection (10TB/month)</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-blue-400 mr-3" />
                        <span className="text-gray-300">Basic DDoS Protection</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-blue-400 mr-3" />
                        <span className="text-gray-300">24/7 Technical Support</span>
                      </div>
                    </div>
                    
                    <Link 
                      href="/contact"
                      className="block text-center py-3 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition-colors duration-200"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AMD Servers */}
            <div className="bg-gray-800/30 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-800/30 to-red-600/30 py-6 px-8">
                <div className="flex items-center">
                  <SiAmd className="text-red-400 text-4xl mr-4" />
                  <h3 className="text-2xl font-bold text-white">AMD Ryzen Servers</h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 gap-8">
                  {/* Ryzen Pro */}
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-white">Ryzen Pro</h4>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">$199.99<span className="text-gray-400 text-lg">/month</span></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <FaCheck className="text-red-400 mr-3" />
                        <span className="text-gray-300">AMD Ryzen 9 7950X (16C/32T, 4.5 GHz, 5.7 GHz Turbo)</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-red-400 mr-3" />
                        <span className="text-gray-300">64GB DDR5 RAM</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-red-400 mr-3" />
                        <span className="text-gray-300">2 x 1TB NVMe SSD (RAID-1)</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-red-400 mr-3" />
                        <span className="text-gray-300">1Gbps Unmetered Connection</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-red-400 mr-3" />
                        <span className="text-gray-300">DDoS Protection Included</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-red-400 mr-3" />
                        <span className="text-gray-300">24/7 Technical Support</span>
                      </div>
                    </div>
                    
                    <Link 
                      href="/contact"
                      className="block text-center py-3 px-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-500 transition-colors duration-200"
                    >
                      Order Now
                    </Link>
                  </div>
                  
                  {/* Ryzen Enterprise */}
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-white">Ryzen Enterprise</h4>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">$349.99<span className="text-gray-400 text-lg">/month</span></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <FaCheck className="text-red-400 mr-3" />
                        <span className="text-gray-300">AMD Ryzen Threadripper 5975WX (32C/64T, 3.6 GHz, 4.5 GHz Turbo)</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-red-400 mr-3" />
                        <span className="text-gray-300">128GB DDR4 RAM</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-red-400 mr-3" />
                        <span className="text-gray-300">2 x 2TB NVMe SSD (RAID-1)</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-red-400 mr-3" />
                        <span className="text-gray-300">10Gbps Unmetered Connection</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-red-400 mr-3" />
                        <span className="text-gray-300">Advanced DDoS Protection</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheck className="text-red-400 mr-3" />
                        <span className="text-gray-300">24/7 Priority Technical Support</span>
                      </div>
                    </div>
                    
                    <Link 
                      href="/contact"
                      className="block text-center py-3 px-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-500 transition-colors duration-200"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Dedicated Servers?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <FaServer className="text-green-400 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-white">Dedicated Resources</h3>
              </div>
              <p className="text-gray-300">
                Get all the power of a physical server exclusively for your projects. No resource sharing means maximum performance at all times.
              </p>
            </div>
            
            <div className="bg-gray-800/30 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <FaNetworkWired className="text-green-400 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-white">High Bandwidth</h3>
              </div>
              <p className="text-gray-300">
                Enjoy unmetered bandwidth with dedicated network connections up to 10Gbps for ultra-fast data transfer and low latency.
              </p>
            </div>
            
            <div className="bg-gray-800/30 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-green-400 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-white">Advanced Security</h3>
              </div>
              <p className="text-gray-300">
                Benefit from enterprise-grade security with DDoS protection, hardware firewalls, and regular security updates for your server.
              </p>
            </div>
            
            <div className="bg-gray-800/30 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <FaRocket className="text-green-400 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-white">High Performance</h3>
              </div>
              <p className="text-gray-300">
                Experience exceptional speed and processing power with high-end processors, large RAM capacity, and NVMe SSD storage.
              </p>
            </div>
            
            <div className="bg-gray-800/30 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <FaCog className="text-green-400 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-white">Customization</h3>
              </div>
              <p className="text-gray-300">
                Full control with root access allows you to customize your server with any OS, applications, and configurations.
              </p>
            </div>
            
            <div className="bg-gray-800/30 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <FaServer className="text-green-400 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-white">Scalability</h3>
              </div>
              <p className="text-gray-300">
                As your needs grow, easily upgrade your hardware or add additional servers with our flexible scaling options.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">What's the difference between dedicated servers and VPS?</h3>
              <p className="text-gray-300">
                A dedicated server provides all the resources of a physical machine exclusively for your use, while a VPS shares a physical server with other users in isolated virtual environments. Dedicated servers offer better performance, more resources, and complete control.
              </p>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Where are your servers located?</h3>
              <p className="text-gray-300">
                Our dedicated servers are available in data centers across North America, Europe, and Asia. You can choose the location that best suits your needs for optimal performance and latency requirements.
              </p>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Can I choose my operating system?</h3>
              <p className="text-gray-300">
                Yes, you can install any operating system you prefer, including various Linux distributions (Ubuntu, CentOS, Debian, etc.) and Windows Server options. We can pre-install your chosen OS or you can install it yourself.
              </p>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Do you provide technical support?</h3>
              <p className="text-gray-300">
                Yes, all our dedicated server plans include 24/7 technical support. Our expert team is available to help with hardware issues, network problems, and basic server management. Enterprise plans include priority support.
              </p>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer backup services?</h3>
              <p className="text-gray-300">
                Yes, we offer optional backup services for all dedicated servers. You can choose daily or weekly backups stored in a separate location for maximum data security. Custom backup solutions are also available upon request.
              </p>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Can I upgrade my server later?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade your dedicated server as your needs grow. We offer flexible options for hardware upgrades including CPU, RAM, storage, and network capacity. Most upgrades require minimal downtime.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready for ultimate performance with <span className="text-green-400">dedicated servers</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get in touch with our team to discuss your specific needs and find the perfect dedicated server solution for your projects.
              Custom configurations available!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-3 bg-green-500 text-black font-medium rounded-md hover:bg-green-400 transition-colors duration-200"
              >
                Explore Dedicated Servers
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-3 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-600 transition-colors duration-200"
              >
                Contact for Custom Offers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedServerPage; 