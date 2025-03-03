"use client";

import React, { useState, useEffect } from 'react';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaPaperPlane, 
  FaUser, 
  FaCommentDots 
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: '',
    plan: ''
  });

  // Add useEffect to handle query parameters
  useEffect(() => {
    // Check if we're in browser environment
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const service = params.get('service');
      const plan = params.get('plan');

      if (service || plan) {
        setFormData(prevState => ({
          ...prevState,
          service: service || '',
          message: plan 
            ? `I'm interested in the ${plan} plan for ${service || 'a service'}.` 
            : prevState.message
        }));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic
    console.log('Form submitted:', formData);
    alert(`Thank you for your message about the ${formData.service} ${formData.plan} plan! We will get back to you soon.`);
    
    // Optional: Clear form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
      service: '',
      plan: ''
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-blue-400">Hostifun</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're here to help! Reach out to us with any questions, support requests, or partnership inquiries.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="sr-only">Name</label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="block w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="block w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="sr-only">Message</label>
                <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                  <FaCommentDots className="text-gray-400" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="block w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Hidden inputs for service and plan */}
              <input 
                type="hidden" 
                name="service" 
                value={formData.service} 
              />
              <input 
                type="hidden" 
                name="plan" 
                value={formData.plan} 
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <FaPaperPlane className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 