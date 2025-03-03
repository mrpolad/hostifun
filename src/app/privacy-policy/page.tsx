"use client";

import React from 'react';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Privacy Policy</h1>
        <div className="text-right text-gray-400 mb-8">Last updated: September 1, 2023</div>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p>
            At hostifun, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
          </p>
          
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, billing address, and payment information.
            </li>
            <li>
              <strong>Account Information:</strong> Username, password, account settings, and account activity.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our website and services, including IP address, browser type, pages visited, time spent on pages, and other statistics.
            </li>
            <li>
              <strong>Device and Connection Information:</strong> Device type, operating system, and internet connection details.
            </li>
            <li>
              <strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information.
            </li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send administrative information, such as updates, security alerts, and support messages</li>
            <li>Respond to customer service requests and support needs</li>
            <li>Personalize your experience and deliver content relevant to your interests</li>
            <li>Monitor usage patterns and analyze trends to improve our website and services</li>
            <li>Prevent fraudulent transactions and monitor against unauthorized activities</li>
            <li>Send marketing communications (with your consent where required by law)</li>
          </ul>
          
          <h2>Disclosure of Your Information</h2>
          <p>We may share your personal information in the following situations:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, and other business partners who perform services on our behalf.
            </li>
            <li>
              <strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, acquisition, reorganization, or sale of assets.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information to comply with applicable laws and regulations, respond to legal processes, or fulfill government requests.
            </li>
            <li>
              <strong>Protection of Rights:</strong> We may disclose information to protect our rights, privacy, safety, or property, and that of our customers or others.
            </li>
          </ul>
          
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </p>
          
          <h2>Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will securely delete or anonymize it.
          </p>
          
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
          </p>
          
          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul>
            <li>The right to access, update, or delete your information</li>
            <li>The right to rectification (to correct or update your information)</li>
            <li>The right to object to or restrict the processing of your information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the contact information provided below.
          </p>
          
          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us. If we become aware that we have collected personal information from a child under 18 without verification of parental consent, we will take steps to remove that information from our servers.
          </p>
          
          <h2>International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have data protection laws that are different from those in your country. By using our services, you consent to the transfer of your information to these countries.
          </p>
          
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <a href="mailto:privacy@hostifun.com" className="text-green-400 hover:underline">privacy@hostifun.com</a>
          </p>
        </div>
        
        <div className="mt-12 text-center text-gray-400">
          <div className="flex justify-center space-x-8">
            <Link href="/terms-of-service" className="text-green-400 hover:underline">Terms of Service</Link>
            <Link href="/service-level-agreement" className="text-green-400 hover:underline">Service Level Agreement</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 