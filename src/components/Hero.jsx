import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span className="block">Transform Your Business with</span>
            <span className="block text-blue-600">Intelligent AI SARA</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Revolutionize customer engagement with our advanced AI chatbot platform.
            Deliver personalized experiences that drive results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
          >
            <div className="rounded-md shadow">
              <a
                href="#demo"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Request Demo
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#features"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
