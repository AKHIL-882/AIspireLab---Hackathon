import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4">AIspire Labs</h3>
            <p className="text-gray-400">
              Transforming businesses with intelligent AI solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#use-cases" className="text-gray-400 hover:text-white">Use Cases</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#twitter" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="#linkedin" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="#github" className="text-gray-400 hover:text-white">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 AIspire Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
