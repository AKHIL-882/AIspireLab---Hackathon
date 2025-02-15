import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-between w-full px-6 sm:px-10 md:px-16 bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/download.png')" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      {/* Left Section - Text Content */}
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left w-full max-w-lg mt-16 md:mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900"
        >
          <span className="block">Transform Your Business with</span>
          <span className="block text-blue-600">Intelligent AI SARA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-500"
        >
          Revolutionize customer engagement with our advanced AI chatbot platform.
          Deliver personalized experiences that drive results.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#demo"
            className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700"
          >
            Request Demo
          </a>
          <a
            href="#features"
            className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium rounded-full text-blue-600 bg-white hover:bg-gray-50"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Right Section - Video */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative z-10 w-full max-w-4xl mt-12 md:mt-0"
      >
        <iframe
          className="w-full h-48 sm:h-64 md:h-80 lg:h-[540px] rounded-lg shadow-lg mt-6"
          src="SARA-YC.mp4"
          title="SARA-YC Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Hero;
