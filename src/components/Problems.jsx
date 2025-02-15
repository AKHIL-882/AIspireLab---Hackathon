import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleBottomCenterIcon, ExclamationTriangleIcon, ClockIcon } from '@heroicons/react/24/outline';

const Problems = () => {
    const problems = [
        {
            icon: ChatBubbleBottomCenterIcon,
            title: 'Poor User Experience',
            description: 'Traditional chatbots fail to understand context and provide generic responses.',
        },
        {
            icon: ExclamationTriangleIcon,
            title: 'Lack of Personalization',
            description: 'Most solutions offer one-size-fits-all approaches that don\'t adapt to user needs.',
        },
        {
            icon: ClockIcon,
            title: 'Inefficient Resolution',
            description: 'Long waiting times and multiple transfers lead to frustrated customers.',
        },
    ];

    return (
        <section className="py-20 bg-gray-50" id="problems">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-16">

                {/* Left side - Problems */}
                <div className="md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-left mb-8 md:mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Common Chatbot Challenges
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            We've identified and solved the major pain points in AI communication.
                        </p>
                    </motion.div>
                    <div className="space-y-6">
                        {problems.map((problem, index) => {
                            const Icon = problem.icon;
                            return (
                                <motion.div
                                    key={problem.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 flex items-start"
                                >
                                    <Icon className="h-12 w-12 text-blue-600 mr-4" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
                                        <p className="text-gray-600">{problem.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Right side - Image */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:w-2/5 flex justify-center mt-12 md:mt-0"
                >
                    <img src="2.jpeg" alt="Chatbot Issues" className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg h-[35rem]" />
                </motion.div>

            </div>
        </section>
    );
};

export default Problems;
