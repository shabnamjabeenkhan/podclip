import React from 'react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const monthlyFeatures = [
    "5 episodes per day",
    "60-day storage",
    "10-25 minute summaries",
    "Original voice summaries",
    "Written summaries and highlights",
    "Spotify integration",
    "MP3 upload capability",
    "Mobile access"
  ];

  const lifetimeFeatures = [
    "15 episodes per day",
    "Unlimited storage",
    "10-40 minute summaries",
    "Original voice summaries",
    "Written summaries and highlights",
    "Spotify integration",
    "MP3 upload capability",
    "Mobile access",
    "One-time payment"
  ];

  return (
    <div id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-secondary uppercase tracking-wide">Pricing</h2>
          <p className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Simple, Transparent Pricing</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose the plan that works best for your podcast listening needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Monthly Subscription */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
            <div className="p-8 sm:p-10">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-gray-900">Monthly Subscription</h3>
                <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Popular Choice</div>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold text-gray-900">£5.99</span>
                <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>
              </div>
              <p className="mt-2 text-gray-500">Perfect for regular podcast listeners who want to save time.</p>
              
              <div className="mt-6">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Start Free Trial
                </Button>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-900">What's included:</h4>
                <ul className="mt-4 space-y-4">
                  {monthlyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500">No long-term contracts. Cancel anytime.</p>
            </div>
          </div>

          {/* Lifetime Subscription */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-secondary h-full">
            <div className="p-8 sm:p-10">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-gray-900">Lifetime Access</h3>
                <div className="bg-secondary/20 text-secondary text-xs font-medium px-2.5 py-0.5 rounded">Best Value</div>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold text-gray-900">£29.99</span>
                <span className="ml-1 text-xl font-semibold text-gray-500">once</span>
              </div>
              <p className="mt-2 text-gray-500">Unlimited access with enhanced features at a one-time price.</p>
              
              <div className="mt-6">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  Get Lifetime Access
                </Button>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-900">What's included:</h4>
                <ul className="mt-4 space-y-4">
                  {lifetimeFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="px-6 py-4 bg-secondary/5 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500">One-time payment for lifetime access with enhanced features.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600">Need a custom solution for your team or organization?</p>
          <a href="#contact" className="text-secondary font-medium hover:underline">Contact us for enterprise pricing</a>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 