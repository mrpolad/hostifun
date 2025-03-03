import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeatureSection />
      
      {/* Services Section */}
      <div className="bg-black/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our <span className="text-blue-400">Services</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
              Specialized hosting solutions designed for performance and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Minecraft Hosting */}
            <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-800/40 transition-all duration-300 border border-gray-800 hover:border-blue-900 group transform hover:-translate-y-1">
              <div className="h-52 w-full mb-6 relative overflow-hidden rounded-lg bg-black/30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-900/20 rounded-xl flex items-center justify-center">
                    <svg className="w-14 h-14 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Minecraft Hosting</h3>
              <p className="text-gray-300 mb-5">Premium Minecraft server hosting with one-click modpack installation, automatic backups, and powerful hardware for lag-free gameplay.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Java & Bedrock support
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Custom control panel
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  DDoS protection
                </li>
              </ul>
              <Link href="/minecraft" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 w-full">
                View Plans
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Discord Bot Hosting */}
            <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-800/40 transition-all duration-300 border border-gray-800 hover:border-blue-900 group transform hover:-translate-y-1">
              <div className="h-52 w-full mb-6 relative overflow-hidden rounded-lg bg-black/30">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-indigo-900/20 rounded-xl flex items-center justify-center">
                    <svg className="w-14 h-14 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Discord Bot Hosting</h3>
              <p className="text-gray-300 mb-5">Reliable hosting for your Discord bots with 24/7 uptime, easy deployment, and support for all major programming languages.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Node.js, Python & Java
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Automatic restart
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  24/7 monitoring
                </li>
              </ul>
              <Link href="/discord-bots" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full">
                View Plans
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Web Hosting */}
            <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-800/40 transition-all duration-300 border border-gray-800 hover:border-blue-900 group transform hover:-translate-y-1">
              <div className="h-52 w-full mb-6 relative overflow-hidden rounded-lg bg-black/30">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-purple-900/20 rounded-xl flex items-center justify-center">
                    <svg className="w-14 h-14 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Web Hosting</h3>
              <p className="text-gray-300 mb-5">Fast and reliable web hosting with SSD storage, free SSL certificates, and one-click CMS installation for your website or gaming community.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  cPanel included
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free SSL certificates
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  1-Click WordPress
          </li>
              </ul>
              <Link href="/web-hosting" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 w-full">
                View Plans
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Performance Comparison Section */}
      <div className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block px-6 py-1.5 rounded-full bg-purple-900/60 text-purple-300 text-sm font-medium mb-4 tracking-wider uppercase">
              Hosting Performance
            </span>
            <h2 className="text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-[#8a4fff] to-[#4facfe] inline-block text-transparent bg-clip-text">
                Unleash Server Potential
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto opacity-90">
              Discover the ultimate comparison of game server hosting solutions across top providers
            </p>
          </div>
          
          <div className="mt-16 bg-gray-900/40 rounded-3xl border border-gray-800/50 overflow-hidden backdrop-blur-sm">
            <div className="grid grid-cols-5 py-4 px-8 border-b border-gray-800/50 text-gray-300 font-medium">
              <div className="col-span-1">Provider</div>
              <div className="col-span-1">Server Specs</div>
              <div className="col-span-1">Price</div>
              <div className="col-span-1">Performance</div>
              <div className="col-span-1">Recommended</div>
            </div>
            
            {/* hostifun.com Row */}
            <div className="grid grid-cols-5 py-6 px-8 border-b border-gray-800/50 items-center">
              <div className="col-span-1 flex items-center">
                <div className="w-12 h-12 bg-blue-900/30 rounded-md flex items-center justify-center mr-4 text-center">
                  <span className="text-blue-400 font-bold text-2xl">H</span>
                </div>
                <div>
                  <div className="text-white font-medium">hostifun.com</div>
                  <div className="text-gray-400 text-sm">Game Hosting</div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="text-white font-medium">AMD Ryzen 9 9950X</div>
                <div className="text-gray-400 text-sm">DDR5 RAM, NVMe, 10Gbps</div>
              </div>
              <div className="col-span-1">
                <div className="text-blue-400 font-bold text-xl">$1.5/GB</div>
                <div className="text-gray-400 text-sm">per GB</div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center space-x-4">
                  <div className="w-36 bg-gray-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <div className="text-white font-medium">100%</div>
                </div>
              </div>
              <div className="col-span-1">
                <span className="bg-blue-900/30 text-blue-400 text-sm px-4 py-1 rounded-full">Recommended</span>
              </div>
            </div>
            
            {/* Lilypad Row */}
            <div className="grid grid-cols-5 py-6 px-8 border-b border-gray-800/50 items-center">
              <div className="col-span-1 flex items-center">
                <div className="w-12 h-12 bg-green-900/30 rounded-md flex items-center justify-center mr-4 text-center">
                  <span className="text-green-400 font-bold text-2xl">L</span>
                </div>
                <div>
                  <div className="text-white font-medium">Lilypad</div>
                  <div className="text-gray-400 text-sm">Game Hosting</div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="text-white font-medium">AMD Ryzen 9 7950X</div>
                <div className="text-gray-400 text-sm">DDR5 RAM, NVMe, 1Gbps</div>
              </div>
              <div className="col-span-1">
                <div className="text-green-400 font-bold text-xl">$2.75/GB</div>
                <div className="text-gray-400 text-sm">per GB</div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center space-x-4">
                  <div className="w-36 bg-gray-800 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="text-white font-medium">85%</div>
                </div>
              </div>
              <div className="col-span-1">
                <span className="bg-gray-800/60 text-gray-400 text-sm px-4 py-1 rounded-full">-</span>
              </div>
            </div>
            
            {/* Apex Hosting Row */}
            <div className="grid grid-cols-5 py-6 px-8 border-b border-gray-800/50 items-center">
              <div className="col-span-1 flex items-center">
                <div className="w-12 h-12 bg-yellow-900/30 rounded-md flex items-center justify-center mr-4 text-center">
                  <span className="text-yellow-400 font-bold text-2xl">A</span>
                </div>
                <div>
                  <div className="text-white font-medium">Apex Hosting</div>
                  <div className="text-gray-400 text-sm">Game Hosting</div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="text-white font-medium">AMD Ryzen 7 5800X</div>
                <div className="text-gray-400 text-sm">DDR4 RAM, SSD, 1Gbps</div>
              </div>
              <div className="col-span-1">
                <div className="text-yellow-400 font-bold text-xl">$5/GB</div>
                <div className="text-gray-400 text-sm">per GB</div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center space-x-4">
                  <div className="w-36 bg-gray-800 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="text-white font-medium">65%</div>
                </div>
              </div>
              <div className="col-span-1">
                <span className="bg-gray-800/60 text-gray-400 text-sm px-4 py-1 rounded-full">-</span>
              </div>
            </div>
            
            {/* Bisect Hosting Row */}
            <div className="grid grid-cols-5 py-6 px-8 border-b border-gray-800/50 items-center">
              <div className="col-span-1 flex items-center">
                <div className="w-12 h-12 bg-orange-900/30 rounded-md flex items-center justify-center mr-4 text-center">
                  <span className="text-orange-400 font-bold text-2xl">B</span>
                </div>
                <div>
                  <div className="text-white font-medium">Bisect Hosting</div>
                  <div className="text-gray-400 text-sm">Game Hosting</div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="text-white font-medium">Intel Xeon E5-2643</div>
                <div className="text-gray-400 text-sm">DDR4 RAM, SSD, 1Gbps</div>
              </div>
              <div className="col-span-1">
                <div className="text-orange-400 font-bold text-xl">$5/GB</div>
                <div className="text-gray-400 text-sm">per GB</div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center space-x-4">
                  <div className="w-36 bg-gray-800 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <div className="text-white font-medium">45%</div>
                </div>
              </div>
              <div className="col-span-1">
                <span className="bg-gray-800/60 text-gray-400 text-sm px-4 py-1 rounded-full">-</span>
              </div>
            </div>
            
            {/* Shockbyte Row */}
            <div className="grid grid-cols-5 py-6 px-8 items-center">
              <div className="col-span-1 flex items-center">
                <div className="w-12 h-12 bg-red-900/30 rounded-md flex items-center justify-center mr-4 text-center">
                  <span className="text-red-400 font-bold text-2xl">S</span>
                </div>
                <div>
                  <div className="text-white font-medium">Shockbyte</div>
                  <div className="text-gray-400 text-sm">Game Hosting</div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="text-white font-medium">Intel Xeon E-2236</div>
                <div className="text-gray-400 text-sm">DDR4 RAM, SSD, 1Gbps</div>
              </div>
              <div className="col-span-1">
                <div className="text-red-400 font-bold text-xl">$3/GB</div>
                <div className="text-gray-400 text-sm">per GB</div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center space-x-4">
                  <div className="w-36 bg-gray-800 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <div className="text-white font-medium">30%</div>
                </div>
              </div>
              <div className="col-span-1">
                <span className="bg-gray-800/60 text-gray-400 text-sm px-4 py-1 rounded-full">-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-900/30 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#141b2d] rounded-3xl p-12 shadow-xl border border-gray-800/30">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Get Started Now!
                </h2>
                <p className="text-gray-300 text-lg max-w-xl">
                  Set up your server in 3 steps and start your gaming adventure. 20% discount for the first month and 7-day money-back guarantee.
                </p>
              </div>
              <div className="flex flex-col space-y-4 w-full md:w-auto">
                <Link 
                  href="/deploy"
                  className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 w-full md:w-auto"
                >
                  Create Server
                </Link>
                <Link 
                  href="/pricing"
                  className="inline-flex justify-center items-center px-8 py-4 border border-gray-700/50 text-base font-medium rounded-lg shadow-lg text-white bg-transparent hover:bg-gray-800/50 w-full md:w-auto"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}
