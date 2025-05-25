import React from 'react';
import { History } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Save 75% of Your Time",
      description: "Get the key insights from 2-hour podcasts in just 20-25 minutes without losing content quality."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
        </svg>
      ),
      title: "Original Voices Preserved",
      description: "Listen to the actual podcast hosts and guests, not AI-generated voices or boring text-to-speech."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
      title: "Written Summaries Included",
      description: "Get both audio clips and text summaries highlighting the main points and key takeaways."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Fast Processing",
      description: "Our advanced AI quickly processes podcasts so you can get the summary when you need it."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
        </svg>
      ),
      title: "Easy Upload & Integration",
      description: "Upload MP3 files or integrate with Spotify to access your favorite podcasts directly."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Mobile-Friendly Access",
      description: "Access your summaries on any device, anytime, anywhere for maximum convenience."
    }
  ];

  const useCase = {
    academic: {
      title: "Perfect for Academia",
      description: "Students can extract key points from historical podcasts and academic lectures, making research and study more efficient.",
      examples: ["History lectures", "Scientific discussions", "Literary analyses"]
    },
    historical: {
      title: "Historical Insights for Students",
      description: "Transform how you study history by extracting key facts, dates, and insights from historical podcasts in minutes.",
      benefits: [
        "Focus on critical historical events and timelines",
        "Extract expert analysis from historians and professors",
        "Save hours of listening while still capturing essential context",
        "Create concise study notes with key historical figures and events"
      ]
    },
    genres: [
      {
        name: "Mental Health",
        description: "Get the essential advice and insights without the emotional drain of full-length episodes."
      },
      {
        name: "True Crime",
        description: "Extract critical case details and key evidence without sifting through hours of content."
      },
      {
        name: "Tech & Science",
        description: "Stay updated with the latest innovations and research findings in digestible formats."
      },
      {
        name: "Educational Podcasts",
        description: "Transform complex educational content into concise learning materials with key concepts highlighted."
      },
      {
        name: "Autobiographies",
        description: "Capture inspirational life stories and key learning moments in a fraction of the time."
      },
      {
        name: "Book Reviews",
        description: "Get concise analyses and main takeaways from literary discussions and recommendations."
      }
    ]
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-secondary uppercase tracking-wide">Features</h2>
          <p className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Everything you need to save time</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Get the most out of your podcast listening experience with these powerful features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Academic Use Case Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-secondary uppercase tracking-wide">For Students & Researchers</h2>
            <p className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">{useCase.academic.title}</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {useCase.academic.description}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="md:w-full">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">Academic Excellence</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Students can extract core concepts from academic podcasts and lectures, making study sessions more productive and focused on key learning objectives.
              </p>
              <ul className="space-y-3">
                {useCase.academic.examples.map((example, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">{example}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Historical Podcasts for Students Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-secondary uppercase tracking-wide">For History Students</h2>
            <p className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">{useCase.historical.title}</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {useCase.historical.description}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="md:w-full">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <History className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">Historical Learning</h3>
              </div>
              <p className="text-gray-600 mb-6">
                History students can transform hours of historical podcast content into concise, focused summaries highlighting key dates, figures, and events relevant to their studies.
              </p>
              <ul className="space-y-3">
                {useCase.historical.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Podcast Genre Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-secondary uppercase tracking-wide">Versatile Applications</h2>
            <p className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Perfect For Every Podcast Genre</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              No matter what you listen to, Podclip helps you get more from your favorite content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCase.genres.map((genre, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{genre.name} Podcasts</h3>
                <p className="text-gray-500">{genre.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 