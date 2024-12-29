import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              TechVision
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#features" className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#about" className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#contact" className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <a href="https://github.com" className="flex items-center gap-1 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#home" className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#features" className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#about" className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#contact" className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <a href="https://github.com" className="flex items-center gap-1 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}