import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '49',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI capabilities',
        'Email support',
        '5 AI templates',
        'Basic analytics',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '99',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI capabilities',
        'Priority support',
        '20 AI templates',
        'Advanced analytics',
        'Custom integrations',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '199',
      features: [
        'Unlimited conversations',
        'Full AI capabilities',
        '24/7 dedicated support',
        'Unlimited AI templates',
        'Custom analytics',
        'API access',
        'Custom development',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-20" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-blue-600 to-indigo-600 text-white'
                  : 'bg-white text-gray-900'
              } shadow-lg`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-lg">/month</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-full font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
