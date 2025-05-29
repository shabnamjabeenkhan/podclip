'use client';

import { Button } from '@/components/ui/button';
import { SignUpButton } from "@clerk/nextjs";

const AudioWave = () => {
  return (
    <div className="flex items-end h-12 stagger-wave gap-[2px]">
      {Array(20).fill(0).map((_, i) => (
        <div 
          key={i} 
          className="audio-wave w-1.5" 
          style={{ 
            height: `${Math.random() * 30 + 10}px`,
            animationDelay: `${i * 0.05}s`
          }} 
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden bg-[#131a2b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
            <span className="text-[white]">Smart</span> Podcast<br />
            Summaries,<br />
            <span className="text-[#4b4acf]">Your Time Back</span>
          </h1>
          
          <p className="text-white text-xl lg:text-2xl max-w-3xl mx-auto mb-12">
            Transform 2-hour podcasts into 20-minute highlights 
            with the original voices intact. Get the essence without 
            the time investment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignUpButton mode="modal">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white text-white px-8 py-6 text-lg font-medium rounded-lg"
              size="lg"
            >
              Get Started
            </Button>
            </SignUpButton>
            {/* <Button 
              variant="outline"
              className="bg-[#3d3434] text-gray-300 hover:bg-white/90 border-white px-8 py-6 text-lg font-medium rounded-lg"
              size="lg"
            >
              Learn More
            </Button> */}
          </div>
        </div>
      </div>

      {/* Optional: Add a subtle gradient background effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-purple-50/50 to-white" />
    </section>
  );
};

export default Hero; 