import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center -mt-2">
            <img 
              src="/images/logo.png"
              alt="UrbanUp Logo" 
              className="h-24 sm:h-28 md:h-32 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-green-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-green-400 transition-colors"
            >
              Feature
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-white hover:text-green-400 transition-colors"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-green-400 transition-colors"
            >
              Testimonials
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md rounded-lg mb-4">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-white hover:text-green-400 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block text-white hover:text-green-400 transition-colors"
              >
                Feature
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block text-white hover:text-green-400 transition-colors"
              >
                How it works
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-white hover:text-green-400 transition-colors"
              >
                Testimonials
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;