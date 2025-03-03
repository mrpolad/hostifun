import Link from 'next/link';

const FeaturesPage = () => {
  const featureCategories = [
    {
      title: "Performance",
      description: "Our infrastructure is built for speed and reliability, ensuring your servers run smoothly under any load.",
      features: [
        {
          title: "Enterprise-Grade Hardware",
          description: "We use the latest enterprise-grade hardware with Intel and AMD processors to ensure optimal performance.",
          icon: (
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          )
        },
        {
          title: "NVMe SSD Storage",
          description: "All servers run on NVMe SSD storage, providing blazing-fast read/write speeds for better server performance.",
          icon: (
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          )
        },
        {
          title: "Optimized Java",
          description: "Our Minecraft servers use custom-tuned JVM arguments for optimal garbage collection and memory usage.",
          icon: (
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        },
        {
          title: "Guaranteed CPU Resources",
          description: "We never oversell our servers, ensuring dedicated CPU cores for your game servers.",
          icon: (
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Security",
      description: "We implement multiple layers of security to protect your servers from threats and ensure data integrity.",
      features: [
        {
          title: "DDoS Protection",
          description: "Enterprise-grade DDoS protection with up to 1Tbps mitigation capacity to keep your servers online.",
          icon: (
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        },
        {
          title: "Automatic Backups",
          description: "Daily automatic backups of your entire server with 30-day retention and one-click restoration.",
          icon: (
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
          )
        },
        {
          title: "Secure Control Panel",
          description: "Our control panel features 2FA authentication and HTTPS encryption to keep your account safe.",
          icon: (
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          )
        },
        {
          title: "IP Filtering",
          description: "Optional IP whitelisting for your server's control panel and FTP access for extra security.",
          icon: (
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Easy Management",
      description: "Our intuitive control panel makes server management easy, even for beginners.",
      features: [
        {
          title: "One-Click Installers",
          description: "Install popular modpacks, plugins, and game versions with a single click.",
          icon: (
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
          )
        },
        {
          title: "File Manager",
          description: "Built-in file manager with syntax highlighting for easy configuration file editing.",
          icon: (
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )
        },
        {
          title: "Player Management",
          description: "Manage player permissions, bans, and whitelists directly from the control panel.",
          icon: (
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
        },
        {
          title: "Scheduled Tasks",
          description: "Set up automated server restarts, backups, and other maintenance tasks on your desired schedule.",
          icon: (
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Specialized Services",
      description: "We offer specialized features for each of our core services: Minecraft, Discord Bots, and Web Hosting.",
      features: [
        {
          title: "Minecraft Support",
          description: "Full support for Vanilla, Spigot, Paper, Forge, Fabric, Modpacks, and Bedrock servers.",
          icon: (
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          )
        },
        {
          title: "Discord Bot Hosting",
          description: "Specialized hosting for Discord bots with Node.js, Python, and Java support with 24/7 uptime.",
          icon: (
            <svg className="h-6 w-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          title: "Web Hosting Services",
          description: "Fast and reliable web hosting with cPanel, free SSL certificates, and one-click CMS installations.",
          icon: (
            <svg className="h-6 w-6 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          )
        },
        {
          title: "Server Migration",
          description: "Free migration service to transfer your existing servers from another provider to Hostifun.",
          icon: (
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Powerful <span className="text-blue-400">Features</span> for Your Servers
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Explore the full range of features that make Hostifun the perfect choice for Minecraft, Discord bot, and web hosting needs.
          </p>
        </div>

        {/* Feature Categories */}
        <div className="space-y-24">
          {featureCategories.map((category, index) => (
            <div key={index} className="feature-category">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">{category.title}</h2>
                <p className="max-w-3xl mx-auto text-gray-300">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-800 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 h-12 w-12 bg-blue-900/40 rounded-md flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="ml-4 text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Setting up our Minecraft server was incredibly easy. The performance is amazing, and we've had zero downtime in 6 months.",
                author: "Alex Johnson",
                role: "Minecraft Server Owner"
              },
              {
                quote: "The Discord bot hosting is reliable and affordable. I was able to get my bot up and running within minutes.",
                author: "Sarah Miller",
                role: "Discord Community Manager"
              },
              {
                quote: "Their web hosting service is perfect for our gaming community website. Fast loading times and great support.",
                author: "Michael Rodriguez",
                role: "Gaming Community Founder"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-800 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="ml-0">
                    <svg className="h-8 w-8 text-blue-400 opacity-40" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-900/40 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold text-white mb-2">Ready to experience these features?</h2>
              <p className="text-gray-300 max-w-xl">
                Deploy your server in minutes and start enjoying all the benefits of Hostifun's premium hosting platform.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/pricing"
                className="py-3 px-6 bg-transparent border border-gray-600 hover:border-gray-400 text-white rounded-lg transition-colors whitespace-nowrap transform hover:-translate-y-1"
              >
                View Pricing
              </Link>
              <Link 
                href="/deploy"
                className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors whitespace-nowrap shadow-lg shadow-blue-700/20 transform hover:-translate-y-1"
              >
                Deploy Server
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage; 