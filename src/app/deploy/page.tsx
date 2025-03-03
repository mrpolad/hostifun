"use client";

import { useState } from 'react';
import Link from 'next/link';

// Define service types and options
const SERVICE_TYPES = [
  { id: 'minecraft', name: 'Minecraft Server', 
    icon: <svg className="w-8 h-8 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg> 
  }
];

const MINECRAFT_VERSIONS = [
  'Vanilla 1.20.4',
  'Vanilla 1.19.4',
  'Paper 1.20.4',
  'Paper 1.19.4',
  'Spigot 1.20.4',
  'Spigot 1.19.4',
  'Forge 1.20.4',
  'Forge 1.19.4',
  'Fabric 1.20.4',
  'Fabric 1.19.4',
  'Bedrock 1.20.4',
];

const DISCORD_BOT_OPTIONS = [
  'Node.js',
  'Python',
  'Java',
  'C#',
  'Ruby',
  'Go',
];

const WEB_HOSTING_OPTIONS = [
  'WordPress',
  'PHP',
  'Static HTML',
  'Node.js',
  'Python Django',
  'Ruby on Rails',
];

const COMMON_MINECRAFT_MODS = [
  'Essentials',
  'WorldEdit',
  'Vault',
  'PermissionsEx',
  'LuckPerms',
  'CoreProtect',
  'GriefPrevention',
  'dynmap',
  'WorldGuard',
  'EssentialsChat',
];

const LOCATIONS = [
  { id: 'us-east', name: 'US East', city: 'New York' },
  { id: 'us-west', name: 'US West', city: 'Los Angeles' },
  { id: 'eu-west', name: 'EU West', city: 'London' },
  { id: 'eu-central', name: 'EU Central', city: 'Frankfurt' },
  { id: 'ap-east', name: 'Asia Pacific', city: 'Singapore' },
  { id: 'au-east', name: 'Australia', city: 'Sydney' },
];

const PLANS = {
  minecraft: [
    { id: 'mc-basic', name: 'Basic', ram: '1GB', price: 4.99, slots: 10 },
    { id: 'mc-standard', name: 'Standard', ram: '2GB', price: 7.99, slots: 20 },
    { id: 'mc-pro', name: 'Pro', ram: '4GB', price: 9.99, slots: 50 },
    { id: 'mc-elite', name: 'Elite', ram: '8GB', price: 19.99, slots: 100 },
    { id: 'mc-ultimate', name: 'Ultimate', ram: '16GB', price: 29.99, slots: 200 },
  ],
  'discord-bot': [
    { id: 'db-starter', name: 'Starter', ram: '512MB', price: 3.99, slots: 'Basic Bot' },
    { id: 'db-standard', name: 'Standard', ram: '1GB', price: 7.99, slots: 'Advanced Bot' },
    { id: 'db-premium', name: 'Premium', ram: '2GB', price: 14.99, slots: 'Multiple Bots' },
  ],
  'web-hosting': [
    { id: 'wh-basic', name: 'Basic', ram: '5GB Storage', price: 4.99, slots: '1 Website' },
    { id: 'wh-business', name: 'Business', ram: '20GB Storage', price: 9.99, slots: '5 Websites' },
    { id: 'wh-professional', name: 'Professional', ram: '50GB Storage', price: 19.99, slots: 'Unlimited' },
  ]
};

