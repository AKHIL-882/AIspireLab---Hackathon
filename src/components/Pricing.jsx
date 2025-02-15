import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$12,500',
      features: ['2 users', '15 events', '60 min length'],
      highlighted: false,
      size: 'h-80',
    },    
    {
      name: 'Pro',
      price: "Let's talk",
      features: ['8 users', 'Unlimited events', 'Unlimited length'],
      highlighted: true,
      size: 'h-96',
    },
    {
      name: 'Enterprise',
      price: "Let's talk",
      features: ['Custom number of users', 'Unlimited events', 'Unlimited length'],
      highlighted: false,
      size: 'h-[28rem]',
    },
  ];

  return (
    <section className="py-20 flex justify-center items-center bg-white-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-2">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
          Choose the perfect plan for your business
          </p>
        </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-end space-y-8 md:space-y-0 md:space-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative w-full md:w-64 ${plan.size} rounded-t-full p-8 bg-gradient-to-b from-blue-400 to-indigo-700 text-white shadow-lg`}
            >
              <h3 className="text-xl font-bold text-center">{plan.name}</h3>
              <div className="text-center text-3xl font-semibold my-6">{plan.price}</div>
              <div className="mt-6 flex justify-center">
                <button className="py-2 px-6 rounded-full bg-white text-indigo-700 font-semibold hover:bg-gray-200 transition mb-4">
                  Book a demo
                </button>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 mr-2 text-green-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
