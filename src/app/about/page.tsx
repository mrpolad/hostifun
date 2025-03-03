"use client";

import React from 'react';
import Link from 'next/link';
import { 
  FaRocket as FaMission, 
  FaUsers, 
  FaHeart, 
  FaShieldAlt 
} from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Hostifun</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a passionate team dedicated to providing cutting-edge hosting solutions that empower businesses and developers worldwide.
          </p>
        </div>

        {/* Mission and Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <FaMission className="text-blue-400 text-4xl mr-4" />
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300">
              At Hostifun, our mission is to democratize access to high-performance, reliable, and secure hosting solutions. We strive to provide innovative infrastructure that enables businesses, developers, and creators to bring their digital ideas to life without technical barriers.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <FaHeart className="text-green-400 text-4xl mr-4" />
              <h2 className="text-2xl font-bold text-white">Our Values</h2>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <FaShieldAlt className="text-green-400 mr-3 mt-1" />
                <span>Unwavering commitment to security and reliability</span>
              </li>
              <li className="flex items-start">
                <FaUsers className="text-blue-400 mr-3 mt-1" />
                <span>Customer-centric approach with personalized support</span>
              </li>
              <li className="flex items-start">
                <FaHeart className="text-red-400 mr-3 mt-1" />
                <span>Passion for technology and continuous innovation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Achievements and Milestones */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "2018", title: "Founded", description: "Established with a vision to revolutionize hosting services" },
              { number: "5000+", title: "Customers", description: "Serving businesses and developers globally" },
              { number: "99.99%", title: "Uptime", description: "Consistent high-availability infrastructure" },
              { number: "24/7", title: "Support", description: "Dedicated customer support team" }
            ].map((achievement, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-400 mb-4">{achievement.number}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl p-10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6">
              Join the <span className="text-blue-400">Hostifun</span> Community
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you're a startup, enterprise, or individual developer, we're here to support your digital journey.
              Experience hosting that grows with you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-400 transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link 
                href="/features"
                className="px-8 py-3 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-600 transition-colors duration-200"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 