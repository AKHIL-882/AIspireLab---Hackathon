import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      content: "AIspire Labs has transformed our customer service operations. The AI chatbot handles 70% of inquiries automatically!",
      author: "Sarah Johnson",
      role: "Customer Service Director",
      company: "TechCorp Inc.",
      image: "https://tinyjpg.com/images/social/website.jpg",
    },
    {
      content: "Implementation was smooth, and the results were immediate. Our student satisfaction ratings improved by 45%.",
      author: "Michael Chen",
      role: "Dean of Technology",
      company: "Global University",
      image: "https://tinyjpg.com/images/social/website.jpg",
    },
    {
      content: "The most intelligent AI solution we've used. It's like having a human team working 24/7.",
      author: "Emma Williams",
      role: "Head of Innovation",
      company: "Future Systems",
      image: "https://tinyjpg.com/images/social/website.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Customer Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our clients say about their experience with AIspire Labs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