// Component for the server deploy page
const DeployPage = () => {
  // State for each step
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState('minecraft');
  const [version, setVersion] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [location, setLocation] = useState('');
  const [plan, setPlan] = useState('');
  const [serverName, setServerName] = useState('');
  const [serverDetails, setServerDetails] = useState({
    name: '',
    description: '',
    privacy: 'public',
    maxPlayers: 20,
    domain: '',
  });

  // Handle option selection
  const toggleMod = (mod: string) => {
    if (selectedOptions.includes(mod)) {
      setSelectedOptions(selectedOptions.filter(m => m !== mod));
    } else {
      setSelectedOptions([...selectedOptions, mod]);
    }
  };

  // Progress to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle server details change
  const handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setServerDetails({
      ...serverDetails,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form logic would go here
    alert("Your server deployment request has been submitted! You will receive an email confirmation shortly.");
  };

  // Get available options based on service type
  const getServiceOptions = () => {
    switch(serviceType) {
      case 'minecraft':
        return MINECRAFT_VERSIONS;
      case 'discord-bot':
        return DISCORD_BOT_OPTIONS;
      case 'web-hosting':
        return WEB_HOSTING_OPTIONS;
      default:
        return [];
    }
  };

  // Get available mods/plugins based on service type
  const getServiceAddons = () => {
    switch(serviceType) {
      case 'minecraft':
        return COMMON_MINECRAFT_MODS;
      default:
        return [];
    }
  };

  // Get available plans based on service type
  const getServicePlans = () => {
    return PLANS[serviceType as keyof typeof PLANS] || [];
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Deploy Your <span className="text-blue-400">Minecraft Server</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get your Minecraft server up and running in minutes with our easy deployment process.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center">
            {['Configuration', 'Location', 'Plan', 'Details', 'Review'].map((label, index) => {
              const stepNum = index + 1;
              return (
                <div key={stepNum} className="flex flex-col items-center">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${stepNum === step ? 'bg-blue-600' : stepNum < step ? 'bg-green-500' : 'bg-gray-700'}`}>
                    {stepNum < step ? (
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-white font-medium">{stepNum}</span>
                    )}
                  </div>
                  <span className={`mt-2 text-sm ${stepNum === step ? 'text-blue-400' : 'text-gray-400'}`}>{label}</span>
                </div>
              )
            })}
          </div>
          <div className="mt-4 h-2 bg-gray-700 rounded-full">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${(step-1) * 25}%` }}
            ></div>
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
          <div className="min-h-[400px]">
            {/* Step 1: Select version and mods */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Select Version & Mods
                </h2>
                
                <div className="mb-8">
                  <label className="block text-white text-lg font-medium mb-4">
                    Game Version
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {getServiceOptions().map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setVersion(opt)}
                        className={`px-4 py-3 rounded-lg border text-center ${
                          version === opt 
                            ? 'border-blue-500 bg-blue-900/20 text-white' 
                            : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-gray-800/80'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white text-lg font-medium mb-4">
                    Plugins / Mods (Optional)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {getServiceAddons().map((mod) => (
                      <button
                        key={mod}
                        type="button"
                        onClick={() => toggleMod(mod)}
                        className={`px-4 py-3 rounded-lg border text-center ${
                          selectedOptions.includes(mod) 
                            ? 'border-blue-500 bg-blue-900/20 text-white' 
                            : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-gray-800/80'
                        }`}
                      >
                        {mod}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Select Location */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Select Server Location</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {LOCATIONS.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setLocation(loc.id)}
                      className={`p-6 rounded-xl border ${
                        location === loc.id 
                          ? 'border-blue-500 bg-blue-900/20' 
                          : 'border-gray-700 bg-gray-800/50 hover:bg-gray-800/80'
                      } transition-colors`}
                    >
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-900/40 flex items-center justify-center mr-3">
                          <svg className="h-4 w-4 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white">{loc.name}</h3>
                      </div>
                      <p className="text-gray-300">{loc.city}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Select Plan */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Select Plan</h2>
                <div className="grid grid-cols-1 gap-4">
                  {PLANS.minecraft.map((planOption) => (
                    <button
                      key={planOption.id}
                      onClick={() => setPlan(planOption.id)}
                      className={`p-6 rounded-xl border ${
                        plan === planOption.id 
                          ? 'border-blue-500 bg-blue-900/20' 
                          : 'border-gray-700 bg-gray-800/50 hover:bg-gray-800/80'
                      } transition-colors`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{planOption.name}</h3>
                          <p className="text-gray-300 mt-1">
                            {planOption.ram} • {planOption.slots} slots
                          </p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                          <span className="text-2xl font-bold text-white">${planOption.price}</span>
                          <span className="text-gray-400">/month</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Configure Server Details */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Server Details</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white text-base font-medium mb-2">
                      Server Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={serverDetails.name} 
                      onChange={handleDetailsChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="My Awesome Server"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-white text-base font-medium mb-2">
                      Description (Optional)
                    </label>
                    <textarea 
                      id="description" 
                      name="description" 
                      value={serverDetails.description} 
                      onChange={handleDetailsChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Describe your server..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="maxPlayers" className="block text-white text-base font-medium mb-2">
                      Max Players
                    </label>
                    <input 
                      type="number" 
                      id="maxPlayers" 
                      name="maxPlayers" 
                      value={serverDetails.maxPlayers} 
                      onChange={handleDetailsChange}
                      min="1"
                      max="200"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="privacy" className="block text-white text-base font-medium mb-2">
                      Privacy
                    </label>
                    <select 
                      id="privacy" 
                      name="privacy" 
                      value={serverDetails.privacy} 
                      onChange={handleDetailsChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Review and Confirm */}
            {step === 5 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Review and Confirm</h2>
                
                <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Order Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Service Type:</span>
                      <span className="text-white font-medium">
                        Minecraft Server
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-300">Version:</span>
                      <span className="text-white font-medium">{version}</span>
                    </div>
                    
                    {selectedOptions.length > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-300">Mods/Plugins:</span>
                        <span className="text-white font-medium">{selectedOptions.length} selected</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-gray-300">Location:</span>
                      <span className="text-white font-medium">
                        {LOCATIONS.find(l => l.id === location)?.name} ({LOCATIONS.find(l => l.id === location)?.city})
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-300">Plan:</span>
                      <span className="text-white font-medium">
                        {PLANS.minecraft.find(p => p.id === plan)?.name} (${PLANS.minecraft.find(p => p.id === plan)?.price}/month)
                      </span>
                    </div>

                    <div className="border-t border-gray-700 pt-4 mt-4"></div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-300">Server Name:</span>
                      <span className="text-white font-medium">{serverDetails.name}</span>
                    </div>
                    
                    <div className="border-t border-gray-700 pt-4 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg text-gray-300">Total:</span>
                        <span className="text-2xl font-bold text-white">${PLANS.minecraft.find(p => p.id === plan)?.price}/month</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={handleSubmit}
                  className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
                >
                  Confirm & Deploy
                </button>
              </div>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800"
              >
                Back
              </button>
            )}
            
            {step < 5 && (
              <button
                onClick={nextStep}
                disabled={
                  (step === 1 && !version) ||
                  (step === 2 && !location) ||
                  (step === 3 && !plan) ||
                  (step === 4 && !serverDetails.name)
                }
                className={`px-6 py-3 rounded-lg ${
                  ((step === 1 && !version) ||
                  (step === 2 && !location) ||
                  (step === 3 && !plan) ||
                  (step === 4 && !serverDetails.name))
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Continue
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeployPage; 