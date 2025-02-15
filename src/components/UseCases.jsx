import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, BeakerIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/24/outline';

const UseCases = () => {
  const cases = [
    {
      icon: AcademicCapIcon,
      title: 'EdTech',
      description: 'Personalized learning assistance and student support available 24/7.',
      color: 'bg-blue-100',
    },
    {
      icon: BeakerIcon,
      title: 'IT Services',
      description: 'Automated technical support and system monitoring.',
      color: 'bg-green-100',
    },
    {
      icon: HeartIcon,
      title: 'HealthTech',
      description: 'Patient engagement and preliminary health assessments.',
      color: 'bg-red-100',
    },
    {
      icon: GlobeAltIcon,
      title: 'Travel',
      description: 'Instant booking assistance and travel recommendations.',
      color: 'bg-purple-100',
    },
  ];

  return (
    <section className="py-20" id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Industry Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover how AIspire Labs transforms various industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div
                className={`relative p-8 rounded-2xl ${case_.color} group-hover:bg-transparent transition-colors flex flex-col min-h-[250px] justify-between`}
              >
                <case_.icon className="h-12 w-12 text-blue-600 group-hover:text-white transition-colors" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-white transition-colors">
                  {case_.title}
                </h3>
                <p className="mt-2 text-gray-600 group-hover:text-white transition-colors">
                  {case_.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
