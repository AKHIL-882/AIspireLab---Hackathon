import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/download.png')" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl py-10 mt-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
        >
          <span className="block">Transform Your Business with</span>
          <span className="block text-blue-600">Intelligent AI SARA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl"
        >
          Revolutionize customer engagement with our advanced AI chatbot
          platform. Deliver personalized experiences that drive results.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#demo"
            className="px-8 py-3 text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
          >
            Request Demo
          </a>
          <a
            href="#features"
            className="px-8 py-3 text-base font-medium rounded-full text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative z-10 mt-10 w-full max-w-7xl"
      >
        <iframe
          className="w-full h-100 sm:h-96 md:h-[540px] rounded-lg shadow-lg"
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
