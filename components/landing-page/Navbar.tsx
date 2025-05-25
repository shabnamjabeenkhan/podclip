'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-[#131a2b] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-poppins font-bold text-2xl">
                <span className="text-blue-400">Pod</span><span className="text-indigo-600">clip</span>
              </span>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-foreground font-medium">Home</a>
            <a href="#pricing" className="text-gray-300 hover:text-foreground font-medium">Pricing</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-foreground font-medium">How It Works</a>
            <a href="#contact" className="text-gray-300 hover:text-foreground font-medium">Contact</a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-foreground hover:bg-slate-700"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1a223a] shadow-lg">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-foreground hover:bg-slate-700">Home</a>
          <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-foreground hover:bg-slate-700">Pricing</a>
          <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-foreground hover:bg-slate-700">How It Works</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-foreground hover:bg-slate-700">Contact</a>
          <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 