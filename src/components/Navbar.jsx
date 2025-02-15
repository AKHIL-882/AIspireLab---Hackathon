import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-blue-600 shadow-lg' : 'bg-white/80 backdrop-blur-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="https://aispirelabs.com/assets/AIspireLabsLogo-qAYgMtr4.png"
              height={60}
              width={40}
              alt="AIspire Labs Logo"
            />
            <span
              className={`text-2xl font-bold block px-3 py-2 transition-colors ${scrolled ? 'text-white' : 'text-blue-600 hover:text-blue-600'
                }`}
            >
              AIspire Labs
            </span>

          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors ${scrolled ? 'text-white' : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${scrolled ? 'text-white' : 'text-gray-600 hover:text-blue-600'
                }`}
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={`md:hidden transition-all ${scrolled ? 'bg-blue-600' : 'bg-white'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 transition-colors ${scrolled ? 'text-white' : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-2 bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
