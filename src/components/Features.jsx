import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, CpuChipIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      name: 'Advanced AI Processing',
      description: 'Powered by state-of-the-art language models for human-like interactions.',
      icon: CpuChipIcon,
    },
    {
      name: 'Natural Conversations',
      description: 'Contextual understanding for more meaningful and relevant responses.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      name: 'Smart Automation',
      description: 'Intelligent workflow automation to handle complex tasks efficiently.',
      icon: SparklesIcon,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the next generation of AI-powered communication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl" />
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
