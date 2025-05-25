import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Podcast",
      description: "Search your podcast."
    },
    {
      number: "02",
      title: "AI Processing",
      description: "Our advanced AI analyzes the content to identify key points and valuable insights from the conversation."
    },
    {
      number: "03",
      title: "Review Summary",
      description: "Access both audio clips with original voices and written summaries highlighting the main takeaways."
    },
    {
      number: "04",
      title: "Save & Share",
      description: "Save your summaries for later reference or share them with friends and colleagues."
    }
  ];

  return (
    <div id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-secondary uppercase tracking-wide">Process</h2>
          <p className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">How Podclip Works</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Four simple steps to transform long podcasts into concise summaries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                <div className="text-3xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-4 w-8 h-0.5 bg-gray-200">
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-gray-200 transform rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
          <div className="md:flex items-center justify-between gap-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to try Podclip?</h3>
              <p className="text-gray-600 max-w-xl">
                Start saving time today by transforming your favorite long podcasts into concise, valuable summaries.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 