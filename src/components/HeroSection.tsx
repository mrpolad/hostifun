"use client";

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative pt-24 pb-12 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 flex justify-center items-center z-0 opacity-10">
        <div className="grid grid-cols-2 gap-40">
          <div className="text-center">
            <h1 className="text-8xl font-bold text-gray-800/20">MINECRAFT</h1>
          </div>
          <div className="text-center">
            <h1 className="text-8xl font-bold text-gray-800/20">DISCORD</h1>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-900/30 rounded-full filter blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-800/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-700/20 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/70 to-black/80 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-900/40 backdrop-blur-sm mb-5">
            <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
            <span className="text-blue-300 text-sm font-medium uppercase tracking-wider">PREMIUM HOSTING</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Your Adventure <br />
            <span className="text-blue-400">Starts Here</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Elevate your gaming and development experience with our high-performance servers.
            Specialized in Minecraft, Discord Bots, and Web Hosting solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="/minecraft" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center transition duration-300 ease-in-out">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              Minecraft Hosting
            </Link>
            <Link href="/discord-bot" className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg flex items-center justify-center transition duration-300 ease-in-out">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Discord Bot Hosting
            </Link>
            <Link href="/web-hosting" className="px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white font-medium rounded-lg flex items-center justify-center transition duration-300 ease-in-out">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Web Hosting
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <Link href="/dashboard" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg shadow-blue-700/20">
              <span>Dashboard</span>
              <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 